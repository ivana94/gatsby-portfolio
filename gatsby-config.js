const siteMetadata = {
    title: `Matijevic Dev Blog`,
    description: `my dev blog`,
};

module.exports = {
    siteMetadata,
    plugins: [
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: { path: `${__dirname}/posts`, name: `posts` },
        },
    ],
};
