var conn = {};

conn.desconectar = (client, io)=>{
    client.on('disconnect', ()=>{
        console.log('Usuario desconectado');
    })
}

let messages = [];

conn.test = (client, io)=>{
    client.emit('testForm', messages);
};
    
conn.newTest = (client, io)=>{
    client.on('newTestForm', (obj, callback)=>{
        io.emit('newTestForm', obj);
        callback({
            ok:true
        })
    })
}

module.exports = conn;