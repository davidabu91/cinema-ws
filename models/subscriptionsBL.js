const axios = require('axios');

exports.getAllSubscriptions = function() {
    return new Promise((resolve, reject) => {
        axios('http://localhost:8000/api/subscriptions').then(resp => {
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

exports.getSubscription = function(id) {
    return new Promise((resolve, reject) => {
        axios('http://localhost:8000/api/subscriptions/' + id)
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

exports.addSbscription = function(obj) {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/subscriptions', obj)
            .then(() => {
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



exports.updateSubscriotion = function(id, obj) {
    return new Promise((resolve, reject) => {
        axios.put('http://localhost:8000/api/subscriptions/' + id, obj)
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



exports.deleteSubscription = function(id) {
    return new Promise((resolve, reject) => {
        axios.delete('http://localhost:8000/api/subscriptions/' + id)
            .then(() => {
                resolve('Deleted')
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