var React = require('react');
var SearchBar = require('./searchbar.jsx');


module.exports = React.createClass({


  handleAlbumsClick: function() {

    if (typeof this.props.albumView === 'function') {
           this.props.albumView();
      }
    },
  handlePixClick: function() {
    if (typeof this.props.pixView === 'function') {
           this.props.pixView();
      }
    },
  render: function() {
    return (
      <div className="topbar">
          <div className="fill">
            <div className="container">
              <a className="brand" href="#"><b>pixGrab</b></a>
              <ul className="nav">
              <li><button className="btn primary medium" onClick={this.handleAlbumsClick}>My Searches</button></li>
              <li><button className="btn primary medium" onClick={this.handlePixClick}>Current Search</button></li>
              </ul>
            <SearchBar pixView = {this.handlePixClick} />
            </div>
          </div>
        </div>
     );
   }
 });
