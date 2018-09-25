module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Nowmad',
        start_url: '/',
        icon: 'src/assets/images/logo.png',
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        precision: 8,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-109732900-1',
        head: true,
      },
    },
  ],
}
