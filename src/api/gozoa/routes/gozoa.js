'use strict';

/**
 * gozoa router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::gozoa.gozoa');
