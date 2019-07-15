const co = require('co')
const prompt = require('co-prompt')
const chalk = require('chalk')
const tplConfig = require('../template.config')
const fs = require('mz/fs')
const path = require('path')
module.exports = () => {
    co(function *(){
        let tplName = yield prompt('模版名称：');
        let gitUrl = yield prompt('带账号和密码的git https地址:');
        const template = tplConfig.template;
        if(!template[tplName]) {
            template[tplName] = {
                url: gitUrl
            }
        } else {
            console.log(chalk.red('该模版配置已经存在!'))
            process.exit()
        }
        fs.writeFile(path.join(__dirname, '../template.config.json'), JSON.stringify(tplConfig),'utf-8').then(
            console.log(chalk.green('模版添加成功'))
        ).catch(err => {
            console.log(err)
        }).finally(() => {
            process.exit()
        })
    })
}