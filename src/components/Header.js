import React, { useState } from "react";
import { Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { useCart } from "./CartContext";

const user = { _id: "kasdfjkals", role: "" };

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  //   const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props} justify="flex-end">
      {/* <Logo
        w="100px"
        color={["white", "white", "primary.500", "primary.500"]}
      /> */}
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link to={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  const [isopen, setIsopen] = useState(false);
  const { cartItems } = useCart();
  const isLoggedIN = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
      navigate("/login");
  };

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>

        <MenuItem
          // onClick={() => {
          //   if(!isLoggedIN  ){navigate("/login") }else{ navigate("/cart")};
          // }}
          to={!isLoggedIN?"/login":"/cart"}
        >
          <FaShoppingBag />
          {cartItems.length > 0 && <span>{cartItems.length}</span>}{" "}
        </MenuItem>

        <MenuItem to="/search">
          {" "}
          <FaSearch />{" "}
        </MenuItem>

        {user?._id ? (
          <>
          {isLoggedIN?
            <button onClick={() => setIsopen((prev) => !prev)}>
              <FaUser />
            </button>:""
          }
            {user.role === "admin" && (
              <MenuItem to="/admin/dashboard">Admin </MenuItem>
            )}
            {isLoggedIN ? <MenuItem to="/orders">Orders </MenuItem> : ""}
            {
            isLoggedIN?
            <button>
              <FaSignOutAlt onClick={handleLogout} />
            </button>:""
            }
          </>
        ) : (
          <Link to={"/login"}>
            <FaSignInAlt />
          </Link>
        )}
        {!isLoggedIN ? (
          <MenuItem to="/login" isLast>
            <Button
              size="sm"
              rounded="md"
              color={["primary.500", "primary.500", "white", "white"]}
              bg={["white", "white", "primary.500", "primary.500"]}
              _hover={{
                bg: [
                  "primary.100",
                  "primary.100",
                  "primary.600",
                  "primary.600",
                ],
              }}
            >
              Log In
            </Button>
          </MenuItem>
        ) : (
          ""
        )}
        {!isLoggedIN ? (
          <MenuItem to="/signup" isLast>
            <Button
              size="sm"
              rounded="md"
              color={["primary.500", "primary.500", "white", "white"]}
              bg={["white", "white", "primary.500", "primary.500"]}
              _hover={{
                bg: [
                  "primary.100",
                  "primary.100",
                  "primary.600",
                  "primary.600",
                ],
              }}
            >
              Sign Up
            </Button>
          </MenuItem>
        ) : (
          ""
        )}
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Header;
