/**
 * StickersController
 *
 * @description :: Server-side logic for managing Stickers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function (req, res) {
        var params = req.validate([{ 'description': 'string' }, { 'urlImage': 'string' }, { 'chapter': 'string' },{ 'status': 'string' }]);

        if (params) {
            Sticker.create(params).exec(function (err, data) {
                if (!err) {
                    res.ok(data);
                } else {
                    res.negotiate(err);
                }
            })
        }
    },
    findAll: function (req, res) {
       
            Sticker.find().exec(function (err, data) {
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
};

