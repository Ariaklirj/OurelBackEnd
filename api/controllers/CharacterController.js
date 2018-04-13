/**
 * CharacterController
 *
 * @description :: Server-side logic for managing Characters
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create:function(req,res){
        var params = req.validate([{'name':'string'},{'user':'string'},{'save':'string'}]);
        Character.create(params).exec(function(err,character){
            if(err) {
                res.negotiate(err);
            } else {
                res.ok(character)
            }
        });
    } ,
    find:function(req,res) {
        var params=req.validate({'user':'string'})
        if(params) {
            Character.find({user:params.user}).exec(function(err,data){
                if(!err&&data){
                    res.ok(data);
                } else {
                    if(err) 
                        res.negotiate(err);
                    else 
                        res.notFound();
                }
            })
        }
    }
};

