const axios = require('axios');

exports.getAllSubscriptions = function() {
    return new Promise((resolve, reject) => {
        axios('https://subscriptions-web-server.herokuapp.com/api/subscriptions').then(resp => {
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
        axios('https://subscriptions-web-server.herokuapp.com/api/subscriptions/' + id)
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
        axios.post('https://subscriptions-web-server.herokuapp.com/api/subscriptions', obj)
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
        axios.put('https://subscriptions-web-server.herokuapp.com/api/subscriptions/' + id, obj)
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
        axios.delete('https://subscriptions-web-server.herokuapp.com/api/subscriptions/' + id)
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