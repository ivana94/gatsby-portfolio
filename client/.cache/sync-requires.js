

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-blog-js": (preferDefault(require("/Users/ivanamatijevic/dev/dev-blog/client/src/pages/blog.js"))),
  "component---src-pages-index-js": (preferDefault(require("/Users/ivanamatijevic/dev/dev-blog/client/src/pages/index.js"))),
  "component---src-pages-projects-js": (preferDefault(require("/Users/ivanamatijevic/dev/dev-blog/client/src/pages/projects.js"))),
  "component---src-templates-blog-post-template-js": (preferDefault(require("/Users/ivanamatijevic/dev/dev-blog/client/src/templates/blogPostTemplate.js")))
}

