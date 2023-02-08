const MessageClient = require('./Client/index');
const MessageServer = require('./Server/index');
const config = require('./../config');

let mClient, mServer = null;

if (config.type == 'client')
    mClient = new MessageClient();
else
    mServer = new MessageServer();

module.exports = { mClient, mServer };