import Stack from '../../datastruktur-portfolio/Stack/stack.js';
import Queue from '../../datastruktur-portfolio/Queue/queue.js';
import { rpnCalculator } from './rpncalculator.js';

export function exprCalculator(expression) {
    const log = console.log;
    const outputQueue = new Queue();
    const operatorStack = new Stack();
    const tokens = expression.split(' ');

    for (let token of tokens) {
        if (isNumber(token)) {
            log(`Token ${token} is a number, enqueueing to output.`);
            outputQueue.enqueue(Number(token));
        }
        else if (isOperator(token)) {
            log(`Token ${token} is an operator, processing operator stack.`);
            operatorStack.push(token);
        }
        else {
            log(`Token ${token} is invalid.`);
            return null;
        }
    }

    while (operatorStack.size() > 0) {
        const op = operatorStack.pop();
        log(`Popping operator ${op} from operator stack to output.`);
        outputQueue.enqueue(op);
    }

    let outputString = "";
    while (outputQueue.size() > 0) {
        const item = outputQueue.dequeue();
        outputString += item + " ";
    }
    log(`Final RPN expression: ${outputString.trim()}`);
    return outputString.trim();

    function isNumber(token) {
        return isNaN(Number(token)) === false;
    }

    function isOperator(token) {
        const validOperations = new Set(["+", "-", "*", "/", "^"]);
        return validOperations.has(token);
    }
}

console.log(`Input 3 + 4.`);
console.log(`RPN Calculation Result: ${rpnCalculator(exprCalculator("3 + 4"))}`);
console.log(`----------------`);
console.log(`Input 3 - 4.`);
console.log(`RPN Calculation Result: ${rpnCalculator(exprCalculator("3 - 4"))}`);
console.log(`----------------`);
console.log(`Input 3 * 4.`);
console.log(`RPN Calculation Result: ${rpnCalculator(exprCalculator("3 * 4"))}`);
console.log(`----------------`);
console.log(`Input 8 / 2.`);
console.log(`RPN Calculation Result: ${rpnCalculator(exprCalculator("8 / 2"))}`);
console.log(`----------------`);
console.log(`Input 2 ^ 8.`);
console.log(`RPN Calculation Result: ${rpnCalculator(exprCalculator("2 ^ 8"))}`);
console.log(`----------------`);
console.log(`Input 5 + 12 + 4 * -3.`);
console.log(`RPN Calculation Result: ${rpnCalculator(exprCalculator("5 + 12 + 4 * -3"))}`);
console.log(`----------------`);
console.log(`Input  4 * -3 + 5 + 12.`);
console.log(`RPN Calculation Result: ${rpnCalculator(exprCalculator("4 * -3 + 5 + 12"))}`);