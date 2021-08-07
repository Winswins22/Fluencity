import React from 'react'
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

const Testing = () => {
  return (
    <Container>
      <Wrapper>
        <MiniContainer>
          <MiniWrapper>
            Time
          </MiniWrapper>

          <MiniWrapper style={{ cursor: "pointer" }}>
            Exit
            <Icon>
              <ImCross size="0.7em" />
            </Icon>
          </MiniWrapper>

        </MiniContainer>
        <InfoContainer>
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
          </InfoSec>

          <InfoSec>
            Text text text text text text text text text text …..
          </InfoSec>

          <InfoSec style={{width: "102%"}}>
            <Line />
          </InfoSec>

        </InfoContainer>
      </Wrapper>
    </Container>
  )
}

export default Testing
