/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id_Admin:{
      type:'string',
      primaryKey: true,
      unique:true,
      defaultsTo:function(){
        return sails.uuidv4();
      }

    },
    lvlAdmin:{
      type:'integer',
      defaultsTo:'1'
    },
    name:{
      type:'string',
      required:true,
      notNull:true
    },
    password:{
      type:"string",
      required:true,
      notNull:true
    },

    //Assosiation
    status:{
      collection: 'Status',
      via:'admin'
    },
    decisions:{
      collection: 'Decisions',
      via:'admin'
    },
    chapters:{
      collection: 'Chapters',
      via:'admin'
    }
  }
};
