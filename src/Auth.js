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
    setTimeout(function(){

		cookies.set('email', cb.email);
		cookies.set('_id', cb.accountID);
		cookies.set('admin', cb.admin);
		this.authenticated = true;
		window.history.back();
		setTimeout(function(){ 
			window.location.reload()}, 200);
		cb();
    }, 2000);
	}

	logout(cb) {
		const cookies = new Cookies();

		cookies.remove('email');
		cookies.remove('_id');
		cookies.remove('admin');
		this.authenticated = false;
		window.location.reload();
		cb();
	}

	isAuthenticated() {
		return this.authenticated;
	}
}

export default new Auth();