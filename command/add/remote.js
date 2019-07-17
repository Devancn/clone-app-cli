const inquirer = require('inquirer')
const config = require('../../config')
module.exports = () => {
    return inquirer.prompt({
        type: 'input',
        message: 'set git remote:',
        name: 'remote',
        validate(input) {
            if (!config.REMOTE_REG.test(input)) {
                return 'the remote is incorrect'
            }
            return true;
        }
    })
}