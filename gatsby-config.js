module.exports = {
  siteMetadata: {
    title: 'The Travel Shelf',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
          name: `src`,
          path: `${__dirname}/src/`,
      }
    },
    `gatsby-transformer-remark`
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //       name: `data`,
    //       path: `${__dirname}/src/data/`,
    //   },
    // },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
  ]
};
