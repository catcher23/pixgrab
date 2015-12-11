var React = require('react');
var ApiUtil = require('../util/api_util.js');
  module.exports = React.createClass({
    componentDidMount: function () {

    },
    albumView: function () {
      $( ".albums" ).fadeIn("linear");
      $( ".pix" ).fadeOut("linear");
    },
    pixView: function () {
      $( ".albums" ).fadeOut("linear");
      $( ".pix" ).fadeIn("linear");
    },

    render: function () {
      var search = [];
      var all_searches = [];

      if (this.props.searchObject) {
        if (this.props.searchObject.search !== null) {
          search = JSON.parse(this.props.searchObject.search.query);
          all_searches = this.props.searchObject.all_searches;
        } else {
          all_searches = this.props.searchObject.all_searches;
        }
      } else {
        ApiUtil.retrieveSearches(CURRENT_USER_ID);
        ApiUtil.retrieveSearches(CURRENT_USER_ID);
      }


      return (
        <div className="photo">

        <ul className= "topic pix">
          {search.map(function (image) {
            return <li key={image.image}><a href={image.link} className='thumb'
                      data-toggle="lightbox"
                      data-gallery="multiimages"
                      data-title={'Tagged on: '+image.created_time.slice(0,10)}>
            <img src = {image.image} className="img-responsive"/>
                </a>
                  <br className = "clear" />
                    </li>;
            })}
        </ul>
        <ul className= "topic albums">

          {all_searches.map(function (search) {
            firstSearch = JSON.parse(search.query)[0];
            return <li key={search.id}>
                      <a href={firstSearch.link} className='thumb2'
                      data-toggle="lightbox"
                      data-gallery="multiimages"
                      data-title={'Tagged on: '+firstSearch.created_time.slice(0,10)}>
            <img src = {firstSearch.image} className="img-responsive"/>
                </a>
                  <br className = "clear" />
                  <div className = 'caption'>
                  {'Album # '+ search.id}
                  </div>
                    </li>;
            })}
        </ul>
        <br className = "clear" />
      </div>
      );
   }
  });
