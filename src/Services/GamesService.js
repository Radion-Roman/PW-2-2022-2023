const GameRepository = require('../database/repositories/GameRepository')

class GamesService {
    async getAll(fields = undefined) {
        return await GameRepository.getAll(fields)
    }

    async getOne(gid) {
        return await GameRepository.getOne(gid)
    }

    async create(game) {
        return await GameRepository.create(game)
    }

    async update(gid, game) {
        const existingGame = await Game.findByPk(gid)
        if (existingGame) {
            return await existingGame.update(game);
        }
        return null;
    }

    async delete(gid) {
        return await GameRepository.delete(gid)
    }
}

module.exports = new GamesService()