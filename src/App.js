import { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isDarkmode, setIsDarkmode] = useState(false);
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const toggleDarkMode = () => {
    setIsDarkmode(!isDarkmode);
    const circle = document.getElementById("circle");
    circle.style.marginLeft = isDarkmode ? "0" : "20px";
  };

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const evalResult = eval(expression);
        setHistory((prevHistory) => [
          ...prevHistory,
          { expression, result: evalResult },
        ]);
        setExpression(""); // Clear the expression
        setResult(evalResult);
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "AC") {
      setExpression("");
      setResult("");
    } else {
      setExpression((prevExpression) => prevExpression + value);
      setResult("");
    }
  };

  return (
    <div className={`containers ${isDarkmode ? "dark-mode" : "light-mode"}`}>
      <div className="calc-box">
        <div
          className={`historybox ${
            isDarkmode ? "dark-mode-historybox" : "light-mode-historybox"
          }`}
        >
          <button className="toggle_button" onClick={toggleDarkMode}>
            <button className="toggle_button_circle" id="circle"></button>
          </button>
          <div className="history">
            {history.map((item, index) => (
              <div key={index} className="history-item">
                <div className="expression">{item.expression}</div>
                <div className="result">={item.result}</div>
              </div>
            ))}
          </div>
          <div className="expression-result">
            <div className="expression">{expression}</div>
            <div className="result">{result}</div>
          </div>
        </div>
        <div className={`calculator_body ${isDarkmode ? "dark" : "light"}`}>
          <div className="calculator_body_left">
            <button
              className="calculator_body_left_button"
              onClick={() => handleButtonClick("7")}
            >
              7
            </button>
            <button
              className="calculator_body_left_button"
              onClick={() => handleButtonClick("8")}
            >
              8
            </button>
            <button
              className="calculator_body_left_button"
              onClick={() => handleButtonClick("9")}
            >
              9
            </button>
            <button
              className="calculator_body_left_button"
              onClick={() => handleButtonClick("4")}
            >
              4
            </button>
            <button
              className="calculator_body_left_button"
              onClick={() => handleButtonClick("5")}
            >
              5
            </button>
            <button
              className="calculator_body_left_button"
              onClick={() => handleButtonClick("6")}
            >
              6
            </button>
            <button
              className="calculator_body_left_button"
              onClick={() => handleButtonClick("1")}
            >
              1
            </button>
            <button
              className="calculator_body_left_button"
              onClick={() => handleButtonClick("2")}
            >
              2
            </button>
            <button
              className="calculator_body_left_button"
              onClick={() => handleButtonClick("3")}
            >
              3
            </button>
            <button
              className="calculator_body_left_button"
              onClick={() => handleButtonClick("0")}
            >
              0
            </button>
            <button
              className="calculator_body_left_button"
              onClick={() => handleButtonClick(".")}
            >
              .
            </button>
            <button
              className="calculator_body_left_button"
              onClick={() => handleButtonClick("=")}
            >
              =
            </button>
          </div>
          <div className="calculator_body_right">
            <button
              className="calculator_body_right_button"
              onClick={() => handleButtonClick("AC")}
            >
              AC
            </button>
            <button
              className="calculator_body_right_button"
              onClick={() => handleButtonClick("/")}
            >
              /
            </button>
            <button
              className="calculator_body_right_button"
              onClick={() => handleButtonClick("*")}
            >
              x
            </button>
            <button
              className="calculator_body_right_button"
              onClick={() => handleButtonClick("+")}
            >
              +
            </button>
            <button
              className="calculator_body_right_button"
              onClick={() => handleButtonClick("-")}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
