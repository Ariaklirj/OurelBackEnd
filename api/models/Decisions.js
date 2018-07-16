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
    //TypeDecision
    limitTime: {
      required: true,
      type: "boolean"
    },
    singleDecision: {
      required: true,
      type: "boolean"
    },
    uniqDecision: {
      required: true,
      type: "boolean"
    },

    //DecisionOneConfig
    descriptionOne: {
     
      required: true,
      type: "String"
    },
    idNextStatusOne: {
    
      type: "String",
      defaultsTo:null
    },
    hasRestriccionsOne: {
      required: true,
      type: "boolean"
    },
   
    idNextStatusOneSucces: {
    
      type: "String",
      defaultsTo:null
    },
    
    idNextStatusOneFail: {
    
      type: "String",
      defaultsTo:null
    },
    strOneNeeded:{
      type:"String",
      defaultsTo:0
    },
    vitOneNeeded:{
      type:"String",
      defaultsTo:0
    },
    agiOneNeeded:{
      type:"String",
      defaultsTo:0
    },
    intOneNeeded:{
      type:"String",
      defaultsTo:0
    },
    lckOneNeeded:{
      type:"String",
      defaultsTo:0
    },

//  Config Decision 2
    descriptionTwo: {
      defaultsTo:null,
      type: "String"
    },
    idNextStatusTwo: {
    
      type: "String",
      defaultsTo:null
    },
    hasRestriccionsTwo: {
      required: true,
      type: "boolean"
    },
    
    idNextStatusTwoSucces: {
    
      type: "String",
      defaultsTo:null
    },
    
    idNextStatusTwoFail: {
    
      type: "String",
      defaultsTo:null
    },
    strTwoNeeded:{
      type:"String",
      defaultsTo:0
    },
    vitTwoNeeded:{
      type:"String",
      defaultsTo:0
    },
    agiTwoNeeded:{
      type:"String",
      defaultsTo:0
    },
    intTwoNeeded:{
      type:"String",
      defaultsTo:0
    },
    lckTwoNeeded:{
      type:"String",
      defaultsTo:0
    },

    //config 3
    descriptionThree: {
     
      type: "String",
      defaultsTo:null
    },
    idNextStatusThree: {
      type: "String",
      defaultsTo:null
    },
    hasRestriccionsThree: {
      required: true,
      type: "boolean"
    },
   
    idNextStatusThreeSucces: {
    
      type: "String",
      defaultsTo:null
    },

    idNextStatusThreeFail: {
    
      type: "String",
      defaultsTo:null
    },
    strThreeNeeded:{
      type:"String",
      defaultsTo:0
    },
    vitThreeNeeded:{
      type:"String",
      defaultsTo:0
    },
    agiThreeNeeded:{
      type:"String",
      defaultsTo:0
    },
    intThreeNeeded:{
      type:"String",
      defaultsTo:0
    },
    lckThreeNeeded:{
      type:"String",
      defaultsTo:0
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
