import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  Center,
  useToast
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  console.log(number)
  console.log(password)

  return (
    <Center>
      <Box
        w="30rem"
        d="flex"
        justifyContent="center"
        alignItems="center"
        mt={"2rem"}
      >
        <Box
          // w="90%"
          // maxW="400px"
          textAlign="center"
          p={25}
          shadow="lg"
          rounded="md"
        >
          <h1 style={{ fontWeight: "600", fontSize: "1.7rem" }}>LOGIN</h1>

          <VStack spacing={4} align="stretch">
            <FormControl isRequired>
              <FormLabel>Mobile Number</FormLabel>
              <Input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </VStack>
          <Button
            rounded="md"
            mt={3}
            p={3}
            w={"10rem"}
            onClick={() => {
            (number && password) ?navigate("/"):toast({
                title: "please enter no or password",
                status: "error",
                isClosable: true,
              })
              
            }}
            size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
            Login
          </Button>
          <Box textAlign="center" mt={4}>
            <Button
              leftIcon={<FcGoogle />}
              colorScheme="blue"
              variant="outline"
              mt="1rem"
            >
              Sign in with Google
            </Button>
          </Box>
        </Box>
      </Box>
    </Center>
  );
};

export default Login;
