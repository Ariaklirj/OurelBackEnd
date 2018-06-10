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
            if (!err) {
                if (chapters)
                    res.ok(chapters);
                else
                    res.notFound();
            }
            else
                res.negotiate(err);
        });
    }

};

