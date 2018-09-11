const models = require('./../models')

module.exports= {
    get: (req,res) => {
        models.accounts.findAll().then(account => {
            if(account===nul){
                return res.send({
                    message: "Data not found"
                })
            }

            res.send({
                data: account
            })
        }) 
    },


}
