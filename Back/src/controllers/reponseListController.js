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
            const reponse = await db.ReponseList.findAll();
            res.json(reponse);
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
    get_by_idQuestion: async (req, res, next) => {

        const {idQuestion} = req.params;
        try {
            const reponse = await db.ReponseList.findAll({where:{idQuestion:idQuestion}});
            res.json(reponse);
        }
        catch (e) {
            next({ status: 404, message: 'Une erreur est survenue' });
        }
    }
}