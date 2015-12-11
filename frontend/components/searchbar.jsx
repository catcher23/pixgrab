var React = require('react');
var ApiUtil = require('../util/api_util.js');
var ApiActions = require('../actions/api_actions.js');
var Index = require('./index.jsx');
var Search = require('./search.jsx');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');

module.exports = React.createClass({

  mixins: [LinkedStateMixin, ReactRouter.History],

  componentDidMount: function () {
    $( ".loading" ).hide();
  },

  getInitialState: function () {
      return { hashtag: "", from: "", to:""  };
    },

  refresh: function () {
    this.history.push('/');
  },

  handleSubmit: function(event){
      var that = this;
      event.preventDefault();
      if (this.state.hashtag.length === 0 ||
         this.state.from.length === 0 ||
         this.state.to.length === 0) {
      $( ".loading" ).show();
           setTimeout(function(){
               $( ".loading" ).fadeOut("linear");
        }, 2000);
     } else {
      var search = $.extend({}, this.state, {user_id: CURRENT_USER_ID});
      ApiUtil.createSearch(search);
      ApiActions.loading();

      this.setState({hashtag: "", from: "", to:""});
      this.refresh();
    }
    },

    handleLogoutClick: function() {
        ApiUtil.logout();
      },
  render: function() {

    return (
      <div>
      <form className="pull-right">
        <button className="btn primary medium logout" onClick={this.handleLogoutClick}>Log Out</button>
      </form>
      <form action="searches" method = "post" className="pull-right" onSubmit={this.handleSubmit}>
        <input className="input-medium" type="text" placeholder="Hashtag" name="hashtag" id="hashtag" valueLink={this.linkState('hashtag')}/>
        <input className="input-medium" type="date" placeholder="From" name="from" id="from" valueLink={this.linkState('from')}/>
        <input className="input-medium" type="date" placeholder="To" name="to" id="to" valueLink={this.linkState('to')}/>
        <button className="btn primary medium" type="submit">Submit</button>
      </form>
       <div className='loading'>Please fill out all fields</div>
    </div>

    );
  }
});
