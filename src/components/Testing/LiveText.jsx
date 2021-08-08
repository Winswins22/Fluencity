import React, { useState, useEffect, useRef } from 'react'
import GetText from './GetText'

import Button from '@material-ui/core/Button';

const accessToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVUTRNemhDUVVWQk1rTkJNemszUTBNMlFVVTRRekkyUmpWQ056VTJRelUxUTBVeE5EZzFNUSJ9.eyJodHRwczovL3BsYXRmb3JtLnN5bWJsLmFpL3VzZXJJZCI6IjYzOTU3ODA5NDEyMTc3OTIiLCJpc3MiOiJodHRwczovL2RpcmVjdC1wbGF0Zm9ybS5hdXRoMC5jb20vIiwic3ViIjoiZFZQR2Z4SXlVSW53WG9kbnJZRzgyNTE3ZUFlTzNaRFNAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcGxhdGZvcm0ucmFtbWVyLmFpIiwiaWF0IjoxNjI4NDA4ODM4LCJleHAiOjE2Mjg0OTUyMzgsImF6cCI6ImRWUEdmeEl5VUlud1hvZG5yWUc4MjUxN2VBZU8zWkRTIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.ewpZNbUUSDa66nt9Pdl5OVzwZLZ9039wIsJ7VsMneMILHHqsBUNipYOma836FNFAVQLGr1UgvPtAWhXpny5KW_SDPYJ7v1L6BTjYdj0QgXSK_dHFAl2AB3YfA8lkm5E4AV8moCueXixv4tGmxjJnV7xU7q_dx0Id-Do455-tI_Zu9DY8HGfbLFGNaYuSeFV7fvCH6ycj195C1FyXC-iDCh0aECORaQEpseNGmF2TNlDRZ6u2o6QsW7LfxbhtHby5dRs-aMG2uu3vz7Ppb24hCdCHAD2V7l-cI0B3PqvHxPu9mje70WYtw6C9XCSO9NGhoCrp39KNgEgS6D3UZg0QgQ"
const uniqueMeetingId = btoa("user@example.com");
const symblEndpoint = `wss://api.symbl.ai/v1/realtime/insights/${uniqueMeetingId}?access_token=${accessToken}`;

