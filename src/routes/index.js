const Router = require('express')
const router = new Router()

const modules = ['category', 'chat', 'FGame', 'games', 'Like', 'user']

modules.forEach(module => {
    router.use(`/${module}`, require(`./${module}`))
})

module.exports = router