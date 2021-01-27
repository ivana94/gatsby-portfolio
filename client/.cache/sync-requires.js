const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ivanamatijevic/dev/dev-blog/client/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/ivanamatijevic/dev/dev-blog/client/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/ivanamatijevic/dev/dev-blog/client/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ivanamatijevic/dev/dev-blog/client/src/pages/index.js"))),
  "component---src-templates-blog-post-template-js": hot(preferDefault(require("/Users/ivanamatijevic/dev/dev-blog/client/src/templates/blogPostTemplate.js")))
}

