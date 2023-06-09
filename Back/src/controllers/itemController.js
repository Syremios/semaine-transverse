const express = require('express');
const db = require('../models');

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
    } catch (e) {
      next({ status: 404, message: 'Une erreur est survenue' });
    }
  },
  get_by_idEntreprise: async (req, res, next) => {
    const { idEntreprise, idAxe } = req.params;
    try {
      const itemList = await db.ItemList.findAll({
        where: { idAxe },
        include: [
          {
            model: db.Item,
            where: { idEntreprise },
          },
        ],
      });
      res.json(itemList);
    } catch (e) {
      next({ status: 404, message: 'Une erreur est survenue' });
    }
  },
};
