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
            optimize_id: "OPT_CONTAINER_ID",
            anonymize_ip: true,
            cookie_expires: 0,
            send_page_view: true,
          },
          pluginConfig: {
            // Puts tracking script in the head instead of the body
            head: true,
            // Setting this parameter is also optional
            respectDNT: true,
            // Avoids sending pageview hits from custom paths
            exclude: ["/preview/**", "/do-not-track/me/too/"],
            // Defaults to https://www.googletagmanager.com
            origin: "YOUR_SELF_HOSTED_ORIGIN",
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
