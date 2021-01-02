
/**
 * Blocks allow us to build up arbitrary pages composed of other entities.
 * This function takes a `blocks` array from a `Pages` query and assembles
 * the HTML to be rendered.
 *
 * The default type is `Text`. Adding new types would entail creatiing
 * a content model in GraphCMS then adding a `case` statement to this
 * function to handle rendering of that type.
 */
const assembleBlocks = blocks => {
  let html = '';
  if (Array.isArray(blocks)) {
    blocks.forEach(block => {
      switch (block.__typename) {
        case 'Image':
          const caption = block.caption || '';
          const figCaption = caption ? `<figcaption>${caption}</figcaption>` : '';
          html += `<figure><img src="${block.path}" alt="${caption}" /></figure>${figCaption}`;
        break;
        default: // 'Text'
          html += block.content.html;
        break;
      }
    });
  }
  html = addLazyLoading(html); // lazy load images
  html = addRelNoopener(html); // add rel="noopener" to external links
  html = convertNewlinesToBreaks(html);
  return html;
};

// convert all instances of \n to <br> for a given string
const convertNewlinesToBreaks = input => {
  const rgx = /\n/g;
  return input.replace(rgx, '<br>');
};

// defeated, i write a function to add rel="noopener" to all links, sigh
const addRelNoopener = input => {
  const rgx = /<a\s/gi;
  return input.replace(rgx, '<a rel="noopener" ');
};

// lazy load all images
const addLazyLoading = input => {
    const rgx = /<img\s/gi;
    return input.replace(rgx, '<img loading="lazy" ');
};

exports.assembleBlocks = assembleBlocks;
