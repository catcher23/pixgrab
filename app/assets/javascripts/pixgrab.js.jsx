$(function () {

    var root = document.getElementById("content");
    var RouteHandler = ReactRouter.RouteHandler;
    var Router = ReactRouter.Router;
    var Route = ReactRouter.Route;
    var IndexRoute = ReactRouter.IndexRoute;
    var App = React.createClass({
      mixins: [ReactRouter.History],
      componentDidMount: function() {
        this.history.pushState(null, "/");
      },
      render: function(){

        return (
          <div>
            {this.props.children}
          </div>
        );
      }
    });
    var routes = (
        <Route path="/" component={App}>
          <IndexRoute component={Index}/>
          </Route>

    );
  ReactDOM.render(<Router>{routes}</Router>, root);

});
