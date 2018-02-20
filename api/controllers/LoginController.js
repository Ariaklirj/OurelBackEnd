/**
 * LoginController
 *
 * @description :: Server-side logic for managing Logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    login: function (req, res) {
        var params = req.validate([{ 'name': 'string' }, { 'password': 'string' }], false);

        if (params) {
            var criteria = {
                name: params.name,
                password: params.password
            }
            Admin.findOne(criteria).exec(function (err, admin) {
                if (err) {
                    res.negotiate(err);
                } else {
                    if(admin) {
                        var dataResponse = {
                            id_Admin:admin.id_Admin,
                            lvlAdmin:admin.lvlAdmin
                        }
                        res.ok(dataResponse);
                    } else {
                        res.notFound("admin no encotrado");
                    }
                }
            })
        } else {
            res.badRequest("parametros invalidos");
        }
    }
};

