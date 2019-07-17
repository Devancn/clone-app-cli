const { yaml } = require('../../util')
const choose = require('./choose')
module.exports = async () => {
    let yamlList = await yaml.yamlList()
    if (yamlList.length) {
        let name = choose(yamlList)
    } else {
        console.log()
        console.log(chalk.red('no template available'));
        console.log()
    }
}