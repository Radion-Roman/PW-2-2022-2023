const GamesService = require('../services/GamesService')

class GameController{
    async getAll(request, response){
        try{
            return await response.status(200).json(await GamesService.getAll([
                'gid',
                'Gname',
                'Ggenre',
                'Glogo',
                'Gcategory',
                'Gdescription'
            ]))
        } catch(error){
            return await response.status(500).json(JSON.stringify(error))
        }
    }

    async getOne(request, response){
        try{
            const game = await GamesService.getOne(request.params.id)
            if(game){
                return response.status(200).json(game)
            }
            return response.status(404).json()
        } catch(error){
            return response.status(500).json(JSON.stringify(error))
        }
    }

    async create(request, response){
        try{
            return response.status(200).json(await GamesService.create(request.body));
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async update(request, response){
        try{
            const existingGame = await GamesService.getOne(request.params.id)
            if(existingGame){
                return response.status(200).json(await existingGame.update(request.body));
            }
            return response.status(404).json();
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async delete(request, response){
        try{
            return response.status(200).json(await GamesService.delete(request.params.id))
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }
}

module.exports = new GameController()