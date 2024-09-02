const input = document.getElementById('input');

function display(button){
    const lastChar = input.value.slice(-1);

    const operators = ['+', '-', '*', '/', '.'];
    
    if (operators.includes(button.value)) {
        if (operators.includes(lastChar)) {
            input.value = input.value.slice(0, -1) + button.value;
        } else {
            input.value += button.value;
        }
    } else {
        input.value += button.value;
    }
}

function clearAllBtn(){
    input.value = '';
}

function clearBtn(){
    input.value = input.value.slice(0, -1);
}

function equal(){
    input.value = eval(input.value)
}

input.addEventListener("keypress", e => {
    if (e.key === "Enter") {
      e.preventDefault();
      equal();
    }
});
