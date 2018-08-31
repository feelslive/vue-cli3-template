module.exports = {
    lintOnSave: false,
    devServer: {
        open: true,
        port: 7777,
        https: false,
        proxy: {
            '/': {
                target: 'http://liren.liangzibao.com.cn',
                changeOrigin: true,
                ws: false,
                pathRewrite: {
                    '^/': ''
                }
            }
        }
    }
}