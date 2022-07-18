import styled from 'styled-components';

export const DivStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    margin: 0 auto;
    width: 20%;
    height: 40%;
    border: solid white 1px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    progress {
      width: 60%;
      border-radius: 7px;
      height: 20px;
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
    }

    progress:after {
      position: relative;
      left: 30%;
      top: -20px;
      color: rebeccapurple;
      font-weight: 900;
      content: attr(data-bar);
    }

    progress::-webkit-progress-bar {
      background-color: #ffffff;
      border-radius: 7px;
    }

    progress::-webkit-progress-value {
      background-color: #1dff40;
      border-radius: 7px;
    }

    progress::-moz-progress-bar {
      /* style rules */
    }

    input {
      width: 100%;
      display: inline;
      text-align: center;
    }
  }
`