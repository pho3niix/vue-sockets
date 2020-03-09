const marioModel = require('../models/defaultDB');

const control = {};

control.greet = (req, res)=>{
    res.send("hola desde controladores");
};

/** Insertar nuevo registro */
control.newMario = (req, res)=>{
    const newCharacther = new marioModel(
        {
            name: req.body.name,
            power: req.body.power,
            life: req.body.life
        }
    );
    newCharacther.save(
        (err, Project)=>{
            if(err){
                return res.status(400).json(
                    {
                        success: false,
                        message: 'Could not save new characther',
                        err
                    }
                );
            }else{
                return res.status(200).json(
                    {
                        success: true,
                        message: 'Successfully save new project',
                        Project
                    }
                );
            }
        }
    );
};

/** Mostrar registros almacenados en la base de datos */
control.listMario = (req, res)=>{
    marioModel.find({}).sort({_id: -1}).exec((err, Projects)=>{// sort sirve para traer los ultimos registros insertados
        if(err){
            res.send(err);
        }else{
            res.send(Projects);
        }
    });
};

/** Actulizar registros por ID*/
control.upWorld = (req, res)=>{
    const updateWorld = {
        name: req.body.name,
        power: req.body.power,
        life: req.body.life
    };
    marioModel.updateOne(
        {
            _id: req.body.id
        },
        updateWorld, (err)=>{
            if(err){
                return res.status(400).json(
                    {
                        success: false,
                        message: "could not update"
                    }
                );
            }else{
                return res.status(200).json(
                    {
                        status: true,
                        message: "Successfully updated"
                    }
                );
            }
        }
    );
};

/** Borrar registro por ID en la base de datos */
control.delWorld = (req, res)=>{
    marioModel.remove(
        {
            _id: req.body.id
        },
        (err)=>{
            if(err){
                return res.status(400).json(
                    {
                        success: false,
                        message: "could not delete"
                    }
                )
            }else{
                return res.status(200).json(
                    {
                        success: true,
                        message: "Successfullu deleted"
                    }
                );
            }
        }
    );
};

module.exports = control;