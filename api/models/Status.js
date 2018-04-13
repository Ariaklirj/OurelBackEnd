/**
 * Balance.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id_estatus:{
      type:'string',
      unique:true,
      primaryKey: true,  
      defaultsTo:function(){
        return sails.uuidv4();
      }  
    },
    title:{
      required:true,
      type:"String"
     },
    description:{
        type:"String"
    },
    isStart:{
      type:"boolean",
      required:true,
    },
    isEnd:{
      type:"boolean",
      required:true,
    },
    lastStatus:{
      type:"String"
    },
    lastStatus2:{
      type:"String"
    },
    decisionsAtached:{
     
      type:"boolean",
      defaultsTo:false
    },

     //foreing Key
     
     admin:{
      model:'Admin',
      required:true
    },
    chapter:{
     model:'Chapters',
     required:true
   },
   //Association
   sticker: {
    collection: 'Sticker',
    via: 'status'
  },

  }
};
