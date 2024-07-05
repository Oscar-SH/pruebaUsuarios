import axios from 'axios';

export const validateUserService = (userData) => {
    return new Promise((resolve, reject) => {
        const URI = `${process.env.REACT_APP_URL_API_EXPRESS}/api/validate`;
        axios({
            url: URI,
            method: 'GET',
            params: {username: userData.username, password: userData.password}
        }).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        })
    });
};

export const infoUserService = (palabra) => {
    return new Promise((resolve, reject) => {
        const URI = `${process.env.REACT_APP_URL_API_EXPRESS}/api/info`;
        axios({
            url: URI,
            method: 'GET',
            params: {palabra: palabra}
        }).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        })
    });
};

export const createUserService = (values) => {
    return new Promise((resolve, reject) => {
        const URI = `${process.env.REACT_APP_URL_API_EXPRESS}/api/create`;
        axios({
            url: URI,
            method: 'POST',
            data: values
        }).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        })
    });
};

export const updateUserService = (values) => {
    return new Promise((resolve, reject) => {
        const URI = `${process.env.REACT_APP_URL_API_EXPRESS}/api/update`;
        axios({
            url: URI,
            method: 'PUT',
            data: values
        }).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        })
    });
};

export const deleteUserService = (id) => {
    return new Promise((resolve, reject) => {
        const URI = `${process.env.REACT_APP_URL_API_EXPRESS}/api/delete`;
        axios({
            url: URI,
            method: 'DELETE',
            data: {id: id}
        }).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        })
    });
};

export const logoutUserService = () => {
    return new Promise((resolve, reject) => {
        const URI = `${process.env.REACT_APP_URL_API_EXPRESS}/api/logout`;
        axios({
            url: URI,
            method: 'PUT'
        }).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        })
    });
};