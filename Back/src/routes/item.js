const itemController = require('../controllers/itemController');

module.exports = {
  groupPath: '/item',
  middleware: [],
  route: [
    {
      url: '',
      method: 'get',
      middleware: [],
      func: itemController.get_all,
    },
    {
      url: '/:idEntreprise/axe/:idAxe',
      method: 'get',
      middleware: [],
      func: itemController.get_by_idEntreprise,
    },
  ],
};
