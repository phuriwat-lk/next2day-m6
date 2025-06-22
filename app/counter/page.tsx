"use client";

import { useState } from "react";

export default function Counter() {
  const [x, setX] = useState(0);

  const up = () => {
    setX(x + 1);
  };

  const zero = () => {
    setX(0);
  };

  const down = () => {
    if (x > 0) {
      setX(x - 1);
    }
  };

  return (
    <>
        <div className="text-5xl text-center">Counter Page</div>
        <div className="text-3xl font-bold text-blue-500 text-center">X = {x}</div>
        <div className="flex gap-2 justify-center">
            
          <button className="btn" onClick={down}>
            <i className="fa fa-minus"></i>
          </button>
          <button className="btn" onClick={zero}>
            <i className="fa fa-0"></i>
          </button>
          <button className="btn" onClick={up}>
            <i className="fa fa-plus"></i>
          </button>
      </div>

      
    </>
  );
}
