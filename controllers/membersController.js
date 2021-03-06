const express = require('express');

const membersBL = require('../models/membersBL');

const router = new express.Router;

router.route('/')
    .get(async function(req, resp) {
        let data = await membersBL.getAllMembers();

        return resp.json(data)
    })

router.route('/:id')
    .get(async function(req, resp) {
        let id = req.params.id
        let data = await membersBL.getMember(id);
        return resp.json(data)
    })

router.route('/')
    .post(async function(req, resp) {
        try {
            let obj = req.body;
            let result = await membersBL.addMember(obj);
            return resp.json(result);
        } catch (err) {
            return resp.json(err)
        }
    })
    // router.route('/')
    //     .post(async function(req, resp) {
    //         try {
    //             let obj = req.body;
    //             let result = await membersBL.addUser(obj);
    //             return resp.json(result);
    //         } catch (err) {
    //             return resp.json(err)
    //         }
    //     })


router.route('/:id')
    .put(async function(req, resp) {
        let id = req.params.id;
        let obj = req.body;

        let result = await membersBL.updateMember(id, obj);

        return resp.json(result)
    })


router.route('/:id')
    .delete(async function(req, resp) {
        try {
            let id = req.params.id;
            let result = await membersBL.deleteMember(id)
            return resp.json(result);
        } catch (err) {
            return resp.json(err)
        }
    })


module.exports = router;