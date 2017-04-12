const router = require('express').Router(),
    mongo = require('mongodb').MongoClient,
    objectId = require('mongodb').ObjectID,
    assert = require('assert'),
    uri = process.env.URI;


router.get('/', (req, res) => {
    let tournaments = [];
    mongo.connect(uri, (err, db) => {
        assert.equal(null, err);
        let cursor = db.collection('tournaments').find();
        cursor.forEach((doc, err) => {
            assert.equal(null, err);
            tournaments.push(doc);
        }, () => {
            db.close();
            res.status(200).json(tournaments)
        })
    })

})
router.get('/:id', (req, res) => {
    mongo.connect(uri, (err, db) => {
        assert.equal(null, err);
        db.collection('tournaments').findOne({
            '_id': objectId(req.params.id)
        })
            .then(tournament => {
                db.close();
                res.status(200).json(tournament)
            })
            .catch(err => {
                console.error(err);
                res.status(500).json(err)
            })
    })

})

module.exports = router;