var ApiActions = require('../actions/api_actions.js');
module.exports = {

createSearch: function (search, callback, timer) {
  var that = this;
  var timeOut = setTimeout(function(){
    ApiActions.loading();
    that.retrieveSearches(search.user_id);
    window.location = '/';
  }, 20000);

  $.ajax({
    url: "/searches",
    method: "POST",
    data: {search: search},
    success: function (search) {
      clearTimeout(timeOut);
      if (typeof callback === 'function') {
             callback(timer);
        }
      ApiActions.receiveSearch(search);
    }
  });
},
deleteSearch: function (search_id) {
  $.ajax({
    url: "/searches",
    method: "DELETE",
    data: {search_id: search_id},
    success: function (searches) {
      ApiActions.receiveSearch(searches);
    }
  });
},

retrieveSearches: function (id) {
  $.ajax({
    url: "/users/" + id,
    method: "GET",
    data: {id: id},
    success: function (searches) {
      ApiActions.receiveSearch(searches);
    }
  });
},

logout: function() {
    $.ajax({
      url: "/session/",
      method: "DELETE",
      success: function() {
      window.location.href = "/";
      }
    });
  },

timeOut: function(clearTimeOut, timer) {
    $.ajax({
      url: "/session/",
      method: "DELETE",
      success: function() {
      window.location.href = "/";
      }
    });
  },
};
