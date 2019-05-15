const rss_webhooks = require("./assets/rss_webhooks")

/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.handler = function handler(req, res) {
    res.send(`Hello ${req.body.name || 'World'}!`);
};
