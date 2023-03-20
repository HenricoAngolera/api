const AppError = require('../utils/AppError')

class UsersController {
  create(request, response) {
    const { name, email, password } = request.body

    if (!name) {
      throw new AppError('O nome é obrigatório!')
    }

    response.status(201).json({ name, email, password })
    // Success code, created
  }
}

module.exports = UsersController
