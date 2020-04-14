const cp = require('child_process')

/* Run typescript with no logs */
console.log = () => {}
cp.execSync(`tsc --watch`)
