/**
 * DecisionController
 *
 * @description :: Server-side logic for managing Decisions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req,res) {
        var param = req.allParams();
        if (param.description!=null&&param.status!=null&&param.admin!=null&&param.chapter!=null) {

            Status.find({id_estatus:param.status}).exec(function(err,stat){

                if(err) {
                    res.negotiate(err);
                }
                else {
                    Admin.find({id_Admin:param.admin}).exec(function(err,adm) {
                        if(err) {
                            res.negotiate(err);
                        } else {
                            Chapters.find({id_chapter:param.chapter}).exec(function(err,chap){
                                if(err) {
                                    res.negotiate(err);
                                } else {
                                    var obj = {
                                        description:param.description,
                                        id_next_stauts:param.nextStatus,
                                        status:stat[0].id_estatus,
                                        admin:adm[0].id_Admin,
                                        chapter:chap[0].id_chapter
                                    };
                                    Decisions.create(obj).exec(function(err,object){
                                        if(err){
                                            res.negotiate(err);
                                        } else {
                                            res.ok("decision creada");
                                        }
                                    });
                                }
                            });
                        }

                    });
                }

            });

        }
    },
    find:function(req,res){
        var param = req.allParams();
        if (param.status!=null){

            Decisions.find({status:param.status}).exec(function(err,value){
                if (err) {
                    res.negotiate(err);
                } else {
                    res.ok(value);
                }
            });

        } else {
            res.badRequest("falta parametro de busqueda");
        }
    },
    update:function(req,res) {
        var param = req.allParams();

        if(param.id!=null&&param.nextStatus!=null) {
            Decisions.update({id_decision:param.id},{id_next_stauts:param.nextStatus},function(err,dataUpdated){
                if(err) {
                    res.negotiate(err);
                } else {
                    res.ok(dataUpdated);
                }
            });
        } else {
            res.badRequest("Datos incompletos");
        }
    }
};

