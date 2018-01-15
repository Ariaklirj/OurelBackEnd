/**
 * Chapter.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id_chapter:{
      type:'string',
      unique:true,
      primaryKey: true,
      defaultsTo:function(){
        return sails.uuidv4();
      }
    },
    description:{
        type:"string"
    },
      //Assosiation
    sticker:{
      collection: 'Sticker',
      via:'chapter'
    },
    save:{
      collection: 'Save',
      via:'chapter'
    },
    status:{
      collection: 'Status',
      via:'chapter'
    },
    decisions:{
      collection: 'Decisions',
      via:'chapter'
    }
  }
};
