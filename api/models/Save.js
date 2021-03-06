/**
 * Balance.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id_save:{
      type:'string',
      unique:true,
      primaryKey: true,
      defaultsTo:function(){
        return sails.uuidv4();
      }
    },
     //foreing Key
     chapter:{
       model:'Chapters',
       required:true,
       notNull:true
     },
     status:{
       model:'Status',
       required:true,
       notNull:true
     },
     //Assosiation
     character:{
       collection: 'Character',
       via:'save'
     }
  }
};
