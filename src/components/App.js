import React from "react";
import "./App.scss";

import Clock from "../logic/clock.js";
import AnalogClock from "./AnalogClock";

function App() {
  const [ticker, setTicker] = React.useState(null);
  const [time, setTime] = React.useState(Clock.getNow());

  function initTicker() {
    const now = Date.now();
    const nextSec = (Math.floor(now / 1000) + 1) * 1000;
    const timeLeft = nextSec - now;

    //trigger ticker interval on the next full second
    window.setTimeout(() => {
      // on each second update the state time
      const interval = window.setInterval(() => setTime(Clock.getNow()), 1000);
      setTicker(interval);
    }, timeLeft);
  }

  React.useEffect(() => {
    //on mount
    if (!ticker) {
      initTicker();
    }
    //on unmount
    return () => ticker && window.clearInterval(ticker) && setTicker(null);
  }, [ticker]); //bind to ticker

  return (
    <div id="clocks">
      <AnalogClock time={time} />
    </div>
  );
}

export default App;
