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
            const resultat = await db.Resultat.findAll();
            res.json(resultat);
        }
        catch (e) {
            next({ status: 404, message: 'Une erreur est survenue' });
        }
    },
    get_by_idItem: async (req, res, next) => {
        const {idItem} = req.params;
        try {
            const resultat = await db.Resultat.findAll({
                where: { idItem: idItem },
                include:[
                    {
                        model: db.QuestionList,
                        attributes:["question"]
                    },
                    {
                        model: db.ReponseList,
                        attributes:["reponse","point"]
                    }
                ]
            });
            res.json(resultat);
        }
        catch (e) {
            next({ status: 404, message: 'Une erreur est survenue' });
        }
    },
}