let num1 = '';
let num2 = '';
let sign = '';
let finish = false;

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const signs = ['+', '-', '*', '/'];

// Цифра на экране
const screenNum = document.querySelector('.screen');

document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btns')) return;

    const key = event.target.textContent;

    if (numbers.includes(key)) {
        if (num2 === '' && sign === '') {
            if (key === '.'  && num1 === '') {
                num1 = '0.';
                screenNum.textContent = num1;
            } else if (key === '.' && num1.includes('.')) {
                num1 += '';
                screenNum.textContent = num1;
            } else {
            num1 += key;
            screenNum.textContent = num1;
            }
        } else if (num1 !== '' && num2 !== '' && finish) {
            num2 = key;
            finish = false;
            screenNum.textContent = num2;
        } else {
            if (key === '.'  && num2 === '') {
                num2 = '0.';
                screenNum.textContent = num2;
            } else if (key === '.' && num2.includes('.')) {
                num2 += '';
                screenNum.textContent = num2;
            } else {
            num2 += key;
            screenNum.textContent = num2;
            }
        }
        return;   
    }


    if (signs.includes(key)) {
        sign = key;
        screenNum.textContent = sign;
        return;
    }


    if (key === '=') {
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
                    screenNum.textContent = 'Нельзя делить на ноль!';
                    num1 = '';
                    num2 = '';
                    sign = '';
                    return;
                }
                num1 = num1 / num2;
                break
        }
        finish = true;
        screenNum.textContent = num1;
    }
}