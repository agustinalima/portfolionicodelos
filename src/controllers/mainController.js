const fs = require('fs');
const path = require('path');


let mainController = {
	index: function (req, res){
		res.render('./pages/index');
	}
}
module.exports = mainController;
