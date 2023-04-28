const axeController = require('../controllers/axeController');

module.exports = {
  groupPath: '/axe',
  middleware: [],
  route: [
    {
      url: '',
      method: 'get',
      middleware: [],
      func: axeController.get_all,
    },
    {
      url: '/:idAxe',
      method: 'get',
      middleware: [],
      func: axeController.get_by_id,
    },
  ],
};
