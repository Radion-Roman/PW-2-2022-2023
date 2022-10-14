const GameRepository = require('../database/repositories/GameRepository')

class GamesService {
    async getAll(fields = undefined) {
        return await GameRepository.getAll(fields)
    }

    async getOne(id) {
        return await GameRepository.getOne(id)
    }

    async create(category) {
        return await GameRepository.create(category)
    }

    async update(id, category) {
        const existingGame = await Category.findByPk(id)
        if (existingGame) {
            return await existingGame.update(category);
        }
        return null;
    }

    async delete(id) {
        return await GameRepository.delete(id)
    }
}

module.exports = new GamesService()