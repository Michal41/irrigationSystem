export const startIrrigation = () => {
  console.log('start irrigation')
  //@ts-ignore
  if(process.env.NODE_ENV !== 'production') {
    return
  }
  //@ts-ignore
  let Gpio = require('onoff').Gpio;
  var PIN = new Gpio(516, 'out', { initial: 1 });
  PIN.writeSync(0)
}