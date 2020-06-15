module.exports = {
  siteMetadata: {
    title: `Matt's REAsume`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-svg`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`playfair display`, `source sans pro`, "oswald"],
        display: "swap",
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
  ],
};
