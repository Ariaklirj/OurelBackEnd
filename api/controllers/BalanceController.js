/**
 * BalanceController
 *
 * @description :: Server-side logic for managing balances
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	find: function(req,res){
		var param = req.allParams();
		Users.findOne(param.id).exec(function(err,user){

			if(err)
			{
				res.negotiate(err);
			}
			else if (!user) {
				res.notFound();
			}
			else{
				Balance.find({user:param.id}).exec(function(err,balances){
					if(err)
					{
						res.negotiate(err);
					}
					else {
						res.ok(balances);
					}
				});
			}

		});


	}
};
