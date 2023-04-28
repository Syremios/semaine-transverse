const fs = require('fs');
// this object will contain the model objects
// each key being the model's name
const db = {};

const sequelize = require('../utils/database');

fs.readdirSync(__dirname)
  .filter((filename) => filename !== 'index.js') // avoid this file
  .forEach((filename) => {
    const model = require(`./${filename}`)(sequelize); // get the model definition
    db[model.name] = model; // add the entry in the db object
  });

// go through each entry of the db object
Object.keys(db).forEach((modelName) => {
  // call the "associate" function on the model object
  // and pass it the db object (so that it can have access to other models)
  db[modelName].associate(db);
});

db.sequelize = sequelize;

const ressource = require('../ressource/questionlist.json');

const initializeFunc = [];

const initializeQuestion = async () => {
  const axeKeys = Object.keys(ressource);

  axeKeys.forEach(async (axeKey) => {
    const axe = ressource[axeKey];
    try {
      // Ajout des Axes
      await db.Axe.create({
        id: axe.id,
        nom: axe.valeur,
      });
    } catch (e) {
      return;
    }
    const itemKeys = Object.keys(axe.item);

    itemKeys.forEach(async (itemkey) => {
      const item = axe.item[itemkey];
      // Ajout des Items
      await db.ItemList.create({
        id: item.id,
        nom: item.valeur,
        idAxe: axe.id,
      });

      item.questions.forEach(async (question) => {
        // Ajout des Questions
        await db.QuestionList.create({
          id: question.id,
          question: question.valeur,
          idItemList: item.id,
        });

        question.reponses.forEach(async (reponse) => {
          // Ajout des Responses
          await db.ReponseList.create({
            id: reponse.id,
            reponse: reponse.valeur,
            point: reponse.points,
            idQuestionList: question.id,
          });
        });
      });
    });
  });
};
initializeFunc.push(initializeQuestion);

db.initialize = async () => {
  initializeFunc.forEach(async (func) => {
    try {
      await func();
    } catch (e) {

    }
  });
};
module.exports = db;
