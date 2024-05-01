function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, op) {
  if (op === '+') {
    return add(a, b);
  }
  if (op === '-') {
    return subtract(a, b);
  }
  if (op === '*') {
    return multiply(a, b);
  }
  if (op === '/') {
    return divide(a, b);
  }
}

let num1 = '0', num2 = '0', result = '', op = '';

let expressionArr = [];

const screenLast = document.querySelector('.last');
const screenCurrent = document.querySelector('.current');

screenCurrent.textContent = `${num1}`;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.id == '=' || ((button.id == '+' || button.id == '-' || button.id == '*' || button.id == '/') && op != '') ) {
      if (num2 == '0') {
        result = num1;
        screenCurrent.textContent = result;
        screenLast.textContent = '';
        if (op == '/') {
          screenCurrent.textContent = 'ERROR';
          screenLast.textContent = '';
        }
        if (op == '*') {
          result = 0;
          screenCurrent.textContent = result;
          screenLast.textContent = '';
        }
      }
      else {
        num1 = Number(num1);
        num2 = Number(num2);
        result = operate(num1, num2, op);
        if (result % 1 != 0) {
          result = result.toFixed(4);
        }
        screenCurrent.textContent = result;
        screenLast.textContent = '';
        num1 = result;
        num2 = '0';
        op = '';
      }
    }

    if (op != '' && button.id != '=') {
      if (num2 == '0') {
        num2 = button.id;
        screenCurrent.textContent = num2;
      }
      else {
        num2 += button.id;
        screenCurrent.textContent = num2;
      }  
    } 

    if (num1 != '') {
      if (button.id == '+' || button.id == '-' || button.id == '*' || button.id == '/') {
        op = button.id;
        screenLast.textContent = `${num1} ${op}`;
        screenCurrent.textContent = `${num2}`;
      }
    }

    if (op == '' && (button.id != '=' || button.id != '+' || button.id != '-' || button.id != '*' || button.id != '/')) {
      if (num1 == '0') {
        if (button.id != '=') {
          num1 = button.id;
          screenCurrent.textContent = num1;
        }
      }
      else {
        if (button.id != '=') {
          num1 += button.id;
          screenCurrent.textContent = num1;
        }
      }
    }

    if (num1 == '+' || num1 == '-' || num1 == '*' || num1 == '/') {
      num1 = 0;
    }
    if (num2 == '+' || num2 == '-' || num2 == '*' || num2 == '/') {
      num2 = 0;
      screenCurrent.textContent = '0';
    }
    
    if (button.id == 'clear') {
      num1 = '0';
      num2 = '0';
      op = '';
      result = '';
      screenLast.textContent = ''
      screenCurrent.textContent = `${num1}`;
    }
  })
})
