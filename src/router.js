const { parse } = require('url');

class Router {
    constructor() {
        this.routes = {
            GET: {},
            POST: {}
        };
    }

    register(method, path, handler) {
        this.routes[method][path] = handler;
    }

    async handle(req, res) {
        const parsedUrl = parse(req.url, true);
        const method = req.method;
        const handler = this.routes[method][parsedUrl.pathname];

        if (!handler) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            return;
        }

        if (method === 'POST') {
            let body = '';
            req.on('data', chunk => {
                body += chunk;
            });
            req.on('end', () => {
                req.body = body ? JSON.parse(body) : {};
                handler(req, this.createResponse(res));
            });
        } else {
            handler(req, this.createResponse(res));
        }
    }

    createResponse(res) {
        return {
            send: (data) => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                if (typeof data === 'object') {
                    res.end(JSON.stringify(data));
                } else {
                    res.end(data);
                }
            }
        };
    }
}

module.exports = Router;
