const path = require('path')
exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                components: path.resolve(__dirname, 'src/components'),
                pages: path.resolve(__dirname, 'src/pages'),
                images: path.resolve(__dirname, 'src/images'),
                styles: path.resolve(__dirname, 'src/styles'),
            },
        },
    })
}