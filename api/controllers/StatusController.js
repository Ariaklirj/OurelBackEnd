/**
 * StatusController
 *
 * @description :: Server-side logic for managing Statuses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function (req, res) {

        var param = req.validate([{'title':'string'},{'isStart':'boolean'},{'isEnd':'boolean'},
        {'admin':'string'},{'chapter':'string'},{'lastStatus?':'string'},
        {'strUp?':'string'},{'vitUp?':'string'},{'agiUp?':'string'},{'intUp?':'string'},{'lckUp?':'string'},
        {'lastStatus2?':'string'}]);
      
        if(param) {
            Admin.findOne({id_Admin:param.admin}).exec(function(err,admin){
                if(err) {
                    res.negotiate(err);
                } else {
                    if(admin) {
                        Chapters.findOne({id_chapter:param.chapter}).exec(function(err,chapter){
                            if(err) {
                                res.negotiate(err);
                            } else {
                                var newEstatus = {
                                    title:param.title,
                                    uniqueStart:param.uniqueStart,
                                    isStart:param.isStart,
                                    isEnd:param.isEnd,
                                    lastStatus:param.lastStatus,
                                    lastStatus2:param.lastStatus2,
                                    admin:admin.id_Admin,
                                    chapter:chapter.id_chapter
                                };
                                Status.create(param).exec(function(err,status){
                                    if(err) {
                                        res.negotiate(err);
                                    } else {
                                        res.ok(status);
                                    }
                                })
                            }
                        });
                    } else {
                        res.forbidden();
                    }
                }
            })
        } 
        


    },
    findGameStatus:function(req,res){
        var param = req.validate({"id_estatus":"string"});
        Status.findOne({id_estatus:param.id_estatus}).exec(function(err,data){
            if (!err){
                if(data)
                    res.ok(data);
            }
            else {
                res.negotiate(err);
            }
               

        })
    },
    find: function (req, res) {
        var param = req.allParams();

        if (param.chapter != null) {
            Status.find({ chapter: param.chapter }).populate('chapter').exec(function (err, statu) {
                if (err) {
                    res.negotiate("errot inesperado");
                } else {
                    if(statu.length<=0){
                        res.notFound();
                    } else {
                        res.ok(statu);
                    }
                   
                }
            });

        } else {
            Status.find().populate('chapter').exec(function (err, statu) {
                if (err) {
                    res.negotiate("errot inesperado");
                } else {
                    res.ok(statu);
                }
            });
        }
    },
    findFirsts:function(req,res){
        var param = req.allParams({"chapter":"string"});
        if (param.chapter!= null) {
            Status.find({chapter:param.chapter , isStart:true}).exec(function(err,status){
                if(err){
                    res.negotiate(err);
                } else {
                    if (status.length<=0)
                        res.notFound();
                    else 
                        res.ok(status);
                }
            });
        }
    },
    update:function(req,res){
        var params = req.validate([{"description":"string"},{"id_estatus":"string"},{"decisionsAtached":"boolean"}]);
        if(params) {
            Status.update({id_estatus:params.id_estatus},{description:params.description,decisionsAtached:params.decisionsAtached}).exec(function(err,statusUpdate){
                if(err) {
                    res.negotiate(err);
                } else {
                    res.ok("Estatus actualisado");
                }
            });
        }
    }
    //TODO get first status by chapter
};

