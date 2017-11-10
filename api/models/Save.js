/**
 * Balance.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id:{
      type:'string',
      unique:true,
      primaryKey: true,
      defaultsTo:function(){
        return sails.uuidv4();
      }
    },
     ammount:{
       type:'float',
       defaultsTo:0
     },
     //foreing Key
     user:{
       model:'Users',
       required:true,
       notNull:true
     },
     //Assosiation
     save:{
       collection: 'Saves',
       via:'save'
     }

  }
};
