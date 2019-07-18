const { yaml } = require('../../util')
const chalk = require('chalk');
const { table } = require('table')
const yamlTableList = require('./table')

module.exports = async () => {
    let yamlList = await yaml.yamlList();
    let tableList = await Promise.all(yamlTableList(yamlList))
    if (tableList.length) {
        console.log()
        console.log(chalk.yellow.underline.bold('template name list:'))
        console.log()
        console.log(chalk.green(table(tableList)))
    } else {
        console.log()
        console.log(chalk.green('empty template list'));
        console.log()
    }
}