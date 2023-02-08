const config = require('./src/config');

require('./src/MessageHandler/index');

if (config.type == 'client')
    require('./src/Client/tinkerforge');
else
    require('./src/Server/server');