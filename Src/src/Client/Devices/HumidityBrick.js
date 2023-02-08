const Tinkerforge = require('tinkerforge');

class HumidityBrick {
    constructor(ipcon, mClient) {
        this.ipcon = ipcon;
        this.mClient = mClient;

        const UID = '62DrY6';
        const h = new Tinkerforge.BrickletHumidityV2(UID, this.ipcon); // Create device object

        setInterval(() => { 
            h.getHumidity((humidity) => {
                mClient.sendMessage(humidity);
                console.log('Humidity: ' + humidity/100.0 + ' %RH');
            });
        }, 500);        
    }
}

module.exports = HumidityBrick;