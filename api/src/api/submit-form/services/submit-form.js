'use strict';

/**
 * submit-form service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::submit-form.submit-form');
