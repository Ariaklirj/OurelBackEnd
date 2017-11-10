/**
 * ExpensesController
 *
 * @description :: Server-side logic for managing Expenses
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

											if(balance.capital[0].typeCapital==param.type)
											{
													return balance;
												}
											})
											let val1 = parseInt(balanceRequired[0].ammount);
											let val2 = parseInt(param.ammount);

									if(val2 < val1)
									{
										var object = {ammount:param.ammount,
											balance:balanceRequired[0].id
										}
										Expenses.create(object).exec(function(err,value){

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
										res.forbidden(null,{message:"Saldo insuficiente"});
									}
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
