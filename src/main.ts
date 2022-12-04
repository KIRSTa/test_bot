import "dotenv/config"
import { sequelize, User } from "./db/index"
import { IUserDTO } from "./db/models/user"
import { UserService } from "./services/user.service"
;(async () => {
  try {
    await sequelize.authenticate()
    console.log("Соединение с БД было успешно установлено")
    await sequelize.sync({ force: true })
    const userService = new UserService()
    const data: IUserDTO = { firstName: "Alex", telegramId: "1212" }
    await userService.createUser(data)
    const user = await userService.getUser("Alex")
    console.log(user?.dataValues.firstName)
  } catch (e) {
    console.log("Невозможно выполнить подключение к БД: ", e)
  }
})()
