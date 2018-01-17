/**
 * StatusController
 *
 * @description :: Server-side logic for managing Statuses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req,res){

        var param = req.allParams();
            if(param.uniqueStart) {
                if(param.id==null||param.title==null||param.description==null||param.chapter==null||param.admin==null||param.isEnd==null) {
                    res.badRequest("los paramatres estan incompletos");
                } else {
                    Admin.find({id_Admin:param.admin}).exec(function(err,adm){
                        if(err){
                            res.negotiate("error inesperado");
                        } else {
                            Chapters.find({id_chapter:param.chapter}).exec(function(err,chap){
                                if(err){
                                    res.negotiate("error inesperado");
                                } else {
                                    var obj={
                                        id_estatus:param.id,
                                        title:param.title,
                                        description:param.description,
                                        uniqueStart:param.uniqueStart,
                                        isStart:param.isStart,
                                        isEnd:param.isEnd,
                                        lastStatus:null,
                                        admin:adm.id_Admin,
                                        chapter:chap.id_chapter
                                    };
                                    Status.create(obj).exec(function(err,value){
                                        if(err){
                                            console.log(err)
                                            res.negotiate(err);
                                        } else {
                                            res.ok("Status created");
                                        }
                                    });
                                }
                            })
                        }
                    });
                }
            
            }            
        else {
            if(param.id==null||param.title==null||param.description==null||param.chapter==null||param.admin==null||param.isEnd==null||param.lastStatus==null) {
                res.badRequest("los paramatres estan incompletos");
            } else {
                Admin.find({id_Admin:param.admin}).exec(function(err,adm){
                    if(err){
                        res.negotiate("error inesperado");
                    } else {
                        Chapters.find({id_chapter:param.chapter}).exec(function(err,chap){
                            if(err){
                                res.negotiate("error inesperado");
                            } else {
                                console.log(adm);
                                console.log(chap);
                                var obj={
                                    id_estatus:param.id,
                                    title:param.title,
                                    description:param.description,
                                    uniqueStart:param.uniqueStart,
                                    isStart:param.isStart,
                                    isEnd:param.isEnd,
                                    lastStatus:param.lastStatus,
                                    admin:adm,
                                    chapter:chap
                                };
                                Status.create(obj).exec(function(err,value){
                                    if(err){
                                        console.log(err)
                                        res.negotiate(err);
                                    } else {
                                        res.ok("Status created");
                                    }
                                });
                            }
                        })
                    }
                });
            }
        
        }
            
        
},
find:function(req,res) {
    var param = req.allParams();

    if(param.id!=null) {
        Status.find({id_estatus:param.id}).populate('chapter').exec(function(err,statu){
            if(err) {
                res.negotiate("errot inesperado");
            } else {
                res.ok(statu);
            }
        })

    } else {

    }
}
};

