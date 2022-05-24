import {useState} from 'react';

import './App.css';
import Button from './calcuator-buttons/Button';
import Screen from './calculator-screen/Screen';

function App() {
  const calcItems = ['(', ')', '%', 'CE', '7', '8', '9', '/', '4', '5', '6', 'x', '1', '2', '3', '-', '0', '.', '=', '+']
  let [expression, setExpression] = useState('');


  function clickEventHandler(e) {
    let currentSymb = e.target.textContent;
    let isNumber = isNaN(Number(currentSymb)) ? false : true

    if (e.target.textContent == 'CE') {
      setExpression('');
      return;
    }

    if (!isNumber) {
      if (expression === '' && currentSymb !== '-') {
        let newExpression = '0' + ' ' + currentSymb + ' ';
        setExpression(newExpression);
        return;
      }

      let expArr = expression.split(' ')
      let lastElement = expArr[expArr.length - 2] ? expArr[expArr.length - 2] : expArr[expArr.length - 1];
      console.log(expArr);
      let isLastElementNumber = isNaN(Number(lastElement)) ? false : true
      
      if (!isLastElementNumber) {
        return;
      }
    }

    if (e.target.textContent == '.') {
      let expArr = expression.split(' ')
      let expArrArr = Array.from(expArr[expArr.length - 1].split(''));

      console.log(expArrArr);
      if (expArrArr.includes('.')) {
        return;
      }
      
    }

    if (e.target.textContent !== '=') {
      let newExpression;
      if (isNumber || currentSymb === '.') {
          newExpression = expression  + `${e.target.textContent}`;
      } else {
          newExpression = expression  + ' ' + `${e.target.textContent}` + ' ';
      }
        console.log(newExpression);
        setExpression(newExpression);
    }

  }

  return (
    <div className="calculator">
      <div className="calculatorScreen">
          <Screen expression={expression}></Screen>
      </div>
      <div className="calculatorButtons">
          {calcItems.map(item => <Button key={Math.random()} clickHandler={clickEventHandler} symbol={item}></Button>)}
      </div>
    </div>
  );
}

export default App;
