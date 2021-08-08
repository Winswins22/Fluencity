import React, { useState } from 'react'
import Select from "react-dropdown-select";

import {
  Container,
  Wrapper,
  Header,
  InfoContainer,
  StartButton,
  SelectWrapper
} from './Home.elements'

/*
  Main Components
*/


export const Home = ({setCurrentPage, currentPageRef, state, setState}) => {

  const durationOptions = [
    {
      label: "1 minute", value: 60,
    },
    {
      label: "2 minutes", value: 120,
    },
    {
      label: "5 minutes", value: 300,
    }];

  const levelOptions = [
    {
      label: "Level 1", value: 1,
    },
    {
      label: "Level 2", value: 2,
    },
    {
      label: "Level 3", value: 3,
    }
  ]

  const selectStyle = {
    outline: "none",
    border: "none",
    boxShadow: "none",
    fontSize: "20px",
  }
  return (
    <Container>
      <Wrapper>
        <InfoContainer>
          <Header>
            Test your speaking accuracy and fluency
          </Header>
        </InfoContainer>

        <InfoContainer>
          <SelectWrapper>
            <Select 
              isSearchable={false}
              style={selectStyle}
              options={durationOptions}
              placeholder="Test Duration"
              onChange={value => setState({ ...state, duration: value[0].value })}

            />
          </SelectWrapper>
        </InfoContainer>

        <InfoContainer>
          <SelectWrapper>
            <Select
              isSearchable={false}
              style={selectStyle}
              options={levelOptions}
              placeholder="Text Difficulty"
              onChange={value => setState({ ...state, Level: value[0].value })}
            />
          </SelectWrapper>
        </InfoContainer>

        <InfoContainer>
          <StartButton onClick={() => currentPageRef.current="Testing"}>
            Start
          </StartButton>
        </InfoContainer>

      </Wrapper>

    </Container>

  )
}

export default Home
