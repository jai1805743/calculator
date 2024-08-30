let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let expression = ""; 
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.textContent;
        switch (value) {
            case '=':
                try {
                    
                    if (expression.trim() === "") {
                        expression = "";
                    } else {
                        
                        expression = Function('"use strict";return (' + expression + ')')();
                       
                        if (!isFinite(expression)) {
                            throw new Error("Invalid operation");
                        }
                    }
                } catch {
                    expression = "Error";
                }
                input.value = expression;
                break;

            case 'AC':
                expression = "";
                input.value = expression;
                break;

            case 'DEL':
                expression = expression.slice(0, -1);
                input.value = expression;
                break;

            default:
               
                if (value === '.' && expression.endsWith('.')) {
                    return; 
                }
                expression += value;
                input.value = expression;
                break;
        }
    });
});
