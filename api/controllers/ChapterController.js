/**
 * ChapterController
 *
 * @description :: Server-side logic for managing Chapters
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    create: function (req, res) {
        console.log("crear");
        var param = req.validate([ { "name": "string" }, { "desc": "string" },{"status":"string"},{"admin":"string"}]);
        console.log("parametros ok");
        var obj = {         
            description: param.desc,
            chapter_name: param.name,
            chapter_status:param.status,
            admin:param.admin
        };
        console.log(obj);
        Chapters.create(obj).exec(function (err, value) {
            if (err) {
                console.log(err)
                res.negotiate(err);
            } else {
                res.ok("Chapter created");
            }
        });
    },
    find:function(req,res){
        console.log("obtener");
        var param = req.allParams();

        if(param.id!=null){
            var criteria={
                id_chapter:param.id
            }
            Chapters.findOne(criteria).exec(function(err,value){
                if(!err){
                    res.ok(value);
                }
                else {
                    res.negotiate(err);
                }
            });
        }
        else {
            Chapters.find().exec(function(err,values){
                if(!err){
                    res.ok(values);
                }
                else {
                    res.negotiate(err);
                }
            });
        }
        
    },
    update:function(req,res){
        console.log("actualizar");
        var params = req.validate([{'status':'boolean'},{'id':'string'}]);
        if(params){
            Chapters.update({id_chapter:params.id},{chapter_status:params.status},function(err,updateData){
                if(!err) {
                    res.ok(updateData);
                }
                else {
                    res.negotiate(err);
                }
            });
        }
    }
    
};

