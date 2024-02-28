import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { Flex, Image, Text, Button } from "@chakra-ui/react";
// type CartItemProps = {
//   cartItem: CartItemType;
//   incrementHandler: (cartItem: CartItemType) => void;
//   decrementHandler: (cartItem: CartItemType) => void;
//   removeHandler: (id: string) => void;
// };

const CartItemCard = ({
  photo,
  productId,
  name,
  price,
  quantity,
  decrementHandler,
  incrementHandler,
  removeHandler,
}) => {
  return (
    <Flex
      className="cart-item"
      direction={{ base: "column", md: "row" }}
      alignItems="center"
    >
      <Image
        src={photo}
        alt={name}
        boxSize={{ base: "100px", md: "150px" }}
        mr={{ md: "4" }}
      />

      <Flex
        flexDir="column"
        alignItems="flex-start"
        justifyContent="center"
        flex="1"
      >
        <Link to={`/product/${productId}`}>
          <Text fontSize="lg" fontWeight="bold" mb="2">
            {name}
          </Text>
        </Link>
        <Text fontSize="lg">₹{price}</Text>
      </Flex>

      <Flex alignItems="center" ml={{ md: "4" }}>
        <Button variant="outline" onClick={() => decrementHandler()}>
          -
        </Button>
        <Text mx="2">{5}</Text>
        <Button variant="outline" onClick={() => incrementHandler()}>
          +
        </Button>
      </Flex>

      <Button
        onClick={() => removeHandler(productId)}
        ml="2"
        aria-label="Remove"
      >
        <FaTrash />
      </Button>
    </Flex>
  );
};

export default CartItemCard;
