var React = require('react');
var Repo = require('./repo');

var Repos = React.createClass({
  render: function(){
    var repoNodes = this.props.repoData.map(function(repo, index){
        return(
          <Repo name={repo.name} description={repo.description} url={repo.html_url} key={index} />
          )
    });
    return(
      <div>
        <h2 className="page-header">Latest Repos</h2>
        {repoNodes}
      </div>
      )
  };
});

module.exports = Repos;