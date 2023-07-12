const { hash } = require('bcryptjs')
const AppError = require('../utils/AppError')

class UserCreateService {

  constructor(userRepository) { // construtor
    this.userRepository = userRepository
  }

  async execute({ name, email, password }) {

    const checkUserExist = await this.userRepository.findByEmail(email) // this

    if (checkUserExist) {
      throw new AppError('Este email já está em uso.')
    }

    const hashedPassword = await hash(password, 8)

    await this.userRepository.create({ name, email, password: hashedPassword }) // this
  }
}

module.exports = UserCreateService