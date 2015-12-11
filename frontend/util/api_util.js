var ApiActions = require('../actions/api_actions.js');
module.exports = {

createSearch: function (search) {
  $.ajax({
    url: "/searches",
    method: "POST",
    data: {search: search},
    success: function (search) {
      ApiActions.receiveSearch(search);
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
};