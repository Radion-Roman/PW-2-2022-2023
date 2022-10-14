const FGamesService = require('../services/FGamesService')

class FGameController{
    async getAll(request, response){
        try{
            return await response.status(200).json(await FGamesService.getAll([
                'Favorite_game',
                'user_id',
                'gid'
            ]))
        } catch(error){
            return await response.status(500).json(JSON.stringify(error))
        }
    }

    async getOne(request, response){
        try{
            const fgame = await FGamesService.getOne(request.params.id)
            if(fgame){
                return response.status(200).json(fgame)
            }
            return response.status(404).json()
        } catch(error){
            return response.status(500).json(JSON.stringify(error))
        }
    }

    async create(request, response){
        try{
            return response.status(200).json(await FGamesService.create(request.body));
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async update(request, response){
        try{
            const existingFGame = await FGamesService.getOne(request.params.id)
            if(existingFGame){
                return response.status(200).json(await existingFGame.update(request.body));
            }
            return response.status(404).json();
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async delete(request, response){
        try{
            return response.status(200).json(await FGamesService.delete(request.params.id))
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }
}

module.exports = new FGameController()