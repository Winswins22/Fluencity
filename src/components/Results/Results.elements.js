import styled from 'styled-components'

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
  background: #ddd;
  width: 100%;
  height: 60%;
  padding: 20px;
  
  display: flex;
  flex-direction: row;

  box-shadow: 5px 5px 25px rgba(56, 118, 29, 0.8);
`

export const LeftColumn = styled.div`
  border: 1px solid red;
  padding: 10px;
  width: 60%;
  height: 100%;
`
export const RightColumn = styled.div`
  border: 1px solid blue;
  padding: 10px;
  width: 40%;
  height: 100%;
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 20px;
  
  font-size: 30px;
`

export const StatusContainer = styled.div`
  border: 1px solid green;
`