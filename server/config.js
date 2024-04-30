const joi = require('joi')

// Define config schema
const schema = joi.object().keys({
  port: joi.number().default(3008),
  env: joi.string().valid('development', 'test', 'production').default('development'),
  ordnanceSurveyKey: joi.string().optional(),
  browserRefreshUrl: joi.string().optional()
})

// Build config
const config = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  ordnanceSurveyKey: process.env.ORDNANCE_SURVEY_KEY,
  browserRefreshUrl: process.env.BROWSER_REFRESH_URL
}

// Validate config
const result = schema.validate(config, {
  abortEarly: false
})

// Throw if config is invalid
if (result.error) {
  throw new Error(`The server config is invalid. ${result.error.message}`)
}

// Use the joi validated value
const value = result.value

// Add some helper props
value.isDev = value.env === 'development'
value.isProd = value.env === 'production'

module.exports = value
