(function(root) {
  'use strict';

  root.NavBar = React.createClass({



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
 }(this));
