var React = require('react');

// components
var GitHubSearchUser = require('./GitHubSearchUser');
var GitHubUserInfo = require('./GitHubUserInfo');

var Application = React.createClass({
	getInitialState: function () {
		return {
			user: null,
			repos: []
		};
	},
	updateUser: function (user) {
		this.setState({user: user});
	},
	updateRepos: function (repos) {
		this.setState({repos: repos});
	},
	render: function () {
		return (
			<div className="container">
				<GitHubSearchUser 
					updateUser={this.updateUser} 
					updateRepos={this.updateRepos} />

				<GitHubUserInfo 
					user={this.state.user}
					repos={this.state.repos} />
			</div>
		);
	}
});

module.exports = Application;