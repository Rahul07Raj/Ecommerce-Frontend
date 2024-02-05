// import axios from "axios";
import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import CartItemCard from "../components/CartItemCard";
// import {
//   addToCart,
//   calculatePrice,
//   discountApplied,
//   removeCartItem,
// } from "../redux/reducer/cartReducer";
// import { RootState, server } from "../redux/store";
import { CartItem } from "../types/types";
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
  // useSelector((e) => state.cartReducer);
  // const dispatch = useDispatch();

  const [couponCode, setCouponCode] = useState("");
  const [isValidCouponCode, setIsValidCouponCode] = useState(false);

  const incrementHandler = () => {
    // if (cartItem.quantity >= cartItem.stock) return;
    // dispatch(addToCart({ ...cartItem, quantity: cartItem.quantity + 1 }));
  };
  const decrementHandler = () => {
    // if (cartItem.quantity <= 1) return;
    // dispatch(addToCart({ ...cartItem, quantity: cartItem.quantity - 1 }));
  };
  const removeHandler = (productId) => {
    // dispatch(removeCartItem(productId));
  };

  // useEffect(() => {
  // const { token: cancelToken, cancel } = axios.CancelToken.source();

  // const timeOutID = setTimeout(() => {
  //   axios
  //     .get(`${server}/api/v1/payment/discount?coupon=${couponCode}`, {
  //       cancelToken,
  //     })
  //     .then((res) => {
  //       // dispatch(discountApplied(res.data.discount));
  //       setIsValidCouponCode(true);
  //       // dispatch(calculatePrice());
  //     })
  //     .catch(() => {
  //       dispatch(discountApplied(0));
  //       setIsValidCouponCode(false);
  //       dispatch(calculatePrice());
  //     });
  // }, 1000);

  //   return () => {
  //     clearTimeout(timeOutID);
  //     cancel();
  //     setIsValidCouponCode(false);
  //   };
  // }, [couponCode, dispatch]);

  // useEffect(() => {
  //   dispatch(calculatePrice());
  // }, [cartItems, dispatch]);

  return (
    <Box
      className="cart"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
    >
      <main flex="1">
        {/* {cartItems.length > 0 ? ( */}
      {
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
        }
        {/* ) : ( */}
          {/* <Text fontSize="xl" fontWeight="bold" textAlign="center"> */}
            {/* No Items Added */}
          {/* </Text> */}
      </main>
      <aside flex="1">
        <Text fontSize="xl">Subtotal: ₹{}</Text>
        <Text fontSize="xl">Shipping Charges: ₹{}</Text>
        <Text fontSize="xl">Tax: ₹{}</Text>
        <Text fontSize="xl">
          Discount:{" "}
          <Text as="em" color="red">
            - ₹{}
          </Text>
        </Text>
        <Text fontSize="2xl" fontWeight="bold">
          Total: ₹{}
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
      </aside>
    </Box>
  );
};

export default Cart;
