const { request } = require('graphql-request');
const { PagesQuery } = require('./queries');

const graphQLEndpoint = 'https://api-us-west-2.graphcms.com/v2/ckjg8uxhwdw3601xp33d92ts2/master';

const getPages = async () => {
  const { pages } = await request(graphQLEndpoint, PagesQuery);
  return pages;
};

exports.getPages = getPages;
