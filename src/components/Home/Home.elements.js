import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  width: 100%;
  height: 100%;
`

export const Wrapper = styled.div`
  background: #ddd;
  width: 60%;
  height: 60%;
  padding: 75px;

  display: flex;
  align-items: center;
  flex-direction: column;

  box-shadow: 10px 10px 25px rgba(56, 118, 29, 0.8);
`

export const Header = styled.h1`
  font-size: 21px;
`

export const InfoContainer = styled.div`
  padding: 20px;
  width: 100%;

  display: flex;
  justify-content: center;
`

export const StartButton = styled.div`
  font-size: 28px;
  background: #ecf6e9ff;
  border-radius: 50px;
  border: 1px solid;
  
  width: 25%;
  height: 80%;
  padding: 20px 50px;
  
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`

export const SelectWrapper = styled.div`
  border: 1px solid #a4a7b5;
  border-radius: 50px;
  height: 100%;
  width: 20%;
`