const { yaml } = require('../../util')
module.exports = (yamlList = []) => {
    return yamlList.map(async (item, index) => {
        let arr = [index, item];
        let { remote } = await yaml.readYaml(item);
        arr.push(remote);
        return arr;
    })
}