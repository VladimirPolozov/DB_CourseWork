exports.getIndex = async (req, res) => {
  const models = require('../models');

  const counts = {};
  for (const key in models) {
    if (Object.prototype.hasOwnProperty.call(models, key)) {
      counts[key] = await models[key].countDocuments();
    }
  }

  const collections = Object.keys(counts).map(name => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    count: counts[name],
    path: name
  }));

  res.render('index', { collections });
};