window.SearchBar = React.createClass({

  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  getInitialState: function () {
      return { hashtag: "", from: "", to:""  };
    },

  refresh: function () {
    this.history.pushState(null, '/', {});
  },

  handleSubmit: function(event){
      event.preventDefault();
      var search = $.extend({}, this.state);
      ApiUtil.createSearch(search);
      this.setState({hashtag: "", from: "", to:""});
      this.refresh();
    },
  render: function() {

    return (
      <div>
      <form action="searches" method = "post" className="pull-right" onSubmit={this.handleSubmit}>
        <input className="input-medium" type="text" placeholder="Hashtag" name="hashtag" id="hashtag" valueLink={this.linkState('hashtag')}/>
        <input className="input-medium" type="date" placeholder="From" name="from" id="from" valueLink={this.linkState('from')}/>
        <input className="input-medium" type="date" placeholder="To" name="to" id="to" valueLink={this.linkState('to')}/>
        <button className="btn primary medium" type="submit">Search</button>
      </form>

    </div>
    );
  }
});
