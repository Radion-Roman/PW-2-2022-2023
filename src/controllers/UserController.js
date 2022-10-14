const UserService = require('../services/UserService')

class userController{
    async getAll(request, response){
        try{
            return await response.status(200).json(await UserService.getAll([
                'Favoriteuser',
                'user_id',
                'fname',
                'lname',
                'gmail',
                'nick_name',
                'privilege'
            ]))
        } catch(error){
            return await response.status(500).json(JSON.stringify(error))
        }
    }

    async getOne(request, response){
        try{
            const user = await UserService.getOne(request.params.id)
            if(user){
                return response.status(200).json(user)
            }
            return response.status(404).json()
        } catch(error){
            return response.status(500).json(JSON.stringify(error))
        }
    }

    async create(request, response){
        try{
            return response.status(200).json(await UserService.create(request.body));
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async update(request, response){
        try{
            const existingUser = await UserService.getOne(request.params.id)
            if(existingUser){
                return response.status(200).json(await existingUser.update(request.body));
            }
            return response.status(404).json();
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async delete(request, response){
        try{
            return response.status(200).json(await UserService.delete(request.params.id))
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }
}

module.exports = new userController()