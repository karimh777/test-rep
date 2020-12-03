const pkg = require('../package.json');
const year = new Date().getFullYear();

const banner = `/*!
 * TailwindVue ${pkg.version}
 *
 * @link ${pkg.homepage}
 * @source https://github.com/softveld/tailwind-vue
 * @copyright (c) ${year} TailwindVue
 * @license ${pkg.license}
 * https://github.com/softveld/tailwind-vue/blob/master/LICENSE
 */
`;

module.exports = banner;
