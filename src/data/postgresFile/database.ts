import { Sequelize } from "sequelize";
require("dotenv").config();

import { initUserModel } from "./models/user.model";

// Usamos la URL completa
const sequelize = new Sequelize(process.env.POSTGRES_URL!, {
  dialect: "postgres",
  logging: false, // opcional, para no mostrar logs SQL
});

 async function syncDatabase() {
    try {

        await sequelize.sync({ force: true }); // `alter: true` actualiza la tabla si hay cambios

    } catch (error) {
        console.error("Error al sincronizar la base de datos:", error);
    }
}


initUserModel(sequelize)

// console.log(sequelize.models);
const { User } = sequelize.models
 
export {sequelize, syncDatabase, User };
