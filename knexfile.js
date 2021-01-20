// Update with your config settings.

module.exports = {


    client: 'mysql2',
    connection: {
        host : 'mysql742.umbler.com',  
        user : 'kich',      
        password : '97408469Kich',  
        database : 'lojakich'  
    },
    migrations:{
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  
};
