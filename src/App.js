import React, { useEffect, useState } from "react";
import "./style.css";
import img from "./image/bg.jpg";

function App() {
  const [Number, setNumber] = useState(100)
  useEffect(() => {
    Number > 0 && setTimeout(() => setNumber(Number - 1), 35);
  }, [Number]);

  return (
    <>
      <main >
        <img style={{ filter: `blur(${Number}px)` }} src={img} alt="" />
        <h1 style={{ opacity: `${Number}` }}>{Number}%</h1>
      </main>
    </>
  );
}

export default App;
