const routes = [
	{
		method: '*',
		path: '/',
		handler: (request, h) => {
			return 'Halaman tidak dapat diakses dengan method tersebut';
		}
	},
	{
		method: 'GET',
		path: '/',
		handler: (request, h) => {
			return 'Homepage';
		}
	},
	{
		method: 'GET',
		path: '/about',
		handler: (request, h) => {
			return 'About page';
		}
	},
	{
		method: '*',
		path: '/about',
		handler: (request, h) => {
			return 'Halaman tidak dapat diakses dengan method tersebut';
		}
	},
	{
		method: 'GET',
		path: '/hello/{name?}',
		handler: (request, h) => {
			const { name = "stranger" } = request.params;
			const { lang } = request.query;

			if(lang === 'id') {
				return `Hai, ${name}!`;
			}
			
			return `Hello, ${name}!`;
		}
	},
	{
		method: 'POST',
		path: '/login',
		handler: (request, h) => {
			const { username, password } = request.payload;
			return `Welcome ${username}!`;
		}
	},
	{
		method: 'GET',
		path: '/toolkit',
		handler: (request, h) => {
			const response = h.response('success')
				.type('text/plain');
			
			return response.header('X-Custom', 'some-value');
		}
	},
	{
		method: '*',
		path: '/{any*}',
		handler: (request, h) => {
			return 'Halaman tidak ditemukan!';
		}
	},
];

module.exports = routes;


