const resultatController = require("./../controllers/resultatController.js")

module.exports = {
    groupPath:"/entreprise",
    middleware:[],
    route:[
        {
            url: '',
            method: 'get',
            middleware:[],
            func: resultatController.get_all
        },
        {
            url: '/:idItem',
            method: 'get',
            middleware:[],
            func: resultatController.get_by_idItem
        },
    ]
}