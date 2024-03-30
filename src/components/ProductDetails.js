import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/api";
import { useCart } from './CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const isLoggedIN = localStorage.getItem("token");
  const { addToCart, cart } = useCart(); // 1. Import useCart and get cart state

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/product/${id}`);
        setProduct(response.data.product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    if (isLoggedIN) {
      addToCart(product); // 2. Add product to the cart
    } else {
      navigate("/login");
    }
  };

  return (
    <Flex p="4">
      <Box maxW="800px" w="100%">
        <Flex align="center" justify="center" direction={{ base: "column", md: "row" }}>
          <Box w={{ base: "100%", md: "50%" }} pr={{ base: 0, md: "4" }}>
            <Image
              src={`http://localhost:4000/${product.photo}`}
              alt={product.name}
              boxShadow="lg"
              mb={{ base: "4", md: 0 }}
            />
          </Box>
          <Box w={{ base: "100%", md: "50%" }} pl={{ base: 0, md: "4" }}>
            <Text fontSize="xl" fontWeight="bold" mb="2">
              {product.name}
            </Text>
            <Text fontSize="lg" color="blue.600" mb="2">
              ₹{product.price}
            </Text>
            <Text fontSize="md" mb="4">
              {product.description}
            </Text>
            <Button variant="solid" colorScheme="blue" mb="2">
              Buy now
            </Button>
            <Button variant="outline" colorScheme="blue" mb="2" ml="2" onClick={handleAddToCart}>
              Add to cart
            </Button>
            {/* <Text>Items in Cart: {cart.length}</Text> 3. Display the number of items in the cart */}
            {/* Add more sections like reviews, ratings, etc. */}
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ProductDetails;
