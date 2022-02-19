import styled from "styled-components"

const Title = styled.h1 `
  font-size: 1.5em;
  text-align: center;
  color: white;
`

const Screen = styled.section `
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #867AE9;
`

export const SplashScreen = () => {
  return (
    <Screen>
     <Title>Welcome to Booku</Title>
    </Screen>
  )
}
