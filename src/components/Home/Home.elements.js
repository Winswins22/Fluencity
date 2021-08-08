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
  width: 100%;
  height: 60%;
  padding: 50px;

  display: flex;
  align-items: center;
  flex-direction: column;

  box-shadow: 5px 5px 25px rgba(56, 118, 29, 0.8);


  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;

`

export const Header = styled.p`
  font-size: 40px;
  color: #6aa84f;
  padding: 0 0 10px 0;
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
  border: 1px solid #666666;
  
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
  height: 110%;
  width: 41.1%;
  padding: 5px 10px 0 10px;
`