const { yaml } = require('../../util')
const chosse = require('./choose')
const deleteList = require('./delete')
const chalk = require('chalk')
module.exports = async () => {
    let yamlList = await yaml.yamlList()
    if (yamlList.length) {
        try {
            let { list = [] } = await chosse(yamlList);
            await deleteList(list)
            console.log()
            console.log(chalk.green('template deleted successfully!'))
            console.log()
        } catch (err) {
            console.log(err)
        }
    } else {
        console.log()
        console.log(chalk.red('template list is empty'));
        console.log()
    }

}