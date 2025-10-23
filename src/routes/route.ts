import {Router} from 'express'
import routeUser from './user.route';

const route = Router();


route.use('/user', routeUser)





export default route