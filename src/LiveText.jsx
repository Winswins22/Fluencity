import React from 'react'

const accessToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVUTRNemhDUVVWQk1rTkJNemszUTBNMlFVVTRRekkyUmpWQ056VTJRelUxUTBVeE5EZzFNUSJ9.eyJodHRwczovL3BsYXRmb3JtLnN5bWJsLmFpL3VzZXJJZCI6IjQ3MDM1NjUxNjg3NzEwNzIiLCJpc3MiOiJodHRwczovL2RpcmVjdC1wbGF0Zm9ybS5hdXRoMC5jb20vIiwic3ViIjoiOUJ4NmtxaFk5MGFwRTdjZmtwWnZBdlVLNTY0SHl0UFdAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcGxhdGZvcm0ucmFtbWVyLmFpIiwiaWF0IjoxNjI4MzQyMDM2LCJleHAiOjE2Mjg0Mjg0MzYsImF6cCI6IjlCeDZrcWhZOTBhcEU3Y2ZrcFp2QXZVSzU2NEh5dFBXIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.NR8IfNT9dB5CQu5PnxyTx1w5m13iFG0gYE12wm9mMFC3cyn9QYdc8aPBuyZZo0RoqwjJWo07RxNBTD2mfbojuUE7v20ZUytGU6FUFP1OLaMaCs3UsoqG7nUCmgHUCwlY2Tnix8hhDBDr7m4vYTod3FgOKCmwNItipX4ifejL39tOxQtTfGbxm4aH78pJrbIo0OAfhlIRF_q1XCaZif_0kUrLH4oEFiEJdE_ceaDjl02vwiSVy32L5Zp_QjpPdaPxnjv9DsAd5-8cRx3SxcIeXmAqX1TCOXmYt1uT1mhLmb3SfclPPhAIOOcK5CCNWTeMPJx0xNDPqa8kFaPwXssigA";
const uniqueMeetingId = btoa("user@example.com");
const symblEndpoint = `wss://api.symbl.ai/v1/realtime/insights/${uniqueMeetingId}?access_token=${accessToken}`;

const LiveText = () => {

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
        console.log('Transcript (more accurate): ', message.payload.content);
      }
    }
    if (data.type === 'topic_response') {
      for (let topic of data.topics) {
        console.log('Topic detected: ', topic.phrases)
      }
    }
    if (data.type === 'insight_response') {
      for (let insight of data.insights) {
        console.log('Insight detected: ', insight.payload.content);
      }
    }
    if (data.type === 'message' && data.message.hasOwnProperty('punctuated')) {
      console.log('Live transcript (less accurate): ', data.message.punctuated.transcript)
    }
    console.log(`Response type: ${data.type}. Object: `, data);
  };

  // Fired when the WebSocket closes unexpectedly due to an error or lost connetion
  ws.onerror  = (err) => {
    console.error(err);
  };

  // Fired when the WebSocket connection has been closed
  // ws.onclose = (event) => {
  //   console.info('Connection to websocket closed');
  // };

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

  let stream = null;

  function createStreamAsync(){
    return new Promise((resolve, reject) => {
      stream = navigator.mediaDevices.getUserMedia({ audio: true, video: false })

      if (stream !== null){
        resolve()
        console.log("Create stream success.", stream)
      }
      else{
        console.log("Create stream failed.")
        reject()
      }
    })
  }

  function createStream(){
    stream = navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    console.log("createStream", stream)


    initStream()
  }

    /**
   * The callback function which fires after a user gives the browser permission to use
   * the computer's microphone. Starts a recording session which sends the audio stream to
   * the WebSocket endpoint for processing.
   */
  const initStream = () => {

    stream = navigator.mediaDevices.getUserMedia({ audio: true, video: false })
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
      }
    };
  };


  // createStreamAsync()
  //   .then(initStream())
  //   .catch(err => console.log("err;", err))

  // createStream()

  initStream()

  return(
    <>

    </>
  )
}

export default LiveText

