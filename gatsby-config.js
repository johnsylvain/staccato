module.exports = {
  siteMetadata: {
    title: `staccato`,
    description: `Short music reviews.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `e26ozql2jb17`,
        accessToken: `yzgoRsvA9V28418pEPuOitPl6OfLHFl_5Lm0Ru_PCsY`
      }
    }
  ],
};
