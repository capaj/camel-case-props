const _ = require('lodash')

function camelCaseProps (object) {
  const camelCaseObject = {}
  _.forEach(
    object,
    function (value, key) {
      if (_.isObject(value) || Array.isArray(value)) {
        value = camelCaseProps(value) // recursively update keys of any values that are also objects
      }
      camelCaseObject[_.camelCase(key)] = value
    }
  )
  return camelCaseObject
}

module.exports = camelCaseProps
