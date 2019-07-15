const fs = require('mz/fs')
const path = require('path')
const chalk = require('chalk')

module.exports = tplName => {
    console.log(tplName)
  const configPath = path.join(__dirname, '../template.config.json')
  fs.readFile(configPath, 'utf-8')
    .then(data => {
      let templateConfig = JSON.parse(data)
      let template = templateConfig.template[tplName]
      if (template) {
        if (delete templateConfig.template[tplName]) {
          fs.writeFile(configPath, JSON.stringify(templateConfig), 'utf-8')
            .then(() => {
              console.log(chalk.green('配置删除成功!^_^'))
            })
            .catch(err => {
              console.log(chalk.red('\ndelete删除失败o(╥﹏╥)o'))
            })
        } else {
          console.log(chalk.red('\ndelete删除失败o(╥﹏╥)o'))
        }
      } else {
        console.log(chalk.red('\n找不到该模版配置'))
      }
    })
    .catch(err => {
      console.log(err)
    })
}
