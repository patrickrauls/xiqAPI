const router = require('express').Router(),
    mongo = require('mongodb').MongoClient,
    objectId = require('mongodb').ObjectID,
    assert = require('assert'),
    uri = process.env.URI;

router.get('/', (req, res) => {
    let courses = [];
    mongo.connect(uri, (err, db) => {
        assert.equal(null, err);
        let cursor = db.collection('courses').find()
        cursor.forEach((doc, err) => {
            assert.equal(null, err);
            courses.push(doc);
        }, () => {
            db.close();
            res.status(200).json(courses);
        })
    })
})
router.get('/:id', (req, res) => {
    res.status(200).json(courses[req.params.id])
})

module.exports = router;