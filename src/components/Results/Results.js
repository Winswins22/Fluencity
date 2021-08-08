import React from 'react'

import {
  Container,
  Wrapper,
  LeftColumn,
  RightColumn,

  HeaderWrapper,

  StatusContainer,
  StatusWrapper,
  Icon,
  ScoreText,
  ScoreLabel,

  YourLeaderboardContainer,
  YourLeaderboardMiniContainer,
  YourLeaderboardScoreContainer,

  LeaderboardScoreSect,
  LeaderboardHeader,
  LeaderboardRank,
  LeaderboardRankScore,
  LeaderboardScoreContainer,
  LeaderboardContainer,

  Button
} from './Results.elements'

import { ImCross } from 'react-icons/im'
import { FaEquals } from 'react-icons/fa'


export const Results = ({setCurrentPage, state}) => {

  const LeaderboardScore = ({ rank, score }) => {
    return (
      <LeaderboardScoreSect>
        <LeaderboardRank>{rank}</LeaderboardRank>
        <LeaderboardRankScore>{score}</LeaderboardRankScore>
      </LeaderboardScoreSect>
    )
  }

  const YourLeaderboard = () => {
    return (
      <YourLeaderboardContainer>
        <LeaderboardHeader>Your Leaderboard</LeaderboardHeader>
        <YourLeaderboardScoreContainer>
          <YourLeaderboardMiniContainer>

            <LeaderboardScore rank={1} score={"100 wpm"} />
            <LeaderboardScore rank={2} score={"100 wpm"} />
            <LeaderboardScore rank={3} score={"100 wpm"} />
            <LeaderboardScore rank={4} score={"100 wpm"} />

          </YourLeaderboardMiniContainer>

          <YourLeaderboardMiniContainer>
            <LeaderboardScore rank={5} score={"100 wpm"} />
            <LeaderboardScore rank={6} score={"100 wpm"} />
            <LeaderboardScore rank={7} score={"100 wpm"} />
            <LeaderboardScore rank={8} score={"100 wpm"} />
          </YourLeaderboardMiniContainer>

        </YourLeaderboardScoreContainer>
      </YourLeaderboardContainer>
    )
  }

  const Leaderboard = () => {
    return (
      <LeaderboardContainer>
        <LeaderboardHeader>Leaderboard</LeaderboardHeader>
        <LeaderboardScoreContainer>
          <LeaderboardScore rank={1} score={"100 wpm"} />
          <LeaderboardScore rank={2} score={"100 wpm"} />
          <LeaderboardScore rank={3} score={"100 wpm"} />
          <LeaderboardScore rank={4} score={"100 wpm"} />
          <LeaderboardScore rank={5} score={"100 wpm"} />
          <LeaderboardScore rank={6} score={"100 wpm"} />
          <LeaderboardScore rank={7} score={"100 wpm"} />
          <LeaderboardScore rank={8} score={"100 wpm"} />

        </LeaderboardScoreContainer>
      </LeaderboardContainer>
    )
  }

  const Status = () => {
    return (
      <StatusContainer>
        <StatusWrapper>
          <ScoreText>{state.results.wpm}</ScoreText>
          <ScoreLabel>wpm</ScoreLabel>
        </StatusWrapper>

        <Icon>
          <ImCross color={"#6aa84fff"}/>
        </Icon>

        <StatusWrapper>
          <ScoreText>{state.results.acc}</ScoreText>
          <ScoreLabel>accuracy</ScoreLabel>
        </StatusWrapper>

        <Icon>
          <FaEquals color={"#6aa84fff"}/>
        </Icon>

        <StatusWrapper>
          <ScoreText>{state.results.result}</ScoreText>
          <ScoreLabel>result</ScoreLabel>
        </StatusWrapper>

      </StatusContainer>
    )
  }

  return (
    <Container>
      <Wrapper>
        <LeftColumn>
          <HeaderWrapper>
            Your test scores
          </HeaderWrapper>

          <Status />

          <YourLeaderboard />
        </LeftColumn>
        <RightColumn>
          <Button onClick={setCurrentPage("Home")}>
            Retake test
          </Button>
          <Leaderboard />
        </RightColumn>

      </Wrapper>
    </Container >
  )
}

export default Results
