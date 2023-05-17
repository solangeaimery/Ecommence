import { Flex, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const SkeletonCard = (size) => {
    return (
        <Flex flexDirection="column" maxW='20vw' gap="20px" minW={size} p="10px">
            <Skeleton height={30}/>
            <SkeletonText mt='4' noOfLines={3} spacing='4' skeletonHeight='2'/>
            <Flex>
                <Skeleton height={20}/> 
                <Skeleton height={20}/>
            </Flex>
        </Flex>
    )
}

//queda seguir el skeleton para las cards pero bueno nada, detalles de estilado. 


export default SkeletonCard
