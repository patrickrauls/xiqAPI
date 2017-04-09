const router = require('express').Router();

const tournaments = [
    {
        id: 1,
        name: 'Denver Invitational',
        venue: 0,
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
    }
]

router.get('/', (req, res) => {
    res.status(200).json(tournaments);
})
module.exports = router;