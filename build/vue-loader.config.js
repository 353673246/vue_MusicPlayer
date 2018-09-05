const docLoader = require.resolve("./doc-loader");
module.exports = isDev => {
  return {
    extractCSS: !isDev,
    //模板中的空格 默认true 会渲染
    preserveWhitespace: false,
    // cssModules: {
    //   localIdentName: isDev
    //     ? "[path]-[name]-[hash:base64:5]"
    //     : "[hash:base64:5]",
    //   camelCase: true
    // },
    loaders: {
      docs: docLoader
    },
    preLoaders: {},
    postLoaders: {}
    // hotReload: false
  };
};
