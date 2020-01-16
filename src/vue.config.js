const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    chainWebpack(config) {
        // config.plugins.delete('preload') // TODO: need test
        // config.plugins.delete('prefetch') // TODO: need test
        // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    },
}