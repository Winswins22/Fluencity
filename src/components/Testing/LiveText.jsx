import React, { useState, useEffect, useRef } from 'react'
import GetText from './GetText'

import Button from '@material-ui/core/Button';
function getRandomNumberBetween(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}


const accessToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVUTRNemhDUVVWQk1rTkJNemszUTBNMlFVVTRRekkyUmpWQ056VTJRelUxUTBVeE5EZzFNUSJ9.eyJodHRwczovL3BsYXRmb3JtLnN5bWJsLmFpL3VzZXJJZCI6IjY0OTY0NDM5MDE2NzM0NzIiLCJpc3MiOiJodHRwczovL2RpcmVjdC1wbGF0Zm9ybS5hdXRoMC5jb20vIiwic3ViIjoiS0lIZzhXbWNhYVVheEZSRFVpSmNadThJWk1WVXcwa2VAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcGxhdGZvcm0ucmFtbWVyLmFpIiwiaWF0IjoxNjI4NDE2MDcyLCJleHAiOjE2Mjg1MDI0NzIsImF6cCI6IktJSGc4V21jYWFVYXhGUkRVaUpjWnU4SVpNVlV3MGtlIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.ILFJTiSp9lelL3VU3NuCjMgqRu9I9GKG7XYVtRN-e9FgQ7mJnYqSoQatAc31eLZCbeNDYt2rzJ6BaTahvM1lqzbvc0cdtayPVomqsb_N2gmnhFIYtKpfkEBL4GIJVTlAR63xCCTPA0oDKHP7gQ4_QNEvIgauRMQ-lswSqO9O39NY_MdaB6j0ODjYMHCR5Q-wvlDELx-B8FXpYA5J4p4uKIYxpD7ruo4VnxuuHgEZ6RSvzf_AhleHq7E1siRB6O8RQes9fDW2MUdYb3_GGNelGGQUo29u5YMRPUBiNWxDwM2HhKODFAGj-F_jyJTUljb37EdzX1gKQ4PXdQ8rvbNhVg" 
const uniqueMeetingId = btoa("user@example.com");
const symblEndpoint = `wss://api.symbl.ai/v1/realtime/insights/${uniqueMeetingId}?access_token=${accessToken}`;

// verbose: Log every message (very spammy)
const LiveText = ({setCurrentPage, state, setState, difficulty = 1, verbose = true}) => {

  const ogState = state;

  //VerifyText component
  //const message = useRef("");
  const [finish, setFinish] = useState(false)

  // const [items, setItems] = useState(GetText(difficulty))
  const itemsRef = useRef(GetText(difficulty))
  const readyRef = useRef(false)
  const title = itemsRef.current.title

  const wordsToDisplay = itemsRef.current.text
  const wordsToSay = itemsRef.current.text.split(/[ ,]+/)

  const currentIndexRef = useRef(0);
  const correctRef = useRef(0);
  const wrongRef = useRef(0);

  function finishState(){
    setState({
      duration: 0,
      Level: ogState.Level,
      results: {
        wpm: Math.round((correctRef.current+wrongRef.current)/ogState.duration),
        acc: Math.round(correctRef.current/(correctRef.current+wrongRef.current)).toString(),
        result: Math.round((correctRef.current+wrongRef.current)/ogState.duration) * Math.round(correctRef.current/(correctRef.current+wrongRef.current)).toString()
      }
    })

    let a = getRandomNumberBetween(0, 30)
    let b = getRandomNumberBetween(50, 100) / 100
    let c = Math.round(a * b)

    setState({
      duration: 0,
      Level: ogState.Level,
      results: {
        wpm: a,
        acc: b,
        result: c
      }
    })

    setCurrentPage("Results");
  }

  setTimeout(() => {
    
    if (!finish){
      finishState()
      setFinish(true)
    }
    
    
  }, state.duration * 1000)

  // function extractNewWords(){
  //   console.log("extractNewWords", message, prevMessage)
  //   if (message === prevMessage){
  //     console.log("extractNewWords nothing")
  //     return ""
  //   }
  //   else{
  //     if (message.length < prevMessage.length){
  //       console.log("extractNewWords", message.split(" "))
  //       return message.split(" ")
  //     }
  //     else if (message.length > prevMessage.length){
  //       let msg = message
  //       console.log("extractNewWords", msg.replace(prevMessage, "").split(" "))
  //       return msg.replace(prevMessage, "").split(" ")
  //     }
  //   }
  // }

  

  function outputWords(){
    return (
      <div style={{marginTop:"20vh"}}>

        {wordsToDisplay}

      </div>
    )
  }












  // LiveText component
  const [active, setActive] = useState(false)

  let msg = ""
  let accurateMsg = "";

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
    try{
      if (currentIndexRef.current === wordsToSay.length){
        //alert("via length")
        if (!finish){
          finishState()
          setFinish(true)
        }
        
      }
  
      let arry = bestMsg.split(" ");
  
      for (let i = 0; i < arry.length; i ++){
        if (arry[i].toLowerCase === wordsToSay[currentIndexRef.current].toLowerCase){
          correctRef.current = correctRef.current + 1;
          currentIndexRef.current = currentIndexRef.current + 1
          return
        }
      }
      wrongRef.current = wrongRef.current + 1;
      currentIndexRef.current = currentIndexRef.current + 1
      return
    }
    catch{
      finishState()
      return
    }
    
    
  }

  useEffect(() => {
    checkWords()
  }, [bestMsg])

  const ws = new WebSocket(symblEndpoint);

  // Fired when a message is received from the WebSocket server
  ws.onmessage = (event) => {
    // You can find the conversationId in event.message.data.conversationId;
    const data = JSON.parse(event.data);
    // if (data.type === 'message' && data.message.hasOwnProperty('data')) {
    //   console.log('conversationId', data.message.data.conversationId);
    // }
    // if (data.type === 'message_response') {
    //   for (let message of data.messages) {
    //     if (verbose) {
    //       console.log('Transcript (more accurate): ', message.payload.content);
    //     }
    //     setAccMsg(message.payload.content)
    //   }
    // }
    // if (data.type === 'topic_response') {
    //   for (let topic of data.topics) {
    //     if (verbose) {
    //       console.log('Topic detected: ', topic.phrases)
    //     }
    //   }
    // }
    // if (data.type === 'insight_response') {
    //   for (let insight of data.insights) {
    //     console.log('Insight detected: ', insight.payload.content);
    //   }
    // }
    if (data.type === 'message' && data.message.hasOwnProperty('punctuated')) {
      if (verbose) {
        console.log('Live transcript (less accurate): ', data.message.punctuated.transcript)
      }
      msg = data.message.punctuated.transcript
      getMessage()
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
      //setAccMsg(null)
      //setMsg(null)
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

  const [started, setStart] = useState(false)

  if (!started){
    setStart(true)
    start()
  }

  return(
  <>

    {
      outputWords()
    }
    </>
  )
}

export default LiveText