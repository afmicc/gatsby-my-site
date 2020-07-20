/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      // https://www.gatsbyjs.org/packages/gatsby-plugin-module-resolver/
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          components: './components',
          pages: './pages',
          utils: './utils',
        }
      }
    }
  ],
}
