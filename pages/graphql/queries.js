const { gql } = require('graphql-request');

const PagesQuery = gql`
  query GetPages {
    pages {
      title
      basePath
      blocks {
        __typename
        ... on Text {
          content {
            html
          }
        }
        ... on Image {
          image {
            id
          }
          caption
        }
      }
    }
  }
`;

exports.PagesQuery = PagesQuery;
