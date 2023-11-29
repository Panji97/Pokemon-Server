import { Router, Request, Response } from 'express'

import MasterRoutes from './master.routes'
import Authenticate from '../middlewares/authenticate'
import AuthenticateRoutes from '../modules/auth/auth.routes'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.json({
    status: true,
    date: new Date(),
    result: 'REST API Hris (Legacy)'
  })
})

router.use('/o', new AuthenticateRoutes().routes())
router.use('/data', new Authenticate().verifyToken, new MasterRoutes().routes())

export default () => router
