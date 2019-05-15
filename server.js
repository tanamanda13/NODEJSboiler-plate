/*
Importer les composants server 
*/

  //Class
  require('dotenv').config();
  const express = require('express');
  const ejs = require('ejs');
  const path = require('path');

  //Modules serveur
  const frontRoutes = require('./routes/front.routes');
  const apiRoutes = require('./routes/api.routes');
//

/*
Configuration du server 
*/

 //Définir des var serveur 
 const server = express(); // j'appelle la var express
 const port = process.env.PORT; // un serveur écoute un port 

// Définition du dossier static du client (modif du dossier client et le dossier static du client)
 server.set('views', __dirname + '/www');
 server.use( express.static(path.join(__dirname, 'www')) );// tous les fichiers dans src (img, css)
 //ici, je mets le dossier asset et view dans un seul dossier = 

 //Configurer le moteur de rendu
 server.set('view engine', 'ejs');

 // Utilisation des routeurs 
 server.use('/api', apiRoutes);
 server.use('/', frontRoutes); // c'est mtn le serveur qui dirige vers les fronts

 /*
Lancer le serveur
*/
  // Pour lancer le serveur
  //on rappel la var server crée. Le server écoute le port 

  server.listen( port, () => {
    console.log(`Server Listening on port ${port}`); 
  })

//