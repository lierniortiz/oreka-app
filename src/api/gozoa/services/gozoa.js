'use strict';

/**
 * gozoa service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gozoa.gozoa');
