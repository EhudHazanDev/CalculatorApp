export const MathActions = {
    //additionAction,
    //subtrAction,
    //multiplicationAction,
    //divisionAction,
    //pointAction,
    deleteAction,
    clearAction,
    resultAction
}

function deleteAction(input) {
    input = input.substr(0, input(input.toString.length() - 1));
    return input;
}

function clearAction(input) {
    return '';
}

function resultAction(firstInput, secondInput, operator) {
    let result = 0;
    switch (operator) {
        case '+':
            result = firstInput + secondInput;
            break;
        case '-':
            result = firstInput - secondInput;
            break;
        case '*':
            result = firstInput * secondInput;
            break;
        case '/':
            result = firstInput / secondInput;
            break;
        default:
    }
    return result;
}


// function additionAction(newInput, oldInput) {
//     return result;
// }

// function subtrAction(newInput, oldInput) {
//     const result = newInput - oldInput;
//     return result;
// }

// function multiplicationAction(newInput, oldInput) {
//     const result = newInput * oldInput;
//     return result;
// }

// function divisionAction(newInput, oldInput) {
//     const result = newInput / oldInput;
//     return result;
// }

// function pointAction(input) {}