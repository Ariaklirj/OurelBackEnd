/**
 * UsersController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req,res){
		var params = req.validate([{'name':'string'},{'password':'string'},{'coins':'numeric'}]);
		if(params) {
			Users.create(params).exec(function(err,user){
				if(!err) {
					res.negotiate(err);
				} else {
					res.ok("usuario creado");
				}
			})
		}

	}

};
