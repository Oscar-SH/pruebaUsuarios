"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutUser = exports.deleteUser = exports.editUser = exports.createUser = exports.infoUsers = exports.validateUser = void 0;
const fs_1 = __importDefault(require("fs"));
const moment_1 = __importDefault(require("moment"));
const filePath = './src/helpers/data.json';
let jsonData = fs_1.default.readFileSync(filePath, 'utf-8');
let dataParse = JSON.parse(jsonData);
const validateUser = ({ username = '', password = '' }) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let response = false;
            let findUser = dataParse.find((item) => item.username === username);
            if (findUser) {
                response = password === findUser.password ? true : false;
                let restantes = dataParse.filter((item) => item.username !== username);
                findUser.status = 'ACTIVO';
                findUser.startDate = (0, moment_1.default)().format('YYYY-MM-DD HH:mm:ss');
                restantes.push(findUser);
                let newWrite = JSON.stringify(restantes, null, 2);
                fs_1.default.writeFileSync(filePath, newWrite, 'utf-8');
            }
            resolve(response);
        }
        catch (err) {
            console.log(err);
            reject([]);
        }
    }));
};
exports.validateUser = validateUser;
const infoUsers = (palabra = '') => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let response = [];
            if (palabra) {
                const filters = dataParse.filter((item) => item.type === palabra);
                response = filters;
            }
            else {
                response = dataParse;
            }
            resolve(response);
        }
        catch (err) {
            console.log(err);
            reject([]);
        }
    }));
};
exports.infoUsers = infoUsers;
const createUser = (data) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let newData = {
                id: data.id,
                key: data.key,
                type: data.type,
                name: data.name,
                username: data.username,
                firstname: data.firstname,
                lastname: data.lastname,
                password: data.password,
                startDate: data.startDate,
                endDate: data.endDate,
                status: 'INACTIVO'
            };
            dataParse.push(newData);
            let newWrite = JSON.stringify(dataParse, null, 2);
            fs_1.default.writeFileSync(filePath, newWrite, 'utf-8');
            resolve(data);
        }
        catch (err) {
            console.log(err);
            reject([]);
        }
    }));
};
exports.createUser = createUser;
const editUser = (data) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let restantes = dataParse.filter((item) => item.id !== data.id);
            let newData = {
                id: data.id,
                key: data.key,
                type: data.type,
                name: data.name,
                username: data.username,
                firstname: data.firstname,
                lastname: data.lastname,
                password: data.password,
                startDate: data.startDate,
                endDate: data.endDate,
                status: data.status
            };
            restantes.push(newData);
            let newWrite = JSON.stringify(restantes, null, 2);
            fs_1.default.writeFileSync(filePath, newWrite, 'utf-8');
            resolve(data);
        }
        catch (err) {
            console.log(err);
            reject([]);
        }
    }));
};
exports.editUser = editUser;
const deleteUser = (id) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const restantes = dataParse.filter((item) => item.id !== id);
            let newWrite = JSON.stringify(restantes, null, 2);
            fs_1.default.writeFileSync(filePath, newWrite, 'utf-8');
            resolve(restantes);
        }
        catch (err) {
            console.log(err);
            reject([]);
        }
    }));
};
exports.deleteUser = deleteUser;
const logoutUser = () => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let response = false;
            let findUser = dataParse.find((item) => item.status === 'ACTIVO');
            if (findUser) {
                let restantes = dataParse.filter((item) => item.id !== findUser.id);
                findUser.status = 'INACTIVO';
                findUser.endDate = (0, moment_1.default)().format('YYYY-MM-DD HH:mm:ss');
                restantes.push(findUser);
                let newWrite = JSON.stringify(restantes, null, 2);
                fs_1.default.writeFileSync(filePath, newWrite, 'utf-8');
            }
            resolve(response);
        }
        catch (err) {
            console.log(err);
            reject([]);
        }
    }));
};
exports.logoutUser = logoutUser;
