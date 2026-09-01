import { irrigationPin } from './irrigationPin'

export const stopIrrigation = async () => {
  irrigationPin.writeSync(1)
}
