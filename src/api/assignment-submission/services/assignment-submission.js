'use strict';

/**
 * assignment-submission service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::assignment-submission.assignment-submission');
