const router = require('express').Router(),
    mongo = require('mongodb').MongoClient,
    objectId = require('mongodb').ObjectID,
    assert = require('assert'),
    uri = process.env.URI


router.get('/', (req, res) => {
    let ids = req.query.ids.map(id => Number(id)),
        invitees = [];

    mongo.connect(uri, (err, db) => {
        assert.equal(null, err);
        let cursor = db.collection('players').find({
            'id': { $in: ids }
        })
        cursor.forEach((doc, err) => {
            assert.equal(null, err);
            invitees.push(doc)
        }, () => {
            db.close();
            res.status(200).json(invitees);
        })
    })
})
router.patch('/', (req, res) => {
    mongo.connect(uri, (err, db) => {
        assert.equal(null, err);
        db.collection('players').findOne(req.body)
            .then(player => {
                console.log(player);
                res.status(200).json(player);
            })
    })
})
module.exports = router;