const itemListController = require("../controllers/itemListController.js")

module.exports = {
    groupPath:"/itemList",
    middleware:[],
    route:[
        {
            url: '',
            method: 'get',
            middleware:[],
            func: itemListController.get_all
        },
        {
            url: '/:idAxe',
            method: 'get',
            middleware:[],
            func: itemListController.get_by_idAxe
        },
    ]
}