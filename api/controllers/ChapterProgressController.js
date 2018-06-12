/**
 * ChapterProgressController
 *
 * @description :: Server-side logic for managing Chapterprogresses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function (req, res) {
        console.log("actualizando progreso");
        var params = req.validate([{ "chapter": "string" }, { "status": "string" }, { "user": "string" }]);
        ChapterProgress.create(params).exec(function (err, data) {
            if (!err)
                res.ok();
            else
                res.negotiate(err);
        });

    },
    findAllByChapter: function (req, res) {
        var params = req.validate([{ "chapter": "string" }, { "user": "string" }]);
        var criteria = {
            chapter: params.chapter,
            user: params.user
        }
        ChapterProgress.find(criteria).exec(function (err, chapters) {
            if(!err){
                Status.find({chapter:params.chapter}).exec(function(err2,data){
                    if(!err2){
                            var statusFromChapterUser = chapters.length;
                            var totalStatusChapter = data.length;
                            var progrees = (statusFromChapterUser*100)/totalStatusChapter;
                            progrees = progrees.toFixed(2);
                            var responseObj= {
                                amountUserStatus: statusFromChapterUser,
                                toalStatus:totalStatusChapter,
                                totalProgress : progrees
                            }
                            res.ok(responseObj);
                    }
                    else {
                        res.negotiate(err);
                    }
                });
            }
            else {
                res.negotiate(err);
            }
          
        });
    }

};

