const Router = require('express')
const router = new Router()

const modules = ['category', 'chat', 'FGame', 'games', 'like', 'user']

modules.forEach(module => {
    router.use(`/${module}`, require(`./${module}`))
})

module.exports = router