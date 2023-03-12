'use strict';

/**
 * fee-payment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fee-payment.fee-payment');
