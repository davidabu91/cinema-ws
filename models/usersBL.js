const jfile = require('jsonfile');
const path = require('path');
const file = path.join(__dirname, '..', '/dataBase/Users.json')

exports.getAllusers = function() {
    return new Promise((resolve, reject) => {
        jfile.readFile(file, function(err, data) {
            if (err) {
                reject(err)
                console.log('error', err);
            } else {
                resolve(data.users)
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
                let users = data.users;
                let arr = users.filter(x => x._id == id);
                if (arr.length > 0) {

                    resolve(arr[0])
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
                resolve(obj)
                var stringified = JSON.stringify(data)
                arrayOfObjects = JSON.parse(stringified);
                arrayOfObjects.users.push(obj);
                jfile.writeFile(file, arrayOfObjects, 'utf-8',
                    function(err, data) {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(obj)
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
                let user = arrayOfObjects.users.filter(x => x._id == id);
                if (user.length > 0) {
                    let users = arrayOfObjects.users.filter(x => x._id != id);
                    users.push(obj)
                    arrayOfObjects.users = users;
                    jfile.writeFile(file, arrayOfObjects,

                        function(err, data) {
                            if (err) {
                                reject(err)
                            } else {
                                resolve('Update!')
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

    console.log(id);
    return new Promise((resolve, reject) => {
        let arrayOfObjects;
        jfile.readFile(file, function(err, data) {
            if (err) {
                reject(err)
                console.log('error', err);
            } else {
                var stringified = JSON.stringify(data)
                arrayOfObjects = JSON.parse(stringified);
                let user = arrayOfObjects.users.filter(x => x._id == id);

                if (user.length > 0) {
                    let users = arrayOfObjects.users.filter(x => x._id != id);
                    arrayOfObjects.users = users;

                    jfile.writeFile(file, arrayOfObjects,

                        // function(err, data) {
                        //     if (err) {
                        //         reject(err)
                        //     } else {
                        //         console.log('Deleted!');


                        //         resolve(data.users)
                        //     }
                        // }
                        (async function() {
                            try {
                                await resolve(users)
                            } catch (error) {
                                console.log('That did not go well.')
                                throw error
                            }
                        })().catch(e => { console.error(e) })
                    )
                } else {
                    reject('User is not exist', id)
                }

            }
        })

    })
}