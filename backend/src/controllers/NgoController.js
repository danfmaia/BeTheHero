const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ngos = await connection('Ngo').select('*');
        
        return response.json(ngos);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
        
        const id = generateUniqueId();
    
        await connection('Ngo').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
    
        return response.json({ id });
    }
};