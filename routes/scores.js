const router = require('express').Router(),

    mongodb = require('mongodb'),
    mongo = mongodb.MongoClient,
    objectId = mongodb.ObjectID,
    assert = require('assert'),
    uri = process.env.URI;

router.patch('/', (req, res) => {
    let id = req.body._id;
    delete req.body._id;
    mongo.connect(uri, (err, db) => {
        assert.equal(null, err);
        let cursor = db.collection('tournaments').findOneAndReplace(
            { "_id": objectId(id) },
            req.body,
            { returnOriginal: false })
            .then(confirmed => {
                db.close();
                res.status(200).json(confirmed)
            })
            .catch(err => {
                console.error(err);
                res.status(500).json(error)
            })
    })
})
module.exports = router;
