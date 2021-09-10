const express = require('express');

const subscriptionsBL = require('../models/subscriptionsBL');

const router = new express.Router;

router.route('/')
    .get(async function(req, resp) {
        let data = await subscriptionsBL.getAllSubscriptions();

        return resp.json(data)
    })

router.route('/:id')
    .get(async function(req, resp) {
        let id = req.params.id
        let data = await subscriptionsBL.getSubscription(id);
        return resp.json(data)
    })

router.route('/')
    .post(async function(req, resp) {
        try {
            let obj = req.body;
            let result = await subscriptionsBL.addSbscription(obj);
            return resp.json(result);
        } catch (err) {
            return resp.json(err)
        }
    })


router.route('/:id')
    .put(async function(req, resp) {
        let id = req.params.id;
        let obj = req.body;

        let result = await subscriptionsBL.updateSubscriotion(id, obj);

        return resp.json(result)
    })


router.route('/:id')
    .delete(async function(req, resp) {
        try {
            let id = req.params.id;
            let result = await subscriptionsBL.deleteSubscription(id)
            return resp.json(result);
        } catch (err) {
            return resp.json(err)
        }
    })


module.exports = router;