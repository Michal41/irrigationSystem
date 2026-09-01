import { irrigationPin } from './irrigationPin'

export const startIrrigation = async () => {
  irrigationPin.writeSync(0)
}
