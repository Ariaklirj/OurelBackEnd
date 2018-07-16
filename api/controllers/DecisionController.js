/**
 * DecisionController
 *
 * @description :: Server-side logic for managing Decisions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function (req, res) {

        var params = req.validate([{ 'limitTime': 'boolean' }, { 'singleDecision': 'boolean' }, { 'uniqDecision': 'boolean' },
        { 'descriptionOne': 'string' }
            , { 'descriptionTwo': 'string' }, { 'descriptionThree?': 'string' }, { 'status': 'string' }, { 'admin': 'string' },
        { 'hasRestriccionsOne': 'boolean' }, { 'hasRestriccionsTwo': 'boolean' }, { 'hasRestriccionsThree': 'boolean' },

        { 'vitOneNeeded': 'string', },
        { 'strOneNeeded': 'string' },
        { 'agiOneNeeded': 'string' },
        { 'intOneNeeded': 'string' },
        { 'lckOneNeeded': 'string' },
        { 'vitTwoNeeded': 'string' },
        { 'strTwoNeeded': 'string' },
        { 'agiTwoNeeded': 'string' },
        { 'intTwoNeeded': 'string' },
        { 'lckTwoNeeded': 'string' },
        { 'vitThreeNeeded': 'string' },
        { 'strThreeNeeded': 'string' },
        { 'agiThreeNeeded': 'string' },
        { 'intThreeNeeded': 'string' },
        { 'lckThreeNeeded': 'string' },


        { 'chapter': 'string' }]);

        if (params) {
            Decisions.create(params).exec(function (err, status) {
                if (err) {
                    res.negotiate(err);
                }
                else {
                    res.ok(status);
                }
            })
        }

    },
    find: function (req, res) {
        var params = req.validate({ 'status': 'string' });
        console.log(params);
        if (params) {
            Decisions.findOne({ status: params.status }).exec(function (err, data) {
                if (err) {
                    res.negotiate(err);
                } else {
                    console.log(data);
                    if (data) {
                        res.ok(data);
                    } else {
                        res.notFound("Sin decisiones");
                    }
                }
            })
        }
    },
    update: function (req, res) {
        var params = req.validate(["id_decision", "updateDecision"])
        if (params) {
            console.log(params);
            Decisions.update(params.id_decision, params.updateDecision).exec(function (err, data) {
                if (err) {
                    res.negotiate(err)
                } else {
                    res.ok(data);
                }
            });
        }
    },
    updateAll: function (req, res) {
        var params = req.validate(["id_decision", "updateDecision"])
        if (params) {

            Decisions.update(params.id_decision, params.updateDecision).exec(function (err, data) {
                if (err) {
                    res.negotiate(err)
                } else {
                    res.ok(data);
                }
            });
        }
    }
};

