const itemController = require("./../controllers/itemController.js")

module.exports = {
    groupPath:"/entreprise",
    middleware:[],
    route:[
        {
            url: '',
            method: 'get',
            middleware:[],
            func: itemController.get_all
        },
        {
            url: '/:idEntreprise',
            method: 'get',
            middleware:[],
            func: itemController.get_by_idEntreprise
        },
    ]
}