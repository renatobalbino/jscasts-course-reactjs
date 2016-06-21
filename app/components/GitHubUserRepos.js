var React = require('react');

var GitHubUserRepos = React.createClass({
	getInitialState() {
		return {
			reposLength: 0
		};
	},
	componentWillReceiveProps(props) {
		this.setState({reposLength: props.repos.length});
	},
	render: function () {
		var repos = this.props.repos.map(function (repo, key) {
			return (
				<div kye={key} className="thumbnail">
					<div className="caption">
						<h3>
							{repo.name}&nbsp;
							<span className="badge">{repo.stargazers_count} STARS</span>
						</h3>
						<p>{repo.description}</p>
						<p>
							<a href={repo.html_url} className="btn btn-primary" role="button">Repository</a>
							&nbsp;
							<a href={repo.html_url + '/issues'} className="btn btn-default" role="button">Issues</a>
						</p>
					</div>
				</div>
			);
		});

		return (
			<div>
				<h2>{this.state.reposLength} repositories</h2>
				{repos}
			</div>
		);
	}
});

module.exports = GitHubUserRepos;