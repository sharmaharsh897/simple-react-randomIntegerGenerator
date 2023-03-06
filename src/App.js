import React, { useState } from "react";

function App(props) {
  const [count, setCount] = useState(0);

  function clickHandler() {
    setCount(Math.floor(Math.random() * 100));
  }

  return (
    <div>
      <h1> {count} </h1>

      <p>
        <button onClick={clickHandler}> Click </button>
      </p>
    </div>
  );
}

export default App;
