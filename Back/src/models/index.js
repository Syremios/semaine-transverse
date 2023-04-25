const fs = require('fs');
// this object will contain the model objects
// each key being the model's name
const db = {};

const sequelize = require("../utils/database.js");

fs.readdirSync(__dirname)
	.filter(filename => filename !== 'index.js') // avoid this file
	.forEach(filename => {
		const model = require('./' + filename)(sequelize); // get the model definition
		db[model.name] = model; // add the entry in the db object
	});

// go through each entry of the db object
Object.keys(db).forEach(modelName => {
	// call the "associate" function on the model object
	// and pass it the db object (so that it can have access to other models)
	db[modelName].associate(db);
});

db.sequelize = sequelize;

const initializeFunc = [];

const AXE = {
	idNumerique: 1,
	idReactivite: 2,
	idCompetence: 3
}
/**
 * Créé les axes
 */
const initializeAXE = async () => {
	//Load les type d'interaction
	await db.Axe.create({
		id: AXE.idNumerique,
		nom: "Numérique"
	});
	await db.Axe.create({
		id: AXE.idReactivite,
		nom: "Réactivité"
	});
	await db.Axe.create({
		id: AXE.idCompetence,
		nom: "Compétence"
	});
}
initializeFunc.push(initializeAXE);

// Créé les Items

const ITEM = {
	idExcellence: 1,
	idAgile: 2,
	idGestion: 3,
	idVelocite: 4,
	idEnvironnement: 5,
	idDefi: 6,
	idVeille: 7,
	idBusiness: 8,
	idRelation: 9,
	idManagement: 10
}
const initializeITEM = async () => {

	// Compétence
	await db.ItemList.create({
		id: ITEM.idExcellence,
		nom: "Excellence Technique/Communauté de pratiques",
		idAxe: AXE.idCompetence,
	});

	await db.ItemList.create({
		id: ITEM.idAgile,
		nom: "Faire agile",
		idAxe: AXE.idCompetence,
	});

	await db.ItemList.create({
		id: ITEM.idGestion,
		nom: "Gestion humaine des compétences",
		idAxe: AXE.idCompetence,
	});

	//Reactivité
	await db.ItemList.create({
		id: ITEM.idVelocite,
		nom: "Vélocité de réponse",
		idAxe: AXE.idReactivite,
	});

	await db.ItemList.create({
		id: ITEM.Environnements,
		nom: "Environnements souples",
		idAxe: AXE.idReactivite,
	});

	await db.ItemList.create({
		id: ITEM.idDefi,
		nom: "Défi environnemental",
		idAxe: AXE.idReactivite,
	});

	await db.ItemList.create({
		id: ITEM.idVeille,
		nom: "Veille et benchmark",
		idAxe: AXE.idReactivite,
	});

	// Numérique
	await db.ItemList.create({
		id: ITEM.idBusiness,
		nom: "Business model",
		idAxe: AXE.idNumerique,
	});

	await db.ItemList.create({
		id: ITEM.idRelation,
		nom: "Relation client",
		idAxe: AXE.idNumerique,
	});

	await db.ItemList.create({
		id: ITEM.idManagement,
		nom: "Management",
		idAxe: AXE.idNumerique,
	});
}
initializeFunc.push(initializeITEM);

// Créé les questions
initializeQUESTION = async () => {
	await db.QuestionList.create({
		nom: "Votre entreprise dégage t-elle une part de CA par des produits ou services en ligne",
		idItemList: 0,
	});
};
initializeFunc.push(initializeQUESTION);

db.initialize = async () => {
	initializeFunc.forEach(async func => {
		try {
			await func();
		}
		catch (e) {

		}
	});
}
db.AXE = AXE;
module.exports = db;