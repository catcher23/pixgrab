(function(root) {
  'use strict';

  root.Search = React.createClass({

    render: function () {
      var search = this.props.search || [];
      if (search === this.props.search) {
        search = JSON.parse(search);
      }

      return (
        <div className="photo">
        <ul className= "topic">
          { search.map(function (image) {
            return <li key={image}><a href={image} className='thumb'>
              <img src = {image} />
                </a>
                  <br className = "clear" />
          </li>;
          })}
        </ul>
        <br className = "clear" />
      </div>
      );
   }
  });
}(this));
