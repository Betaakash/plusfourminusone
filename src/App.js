import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const handleAdd = () => {
    const updatedCount = count + 4;
    setCount(updatedCount);
    setHistory([...history, count]);
    // checkTotalSum(updatedCount);
  };

  const handleSubtract = () => {
    const updatedCount = count - 1;
    setCount(updatedCount);
    setHistory([...history, count]);
    // checkTotalSum(updatedCount);
  };

  const handleUndo = () => {
    if (history.length > 0) {
      const previousCount = history[history.length - 1];
      setCount(previousCount);
      setHistory(history.slice(0, history.length - 1));
      // checkTotalSum(previousCount);
    }
  }; 


  const handleReset = () => {
    setCount(0);
    setHistory([]);
  };



  // const checkTotalSum = (total) => {
  //   if (total >= 150 && total < 200) {
  //     alert("Great!! You crossed 150");
  //   } else if (total >= 200 && total < 250) {
  //     alert("Emhm! Now we are talking");
  //   } else if (total >= 250) {
  //     alert("Woah! Legend.");
  //   }
  // };

  return (
    
      <div className="container">
        <h1 id="sum">Total: {count}</h1>
        <div className="button-grid">
          <div className="button-row">
            <button className="button-add" onClick={handleAdd}>
              +4
            </button>
            <button className="button-sub" onClick={handleSubtract}>
              -1
            </button>
          </div>
          <div className="button-row">
            <button className="button" onClick={handleUndo}>
              Undo
            </button>
            <button className="button" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
  
  );
};

export default App;
