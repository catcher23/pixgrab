var React = require('react');
var ApiActions = require('../actions/api_actions.js');
var ApiUtil = require('../util/api_util.js');
module.exports = React.createClass({

  componentDidMount: function () {
    $( ".deleted" ).hide();
  },

  showDetail: function () {
    var that = this;
    var searchObj = {search: this.props.search,
                    all_searches: this.props.all_searches};

    ApiActions.loading();
    setTimeout(function () {
      ApiActions.receiveSearch(searchObj);
      if (typeof that.props.pixView === 'function') {
             that.props.pixView();
        }
      }, 10);
  },

  handleDelete: function () {
    var that = this;
    search_id = this.props.search.id;

    $( ".deleted" ).show();
         setTimeout(function(){
             $( ".deleted" ).fadeOut("linear");
      }, 2000);

    setTimeout(function () {
      ApiUtil.deleteSearch(search_id);
    }, 10);
    setTimeout(function () {
      ApiActions.loading();
    }, 20);
    setTimeout(function () {
    if (typeof that.props.albumView === 'function') {
           that.props.albumView();
      }
    }, 30);
  },
  render: function () {

    var search = JSON.parse(this.props.search.query);
    return(
      <li onClick={this.showDetail}>
        <div className='thumb2'>
        <img src = {search[0].image}/>
        </div>
        <br className = "clear" />
        <div className = 'caption'>
        {'Album # '+ this.props.albumCounter}
        </div>
        <button className="btn primary small" onClick={this.handleDelete}>Delete</button>
        <div className='deleted'>Album Deleted</div>
      </li>
    );
  }
});
