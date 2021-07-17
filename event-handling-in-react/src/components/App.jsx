import React, { useState } from "react";

function App() {
  const [ismousedOver, setMouseOver] = useState(false);
  function mouseover() {
    setMouseOver(true);
  }

  function MouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: ismousedOver ? "black" : "white" }}
        onMouseOver={mouseover}
        onMouseOut={MouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
