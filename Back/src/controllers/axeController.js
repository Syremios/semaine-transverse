const db = require("../models");
const express = require("express");
const { Op } = require("sequelize");

module.exports = {
    /**
     * 
     * @param {express.Request} req 
     * @param {express.Response} res 
     * @param {express.NextFunction} next 
     * @returns 
     */
    get_all: async (req, res, next) => {
        try {
            const axe = await db.Axe.findAll();
            res.json(axe);
        }
        catch (e) {
            next({ status: 404, message: 'Une erreur est survenue' });
        }
    },
    /**
     *
     * @param {express.Request} req 
     * @param {express.Response} res 
     * @param {express.NextFunction} next 
     * @returns 
     */
    get_by_id: async (req, res, next) => {
        const { idAxe } = req.params;

        try {
            const Axe = await db.Axe.findByPk(idAxe);
            res.json(Axe);
        }
        catch (e) {
            next({ status: 404, message: 'Une erreur est survenue' });
        }
    }
}