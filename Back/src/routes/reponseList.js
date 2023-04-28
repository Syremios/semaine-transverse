const reponseListController = require('../controllers/reponseListController');

module.exports = {
  groupPath: '/reponseList',
  middleware: [],
  route: [
    {
      url: '',
      method: 'get',
      middleware: [],
      func: reponseListController.get_all,
    },
    {
      url: '/:idQuestion',
      method: 'get',
      middleware: [],
      func: reponseListController.get_by_idQuestion,
    },
  ],
};
