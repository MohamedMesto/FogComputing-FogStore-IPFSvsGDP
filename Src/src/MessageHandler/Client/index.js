const zmq = require('zeromq');
const config = require('./../../config');

// TODO: send initial connection to router

class MessageClient {
    constructor() {
        this.sock = zmq.socket('dealer');
        this.sock.connect(`tcp://${config.app.backendIp}:${config.app.port}`);
        this.sock.identity = `peer-${Math.random().toString(36).substr(2, 9)}`;
        console.log(`Client connected to port ${config.app.port}`);

        // can't convert to es6
        this.sock.on('message', function onMessage() {
            let args = Array.apply(null, arguments);

            console.log('received a message related to:', 'containing message:', args[2].toString('utf8'));
        });
    }

    sendMessage(message) {
        console.log(`Sending following message: ${this.sock.identity} - ${message}.`);
        this.sock.send([this.sock.identity, '', message]);
    }
}

module.exports = MessageClient