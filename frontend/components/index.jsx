var React = require('react');
var SearchStore = require('../stores/search.js');
var ApiUtil = require('../util/api_util.js');
var Search = require('./search.jsx');
var NavBar = require('./navbar.jsx');

module.exports = React.createClass({

  getStateFromStore: function () {
    return { search: SearchStore.query() };
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  componentDidMount: function () {
    this.searchListener = SearchStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.searchListener.remove();
  },

  render: function() {

   return (
      <div>
        <div>
          <title>pixGrab</title>
        </div>
        <div>
          <header className="header">
            <NavBar />
          </header>
          <body>
          return <Search key={this.state.search} search={this.state.search.query} />
          </body>
        </div>
      </div>
        );
      }
    });
