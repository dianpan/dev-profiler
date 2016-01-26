var React = require('react');

var Repo = React.createClass({
  render: function(){
    return(
      <div className="repo-item">
        <h4>
          <a target="_blank" href={this.props.url}>
            {this.props.name}
          </a>
        </h4>
        <p>{this.props.description}</p>
      </div>
      )
  };
});

module.exports = Repo;