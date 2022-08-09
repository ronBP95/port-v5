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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    "gatsby-plugin-mdx",
  ],
  
}
