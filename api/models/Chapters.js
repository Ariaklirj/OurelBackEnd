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
    },
    description:{
        type:"string"
    },
    chapter_name:{
      type:"String"
    },
    chapter_status:{
      type:"boolean",
      notNull:true
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
