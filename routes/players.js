const router = require('express').Router(),
    mongo = require('mongodb').MongoClient,
    objectId = require('mongodb').ObjectID,
    assert = require('assert'),
    uri = process.env.URI

const players =
    [
        {
            id: 0,
            name: {
                first: 'Patrick',
                middle: 'Andrew',
                last: 'Rauls',
                nickname: 'PAR'
            },
            handicap: 4.3,
            location: 'Denver, CO'
        },
        {
            id: 1,
            name: {
                first: 'Richard',
                middle: null,
                last: 'Beese',
                nickname: 'BZ'
            },
            handicap: 8.1,
            location: 'Denver, CO'
        },
        {
            id: 2,
            name: {
                first: 'Sarah',
                middle: null,
                last: 'Healey',
                nickname: ''
            },
            handicap: 8.1,
            location: 'Denver, CO'
        },
        {
            id: 3,
            name: {
                first: 'Jeff',
                middle: null,
                last: '"Mettle" Diers',
                nickname: ''
            },
            handicap: 8.1,
            location: 'Denver, CO'
        },
        {
            id: 4,
            name: {
                first: 'Kim',
                middle: null,
                last: 'Schlesinger',
                nickname: ''
            },
            handicap: 8.1,
            location: 'Denver, CO'
        },
        {
            id: 5,
            name: {
                first: 'Carlos',
                middle: null,
                last: 'Rodrigues',
                nickname: ''
            },
            handicap: 8.1,
            location: 'Denver, CO'
        },
        {
            id: 6,
            name: {
                first: 'Berto',
                middle: null,
                last: 'Ortega',
                nickname: ''
            },
            handicap: 8.1,
            location: 'Denver, CO'
        }
    ]

router.get('/', (req, res) => {
    let ids = req.query.ids.map(id => Number(id)),
        invitees = [];
    console.log(ids)
    // req.query.ids.forEach(id => {
    //     invitees.push(players[id])
    // })
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

})
module.exports = router;