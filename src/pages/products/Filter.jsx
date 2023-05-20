import { Button, Flex, Input, Select } from '@chakra-ui/react'
import React, { useState } from 'react'

export const Filter = ({ dataBase, handleData}) => {

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
        if (maxPrice !== "" ) {
            result = result.filter(product => product.price <= maxPrice)
        }
        return handleData(result)
    }

    return (
        <Flex marginTop={100}>
            <Input value={textValue} placeholder="Nombre" type="text" onChange={(e) => {
                settextValue(e.target.value)
                console.log(textValue)
            }} />
            <Select value={selectValue} onChange={(e) => {
                setselectValue(e.target.value)
                console.log(selectValue)
            }}>
                <option value="all">Todos los productos</option>
                <option value="plants">Plantas</option>
                <option value="flowerpot">Macetas</option>
                <option value="combo" >Kit planta + Maceta</option>
            </Select>
            <Input value={maxPrice} type="number" placeholder="monto maximo" onChange={(e) => {
                setMaxPrice(e.target.value)
                console.log(maxPrice)
            }}></Input>
            <Button onClick={() => handleFilters()}>Buscar</Button>
        </Flex>
    )
}

