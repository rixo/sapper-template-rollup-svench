import path from 'path'
import hmr from 'rollup-plugin-hot'
import { svenchify } from 'svench/rollup'

const NOLLUP = !!process.env.NOLLUP

const config = svenchify(
  './rollup.config.js',

  config => ({
    ...config.client,
    input: '.svench/svench.js',
    output: {},
    preserveEntrySignatures: null,
    plugins: [
      ...config.client.plugins,
      !NOLLUP &&
        hmr({
          hot: true,
          host: '0.0.0.0',
          public: 'public',
          inMemory: true,
          // compatModuleHot: !hot, // for terser
        }),
    ],
  }),

  {
    dir: '.',
    override: {
      input: '.svench/svench.js',
      output: true,
    },
    svelte: {
      dev: true,
      hot: {
        optimist: true,
      },
      emitCss: false,
      hydratable: false,
      css: true,
    },
    serve: {},
  }
)

export default config.then(async x => {
  // console.log(await x)
  // process.exit()
  return config
})
