var React = require('react');
var UserInfo = require('./userInfo');
var Repos = require('./repos');
var SearchForm = require('./searchForm');

var Profile = React.createClass({
  handleFormSubmit: function(username){
    this.setState({username: username}, function(){
      this.loadUserData();
      this.loadRepoData();
    });
  },
  getDefaultProps: function(){
    return {
      clientId: '3f4df2ac58b22554f43a',
      clientSecret: 'd48ad4d7033e841b0c02a69a35393606445648e6',
      urls: {
        user: 'https://api.github.com/users'
      },
      perPage: 10
    };
  },
  getInitialState: function(){
    return {
      username: null,
      userData: [],
      repoData: []
    };
  },
  loadUserData: function() {
    $.ajax({
      url: this.props.urls.user + '/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: function(data){
        console.log(data);
        this.setState({userData: data});
      }.bind(this),
      error: function(xhr, status, err){
        this.setState({username: null});
        alert(err);
      }.bind(this)
    });
  },
  loadRepoData: function() {
    $.ajax({
      url: this.props.urls.user + '/' + this.state.username + '/repos?per_page=' + this.props.perPage + '&client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret + '&sort=created',
      dataType: 'json',
      cache: false,
      success: function(data){
        console.log(data);
        this.setState({repoData: data});
      }.bind(this),
      error: function(xhr, status, err){
        this.setState({username: null});
        alert(err);
      }.bind(this)
    });
  },
  render: function(){
    return(
      <div>
        <SearchForm onFormSubmit={this.handleFormSubmit}/>
        {this.state.username ? <UserInfo userData={this.state.userData} /> : null}
        {this.state.username ? <Repos repoData={this.state.repoData} /> : null}
      </div>
      )
  };
  });

module.exports = Profile;