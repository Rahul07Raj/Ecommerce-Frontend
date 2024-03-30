import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import CartItemCard from "../components/CartItemCard";

const cartItems =[
  {
    productId:"askjfdadsjk",
    photo:"https://m.media-amazon.com/images/I/51ltGkq0m5L._SX679_.jpg",
    name:"macBook",
    price:400000,
    quantity:3,
    stock:2
  },
  {
    productId:"fjgffk",
    photo:"https://m.media-amazon.com/images/I/31mP2xqhAnL._SX300_SY300_QL70_FMwebp_.jpg",
    name:"Guitar",
    price:4000,
    quantity:5,
    stock:32
  },
]
const Cart = () => {


  const [couponCode, setCouponCode] = useState("");
  const [isValidCouponCode, setIsValidCouponCode] = useState(false);

  const incrementHandler = () => {
  };
  const decrementHandler = () => {
  };
  const removeHandler = (productId) => {
  };

  return (
    <Box
      className="cart"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      p={[2, 4, 6, 8]}
    >
      <Box flex="2">
        {cartItems.length > 0 ? (
    
          cartItems.map((cartItem, idx) => (
            <CartItemCard
              key={idx}
              cartItem={cartItem}
              photo={cartItem.photo}
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
              removeHandler={removeHandler}
              name={cartItem.name}
              price={cartItem.price}
            />
          ))
        ) : (
          <Text fontSize="xl" fontWeight="bold" textAlign="center">
            No Items Added
          </Text>
        )
        }
      </Box>
      <Box flex="1" ml={["1rem","4rem","0.3rem","1rem"]} p={["0.5rem","4rem","4rem","8rem"]} >
        <Text fontSize="xl">Subtotal: ₹4000</Text>
        <Text fontSize="xl">Shipping Charges: ₹40</Text>
        <Text fontSize="xl">Tax: ₹10</Text>
        <Text fontSize="xl">
          Discount:5
          <Text as="em" color="red">
            - ₹1000
          </Text>
        </Text>
        <Text fontSize="2xl" fontWeight="bold">
          Total: ₹54000
        </Text>

        <Input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          mt="2"
        />

        {couponCode &&
          (isValidCouponCode ? (
            <Text color="green">
              ₹{} off using the <Box as="code">{couponCode}</Box>
            </Text>
          ) : (
            <Text color="red">
              Invalid Coupon <VscError />
            </Text>
          ))}

        {/* {cartItems.length > 0 && ( */}
          <Link to="/shipping">
            <Button mt="4" colorScheme="blue">
              Checkout
            </Button>
          </Link>
        {/* )} */}
      </Box>
    </Box>
  );
};

export default Cart;
