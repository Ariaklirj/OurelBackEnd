/**
 * ChapterController
 *
 * @description :: Server-side logic for managing Chapters
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    create: function(req,res){

        var param = req.allParams();
        if(param.id!=null){
            if(param.name!=null){
                if(param.desc!=null){
                    console.log("parametros ok")
                    var obj={
                        description:param.desc,
                        chapter_name:param.name,
                    };
                    console.log(obj);
                    Chapters.create(obj).exec(function(err,value){
                        if(err){
                            console.log(err)
                            res.negotiate(err);
                        } else {
                            res.ok("User created");
                        }
                    })
                }
                else {
                    res.badRequest("no description");
                }
            }
            else {
                res.badRequest("no chapter_name");
            }
    }
    else{
        res.badRequest("no id");
    }

    }
	
};

