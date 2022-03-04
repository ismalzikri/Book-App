import { useEffect, useState } from "react"
import { Screen, Title } from "./SplashStyled"

type SplashScreenProps = {
  text : string,
  speed: number
}

export const SplashScreen = ({ text, speed } : SplashScreenProps) => {
  const [displayTex, setDisplayText] = useState<string>("")
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    const animKey = setInterval(() => {
      setIndex((index) => {
        if(index >= text.length -1) {
          return index
        }
        return index + 1
      } )
    }, speed)
    return () => {clearInterval(animKey)}
  }, [text, speed])
  
  useEffect(() => {
    setDisplayText(
      (displayTex) => displayTex + text[index]
    )
  }, [index, text])
  
  return (
    <Screen>
     <Title>{displayTex}</Title>
    </Screen>
  )
}
