const Game = require('../models').Game

class GameRepository {
    async getAll(fields = undefined) {
        return await Game.findAll({attributes: fields})
    }

    async getOne(id) {
        return await Game.findByPk(id)
    }

    async create(Game) {
        return await Game.create(Game)
    }

    async update(id, Game) {
        const existingGame = await Game.findByPk(id)
        if (existingGame) {
            return await existingGame.update(game);
        }
        return null;
    }

    async delete(id) {
        const deletedGame = await Game.destroy({
            where: { id: id }
        })
        if (deletedGame) {
            return {};
        }
        return null;
    }
}

module.exports = new GameRepository()