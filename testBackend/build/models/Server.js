"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const routesapi_1 = __importDefault(require("../routes/routesapi"));
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = parseInt(`${process.env.PORT_NODE_APP}`);
        this.server = http_1.default.createServer(this.app);
    }
    middlewares() {
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)({ origin: '*' }));
        this.app.use('/api', routesapi_1.default);
    }
    execute() {
        this.middlewares();
        this.server.listen(this.port, () => { console.log(`Server Settings ready in http://${process.env.IP_NODE_APP}:${this.port}`.rainbow); });
    }
}
exports.default = Server;
