import styled, {keyframes} from 'styled-components'


export const MainDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: blueviolet;

  div {
    position: fixed;
    top: 10px;
    left: 10px;
    width: 200px;
    background: 200px;
    height: 100px;
    border-radius: 20px;
    background: white;
  }

  //.anim {
  //  transition: 1s;
  //  background: white;
  //  transform: translate(0, -250px);
  //}

`