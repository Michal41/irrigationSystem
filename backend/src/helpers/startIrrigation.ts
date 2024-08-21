if (process.env.DRY_RUN === 'true') {
  var Gpio = require('onoff').Gpio
  var PIN = new Gpio(516, 'out', { initial: 1 }) // on rasberyPI it is physical 7
} else {
  //@ts-ignore
  var PIN = { writeSync: () => {} }
}

export const startIrrigation = async () => {
  PIN.writeSync(0)
}

startIrrigation().then()
