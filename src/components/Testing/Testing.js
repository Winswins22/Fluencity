import React, { useState, useEffect } from 'react'
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

export const Testing = ({ setCurrentPage, state }) => {

  console.log(state.Level);

  const [ready, setReady] = useState(false);

  let duration = 20;

  const [timeLeft, setTimeLeft] = useState(state.duration); // in seconds

  const FormatTime = (time) => {
    // format Duration to mm:ss
    let MM = Math.floor(time / 60);
    let SS = time % 60;
    return MM + ":" + SS;
  }

  const Tick = () => setTimeLeft(timeLeft - 1);

  const hanleTimeUp = () => {
    if (timeLeft === 0) {
      // Go to results
    }
  }

  useEffect(() => {
    if (timeLeft === 0) return;
    const timer = setTimeout(() => {
      Tick();
    }, 1000);
    return () => clearTimeout(timer);
  });

  hanleTimeUp();
  return (
    <Container>
      <Wrapper>
        <MiniContainer>
          <MiniWrapper>
            {FormatTime(timeLeft)}
          </MiniWrapper>

          <MiniWrapper style={{ cursor: "pointer" }} onClick={() => setCurrentPage("Home")}>
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

            <VerifyText setReady={setReady}></VerifyText>

          </InfoSec>

        </InfoContainer>
      </Wrapper>
    </Container>
  )
}

export default Testing
