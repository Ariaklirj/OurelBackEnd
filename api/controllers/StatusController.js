/**
 * StatusController
 *
 * @description :: Server-side logic for managing Statuses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function (req, res) {

        var param = req.validate([{'title':'string'},{'uniqueStart':'boolean'},{'isStart':'boolean'},{'isEnd':'boolean'},{'admin':'string'},{'chapter':'string'},{'lastStatus?':'string'}]);
      
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
                                    admin:admin.id_Admin,
                                    chapter:chapter.id_chapter
                                };
                                Status.create(newEstatus).exec(function(err,status){
                                    if(err) {
                                        res.negotiate(err);
                                    } else {
                                        res.ok("estatus creado");
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
    find: function (req, res) {
        var param = req.allParams();

        if (param.chapter != null) {
            Status.find({ chapter: param.chapter }).populate('chapter').exec(function (err, statu) {
                if (err) {
                    res.negotiate("errot inesperado");
                } else {
                    res.ok(statu);
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
    update:function(req,res){
        var params = req.validate([{"description":"string"},{"id_estatus":"string"}]);
        if(params) {
            Status.update({id_estatus:params.id_estatus},{description:params.description}).exec(function(err,statusUpdate){
                if(err) {
                    res.negotiate(err);
                } else {
                    res.ok("Estatus actualisado");
                }
            });
        }
    }
};

