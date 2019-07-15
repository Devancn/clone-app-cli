const exec = require('mz/child_process').exec;
const co = require('co')
const prompt = require('co-prompt')
const templateConfig = require('../template.config')
const chalk = require('chalk')

module.exports = () => {
    co(function *(){
        let tplName = yield prompt('请输入初始化的模板名称:')
        let projectName = yield prompt('请输入项目名称:')
        let gitUrl;
        if(!templateConfig.template[tplName]) {
            console.log(chalk.red(`\n 输入的模版名称${chalk.blure(tplName)}不存在！`))
            process.exit()
        }
        gitUrl = templateConfig.template[tplName].url
        let command = `git clone --bare ${gitUrl} ${projectName}`
        console.log(chalk.green('\n 项目生成中...'))
        exec(command).then(stout => {
            console.log(stout)
        }).catch(err => {
            console.log(err);
            
        }).finally(() => {
            process.exit()
        })
    })
}
