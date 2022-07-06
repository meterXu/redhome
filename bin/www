#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require('../app');
const debug = require('debug')('mtapi:server');
const http = require('http');
const https = require('https');
const fs = require('fs');
const config = require('../common/config')



function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || config.port);
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log(`http server start on http://localhost:${config.port}`)
if(config.ssl.enable){
    const options = {
        key:fs.readFileSync(config.ssl.key,'utf8'),
        cert:fs.readFileSync(config.ssl.cert,'utf8')
    };
    const httpsServer = https.createServer(options,app);
    httpsServer.listen(config.ssl.port);
    httpsServer.on('error', onError);
    httpsServer.on('listening', onListening);
    console.log(`https server start on https://localhost:${config.ssl.port}`)
}
