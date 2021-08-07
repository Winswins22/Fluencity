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

const Home = () => {

  // test duration in seconds
  const [state, setState] = useState({
    duration: 0,
    level: 0,
  });

  const durationOptions = [
    {
      label: "10s", value: 10,
    },
    {
      label: "20s", value: 20,
    },
    {
      label: "30s", value: 30,
    },
    {
      label: "1min", value: 60,
    },
    {
      label: "2mins", value: 120,
    },
    {
      label: "5mins", value: 300,
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
    },
    {
      label: "Level 4", value: 4,
    },
    {
      label: "Level 5", value: 5,
    },
  ]

  const selectStyle = {
    outline: "none",
    border: "none",
    boxShadow: "none",
    fontSize: "14px",
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
              style={selectStyle}
              options={durationOptions}
              placeholder="Test Durations"
              onChange={value => setState({ ...state, duration: value[0].value })}

            />
          </SelectWrapper>
        </InfoContainer>

        <InfoContainer>
          <SelectWrapper>
            <Select
              style={selectStyle}
              options={levelOptions}
              placeholder="Test Durations"
              onChange={value => setState({ ...state, level: value[0].value })}
            />
          </SelectWrapper>
        </InfoContainer>

        <InfoContainer>
          <StartButton>
            Start
          </StartButton>
        </InfoContainer>
        
      </Wrapper>
    </Container>
  )
}

export default Home
