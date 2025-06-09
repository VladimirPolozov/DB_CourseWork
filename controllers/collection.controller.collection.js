const models = require('../models');

function getModelFields(schema) {
  const obj = {};
  for (const key in schema.obj) {
    if (key === '_id') continue;

    const pathType = schema.paths[key].instance;
    let type = 'string';

    if (pathType === 'Array') {
      type = 'arrayOfObjects';
    } else if (pathType === 'Embedded') {
      type = 'arrayOfObjects';
    }

    obj[key] = { key: key, label: key, type: type };
  }
  return Object.values(obj);
}

exports.getCollection = async (req, res) => {
  const collectionName = req.params.name;
  const Model = models[collectionName];

  if (!Model) return res.status(404).send('Коллекция не найдена');

  try {
    const items = await Model.find().lean();
    const fields = getModelFields(Model.schema);

    res.render('collection', {
      collectionName,
      collectionPath: collectionName,
      items,
      fields
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка загрузки данных');
  }
};