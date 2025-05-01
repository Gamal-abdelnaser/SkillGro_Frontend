import React, { useState } from "react";
import {

  Box,
  Button,
  Input,
  Heading,
  Text,
  VStack,
  HStack,
  Field,
  Flex,
  Stack,
  Image,
  Span,
  Checkbox,
} from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";
import GoogleIcon from "@/assets/sign.svg";
import arrow1 from '../../../assets/arrow1.gif'
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { hasMinLength, isEmail, isNotEmpty } from "@/utilitis/validation";
import SubmitSuccess from "@/pages/login/regiester/Success";

const Login = () => {
  const [showSuccess, setShowSuccess] = useState(false)
  const [errorMessages, setErrorMessages] = useState({
    email: '',
    password: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Reset error when input becomes valid
    if (name === "email") {
      if (isNotEmpty(value) && isEmail(value)) {
        setErrorMessages((prev) => ({ ...prev, email: '' }));
      }
    }

    if (name === "password") {
      if (isNotEmpty(value) && hasMinLength(value, 6)) {
        setErrorMessages((prev) => ({ ...prev, password: '' }));
      }
    }
  };

  const [formData, setFormData] = useState({
    password: '',
    email: '',
  });


  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};

    if (!isNotEmpty(formData.email)) {
      errors.email = "Email is Required";
    } else if (!isEmail(formData.email)) {
      errors.email = "Email should contain @";
    }

    if (!isNotEmpty(formData.password)) {
      errors.password = "Password is Required";
    } else if (!hasMinLength(formData.password, 6)) {
      errors.password = "Password should be at least 6 characters long";
    }

    setErrorMessages(errors);

    if (Object.keys(errors).length === 0) {
      toaster.success("Submited Successfuly");
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({ email: '', password: '' })
      }, 3000)
      // هنا ممكن تروح للداشبورد أو أي حاجة
    }

  };


  return (
    <Flex flexDir={'column'} alignItems={'center'} justifyContent={'center'} bgGradient="linear(to-r, teal.500, green.500)">

      <Stack w={'full'} py={{ base: '50px', md: '100px' }} mt={'80px'} alignItems={'center'} justifyContent={'center'} bg={'#161439'} px={6} gap={{ base: 3, md: 8 }} >
        <Stack maxW={'1500px'} w={'100%'} px={6} gap={{ base: 3, md: 8 }}>
          <Heading fontSize={{ base: 'lg', md: '4xl' }} color={'#fff'} fontWeight={'bold'}>Student Login</Heading>
          <Flex alignItems={'center'} textAlign={'start'} gap={2} color="#fff" w={'full'}>
            <Link color="#fff" to={'/'}>Home</Link> <IoIosArrowForward color="#7f7e97" size={12} /> <Text color="#726de7" > Login</Text>
          </Flex>
        </Stack>
      </Stack>
      <Stack w={'full'} maxW={'1500px'} alignItems={'center'} justifyContent={'center'} >
        <Box
          w={{ base: '95%', md: '70%' }}
          mx="auto"
          mt="50px"
          maxW={'1500px'}
          p={{ base: '4', md: "10" }}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="lg"
          bg={'#f7f7fa'}
          border={'1px solid #E1E1E1'}
          as={'form'}
          noValidate
          onSubmit={handleSubmit}
        >
          <Heading mb="6" fontSize={'4xl'} fontWeight={'bold'} color={'#161439'} >
            Welcome back!
          </Heading>
          <Text color={'#6d6c80'} fontSize={'md'} >Hey there! Ready to log in? Just enter your username and password below and you'll be back in action in no time. Let's go!</Text>
          <Flex w={'100%'} alignItems={'center'} justifyContent={'center'} p={2} mt={4} mb={4} >
            <Stack w={'100%'} bg={'#fff'} paddingX={4} py={2} alignItems={'center'} color={'#1c1a4a'} transition={'.3s'} _hover={{ border: '1px solid #5751e1', color: '#5751e1' }} justifyContent={'center'} border={'1px solid #E1E1E1'} borderRadius={'md'}>
              <Button bg={'none'} href='#' gap={2} textDecoration={'none'} color={'#1c1a4a'} fontSize={{ base: 'sm', md: 'md' }} fontWeight={'semibold'}  >
                <Image src={GoogleIcon} /> <Span fontSize={'sm'}>Continue with google</Span>
              </Button>
            </Stack>
          </Flex>
          <Stack w={'full'} my={4} alignItems={'center'} justifyContent={'center'} >
            <Flex w={'100%'} alignItems={'center'} justifyContent={'center'} textAlign={'center'}  >
              <Stack h='1px' w='100%' bg='#e1e1e1'></Stack><Text p={4} textAlign={'center'} color={'#161439'}>  Or </Text> <Stack h='1px' w='100%' bg='#e1e1e1'></Stack>
            </Flex>
          </Stack>
          <VStack gap="4">

            <Field.Root invalid={!!errorMessages.email}>
              <Field.Label color={'#161439'} fontSize={'xl'} mb={2}>Email</Field.Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                outline={'none'}
                border={'1px solid #E1E1E1'}
                bg={'#fff'}
                transition={'all .3s ease-out 0s'}
                p={6}
                fontSize={'md'}
                fontWeight={'normal'}
                color={'#161439'}
                mb={1}
              />
              {errorMessages.email && (
                <Field.ErrorText pl={2}>{errorMessages.email}</Field.ErrorText>
              )}
            </Field.Root>
            <Field.Root invalid={!!errorMessages.password}>
              <Field.Label color={'#161439'} fontSize={'xl'} mb={2}>Password</Field.Label>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                outline={'none'}
                border={'1px solid #E1E1E1'}
                bg={'#fff'}
                transition={'all .3s ease-out 0s'}
                p={6}
                fontSize={'md'}
                fontWeight={'normal'}
                color={'#161439'}
                mb={1}
              />
              {errorMessages.password && (
                <Field.ErrorText pl={2}>{errorMessages.password}</Field.ErrorText>
              )}
            </Field.Root>
            <Flex w={'100%'} alignItems={'center'} justifyContent={'space-between'} p={2} mt={2} mb={4} >
              <Checkbox.Root variant={'solid'} >
                <Checkbox.HiddenInput />
                <Checkbox.Control />
                <Checkbox.Label color={'#161439'} fontSize={{ base: 'sm', md: 'lg' }} fontWeight={'normal'}>Remember me</Checkbox.Label>
              </Checkbox.Root>
              <Button src='#' bg={'none'} color={'#5751e1'} fontSize={{ base: 'sm', md: 'lg' }} fontWeight={'normal'} textDecoration={'underline'}> Forgot Password? </Button>
            </Flex>
            <Button
              type="submit"
              position={'relative'}
              rounded={'full'}
              size={'lg'}
              width={'full'}
              textAlign={'center'}
              colorScheme={'red'}
              bg={'#ffc224'}
              fontWeight={'600'}
              fontSize={{ base: 'md', md: 'lg' }}
              transition={'.3s linear'}
              color={'#000'}
              justifyContent={'center'}
              alignItems={'center'}
              border={'2px solid #000'}
              boxShadow="4px 4px #3d3d3d" p="6" borderRadius={"30px"}
              _hover={{ bg: ' #5751e1', boxShadow: "0px 0px 0px #000", color: '#fff', border: '2px solid #5751e1' }}>
              Sign In <Image width={'25px'} color={'#fff'} right={0} src={arrow1} />
            </Button>
            <HStack justifyContent="center" fontSize={'lg'} gap={2} mt={4}>
              <Text color={'#6d6c80'} fontSize={{ base: 'sm', md: 'lg' }}>
                Don't have an account?
              </Text>
              <Button as={Link} bg={'none'} fontSize={{ base: 'sm', md: 'lg' }} to={'/registration'}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                color={'#5751e1'} fontWeight={'normal'} textDecoration={'underline'}>
                Sign Up
              </Button>
            </HStack>
            {setShowSuccess && <SubmitSuccess text={'Welcome in Your Home'} showModal={showSuccess} closeModal={() => setShowSuccess(false)} />}
          </VStack>
        </Box>
      </Stack>


    </Flex>
  );
};

export default Login;