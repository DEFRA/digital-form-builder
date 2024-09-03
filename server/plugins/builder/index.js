const { ordnanceSurveyKey } = require('../../config')
const { getState, mergeState } = require('../../db')
const relativeTo = __dirname

// OPT 1
// =====
const playgroundModel = require('../../govsite.fish.groups.json')

module.exports = [
  {
    plugin: require('digital-form-builder-engine/playground'),
    options: {
      getState,
      mergeState,
      playgroundModel,
      ordnanceSurveyKey,
      relativeTo
    }
  },
  {
    plugin: require('digital-form-builder-designer/playground'),
    options: { playgroundModel, relativeTo }
  }
]

// OPT 2
// =====
// const path = require('path')
// const Model = require('./model')
// const dataFilePath = path.join(__dirname, '../../govsite.fish.groups.json')
// const data = require(dataFilePath)
// const model = new Model(data, {
//   getState,
//   mergeState,
//   relativeTo,
//   defaultPageController: './pages'
// })

// module.exports = [
//   {
//     plugin: require('digital-form-builder-engine'),
//     options: {
//       getState,
//       mergeState,
//       model,
//       ordnanceSurveyKey,
//       relativeTo
//     }
//   },
//   {
//     plugin: require('digital-form-builder-designer'),
//     options: { path: dataFilePath, model, relativeTo }
//   }
// ]
