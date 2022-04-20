let controller = {
	searchAny: (req, res) => {
		res.send('Busqueda TODOS');
	},
	listZone: (req, res) => {
		searchZone;
	},
	searchPrice: (req, res) => {
		req.query.precio;
		res.send('Busqueda PRECIO');
	},
};
module.exports = controller;
