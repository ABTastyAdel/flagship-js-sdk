const merge = require('webpack-merge');
const baseConfig = require('./config.base.js');

module.exports = merge(baseConfig, {
  target: 'web', // react & react native
  output: {
    filename: 'index.browser.js',
    libraryTarget: 'umd',
  },
  // plugins: [new DtsBundlePlugin()],
});
// function DtsBundlePlugin() {}
// DtsBundlePlugin.prototype.apply = function (compiler) {
//   compiler.hooks.done.tap('dts-bundle', (context, entry) => {
//     const dts = require('dts-bundle');
//     dts.bundle({
//       name: 'flagshipTest',
//       main: 'src/**/*.d.ts',
//       out: '../dist/flagship.d.ts',
//       removeSource: false,
//       outputAsModuleFolder: true,
//     });
//     DtsClean();
//   });
// };
// function DtsClean() {
//   var fs = require('fs');
//   var data = fs.readFileSync('dist/flagship.d.ts', 'utf-8');
//   let newValue = data;
//   newValue =
//     newValue.slice(
//       0,
//       newValue.indexOf('import {', newValue.indexOf('import {') + 1)
//     ) +
//     newValue.slice(
//       newValue.indexOf(`} from './class/flagshipVisitor/flagshipVisitor.d';`),
//       newValue.length - 1
//     );
//   newValue = newValue.replace(
//     `} from './class/flagshipVisitor/flagshipVisitor.d';`,
//     ''
//   );
//   newValue = newValue.replace(`\n\n\n\n`, '\n');
//   newValue = newValue.replace(`\n\n\n`, '\n');
//   //   newValue =
//   //     `import flagship from './index';
//   // ` +
//   //     newValue +
//   //     `
//   // export default flagship;
//   //   `;
//   fs.writeFileSync('dist/flagship.d.ts', newValue, 'utf-8');
// }