import { useState } from "react";

export default function Calculator() {
  //Here we declare the variables will be using for the calculator
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  //   const [operator, setOperator] = useState(null);

  //Here we update variable value of num1
  const handleNum1 = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2 = (event) => {
    setNum2(event.target.value);
  };

  let sum = () => {
    if (num1 && num2) {
      setResult(parseFloat(num1) + parseFloat(num2));
      document.getElementById("result").innerHTML = result.toString();
    } else {
      document.getElementById("result").innerHTML = "Insert valid numbers";
    }
  };

  return (
    <div>
      <p>Number 1</p>
      <input type="text" onChange={handleNum1} value={num1} />
      <p>Number 2</p>
      <input type="text" onChange={handleNum2} value={num2} />
      <br></br>
      <button onClick={sum}>Add two numbers</button>
      <p>Result</p>
      <p id="result"></p>
    </div>
  );
}
