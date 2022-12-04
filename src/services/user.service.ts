import { User } from "../db/index"
import { IUserDTO } from "../db/models/user"

export class UserService {
  async getUser(firstName: string) {
    return await User.findOne({ where: { firstName } })
  }

  async createUser(param: IUserDTO) {
    const user = await User.create({ firstName: param.firstName, telegramId: param.telegramId })
    console.log(`Created user: ${JSON.stringify(user)}`)
  }
}
