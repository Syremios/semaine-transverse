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
            const question = await db.QuestionList.findAll();
            res.json(question);
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
    get_by_idItemList: async (req, res, next) => {
        const { idItemList } = req.params;

        try {
            const question = await db.QuestionList.findAll({where:{idItemList:idItemList}});
            res.json(question);
        }
        catch (e) {
            next({ status: 404, message: 'Une erreur est survenue' });
        }
    }
}