const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('NGO', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new NGO', async () => {
        const response = await request(app)
            .post('/ngos')
            //.set('Authorization', '...')
            .send({
                name: "APAD2",
                email: "contato@teste.com",
                whatsapp: "4700000000",
                city: "Rio de Sul",
                uf: "SC"
            });
        
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
        console.log(response.body);
    });
});