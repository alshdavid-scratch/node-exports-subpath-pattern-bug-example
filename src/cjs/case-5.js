// Should resolve to 'pkg/require/bar/index.js'
// Unable to resolve, throws error
const { bar } = require('pkg/bar')  

console.log(bar)

// The package.json specifies "require": ["./require/*.js", "./require/*/index.js"]
// So I expect Node to try to resolve
// 
// 'pkg/require/bar.js' (fail, next)
// 'pkg/require/bar/index.js' (success, return)
//
// However Node only tests the first pattern in the sub pattern list and ignores the following
