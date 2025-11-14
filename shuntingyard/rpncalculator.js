import Stack from '../../datastruktur-portfolio/Stack/stack.js';
import Queue from '../../datastruktur-portfolio/Queue/queue.js';
export function rpnCalculator(expression) {
    const log = console.log;
    const stack = new Stack();
    const tokens = expression.split(' ');
    const inputQueue = new Queue();
    tokens.forEach(token => inputQueue.enqueue(token));
    const validOperations = ["+", "-", "*", "/", "^"];

    while(inputQueue.size() > 0) {
        const element = inputQueue.dequeue();
        log(`Dequeued element: ${element}`);
        if (validOperations.includes(element)) {
            stack.push( performOperation(element) );
        }
        else if (isNaN(Number( element )) === false) {
            log(`Element ${element} added to stack.`);
            stack.push(Number(element));
        }
        else {
            log(`Something went wrong with element ${element}.`);
            return;
        }

    }
    return stack.pop();

    function performOperation(operation) {
        const operandA = stack.pop();
        const operandB = stack.pop();
        switch(operation) {
            case "+":
                return operandA + operandB;
            case "-":
                return operandB - operandA;
            case "*":
                return operandA * operandB;
            case "/":
                return operandB / operandA;
            case "^":
                return Math.pow(operandB, operandA);
        }
    }
}

console.log(`Calculating 2 + 3 = ${rpnCalculator("3 2 +")}`)
console.log(`Calculating 3 - 2 = ${rpnCalculator("3 2 -")}`)
console.log(`Calculating 2 * 3 = ${rpnCalculator("3 2 *")}`)
console.log(`Calculating 8  / 2 = ${rpnCalculator("8 2 /")}`)