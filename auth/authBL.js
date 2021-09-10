const authUsers = require('./authModel');

exports.getAll = function() {

    return new Promise((resolve, reject) => {
        authUsers.find({}, function(err, users) {
            if (err) {
                reject(err)
            } else {
                resolve(users)
            }
        })
    })
}


exports.getUser = function(id) {

    return new Promise((resolve, reject) => {
        authUsers.findById(id, function(err, user) {
            if (err) {
                reject(err)
            } else {
                resolve(user)
            }
        })
    })
}


exports.adduser = function(obj) {
    const newUser = new authUsers({
        UserName: obj.name,
        Password: obj.password
    })

    newUser.save(function(err, result) {
        return new Promise((resolve, reject) => {

            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })

    })

}

exports.updateUser = function(id, obj) {
    return new Promise((resolve, reject) => {
        authUsers.findByIdAndUpdate(id, {
            UserName: obj.name,
            Password: obj.password
        }, function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('Updated !')
            }
        })
    })
}

exports.deleteuser = function(id) {

    return new Promise((resolve, reject) => {
        authUsers.findByIdAndDelete(id, function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('Deleted')
            }
        })
    })
}