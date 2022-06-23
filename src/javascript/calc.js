let num1 = '';
let num2 = '';
let sign = '';
finish = false;
const numbers = ['1', '2', '3', '4', '5','6', '7', '8', '9','0', '.'];
const operation = ['+', '-', '/', '*'];

const scr = document.querySelector('.screen');

function buttonPressed(num) {
    if (numbers.includes(num)) {
            if (num2 === '' && sign === '') {
                // стираем результат, если хотим заново ввести 2 числа 
                if (finish && sign === '') {
                    num1 = '';
                    finish = false;
                }
                if (num === '.'  && num1 === '') {
                    num1 = '0.';
                    scr.textContent = num1;
                } else if (num === '.' && num1.includes('.')) {
                    num1 += '';
                    scr.textContent = num1;
                } else {
                num1 += num;
                scr.textContent = num1;
                }
            } else { 
            if (sign !== '') {
                if (num === '.'  && num2 === '') {
                    num2 = '0.';
                    scr.textContent = num2;
                } else if (num === '.' && num2.includes('.')) {
                    num2 += '';
                    scr.textContent = num2;
                } else {
                num2 += num;
                scr.textContent = num2;
                }
            }
            return;
        }    
    }


    if (operation.includes(num)) {
        sign = num;
        scr.textContent = sign;
        if (num1 === '' && num2 === '') {
            scr.textContent = ('Сначала нужно ввести число!');
            sign = '';
        }
        return;
    }

    
    if (num === '='){
        switch (sign) {
            case '+':
                num1 = +num1 + +num2;
                break
            case '-':
                num1 = num1 - num2;
                break
            case '*':
                num1 = num1 * num2;
                break
            case '/':
                if (num2 === '0') {
                    scr.textContent = 'Делить на ноль нельзя!';
                    num1 = '';
                    num2 = '';
                    sign = '';
                    return;
                }
                num1 = num1 / num2;
                break
        }
        num1 = num1.toString();
        if (num1.length > 12) {
            num1 = Number(num1);
            num1 = num1.toFixed(10);
        }
        scr.textContent = num1;
        finish = true;
        sign = '';
        num2 = '';
    }
} 