const User = require('../models').User

class UserRepository {
    async getAll(fields = undefined) {
        return await User.findAll({attributes: fields})
    }

    async getOne(id) {
        return await User.findByPk(id)
    }

    async create(User) {
        return await User.create(User)
    }

    async update(id, User) {
        const existingUser = await User.findByPk(id)
        if (existingUser) {
            return await existingUser.update(user);
        }
        return null;
    }

    async delete(id) {
        const deletedUser = await User.destroy({
            where: { id: id }
        })
        if (deletedUser) {
            return {};
        }
        return null;
    }
}

module.exports = new UserRepository()