/**
 * UsersController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req,res){
		var params = req.validate([{'name':'string'},{'password':'string'},{'coins':'numeric'}]);
		console.log("ok")
		if(params) {
			Users.create(params).exec(function(err,user){
				console.log(err);
				if(err) {
					
					res.negotiate(err);
				} else {
					res.ok(user);
				}
			})
		}

	},
	
	find: function(req,res){
		var params = req.validate( [{'name':'string'},{'password':'string'}]);

		if (params){
			Users.findOne({name:params.name,password:params.password}).exec(function (err,user){
				if(err) 
					res.negotiate(err);
				else{
					console.log(user);
					if(user)
						res.ok(user);
					else 
						res.notFound();
				}
			})
		}
	}

};
