import {Router} from 'express'
import { createUser, getUser } from '../controllers/user.controllers';

const routeUser = Router();


routeUser.post('/', async(req,res)=>{
    const data = req.body
    try {
        const aux = await createUser(data)
        return res.status(200).json(aux)
    } catch (error) {
        return res.status(400).json(error)
        
    }
})
routeUser.get('/', async(req,res)=>{
    try {
        const aux = await getUser()
        return res.status(200).json(aux)
    } catch (error) {
        return res.status(400).json(error)
        
    }
})



export default routeUser




