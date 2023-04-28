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
      const entreprise = await db.Entreprise.findAll();
      res.json(entreprise);
    } catch (e) {
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
      const entreprise = await db.Entreprise.findByPk(idEntreprise, {
        include: [
          {
            model: db.Item,
            as: 'Item',
            include: [
              {
                model: db.ItemList,
                as: 'ItemList',
              },
              {
                model: db.Resultat,
                as: 'Resultat',
                include: [
                  {
                    model: db.ReponseList,
                    attributes: ['point'],
                  },
                ],
              },
            ],
          },
        ],
      });
      res.json(entreprise);
    } catch (e) {
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
      const score = [];

      const axeList = await db.Axe.findAll({
        include: [
          {
            model: db.ItemList,
            include: [
              {
                model: db.Item,
                where: { idEntreprise },
                include: [
                  {
                    model: db.Resultat,
                    as: 'Resultat',
                    include: [
                      {
                        model: db.ReponseList,
                        attributes: ['point'],
                      },

                    ],
                  },
                ],
              },
            ],
          },
        ],
      });

      // Pour chaque axe
      axeList.forEach((axe) => {
        const listMoyenne = [];

        // Pour chaque Item
        axe.ItemLists.forEach((item) => {
          // récupère l'item d'une entreprise comme y'en a qu'un peur une bilan donné
          const entrepriseItem = item.Items[0];

          // Le nombre de question
          const nbQuestion = entrepriseItem.Resultat.length;

          let point = 0;
          entrepriseItem.Resultat.forEach((resp) => {
            point += resp.ReponseList.point;
          });
          listMoyenne.push(point / nbQuestion).toFixed(2);
        });
        let moyenne = 0;
        listMoyenne.forEach((m) => {
          moyenne += m;
        });
        score.push({
          nom: axe.nom,
          moyenne: ((moyenne / listMoyenne.length) * 2.5).toFixed(2),
        });
      });

      res.json(score);
    } catch (e) {
      next({ status: 404, message: 'Une erreur est survenue' });
    }
  },
};
