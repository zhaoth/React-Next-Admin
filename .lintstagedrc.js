const path = require('path');


//如果你想使用 next lint 和 lint-staged 在暂存的 git 文件上运行 linter，
// 则必须将以下内容添加到项目根目录中的 .lintstagedrc.js 文件中，以便指定 --file 标志的使用
const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};
