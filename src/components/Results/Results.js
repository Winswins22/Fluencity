import React from 'react'

import {
  Container,
  Wrapper,
  LeftColumn,
  RightColumn,

  HeaderWrapper,
  StatusContainer,
} from './Results.elements'


export const Results = ({ results }) => {
  return (
    <Container>
      <Wrapper>
        <LeftColumn>
          <HeaderWrapper>
            Your test scores
          </HeaderWrapper>
          <StatusContainer>

          </StatusContainer>
        </LeftColumn>
        <RightColumn>

        </RightColumn>

      </Wrapper>
    </Container>
  )
}

export default Results
