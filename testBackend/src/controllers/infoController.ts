import { userInterface } from "../interfaces/apiInterface";
import { createUser, deleteUser, editUser, infoUsers, logoutUser, validateUser } from "../helpers/querys";

export const validateFunctionController = async (req: any, res: any) => {
    try {
        const params: userInterface = req.query;
        const response = await validateUser(params);
        return res.status(200).json({
            ok: true,
            msg: 'OK',
            data: response
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            ok: false,
            msg: 'Error al obtener informacion'
        });
    }
};

export const infoFunctionController = async (req: any, res: any) => {
    try {
        const params: {palabra: string} = req.query;
        const response = await infoUsers(params.palabra);
        return res.status(200).json({
            ok: true,
            msg: 'OK',
            data: response
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            ok: false,
            msg: 'Error al obtener informacion'
        });
    }
};

export const createFunctionController = async (req: any, res: any) => { 
    try {
        const body = req.body;
        const response = await createUser(body);
        return res.status(200).json({
            ok: true,
            msg: 'OK',
            data: response
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            ok: false,
            msg: 'Error al obtener informacion'
        });
    }
};

export const editFunctionController = async (req: any, res: any) => {
    try {
        const body = req.body;
        const response = await editUser(body);
        return res.status(200).json({
            ok: true,
            msg: 'OK',
            data: response
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            ok: false,
            msg: 'Error al obtener informacion'
        });
    }
};

export const deleteFunctionController = async (req: any, res: any) => {
    try {
        const body = req.body;
        const response = await deleteUser(body.id);
        return res.status(200).json({
            ok: true,
            msg: 'OK',
            data: response
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            ok: false,
            msg: 'Error al obtener informacion'
        });
    }
};

export const logoutFunctionController = async (req: any, res: any) => {
    try {
        const response = await logoutUser();
        return res.status(200).json({
            ok: true,
            msg: 'OK',
            data: response
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            ok: false,
            msg: 'Error al obtener informacion'
        });
    }
};