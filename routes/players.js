const router = require('express').Router();

const players = [
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
    }
];

router.get('/', (req, res) => {
    res.status(200).json(players);
})
module.exports = router;