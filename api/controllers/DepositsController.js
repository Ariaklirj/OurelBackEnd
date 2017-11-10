/**
 * DepositsController
 *
 * @description :: Server-side logic for managing deposits
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	create: function(req,res){
		var param = req.allParams();
		if(param.id!=null && param.ammount!=null && param.type!=null){

			Users.findOne(param.id).exec(function(err,user){
				if(err)
				{
					res.negotiate(err);
				}
				else if (!user) {
					res.notFound();
				}
				else{
					Balance.find({user:param.id}).populate("capital").exec(function(err,balances){
						if(err)
						{
							res.negotiate(err);
						}
						else {

								if(balances.length>0){

										var balanceRequired= balances.filter(function(balance){
											return balance.capital.typeCapital==param.type;
										})

										var object = {ammount:param.ammount,
											balance:balanceRequired.id
										}
										Deposits.create(object).exec(function(err,value){

												if(err)
												{
													res.negotiate(err);
												}
												else {
													res.ok(value);
												}

										});
								}
								else {
									res.forbidden(null,{message: "No existen Saldo"});
								}


						}
					});
				}

			});
		}
		else {
			res.badRequest();
		}

	}

};
