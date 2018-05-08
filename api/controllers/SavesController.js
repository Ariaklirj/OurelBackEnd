/**
 * SavesController
 *
 * @description :: Server-side logic for managing Saves
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function (req, res) {
        var params = req.validate([{ 'chapter': 'string' }, { 'status': 'string' }, { 'user': 'string' }])
        if (params) {
            Save.create(params).exec(function (err, save) {
                if (!err) {
                    res.ok(save);
                } else {
                    res.negotiate(err);
                }
            })
        }
    },
    find: function (req, res) {
        var params = req.validate({ 'id_save': 'string' })

        if (params) {
            Save.find({ id_save: params.id_save }).exec(function (err, data) {
                if (!err && data) {
                    res.ok(data);
                } else {
                    if (err)
                        res.negotiate(err);
                    else
                        res.notFound();
                }
            })
        }


    }
    //TODO update save

};

