window.ApiUtil = {

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

fetchSingleSearch: function (id) {
  $.ajax({
    url: "/searches" + id,

    success: function (search) {
      ApiActions.receiveSingleHuman(search);
    }
  });
},

};
