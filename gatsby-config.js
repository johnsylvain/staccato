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
        name: `staccato`,
        short_name: `staccato`,
        start_url: `/`,
        background_color: `#E5D9D9`,
        theme_color: `#2c2c2c`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `e26ozql2jb17`,
        accessToken: `yzgoRsvA9V28418pEPuOitPl6OfLHFl_5Lm0Ru_PCsY`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-60696638-7`
      }
    }
  ],
};
