const contentful = require('contentful');

const client = contentful.createClient({
  space: (process && process.env && process.env.CONTENTFUL_SPACE_ID) || '',
  accessToken: (process && process.env && process.env.CONTENTFUL_TOKEN) || '',
  host: 'cdn.contentful.com',
});

export default client;
