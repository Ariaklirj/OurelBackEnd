/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id:{
      type:'string',
      primaryKey: true,
      unique:true,
      defaultsTo:function(){
        return sails.uuidv4();
      },

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
    coins:{
      type:"float",
      required:true,
      notNull:true
    },

    //Assosiation
    album:{
      collection: 'Album',
      via:'user'
    },
    character:{
      collection: 'Character',
      via:'user'
    }
  }
};
