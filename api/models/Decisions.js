/**
 * Balance.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id_decision: {
      type: 'string',
      unique: true,
      primaryKey: true,
      defaultsTo: function () {
        return sails.uuidv4();
      }
    },

    limitTime: {
      required: true,
      type: "boolean"
    },
    singleDecision: {
      required: true,
      type: "boolean"
    },

    descriptionOne: {
      required: true,
      required: true,
      type: "String"
    },
    idNextStatusOne: {
    
      type: "String",
      defaultsTo:null
    },
    descriptionTwo: {
      required: true,
      type: "String"
    },
    idNextStatusTwo: {
    
      type: "String",
      defaultsTo:null
    },
    descriptionThree: {
     
      type: "String",
      defaultsTo:null
    },
    idNextStatusThree: {
      type: "String",
      defaultsTo:null
    },
    //foreing Key
    status: {
      model: 'Status',
      required: true,
      notNull: true
    },
    admin: {
      model: 'Admin',
      required: true,
      notNull: true
    },
    chapter: {
      model: 'Chapters',
      required: true,
      notNull: true
    }


  }
};
