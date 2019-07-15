const path = require('path')

function getRootPath(){
    return path.resolve(__dirname, '../')
}
function getPkgVersion(){
    return require(path.join(getRootPath(), 'package.json')).version
}

exports.getPkgVersion = getPkgVersion;

