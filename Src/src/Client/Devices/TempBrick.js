const Tinkerforge = require('tinkerforge');

class TempBrick {
    constructor(ipcon, mClient) {
        this.ipcon = ipcon;
        this.mClient = mClient;

        const UID = '6Ct7da';
        const t = new Tinkerforge.BrickletTemperature(UID, this.ipcon); // Create device object

        /** 
         * should work but doesn't work with current mock 
        t.setTemperatureCallbackPeriod(250);

        t.on(Tinkerforge.BrickletTemperature.CALLBACK_TEMPERATURE,

            (temperature) => {
                console.log('Temperature: ' + temperature/100.0 + ' °C');
            }
        );
        **/

        // workaround for mock device
        setInterval(() => { 
            t.getTemperature((temperature) => {
                console.log('Temperature: ' + temperature/100.0 + ' °C');
            });
        }, 500);        
    }
}

module.exports = TempBrick;