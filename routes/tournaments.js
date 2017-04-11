const router = require('express').Router(),
    mongo = require('mongodb').MongoClient,
    objectId = require('mongodb').ObjectID,
    assert = require('assert'),
    uri = process.env.URI;

const tournaments =
    [
        {
            id: 1,
            name: 'Denver Invitational',
            venue: 0,
            start: 'May 7',
            end: 'May 10, 2017',
            rules: ['Stroke Play', 'Gold Tees', 'Lift, Clean, and Place', 'Cart Path Only', 'All Waste Bunkers are Out of Bounds', 'Putt It Out'],
            players: [{
                id: 0,
                score: [[4, 4, 5, 3, 4, 6, 3, 4, 5, 5, 5, 2, 4, 5, 6, 4, 3, 4]],
                forRound: 4,
                forTournament: 4
            },
            {
                id: 2,
                score: [[4, 4, 5, 3, 4, 6, 3, 4, 5, 5, 5, 2, 4, 5, 4, 4, 3, 4]],
                forRound: 2,
                forTournament: 2
            },
            {
                id: 5,
                score: [[4, 4, 5, 3, 4, 6, 3, 4, 3, 4, 5, 2, 4, 5, 4, 4, 3, 4]],
                forRound: (-1),
                forTournament: (-1)
            }]
        },
        {
            id: 2,
            name: 'Cherry Hills Club Championship',
            venue: 0,
            start: 'April 20',
            end: 'April 23, 2017',
            rules: ['Stroke Play', 'Gold Tees', 'Lift, Clean, and Place', 'Cart Path Only', 'All Waste Bunkers are Out of Bounds', 'Putt It Out'],
            players: [{
                id: 0,
                score: [[4, 4, 5, 3, 4, 6, 3, 4, 5, 5, 5, 2, 4, 5, 6, 4, 3, 4]],
                forRound: 4,
                forTournament: 4
            },
            {
                id: 2,
                score: [[4, 4, 5, 3, 4, 6, 3, 4, 5, 5, 5, 2, 4, 5, 4, 4, 3, 4]],
                forRound: 2,
                forTournament: 2
            },
            {
                id: 5,
                score: [[4, 4, 5, 3, 4, 6, 3, 4, 3, 4, 5, 2, 4, 5, 4, 4, 3, 4]],
                forRound: (-1),
                forTournament: (-1)
            }]
        },
        {
            id: 3,
            name: 'Sykes Invitational',
            venue: 0,
            start: 'April 13',
            end: 'April 16, 2017',
            rules: ['Stroke Play', 'Gold Tees', 'Lift, Clean, and Place', 'Cart Path Only', 'All Waste Bunkers are Out of Bounds', 'Putt It Out'],
            players: [{
                id: 0,
                score: [[4, 4, 5, 3, 4, 6, 3, 4, 5, 5, 5, 2, 4, 5, 6, 4, 3, 4]],
                forRound: 4,
                forTournament: 4
            },
            {
                id: 2,
                score: [[4, 4, 5, 3, 4, 6, 3, 4, 5, 5, 5, 2, 4, 5, 4, 4, 3, 4]],
                forRound: 2,
                forTournament: 2
            },
            {
                id: 5,
                score: [[4, 4, 5, 3, 4, 6, 3, 4, 3, 4, 5, 2, 4, 5, 4, 4, 3, 4]],
                forRound: (-1),
                forTournament: (-1)
            }],
            teeTimes: [
                [
                    {
                        players: [0, 1, 2],
                        hole: 2,
                        time: '07:39:00'

                    },
                    {
                        players: [3, 4, 5],
                        hole: 3,
                        time: '07:39:00'

                    }
                ],
                [
                    {
                        players: [0, 1, 2],
                        hole: 7,
                        time: '07:39:00'

                    },
                    {
                        players: [3, 4, 5],
                        hole: 8,
                        time: '07:39:00'

                    }
                ]

            ]
        }
    ]

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
// router.post('/score', (req, res) => {
//     let score = req.body.score
//     mongo.connect(uri, (err, db) => {
//         assert.equal(null, err);
//         db.collection('tournaments').updateOne({/* identifying info*/}, {$set: score} (err, result) => {
//             assert.equal(null, err);
//             console.log('item inserted');
//             db.close();
//         })
//     })
//     res.status(200).json(tournaments);
// })
module.exports = router;