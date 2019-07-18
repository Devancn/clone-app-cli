const inquirer = require('inquirer')
module.exports = yamlList => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'select template:',
            name: 'templateName',
            choices: yamlList
        },
        {
            type: 'input',
            message: 'set a project name:',
            name: 'projectName',
            validate: (val) => {
                if (!val) {
                    return 'the project name cannot be empty';
                }
                return true;
            }
        },
    ])
}