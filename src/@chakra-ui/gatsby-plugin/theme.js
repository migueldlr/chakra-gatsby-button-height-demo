import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    components: {
        Button: {
            baseStyle: {
                textTransform: 'uppercase',
                borderRadius: 0,
                py: '4px',

                // None of the following lines sets the Button height to 'min-content'
                // height: 'min',
                // height: 'min-content',
                // h: 'min-content',
                h: 'min',
            },
        },
    },
});

export default theme;
