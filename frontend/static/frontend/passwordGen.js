let arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr_ENg = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let arr_symb = ['!', '@', '#', '$', '%', '^','&','*','(',')','_','?', '-', '+', '=', '~','/','|','<','>','.'];

const compareRandom = ( ) => Math.random() - 0.5;

const randomInteger = ( min, max ) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

function generatePassword() {
    let arr = [];
    if (document.querySelector('#arr_num').checked) arr = arr.concat(arr_num);
    if (document.querySelector('#arr_en').checked) arr = arr.concat(arr_en);
    if (document.querySelector('#arr_ENg').checked) arr = arr.concat(arr_ENg);
    if (document.querySelector('#arr_symb').checked) arr = arr.concat(arr_symb);

    arr.sort(compareRandom);

    let password = '';
    let passLenght = document.querySelector('#passLenght').value;

    for (let i = 0; i < passLenght; i++) {
        password += arr[randomInteger(0, arr.length - 1)];
    }

    document.querySelector('#result').textContent = password;
}

document.querySelector('#pass_start').addEventListener('click', generatePassword);

document.querySelector("#copy1-generated-password").onclick = () => navigator.clipboard.writeText(document.querySelector("#result").innerText.trim());