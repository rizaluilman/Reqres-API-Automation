const request = require('supertest');
const { expect } = require('chai');

const API_URL = 'https://reqres.in';

describe('API Test Suite', function() {
    it('should get user with id 2 via GET method', async function() {
        // get single user 2
        const response = await request(API_URL)
            .get('/api/users/2');

        // Assertion based on the response
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('data');
        expect(response.body.data).to.have.property('id', 2);
        expect(response.body.data).to.have.property('email');
        expect(response.body.data).to.have.property('first_name');
        expect(response.body.data).to.have.property('last_name');
        expect(response.body.data).to.have.property('avatar');

        // Display the response
        console.log('Response:', response.body);
    });
});
