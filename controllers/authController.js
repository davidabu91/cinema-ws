const express = require('express');

const authBL = require('../auth/authBL');

const router = express.Router();

router.route('/')
    .get(async function(req, resp) {
        let data = await authBL.getAll();

        return resp.json(data)
    })

router.route('/:id')
    .get(async function(req, resp) {
        let id = req.params.id
        let data = await authBL.getUser(id);
        return resp.json(data)
    })

router.route('/')
    .post(async function(req, resp) {
        try {
            let obj = req.body;
            let result = await authBL.adduser(obj);
            return resp.json(result)

        } catch (err) {
            return resp.json(err)
        }
    })


router.route('/:id')
    .put(async function(req, resp) {
        let id = req.params.id;
        let obj = req.body;

        let result = await authBL.updateUser(id, obj);

        return resp.json(result)
    })


router.route('/:id')
    .delete(async function(req, resp) {
        try {
            let id = req.params.id;
            let result = await authBL.deleteuser(id)
            return resp.json(result);
        } catch (err) {
            return resp.json(err)
        }
    })


module.exports = router;