import Env from '@marknotton/env'

export default function updateEnvFile(envVars = {}, options = {}) {
  // Use default values for options if not provided
  const { prefix = 'VITE_', forceUpperCase = true, envFile = 'vite.env' } = options || {}

  const envFileModule = new Env(envFile)

  return {
    name: 'vite-plugin-env-file',
    async buildStart() {
      // Do nothing if envVars is falsy
      if (!envVars) return

      // Convert keys to upper case if forceUpperCase is true
      if (forceUpperCase) {
        envVars = Object.fromEntries(Object.entries(envVars).map(([key, value]) => [key.toUpperCase(), value]))
      }

      // Set environment variables with optional prefix
      Object.keys(envVars).forEach((key) => {
        const envKey = prefix ? `${prefix}${key}` : key
        envFileModule.set(envKey, envVars[key])
      })
    },
    async buildEnd() {
      // Do nothing if envVars is falsy
      if (!envVars) return

      // Delete the set environment variables
      Object.keys(envVars).forEach((key) => {
        const envKey = prefix ? `${prefix}${key}` : key
        envFileModule.delete(envKey)
      })
    }
  }
}
