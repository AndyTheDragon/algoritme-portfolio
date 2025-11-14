import Stack from './stack.js';
import Queue from './queue.js';
import { rpnCalculator } from './rpncalculator.js';

export function exprCalculator(expression) {
    const log = console.log;
    const outputQueue = new Queue();
    const operatorStack = new Stack();
    const tokens = expression.split(' ');
    const precedence = {
        "^": 5,
        "*": 4,
        "/": 3,
        "+": 2,
        "-": 1
        }

    for (let token of tokens) {
        if (token === '') {
            continue;
        }
        if (isNumber(token)) {
            log(`Token ${token} is a number, enqueueing to output.`);
            outputQueue.enqueue(Number(token));
        }
        else if (isOperator(token)) {
            log(`Token ${token} is an operator, processing operator stack.`);
            let nextOperator = operatorStack.peek();
            while (nextOperator && nextOperator !== "(" &&
                   ((precedence[token] < precedence[nextOperator]) ||
                    (precedence[token] === precedence[nextOperator] && token !== "^"))) {
                const op = operatorStack.pop();
                log(`Popping operator ${op} from operator stack to output.`);
                outputQueue.enqueue(op);
                nextOperator = operatorStack.peek();
            }
            operatorStack.push(token);
        }
        else if (token === "(") {
            log(`Token ${token} is a left parenthesis, pushing to operator stack.`);
            operatorStack.push(token);
        }
        else if (token === ")") {
            log(`Token ${token} is a right parenthesis, popping until left parenthesis.`);
            let nextOperator = operatorStack.peek();
            while (nextOperator && nextOperator !== "(") {
                const op = operatorStack.pop();
                log(`Popping operator ${op} from operator stack to output.`);
                outputQueue.enqueue(op);
                nextOperator = operatorStack.peek();
            }
            if (nextOperator === "(") {
                operatorStack.pop(); // Remove the "(" from stack
                log(`Popped left parenthesis from operator stack.`);
            } else {
                log(`Error: Mismatched parentheses.`);
                return null;
            }
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
    return rpnCalculator(outputString.trim());

    function isNumber(token) {
        return isNaN(Number(token)) === false;
    }

    function isOperator(token) {
        const validOperations = new Set(["+", "-", "*", "/", "^"]);
        return validOperations.has(token);
    }

}
