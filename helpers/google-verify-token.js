const { OAuth2Client } = require('google-auth-library');

const CLIENT_ID = '349455826450-cpa1cd5ruk26fe49g5uh3k64066hiv2v.apps.googleusercontent.com';

const client = new OAuth2Client(CLIENT_ID);

const validarGoogleIdToken = async (token) => {
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: [
                CLIENT_ID,
                '349455826450-5aomutsj75qbsg4q67a2q51mgn76aj9s.apps.googleusercontent.com'
            ],
        });
        const payload = ticket.getPayload();

        console.log('====PAYLOAD====');
        console.log(payload);

        return {
            name: payload['name'],
            picture: payload['picture'],
            email: payload['email'],
        };

    } catch (e) {
        return null;
    }
}

module.exports = {
    validarGoogleIdToken
}