const dabase=require('./keys')
const mysql=require('mysql')
const datbase = require('./keys')
const util = require('util');

const pool=mysql.createPool(datbase)
pool.getConnection((err,connection)=>{
    if(err){
        console.error(err);
    }
    if(connection)
        connection.release();

    console.log('Base de Datos Conectada');
    
    return;
})
pool.query=util.promisify(pool.query);

module.exports=pool
