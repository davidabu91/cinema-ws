const axios = require('axios');

exports.getAllMembers = function() {
    return new Promise((resolve, reject) => {
        axios('https://subscriptions-web-server.herokuapp.com/api/members').then(resp => {
                console.log(resp.status, resp.data);
                resolve(resp.data)
            })
            .catch(err => {
                if (err.response) {
                    reject(err.response.status)
                } else if (err.request) {
                    reject('bad request')
                } else {
                    reject('anything else')
                }
            })
    })
}

exports.getMember = function(id) {
    return new Promise((resolve, reject) => {
        axios('https://subscriptions-web-server.herokuapp.com/api/members/' + id)
            .then(resp => resolve(resp.data))
            .catch(err => {
                if (err.response) {
                    reject(err.response.status)
                } else if (err.request) {
                    reject('bad request')
                } else {
                    reject('anything else')
                }
            })
    })
}

exports.addMember = function(obj) {
    return new Promise((resolve, reject) => {
        axios.post('https://subscriptions-web-server.herokuapp.com/api/members', obj)
            .then(resp => {
                resolve('Created')
            })
            .catch(err => {
                if (err.response) {
                    reject(err.response.status)
                } else if (err.request) {
                    reject('bad request')
                } else {
                    reject('anything else')
                }
            })
    })
}



exports.updateMember = function(id, obj) {
    return new Promise((resolve, reject) => {
        axios.put('https://subscriptions-web-server.herokuapp.com/api/members/' + id, obj)
            .then(resp => resolve('Updated'))
            .catch(err => {
                if (err.response) {
                    reject(err.response.status)
                } else if (err.request) {
                    reject('bad request')
                } else {
                    reject('anything else')
                }
            })
    })
}



exports.deleteMember = function(id) {
    return new Promise((resolve, reject) => {
        axios.delete('https://subscriptions-web-server.herokuapp.com/api/members/' + id)
            .then(() => {
                resolve('Deleted')
                    // console.log('Deleted');
            })
            .catch(err => {
                if (err.response) {
                    reject(err.response.status)
                } else if (err.request) {
                    reject('bad request')
                } else {
                    reject('anything else')
                }
            })
    })
}