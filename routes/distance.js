const router = require('express').Router();

let getDistance = (lat1, lat2, lon1, lon2) => {
    let R = 6371e3,
        φ1 = lat1 * Math.PI / 180,
        φ2 = lat2 * Math.PI / 180,
        Δφ = (lat2 - lat1) * Math.PI / 180,
        Δλ = (lon2 - lon1) * Math.PI / 180

    let a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    let d = R * c;
    return Math.round(d * 1.09361);
}
router.post('/', (req, res) => {
    let origin = req.body.origin.split(', '),
        target = req.body.target.split(', '),
        lat1 = Number(origin[0]),
        lat2 = Number(target[0]),
        lon1 = Number(origin[1]),
        lon2 = Number(target[1]);

    let distance = getDistance(lat1, lat2, lon1, lon2);
    res.status(200).json({ distance })
})

module.exports = router;