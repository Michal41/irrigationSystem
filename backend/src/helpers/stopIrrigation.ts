var Gpio = require('onoff').Gpio;
var PIN = new Gpio(516, 'out', { initial: 1 }); // on rasberyPI it is physical 7

export const stopIrrigation = async () => {
  PIN.writeSync(1)
}


stopIrrigation().then()
