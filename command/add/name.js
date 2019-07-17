const inquirer = require('inquirer')
const { yaml } = require('../../util')
module.exports = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'set template name:',
            name: 'name',
            validate(input) {
                if (yaml.isYamlExist(input)) {
                    return `the template ${input} has been exists`
                }
                return true
            }
        }
    ])
}