const jfile = require('jsonfile');
const path = require('path');
const file = path.join(__dirname, '..', '/dataBase/permissions.json')

exports.getAllusers = function() {
    return new Promise((resolve, reject) => {
        jfile.readFile(file, function(err, data) {
            if (err) {
                reject(err)
                console.log('error', err);
            } else {
                resolve(data.permissionsUsers)
            }
        })
    })
}


exports.getUser = function(id) {
    return new Promise((resolve, reject) => {
        jfile.readFile(file, function(err, data) {
            if (err) {
                reject(err)
            } else {
                let users = data.permissionsUsers;
                let arr = users.filter(x => x.id == id);
                if (arr.length > 0) {

                    resolve(arr[0])
                    console.log(arr[0]);
                } else {
                    resolve('Not exist')
                }
            }
        })
    })
}

exports.addUser = function(obj) {
    return new Promise((resolve, reject) => {
        let arrayOfObjects;
        jfile.readFile(file, function(err, data) {
            if (err) {
                reject(err)
                console.log('error', err);
            } else {
                // resolve(data.users)
                var stringified = JSON.stringify(data)
                arrayOfObjects = JSON.parse(stringified);
                arrayOfObjects.permissionsUsers.push(obj);
                console.log(arrayOfObjects);
                jfile.writeFile(file, arrayOfObjects,

                    function(err, data) {
                        if (err) {
                            reject(err)
                        } else {
                            resolve('created!')
                            console.log('created!');
                        }
                    })
            }
        })

    })
}



exports.updateUser = function(id, obj) {
    return new Promise((resolve, reject) => {
        let arrayOfObjects;
        jfile.readFile(file, function(err, data) {
            if (err) {
                reject(err)
                console.log('error', err);
            } else {
                var stringified = JSON.stringify(data)
                arrayOfObjects = JSON.parse(stringified);
                let user = arrayOfObjects.permissionsUsers.filter(x => x.id == id);
                if (user.length > 0) {
                    let users = arrayOfObjects.permissionsUsers.filter(x => x.id != id);
                    users.push(obj)
                    arrayOfObjects.permissionsUsers = users;
                    jfile.writeFile(file, arrayOfObjects,

                        function(err, data) {
                            if (err) {
                                reject(err)
                            } else {
                                resolve('Update!')
                                console.log('Update!');
                            }
                        }
                    )
                } else {
                    reject('User is not exist')
                }

            }
        })

    })
}



exports.deleteUser = function(id) {
    return new Promise((resolve, reject) => {
        let arrayOfObjects;
        jfile.readFile(file, function(err, data) {
            if (err) {
                reject(err)
                console.log('error', err);
            } else {
                var stringified = JSON.stringify(data)
                arrayOfObjects = JSON.parse(stringified);
                let user = arrayOfObjects.permissionsUsers.filter(x => x.id == id);

                if (user.length > 0) {
                    let users = arrayOfObjects.permissionsUsers.filter(x => x.id != id);
                    if (users.length == 0) {
                        users = null
                    } else {
                        arrayOfObjects.permissionsUsers = users;

                    }

                    jfile.writeFile(file, arrayOfObjects,

                        function(err, data) {
                            if (err) {
                                reject(err)
                            } else {
                                resolve('Deleted!')
                            }
                        }
                    )
                } else {
                    reject('User is not exist')
                }

            }
        })

    })
}