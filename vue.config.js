const path = require('path');

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/_variables.scss";`
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        }
    }
};
