const inquirer = require('inquirer')
const { yaml } = require('../../util')
module.exports = yamlList => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'select template:',
            name: 'name',
            choices: yamlList
        },
        {
            type: 'input',
            message: 'set a project name:',
            name: 'project',
            default: 'new_project',
            validate: (val) => {
                if (!val) {
                    return 'The project name cannot be empty';
                }
                if (val.indexOf('.') > -1) {
                    return 'Do not include special symbols, such as [ . / ]';
                }
                return true;
            }
        },
    ])
}