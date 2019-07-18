const { yaml, git: Git } = require('../../util')
const choose = require('./choose')
const chalk = require('chalk')
module.exports = async () => {
    let yamlList = await yaml.yamlList()
    if (yamlList.length) {
        let { templateName, projectName } = await choose(yamlList);
        const templateInfo = await yaml.readYaml(templateName)
        const git = new Git({
            remote: templateInfo.remote,
            localPath: `${process.cwd()}/${projectName}`,
        })
        console.log()
        console.log(chalk.yellow.underline.bold(
            `begin to create new project from template : ${templateName}`
        ))
        let result = await git.clone()
        console.log(chalk.blue(result))
    } else {
        console.log()
        console.log(chalk.red('no template available'));
        console.log()
    }
}