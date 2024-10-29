const express = require('express');
const app = express();
const path = require("path");
const cors = require("cors"); 
const gateway = require('fast-gateway');

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

var port=process.env.PORT || 3002;
const server = gateway({
    routes: [
        {
            method: 'POST', // Asegúrate de especificar el método si es necesario
            prefix: '/register',
            target: 'http://localhost:3000', // Corrección aquí
            // hooks: {} // Puedes usar hooks si necesitas interceptar o manejar errores
        },
        {
            method: 'GET', // Asegúrate de especificar el método si es necesario
            prefix: '/loger',
            target: 'http://localhost:3000', // Corrección aquí
            // hooks: {} // Puedes usar hooks si necesitas interceptar o manejar errores
        },
        {
            method: 'GET', // Asegúrate de especificar el método si es necesario
            prefix: '/show',
            target: 'http://localhost:3001', // Corrección aquí
            // hooks: {} // Puedes usar hooks si necesitas interceptar o manejar errores
        },
    ]
});

// Iniciar el servidor gateway
server.start(port).then(server => {
    console.log(
        'Gateway ejecutándose en el puerto: http://localhost:' + port
    );
});