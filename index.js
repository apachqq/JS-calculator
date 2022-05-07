let a = ''; // first number
let b = ''; // second number
let sign = ''; // operation
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

// display
const out = document.querySelector('.calc-screen p');

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    // press note button
    if (!event.target.classList.contains('btn')) return;

    // press button clearAll ac
    if (event.target.classList.contains('ac')) return;

    out.textContent = '';

    // get pressed button
    const key = event.target.textContent;

    // if pressed 0-9 or .

    if (digit.includes(key)) {
        a += key;
        console.log(a, b, sign)
        out.textContent = a;
    }
    // if pressed button + - / *
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign)
        return;
    }
}
