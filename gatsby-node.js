/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators
    if (node.internal.type === `MarkdownRemark`) {
        const slug = (createFilePath({ node, getNode, basePath: `bookstores` }))
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
};
