class rpn{
    constructor(exp) {
        if(!exp) return this;
        this.$exp = exp;
        this.$rpnExp = this.$outputRpn().join('');
    }

    toRpn() {
        return this.$rpnExp;
    }

    calculate() {
        return this.$calCommonExp(this.$exp)
    }

    $outputRpn() {
        let exp = this.$exp;
        let inputStack = [], outputStack = [], outputQueue = [], firstIsOperator = false;

        exp.replace(/\s/g,'');
        if(this.$isOperator(exp[0])){
            exp = exp.substring(1);
            firstIsOperator = true;
        }
        for(let i = 0, max = exp.length; i < max; i++) {
            if(!this.$isOperator(exp[i]) && !this.$isOperator(exp[i-1]) && (i !== 0)) {
                inputStack[inputStack.length-1] = inputStack[inputStack.length-1] + exp[i] + '';
            } else {
                inputStack.push(exp[i]);
            }
        }
        if(firstIsOperator) {
            inputStack[0] = -inputStack[0]
        }
        while(inputStack.length > 0) {
            let cur = inputStack.shift();
            if(this.$isOperator(cur)) {
                if (cur === '(') {
                    outputStack.push(cur);
                } else if (cur === ')') {
                    let po = outputStack.pop();
                    while(po !== '(' && outputStack.length > 0) {
                        outputQueue.push(po);
                        po = outputStack.pop();
                    }
                } else {
                    while(this.$prioraty(cur,outputStack[outputStack.length - 1]) && outputStack.length > 0) {
                        outputQueue.push(outputStack.pop());
                    }
                    outputStack.push(cur)
                }
            } else {
                outputQueue.push(Number(cur));
            }
        }
        if(outputStack.length > 0){
            while (outputStack.length > 0) {
                outputQueue.push(outputStack.pop());
            }
        }
        return outputQueue;
    }

    $isOperator(value) {
        const operatorString = '+-*/()×÷';
        return operatorString.includes(value);
    }

    $getPrioraty(value) {
        if(value === '-' || value === '+') {
            return 1;
        } else if(value === '*' || value === '/' || value === '×' || value === '÷' ) {
            return 2;
        } else{
            return 0;
        }
    }

    $prioraty(v1, v2) {
        return this.$getPrioraty(v1) <= this.$getPrioraty(v2);
    }

    $calRpnExp(rpnArr) {
        const stack = [];
        for(let i = 0, max = rpnArr.length; i < max; i++) {
            if(!this.$isOperator(rpnArr[i])) {
                stack.push(rpnArr[i]);
            } else {
                let num1 = stack.pop(), num2 = stack.pop(), num;
                if(rpnArr[i] === '-') {
                    num = num2 - num1;
                } else if(rpnArr[i] === '+') {
                    num = num2 + num1;
                } else if(rpnArr[i] === '*' || rpnArr[i] === '×') {
                    num = num2 * num1;
                } else if(rpnArr[i] === '/' || rpnArr[i] === '÷') {
                    num = num2/num1;
                }
                stack.push(num);
            }
        }
        return stack[0];
    }

    $calCommonExp(exp) {
        let rpnArr = this.$outputRpn(exp);
        return this.$calRpnExp(rpnArr)
    }
}

export default rpn;