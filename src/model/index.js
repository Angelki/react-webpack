import p2n from "../utils/getFileNameFromPath";

const models = {},
  context = require.context("./", false, /\.js$/);
console.log(context.keys());
context
  .keys()
  .filter(item => item !== "./index.js")
  .forEach(itemName => (models[p2n(itemName)] = context(itemName)));
console.log(models);
export default models;
