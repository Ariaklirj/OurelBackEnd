/**
 * UserChapterOwnedController
 *
 * @description :: Server-side logic for managing Userchapterowneds
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create:function(req,res){
        var params = req.validate ({"chapter":"string"},{"user":"string"});

        UserChaptersOwned.create(params).exec(function(err,chapter){
            if (!err)
                res.ok(chapter);
            else
                res.negotitate(err);
        })
    },
    findAllByUser(req,res){
        var params = req.validate({"user":"string"});

            UserChaptersOwned.find({user:params.user}).exec(function(err,data){
                if(!err) {
                     if(data)
                        res.ok(data);
                }
                else
                    res.negotitate(err);                   

            })
    }
};

