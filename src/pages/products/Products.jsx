import {  Flex, Grid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'
import { getAllProducts } from '../../services/products'
import { Filter } from './Filter'

export const Products = () => {
    const [data, setData] = useState([])
    const [dataBase, setDataBase] = useState([])

    const handleData = (newData) => {
        setData(newData)
    }

    useEffect(() => {
        const getProducts = async () => {
            try {
                const dataArray = await getAllProducts();
                setData(dataArray);
                setDataBase(dataArray)
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };
        getProducts();
    }, []);

    return (
        <Grid>
            <Filter data={data} handleData={handleData} dataBase={dataBase}/>
            <Flex wrap="wrap" p="50px" gap="20px">
                {data.map(product => <ProductCard key={product.id} size="30%" product={product} />)}
            </Flex>
        </Grid>
    )
}

