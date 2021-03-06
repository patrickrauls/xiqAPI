const router = require('express').Router();

let getDistance = (lat1, lat2, lon1, lon2) => {
    let R = 6967407.04287,
        φ1 = lat1 * Math.PI / 180,
        φ2 = lat2 * Math.PI / 180,
        Δφ = (lat2 - lat1) * Math.PI / 180,
        Δλ = (lon2 - lon1) * Math.PI / 180

    let a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    let d = R * c;
    return Math.round(d);
}
router.post('/', (req, res) => {
    let origin = req.body.origin,
        target = req.body.target;

    let distance = getDistance(origin.lat, target.lat, origin.lon, target.lon);
    res.status(200).json({ distance })
})

module.exports = router;