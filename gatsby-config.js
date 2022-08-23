require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Ron Magpantay`,
    siteUrl: `https://ronmagpantay.com`,
  },
    plugins: [
      {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
          trackingIds: [
            "G-2M3Z1ZZ33L", // Google Analytics / GA
          ],
          gtagConfig: {
            send_page_view: true
          },
        },
      },   
      {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `jobs`,
        path: `${__dirname}/src/jobs/`,
      },
    },
    "gatsby-plugin-mdx",
  ],
}
