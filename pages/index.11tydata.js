const { getPages } = require('./graphql/data');
const { assembleBlocks } = require('./graphql/utils');

module.exports = async () => {
  const pages = await getPages();
  const page = pages.filter(page => page.basePath === '/')[0] || null;
  let html = '';
  if (page && page.blocks) {
    html = assembleBlocks(page.blocks);
  }
  return {
    html,
  };
};
