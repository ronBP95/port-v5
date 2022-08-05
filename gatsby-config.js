module.exports = {
  siteMetadata: {
    title: `Ron Magpantay`,
    siteUrl: `https://www.yourdomain.tld`,
  },
    plugins: [    
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
