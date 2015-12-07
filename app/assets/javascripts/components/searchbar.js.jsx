window.SearchBar = React.createClass({


  getInitialState: function(){
    return { searchString: '' };
  },
  handleChange: function(e){
    this.setState({ searchString: e.target.value });
  },
  clearBar: function(e){
   this.setState({searchString: ''});

  },

  render: function() {

    return (
      <div>
      <form action="<%=session_url%>" method = "post" className="pull-right">
        <input className="input-medium" type="text" placeholder="Hashtag" name="hashtag" id="hashtag"/>
        <input className="input-medium" type="date" placeholder="From" name="from" id="from"/>
        <input className="input-medium" type="date" placeholder="To" name="to" id="to"/>
        <button className="btn primary medium" type="submit">Search</button>
      </form>
    </div>
    );
  }
});
