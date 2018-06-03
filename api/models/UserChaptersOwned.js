module.exports={
    attributes:{
        id_owned:{
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
      user:{
        model:'Users',
        required:true,
        notNull:true
      }
    }
}