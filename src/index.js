const http = require('http');
const Router = require('./router');

class CoconutCore {
    constructor() {
        this.router = new Router();
    }

    get(path, handler) {
        this.router.register('GET', path, handler);
    }

    post(path, handler) {
        this.router.register('POST', path, handler);
    }

    listen(port, callback) {
        const server = http.createServer((req, res) => {
            this.router.handle(req, res);
        });
        server.listen(port, callback);
    }
}

module.exports = CoconutCore;
