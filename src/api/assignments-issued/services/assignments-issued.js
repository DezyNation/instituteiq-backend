'use strict';

/**
 * assignments-issued service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::assignments-issued.assignments-issued');
