import React from "react";
import Clock from "../logic/clock";

function AnalogClock(props) {
  const time = props.time;
  const clockMarks = Clock.clockNumerMarks;

  // Math
  const hourAngle = ((time.hour % 12) * 60 + time.minute) / 2;
  const minuteAngle = (time.minute * 60 + time.second) / 10;
  const secondAngle = time.second * 6;

  return (
    <div className="analog-clock">
      <div>
        {clockMarks.map(mark => (
          <span className="mark">{mark}</span>
        ))}
      </div>
      <div>
        { Array(60).fill(1).map(tick => ( <span className="tick" /> )) }
      </div>
      <div className="inner-circle" />
      <div
        className="hour-hand"
        style={{ transform: `rotate(${hourAngle}deg)` }}
      />
      <div
        className="minute-hand"
        style={{ transform: `rotate(${minuteAngle}deg)` }}
      />
      <div
        className="second-hand"
        style={{ transform: `rotate(${secondAngle}deg)` }}
      />
      <div className="center-dot" />
    </div>
  );
}

export default AnalogClock;
