/**
 * Balance.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id_decision:{
      type:'string',
      unique:true,
      primaryKey: true,
      defaultsTo:function(){
        return sails.uuidv4();
      }
    },
    description:{
        type:"String"
    },
    id_next_stauts:{
        type:"String"
    },
     //foreing Key
     status:{
       model:'Status',
       required:true,
       notNull:true
     },


  }
};
