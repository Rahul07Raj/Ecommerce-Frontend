// import { Link } from "react-router-dom";
// import {
//   FaSearch,
//   FaShoppingBag,
//   FaSignInAlt,
//   FaUser,
//   FaSignOutAlt,
// } from "react-icons/fa";
// import { useState } from "react";
// // import { User } from "../types/types";
// // import { signOut } from "firebase/auth";
// // import { auth } from "../firebase";
// // import toast from "react-hot-toast";

// // interface PropsType {
// //   user: User | null;
// // }
// const user = {_id:"kasdfjkals",role:"admin"}

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const logoutHandler = async () => {
//     try {
//     //   await signOut(auth);
//     //   toast.success("Sign Out Successfully");
//       setIsOpen(false);
//     } catch (error) {
//     //   toast.error("Sign Out Fail");
//     }
//   };

//   return (
//     <nav className="header">
//       <Link onClick={() => setIsOpen(false)} to={"/"}>
//         HOME
//       </Link>
//       <Link onClick={() => setIsOpen(false)} to={"/search"}>
//         <FaSearch />
//       </Link>
//       <Link onClick={() => setIsOpen(false)} to={"/cart"}>
//         <FaShoppingBag />
//       </Link>

    //   {user?._id ? (
    //     <>
    //       <button onClick={() => setIsOpen((prev) => !prev)}>
    //         <FaUser />
    //       </button>
    //       <dialog open={isOpen}>
    //         <div>
    //           {user.role === "admin" && (
    //             <Link onClick={() => setIsOpen(false)} to="/admin/dashboard">
    //               Admin
    //             </Link>
    //           )}

    //           <Link onClick={() => setIsOpen(false)} to="/orders">
    //             Orders
    //           </Link>
    //           <button onClick={logoutHandler}>
    //             <FaSignOutAlt />
    //           </button>
    //         </div>
    //       </dialog>
    //     </>
    //   ) : (
    //     <Link to={"/login"}>
    //       <FaSignInAlt />
    //     </Link>
    //   )}
//     </nav>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Link, Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

// import Logo from "./Logo";

const user = {_id:"kasdfjkals",role:"admin"}


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
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({isOpen }) => {
    const [isopen, setIsopen] = useState(false);

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
        <MenuItem to="/cart">  <FaShoppingBag /> </MenuItem>
        <MenuItem to="/search">  <FaSearch /> </MenuItem>
        <MenuItem to="/pricing">Pricing </MenuItem>

        {user?._id ? (
        <>
          <button
           onClick={() => setIsopen((prev) => !prev)}
           >
            <FaUser />
          </button>
          <dialog open={isopen}>
            <div>
              {user.role === "admin" && (
                <Link  to="/admin/dashboard">
                  Admin
                </Link>
              )}

              <Link to="/orders">
                Orders
              </Link>
              <button >
                <FaSignOutAlt />
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to={"/login"}>
          <FaSignInAlt />
        </Link>
      )}
        
        <MenuItem to="/signup" isLast>
          <Button
            size="sm"
            rounded="md"
            color={["primary.500", "primary.500", "white", "white"]}
            bg={["white", "white", "primary.500", "primary.500"]}
            _hover={{
              bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
            }}
          >
            Create Account
          </Button>
        </MenuItem>
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