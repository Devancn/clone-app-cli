const simpleGit = require('simple-git/promise')
module.exports = class {
    constructor(config = { remote: '', localPath: '', branch: 'master' }) {
        this.config = config
    }
    async clone() {
        return await simpleGit().silent(true).clone(this.config.remote, this.config.localPath, ['--bare'])
    }
}