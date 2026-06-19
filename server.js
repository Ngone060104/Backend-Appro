const jsonServer = require('json-server');
const cors = require('cors'); // Importe le package CORS

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Active le CORS pour TOUTES les origines et TOUS les projets
server.use(cors({
  origin: '*', // Autorise n'importe quel domaine
  methods: 'GET,POST,PUT,DELETE,PATCH,OPTIONS', // Autorise toutes les méthodes HTTP
  allowedHeaders: 'Content-Type,Authorization' // Autorise ces en-têtes dans les requêtes
}));

// Intègre les middlewares par défaut de JSON Server (logger, static, etc.)
server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 10000;

server.listen(PORT, () => {
  console.log(`JSON Server running on port ${PORT}`);
});
