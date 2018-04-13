/**
 * AlbumController
 *
 * @description :: Server-side logic for managing Albums
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function (req, res) {
        var params = req.validate([{ 'used': 'boolean' }, { 'user': 'string' }, { 'sticker': 'string' }]);

        if (params) {
            Album.create(params).exec(function (err, data) {
                if (!err) {
                    res.ok(data);
                } else {
                    res.negotiate(err);
                }
            })
        }
    },
    findAll: function (req, res) {
        var params = req.validate({ 'user': 'string' });
        if (params) {
            Album.find(params).exec(function (err, data) {
                if (!err && data) {
                    res.ok(data);
                } else {
                    if (err)
                        res.negotiate(err)
                    else
                        res.notFound();
                }
            })
        }
    },
    findBy: function (req, res) {
        var params = req.validate([{ 'user': 'string' }, { 'sticker?': 'string' }, { 'used?': 'boolean' }]);
        if (params) {
            Album.find(params).exec(function (err, data) {
                if (!err && data) {
                    res.ok(data);
                }
                else {
                    if (err)
                        res.negotiate(err);
                    else
                        res.notFound();
                }
            })
        }

    }
};

