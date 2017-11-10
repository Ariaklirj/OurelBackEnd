/**
 * UsersController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req,res){

			var param = req.allParams();
			if(param.name!=null){
				if(param.email!=null){
					if(param.celphone!=null){
						if(param.capital){
							var object = {name: param.name,
								 email: param.email ,
								 celphone: param.celphone}
								Users.create(object).exec(function(err,value){
									if(err){
										res.negotiate("no usuario");
									}
									else {
										async.map(param.capital,function(cap,next){
													var objBalance={user:value.id}
											Balance.create(objBalance).exec(function(err,val){
														if(err){
															next(err);
														}
														else {
															var capObj= {capital:cap.capital,
															typeCapital:cap.type,
															balance: val.id}
															console.log(capObj);
															Capital.create(capObj).exec(function(err,valCap){
																if(err){
																	next(err);
																}
																else{
																	next();
																}
															});
														}
													});
										},function(err,value){
											if(err)
											{
												console.log(err);
												res.negotiate(err);
											}
											else {
												res.ok();
											}
										});
									}
								});
						}
						else {
							res.badRequest("falto capitales");
						}
					}
					else {
						res.badRequest("falto numero");
					}
				}
				else {
					res.badRequest("falto email");
				}
			}
			else {
				res.badRequest("falto nombre");
			}
	}

};
