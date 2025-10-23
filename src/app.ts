import { envs } from "./config/plugins/envs.plugin";
// import { MongoDatabase } from "./data/mongo"
import { MongoDatabase } from "./data/mongoFile";
import { UserModel } from "./data/mongoFile/models/user.model";


(async()=>{
    await MongoDatabase.connect({mongoUrl: envs.MONGO_URL, dbName: envs.MONGO_DB_NAME})
   
    // await UserModel.create({
    //     name:'pepe',
    //     password:123456,
    //     type: 'admin',
    //     phone: 2215047727
    // })

  

})();