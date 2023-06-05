import { Button, Flex, Heading, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"


export const NotFound = () => {
    return (
        <Flex
            flexDir="column"
            minW="100vw"
            minH="100vh"
            justifyContent="center"
            alignItems="center"
        >
            <Heading>404 NOT FOUND...</Heading>
            <Image src="https://firebasestorage.googleapis.com/v0/b/ecommence-df92c.appspot.com/o/maceta.png?alt=media&token=4bcc69c4-80ee-491d-b78f-2af5b3fc7702&_gl=1*4uq5qt*_ga*MTUxOTg4MDU4Ny4xNjgzOTMyMjQ0*_ga_CW55HF8NVT*MTY4NjAwMjQ2MC4xNS4xLjE2ODYwMDQyMjEuMC4wLjA." alt="monstera" boxSize="200px" />
            <Button
                    as={Link}
                    to="/"
                    margin="20px"
                    color="white"
                    w="40vw"
                    backgroundColor="#8B728F"
                    _hover={{
                        color: 'WHITE',
                        backgroundColor: '#6A4873',
                    }}
                >
                    Inicio
                </Button>
        </Flex>
    )
}


