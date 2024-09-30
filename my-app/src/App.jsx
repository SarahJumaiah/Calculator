import { useState } from "react";
import "./index.css";

function App() {
  const [leftNumber, setLeftNumber] = useState(0);
  const [rightNumber, setRightNumber] = useState(0);
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const incrementLeft = () => {
    setLeftNumber(leftNumber + 1);
  };

  const decrementLeft = () => {
    setLeftNumber(leftNumber - 1);
  };

  const incrementRight = () => {
    setRightNumber(rightNumber + 1);
  };

  const decrementRight = () => {
    setRightNumber(rightNumber - 1);
  };

  const calculateResult = () => {
    let calculatedResult;
    switch (operation) {
      case "+":
        calculatedResult = leftNumber + rightNumber;
        break;
      case "-":
        calculatedResult = leftNumber - rightNumber;
        break;
      case "*":
        calculatedResult = leftNumber * rightNumber;
        break;
      case "%":
        calculatedResult = leftNumber % rightNumber;
        break;
      default:
        calculatedResult = "Invalid";
    }
    setResult(calculatedResult);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`calculator mb-12 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      } p-6 rounded-lg shadow-md`}
    >
      <h1 className="text-center text-3xl mb-4">Calculator</h1>

      <button
        className={`mb-4 px-4 py-2 rounded ml-12 ${
          isDarkMode ? "bg-gray-300 text-black" : "bg-gray-800 text-white"
        }`}
        onClick={toggleDarkMode}
      >
        {isDarkMode ? "Light" : "Dark"} Mode
      </button>

      <div className="flex justify-between mb-4">
        <div className="flex flex-col items-center">
          <button className="operator mb-2" onClick={incrementLeft}>
            +
          </button>
          <input
            type="text"
            value={leftNumber}
            readOnly
            className="text-center text-xl w-16 bg-gray-200 rounded-lg"
          />
          <button className="operator mt-2" onClick={decrementLeft}>
            -
          </button>
        </div>

        <div className="flex flex-col items-center">
          <button className="operator mb-2" onClick={incrementRight}>
            +
          </button>
          <input
            type="text"
            value={rightNumber}
            readOnly
            className="text-center text-xl w-16 bg-gray-200 rounded-lg"
          />
          <button className="operator mt-2" onClick={decrementRight}>
            -
          </button>
        </div>
      </div>

      <div className="flex justify-center space-x-4 mb-4">
        <button className="operator" onClick={() => setOperation("+")}>
          +
        </button>
        <button className="operator" onClick={() => setOperation("-")}>
          -
        </button>
        <button className="operator" onClick={() => setOperation("*")}>
          *
        </button>
        <button className="operator" onClick={() => setOperation("%")}>
          %
        </button>
      </div>

      <button className="operator w-full mb-4" onClick={calculateResult}>
        Calculate {operation}
      </button>

      {result !== null && (
        <div className="text-center text-2xl">The result is: {result}</div>
      )}
    </div>
  );
}

export default App;
