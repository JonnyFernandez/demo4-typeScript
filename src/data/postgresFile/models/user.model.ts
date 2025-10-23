import { Sequelize, DataTypes, Model, Optional } from "sequelize";

// Definimos los atributos de User
interface UserAttributes {
  id: string;
  name?: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Para la creación de nuevos registros (id generado automáticamente)
interface UserCreationAttributes extends Optional<UserAttributes, "id" | "createdAt" | "updatedAt"> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: string;
  public name?: string;
  public password!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Función para inicializar el modelo
export const initUserModel = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "User",
      timestamps: true,
      freezeTableName: true,
    }
  );
};
