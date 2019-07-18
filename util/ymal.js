const config = require('../config')
const fsExtra = require('fs-extra')
const read = require('read-yaml')
const write = require('write-yaml')

function yamlPath(name) {
    return `${config.YAML_PATH}/.${name}.yaml`
}
function isYamlExist(name) {
    return fsExtra.pathExistsSync(yamlPath(name))
}

function yamlList() {
    const resultList = []
    const list = fsExtra.readdirSync(config.YAML_PATH);
    for (let file of list) {
        let result = file.match(config.NAME_REG);
        if (result) {
            resultList.push(result[1])
        }
    }
    return resultList;
}

function readYaml(name) {
    return read.sync(yamlPath(name))
}

function writeYaml(name, content) {
    return write.sync(yamlPath(name), content)
}

function removeYaml(name) {
    return fsExtra.unlinkSync(yamlPath(name))
}

module.exports = {
    yamlPath,
    isYamlExist,
    yamlList,
    readYaml,
    writeYaml,
    removeYaml
}