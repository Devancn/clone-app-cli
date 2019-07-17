const { yaml } = require('../../util')
const chalk = require('chalk');
const { table } = require('table')
module.exports = async () => {
    let yamlList = await yaml.yamlList().map((item, index) => ([index, item]))
    if (yamlList.length) {
        console.log()
        console.log(chalk.yellow.underline.bold('template name list:'))
        console.log()
        console.log(chalk.green(table(yamlList)))
    } else {
        console.log()
        console.log(chalk.green('empty template list'));
        console.log()
    }

}