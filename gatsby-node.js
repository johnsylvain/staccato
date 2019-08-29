const path = require('path');

exports.createPages = ({ graphql, actions: { createPage } }) => {
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('./src/templates/review.tsx');

    resolve(
      graphql(`
        query {
          allContentfulReview {
            edges {
              node {
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        const posts = result.data.allContentfulReview.edges;

        posts.forEach(({ node }, index) => {
          const path = node.slug;
          createPage({
            path,
            component: blogPostTemplate,
            context: {
              pathSlug: path,
            },
          });
        });
        resolve();
      })
    );
  });
};
