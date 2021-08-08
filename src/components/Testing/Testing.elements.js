import styled from 'styled-components'
import img from '../../images/Homebg.jpg';

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

  width: 100%;
  height: 60%;
  padding: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 5px 5px 25px rgba(56, 118, 29, 0.8);

`

export const MiniContainer = styled.div`
  width: 100%;
  height: 15%;
  padding: 10px;

  display: flex;
  justify-content: space-between;
`

export const MiniWrapper = styled.div`
  border: 1px solid;
  width: 12%;
  height: 100%;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`

export const Icon = styled.div`
  padding: 5px;
`

export const InfoContainer = styled.div`
  /* border: 1px solid red; */
  width: 90%;
  height: 100%;
  margin: 30px;
  padding: 10px;

  display: flex;
  align-items: center;
  flex-direction: column;
`

export const InfoSec = styled.div`
  width: 100%;
  height: 15%;
  margin-top: 5px;
  
  display: flex;
  align-items: center;
`

export const Line = styled.div`
  width: 100%;
  
  border-top: 2px solid;

`