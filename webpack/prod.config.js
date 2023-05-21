const baseConfig = require("./common.config.js");
const { merge } = require("webpack-merge");

const config = merge(baseConfig, {
  mode: "production",
});
module.exports = config;
