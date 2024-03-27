'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
const Signup = ()=> {
  const [showPassword, setShowPassword] = useState(false)

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
    const navigate = useNavigate();

  const handleSubmit = async ()=>{
    try {
        const body = {
            name, email, mobile, password
        }
        const res = await axios.post(`http://localhost:8000/api/v1/user/register`, body)
        console.log(res);
        if(res.status === 200){
            localStorage.setItem('token', JSON.stringify(res.data.token));
            navigate('/')
        }
    } catch (error) {
        console.log(error);
    }

  }
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          w={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input value={name} onChange={(e)=>{setName(e.target.value)}} type="name" />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" />
            </FormControl>
            <FormControl id="mobile" isRequired>
              <FormLabel>Mobile</FormLabel>
              <Input value={mobile} onChange={(e)=>{setMobile(e.target.value)}} type="mobile" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input value={password} onChange={(e)=>{setPassword(e.target.value)}} type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link onClick={()=>navigate('/login')} color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
export default Signup;
