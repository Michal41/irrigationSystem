var Gpio = require('onoff').Gpio;
var PIN = new Gpio(516, 'out', { initial: 1 }); // on rasberyPI it is physical 7


export const startIrrigation = async () => {
  PIN.writeSync(0)
}


startIrrigation().then()
