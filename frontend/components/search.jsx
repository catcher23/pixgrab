var React = require('react');
var ApiUtil = require('../util/api_util.js');
var SearchIndexItem = require('./indexItem.jsx');
  module.exports = React.createClass({
    componentDidMount: function () {
      $( ".albums" ).hide();
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
          var hashtag = this.props.searchObject.search.hashtag;
        } else {
          all_searches = this.props.searchObject.all_searches;
        }
      } else {
        ApiUtil.retrieveSearches(CURRENT_USER_ID);
        ApiUtil.retrieveSearches(CURRENT_USER_ID);
      }
      var that = this;
      var albumCounter = 0;
      return (
        <div className="photo">

        <ul className= "topic pix">
          {search.map(function (image) {
            return <li key={image.image}><a href={image.link} className='thumb'
                      data-toggle="lightbox"
                      data-gallery="multiimages"
                      data-title={'Tagged on: '+image.created_time.slice(0,10)+
                      ' - Tag: '+ hashtag }>
            <img src = {image.image} className="img-responsive"/>
                </a>
                  <br className = "clear" />
                    </li>;
            })}
        </ul>
        <ul className= "topic albums">

          {all_searches.map(function (search) {
            albumCounter += 1;
            return <SearchIndexItem key={search.id} search={search}
                    all_searches={all_searches} albumView = {that.albumView}
                    albumCounter = {albumCounter}/>;
              })
            })}
        </ul>
        <br className = "clear" />
      </div>
      );
   }
  });
