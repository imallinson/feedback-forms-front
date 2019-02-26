import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Auth {

	constructor(){
		if (cookies.get('email') === undefined)	{
			this.authenticated = false;
		}
		else {
			this.authenticated = true;
		}
	}

	login(cb) {
		cookies.set('email', cb.email);
		cookies.set('_id', cb.accountID);
		cookies.set('admin', cb.admin);
		this.authenticated = true;
		setTimeout(function(){
			window.history.back();
			setTimeout(function(){ 
				window.location.reload()}, 100);
		}, 500);
	}

	logout(cb) {

		cookies.remove('email');
		cookies.remove('_id');
		cookies.remove('admin');
		this.authenticated = false;
	}

	isAuthenticated() {
		return this.authenticated;
	}
}

export default new Auth();