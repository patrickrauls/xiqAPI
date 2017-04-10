const router = require('express').Router();

const courses = [
    {
        id: 0,
        name: 'Denver Country Club',
        yards: 7144,
        holes: [
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 0
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 1
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 2
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 3
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 4,
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 5,
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 6,
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 7
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 8,
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 9
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 10
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 11
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 12
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 13
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 14
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 15
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 16
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 17
            }
        ],
        location: 'Denver, CO'
    },
    {
        id: 1,
        name: 'Vally Golf Club',
        yards: 7144,
        holes: [
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 0
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 1
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 2
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 3
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 4,
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 5,
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 6,
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 7
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 8,
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 9
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 10
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 11
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 12
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 13
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 14
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 15
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 16
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 17
            }
        ],
        location: 'Denver, CO'
    },
    {
        id: 2,
        name: 'Arrowhead Golf Club',
        yards: 7144,
        holes: [
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 0
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 1
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 2
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 3
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 4,
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 5,
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 6,
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 7
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 8,
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 9
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 10
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 11
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 12
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 13
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 14
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 15
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 16
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 17
            }
        ],
        location: 'Denver, CO'
    },
    {
        id: 3,
        name: 'Cherry Creek Country Club',
        yards: 7144,
        holes: [
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 0
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 1
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 2
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 3
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 4,
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 5,
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 6,
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 7
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 8,
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 9
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 10
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 11
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 12
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 13
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 14
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 15
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 16
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 17
            }
        ],
        location: 'Denver, CO'
    },
    {
        id: 4,
        name: 'Cherry Hills Country Club',
        yards: 7144,
        holes: [
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 0
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 1
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 2
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 3
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 4,
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 5,
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 6,
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 7
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 8,
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 9
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 10
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 11
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 12
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 13
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 14
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 15
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 16
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 17
            }
        ],
        location: 'Denver, CO'
    },
    {
        id: 5,
        name: 'The Broadmoor Country Club',
        yards: 7144,
        holes: [
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 0
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 1
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 2
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 3
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 4,
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 5,
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 6,
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 7
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 8,
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 9
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 10
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 11
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 12
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 13
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 14
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 15
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 16
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478,
                id: 17
            }
        ],
        location: 'Denver, CO'
    }
]
router.get('/', (req, res) => {
    res.status(200).json(courses);
})
router.get('/:id', (req, res) => {
    res.status(200).json(courses[req.params.id])
})
module.exports = router;