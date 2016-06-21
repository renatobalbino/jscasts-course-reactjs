var React = require('react');
var GitHubUserService = require('../services/GitHubUserService');

var GitHubSearchUser = React.createClass({
	propTypes: {
		updateUser: React.PropTypes.func.isRequired,
		updateRepos: React.PropTypes.func.isRequired
	},
	handleSubmit: function (e) {
		e.preventDefault();

		GitHubUserService.getByUsername(this.refs.username.value).
			then(function (response) {
				this.props.updateUser(response.data);
			}.bind(this));

		GitHubUserService.getReposByUsername(this.refs.username.value).
			then(function (response) {
				this.props.updateRepos(response.data);
			}.bind(this));
	},
	render: function () {
		return (
			<div className="jumbotron">
				<h1>GitHub Info</h1>

				<div className="row">
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label>Username</label>

							<input 
								ref="username"
								type="text" 
								className="form-control" 
								placeholder="Ex: renatobalbino"/>
						</div>
						<button 
							type="submit" 
							className="btn btn-primary">Buscar</button>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = GitHubSearchUser;