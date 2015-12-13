var React = require('react');
var SearchStore = require('../stores/search.js');
var ApiUtil = require('../util/api_util.js');
var Search = require('./search.jsx');
var NavBar = require('./navbar.jsx');
var Loader = require('react-loader');

module.exports = React.createClass({

  getInitialState: function () {
    return { search: null, loaded:true};
  },

  getStateFromStore: function () {
    return { search: SearchStore.query()};
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
    this.setState({loaded: !this.state.loaded});
  },

  componentDidMount: function () {
    this.searchListener = SearchStore.addListener(this._onChange);
    this.onSuccess();
  },

  onSuccess: function (profile) {
    this.setState({loaded: true });
  },

  componentWillUnmount: function () {
    this.searchListener.remove();
  },

  albumViewHandler: function() {
    this.refs['search'].albumView();
  },

  pixViewHandler: function() {

    this.refs['search'].pixView();
  },

  render: function() {

   return (
      <div>
        <div>
          <title>pixGrab</title>
        </div>
        <div>
          <header className="header">
            <NavBar albumView = {this.albumViewHandler} pixView = {this.pixViewHandler}/>
          </header>
          <body>
          <Loader loaded={this.state.loaded}>
          <Search key={this.state.search} searchObject={this.state.search} ref='search'/>
          </Loader>
          </body>
        </div>
      </div>
        );
      }
    });
