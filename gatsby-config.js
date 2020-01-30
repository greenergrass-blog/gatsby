module.exports = {
  siteMetadata: {
    title: "Greener Grass",
    name: `Greener Grass`,
    siteUrl: `https://change-request.github.io`,
    description: `A blog about software engineering`,

    // important to set the main text that appears in the hero
    hero: {
      heading: `Thoughts about the other side of the fence`,
      maxWidth: 652
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/chngrqst`
      },
      {
        name: `github`,
        url: `https://github.com/change-request`
      }
    ]
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        sources: {
          local: true,
          contentful: false
        },
        authorsPage: true
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Greener Grass Blog`,
        short_name: `Greener Grass`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    }
  ]
};
