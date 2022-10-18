const Game = require('../models').Game

class GameRepository {
    async getAll(fields = undefined) {
        return await Game.findAll({attributes: fields})
    }

    async getOne(gid) {
        return await Game.findByPk(gid)
    }

    async create(Game) {
        return await Game.create(game)
    }

    async update(gid, Game) {
        const existingGame = await Game.findByPk(gid)
        if (existingGame) {
            return await existingGame.update(game);
        }
        return null;
    }

    async delete(gid) {
        const deletedGame = await Game.destroy({
            where: { gid: gid }
        })
        if (deletedGame) {
            return {};
        }
        return null;
    }
}

module.exports = new GameRepository()