require("dotenv").config({
    path: `.env`,
});

module.exports = {
    siteMetadata: {
        title: "Ivana Matijevic - Software Engineer",
        titleTemplate: "Ivana Matijevic - Software Engineer",
        description:
            "Software Engineer with 4 years experience building websites, teaching, and mentoring",
        url: "https://ivanamatijevic.dev/",
        image: "images/me.jpeg",
    },
    plugins: [
        "gatsby-plugin-styled-components",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        "gatsby-plugin-postcss",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-sanity",
            options: {
                projectId: "hb88ttzp",
                dataset: "production",
                watchMode: true,
                token: process.env.SANITY_TOKEN,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: { path: `${__dirname}/images`, name: "images" },
        },
    ],
};
