import styled, {keyframes} from 'styled-components'


export const MainDiv = styled.div`
  height: 100vh;
  display: flex;
  transition: 1s;
  justify-content: center;
  align-items: center;
  background: blueviolet;

  .test {
    div {
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
    transform: translate(0, 150px);
  }
`

export const Divs = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: blueviolet;

  div {
    transition: 3s;
    width: 300px;
    height: 300px;
    background: white;
    border-radius: 20px;
    margin: 0 30px;
  }

  div:hover {
    transform: scale(1.5);
    translate: 150px 100px;
  }

  //.two {
  //  transition: 2s;
  //  width: 300px;
  //  height: 400px;
  //  background: blue;
  //}
  //.two:hover{
  //  translate: 150px;
  //}
`
// export const Divt = styled.div`
//   transition: 2s;
//   &:hover{
//     transform: scale(1.5);
//   }
//   width: 200px;
//   height: 200px;
//   background: white;
//   margin: 0 20px;
// `