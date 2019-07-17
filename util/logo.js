const figlet = require('figlet')

module.exports = function () {
    figlet('clone-app', (err, data) => {
        if (err) return console.log(err)
        console.log(data)
    })
}