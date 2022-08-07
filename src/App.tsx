import { useEffect, useState } from "react";
import { SplashScreen } from "./components";
import { Home } from "./pages/Home/Home";

function App() {
  const [splash, setSplash] = useState<Boolean>(true)
  useEffect(() => {
    setTimeout(() => {
      setSplash(false)
    }, 2600);
  }, [])
  

  return (
    <>
      { splash ? 
        <SplashScreen text={`Welcome To Booku`} speed={120} />
        :
        <Home/>
      }
    </>
  );
}

export default App;
