import styled, {keyframes} from 'styled-components'


export const MainDiv = styled.div`
  height: 100vh;
  display: flex;
  transition: 1s;
  justify-content: center;
  align-items: center;
  background: blueviolet;
.test{
  div{
    transition: 2s;
    background: blueviolet;
  }
}
  div {
    margin: 0 10px;
    width: 200px;
    background: 200px;
    height: 100px;
    border-radius: 20px;
    background: white;
  }

  .anim {
    transition: 1s;
    background: white;
    transform: translate(0,150px);
  }
`