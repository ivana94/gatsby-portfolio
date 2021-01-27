const siteMetadata = {
    title: `Matijevic`,
    description: `my dev blog`,
};

module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        // {
        //     resolve: "gatsby-source-sanity",
        //     options: {
        //         projectId: "abc123",
        //         dataset: "blog",
        //     },
        // },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                ],
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: { path: `${__dirname}/posts`, name: `posts` },
        },
    ],
};
