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
            url: '',
            method: 'post',
            middleware:[],
            func: entrepriseController.create
        },/*
        {
            url: '/:idEnterprise',
            method: 'get',
            middleware:[],
            func: entrepriseController.get_by_id
        },*/
    ]
}