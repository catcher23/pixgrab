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
    $( ".startdate" ).hide();
    $( ".timeout" ).hide();
  },

  getInitialState: function () {
      return { hashtag: "", from: "", to:""  };
    },

  refresh: function () {
    this.history.push('/');
  },

  timeOut: function () {
    $( ".timeout" ).show();
         setTimeout(function(){
             $( ".timeout" ).fadeOut("linear");
      }, 4000);
  },
  clearTimeOut: function (timer) {
    clearTimeout(timer);
  },
  loading: function () {
    $( ".loading" ).show();
         setTimeout(function(){
             $( ".loading" ).fadeOut("linear");
      }, 2000);
  },
  startDate: function () {
    $( ".startdate" ).show();
         setTimeout(function(){
             $( ".startdate" ).fadeOut("linear");
      }, 2000);
  },

  handleSubmit: function(event){
      var that = this;
      event.preventDefault();

      if (this.state.hashtag.length === 0 ||
          this.state.from.length === 0 ||
          this.state.to.length === 0 ) {
          this.loading();
     } else if (this.state.from > this.state.to) {
        this.startDate();
     } else {
      var search = $.extend({}, this.state, {user_id: CURRENT_USER_ID});
      ApiActions.loading();

        var timer = setTimeout(function() {
        that.timeOut();
      }, 20000);

      ApiUtil.createSearch(search, this.clearTimeOut, timer);

      this.setState({hashtag: "", from: "", to:""});
      this.refresh();
    }
    },

  render: function() {

    return (
      <div>
      <form action="searches" method = "post" className="pull-right" onSubmit={this.handleSubmit}>
        <input className="input-medium inputmids" type="text" placeholder="Hashtag" name="hashtag" id="hashtag" valueLink={this.linkState('hashtag')}/>
        <input className="input-medium inputmids" type="date" placeholder="From" name="from" id="from" valueLink={this.linkState('from')}/>
        <input className="input-medium inputmids" type="date" placeholder="To" name="to" id="to" valueLink={this.linkState('to')}/>
        <button className="btn primary medium buttonmid" type="submit">Search</button>
      </form>
       <div className='loading'>Please fill out all fields</div>
       <div className='startdate'>Start date must be before end date</div>
       <div className='timeout'>Search timed out. Please try again.</div>
    </div>

    );
  }
});
