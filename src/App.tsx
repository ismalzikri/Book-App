import { useEffect, useState } from "react";
import { SplashScreen } from "./components/SplashScreen";

function App() {
  const [splash, setSplash] = useState()

  useEffect(() => {
    return () => {
    }
  }, [])
  

  return (
    <div className="App">
      <SplashScreen />
    </div>
  );
}

export default App;
