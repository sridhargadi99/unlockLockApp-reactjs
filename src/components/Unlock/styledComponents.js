// Style your elements here
import styled from 'styled-components'

export const LockMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
  background-size: cover;
`
export const LockSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 300px;
  @media screen and (min-width: 768px) {
    height: 400px;
  }
`
export const LockImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LockImage = styled.img`
  height: 100px;
  width: 100px;
  @media screen and (min-width: 768px) {
    height: 150px;
    width: 150px;
  }
`
export const LockContent = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 700;
  color: #e2e8f0;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const LockButton = styled.button`
  height: 32px;
  width: 100px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: #06b6d4;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    height: 40px;
    width: 120px;
    font-size: 17px;
  }
`
