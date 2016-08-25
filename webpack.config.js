"use strict";

var webpack = require("webpack");
var path = require("path");

var mainEntryPoint = path.resolve(__dirname, "js", "urbanexplorer.js");
var distDirectory = path.resolve(__dirname, "dist");
var publicDirectory = path.resolve(__dirname, "public");

var config = {
  entry: {
    "urbanexplorer": mainEntryPoint
  },

  output: {
    path: distDirectory,
    filename: "[name].js"
  },

  devServer: {
    contentBase: publicDirectory
  },
  devtool: "source-map"
};

module.exports = config;
