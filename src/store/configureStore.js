
// Dynamic imports aren't supported by ES6 so 'require' is used instead of 'import'...

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./configureStore.prod');
} else {
    module.exports = require('./configureStore.dev');
}