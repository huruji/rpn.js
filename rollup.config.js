const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');

module.exports =  {
    input: "src/index.js",
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        uglify(),
    ],
    output: {
        file: "rpn.min.js",
        format: 'umd',
        name: "rpn"
    }
};