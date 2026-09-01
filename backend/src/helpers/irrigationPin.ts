var Gpio = require('onoff').Gpio

// physical pin 7, active-low relay: HIGH = off
export const irrigationPin = new Gpio(516, 'out', { initial: 1 })
