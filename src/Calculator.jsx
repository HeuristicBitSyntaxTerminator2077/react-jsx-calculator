import React, { useState } from 'react';

export default function Calculator() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [op, setOp] = useState('+');
  const [result, setResult] = useState('');

  function calculate() {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    let res = '';
    switch (op) {
      case '+': res = (numA + numB).toString(); break;
      case '-': res = (numA - numB).toString(); break;
      case '*': res = (numA * numB).toString(); break;
      case '/': res = numB !== 0 ? (numA / numB).toString() : 'Error: Division by zero'; break;
      default: res = 'Error: Invalid operator';
    }
    setResult(res);
  }

  return (
    <div style={{ maxWidth: 300, margin: '2rem auto', padding: 20, border: '1px solid #ccc', borderRadius: 8, background: '#fafafa' }}>
      <h2>React JSX Calculator</h2>
      <input
        type="number"
        placeholder="First number"
        value={a}
        onChange={e => setA(e.target.value)}
        style={{ width: '100%', marginBottom: 8 }}
      />
      <select value={op} onChange={e => setOp(e.target.value)} style={{ width: '100%', marginBottom: 8 }}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="number"
        placeholder="Second number"
        value={b}
        onChange={e => setB(e.target.value)}
        style={{ width: '100%', marginBottom: 8 }}
      />
      <button onClick={calculate} style={{ width: '100%', marginBottom: 8 }}>Calculate</button>
      <div style={{ minHeight: 24, textAlign: 'center', fontWeight: 'bold' }}>{result}</div>
    </div>
  );
}
