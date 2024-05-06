const http = require('http');
const fs = require('fs');

// Función para guardar el pedido en un archivo
function guardarPedido(pedido) {
  fs.appendFile('pedidos.txt', pedido + '\n', (err) => {
    if (err) throw err;
    console.log('Pedido guardado en pedidos.txt');
  });
}

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
  // Configurar encabezados CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Verificar el método y la ruta de la solicitud
  if (req.method === 'POST' && req.url === '/pedido') {
    let data = '';
    req.on('data', chunk => {
      data += chunk.toString();
    });
    req.on('end', () => {
      // Procesar el pedido y almacenarlo en un archivo de texto
      console.log('Pedido recibido:', data);
      guardarPedido(data);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Pedido recibido con éxito.\n');
    });
  } else {
    // Devolver una respuesta 404 si la ruta no coincide
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página no encontrada.\n');
  }
});

// Escuchar en el puerto 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
