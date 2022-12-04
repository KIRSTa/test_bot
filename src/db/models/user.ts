import { Model, DataTypes } from "sequelize"
import { sequelize } from ".."

export interface IUserDTO {
  firstName: string
  telegramId: string
}

export const User = sequelize.define("User", {
  // имя
  firstName: DataTypes.STRING,
  telegramId: DataTypes.STRING,
})
