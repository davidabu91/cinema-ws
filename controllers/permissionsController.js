const express = require('express');

const permissionsBL = require('../models/permissionsBL');

const router = new express.Router;

router.route('/')
    .get(async function(req, resp) {
        let data = await permissionsBL.getAllusers();

        return resp.json(data)
    })

router.route('/:id')
    .get(async function(req, resp) {
        let id = req.params.id
        let data = await permissionsBL.getUser(id);
        return resp.json(data)
    })

router.route('/')
    .post(async function(req, resp) {
        try {
            let obj = req.body;
            let result = await permissionsBL.addUser(obj);
            return resp.json(result);
        } catch (err) {
            return resp.json(err)
        }
    })


router.route('/:id')
    .put(async function(req, resp) {
        let id = req.params.id;
        let obj = req.body;

        let result = await permissionsBL.updateUser(id, obj);

        return resp.json(result)
    })


router.route('/:id')
    .delete(async function(req, resp) {
        try {
            let id = req.params.id;
            let result = await permissionsBL.deleteUser(id)
            return resp.json(result);
        } catch (err) {
            return resp.json(err)
        }
    })


module.exports = router;