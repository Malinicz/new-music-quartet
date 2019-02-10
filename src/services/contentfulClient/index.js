const contentful = require('contentful');

const client = contentful.createClient({
  space: 'test',
  accessToken: 'test',
  host: 'cdn.contentful.com',
});

export default client;
