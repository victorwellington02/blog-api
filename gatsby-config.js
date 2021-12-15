module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "blog-api",
  },
  plugins: ["gatsby-plugin-styled-components",
  `gatsby-plugin-react-helmet`,
  {
    resolve: "gatsby-source-graphql",
    options: {
      typeName: "alldata",
      fieldName: "alldata",
      url: "https://api-us-east-1.graphcms.com/v2/ckwgcptxh0jot01yxb55ia0ex/master",
    },
  },
],
};
