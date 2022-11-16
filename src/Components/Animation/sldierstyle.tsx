import styled, {keyframes} from 'styled-components'

const rotate = keyframes`
  from {
    transform: translate(300px);
  }
  to {
    transform: translate(0px);
  }
`
export const DivSlider = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px red;
    width: 200px;
    //height: 100px;
  }
  

`
export const DivTest = styled('div')`
  height: auto;
  display: flex;
  flex-direction: column;
  background: #e6e6e6;

  // p {
  //   animation: ${rotate} 2s;
  // }
`
export const PSlider = styled('div')<{ primary: boolean }>`
  animation: ${rotate} 2s;
  transition: 1s;
  transform: ${props => props.primary ? "translate(-150px)" : "palevioletred"};
`
