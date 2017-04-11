const router = require('express').Router();

const courses = [
    {
        id: 0,
        name: 'Broken Tee Golf Club',
        location: 'Sheridan, CO',
        par: 72,
        rating: 71.7,
        slope: 130,
        yards: 6995,
        holes: [
            {
                id: 0,
                name: '1st Hole',
                yards: 332,
                par: 4,
                handicap: 17,
                green: {
                    front: '39.646039, -105.012789',
                    center: '39.646169, -105.012821',
                    back: '39.646294, -105.012874'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.645730, -105.012513',
                    clear: '39.645799, -105.012513',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.645938, -105.012872',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: '39.646079, -105.013073',
                    clear: false,
                    type: 'water hazard'
                },
                {
                    name: 'water hazard',
                    front: '39.645287, -105.013154',
                    clear: '39.645744, -105.013283',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 1,
                name: '2nd Hole',
                yards: 436,
                par: 4,
                handicap: 9,
                green: {
                    front: '39.649294, -105.010343',
                    center: '39.649466, -105.010385',
                    back: '39.649608, -105.010342'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.648274, -105.010134',
                    clear: '39.648413, -105.010116',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.649186, -105.010448',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: '39.648608, -105.010778',
                    clear: '39.649135, -105.010511',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 2,
                name: '3rd Hole',
                yards: 402,
                par: 4,
                handicap: 7,
                green: {
                    front: '39.646760, -105.011644',
                    center: '39.646669, -105.011686',
                    back: '39.646564, -105.011804'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.647676, -105.011019',
                    clear: '39.647543, -105.011059',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.646928, -105.011707',
                    clear: '39.646825, -105.011821',
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.648571, -105.010960',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 3,
                name: '4th Hole',
                yards: 348,
                par: 4,
                handicap: 3,
                green: {
                    front: '39.648865, -105.011928',
                    center: '39.648995, -105.011856',
                    back: '39.649082, -105.011748'
                },
                hazards: [{
                    name: 'sand bunkers',
                    front: '39.648399, -105.011889',
                    clear: '39.648821, -105.011849',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648701, -105.012410',
                    clear: false,
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648894, -105.011684',
                    clear: '39.648973, -105.011650',
                    type: 'greenside bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648911, -105.012033',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.648172, -105.012193',
                    type: 'water hazard'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.647775, -105.012030',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 4,
                name: '5th Hole',
                yards: 223,
                par: 3,
                handicap: 11,
                green: {
                    front: '39.647233, -105.012934',
                    center: '39.647125, -105.012893',
                    back: '39.646989, -105.012802'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.647152, -105.013098',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: '39.647749, -105.012862',
                        clear: '39.647349, -105.012850',
                        type: 'water hazard'
                    },
                    {
                        name: 'water hazard',
                        front: '39.646883, -105.012870',
                        clear: false,
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 5,
                name: '6th Hole',
                yards: 617,
                par: 5,
                handicap: 13,
                green: {
                    front: '39.644030, -105.013801',
                    center: '39.643937, -105.013778',
                    back: '39.643842, -105.013669'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.645933, -105.014123',
                        clear: '39.645813, -105.014171',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunkers',
                        front: '39.644626, -105.013621',
                        clear: '39.644248, -105.013647',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.643801, -105.013737',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: '39.645664, -105.013655',
                        clear: '39.644942, -105.013753',
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 6,
                name: '7th Hole',
                yards: 210,
                par: 3,
                handicap: 15,
                green: {
                    front: '39.645946, -105.015639',
                    center: '39.646089, -105.015598',
                    back: '39.646239, -105.015517'
                },
                hazards: [
                    {
                        name: 'water hazard',
                        front: '39.646295, -105.015572',
                        clear: false,
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 7,
                name: '8th Hole',
                yards: 414,
                par: 4,
                handicap: 5,
                green: {
                    front: '39.649706, -105.014921',
                    center: '39.649817, -105.014881',
                    back: '39.649901, -105.014756'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.648687, -105.015382',
                        clear: '39.648782, -105.015351',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.648865, -105.015027',
                        clear: '39.648986, -105.014979',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.649717, -105.014769',
                        clear: '39.649822, -105.014705',
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: false,
                        clear: '39.647828, -105.015487',
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 8,
                name: '9th Hole',
                yards: 550,
                par: 5,
                handicap: 1,
                green: {
                    front: '39.646019, -105.016199',
                    center: '39.645912, -105.016171',
                    back: '39.645793, -105.016097'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.647227, -105.016477',
                        clear: '39.647098, -105.016515',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.648300, -105.015814',
                        clear: '39.648211, -105.015825',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunkers',
                        front: '39.648131, -105.015887',
                        clear: '39.647885, -105.016044',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.646060, -105.016091',
                        clear: '39.645912, -105.016055',
                        type: 'greenside bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.645777, -105.016228',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.645694, -105.016103',
                        clear: false,
                        type: 'greenside bunker'
                    }
                ]
            },
            {
                id: 9,
                name: '10th Hole',
                yards: 332,
                par: 4,
                handicap: 17,
                green: {
                    front: '39.646039, -105.012789',
                    center: '39.646169, -105.012821',
                    back: '39.646294, -105.012874'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.645730, -105.012513',
                    clear: '39.645799, -105.012513',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.645938, -105.012872',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: '39.646079, -105.013073',
                    clear: false,
                    type: 'water hazard'
                },
                {
                    name: 'water hazard',
                    front: '39.645287, -105.013154',
                    clear: '39.645744, -105.013283',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 10,
                name: '11th Hole',
                yards: 436,
                par: 4,
                handicap: 9,
                green: {
                    front: '39.649294, -105.010343',
                    center: '39.649466, -105.010385',
                    back: '39.649608, -105.010342'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.648274, -105.010134',
                    clear: '39.648413, -105.010116',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.649186, -105.010448',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: '39.648608, -105.010778',
                    clear: '39.649135, -105.010511',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 11,
                name: '12th Hole',
                yards: 402,
                par: 4,
                handicap: 7,
                green: {
                    front: '39.646760, -105.011644',
                    center: '39.646669, -105.011686',
                    back: '39.646564, -105.011804'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.647676, -105.011019',
                    clear: '39.647543, -105.011059',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.646928, -105.011707',
                    clear: '39.646825, -105.011821',
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.648571, -105.010960',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 12,
                name: '13th Hole',
                yards: 348,
                par: 4,
                handicap: 3,
                green: {
                    front: '39.648865, -105.011928',
                    center: '39.648995, -105.011856',
                    back: '39.649082, -105.011748'
                },
                hazards: [{
                    name: 'sand bunkers',
                    front: '39.648399, -105.011889',
                    clear: '39.648821, -105.011849',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648701, -105.012410',
                    clear: false,
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648894, -105.011684',
                    clear: '39.648973, -105.011650',
                    type: 'greenside bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648911, -105.012033',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.648172, -105.012193',
                    type: 'water hazard'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.647775, -105.012030',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 13,
                name: '14th Hole',
                yards: 223,
                par: 3,
                handicap: 11,
                green: {
                    front: '39.647233, -105.012934',
                    center: '39.647125, -105.012893',
                    back: '39.646989, -105.012802'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.647152, -105.013098',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: '39.647749, -105.012862',
                        clear: '39.647349, -105.012850',
                        type: 'water hazard'
                    },
                    {
                        name: 'water hazard',
                        front: '39.646883, -105.012870',
                        clear: false,
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 14,
                name: '15th Hole',
                yards: 617,
                par: 5,
                handicap: 13,
                green: {
                    front: '39.644030, -105.013801',
                    center: '39.643937, -105.013778',
                    back: '39.643842, -105.013669'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.645933, -105.014123',
                        clear: '39.645813, -105.014171',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunkers',
                        front: '39.644626, -105.013621',
                        clear: '39.644248, -105.013647',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.643801, -105.013737',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: '39.645664, -105.013655',
                        clear: '39.644942, -105.013753',
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 15,
                name: '16th Hole',
                yards: 210,
                par: 3,
                handicap: 15,
                green: {
                    front: '39.645946, -105.015639',
                    center: '39.646089, -105.015598',
                    back: '39.646239, -105.015517'
                },
                hazards: [
                    {
                        name: 'water hazard',
                        front: '39.646295, -105.015572',
                        clear: false,
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 16,
                name: '17th Hole',
                yards: 414,
                par: 4,
                handicap: 5,
                green: {
                    front: '39.649706, -105.014921',
                    center: '39.649817, -105.014881',
                    back: '39.649901, -105.014756'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.648687, -105.015382',
                        clear: '39.648782, -105.015351',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.648865, -105.015027',
                        clear: '39.648986, -105.014979',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.649717, -105.014769',
                        clear: '39.649822, -105.014705',
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: false,
                        clear: '39.647828, -105.015487',
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 17,
                name: '18th Hole',
                yards: 550,
                par: 5,
                handicap: 1,
                green: {
                    front: '39.646019, -105.016199',
                    center: '39.645912, -105.016171',
                    back: '39.645793, -105.016097'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.647227, -105.016477',
                        clear: '39.647098, -105.016515',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.648300, -105.015814',
                        clear: '39.648211, -105.015825',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunkers',
                        front: '39.648131, -105.015887',
                        clear: '39.647885, -105.016044',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.646060, -105.016091',
                        clear: '39.645912, -105.016055',
                        type: 'greenside bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.645777, -105.016228',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.645694, -105.016103',
                        clear: false,
                        type: 'greenside bunker'
                    }
                ]
            }
        ]
    },
    {
        id: 1,
        name: 'Broken Tee Golf Club',
        location: 'Sheridan, CO',
        par: 72,
        rating: 71.7,
        slope: 130,
        yards: 6995,
        holes: [
            {
                id: 0,
                name: '1st Hole',
                yards: 332,
                par: 4,
                handicap: 17,
                green: {
                    front: '39.646039, -105.012789',
                    center: '39.646169, -105.012821',
                    back: '39.646294, -105.012874'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.645730, -105.012513',
                    clear: '39.645799, -105.012513',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.645938, -105.012872',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: '39.646079, -105.013073',
                    clear: false,
                    type: 'water hazard'
                },
                {
                    name: 'water hazard',
                    front: '39.645287, -105.013154',
                    clear: '39.645744, -105.013283',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 1,
                name: '2nd Hole',
                yards: 436,
                par: 4,
                handicap: 9,
                green: {
                    front: '39.649294, -105.010343',
                    center: '39.649466, -105.010385',
                    back: '39.649608, -105.010342'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.648274, -105.010134',
                    clear: '39.648413, -105.010116',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.649186, -105.010448',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: '39.648608, -105.010778',
                    clear: '39.649135, -105.010511',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 2,
                name: '3rd Hole',
                yards: 402,
                par: 4,
                handicap: 7,
                green: {
                    front: '39.646760, -105.011644',
                    center: '39.646669, -105.011686',
                    back: '39.646564, -105.011804'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.647676, -105.011019',
                    clear: '39.647543, -105.011059',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.646928, -105.011707',
                    clear: '39.646825, -105.011821',
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.648571, -105.010960',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 3,
                name: '4th Hole',
                yards: 348,
                par: 4,
                handicap: 3,
                green: {
                    front: '39.648865, -105.011928',
                    center: '39.648995, -105.011856',
                    back: '39.649082, -105.011748'
                },
                hazards: [{
                    name: 'sand bunkers',
                    front: '39.648399, -105.011889',
                    clear: '39.648821, -105.011849',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648701, -105.012410',
                    clear: false,
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648894, -105.011684',
                    clear: '39.648973, -105.011650',
                    type: 'greenside bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648911, -105.012033',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.648172, -105.012193',
                    type: 'water hazard'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.647775, -105.012030',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 4,
                name: '5th Hole',
                yards: 223,
                par: 3,
                handicap: 11,
                green: {
                    front: '39.647233, -105.012934',
                    center: '39.647125, -105.012893',
                    back: '39.646989, -105.012802'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.647152, -105.013098',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: '39.647749, -105.012862',
                        clear: '39.647349, -105.012850',
                        type: 'water hazard'
                    },
                    {
                        name: 'water hazard',
                        front: '39.646883, -105.012870',
                        clear: false,
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 5,
                name: '6th Hole',
                yards: 617,
                par: 5,
                handicap: 13,
                green: {
                    front: '39.644030, -105.013801',
                    center: '39.643937, -105.013778',
                    back: '39.643842, -105.013669'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.645933, -105.014123',
                        clear: '39.645813, -105.014171',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunkers',
                        front: '39.644626, -105.013621',
                        clear: '39.644248, -105.013647',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.643801, -105.013737',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: '39.645664, -105.013655',
                        clear: '39.644942, -105.013753',
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 6,
                name: '7th Hole',
                yards: 210,
                par: 3,
                handicap: 15,
                green: {
                    front: '39.645946, -105.015639',
                    center: '39.646089, -105.015598',
                    back: '39.646239, -105.015517'
                },
                hazards: [
                    {
                        name: 'water hazard',
                        front: '39.646295, -105.015572',
                        clear: false,
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 7,
                name: '8th Hole',
                yards: 414,
                par: 4,
                handicap: 5,
                green: {
                    front: '39.649706, -105.014921',
                    center: '39.649817, -105.014881',
                    back: '39.649901, -105.014756'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.648687, -105.015382',
                        clear: '39.648782, -105.015351',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.648865, -105.015027',
                        clear: '39.648986, -105.014979',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.649717, -105.014769',
                        clear: '39.649822, -105.014705',
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: false,
                        clear: '39.647828, -105.015487',
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 8,
                name: '9th Hole',
                yards: 550,
                par: 5,
                handicap: 1,
                green: {
                    front: '39.646019, -105.016199',
                    center: '39.645912, -105.016171',
                    back: '39.645793, -105.016097'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.647227, -105.016477',
                        clear: '39.647098, -105.016515',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.648300, -105.015814',
                        clear: '39.648211, -105.015825',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunkers',
                        front: '39.648131, -105.015887',
                        clear: '39.647885, -105.016044',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.646060, -105.016091',
                        clear: '39.645912, -105.016055',
                        type: 'greenside bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.645777, -105.016228',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.645694, -105.016103',
                        clear: false,
                        type: 'greenside bunker'
                    }
                ]
            },
            {
                id: 9,
                name: '10th Hole',
                yards: 332,
                par: 4,
                handicap: 17,
                green: {
                    front: '39.646039, -105.012789',
                    center: '39.646169, -105.012821',
                    back: '39.646294, -105.012874'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.645730, -105.012513',
                    clear: '39.645799, -105.012513',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.645938, -105.012872',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: '39.646079, -105.013073',
                    clear: false,
                    type: 'water hazard'
                },
                {
                    name: 'water hazard',
                    front: '39.645287, -105.013154',
                    clear: '39.645744, -105.013283',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 10,
                name: '11th Hole',
                yards: 436,
                par: 4,
                handicap: 9,
                green: {
                    front: '39.649294, -105.010343',
                    center: '39.649466, -105.010385',
                    back: '39.649608, -105.010342'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.648274, -105.010134',
                    clear: '39.648413, -105.010116',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.649186, -105.010448',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: '39.648608, -105.010778',
                    clear: '39.649135, -105.010511',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 11,
                name: '12th Hole',
                yards: 402,
                par: 4,
                handicap: 7,
                green: {
                    front: '39.646760, -105.011644',
                    center: '39.646669, -105.011686',
                    back: '39.646564, -105.011804'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.647676, -105.011019',
                    clear: '39.647543, -105.011059',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.646928, -105.011707',
                    clear: '39.646825, -105.011821',
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.648571, -105.010960',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 12,
                name: '13th Hole',
                yards: 348,
                par: 4,
                handicap: 3,
                green: {
                    front: '39.648865, -105.011928',
                    center: '39.648995, -105.011856',
                    back: '39.649082, -105.011748'
                },
                hazards: [{
                    name: 'sand bunkers',
                    front: '39.648399, -105.011889',
                    clear: '39.648821, -105.011849',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648701, -105.012410',
                    clear: false,
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648894, -105.011684',
                    clear: '39.648973, -105.011650',
                    type: 'greenside bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648911, -105.012033',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.648172, -105.012193',
                    type: 'water hazard'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.647775, -105.012030',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 13,
                name: '14th Hole',
                yards: 223,
                par: 3,
                handicap: 11,
                green: {
                    front: '39.647233, -105.012934',
                    center: '39.647125, -105.012893',
                    back: '39.646989, -105.012802'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.647152, -105.013098',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: '39.647749, -105.012862',
                        clear: '39.647349, -105.012850',
                        type: 'water hazard'
                    },
                    {
                        name: 'water hazard',
                        front: '39.646883, -105.012870',
                        clear: false,
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 14,
                name: '15th Hole',
                yards: 617,
                par: 5,
                handicap: 13,
                green: {
                    front: '39.644030, -105.013801',
                    center: '39.643937, -105.013778',
                    back: '39.643842, -105.013669'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.645933, -105.014123',
                        clear: '39.645813, -105.014171',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunkers',
                        front: '39.644626, -105.013621',
                        clear: '39.644248, -105.013647',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.643801, -105.013737',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: '39.645664, -105.013655',
                        clear: '39.644942, -105.013753',
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 15,
                name: '16th Hole',
                yards: 210,
                par: 3,
                handicap: 15,
                green: {
                    front: '39.645946, -105.015639',
                    center: '39.646089, -105.015598',
                    back: '39.646239, -105.015517'
                },
                hazards: [
                    {
                        name: 'water hazard',
                        front: '39.646295, -105.015572',
                        clear: false,
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 16,
                name: '17th Hole',
                yards: 414,
                par: 4,
                handicap: 5,
                green: {
                    front: '39.649706, -105.014921',
                    center: '39.649817, -105.014881',
                    back: '39.649901, -105.014756'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.648687, -105.015382',
                        clear: '39.648782, -105.015351',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.648865, -105.015027',
                        clear: '39.648986, -105.014979',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.649717, -105.014769',
                        clear: '39.649822, -105.014705',
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: false,
                        clear: '39.647828, -105.015487',
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 17,
                name: '18th Hole',
                yards: 550,
                par: 5,
                handicap: 1,
                green: {
                    front: '39.646019, -105.016199',
                    center: '39.645912, -105.016171',
                    back: '39.645793, -105.016097'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.647227, -105.016477',
                        clear: '39.647098, -105.016515',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.648300, -105.015814',
                        clear: '39.648211, -105.015825',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunkers',
                        front: '39.648131, -105.015887',
                        clear: '39.647885, -105.016044',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.646060, -105.016091',
                        clear: '39.645912, -105.016055',
                        type: 'greenside bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.645777, -105.016228',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.645694, -105.016103',
                        clear: false,
                        type: 'greenside bunker'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'Broken Tee Golf Club',
        location: 'Sheridan, CO',
        par: 72,
        rating: 71.7,
        slope: 130,
        yards: 6995,
        holes: [
            {
                id: 0,
                name: '1st Hole',
                yards: 332,
                par: 4,
                handicap: 17,
                green: {
                    front: '39.646039, -105.012789',
                    center: '39.646169, -105.012821',
                    back: '39.646294, -105.012874'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.645730, -105.012513',
                    clear: '39.645799, -105.012513',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.645938, -105.012872',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: '39.646079, -105.013073',
                    clear: false,
                    type: 'water hazard'
                },
                {
                    name: 'water hazard',
                    front: '39.645287, -105.013154',
                    clear: '39.645744, -105.013283',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 1,
                name: '2nd Hole',
                yards: 436,
                par: 4,
                handicap: 9,
                green: {
                    front: '39.649294, -105.010343',
                    center: '39.649466, -105.010385',
                    back: '39.649608, -105.010342'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.648274, -105.010134',
                    clear: '39.648413, -105.010116',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.649186, -105.010448',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: '39.648608, -105.010778',
                    clear: '39.649135, -105.010511',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 2,
                name: '3rd Hole',
                yards: 402,
                par: 4,
                handicap: 7,
                green: {
                    front: '39.646760, -105.011644',
                    center: '39.646669, -105.011686',
                    back: '39.646564, -105.011804'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.647676, -105.011019',
                    clear: '39.647543, -105.011059',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.646928, -105.011707',
                    clear: '39.646825, -105.011821',
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.648571, -105.010960',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 3,
                name: '4th Hole',
                yards: 348,
                par: 4,
                handicap: 3,
                green: {
                    front: '39.648865, -105.011928',
                    center: '39.648995, -105.011856',
                    back: '39.649082, -105.011748'
                },
                hazards: [{
                    name: 'sand bunkers',
                    front: '39.648399, -105.011889',
                    clear: '39.648821, -105.011849',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648701, -105.012410',
                    clear: false,
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648894, -105.011684',
                    clear: '39.648973, -105.011650',
                    type: 'greenside bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648911, -105.012033',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.648172, -105.012193',
                    type: 'water hazard'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.647775, -105.012030',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 4,
                name: '5th Hole',
                yards: 223,
                par: 3,
                handicap: 11,
                green: {
                    front: '39.647233, -105.012934',
                    center: '39.647125, -105.012893',
                    back: '39.646989, -105.012802'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.647152, -105.013098',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: '39.647749, -105.012862',
                        clear: '39.647349, -105.012850',
                        type: 'water hazard'
                    },
                    {
                        name: 'water hazard',
                        front: '39.646883, -105.012870',
                        clear: false,
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 5,
                name: '6th Hole',
                yards: 617,
                par: 5,
                handicap: 13,
                green: {
                    front: '39.644030, -105.013801',
                    center: '39.643937, -105.013778',
                    back: '39.643842, -105.013669'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.645933, -105.014123',
                        clear: '39.645813, -105.014171',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunkers',
                        front: '39.644626, -105.013621',
                        clear: '39.644248, -105.013647',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.643801, -105.013737',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: '39.645664, -105.013655',
                        clear: '39.644942, -105.013753',
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 6,
                name: '7th Hole',
                yards: 210,
                par: 3,
                handicap: 15,
                green: {
                    front: '39.645946, -105.015639',
                    center: '39.646089, -105.015598',
                    back: '39.646239, -105.015517'
                },
                hazards: [
                    {
                        name: 'water hazard',
                        front: '39.646295, -105.015572',
                        clear: false,
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 7,
                name: '8th Hole',
                yards: 414,
                par: 4,
                handicap: 5,
                green: {
                    front: '39.649706, -105.014921',
                    center: '39.649817, -105.014881',
                    back: '39.649901, -105.014756'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.648687, -105.015382',
                        clear: '39.648782, -105.015351',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.648865, -105.015027',
                        clear: '39.648986, -105.014979',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.649717, -105.014769',
                        clear: '39.649822, -105.014705',
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: false,
                        clear: '39.647828, -105.015487',
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 8,
                name: '9th Hole',
                yards: 550,
                par: 5,
                handicap: 1,
                green: {
                    front: '39.646019, -105.016199',
                    center: '39.645912, -105.016171',
                    back: '39.645793, -105.016097'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.647227, -105.016477',
                        clear: '39.647098, -105.016515',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.648300, -105.015814',
                        clear: '39.648211, -105.015825',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunkers',
                        front: '39.648131, -105.015887',
                        clear: '39.647885, -105.016044',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.646060, -105.016091',
                        clear: '39.645912, -105.016055',
                        type: 'greenside bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.645777, -105.016228',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.645694, -105.016103',
                        clear: false,
                        type: 'greenside bunker'
                    }
                ]
            },
            {
                id: 9,
                name: '10th Hole',
                yards: 332,
                par: 4,
                handicap: 17,
                green: {
                    front: '39.646039, -105.012789',
                    center: '39.646169, -105.012821',
                    back: '39.646294, -105.012874'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.645730, -105.012513',
                    clear: '39.645799, -105.012513',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.645938, -105.012872',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: '39.646079, -105.013073',
                    clear: false,
                    type: 'water hazard'
                },
                {
                    name: 'water hazard',
                    front: '39.645287, -105.013154',
                    clear: '39.645744, -105.013283',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 10,
                name: '11th Hole',
                yards: 436,
                par: 4,
                handicap: 9,
                green: {
                    front: '39.649294, -105.010343',
                    center: '39.649466, -105.010385',
                    back: '39.649608, -105.010342'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.648274, -105.010134',
                    clear: '39.648413, -105.010116',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.649186, -105.010448',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: '39.648608, -105.010778',
                    clear: '39.649135, -105.010511',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 11,
                name: '12th Hole',
                yards: 402,
                par: 4,
                handicap: 7,
                green: {
                    front: '39.646760, -105.011644',
                    center: '39.646669, -105.011686',
                    back: '39.646564, -105.011804'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.647676, -105.011019',
                    clear: '39.647543, -105.011059',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.646928, -105.011707',
                    clear: '39.646825, -105.011821',
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.648571, -105.010960',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 12,
                name: '13th Hole',
                yards: 348,
                par: 4,
                handicap: 3,
                green: {
                    front: '39.648865, -105.011928',
                    center: '39.648995, -105.011856',
                    back: '39.649082, -105.011748'
                },
                hazards: [{
                    name: 'sand bunkers',
                    front: '39.648399, -105.011889',
                    clear: '39.648821, -105.011849',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648701, -105.012410',
                    clear: false,
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648894, -105.011684',
                    clear: '39.648973, -105.011650',
                    type: 'greenside bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648911, -105.012033',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.648172, -105.012193',
                    type: 'water hazard'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.647775, -105.012030',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 13,
                name: '14th Hole',
                yards: 223,
                par: 3,
                handicap: 11,
                green: {
                    front: '39.647233, -105.012934',
                    center: '39.647125, -105.012893',
                    back: '39.646989, -105.012802'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.647152, -105.013098',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: '39.647749, -105.012862',
                        clear: '39.647349, -105.012850',
                        type: 'water hazard'
                    },
                    {
                        name: 'water hazard',
                        front: '39.646883, -105.012870',
                        clear: false,
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 14,
                name: '15th Hole',
                yards: 617,
                par: 5,
                handicap: 13,
                green: {
                    front: '39.644030, -105.013801',
                    center: '39.643937, -105.013778',
                    back: '39.643842, -105.013669'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.645933, -105.014123',
                        clear: '39.645813, -105.014171',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunkers',
                        front: '39.644626, -105.013621',
                        clear: '39.644248, -105.013647',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.643801, -105.013737',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: '39.645664, -105.013655',
                        clear: '39.644942, -105.013753',
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 15,
                name: '16th Hole',
                yards: 210,
                par: 3,
                handicap: 15,
                green: {
                    front: '39.645946, -105.015639',
                    center: '39.646089, -105.015598',
                    back: '39.646239, -105.015517'
                },
                hazards: [
                    {
                        name: 'water hazard',
                        front: '39.646295, -105.015572',
                        clear: false,
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 16,
                name: '17th Hole',
                yards: 414,
                par: 4,
                handicap: 5,
                green: {
                    front: '39.649706, -105.014921',
                    center: '39.649817, -105.014881',
                    back: '39.649901, -105.014756'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.648687, -105.015382',
                        clear: '39.648782, -105.015351',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.648865, -105.015027',
                        clear: '39.648986, -105.014979',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.649717, -105.014769',
                        clear: '39.649822, -105.014705',
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: false,
                        clear: '39.647828, -105.015487',
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 17,
                name: '18th Hole',
                yards: 550,
                par: 5,
                handicap: 1,
                green: {
                    front: '39.646019, -105.016199',
                    center: '39.645912, -105.016171',
                    back: '39.645793, -105.016097'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.647227, -105.016477',
                        clear: '39.647098, -105.016515',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.648300, -105.015814',
                        clear: '39.648211, -105.015825',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunkers',
                        front: '39.648131, -105.015887',
                        clear: '39.647885, -105.016044',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.646060, -105.016091',
                        clear: '39.645912, -105.016055',
                        type: 'greenside bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.645777, -105.016228',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.645694, -105.016103',
                        clear: false,
                        type: 'greenside bunker'
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'Broken Tee Golf Club',
        location: 'Sheridan, CO',
        par: 72,
        rating: 71.7,
        slope: 130,
        yards: 6995,
        holes: [
            {
                id: 0,
                name: '1st Hole',
                yards: 332,
                par: 4,
                handicap: 17,
                green: {
                    front: '39.646039, -105.012789',
                    center: '39.646169, -105.012821',
                    back: '39.646294, -105.012874'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.645730, -105.012513',
                    clear: '39.645799, -105.012513',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.645938, -105.012872',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: '39.646079, -105.013073',
                    clear: false,
                    type: 'water hazard'
                },
                {
                    name: 'water hazard',
                    front: '39.645287, -105.013154',
                    clear: '39.645744, -105.013283',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 1,
                name: '2nd Hole',
                yards: 436,
                par: 4,
                handicap: 9,
                green: {
                    front: '39.649294, -105.010343',
                    center: '39.649466, -105.010385',
                    back: '39.649608, -105.010342'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.648274, -105.010134',
                    clear: '39.648413, -105.010116',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.649186, -105.010448',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: '39.648608, -105.010778',
                    clear: '39.649135, -105.010511',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 2,
                name: '3rd Hole',
                yards: 402,
                par: 4,
                handicap: 7,
                green: {
                    front: '39.646760, -105.011644',
                    center: '39.646669, -105.011686',
                    back: '39.646564, -105.011804'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.647676, -105.011019',
                    clear: '39.647543, -105.011059',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.646928, -105.011707',
                    clear: '39.646825, -105.011821',
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.648571, -105.010960',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 3,
                name: '4th Hole',
                yards: 348,
                par: 4,
                handicap: 3,
                green: {
                    front: '39.648865, -105.011928',
                    center: '39.648995, -105.011856',
                    back: '39.649082, -105.011748'
                },
                hazards: [{
                    name: 'sand bunkers',
                    front: '39.648399, -105.011889',
                    clear: '39.648821, -105.011849',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648701, -105.012410',
                    clear: false,
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648894, -105.011684',
                    clear: '39.648973, -105.011650',
                    type: 'greenside bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648911, -105.012033',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.648172, -105.012193',
                    type: 'water hazard'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.647775, -105.012030',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 4,
                name: '5th Hole',
                yards: 223,
                par: 3,
                handicap: 11,
                green: {
                    front: '39.647233, -105.012934',
                    center: '39.647125, -105.012893',
                    back: '39.646989, -105.012802'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.647152, -105.013098',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: '39.647749, -105.012862',
                        clear: '39.647349, -105.012850',
                        type: 'water hazard'
                    },
                    {
                        name: 'water hazard',
                        front: '39.646883, -105.012870',
                        clear: false,
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 5,
                name: '6th Hole',
                yards: 617,
                par: 5,
                handicap: 13,
                green: {
                    front: '39.644030, -105.013801',
                    center: '39.643937, -105.013778',
                    back: '39.643842, -105.013669'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.645933, -105.014123',
                        clear: '39.645813, -105.014171',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunkers',
                        front: '39.644626, -105.013621',
                        clear: '39.644248, -105.013647',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.643801, -105.013737',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: '39.645664, -105.013655',
                        clear: '39.644942, -105.013753',
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 6,
                name: '7th Hole',
                yards: 210,
                par: 3,
                handicap: 15,
                green: {
                    front: '39.645946, -105.015639',
                    center: '39.646089, -105.015598',
                    back: '39.646239, -105.015517'
                },
                hazards: [
                    {
                        name: 'water hazard',
                        front: '39.646295, -105.015572',
                        clear: false,
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 7,
                name: '8th Hole',
                yards: 414,
                par: 4,
                handicap: 5,
                green: {
                    front: '39.649706, -105.014921',
                    center: '39.649817, -105.014881',
                    back: '39.649901, -105.014756'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.648687, -105.015382',
                        clear: '39.648782, -105.015351',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.648865, -105.015027',
                        clear: '39.648986, -105.014979',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.649717, -105.014769',
                        clear: '39.649822, -105.014705',
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: false,
                        clear: '39.647828, -105.015487',
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 8,
                name: '9th Hole',
                yards: 550,
                par: 5,
                handicap: 1,
                green: {
                    front: '39.646019, -105.016199',
                    center: '39.645912, -105.016171',
                    back: '39.645793, -105.016097'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.647227, -105.016477',
                        clear: '39.647098, -105.016515',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.648300, -105.015814',
                        clear: '39.648211, -105.015825',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunkers',
                        front: '39.648131, -105.015887',
                        clear: '39.647885, -105.016044',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.646060, -105.016091',
                        clear: '39.645912, -105.016055',
                        type: 'greenside bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.645777, -105.016228',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.645694, -105.016103',
                        clear: false,
                        type: 'greenside bunker'
                    }
                ]
            },
            {
                id: 9,
                name: '10th Hole',
                yards: 332,
                par: 4,
                handicap: 17,
                green: {
                    front: '39.646039, -105.012789',
                    center: '39.646169, -105.012821',
                    back: '39.646294, -105.012874'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.645730, -105.012513',
                    clear: '39.645799, -105.012513',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.645938, -105.012872',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: '39.646079, -105.013073',
                    clear: false,
                    type: 'water hazard'
                },
                {
                    name: 'water hazard',
                    front: '39.645287, -105.013154',
                    clear: '39.645744, -105.013283',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 10,
                name: '11th Hole',
                yards: 436,
                par: 4,
                handicap: 9,
                green: {
                    front: '39.649294, -105.010343',
                    center: '39.649466, -105.010385',
                    back: '39.649608, -105.010342'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.648274, -105.010134',
                    clear: '39.648413, -105.010116',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.649186, -105.010448',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: '39.648608, -105.010778',
                    clear: '39.649135, -105.010511',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 11,
                name: '12th Hole',
                yards: 402,
                par: 4,
                handicap: 7,
                green: {
                    front: '39.646760, -105.011644',
                    center: '39.646669, -105.011686',
                    back: '39.646564, -105.011804'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.647676, -105.011019',
                    clear: '39.647543, -105.011059',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.646928, -105.011707',
                    clear: '39.646825, -105.011821',
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.648571, -105.010960',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 12,
                name: '13th Hole',
                yards: 348,
                par: 4,
                handicap: 3,
                green: {
                    front: '39.648865, -105.011928',
                    center: '39.648995, -105.011856',
                    back: '39.649082, -105.011748'
                },
                hazards: [{
                    name: 'sand bunkers',
                    front: '39.648399, -105.011889',
                    clear: '39.648821, -105.011849',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648701, -105.012410',
                    clear: false,
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648894, -105.011684',
                    clear: '39.648973, -105.011650',
                    type: 'greenside bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648911, -105.012033',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.648172, -105.012193',
                    type: 'water hazard'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.647775, -105.012030',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 13,
                name: '14th Hole',
                yards: 223,
                par: 3,
                handicap: 11,
                green: {
                    front: '39.647233, -105.012934',
                    center: '39.647125, -105.012893',
                    back: '39.646989, -105.012802'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.647152, -105.013098',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: '39.647749, -105.012862',
                        clear: '39.647349, -105.012850',
                        type: 'water hazard'
                    },
                    {
                        name: 'water hazard',
                        front: '39.646883, -105.012870',
                        clear: false,
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 14,
                name: '15th Hole',
                yards: 617,
                par: 5,
                handicap: 13,
                green: {
                    front: '39.644030, -105.013801',
                    center: '39.643937, -105.013778',
                    back: '39.643842, -105.013669'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.645933, -105.014123',
                        clear: '39.645813, -105.014171',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunkers',
                        front: '39.644626, -105.013621',
                        clear: '39.644248, -105.013647',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.643801, -105.013737',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: '39.645664, -105.013655',
                        clear: '39.644942, -105.013753',
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 15,
                name: '16th Hole',
                yards: 210,
                par: 3,
                handicap: 15,
                green: {
                    front: '39.645946, -105.015639',
                    center: '39.646089, -105.015598',
                    back: '39.646239, -105.015517'
                },
                hazards: [
                    {
                        name: 'water hazard',
                        front: '39.646295, -105.015572',
                        clear: false,
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 16,
                name: '17th Hole',
                yards: 414,
                par: 4,
                handicap: 5,
                green: {
                    front: '39.649706, -105.014921',
                    center: '39.649817, -105.014881',
                    back: '39.649901, -105.014756'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.648687, -105.015382',
                        clear: '39.648782, -105.015351',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.648865, -105.015027',
                        clear: '39.648986, -105.014979',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.649717, -105.014769',
                        clear: '39.649822, -105.014705',
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: false,
                        clear: '39.647828, -105.015487',
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 17,
                name: '18th Hole',
                yards: 550,
                par: 5,
                handicap: 1,
                green: {
                    front: '39.646019, -105.016199',
                    center: '39.645912, -105.016171',
                    back: '39.645793, -105.016097'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.647227, -105.016477',
                        clear: '39.647098, -105.016515',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.648300, -105.015814',
                        clear: '39.648211, -105.015825',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunkers',
                        front: '39.648131, -105.015887',
                        clear: '39.647885, -105.016044',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.646060, -105.016091',
                        clear: '39.645912, -105.016055',
                        type: 'greenside bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.645777, -105.016228',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.645694, -105.016103',
                        clear: false,
                        type: 'greenside bunker'
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        name: 'Broken Tee Golf Club',
        location: 'Sheridan, CO',
        par: 72,
        rating: 71.7,
        slope: 130,
        yards: 6995,
        holes: [
            {
                id: 0,
                name: '1st Hole',
                yards: 332,
                par: 4,
                handicap: 17,
                green: {
                    front: '39.646039, -105.012789',
                    center: '39.646169, -105.012821',
                    back: '39.646294, -105.012874'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.645730, -105.012513',
                    clear: '39.645799, -105.012513',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.645938, -105.012872',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: '39.646079, -105.013073',
                    clear: false,
                    type: 'water hazard'
                },
                {
                    name: 'water hazard',
                    front: '39.645287, -105.013154',
                    clear: '39.645744, -105.013283',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 1,
                name: '2nd Hole',
                yards: 436,
                par: 4,
                handicap: 9,
                green: {
                    front: '39.649294, -105.010343',
                    center: '39.649466, -105.010385',
                    back: '39.649608, -105.010342'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.648274, -105.010134',
                    clear: '39.648413, -105.010116',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.649186, -105.010448',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: '39.648608, -105.010778',
                    clear: '39.649135, -105.010511',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 2,
                name: '3rd Hole',
                yards: 402,
                par: 4,
                handicap: 7,
                green: {
                    front: '39.646760, -105.011644',
                    center: '39.646669, -105.011686',
                    back: '39.646564, -105.011804'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.647676, -105.011019',
                    clear: '39.647543, -105.011059',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.646928, -105.011707',
                    clear: '39.646825, -105.011821',
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.648571, -105.010960',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 3,
                name: '4th Hole',
                yards: 348,
                par: 4,
                handicap: 3,
                green: {
                    front: '39.648865, -105.011928',
                    center: '39.648995, -105.011856',
                    back: '39.649082, -105.011748'
                },
                hazards: [{
                    name: 'sand bunkers',
                    front: '39.648399, -105.011889',
                    clear: '39.648821, -105.011849',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648701, -105.012410',
                    clear: false,
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648894, -105.011684',
                    clear: '39.648973, -105.011650',
                    type: 'greenside bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648911, -105.012033',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.648172, -105.012193',
                    type: 'water hazard'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.647775, -105.012030',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 4,
                name: '5th Hole',
                yards: 223,
                par: 3,
                handicap: 11,
                green: {
                    front: '39.647233, -105.012934',
                    center: '39.647125, -105.012893',
                    back: '39.646989, -105.012802'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.647152, -105.013098',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: '39.647749, -105.012862',
                        clear: '39.647349, -105.012850',
                        type: 'water hazard'
                    },
                    {
                        name: 'water hazard',
                        front: '39.646883, -105.012870',
                        clear: false,
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 5,
                name: '6th Hole',
                yards: 617,
                par: 5,
                handicap: 13,
                green: {
                    front: '39.644030, -105.013801',
                    center: '39.643937, -105.013778',
                    back: '39.643842, -105.013669'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.645933, -105.014123',
                        clear: '39.645813, -105.014171',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunkers',
                        front: '39.644626, -105.013621',
                        clear: '39.644248, -105.013647',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.643801, -105.013737',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: '39.645664, -105.013655',
                        clear: '39.644942, -105.013753',
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 6,
                name: '7th Hole',
                yards: 210,
                par: 3,
                handicap: 15,
                green: {
                    front: '39.645946, -105.015639',
                    center: '39.646089, -105.015598',
                    back: '39.646239, -105.015517'
                },
                hazards: [
                    {
                        name: 'water hazard',
                        front: '39.646295, -105.015572',
                        clear: false,
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 7,
                name: '8th Hole',
                yards: 414,
                par: 4,
                handicap: 5,
                green: {
                    front: '39.649706, -105.014921',
                    center: '39.649817, -105.014881',
                    back: '39.649901, -105.014756'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.648687, -105.015382',
                        clear: '39.648782, -105.015351',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.648865, -105.015027',
                        clear: '39.648986, -105.014979',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.649717, -105.014769',
                        clear: '39.649822, -105.014705',
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: false,
                        clear: '39.647828, -105.015487',
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 8,
                name: '9th Hole',
                yards: 550,
                par: 5,
                handicap: 1,
                green: {
                    front: '39.646019, -105.016199',
                    center: '39.645912, -105.016171',
                    back: '39.645793, -105.016097'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.647227, -105.016477',
                        clear: '39.647098, -105.016515',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.648300, -105.015814',
                        clear: '39.648211, -105.015825',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunkers',
                        front: '39.648131, -105.015887',
                        clear: '39.647885, -105.016044',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.646060, -105.016091',
                        clear: '39.645912, -105.016055',
                        type: 'greenside bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.645777, -105.016228',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.645694, -105.016103',
                        clear: false,
                        type: 'greenside bunker'
                    }
                ]
            },
            {
                id: 9,
                name: '10th Hole',
                yards: 332,
                par: 4,
                handicap: 17,
                green: {
                    front: '39.646039, -105.012789',
                    center: '39.646169, -105.012821',
                    back: '39.646294, -105.012874'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.645730, -105.012513',
                    clear: '39.645799, -105.012513',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.645938, -105.012872',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: '39.646079, -105.013073',
                    clear: false,
                    type: 'water hazard'
                },
                {
                    name: 'water hazard',
                    front: '39.645287, -105.013154',
                    clear: '39.645744, -105.013283',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 10,
                name: '11th Hole',
                yards: 436,
                par: 4,
                handicap: 9,
                green: {
                    front: '39.649294, -105.010343',
                    center: '39.649466, -105.010385',
                    back: '39.649608, -105.010342'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.648274, -105.010134',
                    clear: '39.648413, -105.010116',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.649186, -105.010448',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: '39.648608, -105.010778',
                    clear: '39.649135, -105.010511',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 11,
                name: '12th Hole',
                yards: 402,
                par: 4,
                handicap: 7,
                green: {
                    front: '39.646760, -105.011644',
                    center: '39.646669, -105.011686',
                    back: '39.646564, -105.011804'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.647676, -105.011019',
                    clear: '39.647543, -105.011059',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.646928, -105.011707',
                    clear: '39.646825, -105.011821',
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.648571, -105.010960',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 12,
                name: '13th Hole',
                yards: 348,
                par: 4,
                handicap: 3,
                green: {
                    front: '39.648865, -105.011928',
                    center: '39.648995, -105.011856',
                    back: '39.649082, -105.011748'
                },
                hazards: [{
                    name: 'sand bunkers',
                    front: '39.648399, -105.011889',
                    clear: '39.648821, -105.011849',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648701, -105.012410',
                    clear: false,
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648894, -105.011684',
                    clear: '39.648973, -105.011650',
                    type: 'greenside bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648911, -105.012033',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.648172, -105.012193',
                    type: 'water hazard'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.647775, -105.012030',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 13,
                name: '14th Hole',
                yards: 223,
                par: 3,
                handicap: 11,
                green: {
                    front: '39.647233, -105.012934',
                    center: '39.647125, -105.012893',
                    back: '39.646989, -105.012802'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.647152, -105.013098',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: '39.647749, -105.012862',
                        clear: '39.647349, -105.012850',
                        type: 'water hazard'
                    },
                    {
                        name: 'water hazard',
                        front: '39.646883, -105.012870',
                        clear: false,
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 14,
                name: '15th Hole',
                yards: 617,
                par: 5,
                handicap: 13,
                green: {
                    front: '39.644030, -105.013801',
                    center: '39.643937, -105.013778',
                    back: '39.643842, -105.013669'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.645933, -105.014123',
                        clear: '39.645813, -105.014171',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunkers',
                        front: '39.644626, -105.013621',
                        clear: '39.644248, -105.013647',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.643801, -105.013737',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: '39.645664, -105.013655',
                        clear: '39.644942, -105.013753',
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 15,
                name: '16th Hole',
                yards: 210,
                par: 3,
                handicap: 15,
                green: {
                    front: '39.645946, -105.015639',
                    center: '39.646089, -105.015598',
                    back: '39.646239, -105.015517'
                },
                hazards: [
                    {
                        name: 'water hazard',
                        front: '39.646295, -105.015572',
                        clear: false,
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 16,
                name: '17th Hole',
                yards: 414,
                par: 4,
                handicap: 5,
                green: {
                    front: '39.649706, -105.014921',
                    center: '39.649817, -105.014881',
                    back: '39.649901, -105.014756'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.648687, -105.015382',
                        clear: '39.648782, -105.015351',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.648865, -105.015027',
                        clear: '39.648986, -105.014979',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.649717, -105.014769',
                        clear: '39.649822, -105.014705',
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: false,
                        clear: '39.647828, -105.015487',
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 17,
                name: '18th Hole',
                yards: 550,
                par: 5,
                handicap: 1,
                green: {
                    front: '39.646019, -105.016199',
                    center: '39.645912, -105.016171',
                    back: '39.645793, -105.016097'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.647227, -105.016477',
                        clear: '39.647098, -105.016515',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.648300, -105.015814',
                        clear: '39.648211, -105.015825',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunkers',
                        front: '39.648131, -105.015887',
                        clear: '39.647885, -105.016044',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.646060, -105.016091',
                        clear: '39.645912, -105.016055',
                        type: 'greenside bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.645777, -105.016228',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.645694, -105.016103',
                        clear: false,
                        type: 'greenside bunker'
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        name: 'Broken Tee Golf Club',
        location: 'Sheridan, CO',
        par: 72,
        rating: 71.7,
        slope: 130,
        yards: 6995,
        holes: [
            {
                id: 0,
                name: '1st Hole',
                yards: 332,
                par: 4,
                handicap: 17,
                green: {
                    front: '39.646039, -105.012789',
                    center: '39.646169, -105.012821',
                    back: '39.646294, -105.012874'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.645730, -105.012513',
                    clear: '39.645799, -105.012513',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.645938, -105.012872',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: '39.646079, -105.013073',
                    clear: false,
                    type: 'water hazard'
                },
                {
                    name: 'water hazard',
                    front: '39.645287, -105.013154',
                    clear: '39.645744, -105.013283',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 1,
                name: '2nd Hole',
                yards: 436,
                par: 4,
                handicap: 9,
                green: {
                    front: '39.649294, -105.010343',
                    center: '39.649466, -105.010385',
                    back: '39.649608, -105.010342'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.648274, -105.010134',
                    clear: '39.648413, -105.010116',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.649186, -105.010448',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: '39.648608, -105.010778',
                    clear: '39.649135, -105.010511',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 2,
                name: '3rd Hole',
                yards: 402,
                par: 4,
                handicap: 7,
                green: {
                    front: '39.646760, -105.011644',
                    center: '39.646669, -105.011686',
                    back: '39.646564, -105.011804'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.647676, -105.011019',
                    clear: '39.647543, -105.011059',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.646928, -105.011707',
                    clear: '39.646825, -105.011821',
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.648571, -105.010960',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 3,
                name: '4th Hole',
                yards: 348,
                par: 4,
                handicap: 3,
                green: {
                    front: '39.648865, -105.011928',
                    center: '39.648995, -105.011856',
                    back: '39.649082, -105.011748'
                },
                hazards: [{
                    name: 'sand bunkers',
                    front: '39.648399, -105.011889',
                    clear: '39.648821, -105.011849',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648701, -105.012410',
                    clear: false,
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648894, -105.011684',
                    clear: '39.648973, -105.011650',
                    type: 'greenside bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648911, -105.012033',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.648172, -105.012193',
                    type: 'water hazard'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.647775, -105.012030',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 4,
                name: '5th Hole',
                yards: 223,
                par: 3,
                handicap: 11,
                green: {
                    front: '39.647233, -105.012934',
                    center: '39.647125, -105.012893',
                    back: '39.646989, -105.012802'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.647152, -105.013098',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: '39.647749, -105.012862',
                        clear: '39.647349, -105.012850',
                        type: 'water hazard'
                    },
                    {
                        name: 'water hazard',
                        front: '39.646883, -105.012870',
                        clear: false,
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 5,
                name: '6th Hole',
                yards: 617,
                par: 5,
                handicap: 13,
                green: {
                    front: '39.644030, -105.013801',
                    center: '39.643937, -105.013778',
                    back: '39.643842, -105.013669'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.645933, -105.014123',
                        clear: '39.645813, -105.014171',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunkers',
                        front: '39.644626, -105.013621',
                        clear: '39.644248, -105.013647',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.643801, -105.013737',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: '39.645664, -105.013655',
                        clear: '39.644942, -105.013753',
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 6,
                name: '7th Hole',
                yards: 210,
                par: 3,
                handicap: 15,
                green: {
                    front: '39.645946, -105.015639',
                    center: '39.646089, -105.015598',
                    back: '39.646239, -105.015517'
                },
                hazards: [
                    {
                        name: 'water hazard',
                        front: '39.646295, -105.015572',
                        clear: false,
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 7,
                name: '8th Hole',
                yards: 414,
                par: 4,
                handicap: 5,
                green: {
                    front: '39.649706, -105.014921',
                    center: '39.649817, -105.014881',
                    back: '39.649901, -105.014756'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.648687, -105.015382',
                        clear: '39.648782, -105.015351',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.648865, -105.015027',
                        clear: '39.648986, -105.014979',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.649717, -105.014769',
                        clear: '39.649822, -105.014705',
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: false,
                        clear: '39.647828, -105.015487',
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 8,
                name: '9th Hole',
                yards: 550,
                par: 5,
                handicap: 1,
                green: {
                    front: '39.646019, -105.016199',
                    center: '39.645912, -105.016171',
                    back: '39.645793, -105.016097'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.647227, -105.016477',
                        clear: '39.647098, -105.016515',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.648300, -105.015814',
                        clear: '39.648211, -105.015825',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunkers',
                        front: '39.648131, -105.015887',
                        clear: '39.647885, -105.016044',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.646060, -105.016091',
                        clear: '39.645912, -105.016055',
                        type: 'greenside bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.645777, -105.016228',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.645694, -105.016103',
                        clear: false,
                        type: 'greenside bunker'
                    }
                ]
            },
            {
                id: 9,
                name: '10th Hole',
                yards: 332,
                par: 4,
                handicap: 17,
                green: {
                    front: '39.646039, -105.012789',
                    center: '39.646169, -105.012821',
                    back: '39.646294, -105.012874'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.645730, -105.012513',
                    clear: '39.645799, -105.012513',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.645938, -105.012872',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: '39.646079, -105.013073',
                    clear: false,
                    type: 'water hazard'
                },
                {
                    name: 'water hazard',
                    front: '39.645287, -105.013154',
                    clear: '39.645744, -105.013283',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 10,
                name: '11th Hole',
                yards: 436,
                par: 4,
                handicap: 9,
                green: {
                    front: '39.649294, -105.010343',
                    center: '39.649466, -105.010385',
                    back: '39.649608, -105.010342'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.648274, -105.010134',
                    clear: '39.648413, -105.010116',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.649186, -105.010448',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: '39.648608, -105.010778',
                    clear: '39.649135, -105.010511',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 11,
                name: '12th Hole',
                yards: 402,
                par: 4,
                handicap: 7,
                green: {
                    front: '39.646760, -105.011644',
                    center: '39.646669, -105.011686',
                    back: '39.646564, -105.011804'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.647676, -105.011019',
                    clear: '39.647543, -105.011059',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.646928, -105.011707',
                    clear: '39.646825, -105.011821',
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.648571, -105.010960',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 12,
                name: '13th Hole',
                yards: 348,
                par: 4,
                handicap: 3,
                green: {
                    front: '39.648865, -105.011928',
                    center: '39.648995, -105.011856',
                    back: '39.649082, -105.011748'
                },
                hazards: [{
                    name: 'sand bunkers',
                    front: '39.648399, -105.011889',
                    clear: '39.648821, -105.011849',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648701, -105.012410',
                    clear: false,
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648894, -105.011684',
                    clear: '39.648973, -105.011650',
                    type: 'greenside bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648911, -105.012033',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.648172, -105.012193',
                    type: 'water hazard'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.647775, -105.012030',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 13,
                name: '14th Hole',
                yards: 223,
                par: 3,
                handicap: 11,
                green: {
                    front: '39.647233, -105.012934',
                    center: '39.647125, -105.012893',
                    back: '39.646989, -105.012802'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.647152, -105.013098',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: '39.647749, -105.012862',
                        clear: '39.647349, -105.012850',
                        type: 'water hazard'
                    },
                    {
                        name: 'water hazard',
                        front: '39.646883, -105.012870',
                        clear: false,
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 14,
                name: '15th Hole',
                yards: 617,
                par: 5,
                handicap: 13,
                green: {
                    front: '39.644030, -105.013801',
                    center: '39.643937, -105.013778',
                    back: '39.643842, -105.013669'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.645933, -105.014123',
                        clear: '39.645813, -105.014171',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunkers',
                        front: '39.644626, -105.013621',
                        clear: '39.644248, -105.013647',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.643801, -105.013737',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: '39.645664, -105.013655',
                        clear: '39.644942, -105.013753',
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 15,
                name: '16th Hole',
                yards: 210,
                par: 3,
                handicap: 15,
                green: {
                    front: '39.645946, -105.015639',
                    center: '39.646089, -105.015598',
                    back: '39.646239, -105.015517'
                },
                hazards: [
                    {
                        name: 'water hazard',
                        front: '39.646295, -105.015572',
                        clear: false,
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 16,
                name: '17th Hole',
                yards: 414,
                par: 4,
                handicap: 5,
                green: {
                    front: '39.649706, -105.014921',
                    center: '39.649817, -105.014881',
                    back: '39.649901, -105.014756'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.648687, -105.015382',
                        clear: '39.648782, -105.015351',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.648865, -105.015027',
                        clear: '39.648986, -105.014979',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.649717, -105.014769',
                        clear: '39.649822, -105.014705',
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: false,
                        clear: '39.647828, -105.015487',
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 17,
                name: '18th Hole',
                yards: 550,
                par: 5,
                handicap: 1,
                green: {
                    front: '39.646019, -105.016199',
                    center: '39.645912, -105.016171',
                    back: '39.645793, -105.016097'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.647227, -105.016477',
                        clear: '39.647098, -105.016515',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.648300, -105.015814',
                        clear: '39.648211, -105.015825',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunkers',
                        front: '39.648131, -105.015887',
                        clear: '39.647885, -105.016044',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.646060, -105.016091',
                        clear: '39.645912, -105.016055',
                        type: 'greenside bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.645777, -105.016228',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.645694, -105.016103',
                        clear: false,
                        type: 'greenside bunker'
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        name: 'Broken Tee Golf Club',
        location: 'Sheridan, CO',
        par: 72,
        rating: 71.7,
        slope: 130,
        yards: 6995,
        holes: [
            {
                id: 0,
                name: '1st Hole',
                yards: 332,
                par: 4,
                handicap: 17,
                green: {
                    front: '39.646039, -105.012789',
                    center: '39.646169, -105.012821',
                    back: '39.646294, -105.012874'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.645730, -105.012513',
                    clear: '39.645799, -105.012513',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.645938, -105.012872',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: '39.646079, -105.013073',
                    clear: false,
                    type: 'water hazard'
                },
                {
                    name: 'water hazard',
                    front: '39.645287, -105.013154',
                    clear: '39.645744, -105.013283',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 1,
                name: '2nd Hole',
                yards: 436,
                par: 4,
                handicap: 9,
                green: {
                    front: '39.649294, -105.010343',
                    center: '39.649466, -105.010385',
                    back: '39.649608, -105.010342'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.648274, -105.010134',
                    clear: '39.648413, -105.010116',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.649186, -105.010448',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: '39.648608, -105.010778',
                    clear: '39.649135, -105.010511',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 2,
                name: '3rd Hole',
                yards: 402,
                par: 4,
                handicap: 7,
                green: {
                    front: '39.646760, -105.011644',
                    center: '39.646669, -105.011686',
                    back: '39.646564, -105.011804'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.647676, -105.011019',
                    clear: '39.647543, -105.011059',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.646928, -105.011707',
                    clear: '39.646825, -105.011821',
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.648571, -105.010960',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 3,
                name: '4th Hole',
                yards: 348,
                par: 4,
                handicap: 3,
                green: {
                    front: '39.648865, -105.011928',
                    center: '39.648995, -105.011856',
                    back: '39.649082, -105.011748'
                },
                hazards: [{
                    name: 'sand bunkers',
                    front: '39.648399, -105.011889',
                    clear: '39.648821, -105.011849',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648701, -105.012410',
                    clear: false,
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648894, -105.011684',
                    clear: '39.648973, -105.011650',
                    type: 'greenside bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648911, -105.012033',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.648172, -105.012193',
                    type: 'water hazard'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.647775, -105.012030',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 4,
                name: '5th Hole',
                yards: 223,
                par: 3,
                handicap: 11,
                green: {
                    front: '39.647233, -105.012934',
                    center: '39.647125, -105.012893',
                    back: '39.646989, -105.012802'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.647152, -105.013098',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: '39.647749, -105.012862',
                        clear: '39.647349, -105.012850',
                        type: 'water hazard'
                    },
                    {
                        name: 'water hazard',
                        front: '39.646883, -105.012870',
                        clear: false,
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 5,
                name: '6th Hole',
                yards: 617,
                par: 5,
                handicap: 13,
                green: {
                    front: '39.644030, -105.013801',
                    center: '39.643937, -105.013778',
                    back: '39.643842, -105.013669'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.645933, -105.014123',
                        clear: '39.645813, -105.014171',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunkers',
                        front: '39.644626, -105.013621',
                        clear: '39.644248, -105.013647',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.643801, -105.013737',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: '39.645664, -105.013655',
                        clear: '39.644942, -105.013753',
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 6,
                name: '7th Hole',
                yards: 210,
                par: 3,
                handicap: 15,
                green: {
                    front: '39.645946, -105.015639',
                    center: '39.646089, -105.015598',
                    back: '39.646239, -105.015517'
                },
                hazards: [
                    {
                        name: 'water hazard',
                        front: '39.646295, -105.015572',
                        clear: false,
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 7,
                name: '8th Hole',
                yards: 414,
                par: 4,
                handicap: 5,
                green: {
                    front: '39.649706, -105.014921',
                    center: '39.649817, -105.014881',
                    back: '39.649901, -105.014756'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.648687, -105.015382',
                        clear: '39.648782, -105.015351',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.648865, -105.015027',
                        clear: '39.648986, -105.014979',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.649717, -105.014769',
                        clear: '39.649822, -105.014705',
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: false,
                        clear: '39.647828, -105.015487',
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 8,
                name: '9th Hole',
                yards: 550,
                par: 5,
                handicap: 1,
                green: {
                    front: '39.646019, -105.016199',
                    center: '39.645912, -105.016171',
                    back: '39.645793, -105.016097'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.647227, -105.016477',
                        clear: '39.647098, -105.016515',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.648300, -105.015814',
                        clear: '39.648211, -105.015825',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunkers',
                        front: '39.648131, -105.015887',
                        clear: '39.647885, -105.016044',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.646060, -105.016091',
                        clear: '39.645912, -105.016055',
                        type: 'greenside bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.645777, -105.016228',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.645694, -105.016103',
                        clear: false,
                        type: 'greenside bunker'
                    }
                ]
            },
            {
                id: 9,
                name: '10th Hole',
                yards: 332,
                par: 4,
                handicap: 17,
                green: {
                    front: '39.646039, -105.012789',
                    center: '39.646169, -105.012821',
                    back: '39.646294, -105.012874'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.645730, -105.012513',
                    clear: '39.645799, -105.012513',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.645938, -105.012872',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: '39.646079, -105.013073',
                    clear: false,
                    type: 'water hazard'
                },
                {
                    name: 'water hazard',
                    front: '39.645287, -105.013154',
                    clear: '39.645744, -105.013283',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 10,
                name: '11th Hole',
                yards: 436,
                par: 4,
                handicap: 9,
                green: {
                    front: '39.649294, -105.010343',
                    center: '39.649466, -105.010385',
                    back: '39.649608, -105.010342'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.648274, -105.010134',
                    clear: '39.648413, -105.010116',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.649186, -105.010448',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: '39.648608, -105.010778',
                    clear: '39.649135, -105.010511',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 11,
                name: '12th Hole',
                yards: 402,
                par: 4,
                handicap: 7,
                green: {
                    front: '39.646760, -105.011644',
                    center: '39.646669, -105.011686',
                    back: '39.646564, -105.011804'
                },
                hazards: [{
                    name: 'sand bunker',
                    front: '39.647676, -105.011019',
                    clear: '39.647543, -105.011059',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.646928, -105.011707',
                    clear: '39.646825, -105.011821',
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.648571, -105.010960',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 12,
                name: '13th Hole',
                yards: 348,
                par: 4,
                handicap: 3,
                green: {
                    front: '39.648865, -105.011928',
                    center: '39.648995, -105.011856',
                    back: '39.649082, -105.011748'
                },
                hazards: [{
                    name: 'sand bunkers',
                    front: '39.648399, -105.011889',
                    clear: '39.648821, -105.011849',
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648701, -105.012410',
                    clear: false,
                    type: 'fairway bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648894, -105.011684',
                    clear: '39.648973, -105.011650',
                    type: 'greenside bunker'
                },
                {
                    name: 'sand bunker',
                    front: '39.648911, -105.012033',
                    clear: false,
                    type: 'greenside bunker'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.648172, -105.012193',
                    type: 'water hazard'
                },
                {
                    name: 'water hazard',
                    front: false,
                    clear: '39.647775, -105.012030',
                    type: 'water hazard'
                }
                ]
            },
            {
                id: 13,
                name: '14th Hole',
                yards: 223,
                par: 3,
                handicap: 11,
                green: {
                    front: '39.647233, -105.012934',
                    center: '39.647125, -105.012893',
                    back: '39.646989, -105.012802'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.647152, -105.013098',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: '39.647749, -105.012862',
                        clear: '39.647349, -105.012850',
                        type: 'water hazard'
                    },
                    {
                        name: 'water hazard',
                        front: '39.646883, -105.012870',
                        clear: false,
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 14,
                name: '15th Hole',
                yards: 617,
                par: 5,
                handicap: 13,
                green: {
                    front: '39.644030, -105.013801',
                    center: '39.643937, -105.013778',
                    back: '39.643842, -105.013669'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.645933, -105.014123',
                        clear: '39.645813, -105.014171',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunkers',
                        front: '39.644626, -105.013621',
                        clear: '39.644248, -105.013647',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.643801, -105.013737',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: '39.645664, -105.013655',
                        clear: '39.644942, -105.013753',
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 15,
                name: '16th Hole',
                yards: 210,
                par: 3,
                handicap: 15,
                green: {
                    front: '39.645946, -105.015639',
                    center: '39.646089, -105.015598',
                    back: '39.646239, -105.015517'
                },
                hazards: [
                    {
                        name: 'water hazard',
                        front: '39.646295, -105.015572',
                        clear: false,
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 16,
                name: '17th Hole',
                yards: 414,
                par: 4,
                handicap: 5,
                green: {
                    front: '39.649706, -105.014921',
                    center: '39.649817, -105.014881',
                    back: '39.649901, -105.014756'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.648687, -105.015382',
                        clear: '39.648782, -105.015351',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.648865, -105.015027',
                        clear: '39.648986, -105.014979',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.649717, -105.014769',
                        clear: '39.649822, -105.014705',
                        type: 'greenside bunker'
                    },
                    {
                        name: 'water hazard',
                        front: false,
                        clear: '39.647828, -105.015487',
                        type: 'water hazard'
                    }
                ]
            },
            {
                id: 17,
                name: '18th Hole',
                yards: 550,
                par: 5,
                handicap: 1,
                green: {
                    front: '39.646019, -105.016199',
                    center: '39.645912, -105.016171',
                    back: '39.645793, -105.016097'
                },
                hazards: [
                    {
                        name: 'sand bunker',
                        front: '39.647227, -105.016477',
                        clear: '39.647098, -105.016515',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.648300, -105.015814',
                        clear: '39.648211, -105.015825',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunkers',
                        front: '39.648131, -105.015887',
                        clear: '39.647885, -105.016044',
                        type: 'fairway bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.646060, -105.016091',
                        clear: '39.645912, -105.016055',
                        type: 'greenside bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.645777, -105.016228',
                        clear: false,
                        type: 'greenside bunker'
                    },
                    {
                        name: 'sand bunker',
                        front: '39.645694, -105.016103',
                        clear: false,
                        type: 'greenside bunker'
                    }
                ]
            }
        ]
    }
]
router.get('/', (req, res) => {
    res.status(200).json(courses);
})
router.get('/:id', (req, res) => {
    res.status(200).json(courses[req.params.id])
})
module.exports = router;