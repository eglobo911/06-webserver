const express = require('express')
const app = express()

app.get('/', (req, res) => {

    let salida = {
        nombre: 'Ernesto',
        edad: 58,
        url: req.url
    };

    res.send(salida);

});

app.listen(3000, () => {
    console.log('Escuchando el puerto 3000');
});