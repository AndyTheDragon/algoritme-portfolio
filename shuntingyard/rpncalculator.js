import Stack from '../../datastruktur-portfolio/Stack/stack.js';
import Queue from '../../datastruktur-portfolio/Queue/queue.js';
export function rpnCalculator(expression) {
    const log = () => {};
    const stack = new Stack();
    const tokens = expression.split(' ');
    const inputQueue = new Queue();
    tokens.forEach(token => token !== '' ? inputQueue.enqueue(token) : null);
    const validOperations = new Set(["+", "-", "*", "/", "^"]);

    while(inputQueue.size() > 0) {
        const element = inputQueue.dequeue();
        log(`Dequeued element: ${element}`);
        if (validOperations.has(element)) {
            if (stack.size() < 2) {
                log(`Error: Not enough operands on stack for operation ${element}.`);
                return null;
            }
            stack.push( performOperation(element) );
        }
        else if (isNaN(Number( element )) === false) {
            log(`Element ${element} added to stack.`);
            stack.push(Number(element));
        }
        else {
            log(`Something went wrong with element ${element}.`);
            return null;
        }

    }
    if (stack.size() !== 1) {
        log(`Error: Stack has ${stack.size()} elements after processing expression.`);
        return null;
    }
    return stack.pop();

    function performOperation(operation) {
        const operandA = stack.pop();
        const operandB = stack.pop();
        switch(operation) {
            case "+":
                return operandB + operandA;
            case "-":
                return operandB - operandA;
            case "*":
                return operandB * operandA;
            case "/":
                return operandB / operandA;
            case "^":
                return Math.pow(operandB, operandA);
        }
    }
}
