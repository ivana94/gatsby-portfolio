module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[{"resolve":"/Users/ivanamatijevic/dev/dev-blog/client/node_modules/gatsby-remark-images","id":"4a359a36-fef3-5c49-a0f9-45c24a5fd434","name":"gatsby-remark-images","version":"3.6.0","pluginOptions":{"plugins":[],"maxWidth":590},"nodeAPIs":["pluginOptionsSchema"],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]}],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"maxWidth":590}}]},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":590},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
