const axios = require('axios');

exports.getAllMovies = function() {
    return new Promise((resolve, reject) => {
        axios('https://subscriptions-web-server.herokuapp.com/api/movies').then(resp => {
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

exports.getMovie = function(id) {
    return new Promise((resolve, reject) => {
        axios('https://subscriptions-web-server.herokuapp.com/api/movies/' + id)
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

exports.addMovie = function(obj) {
    return new Promise((resolve, reject) => {
        axios.post('https://subscriptions-web-server.herokuapp.com/api/movies', obj)
            .then(resp => resolve('Created'))
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



exports.updateMovie = function(id, obj) {
    return new Promise((resolve, reject) => {
        axios.put('https://subscriptions-web-server.herokuapp.com/api/movies/' + id, obj)
            .then(() => resolve('Updated'))
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



exports.deleteMovie = function(id) {
    return new Promise((resolve, reject) => {
        axios.delete('https://subscriptions-web-server.herokuapp.com/api/movies/' + id)
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