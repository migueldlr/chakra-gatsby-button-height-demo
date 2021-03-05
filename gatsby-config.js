module.exports = {
    siteMetadata: {
        title: 'button-height-demo',
    },
    plugins: [
        {
            resolve: '@chakra-ui/gatsby-plugin',
            options: {
                /**
                 * @property {boolean} [isResettingCSS=true]
                 * if false, this plugin will not use `<CSSReset />
                 */
                isResettingCSS: true,
                /**
                 * @property {boolean} [isUsingColorMode=true]
                 * if false, this plugin will not use <ColorModeProvider />
                 */
                isUsingColorMode: true,
            },
        },
    ],
};
