const axeController = require("../controllers/axeController.js")

module.exports = {
    groupPath:"/axe",
    middleware:[],
    route:[
        {
            url: '',
            method: 'get',
            middleware:[],
            func: axeController.get_all
        },
    ]
}