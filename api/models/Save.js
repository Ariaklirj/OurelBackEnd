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
    name: {
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
    console.log(saveCreated);
    var characterName= saveCreated.characterName;
    var userID=saveCreated.user;
    var saveID = saveCreated.id_save;
    Character.create({name:characterName},{user:userID},{save:saveID}).exec(function(err,data){
      if(!err){
       
        next();
      }        
      else 
          next(err);
    });
  }
};
