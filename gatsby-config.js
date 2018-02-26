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
          name: `pages`,
          path: `${__dirname}/src/pages/`,
      },
    },
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
