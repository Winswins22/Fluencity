// This component creates a websocket to symbl.ai.

import React, { useState, useEffect } from 'react'

import Button from '@material-ui/core/Button';

const accessToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVUTRNemhDUVVWQk1rTkJNemszUTBNMlFVVTRRekkyUmpWQ056VTJRelUxUTBVeE5EZzFNUSJ9.eyJodHRwczovL3BsYXRmb3JtLnN5bWJsLmFpL3VzZXJJZCI6IjY2NzQ1OTgxMzg0Nzg1OTIiLCJpc3MiOiJodHRwczovL2RpcmVjdC1wbGF0Zm9ybS5hdXRoMC5jb20vIiwic3ViIjoieU9vM3hNTUZYaTE2YXdiRjFzdk9IallleE9VaHhVTVBAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcGxhdGZvcm0ucmFtbWVyLmFpIiwiaWF0IjoxNjI4Mjk2NDMzLCJleHAiOjE2MjgzODI4MzMsImF6cCI6InlPbzN4TU1GWGkxNmF3YkYxc3ZPSGpZZXhPVWh4VU1QIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.f0WNHMC9U6WqI-V4j-mxd3PnaOia9Q9WUYgY5SW9p_Jj9rokxszSfESEA6mNFeEXA3cO9ioR5Zd-STKvcvwoZ2GmVNSDTCSQ0hR0ZpJc8wbmES65hEuJ2pPRaXSDLJs_d66nrtTJd8VB5DBk6v7vqBfDFAmRRBCZfsggxPomIancpo0BbXLrsso2pTwbw-SmDgQItaN6fhGg-T_N3SMsrD3rpZft6awa5wloY3n8UAhxQ-fgZLUEWAtOnfE-IfWPFDnA-Ztj1dcoy0enb_x2aYFHy6jwT491GRwLLtoLNq2rk-rpW04BYrGHA_c_DvZBeWKPgvGl0WSKCUBtzDJegA";
const uniqueMeetingId = btoa("user@example.com");
const symblEndpoint = `wss://api.symbl.ai/v1/realtime/insights/${uniqueMeetingId}?access_token=${accessToken}`;

// setMessage: a state setter to upload messages to parent
// setReady: a state setter to upload ready state to parent
// verbose: Log every message (very spammy)
const LiveText = (setMessage, setReady, verbose = false) => {

  const [active, setActive] = useState(false)

  const [msg, setMsg] = useState()
  const [accurateMsg, setAccMsg] = useState()

  function getMessage(){
    if (msg && accurateMsg){
      if (accurateMsg.length === msg.length){
        return accurateMsg
      }
      else{
        return msg
      }
    }
    else if (msg){
      return msg
    }
    
    return ""
  }

  useEffect(() => {
    setMessage(getMessage())
  }, [msg, accurateMsg])

  const ws = new WebSocket(symblEndpoint);

  // Fired when a message is received from the WebSocket server
  ws.onmessage = (event) => {
    // You can find the conversationId in event.message.data.conversationId;
    const data = JSON.parse(event.data);
    if (data.type === 'message' && data.message.hasOwnProperty('data')) {
      console.log('conversationId', data.message.data.conversationId);
    }
    if (data.type === 'message_response') {
      for (let message of data.messages) {
        if (verbose){
          console.log('Transcript (more accurate): ', message.payload.content);
        }
        setAccMsg(message.payload.content)
      }
    }
    if (data.type === 'topic_response') {
      for (let topic of data.topics) {
        if (verbose){
          console.log('Topic detected: ', topic.phrases)
        }
      }
    }
    if (data.type === 'insight_response') {
      for (let insight of data.insights) {
        console.log('Insight detected: ', insight.payload.content);
      }
    }
    if (data.type === 'message' && data.message.hasOwnProperty('punctuated')) {
      if (verbose){
        console.log('Live transcript (less accurate): ', data.message.punctuated.transcript)
      }
      setMsg(data.message.punctuated.transcript)
    }
    // console.log(`Response type: ${data.type}. Object: `, data);
  };

  // Fired when the WebSocket closes unexpectedly due to an error or lost connetion
  ws.onerror  = (err) => {
    console.error(err);
  };

  // Fired when the WebSocket connection has been closed
  ws.onclose = (event) => {
    console.info('Connection to websocket closed');
  };

  // Fired when the connection succeeds.
  ws.onopen = (event) => {
    ws.send(JSON.stringify({
      type: 'start_request',
      meetingTitle: 'Websockets How-to', // Conversation name
      insightTypes: ['question', 'action_item'], // Will enable insight generation
      config: {
        confidenceThreshold: 0.5,
        languageCode: 'en-US',
        speechRecognition: {
          encoding: 'LINEAR16',
          sampleRateHertz: 44100,
        }
      },
      speaker: {
        userId: 'example@symbl.ai',
        name: 'Example Sample',
      }
    }));
  };

  window.onbeforeunload = function() {
    ws.onclose = function () {}; // disable onclose handler first
    ws.close();
  };

  function start(){

    console.log("Starting Websocket")
    setActive(true)

    navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then(function(stream){
      // stream = navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      console.log("Stream is", stream)
      
      const AudioContext = window.AudioContext;
      const context = new AudioContext();
      const source = context.createMediaStreamSource(stream);
      const processor = context.createScriptProcessor(1024, 1, 1);
      const gainNode = context.createGain();
      source.connect(gainNode);
      gainNode.connect(processor);
      processor.connect(context.destination);
      processor.onaudioprocess = (e) => {
        // convert to 16-bit payload
        const inputData = e.inputBuffer.getChannelData(0) || new Float32Array(this.bufferSize);
        const targetBuffer = new Int16Array(inputData.length);
        for (let index = inputData.length; index > 0; index--) {
            targetBuffer[index] = 32767 * Math.min(1, inputData[index]);
        }
        // Send audio stream to websocket.
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(targetBuffer.buffer);
          setReady(true)
        }
      };
    })
    .catch(function(err) {
      console.log("err", err)
    });
  }

  function stop(){
    if (ws){
      console.log("Closing Websocket")
      ws.close()
      setActive(false)
      setReady(false)
      setAccMsg(null)
      setMsg(null)
    }
  }

  // return(
  // <>
    
  //   <h1> You said .... </h1>
  //   <h2> {getMessage()} </h2>

  //   {
  //     !active ?
  //       <Button variant="contained" color="primary" onClick={() => start()}>
  //         Start!
  //       </Button>
  //     :
  //       <Button variant="contained" color="secondary" onClick={() => stop()}>
  //         Stop!
  //       </Button>
  //   }
  //   </>
  // )
  
  start()

  return(
    <></>
  )

}

export default LiveText