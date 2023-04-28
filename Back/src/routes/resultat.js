const resultatController = require('../controllers/resultatController');

module.exports = {
  groupPath: '/resultat',
  middleware: [],
  route: [
    {
      url: '',
      method: 'get',
      middleware: [],
      func: resultatController.get_all,
    },
    {
      url: '/:idItem',
      method: 'get',
      middleware: [],
      func: resultatController.get_by_idItem,
    },
  ],
};
