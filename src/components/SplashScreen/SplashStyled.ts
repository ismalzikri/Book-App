import styled, { keyframes } from "styled-components"

export const blink = keyframes `
  from{
    opacity: 0%;
  }
  to{
    opacity: 100%;
  }
`

export const Title = styled.h1 `
  font-size: 1.5em;
  text-align: center;
  color: white;
  ::after{
    content: "|";
    font-weight: 400;
    margin-left: 2px;
    animation: ${blink} 1s infinite;
  }
`

export const Screen = styled.section `
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #867AE9;
`

