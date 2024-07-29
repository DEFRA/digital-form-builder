const path = require('path')
const Model = require('./model')
const { ordnanceSurveyKey } = require('../../config')
const { getState, mergeState } = require('../../db')
const dataFilePath = path.join(__dirname, '../../govsite.cph.json')
// const playgroundModel = require('../../govsite.cph.json')
const data = require(dataFilePath)
const relativeTo = __dirname
const defaultPageController = './pages'

const model = new Model(data, {
  getState,
  mergeState,
  relativeTo,
  defaultPageController
})

// module.exports = [
//   {
//     plugin: require('digital-form-builder-engine/playground'),
//     options: {
//       getState,
//       mergeState,
//       playgroundModel,
//       ordnanceSurveyKey,
//       relativeTo
//     }
//   },
//   {
//     plugin: require('digital-form-builder-designer/playground'),
//     options: { path: dataFilePath, playgroundModel, relativeTo }
//   }
// ]

module.exports = [
  {
    plugin: require('digital-form-builder-engine'),
    options: {
      getState,
      mergeState,
      model,
      ordnanceSurveyKey,
      relativeTo
    }
  },
  {
    plugin: require('digital-form-builder-designer'),
    options: { path: dataFilePath, model, relativeTo }
  }
]
