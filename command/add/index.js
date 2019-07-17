const getName = require('./name')
const getRemote = require('./remote')
const chalk = require('chalk')
const { yaml } = require('../../util')
module.exports = async () => {
    let { name } = await getName();
    let { remote } = await getRemote()
    await yaml.writeYaml(name, { name, remote })
    console.log()
    console.log(chalk.green('template added successfull!'))
    console.log()
}