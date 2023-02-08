const Tinkerforge = require('tinkerforge');
const HOST = 'localhost';
const PORT = 4225;

const TempBrick = require('./Devices/TempBrick');
const HumidityBrick = require('./Devices/HumidityBrick');

const mClient = require('./../MessageHandler/index').mClient;

const ipcon = new Tinkerforge.IPConnection();

ipcon.connect(HOST, PORT,
    (error) => {
        console.log('Error: ' + error);
    }
);

ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED, () => {
    new TempBrick(ipcon, mClient);
    new HumidityBrick(ipcon, mClient);
});