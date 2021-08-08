import styled from 'styled-components'
import img from '../../imgs/Homebg.jpg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 27%;
  top: 0;
  z-index: 1;
  width: 65%;
  height: 100%;
`

export const Wrapper = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  width: 60%;
  height: 60%;
  padding: 20px;
  
  display: flex;
  flex-direction: row;
  box-shadow: 5px 5px 25px rgba(56, 118, 29, 0.8);
`

export const LeftColumn = styled.div`
  padding: 10px;
  width: 60%;
  height: 100%;
  
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const RightColumn = styled.div`
  padding: 10px;
  width: 30%;
  height: 100%;
  margin-left: 50px;

  display: flex;
  align-items: center;
  flex-direction: column;
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 20px;
  
  font-size: 30px;
  color: #38761d;
`

export const StatusContainer = styled.div`
  height: 20%;
  width: 70%;
  display: flex;
  justify-content: space-around;
`

export const StatusWrapper = styled.div`
  border-radius: 50px;
  height: 100%;
  width: 23%;
  border: 1px solid #6aa84f;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ScoreText = styled.h1`
  font-size: 28px;
`

export const ScoreLabel = styled.h1`
  font-size: 12px;
`

export const YourLeaderboardContainer = styled.div`
  width: 100%;
  height: 55%;

  padding: 10px;
  margin-top: 20px;

  border-radius: 10px;

  display: flex;
  align-items: center;
  flex-direction: column;
`

export const LeaderboardHeader = styled.h1`
  font-size: 16px;
  padding: 5px;
`

export const YourLeaderboardScoreContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
`

export const YourLeaderboardMiniContainer = styled.div`
  width: 50%;
  height: 100%;
  /* border: 1px solid blue; */
  margin: 0px 40px;
`

export const LeaderboardScoreSect = styled.div`
  width: 100%;
  height: 20%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const LeaderboardRank = styled.div`
  width: 10%;
  height: 100%;
  padding: 5px;
`

export const LeaderboardRankScore = styled.div`
  width: 80%;
  height: 100%;
  padding: 5px;
  
  display: flex;
  justify-content: space-evenly;
`

export const LeaderboardScoreContainer = styled.div`
  width: 70%;
  height: 100%;

  display: flex;
  flex-direction: column;
`

export const LeaderboardContainer = styled.div`
  width: 100%;
  height: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid;
  border-radius: 15px;
`

export const Button = styled.div`
  font-size: 14px;
  background: #ecf6e9ff;
  border-radius: 50px;
  border: 1px solid #666666;
  
  width: 100%;
  height: 10%;
  margin: 10px;
  
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`