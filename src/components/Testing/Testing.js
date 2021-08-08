import React, { useState, useEffect,useRef } from 'react'
import { ImCross } from 'react-icons/im'
import {
  Container,
  Wrapper,
  MiniContainer,
  MiniWrapper,
  Icon,
  InfoContainer,
  InfoSec,
  Line
} from './Testing.elements'
import VerifyText from './VerifyText'

export const Testing = ({ setCurrentPage, currentPageRef, state, setState }) => {

  // const [ready, setReady] = useState(false);
  //const readyRef = useRef(false);

  let duration = 20;

  const [timeLeft, setTimeLeft] = useState(state.duration); // in seconds

  const FormatTime = (time) => {
    // format Duration to mm:ss
    let MM = Math.floor(time / 60);
    let SS = time % 60;
    return MM + ":" + SS;
  }

  const Tick = () => setTimeLeft(timeLeft - 1);

  useEffect(() => {
    if (timeLeft === 0) return;
    const timer = setTimeout(() => {
      Tick();
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <Container>
      <Wrapper>
        <MiniContainer>
          <MiniWrapper>
            {FormatTime(timeLeft)}
          </MiniWrapper>

          <MiniWrapper style={{ cursor: "pointer" }} onClick={() => currentPageRef.current="Home"}>
            Exit
            <Icon>
              <ImCross size="0.7em" />
            </Icon>
          </MiniWrapper>

        </MiniContainer>
        <InfoContainer>
          {/* <InfoSec>
            Text text text text text text text text text text …..
          </InfoSec>

          <InfoSec style={{width: "102%"}}>
            <Line />
          </InfoSec>

          <InfoSec>
            Text text text text text text text text text text …..
          </InfoSec>

          <InfoSec style={{width: "102%"}}>
            <Line />
          </InfoSec>

          <InfoSec>
            Text text text text text text text text text text …..
          </InfoSec>

          <InfoSec style={{width: "102%"}}>
            <Line />
          </InfoSec> */}

          <InfoSec>

            <VerifyText difficulty={state.Level} state={state} setState={setState}></VerifyText>

          </InfoSec>

        </InfoContainer>
      </Wrapper>
    </Container>
  )
}

export default Testing
