require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `AungHtetPaing Portfolio 2025`,
    siteUrl: `https://aunghtetpaing.netlify.app`
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": process.env.SANITY_PROJECT_ID,
      "dataset": process.env.SANITY_DATASET,
      "token": process.env.SANITY_TOKEN,
      "watchMode": true,
      "overlayDrafts": true
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-postcss", {
    resolve: 'gatsby-plugin-google-gtag',
    options: {
      trackingIds: [
        'G-FV09K3D603',
      ],
    },
  }, "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/favicon-32x32.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-transformer-remark", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};