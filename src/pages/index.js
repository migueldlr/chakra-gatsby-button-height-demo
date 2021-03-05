import { Button, Center, VStack } from '@chakra-ui/react';
import * as React from 'react';

const IndexPage = () => {
    return (
        <Center py={20} h="100vh">
            <VStack spacing={5}>
                <Button>Too tall</Button>
                <Button h="min">Just right</Button>
            </VStack>
        </Center>
    );
};

export default IndexPage;
