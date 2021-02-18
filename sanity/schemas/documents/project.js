export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        },
        {
            name: "mainImage",
            title: "Main image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "excerpt",
            type: "excerptPortableText",
            title: "Excerpt",
            description:
                "This ends up on summary pages, on Google, when people share your post in social media.",
        },
        {
            name: "body",
            title: "Body",
            type: "bodyPortableText",
        },
    ],
};
