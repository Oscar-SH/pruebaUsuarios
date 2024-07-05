"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('colors');
require('dotenv').config();
const Server_1 = __importDefault(require("./models/Server"));
const server = new Server_1.default();
BigInt.prototype.toJSON = function () {
    return parseInt(this.toString());
};
server.execute();
