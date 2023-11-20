export interface UpdateEnvFileOptions {
  prefix?: string
  forceUpperCase?: boolean
  envFile?: string
}

export type EnvVars =
  | false
  | {
      [key: string]: string | number | boolean
    }

export default function updateEnvFile(envVars: EnvVars, options?: UpdateEnvFileOptions): any // Replace 'any' with the specific type if your plugin returns a specific type
