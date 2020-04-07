var conn = {};
var someModel = require('../models/saveSome');

conn.saveSome = (client, io)=>{
    client.on('saveSome', (obj, callback)=>{
        let model = new someModel(obj);
        model.save((err, result)=>{
            if(err){
                callback(null, {
                    ok:false,
                    message:'error al guardar: '+err
                })
            }else{
                callback(null, {
                    ok:true,
                    message:'Registro guardado '+result
                })
            }
        })
        io.emit('saveSome', obj);     
    })
};

module.exports=conn;