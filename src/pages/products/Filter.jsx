import { Button, Flex, Input, Select, Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export const Filter = ({ dataBase, handleData }) => {

    const [selectValue, setselectValue] = useState("all")
    const [textValue, settextValue] = useState("")
    const [maxPrice, setMaxPrice] = useState("")

    const handleFilters = () => {
        let result = dataBase
        if (selectValue !== "all") {
            result = result.filter(d => d.category === selectValue)
        }
        if (textValue !== "") {
            result = result.filter((product) =>
                product.name.toLowerCase().includes(textValue.toLowerCase()))
        }
        if (maxPrice !== "") {
            result = result.filter(product => product.price <= maxPrice)
        }
        return handleData(result)
    }

    return (
        <Flex marginTop={{sm:"0px", md:"90px" , lg:"90px"}}
            gap={{ base: '5', sm: '10' }}
            alignItems="center"
            justifyContent="center"
            p="10px"
            background="#D8E5DD"
        >
            <Input variant='flushed' value={textValue}
                placeholder="Nombre"
                type="text"
                w="30%"
                borderColor="#8B728F"
                background="white"
                onChange={(e) => {
                    settextValue(e.target.value)
                    console.log(textValue)
                }} />
            <Select variant='flushed' w="30%"
                value={selectValue}
                borderColor="#8B728F"
                background="white"
                onChange={(e) => {
                    setselectValue(e.target.value)
                    console.log(selectValue)
                }}>
                <option value="all">Todos los productos</option>
                <option value="plants">Plantas</option>
                <option value="flowerpot">Macetas</option>
                <option value="combo" >Kit planta + Maceta</option>
            </Select>
            <Input w="30%"
                value={maxPrice}
                background="white"
                type="number"
                placeholder="monto maximo"
                borderColor="#8B728F"
                variant='flushed'
                onChange={(e) => {
                    setMaxPrice(e.target.value)
                    console.log(maxPrice)
                }}></Input>
            <Button margin="10px"
                color="white"
                backgroundColor="#8B728F"
                _hover={{
                    color: "WHITE",
                    backgroundColor: "#6A4873"
                }}
                onClick={() => handleFilters()}>
                <FaSearch />
            </Button>
        </Flex>
    )
}

