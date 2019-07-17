const path = require('path')
function getRootPath(){
    return path.resolve(__dirname, '../')
}
module.exports = function(){
    return require(path.join(getRootPath(), 'package.json')).version
}   