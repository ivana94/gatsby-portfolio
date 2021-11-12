const { createFilePath } = require("gatsby-source-filesystem");
const path = require(`path`);

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const blogPostTemplate = path.resolve("src/templates/blogPostTemplate.js");

    // 1. query the data - figure out which pages need to be created
    return graphql(`
        {
            allSanityPost(sort: { fields: [publishedAt], order: DESC }) {
                nodes {
                    id
                    title
                    publishedAt(fromNow: true)
                    slug {
                        current
                    }
                }
            }
        }
    `).then((result) => {
        if (result.errors) {
            throw result.errors;
        }

        const posts = result.data.allSanityPost.nodes;

        // 2. create the pages using
        posts.forEach((post, idx) => {
            createPage({
                // Path for this page — required
                path: `blog/${post.slug.current}`,
                component: blogPostTemplate,
                // optional -- context is for passing props to page
                context: {
                    slug: post.slug.current,
                    previous: idx === posts.length - 1 ? null : posts[idx + 1],
                    next: idx === 0 ? null : posts[idx - 1],
                },
            });
        });
    });
};

// exports.createProjectPages = ({ actions, graphql }) => {
//     const { createPage } = actions;
//     const projectPostTemplate = path.resolve(
//         "src/templates/projectPostTemplate.js"
//     );

//     // 1. query the data - figure out which pages need to be created
//     return graphql(`
//         {
//             allSanityProject(sort: { fields: [publishedAt], order: DESC }) {
//                 nodes {
//                     body {
//                         children {
//                             marks
//                             text
//                             _key
//                             _type
//                         }
//                     }
//                     slug {
//                         current
//                     }
//                     title
//                 }
//             }
//         }
//     `).then((result) => {
//         if (result.errors) {
//             throw result.errors;
//         }

//         const posts = result.data.allSanityProject.nodes;

//         console.log("posts --- ", posts);

//         // 2. create the pages using
//         posts.forEach((post, idx) => {
//             createPage({
//                 // Path for this page — required
//                 path: `blog/${post.slug.current}`,
//                 component: projectPostTemplate,
//                 // optional -- context is for passing props to page
//                 context: {
//                     slug: post.slug.current,
//                     previous: idx === posts.length - 1 ? null : posts[idx + 1],
//                     next: idx === 0 ? null : posts[idx - 1],
//                 },
//             });
//         });
//     });
// };

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    // if runs if the node that was created/updated is mdx
    if (node.internal.type === `Mdx`) {
        // the following returns our slug
        // it traverses the node to find its "File" parent
        // "File" contains info about the actual .mdx file
        const slug = createFilePath({ node, getNode });
        createNodeField({
            node,
            // create a node called "slug" - ie every .mdx gets a "slug" node
            name: `slug`,
            // and the value of the slug node is "slug" var
            value: slug,
        });
    }
};
