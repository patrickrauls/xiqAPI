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
    return Math.ceil(d * 1.09361);
}
router.post('/', (req, res) => {
    let distance = getDistance(req.body.lat1, req.body.lat2, req.body.lon1, req.body.lon2);
    res.status(200).json({ distance })
})

module.exports = router;