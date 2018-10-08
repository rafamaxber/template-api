import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  console.log(process.env)
  res.status(200).json({ name: 'Rafael', lastname: 'Talking' })
})

export default router
