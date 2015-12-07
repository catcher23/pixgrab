(function () {
  var SEARCHES_INDEX_CHANGE_EVENT = "searchesIndexChange";
  var SEARCH_DETAIL_CHANGE_EVENT = "searchDetailChange";

  var _searches = {};
  var _search = {};

  var resetSearches = function (searches) {
    _searches = searches;
    searches.forEach(function (search) {
    _search[search.id] = search;
  });
  };

  var resetSearch = function (search) {

    _search = search;

  };

  window.SearchStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _searches.slice();
    },

    query: function () {
      return _search;
    },

    find: function (id) {
      var search;
      _searches.forEach(function(p) {
        if(p.id === id) { search = p; }
      });

      return search;
    },

    addSearchDetailChangeListener: function (callback) {
      this.on(SEARCH_DETAIL_CHANGE_EVENT, callback);
    },

    removeSearchDetailChangeListener: function (callback) {
      this.removeListener(SEARCH_DETAIL_CHANGE_EVENT, callback);
    },

    addSearchesIndexChangeListener: function (callback) {
      this.on(SEARCHES_INDEX_CHANGE_EVENT, callback);
    },

    removeSearchesIndexChangeListener: function (callback) {
      this.removeListener(SEARCHES_INDEX_CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case SearchConstants.SEARCHES_RECEIVED:
          resetSearches(payload.searches);
          SearchStore.emit(SEARCHES_INDEX_CHANGE_EVENT);
          break;
        case SearchConstants.SEARCH_RECEIVED:
          resetSearch(payload.search);
          SearchStore.emit(SEARCH_DETAIL_CHANGE_EVENT);
          break;
      }
    })

  });
  SearchStore._maxListeners = 100;
 })();
