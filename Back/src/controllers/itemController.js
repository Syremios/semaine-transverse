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
            const item = await db.Item.findAll();
            res.json(item);
        }
        catch (e) {
            next({ status: 404, message: 'Une erreur est survenue' });
        }
    },
    get_by_idEntreprise: async (req, res, next) => {
        const {idEntreprise,idAxe} = req.params;
        try {
            const item = await db.Item.findAll({
                where: { idEntreprise: idEntreprise },
                include:[
                    {
                        model: db.ItemList,
                        as: "ItemList",
                        include:[
                            {
                                model: db.Axe,
                                as: "Axe",
                                where: { id: idAxe },
                            },
                        ]
                    },
                ]
            });
            res.json(item);
        }
        catch (e) {
            console.log(e);
            next({ status: 404, message: 'Une erreur est survenue' });
        }
    },
}