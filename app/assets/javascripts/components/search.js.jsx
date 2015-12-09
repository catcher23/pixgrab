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
            return <li key={image.image}><a href={image.link} className='thumb'
            data-toggle="lightbox" data-gallery="multiimages" data-title={'Tagged on: '+image.created_time.slice(0,10)}>
            <img src = {image.image} className="img-responsive"/>
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
