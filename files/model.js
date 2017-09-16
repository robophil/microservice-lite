// Define your collection (aka model)
module.exports = (Waterline, config) => Waterline.Collection.extend(Object.assign(config, {

  tableName: 'model_name',

  identity: 'model_name',

  attributes: {

  }
}))
