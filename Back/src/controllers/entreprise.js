const db = require("../models");
const express = require("express");
const { Op } = require("sequelize");

module.exports = {
    /**
     * Récupère la liste des messages
     * @param {express.Request} req 
     * @param {express.Response} res 
     * @param {express.NextFunction} next 
     * @returns 
     */
    get_all: async (req, res, next) => {
        try {
            const messages = await db.Enterprise.findAll();
            res.json(messages);
        }
        catch (e) {
            next({ status: 404, message: 'Une erreur est survenue' });
        }
    },
    /**
     * Crée un message
     * @param {express.Request} req 
     * @param {express.Response} res 
     * @param {express.NextFunction} next 
     * @returns 
     */
    create: async (req, res, next) => {

        const { idEditeur, idReceveur, Valeur } = req.body;

        try {
            const message = await db.Utilisateur.create({
                idEditeur,
                idReceveur,
                Valeur,
            });

            res.json(message);
        }
        catch (e) {
            next({ status: 500, message: e.message });
        }
    },
    /**
     * Modifie un message
     * @param {express.Request} req 
     * @param {express.Response} res 
     * @param {express.NextFunction} next 
     * @returns 
     */
    udpate_by_id: async (req, res, next) => {

        const { id } = req.params.id;
        const { idEditeur, idReceveur, contenu } = req.body;

        try {
            const message = await db.Message.findByPk(id);

            message.idEditeur = idEditeur || message.idEditeur;
            message.idReceveur = idReceveur || message.idReceveur;
            message.contenu = contenu || message.contenu;
            await message.save();
            res.json(message);
        }
        catch (e) {
            next({ status: 500, message: 'Une erreur est survenue' });
        }
    },
    /**
     * Supprime un message
     * @param {express.Request} req 
     * @param {express.Response} res 
     * @param {express.NextFunction} next 
     * @returns 
     */
    delete_by_id: async (req, res, next) => {
        const { id } = req.params.id;

        try {
            const message = await db.Message.findByPk(id);
            await message.destroy();
            res.status(200).end();
        }
        catch (e) {
            next({ status: 500, message: 'Une erreur est survenue' });
        }
    },
}