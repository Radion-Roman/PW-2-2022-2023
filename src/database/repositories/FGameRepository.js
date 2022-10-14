const FGame = require('../models').FGame

class FGameRepository {
    async getAll(fields = undefined) {
        return await FGame.findAll({attributes: fields})
    }

    async getOne(id) {
        return await FGame.findByPk(id)
    }

    async create(FGame) {
        return await FGame.create(FGame)
    }

    async update(id, FGame) {
        const existingFGame = await FGame.findByPk(id)
        if (existingFGame) {
            return await existingFGame.update(fgame);
        }
        return null;
    }

    async delete(id) {
        const deletedFGame = await FGame.destroy({
            where: { id: id }
        })
        if (deletedFGame) {
            return {};
        }
        return null;
    }

    async getAllOfCountry(countryId, fields = undefined) {
        return await FGame.findAll({
            where: { countryId: countryId },
            attributes: fields
        })
    }
}

module.exports = new FGameRepository()