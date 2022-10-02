const mongoose = require('mongoose')

mongoose.connect(process.env.URI, {})
    .then(() => console.log('conexion db Lista'))
    .catch(e => console.log('falló conexion' + e ))