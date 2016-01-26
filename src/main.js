$ = jQuery = require('jquery');

var React = require('react');
var Profile = require('./components/profile');

var Main = React.createClass({
  render: function(){ return (<Profile />); }
});

React.render(<Main />, document.getElementById('main'));