'use strict';

/**
 * ogia service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ogia.ogia');
