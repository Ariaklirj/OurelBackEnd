/**
 * ChapterProgress.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id_progress:{
      type:'string',
      primaryKey: true,
      unique:true,
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
user:{
 model:'Users',
 required:true,
 notNull:true
}

  }
};
