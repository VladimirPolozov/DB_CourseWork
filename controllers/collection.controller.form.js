function getModelFields(schema) {
  const obj = {};
  for (const key in schema.obj) {
    if (key === '_id') continue;
    obj[key] = { key: key, label: key };
  }
  return Object.values(obj);
}

exports.getNewForm = async (req, res) => {
  const collectionName = req.params.name;
  const models = require('../models');
  const Model = models[collectionName];

  if (!Model) return res.status(404).send('Коллекция не найдена');

  const fields = getModelFields(Model.schema);

  res.render('new', {
    collectionName,
    fields
  });
};

exports.getEditForm = async (req, res) => {
  const collectionName = req.params.name;
  const models = require('../models');
  const Model = models[collectionName];
  const id = req.params.id;

  if (!Model) return res.status(404).send('Коллекция не найдена');

  try {
    const item = await Model.findById(id).lean();
    if (!item) return res.status(404).send('Документ не найден');

    const fields = getModelFields(Model.schema);

    res.render('edit', {
      collectionName,
      fields,
      item
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка при загрузке документа');
  }
};