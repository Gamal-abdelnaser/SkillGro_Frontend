import React from 'react';
import {
  Box,
  Text,
  VStack,
  HStack,
  Grid,
  GridItem,
  Link,
  IconButton,
  Flex,
  Container,
  Stack,
  Image,
  Wrap,
  Icon,
  Span,
} from '@chakra-ui/react';

import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import footerImage from '../assets/footerImage.svg';
import google from '../assets/google.svg';


const companyLinks = [
  {
    title: 'Useful Links',
    links: [
      'Our values',
      'Our advisory board',
      'Our partners',
      'Become a partner',
      'Work at Future Learn',
      'Quizlet Plus',
    ],
  },
  {
    title: 'Our Company',
    links: [
      'Contact Us',
      'Become Teacher',
      'Blog',
      'Instructor',
      'Events',
    ],
  },
];

const socialLinks = [
  { icon: FaFacebook },
  { icon: FaTwitter },
  { icon: FaWhatsapp },
  { icon: FaInstagram },
  { icon: FaYoutube },
];

function Footer() {
  return (
    <Flex w={'100%'} bg="#06042e" h={'auto'} alignItems={'center'} pt={'100px'} justifyContent={'center'} direction="column">
      <Flex maxW={'1500px'}  w={'100%'} justifyContent={'center'} alignItems={'center'} direction="column">
     
        <Stack w={'100%'} direction="column">
          <Box as="main" flex="1">
            {/* Main content */}
          </Box>

          <Box color="gray.300" py={16}>
            <Container w={'95%'} px={4}>
              <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" mx={'auto'} gap={8}>
                {/* Company Info */}
                <VStack align="start" gap={4}>
                  <HStack gap={2}>
                    <Image src={footerImage}  />
                  </HStack>
                  <Text fontSize="10px" w={'60%'} >
                    when an unknown printer took galley of type and scrambled it to make pspecimen bookt has.
                  </Text>
                  <Text fontSize="sm">463 7th Ave, NY 10018, USA</Text>
                  <Text fontSize="sm">+123 88 9900 456</Text>
                </VStack>

                {/* Link Sections */}
                {companyLinks.map((section, index) => (
                  <Box key={index} gap={8}>
                    <Text 
                      position={'relative'}
                      fontSize="22px" fontWeight="semibold" color="white" mb={6}>
                      {section.title}
                      <Span position={'absolute'} bottom={'-10px'} left={0} w={'20px'} bg={'#5751e1'} h={'4px'} borderRadius={'30px'}></Span>
                    </Text>
                    <VStack align="start" gap={4} >
                      {section.links.map((link, idx) => (
                        <Link
                          key={idx}
                          href="#"
                          textDecoration={'none'}
                          transition={'.3s '}
                          color={'#b2bbcc'}
                          _hover={{  color:'#ffc224' }}
                          fontSize="16px"
                        >
                          {link}
                        </Link>
                      ))}
                    </VStack>
                  </Box>
                ))}

                {/* Get In Touch */}
                <Box>
                  <Text position={'relative'} fontSize="22px" fontWeight="semibold" color="white" mb={6}>
                    Get In Touch
                    <Span position={'absolute'} bottom={'-10px'} left={0} w={'20%'} bg={'#5751e1'} h={'4px'} borderRadius={'30px'}></Span>
                  </Text>
                  <Text mb={6} w={'60%'}>
                    when an unknown printer took galley type and scrambled
                  </Text>
                  <HStack gap={4} mb={8}>
                    {socialLinks.map((item, i) => (
                      <Icon
                        key={i}
                        variant="ghost"
                        colorScheme="whiteAlpha"
                        aria-label="social-link"
                        color={'#b2bbcc'}
                        transition={'.3s'}
                        _hover={{ color: '#ffc224' }}
                      ><item.icon size={20} /></Icon>
                    ))}
                  </HStack>
                  <HStack gap={2} w={'60%'}>
                    <HStack
                      as="a"
                      href="#"
                      gap={2}
                      rounded="lg"
                      
                    >
                      <Image w={'full'} borderRadius={'10px'} src={google} />
                    </HStack>
                    <HStack
                      as="a"
                      href="#"
                      gap={2}
                      rounded="lg"
                    >
                      <Image w={'full'} borderRadius={'10px'} src={google} />
                    </HStack>
                  </HStack>
                </Box>
              </Grid>

              {/* <Divider mt={12} borderColor="gray.800" /> */}

              
            </Container>
          </Box>
        </Stack>

      
      </Flex> 
       <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} w={'100%'}  px={'50px'} bg={'#1c1a4a'}>
          <Flex
            py={10}
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align="center"
            color={'#8c9ab4'}
            w={'95%'}
            px={'20px'}
            maxW={'1400px'}
          >
            <Text fontSize="lg">© 2024-2025 skillgro.com. All rights reserved.</Text>
            <HStack fontSize="lg"  gap={4} mt={{ base: 4, md: 0 }}>
              <Link href="#" color={'#b2bbcc'}
                transition={'.3s'}
                textDecoration={'none'}
                _hover={{ color: '#ffc224' }}>
                Term of Use
              </Link>
              <Text >|</Text>
              <Link href="#" color={'#b2bbcc'}
                transition={'.3s'}
                textDecoration={'none'}
                _hover={{ color: '#ffc224' }}  >
                Privacy Policy
              </Link>
            </HStack>
          </Flex>
        </Stack>
    </Flex>
  );
}

export default Footer;
