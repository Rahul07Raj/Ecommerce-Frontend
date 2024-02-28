import React from 'react'
import { Card,CardBody,Image,Heading,Divider,CardFooter,ButtonGroup, Text, Button, Stack } from "@chakra-ui/react";

const ProductCard = ({productId,price,name,photo,stock,handler}) => {
  return (
    <Card maxWidth={"20rem"} width={'100%'}>
    <CardBody >
      <Image
        // src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        // alt='Green double couch with wooden legs'
        src ={photo}
        alt = {name}
        borderRadius='lg'
        width='100%' // Set width to 100% to ensure the image fills its container
          height='11rem' // Set a fixed height for uniformity, adjust as needed
          objectFit='cover'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{name}</Heading>
        <Text>
          This sofa is perfect for modern tropical spaces, baroque inspired
          spaces.
        </Text>
        <Text color='blue.600' fontSize='2xl'>
        ₹{price}   
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue'>
          Buy now
        </Button>
        <Button variant='ghost' colorScheme='blue'>
          Add to cart
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
  )
}

export default ProductCard
