export default {
    name: "about",
    title: "About",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "body",
            title: "Body",
            type: "bodyPortableText",
        },
    ],
    preview: {
        select: {
            title: "name",
            media: "image",
        },
    },
};
