import {sequelize, User,syncDatabase} from "./data/postgresFile/database";
import express  from "express";
import route from "./routes/route";


const server = express();


const PORT = process.env.PORT || 3001;

server.use(express.json());


server.use("/api", route);





syncDatabase().then(() => {
    server.listen(PORT, () => {
        console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
    });
});



