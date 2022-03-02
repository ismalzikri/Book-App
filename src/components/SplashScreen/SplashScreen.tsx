import { useEffect, useState } from "react"
import { Screen, Title } from "./SplashStyled"

const words = ['hi there..', 'Welcome To Booku']

export const SplashScreen = () => {

  const [index, setIndex] = useState<number>(0)
  const [subIndex, setSubIndex] = useState<number>(0);
  const [blink, setBlink] = useState<Boolean>(true);
  const [reverse, setReverse] = useState<boolean>(false);

  useEffect(() => {

    if(index === words.length){
      return
    }

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const TimeOut = setTimeout(() => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1))
    },  Math.max(reverse ? 75 : subIndex === words[index].length ? 900 : 150, parseInt(Math.random() * 350)));
    return () =>  clearTimeout(TimeOut)
  }, [subIndex, index, reverse])

  useEffect(() => {
    const TimeOut2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(TimeOut2);
  }, [blink]);

  return (
    <Screen>
     <Title>{`${words[index].substring(0, subIndex)} ${blink ? '|' : ' '}`}</Title>
    </Screen>
  )
}
