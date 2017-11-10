/**
 * PingController
 *
 * @description :: Server-side logic for managing pings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {

		var suma=function(num1,num2){
			return num1+num2;
		}


		res.json([{status:'ok'},{suma:suma(1,2)}]);
	}
};
