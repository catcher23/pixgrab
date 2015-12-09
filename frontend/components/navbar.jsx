var React = require('react');
var SearchBar = require('./searchbar.jsx');

module.exports = React.createClass({

  render: function() {
    return (
      <div className="topbar">
          <div className="fill">
            <div className="container">
              <a className="brand" href="#"><b>pixGrab</b></a>
              <ul className="nav">
              </ul>
            <SearchBar />
            </div>
          </div>
        </div>
     );
   }
 });
