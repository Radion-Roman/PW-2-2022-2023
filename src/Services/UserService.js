const GameRepository = require('../database/repositories/GameRepository')

class UserService {
    async getAll(fields = undefined) {
        return await UserRepository.getAll(fields)
    }

    async getOne(id) {
        return await UserRepository.getOne(id)
    }

    async create(category) {
        return await UserRepository.create(category)
    }

    async update(id, category) {
        const existingUser = await Category.findByPk(id)
        if (existingUser) {
            return await existingUser.update(category);
        }
        return null;
    }

    async delete(id) {
        return await UserRepository.delete(id)
    }
}

module.exports = new UserService()