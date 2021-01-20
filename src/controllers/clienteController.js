const connection = require('../database/connection')
const {existsOrError, notExistsOrError} = require('../config/validation')
const crypto = require('crypto')



module.exports ={
    async create(request, response){
        const { name, price } = request.body
        const id = crypto.randomBytes(4).toString('HEX');
        try{
            
            const product = await connection('produto').where({name: name}).first()
            notExistsOrError(product, 'Produto ja existe')


        }catch(msg){
            return response.status(400).send(msg);
        }

        await connection('produto').insert({
            id,
            name,
            price
        })
           
        return response.json({id, name, price})


    },


    async index(request, response){
        const products = await connection('produto').select('*');
        return response.json(products)
    }

}