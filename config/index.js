
const path = require('path');
const os = require('os')
module.exports = {
    YAML_PATH: path.join(os.homedir(), '.clone-app'),
    REMOTE_REG: /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#].git)/,
    NAME_REG: /^\.(.+)\.yaml$/
}

