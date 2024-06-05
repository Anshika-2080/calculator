
const input = document.querySelector('input');
const buttons = document.querySelectorAll('button');

input.value = localStorage.getItem('inputStorage');
// input.value = JSON.parse(localstorage.getItem('inputStorage')) || '0';

let string = "";
const arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (evt) => {
        if (evt.target.innerHTML =='=') {
            string = eval(string);
            input.value = string;
        }
        else if (evt.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (evt.target.innerHTML == 'DEL') {
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else {
            string += evt.target.innerHTML;
            input.value = string;
        }
        localStorage.setItem('inputStorage', input.value);
    })
})



