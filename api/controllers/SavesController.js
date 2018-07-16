/**
 * SavesController
 *
 * @description :: Server-side logic for managing Saves
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function (req, res) {
        var params = req.validate([{ 'chapter': 'string' }, { 'status': 'string' }, { 'user': 'string' }, { 'characterName': 'string' }])
      
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
            Save.findOne({ id_save: params.id_save }).exec(function (err, data) {
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


    },
    update: function(req,res){
        var params = req.validate([{'chapter':'string'},{'id_save':'string'},{'status':'string'}]);
        if(params){
            Save.update({id_save:params.id_save},{status:params.status,chapter:params.chapter}).exec(function(err,data){
                if(!err) {
                    res.ok(data);
                }
                else {
                    res.negotiate(err);
                }
            })
        }
    }
  

};

