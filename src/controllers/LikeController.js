class LikeController{
    getAll(request, response){
        return response.json([
            {
                user_id: 1,
                like_id: 1,
                comment_id: 1

            }
        ])
    }

    getOne(request, response){
        return response.json([
            {
                user_id: 1,
                like_id: 1, 
                Coment_id: 1
            }
        ])
    }

    create(request, response){
        const country = request.body;
        country.id = 1; 
        return response.json(country);
    }

    update(request, response){
        const country = request.body;
        country.id = request.params.id;
        return response.json(country);
    }

    delete(request, response){
        return response.json({});
    }
}

module.exports = new LikeController()