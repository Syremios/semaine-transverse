const entrepriseController = require("./../controllers/entreprise.js")

module.exports = {
    groupPath:"/entreprise",
    middleware:[],
    route:[
        {
            url: '',
            method: 'get',
            middleware:[],
            func: entrepriseController.get_all
        },
        {
            url: '/:idEntreprise',
            method: 'get',
            middleware:[],
            func: entrepriseController.get_by_id
        },
        {
            url: '/:idEntreprise/score',
            method: 'get',
            middleware:[],
            func: entrepriseController.get_score
        },
    ]
}