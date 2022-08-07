import { useEffect, useState } from "react"
import { Screen, Title } from "./SplashStyled"

type SplashScreenProps = {
  text : string,
  speed: number
}

export const SplashScreen = ({ text, speed } : SplashScreenProps) => {
  const [displayText, setDisplayText] = useState<number>(0)

  useEffect(() => {
    let interval: number
     
    interval = window.setInterval(() => {
      setDisplayText((length) => {
        if(length === text.length) {
          clearInterval(interval)
          return length
        } else {
          return length + 1
        }
      })
    }, speed)

    return () => { clearInterval(interval) }

  }, [text, speed])
  
  
  return (
    <Screen>
     <Title>{text.slice(0, displayText)}</Title>
    </Screen>
  )
}
