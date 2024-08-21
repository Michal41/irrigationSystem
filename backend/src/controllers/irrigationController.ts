import express from 'express'
import { stopIrrigation } from '../helpers/stopIrrigation'
import { startIrrigation } from '../helpers/startIrrigation'

const router = express.Router()
router.post('/irrigate', async (req, res) => {
  const irrigationTime = req.body.irrigationTime
  startIrrigation()
  setTimeout(() => {
    stopIrrigation()
  }, irrigationTime * 1000 * 60)
  return res.json({})
})

router.post('/stop', async (req, res) => {
  stopIrrigation()
  return res.json({})
})

export default router
