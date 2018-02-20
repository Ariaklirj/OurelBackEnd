/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * Only applies to HTTP requests (not WebSockets)
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.http.html
 */
module.exports.http = {
  bodyParser: function () {
    var opts = {limit:'20mb'};
    var fn;
    // Default to built-in bodyParser:
    fn = require('skipper');
    return fn(opts);
  },
  middleware: {
    /**
     * Middleware for setting Connection: keep-alive to all responses
     */
    keepAlive: (req, res, next) => {
      res.set('Connection', 'keep-alive');
      next();
    },
    // Logs each request to the console
    requestLogger: (req, res, next) => {
        console.log("Requested :: ", req.method, req.url);
        next();
    },
    /**
     * The order in which middleware should be run for HTTP request
     * @type {Array}
     */
    order: [
      'compress',
      'keepAlive',
      'requestLogger',
      'bodyParser',
      '$custom',
      'router',
      '404',
      '500'
    ]
  },
  // cache: 31557600000
};