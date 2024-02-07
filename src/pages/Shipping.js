import { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  useToast,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { BiArrowBack } from "react-icons/bi";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { saveShippingInfo } from "../redux/reducer/cartReducer";
// import { RootState, server } from "../redux/store";
// import axios from "axios";

const Shipping = () => {
  //   const { cartItems, total } = useSelector((state: RootState) => state.cartReducer);

  const navigate = useNavigate();
  //   const dispatch = useDispatch();
  const toast = useToast();

  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  });

  //   const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  //     setShippingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  //   };

  //   const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();

  //     dispatch(saveShippingInfo(shippingInfo));

  //     try {
  //       const { data } = await axios.post(
  //         `${server}/api/v1/payment/create`,
  //         {
  //           amount: total,
  //         },
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       navigate("/pay", {
  //         state: data.clientSecret,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //       toast({
  //         title: "Error",
  //         description: "Something went wrong",
  //         status: "error",
  //         duration: 3000,
  //         isClosable: true,
  //       });
  //     }
  //   };

//   useEffect(() => {
//     if (cartItems.length <= 0) return navigate("/cart");
//   }, [cartItems]);

  return (
    <Flex direction="column" align="center" justify="center" p={4}>
      <IconButton
        aria-label="Go back"
        icon={<BiArrowBack />}
        onClick={() => navigate("/cart")}
        mb={4}
      />

      <form style={{ width: "100%", maxWidth: "400px" }}>
        <FormControl isRequired>
          <FormLabel>Address</FormLabel>
          <Input
            type="text"
            placeholder="Address"
            name="address"
            value={shippingInfo.address}
          />
        </FormControl>

        <FormControl isRequired mt={2}>
          <FormLabel>City</FormLabel>
          <Input
            type="text"
            placeholder="City"
            name="city"
            value={shippingInfo.city}
          />
        </FormControl>

        <FormControl isRequired mt={2}>
          <FormLabel>State</FormLabel>
          <Input
            type="text"
            placeholder="State"
            name="state"
            value={shippingInfo.state}
          />
        </FormControl>

        <FormControl isRequired mt={2}>
          <FormLabel>Country</FormLabel>
          <Select
            placeholder="Choose Country"
            name="country"
            value={shippingInfo.country}
          >
            <option value="india">India</option>
          </Select>
        </FormControl>

        <FormControl isRequired mt={2}>
          <FormLabel>Pin Code</FormLabel>
          <Input
            type="number"
            placeholder="Pin Code"
            name="pinCode"
            value={shippingInfo.pinCode}
          />
        </FormControl>

        <Button type="submit" mt={4} colorScheme="blue" width="100%">
          Pay Now
        </Button>
      </form>
    </Flex>
  );
};

export default Shipping;
