const zmq = require('zeromq');
const config = require('./../../config');

// TODO: add store for all clients

class MessageServer {
    constructor() {
        this.sock = zmq.socket('dealer');
        this.sock.bindSync(`tcp://*:${config.app.port}`);
        console.log(`Server listening on port ${config.app.port}`);
        this.identity = null;

        // can't convert to es6
        this.sock.on('message', function onMessage() {
            let args = Array.apply(null, arguments);
            this.identity = args[0];
            
            console.log('received a message related to:', 'containing message:', args[2].toString('utf8'));
        });
    }

    sendMessage(message) {
        console.log(`Sending following message: ${message}.`);
        this.sock.send([this.identity, '', message]);
    }
}

module.exports = MessageServer