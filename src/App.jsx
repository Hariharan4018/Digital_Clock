import { useState } from "react";
import "./App.css";
// import { data } from "autoprefixer";
import { useEffect } from "react";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => { setCurrentTime(new Date()) }, 1000)
    return ()=> clearInterval(timer)
  }, [])
  const result = () => {
    const options={weekday:"long",year:"numeric",day:"numeric",month:"long"}
    return currentTime.toLocaleDateString(undefined,options)
  }
  const formatZero = (hour) => {
    return hour < 10? "0" + hour: hour;
   }
  return (
    <>
      <div className="box">
        <h2>Digital Clock</h2>
        <div>{formatZero(currentTime.getHours()%12)} : {formatZero(currentTime.getMinutes())} : { formatZero(currentTime.getSeconds())} pm</div>
        <p className="result">{ result()}</p>
      </div>
    </>
  );
}

export default App;
