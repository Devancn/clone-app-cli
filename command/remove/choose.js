const inquirer = require('inquirer')
module.exports = yamlList => {
    return inquirer.prompt({
        type: 'checkbox',
        message: 'select template:',
        name: 'list',
        choices: yamlList,
        validate: val => {
            if (!val.length) return 'please choose to delete the template name'
            return true;
        }
    })
}