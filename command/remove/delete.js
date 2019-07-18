const { yaml } = require('../../util')
module.exports = yamlList => {
    yamlList.map(async item => {
        return yaml.removeYaml(item)
    })
}