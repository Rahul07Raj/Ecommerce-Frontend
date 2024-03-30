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
import api from "../api/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  console.log(email)
  console.log(password)

  const handleLogin = async ()=>{
    try{
      const body = {email,password};
     const res = await api.post("/user/login",body);
     console.log(res);
     if(res.status===200){
      localStorage.setItem("token", JSON.stringify(res.data.token));
      toast({
        title: "Success",
        description: res.data.message,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/");
     }
    }catch(error){
        // console.log(error)
        toast({
          title: error.response.data.message,
          description: error.response.data.error,
          status: "warning",
          duration: 5000,
          isClosable: true,
        });
    }
  }

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
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            // onClick={() => {
            // // (email && password) ?navigate("/"):toast({
            // //     title: "please enter no or password",
            // //     status: "error",
            // //     isClosable: true,
            // //   })
              
            // }}
            onClick={handleLogin}
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
