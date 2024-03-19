// File QuadraticEquationSolver.js
import React, { useState } from 'react';

function QuadraticEquationSolver() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'a') {
      setA(value);
    } else if (name === 'b') {
      setB(value);
    } else if (name === 'c') {
      setC(value);
    }
  };

  const solveQuadraticEquation = () => {
    const discriminant = Math.pow(b, 2) - 4 * a * c;
    if (discriminant > 0) {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      setResult(`Roots are: ${root1} and ${root2}`);
    } else if (discriminant === 0) {
      const root = -b / (2 * a);
      setResult(`Root is: ${root}`);
    } else {
      setResult('No real roots');
    }
  };

  return (
    <div className="row mt-5">
      <div className="col">
        <h2>Quadratic Equation Solver</h2>
        <div className="row mt-3">
          <div className="col-sm-3">
            <label className="form-label">Enter coefficient a:</label>
            <input
              type="number"
              className="form-control"
              name="a"
              value={a}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-sm-3">
            <label className="form-label">Enter coefficient b:</label>
            <input
              type="number"
              className="form-control"
              name="b"
              value={b}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-sm-3">
            <label className="form-label">Enter coefficient c:</label>
            <input
              type="number"
              className="form-control"
              name="c"
              value={c}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-sm-3 d-flex align-items-end">
            <button className="btn btn-primary" onClick={solveQuadraticEquation}>Solve</button>
          </div>
        </div>
        {result && <div className="row mt-3"><p>{result}</p></div>}
      </div>
    </div>
  );
}

export default QuadraticEquationSolver;
