import models from "../model";
console.log(models);
export default _ => {
  const filteredModels = {};

  Object.keys(models).forEach(
    namespace => (filteredModels[namespace] = models[namespace].default)
  );
  return filteredModels;
};
