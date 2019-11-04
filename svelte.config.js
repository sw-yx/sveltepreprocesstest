// svelte.config.js
const sveltePreprocess = require('svelte-preprocess');
// const mdsvex = require('mdsvex')

module.exports = {
  preprocess: preprocess()
}

// module.exports = {
//   preprocess: [
//     sveltePreprocess({
//       // ...svelte-preprocess options
//       aliases: [
//         ['ts', 'typescript']
//       ]
//     }),
//     mdsvex()
//   ]
//   // ...other svelte options
// };