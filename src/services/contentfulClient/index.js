const contentful = require('contentful');

const client = contentful.createClient({
  space:
    (process && process.env && process.env.CONTENTFUL_SPACE_ID) ||
    '35ue3xk6d2pg',
  accessToken:
    (process && process.env && process.env.CONTENTFUL_TOKEN) ||
    'd0ef590c8ee88bdd4b3e256ef234e91062cee9f67c3edbe9a1ddafc10bc9b415',
  host: 'cdn.contentful.com',
});

export default client;
