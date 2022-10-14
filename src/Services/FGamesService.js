const FGameRepository = require('../database/repositories/FGameRepository')

class FGamesService {
    async getAll(fields = undefined) {
        return await CategoryRepository.getAll(fields)
    }

    async getOne(id) {
        return await CategoryRepository.getOne(id)
    }

    async create(category) {
        return await CategoryRepository.create(category)
    }

    async update(id, category) {
        const existingFGame = await Category.findByPk(id)
        if (existingFGame) {
            return await existingFGame.update(category);
        }
        return null;
    }

    async delete(id) {
        return await CategoryRepository.delete(id)
    }
}

module.exports = new FGamesService()