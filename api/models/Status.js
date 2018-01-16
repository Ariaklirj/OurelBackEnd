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
    },
    description:{
        type:"String"
    },

     //foreing Key
     user:{
       model:'Users',
       required:true,
       notNull:true
     },
     admin:{
      model:'Admin',
      required:true,
      notNull:true
    },
    chapter:{
     model:'Chapters',
     required:true,
     notNull:true
   }


  }
};
