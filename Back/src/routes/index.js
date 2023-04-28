const fs = require('fs');
const express = require('express');
/**
 * @typedef Group
 * @type {object}
 * @property {string} groupPath - partie commune à toute les urls du groupe
 * @property {Array} middleware - liste des middleware
 * @property {Array[object]} route - liste des routes
 */

/**
 * Charge toute les routes dans l'applications
 * @param {express.Application} app
 */
module.exports = (app) => {
  // Lit chaque fichier
  fs.readdirSync(__dirname)
    .filter((filename) => filename !== 'index.js') // evite ce fichier
    .forEach((filename) => {
      /** @type {Group} */
      const group = require(`./${filename}`);

      // Utilise les middlewares pour la route du groupe
      app.use(group.groupPath, group.middleware);

      group.route.forEach((r) => {
        // Associe l'url à la fonction
        app[r.method](group.groupPath + r.url, r.middleware, r.func);
      });
    });
};
