import { Flex, Grid, SimpleGrid } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'
import { getAllProducts } from '../../services/products'
import { Filter } from './Filter'
import { SkeletonCard } from '../../components/SkeletonCard'

export const Products = () => {
  const [data, setData] = useState([])
  const [dataBase, setDataBase] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const handleData = (newData) => {
    setData(newData)
  }

  useEffect(() => {
    const getProducts = async () => {
      try {
        const dataArray = await getAllProducts()
        setData(dataArray)
        setDataBase(dataArray)
        setIsLoading(false)
      } catch (error) {
        console.error('Error al obtener los datos:', error)
      }
    }
    getProducts()
  }, [])

  return (
    <Grid backgroundColor="#D7E3DB">
      <Filter data={data} handleData={handleData} dataBase={dataBase} />
      {isLoading && (
        <SimpleGrid
          h="100%"
          w="100%"
          columns={{ base: '1', md: '3', xl: '4' }}
          justifyContent="center"
          bgColor="white"
          p="50px"
          gap="20px"
          backgroundImage="url('public/backgroundLeaves.jpeg')"
        >
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </SimpleGrid>
      )}
      <Flex
        wrap="wrap"
        p="50px"
        gap="20px"
        backgroundImage="url('https://firebasestorage.googleapis.com/v0/b/ecommence-df92c.appspot.com/o/backgorundleaves.jpeg?alt=media&token=0b93704d-1cfd-4d7c-a200-8e713acf28ec&_gl=1*14ldtno*_ga*MTUxOTg4MDU4Ny4xNjgzOTMyMjQ0*_ga_CW55HF8NVT*MTY4NjAwMjQ2MC4xNS4xLjE2ODYwMDI2NjIuMC4wLjA.')"
        justifyContent="center"
      >
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Flex>
    </Grid>
  )
}
