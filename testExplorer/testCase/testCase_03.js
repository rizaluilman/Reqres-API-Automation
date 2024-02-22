const request = require('supertest');
const { expect } = require('chai');

const API_URL = 'https://reqres.in';

describe('API Test Suite', function() {
    it('should delete user with id 2 via DELETE method', async function() {
        // Make a DELETE request to delete user with id 2
        const response = await request(API_URL)
            .delete('/api/users/2');

        // Assertion based on the response
        expect(response.status).to.equal(204);

        // Display the result
        console.log('Result:', 'User has been deleted');
    });
});
