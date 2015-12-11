var React = require('react');
var ApiActions = require('../actions/api_actions.js');
module.exports = React.createClass({

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

  render: function () {

    var search = JSON.parse(this.props.search.query);
    return(
      <li onClick={this.showDetail}>
        <div className='thumb2'>
        <img src = {search[0].image}/>
        </div>
        <br className = "clear" />
        <div className = 'caption'>
        {'Album # '+ this.props.search.id}
        </div>
      </li>
    );
  }
});
