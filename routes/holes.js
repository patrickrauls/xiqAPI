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
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
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
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
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
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
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
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
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
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
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
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            },
            {
                name: '',
                handicap: 3,
                par: 4,
                yards: 478
            }
        ],
        location: 'Denver, CO'
    }
]

router.get('/:venue', (req, res) => {
    courses[req.params.venue]
})
module.exports = router;