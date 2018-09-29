'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/seller', controller.home.seller);
  router.get('/api/goods', controller.home.goods);
  router.get('/api/ratings', controller.home.ratings);
};
