var Dispatcher = require('../dispatcher/dispatcher.js');
var SearchConstants = require('../constants/search_constants.js');

module.exports = {
  receiveSearch: function (search) {
    Dispatcher.dispatch({
      actionType: SearchConstants.SEARCH_RECEIVED,
      search: search
    });
  },
  throwError: function (search) {

  },

  loading: function(){
  
    Dispatcher.dispatch({
      actionType: SearchConstants.LOADING,
    });
  }
};
