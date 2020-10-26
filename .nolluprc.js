const path = require('path')

const SVENCH = !!process.env.SVENCH

module.exports = {
  config: path.resolve(SVENCH ? `rollup.config.svench.js` : `rollup.config.js`),
  hot: true,
  watch: ['src', '.svench'],
}
