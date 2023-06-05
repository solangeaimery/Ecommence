import {
    Box,
    Card,
    CardBody,
    Stack,
    Divider,
    Skeleton,
    SkeletonText,
    Flex,
} from '@chakra-ui/react'

export const SkeletonCard = (size) => {
    return (
        <Card maxW='20vw' gap="25px" minW="250px" p="10px" boxShadow='xl'>
            <CardBody>
                <Box maxW={{ base: '100%', md: '92.5%' }}>
                    <Skeleton height="200px" />
                </Box>
                <Stack mt="6" spacing="3">
                    <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
                </Stack>
            </CardBody>
            <Divider/>
            <Flex>
                <Box maxW={{ base: '20%',}}>
                    <Skeleton height="50px" />
                </Box>
                <Box maxW={{ base: '20%', }}>
                    <Skeleton height="50px"/>
                </Box>
            </Flex>
        </Card>
    )
}
