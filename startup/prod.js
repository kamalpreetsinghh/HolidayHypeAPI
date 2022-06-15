const helmet = require('helmet')
const compression = rquire('compression')

module.exports = function(app) {
    app.use(helmet())
    app.use(compression())
}