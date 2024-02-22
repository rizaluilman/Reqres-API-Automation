const request = require('supertest');
const { expect } = require('chai');
const fs = require('fs');

const API_URL = 'https://reqres.in';

describe('API Test Suite', function() {
    it('should create a new user via POST method and display the result', async function() {
        // Data input for creating a new user
        const userData = {
            name: 'morpheus',
            job: 'leader'
        };

        // Make a POST request to create a new user
        const response = await request(API_URL)
            .post('/api/users')
            .send(userData);

        // Assertion based on the response
        expect(response.status).to.equal(201);
        expect(response.body).to.have.property('name', userData.name);
        expect(response.body).to.have.property('job', userData.job);
        expect(response.body).to.have.property('id').not.null;
        expect(response.body).to.have.property('createdAt').not.null;

        // Display the response in the desired format
        const formattedResponse = {
            name: response.body.name,
            job: response.body.job,
            id: response.body.id,
            createdAt: response.body.createdAt
        };

        // Save the formatted response to a file (optional)
        fs.writeFileSync('./response.json', JSON.stringify(formattedResponse, null, 2));

        // Display the response
        console.log('Response:', formattedResponse);
    });
});
