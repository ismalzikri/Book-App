import { useEffect, useState } from "react";
import { SplashScreen } from "./components/SplashScreen";

function App() {
  const [splash, setSplash] = useState<Boolean>(true)

  useEffect(() => {
    
  }, [])
  

  return (
    <div className="App">
      <SplashScreen />
    </div>
  );
}

export default App;
