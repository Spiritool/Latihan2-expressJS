const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//     res.send('Halo decks')
// })

const bodyPs = require('body-parser');
app.use(bodyPs.urlencoded({ extended: false}));
app.use(bodyPs.json());

const dpiRouter = require('./routes/dpi.js');
app.use('/api/dpi', dpiRouter);

const ownerRouter = require('./routes/pemilik.js');
app.use('/api/owner', ownerRouter);

const atpRouter = require('./routes/alat_tangkap.js');
app.use('/api/atp', atpRouter);

const kapalRouter = require('./routes/kapal.js');
app.use('/api/kapal', kapalRouter);

app.listen(port, () => {
    console.log(`aplikasi berjalan di http:://localhost:${port}`)
})