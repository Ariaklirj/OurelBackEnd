/**
 * Balance.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id_character:{
      type:'string',
      unique:true,
      primaryKey: true,
      defaultsTo:function(){
        return sails.uuidv4();
      }
    },
     name:{
       type:'string',
     },
     //foreing Key
     user:{
       model:'Users',
       required:true,
       notNull:true
     },
     save:{
       model:'Save',
       required:true,
       notNull:true
     }


  }
};
