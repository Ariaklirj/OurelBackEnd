/**
 * UsersController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req,res){

			var param = req.allParams();
			if(param.nick!=null){
				if(param.pass!=null){
					console.log("parametros ok")
					var obj={
						name:param.nick,
						password:param.pass,
						coins:20
					};
					console.log(obj);
					Users.create(obj).exec(function(err,value){
						if(err){
							console.log(err)
							res.negotiate(err);
						} else {
							res.ok("User created");
						}
					});
				}
				else {
					res.badRequest("no password");
				}
			}
			else {
				res.badRequest("no nickname");
			}
	}

};
