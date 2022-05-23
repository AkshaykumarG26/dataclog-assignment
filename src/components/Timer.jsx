import { useState, useRef } from "react";

export const Timer = () => {
  const timerId = useRef();

  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
    setMin(e.target.value);
    
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

  return (
    <>
      <input
        type="number"
        name=""
        id=""
        placeholder="Enter Time"
        onChange={handleChange}
      />
      <h1>Timer</h1>
      <h2>
        {min}:{sec}
      </h2>

      <div>
        <section>
          <button onClick={startTimer}>Start</button>
          <button onClick={stopTimer}>Pause</button>
        </section>
      </div>
    </>
  );
};
