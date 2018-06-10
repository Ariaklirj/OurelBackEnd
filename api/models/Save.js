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
    characterName: {
      type: "string",
      required:true
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
     user:{
      model:'Users',
      required:true,
      notNull:true
    },
     //Assosiation
     character:{
       collection: 'Character',
       via:'save'
     }
  },
  afterCreate: function (saveCreated, next) {
    var characterToSave = {
      name:saveCreated.characterName,
      user:saveCreated.user,
      save:saveCreated.id_save
    }
    Character.create(characterToSave).exec(function(err,data){
      if(!err)
          next();
      else 
          next(err);
    });
  }
};
