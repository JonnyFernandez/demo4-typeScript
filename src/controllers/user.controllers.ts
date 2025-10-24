import { User } from "../data/postgresFile/database"


interface user{
    name: 'string',
    password: 'string'
}


export const createUser=async(user: user)=>{
    if(!user.password) throw new Error('Ponde pass')
    try {
        const aux = await User.create({name:user.name, password: user.password})
        return aux  
    } catch (error) {
        console.log(error);
        
    }
}
export const getUser=async()=>{
    try {
        const aux = await User.findAll()
        return aux  
    } catch (error) {
        console.log(error);
        
    }
}