var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var SearchConstants = require('../constants/search_constants.js');
var SearchStore = new Store(AppDispatcher);

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


SearchStore.all = function () {
  return _searches.slice();
};

SearchStore.query = function () {
  return _search;
};

SearchStore.find = function (id) {
  var search;
  _searches.forEach(function(p) {
    if(p.id === id) { search = p; }
  });

  return search;
};

SearchStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case SearchConstants.SEARCHES_RECEIVED:
      resetSearches(payload.searches);
      break;
    case SearchConstants.SEARCH_RECEIVED:
      resetSearch(payload.search);
      break;
  }
  SearchStore.__emitChange();
};

SearchStore._maxListeners = 100;
module.exports = SearchStore;
