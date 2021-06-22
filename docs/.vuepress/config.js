module.exports = {
    title: 'Rita Shioya',
    themeConfig: {
        sidebar: [
            '/',
            '/overview',
            '/study_record',
            '/sfp',
        ]
    },
    markdown: {
        config: md => {
            md.use(require('markdown-it-video'))
        }
    }
}