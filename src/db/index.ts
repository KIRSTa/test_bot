import { DataTypes, Model, Sequelize } from "sequelize"

export const sequelize = new Sequelize("tele", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
})

export class User extends Model {}

User.init(
  {
    // Здесь определяются атрибуты модели
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telegramId: DataTypes.STRING,
  },
  {
    // Здесь определяются другие настройки модели
    sequelize, // Экземпляр подключения (обязательно)
    modelName: "User", // Название модели (обязательно)
  }
)
