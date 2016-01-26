var React = require('react');

var SearchForm = React.createClass({
  getInitialState: function(){
    return({
      username: null
    })
  },
  submitForm: function(e){
    e.preventDefault();
    var username = this.state.username;
    if(!username){
      alert("Please enter a username");
      return;
    };
    this.props.onFormSubmit(username);
  },
  render: function(){
    return(
      <form onSubmit={this.submitForm} className="form-inline">
        <div className="form-group">
          <input type="text" onChange={this.usernameInput} className="form-control searchInput" placeholder="Enter Github username" value={this.state.username} />
        </div>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
      )
  },
  usernameInput: function(e){
    this.setState({username: e.target.value});
  };
});

module.exports = SearchForm;