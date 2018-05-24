const rollup = require('rollup');
const rollupConfig = require('../rollup.config');

(async function build() {
    const bundle = await rollup.rollup({
        input: rollupConfig.input,
        plugins: rollupConfig.plugins
    });

    await bundle.write(rollupConfig.output);
})();


