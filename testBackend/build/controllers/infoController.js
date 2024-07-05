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
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutFunctionController = exports.deleteFunctionController = exports.editFunctionController = exports.createFunctionController = exports.infoFunctionController = exports.validateFunctionController = void 0;
const querys_1 = require("../helpers/querys");
const validateFunctionController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = req.query;
        const response = yield (0, querys_1.validateUser)(params);
        return res.status(200).json({
            ok: true,
            msg: 'OK',
            data: response
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            ok: false,
            msg: 'Error al obtener informacion'
        });
    }
});
exports.validateFunctionController = validateFunctionController;
const infoFunctionController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = req.query;
        const response = yield (0, querys_1.infoUsers)(params.palabra);
        return res.status(200).json({
            ok: true,
            msg: 'OK',
            data: response
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            ok: false,
            msg: 'Error al obtener informacion'
        });
    }
});
exports.infoFunctionController = infoFunctionController;
const createFunctionController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const response = yield (0, querys_1.createUser)(body);
        return res.status(200).json({
            ok: true,
            msg: 'OK',
            data: response
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            ok: false,
            msg: 'Error al obtener informacion'
        });
    }
});
exports.createFunctionController = createFunctionController;
const editFunctionController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const response = yield (0, querys_1.editUser)(body);
        return res.status(200).json({
            ok: true,
            msg: 'OK',
            data: response
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            ok: false,
            msg: 'Error al obtener informacion'
        });
    }
});
exports.editFunctionController = editFunctionController;
const deleteFunctionController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const response = yield (0, querys_1.deleteUser)(body.id);
        return res.status(200).json({
            ok: true,
            msg: 'OK',
            data: response
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            ok: false,
            msg: 'Error al obtener informacion'
        });
    }
});
exports.deleteFunctionController = deleteFunctionController;
const logoutFunctionController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, querys_1.logoutUser)();
        return res.status(200).json({
            ok: true,
            msg: 'OK',
            data: response
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            ok: false,
            msg: 'Error al obtener informacion'
        });
    }
});
exports.logoutFunctionController = logoutFunctionController;
