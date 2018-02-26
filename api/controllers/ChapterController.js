/**
 * ChapterController
 *
 * @description :: Server-side logic for managing Chapters
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    create: function (req, res) {
        console.log("crear");
        var param = req.validate([ { "chapter_name": "string" }, { "description": "string" },{"chapter_status":"boolean"},{"admin":"string"},{"previous_chapter":"string"},{"unique_start":"boolean"}]);
        console.log("parametros ok",param);

        if(param){
              
        Chapters.create(param).exec(function (err, value) {
            if (err) {
                console.log(err)
                res.negotiate(err);
            } else {
                res.ok(value);
            }
        });
        }
      
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
                    if(values.length>0)
                        res.ok(values);
                    else 
                        res.notFound("sin capitulos")
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
    } ,
    updateSequence:function(req,res) {
        console.log("actualizar sequencia");
        var params = req.validate(['id_chapter','sequenceUpdate']);
        if(params){
            console.log(params);
            Chapters.update(params.id_chapter,params.sequenceUpdate,function(err,updateData){
                if(!err) {
                    console.log(updateData)
                    res.ok(updateData);
                }
                else {
                    res.negotiate(err);
                }
            });
        }
    }
    
};

