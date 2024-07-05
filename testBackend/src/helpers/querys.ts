import fs from 'fs';
import { userInterface } from '../interfaces/apiInterface';
import moment from 'moment';

const filePath = './src/helpers/data.json';
let jsonData = fs.readFileSync(filePath, 'utf-8');
let dataParse: userInterface[] = JSON.parse(jsonData);

export const validateUser = ({ username = '', password = '' }: userInterface) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = false;
            let findUser = dataParse.find((item) => item.username === username);
            if (findUser) {
                response = password === findUser.password ? true : false;
                let restantes = dataParse.filter((item) => item.username !== username);
                findUser.status = 'ACTIVO';
                findUser.startDate = moment().format('YYYY-MM-DD HH:mm:ss');
                restantes.push(findUser);
                let newWrite = JSON.stringify(restantes, null, 2);
                fs.writeFileSync(filePath, newWrite, 'utf-8');
            }
            resolve(response);
        }
        catch (err) {
            console.log(err);
            reject([]);
        }
    });
};

export const infoUsers = (palabra: string = '') => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = [];
            if (palabra) {
                const filters = dataParse.filter((item) => item.type === palabra);
                response = filters;
            }else{
                response = dataParse;
            }
            resolve(response);
        }
        catch (err) {
            console.log(err);
            reject([]);
        }
    });
};

export const createUser = (data: userInterface) => {
    return new Promise(async (resolve, reject) => {
        try {
            let newData: userInterface = {
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
            fs.writeFileSync(filePath, newWrite, 'utf-8');
            resolve(data);
        }
        catch (err) {
            console.log(err);
            reject([]);
        }
    });
};

export const editUser = (data: userInterface) => {
    return new Promise(async (resolve, reject) => {
        try {
            let restantes = dataParse.filter((item) => item.id !== data.id);
            let newData: userInterface = {
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
            fs.writeFileSync(filePath, newWrite, 'utf-8');
            resolve(data);
        }
        catch (err) {
            console.log(err);
            reject([]);
        }
    });
};

export const deleteUser = (id: number) => {
    return new Promise(async (resolve, reject) => {
        try {
            const restantes = dataParse.filter((item) => item.id !== id);
            let newWrite = JSON.stringify(restantes, null, 2);
            fs.writeFileSync(filePath, newWrite, 'utf-8');
            resolve(restantes);
        }
        catch (err) {
            console.log(err);
            reject([]);
        }
    });
};

export const logoutUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = false;
            let findUser = dataParse.find((item) => item.status === 'ACTIVO');
            if (findUser) {
                let restantes = dataParse.filter((item) => item.id !== findUser.id);
                findUser.status = 'INACTIVO';
                findUser.endDate = moment().format('YYYY-MM-DD HH:mm:ss');
                restantes.push(findUser);
                let newWrite = JSON.stringify(restantes, null, 2);
                fs.writeFileSync(filePath, newWrite, 'utf-8');
            }
            resolve(response);
        }
        catch (err) {
            console.log(err);
            reject([]);
        }
    });
};