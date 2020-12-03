const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ivanamatijevic/dev/dev-blog/src/pages/index.js"))),
  "component---src-templates-blog-post-template-js": hot(preferDefault(require("/Users/ivanamatijevic/dev/dev-blog/src/templates/blogPostTemplate.js")))
}

