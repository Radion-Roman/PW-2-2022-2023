const CategoryRepository = require('../database/repositories/CategoryRepository')

class CategoriesService {
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
        const existingCategory = await Category.findByPk(id)
        if (existingCategory) {
            return await existingCategory.update(category);
        }
        return null;
    }

    async delete(id) {
        return await CategoryRepository.delete(id)
    }
}

module.exports = new CategoriesService()