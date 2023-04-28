const questionListController = require('../controllers/questionList');

module.exports = {
  groupPath: '/questionList',
  middleware: [],
  route: [
    {
      url: '',
      method: 'get',
      middleware: [],
      func: questionListController.get_all,
    },
    {
      url: '/:idItemList',
      method: 'get',
      middleware: [],
      func: questionListController.get_by_idItemList,
    },
  ],
};
