/**
 * CharacterController
 *
 * @description :: Server-side logic for managing Characters
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create:function(req,res){
        var params = req.validate([{'name':'string'},{'user':'string'},{'save':'string'},{'str':'string'}
        ,{'vit':'string'},{'lck':'string'},{'agi':'string'},{'inte':'string'}]);
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
    },
    findOne:function(req,res) {
        var params=req.validate({'id_character':'string'})
        if(params) {
            Character.findOne({user:params.user}).exec(function(err,data){
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
    },
    update: function(req,res){
        var params = req.validate([{'id_character':'string'},{'str':'string'},{'vit':'string'},
        {'lck':'string'},{'agi':'string'},{'inte':'string'}]);
        if(params){
            Save.update({id_save:params.id_character},{str:params.str,vit:params.vit,lck:params.lck,
                int:params.inte,agi:params.agi}).exec(function(err,data){
                if(!err) {
                    res.ok(data);
                }
                else {
                    res.negotiate(err);
                }
            })
        }
    }
};

