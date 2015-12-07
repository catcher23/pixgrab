(function(root) {
  'use strict';

  root.Index= React.createClass({
    mixins: [ReactRouter.History],

    getStateFromStore: function () {

    return { search: SearchStore.query() };
    },

    _onChange: function () {

      this.setState(this.getStateFromStore());
    },

    getInitialState: function () {

      return this.getStateFromStore();
    },

    componentWillReceiveProps: function (newProps) {

    },

    componentDidMount: function () {
      SearchStore.addSearchDetailChangeListener(this._onChange);


    },

    componentWillUnmount: function () {

      SearchStore.removeSearchDetailChangeListener(this._onChange);
    },

    render: function() {

     return (
        <div>
          <div>
            <title>pixGrab</title>
          </div>
          <div>
            <header className="header">
              <NavBar />
            </header>
            <body>
            return <Search key={this.state.search} search={this.state.search.query} />
            </body>
          </div>
        </div>
          );
        }
      });
}(this));
