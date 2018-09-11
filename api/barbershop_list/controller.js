const models = require('./../models')

module.exports= {
    // GET /barbershop_list
    get: (req,res) => {
        models.barbershop_list.findAll().then(barbershop => {
            if(barbershop===nul){
                return res.send({
                    message: "Data not found"
                })
            }

            res.send({
                data: barbershop
            })
        }) 
    },

    // get /barbershop_list/:barber_id
    getById: (req,res) =>{
        req.params.barber_id = JSON.parse(req.params.barber_id)
        models.barbershop_list.findOne({ where : { barber_id: req.params.barbershop_list}}).then(barber => {
            if (barber===null) {
                return res.send({
                    message: "Data not found"
                })
            }

            res.send({
                data:barber
            })
        })
    },
    //  POST/ BARBER LIST
    post: (req,res) => {
        models.barbershop_list.create(req.body).then(barber =>{
            res.send({
                message: "Insert data sukses",
                data: barber
            })
        }).catch(err =>{
            res.send({
                message: "error",
                error:err
            })
        })
    }   

}







