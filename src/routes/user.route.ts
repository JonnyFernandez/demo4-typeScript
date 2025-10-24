import {Router} from 'express'
import { ValidationError } from "sequelize";
import { createUser, getUser } from '../controllers/user.controllers';

const routeUser = Router();


routeUser.post("/", async (req, res) => {
  try {
    const data = req.body;

    // Validación mínima antes de crear
    // if (!data.password) {
    //   return res.status(400).json({ message: "El password es obligatorio" });
    // }

    const aux = await createUser(data);
    return res.status(200).json(aux);

  } catch (error) {
    // if (error instanceof ValidationError) {
    //   const messages = error.errors.map(e => e.message);
    //   return res.status(400).json({ errors: messages });
    // }
    return res.status(500).json({ message: (error as Error).message });
  }
});


routeUser.get('/', async(req,res)=>{
    try {
        const aux = await getUser()
        return res.status(200).json(aux)
    } catch (error) {
        return res.status(400).json(error)
        
    }
})



export default routeUser




