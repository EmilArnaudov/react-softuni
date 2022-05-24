import {useState} from 'react';

import './App.css';
import Button from './calcuator-buttons/Button';
import Screen from './calculator-screen/Screen';

function App() {
  const calcItems = ['(', ')', '%', 'CE', '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+']
  let [expression, setExpression] = useState('');

  function evaluate(expression)
  {
      let tokens = expression.split('');

      let values = [];
      let ops = [];

      for (let i = 0; i < tokens.length; i++)
      {
          if (tokens[i] == ' ')
          {
              continue;
          }

          if (tokens[i] >= '0' && tokens[i] <= '9')
          {
              let sbuf = "";
                
              while (i < tokens.length &&
                      tokens[i] >= '0' &&
                          tokens[i] <= '9')
              {
                  sbuf = sbuf + tokens[i++];
              }
              values.push(parseInt(sbuf, 10));
              
                i--;
          }

          else if (tokens[i] == '(')
          {
              ops.push(tokens[i]);
          }
          else if (tokens[i] == ')')
          {
              while (ops[ops.length - 1] != '(')
              {
                values.push(applyOp(ops.pop(),
                                 values.pop(),
                                values.pop()));
              }
              ops.pop();
          }

          else if (tokens[i] == '+' ||
                   tokens[i] == '-' ||
                   tokens[i] == '*' ||
                   tokens[i] == '/')
          {
                
              while (ops.length > 0 &&
                       hasPrecedence(tokens[i],
                                   ops[ops.length - 1]))
              {
                values.push(applyOp(ops.pop(),
                                 values.pop(),
                               values.pop()));
              }

              ops.push(tokens[i]);
          }
      }

      while (ops.length > 0)
      {
          values.push(applyOp(ops.pop(),
                           values.pop(),
                          values.pop()));
      }
      return values.pop();
  }

  function hasPrecedence(op1, op2)
  {
      if (op2 == '(' || op2 == ')')
      {
          return false;
      }
      if ((op1 == '*' || op1 == '/') &&
             (op2 == '+' || op2 == '-'))
      {
          return false;
      }
      else
      {
          return true;
      }
  }

  function applyOp(op, b, a)
  {
      switch (op)
      {
      case '+':
          return a + b;
      case '-':
          return a - b;
      case '*':
          return a * b;
      case '/':
          if (b == 0)
          {
              document.write("Cannot divide by zero");
          }
          return parseInt(a / b, 10);
      }
      return 0;
  }


  function clickEventHandler(e) {
    let currentSymb = e.target.textContent;
    let isNumber = isNaN(Number(currentSymb)) ? false : true

    if (currentSymb === '=' && expression !== '') {
      let result = evaluate(expression);
      setExpression(result);
      return;
    }

    if (currentSymb == 'CE') {
      setExpression('');
      return;
    }

    if (currentSymb === '.') {
      let expArr = expression.split(' ');
      let lastEl = expArr[expArr.length - 1].split('');
      if (lastEl.includes('.')) {
        return
      } else {
        let newExpression = expression +  currentSymb
        setExpression(newExpression);
        return;
      }
    }

    if (!isNumber && expression === '' && currentSymb !== '(') {
      return;
    } else if (!isNumber) {
      let newExpression = expression + ' ' + currentSymb + ' '
      setExpression(newExpression);
    } else if (isNumber) {
      let newExpression = expression +  currentSymb
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
