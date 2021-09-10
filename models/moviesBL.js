const axios = require('axios');

exports.getAllMovies = function() {
    return new Promise((resolve, reject) => {
        axios('http://localhost:8000/api/movies').then(resp => {
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
        axios('http://localhost:8000/api/movies/' + id)
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
        axios.post('http://localhost:8000/api/movies', obj)
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
        axios.put('http://localhost:8000/api/movies/' + id, obj)
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
        axios.delete('http://localhost:8000/api/movies/' + id)
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