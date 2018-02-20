/**
 * AdminController
 *
 * @description :: Server-side logic for managing Admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function (req, res) {
        var param = req.validate([{ 'name': 'string' }, { 'password': 'string' }, { 'lvlAdmin?': 'string' }]);

        if (param) {
            console.log("parametros ok")
            var obj = {
                name: param.name,
                password: param.password,
                lvlAdmin:param.lvlAdmin
            };
            console.log(obj);
            Admin.create(obj).exec(function (err, value) {
                if (err) {
                    console.log(err)
                    res.negotiate(err);
                } else {
                    res.ok("User created");
                }
            });
        }
    },


    find: function (req, res) {
        var param = req.allParams();
        if (param.name != null) {
            Admin.find({ name: param.name }).exec(function (err, adm) {
                if (err) {
                    res.negotiate("error inesperado");
                } else {
                    res.ok(adm);
                }
            });
        }
    }

};