// verbose: Log every message (very spammy)
const LiveText = ({state, setState, difficulty = 1, verbose = true}) => {

  const ogState = state;

  //VerifyText component
  const [prevMessage, setPrevMessage] = useState("")
  const [message, setMessage] = useState("");
  //const message = useRef("");

  const [items, setItems] = useState(GetText(difficulty))
  const readyRef = useRef(false)
  const title = items.title

  const wordsToDisplay = items.text.split(" ")
  const wordsToSay = items.text.split(/[ ,]+/)

  const [currentIndex, setIndex] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [wrong, setWrong] = useState(0)

  function finishState(){
    setState({
      duration: 0,
      Level: ogState.Level,
      results: {
        wpm: Math.round((correct+wrong)/ogState.duration),
        acc: Math.round(correct/(correct+wrong)).toString(),
        result: Math.round((correct+wrong)/ogState.duration) * Math.round(correct/(correct+wrong)).toString()
      }
    })

    console.warn("finishState", {
      duration: 0,
      Level: ogState.Level,
      results: {
        wpm: Math.round((correct+wrong)/ogState.duration),
        acc: Math.round(correct/(correct+wrong)).toString(),
        result: Math.round((correct+wrong)/ogState.duration) * Math.round(correct/(correct+wrong)).toString()
      }
    })
  }

  setTimeout(() => {
    alert("via timeout")
    finishState()
  }, state.duration * 1000)

  function extractNewWords(){
    console.log("extractNewWords", message, prevMessage)
    if (message === prevMessage){
      console.log("extractNewWords nothing")
      return ""
    }
    else{
      if (message.length < prevMessage.length){
        console.log("extractNewWords", message.split(" "))
        return message.split(" ")
      }
      else if (message.length > prevMessage.length){
        let msg = message
        console.log("extractNewWords", msg.replace(prevMessage, "").split(" "))
        return msg.replace(prevMessage, "").split(" ")
      }
    }
  }

  

  function outputWords(){
    return (
      <div style={{marginTop:"20vh"}}>
        {
          wordsToDisplay.map((word) => {
          return(
            <>
              
              <h2 style={{display: "inline"}}> {word} </h2>
              
            </>
          )
          })
        }
      </div>
    )
  }












  // LiveText component
  const [active, setActive] = useState(false)

  const [msg, setMsg] = useState()
  const [accurateMsg, setAccMsg] = useState()

  const [bestMsg, setBestMsg] = useState("")

  function getMessage() {
    if (msg && accurateMsg) {
      if (accurateMsg.length === msg.length) {
        setBestMsg(accurateMsg)
        return accurateMsg
      }
      else {
        setBestMsg(msg)
        return msg
      }
    }
    else if (msg) {
      setBestMsg(msg)
      return msg
    }

    if (active && readyRef) {
      return "(Say something!)"
    }
    else if (active && !readyRef) {
      return "(Initializing)"
    }
    else if (!active) {
      return "(Enable the Websocket)"
    }
    return ""
  }

  function checkWords(){

    if (currentIndex === wordsToSay.length){
      alert("via length")
      finishState()
    }

    let arry = bestMsg.split(" ");

    for (let i = 0; i < arry.length; i ++){
      if (arry[i].toLowerCase === wordsToSay[currentIndex].toLowerCase){
        setCorrect(correct + 1)
        setIndex(currentIndex + 1)
        return
      }
    }
    setWrong(wrong + 1)
    setIndex(currentIndex + 1)
    return
    
  }

  useEffect(() => {
    checkWords()
  }, [bestMsg])

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
        if (verbose) {
          console.log('Transcript (more accurate): ', message.payload.content);
        }
        setAccMsg(message.payload.content)
      }
    }
    if (data.type === 'topic_response') {
      for (let topic of data.topics) {
        if (verbose) {
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
      if (verbose) {
        console.log('Live transcript (less accurate): ', data.message.punctuated.transcript)
      }
      setMsg(data.message.punctuated.transcript)
    }
    // console.log(`Response type: ${data.type}. Object: `, data);
  };

  // Fired when the WebSocket closes unexpectedly due to an error or lost connetion
  ws.onerror = (err) => {
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

  window.onbeforeunload = function () {
    ws.onclose = function () { }; // disable onclose handler first
    ws.close();
  };

  function start() {

    console.log("Starting Websocket")
    setActive(true)

    navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      .then(function (stream) {
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
            readyRef.current = true;
            // alert("Ready")
            console.info("Ready!")
          }
        };
      })
      .catch(function (err) {
        console.log("err", err)
      });
  }

  function stop() {
    if (ws) {
      console.log("Closing Websocket")
      ws.close()
      setActive(false)
      readyRef.current = false;
      setAccMsg(null)
      setMsg(null)
    }
  }

  // async function useStream() {
  //   let stream = null;

  //   try {
  //     stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
  //     /* use the stream */
  //     initStream()
  //   } catch(err) {
  //     /* handle the error */
  //     console.log("getMedia error:", err)
  //   }
  // }

  // useStream()


  // createStreamAsync()
  //   .then(initStream())
  //   .catch(err => console.log("err;", err))

  // createStream()

  useEffect(() => {
    setPrevMessage(message)
    setMessage(getMessage())
  }, [msg, accurateMsg])

  return(
  <>
    <h2> {getMessage()} </h2>

    {
      !active ?
        <Button variant="contained" color="primary" onClick={() => start()}>
          Start!
        </Button>
      :
        <Button variant="contained" color="secondary" onClick={() => stop()}>
          Stop!
        </Button>
    }

    {
      outputWords()
    }
    </>
  )
}

export default LiveText