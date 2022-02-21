import { useEffect, useState } from "react";
import { SplashScreen } from "./components/SplashScreen";
import { Home } from "./pages/Home/Home";

function App() {
  const [splash, setSplash] = useState<Boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setSplash(false)
    }, 2000);
  }, [])
  

  return (
    <>
      { splash ? 
        <SplashScreen/>
        :
        <Home/>
      }
    </>
  );
}

export default App;
