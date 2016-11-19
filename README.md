# rpn.js
Calculate Reverse Polish Notation

## Why I do it
I want to moke a Calculator WeixinAPP, but I found that WeixinAPP don't support 'eval' maybe for the security.

## Getting it
In a browser, you can load rpn with a script tag, as you would any other JavaScript library:

```html
<script src="rpn.js" type="text/javascript"></script>
```
or
```html
<script src="rpn.min.js" type="text/javascript"></script>
```
## Usage
1. 
<code> isOperator(value) </code> if value is oneof operators(<code> +-*/()×÷ </code>), return <code>true</code>

<pre>
isOperator("1");
//	return false
isOperator("/");
//	return true
</pre>

2. 
<code> outputRpn(exp) </code> return a RPN expression as a array

<pre>
outputRpn("90+(3-1)*3+10/2");
//	return [90,3,1,'-',3,'*','+',10,2,'/','+']
</pre>

3. 
<code> calRpnExp(rpnArr) </code> return value

<pre>
var rpn = [90,3,1,'-',3,'*','+',10,2,'/','+'];
calRpnExp(rpn)
//	return 101
</pre>

4. 
<code> calCommonExp(exp) </code> return value

<pre>
calCommonExp('90+(3-1)*3+10/2');
//	return 101
</pre>