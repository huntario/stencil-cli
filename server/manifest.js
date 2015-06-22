var Confidence = require('confidence'),
    config = require('./config'),
    criteria = {
        env: process.env.NODE_ENV
    },
    store,
    manifest;

manifest = {
    $meta: 'Stencil',
    connections: [{
        host: config.get('/server/host'),
        port: config.get('/server/port'),
        options: config.get('/server/options')
    }],
    plugins: {
        // Third Party Plugins
        'good': config.get('/good'),
        // First Party Plugins
        './plugins/Renderer': {},
        './plugins/Router': {},
        './plugins/CssCompiler': config.get('/cssCompiler')
    }
};

store = new Confidence.Store(manifest);

exports.get = function (key) {

    return store.get(key, criteria);
};

exports.meta = function (key) {

    return store.meta(key, criteria);
};
