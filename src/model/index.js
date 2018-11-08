import p2n from "../utils/getFileNameFromPath";

const models = {},
  context = require.context("./", false, /\.js$/);
context
  .keys()
  .filter(item => item !== "./index.js")
  .forEach(itemName => (models[p2n(itemName)] = context(itemName)));

export default models;
