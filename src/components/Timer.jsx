import { useState, useRef } from "react";
import './Timer.css'
export const Timer = () => {
  const timerId = useRef();

  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value > 0){
        setMin(e.target.value - 1);
        setSec(59);
    }
  };

  if (min === 0 && sec === 0) {
    clearInterval(timerId.current);
  }

  const startTimer = () => {
    timerId.current = setInterval((s) => {
      setSec((sec) => (sec === 0 ? setSec(59) : sec - 1));
    }, 100);
    return () => clearInterval(timerId.current);
  };

  if (sec === 0 && min) {
    setMin(min - 1);
    setSec(59);
  }

  const stopTimer = () => {
    clearInterval(timerId.current);
  };

  const handleReset = () => {
    setMin(0);
    setSec(0);
  };

  return (
    <>
    <div className="center">

      <input type="number" placeholder="Enter Time" onChange={handleChange} />
      <h1>Timer</h1>
      <div>
      <h2>
        {min < 10 ? "0" + min : min} : {sec < 10 ? "0" + sec : sec}
      </h2>
      <h3>Min : Sec</h3>
      </div>

      <div>
        <section>
          <button onClick={startTimer}>Start</button>
          <button onClick={stopTimer}>Pause</button>
          {/* <button onClick={startTimer}>Play</button> */}
          <button onClick={handleReset}>Reset</button>
        </section>
      </div>
    </div>
    </>
  );
};
