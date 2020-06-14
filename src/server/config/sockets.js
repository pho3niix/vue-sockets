const msgModel = require('../models/saveSome');

var conn = {};

conn.desconectar = (client, io)=>{
    client.on('disconnect', ()=>{
        console.log('Usuario desconectado');
    })
}
    
conn.newTest = (client, io)=>{
    client.on('message', obj=>{
        io.emit('send', obj);
    })
}

module.exports = conn;