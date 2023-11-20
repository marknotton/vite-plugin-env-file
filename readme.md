
# Vite Plugin Env File

This Vite plugin allows you to dynamically update your `.env` file during the build process. It's particularly useful for injecting environment variables that depend on the build or development server settings.

## Installation

To install the plugin, you can use either npm or yarn. Run one of the following commands in your project directory:

`npm install vite-plugin-env-file`  or `yarn add vite-plugin-env-file`

## Usage

Add it to `vite.config.js`

```js
import viteEnvFile from  'vite-plugin-env-file'

export default {
  plugins: [
     viteEnvFile({
        dev_server_port: 3008,
        dev_server_public_url: 'https://www.vite.com',
        dev_server_enabled: true
      })
  ],
}
```
This would render a `vite.env` in the project root with something like this:

```
VITE_DEV_SERVER_PORT="3008"
VITE_DEV_SERVER_PUBLIC_URL="https://www.vite.com"
VITE_DEV_SERVER_ENABLED="true"
```
When the `buildEnd` method is called, these variables and `vite.env` file are deleted.  

## Options

The plugin function takes two arguments: `envVars` and `options`.

### envVars

-   Type: `object` or `falsy`
-   Description: An object containing the environment variables to be set. If falsy, the plugin does nothing.
-   Example: `{ 'custom_var': 'value' }`

### options

-   **Type**: `object` (optional)
-   **Description**: Configuration options for the plugin.
-   **Properties**:
    -   **`prefix`**: The prefix to be added to all environment variable names.
        -   **Type**: `string`
        -   **Default**: `'VITE_'`
    -   **`forceUpperCase`**: Whether to convert all environment variable names to uppercase.
        -   **Type**: `boolean`
        -   **Default**: `true`
    -   **`envFile`**: The name of the environment file to be updated.
        -   **Type**: `string`
        -   **Default**: `'vite.env'`