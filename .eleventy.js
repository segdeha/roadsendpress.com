module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('pages/assets');
  eleventyConfig.addPassthroughCopy('pages/favicon.ico');
  return {
    dir: {
      input: 'pages',
      output: 'build',
    },
  };
};
