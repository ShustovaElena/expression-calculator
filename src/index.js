function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    const operators = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => x / y,
    };
    
        let result =[];
        let stack = [];
        
        let newExpr = expr.split(' ');
      
        
        for (let i = 0; i < newExpr.length; i++) {
            if (newExpr[i] === '') {
                delete newExpr[i];
                continue;
            }

            if (newExpr[i] === '(') {
                stack.push();
            } else if (Object.keys(operators).includes(newExpr[i])) {
                stack.push(newExpr[i]);
            } else {
                result.push(parseInt(newExpr[i]));
            }

            if (newExpr[i] === ')') {
                if (result.length > 1) {
                let [y, x] = [result.pop(), result.pop()];
                result.push(operators[newExpr[i]](x, y));
                stack.pop();
                } 
            }

            if (result.length === 1) {
                continue;
            }
            if (result.length > 1) {
                let [y, x] = [result.pop(), result.pop()];
                result.push(operators[stack[stack.length - 1]](x, y));
            }
        }
        
        result = result.pop();
        return result;
   
}

module.exports = {
    expressionCalculator
}