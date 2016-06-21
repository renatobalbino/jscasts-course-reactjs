var axios = require('axios');

var GitHubUserService = {
	getByUsername: (username) => {
		return axios.get('https://api.github.com/users/' + username);
	},

	getReposByUsername: (username) => {
		return axios.get('https://api.github.com/users/' + username + '/repos');
	}
}

module.exports = GitHubUserService;