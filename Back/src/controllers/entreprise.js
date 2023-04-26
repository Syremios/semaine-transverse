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
            const entreprise = await db.Entreprise.findAll();
            res.json(entreprise);
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
        const { idEntreprise } = req.params;
        try {
            const entreprise = await db.Entreprise.findByPk(idEntreprise,{
                include: [
                    {
                        model: db.Item,
                        as: "Item",
                        include: [
                            {
                                model: db.ItemList,
                                as: "ItemList",
                            },
                            {
                                model: db.Resultat,
                                as: "Resultat",
                                include: [
                                    {
                                        model: db.ReponseList,
                                        attributes: ['point'],
                                    }
                                ]
                            }
                        ]
                    },
                ]
            });
            res.json(entreprise);
        }
        catch (e) {
            console.log(e);
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
    get_score: async (req, res, next) => {
        const { idEntreprise } = req.params;
        try {
            const entrepriseDetail = await db.Entreprise.findByPk(idEntreprise,{
                include: [
                    {
                        model: db.Item,
                        as: "Item",
                        include: [
                            {
                                model: db.ItemList,
                                as: "ItemList",
                            },
                            {
                                model: db.Resultat,
                                as: "Resultat",
                                include: [
                                    {
                                        model: db.ReponseList,
                                        attributes: ['point'],
                                    }
                                ]
                            }
                        ]
                    },
                ]
            });

            res.json(entrepriseDetail);
        }
        catch (e) {
            next({ status: 404, message: 'Une erreur est survenue' });
        }
    },
}