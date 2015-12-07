window.ApiActions = {
  receiveSearch: function (search) {
    AppDispatcher.dispatch({
      actionType: SearchConstants.SEARCH_RECEIVED,
      search: search

    });
  },
};
