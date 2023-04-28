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
      const itemList = await db.ItemList.findAll();
      res.json(itemList);
    } catch (e) {
      next({ status: 404, message: 'Une erreur est survenue' });
    }
  },
  get_by_idAxe: async (req, res, next) => {
    const { idAxe } = req.params;
    try {
      const itemList = await db.ItemList.findAll({
        where: { idAxe },
      });
      res.json(itemList);
    } catch (e) {
      next({ status: 404, message: 'Une erreur est survenue' });
    }
  },
};
