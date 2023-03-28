import React from 'react'
import { useState } from 'react'
import { MathActions } from '../services/mathActions'

export const Calculator = () => {

  let [firstValue, setFirstValue] = useState('');
  let [secondValue, setSecondValue] = useState('');
  let [operator, setOperator] = useState('');
  let [result, setResult] = useState('');
  let [previousResult, setPreviousResult] = useState('');

  const addDigitToScreen = (param) => {

    if (operator == '') {
      setResult('');
      setPreviousResult('');
      firstValue += param;
      setFirstValue(firstValue);
    } else {
      secondValue += param;
      setSecondValue(secondValue);
    }
  }

  const addOperatorToScreen = (param) => {
    if (operator == '' && secondValue == '') {
      setPreviousResult(result);
      setResult('');
      operator += param;
      setOperator(operator);
    } if (operator != '' && secondValue == '') {
      operator = param;
      setOperator(operator);
    }
  }

  const doCalculation = (param) => {
    debugger;
    if (secondValue != '') {
      if (firstValue == '' && previousResult != '') {
        const result = MathActions.resultAction(Number(previousResult), Number(secondValue), operator);
        setFirstValue('');
        setOperator('');
        setSecondValue('');
        setResult(result);
      } else {
        const result = MathActions.resultAction(Number(firstValue), Number(secondValue), operator);
        setFirstValue('');
        setOperator('');
        setSecondValue('');
        setResult(result);
      }
    }
  }

  const clearScreen = (param) => {
    setFirstValue('');
    setOperator('');
    setSecondValue('');
    setResult('');
    setPreviousResult('');
  }

  const deleteLastValue = (param) => {
  }

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousResult}</div>
        <div className="current-operand">{result}{firstValue}{operator}{secondValue}</div>
      </div>
      <button className="span-two" onClick={(event) => { clearScreen('AC'); }} >AC</button>
      <button >DEL</button>
      <button onClick={(event) => { addOperatorToScreen('%'); }}>%</button>
      <button onClick={(event) => { addDigitToScreen(7); }} >7</button>
      <button onClick={(event) => { addDigitToScreen(8); }} >8</button>
      <button onClick={(event) => { addDigitToScreen(9); }} >9</button>
      <button onClick={(event) => { addOperatorToScreen('*'); }} >*</button>
      <button onClick={(event) => { addDigitToScreen(4); }} >4</button>
      <button onClick={(event) => { addDigitToScreen(5); }} >5</button>
      <button onClick={(event) => { addDigitToScreen(6); }} >6</button>
      <button onClick={(event) => { addOperatorToScreen('+'); }} >+</button>
      <button onClick={(event) => { addDigitToScreen(1); }} >1</button>
      <button onClick={(event) => { addDigitToScreen(2); }} >2</button>
      <button onClick={(event) => { addDigitToScreen(3); }} >3</button>
      <button onClick={(event) => { addOperatorToScreen('-'); }} >-</button>
      <button onClick={(event) => { addDigitToScreen('.'); }} >.</button>
      <button onClick={(event) => { addDigitToScreen(0); }} >0</button>
      <button className="span-two" onClick={(event) => { doCalculation('='); }} >=</button>
    </div>
  )
}
