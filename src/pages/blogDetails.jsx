'use client'

import {  useColorModeValue } from '@/components/ui/color-mode';
import { AspectRatio, Box, Button, Checkbox, Flex, Grid, GridItem, Heading,  IconButton,  Image, Input, InputGroup, Portal, Select, Span, Stack, Text, VStack } from '@chakra-ui/react';
import { HStack, Icon, List, SimpleGrid } from '@chakra-ui/react';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IoIosArrowForward, IoIosSearch } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import { MdKeyboardArrowRight, MdOutlineCalendarToday } from 'react-icons/md';
import { PiStudent } from 'react-icons/pi';
import { FaFacebook, FaInstagram, FaQuoteRight, FaStar, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';

import { useEffect, useState } from 'react';
import { BiBookAlt, BiCertification, BiCheckShield, BiSearch, BiSolidBarChartAlt2, BiTimeFive } from 'react-icons/bi';
import { RiGraduationCapLine } from 'react-icons/ri';
import blogDetailsImage from '../assets/blog_details.jpg'
import { Search } from 'lucide-react';
import { LuSearch, LuUser } from 'react-icons/lu';
import { FiChevronRight, FiClock, FiMessageSquare, FiUser } from 'react-icons/fi';
import man2 from '../assets/man2.png'
import { TiSocialFacebook, TiSocialLinkedin, TiSocialPinterest, TiSocialTwitter } from 'react-icons/ti';
export default function BlogDetails() {

  const params = useParams();
  let id = params.blogId


  const getProductList = async () => {
    const { data } = await axios.get(
      `http://localhost:1337/api/blogs?populate=image&filters[id][$eq]=${id}`
    );
    return data;
  };

  const { isLoading, data } = useQuery({
    queryKey: ["blogs", id],
    queryFn: getProductList
  });

  // console.log(resData);
  // const goBack = () => navigate(-1);

  useEffect(() => {
    document.title = `product Store | Product ${id} Page`;
  })


  // if (isLoading) return <h3>Loading...</h3>;
  // if (isLoading) return <div>
  //   {Array.from({ length: 1 }, (_, idx) => (
  //     <Skelaton key={idx} />
  //   )
  //   )}
  // </div>;
  
  let resData = data?.data[0]
  const url = resData?.image?.formats?.thumbnail?.url;
  console.log(resData);
  console.log(url);
  


  return (
    <Stack as={Flex} w={'100%'} py={'10px'} alignItems={'center'} justifyContent={'center'} gap={1} >
      <Stack w={'full'} py={{base:'50px',md:'100px'}} mt={'80px'} alignItems={'center'} justifyContent={'center'}  bg={'#161439'} px={6} gap={{base:3,md:8}} >
        <Stack maxW={'1500px'} w={'100%'} px={6} gap={{ base: 3, md: 8 }}>
          <Heading fontSize={{ base: 'lg', md: '4xl' }} color={'#fff'} fontWeight={'bold'}>Blog Details</Heading>
          <Flex alignItems={'center'} textAlign={'start'} gap={2} color="#fff"  w={'full'}>
            <Link color="#fff" to={'/'}>Home</Link> <IoIosArrowForward color="#7f7e97" size={12} /> <Link color="#fff" to={'/'}> Courses</Link> <IoIosArrowForward color="#7f7e97" size={12} /><Text color="#726de7" > {resData?.title}</Text>
          </Flex>
        </Stack>
      </Stack>
      <Flex maxW={'1500px'} w={'100%'} alignItems={'center'} m={0} justifyItems={'center'}>
        <Flex position={'relative'} w={'98%'} pt={'100px'} alignItems={{ md: 'start', base: 'center' }} justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row' }} mx={'auto'}>
          <LeftContainer resData={resData} url={url} />
          <Rightcontainer resData={resData} />
        </Flex >
      </Flex>
    </Stack>

  )
}



//Right Container

const courseData = [
  {
    title: 'Level',
    value: 'Expert',
    icon: <BiSolidBarChartAlt2 color='#7f7e97' />,
  },
  {
    title: 'Duration',
    value: '11h 20m',
    icon: <BiTimeFive color='#7f7e97' />,
  },
  {
    title: 'Lessons',
    value: '12',
    icon: <BiBookAlt color='#7f7e97' />,
  },
  {
    title: 'Quizzes',
    value: '145',
    icon: <BiCheckShield color='#7f7e97' />,
  },
  {
    title: 'Certifications',
    value: 'Yes',
    icon: <BiCertification color='#7f7e97' />,
  },
  {
    title: 'Graduation',
    value: '25K',
    icon: <RiGraduationCapLine color='#7f7e97' />,
  },
];

const BlogItem = ({ text, icon, iconBg }) => {
  return (
    <Stack
      direction="row"
      align="center"
      role="group" // نحتاجه عشان نستخدم _groupHover
      cursor="pointer"
      gap={4}
    >
      <Flex
        w={{base:5,md:8}}
        h={{ base: 5, md: 8 }}
        align="center"
        justify="center"
        rounded="full"
        bg={iconBg}
        transition="0.3s ease"
        _groupHover={{
          boxShadow: '5px 4px 1px #00000040', // تأثير الظل لما نحط الماوس على العنصر كله
        }}
        fontSize={{base:'5px',md:'12px'}}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} fontSize={{ base: '14px', md: '16px' }} color="#000">
        {text}
      </Text>
    </Stack>
  );
};

const categories = [
  { label: "Art & Design", icon: <FiChevronRight /> },
  { label: "Business", icon: <FiChevronRight /> },
  { label: "Data Science", icon: <FiChevronRight /> },
  { label: "Development", icon: <FiChevronRight /> },
  { label: "Finance", icon: <FiChevronRight /> },
  { label: "Health & Fitness", icon: <FiChevronRight /> },
  { label: "Lifestyle", icon: <FiChevronRight /> }
];

function BlogFeature({ text }) {
  const data = [
    ' Work with color & Gradients & Grids', 'All the useful shortcuts', 'Be able to create Flyers, Brochures, Advertisements', 'How to work with Images & Text']
  return (
    
    <Stack
      gap={2}
      fontSize={{base:'16px',md:'20px'}}
      >
        {
          data.map((item ,index) => {
            return <BlogItem key={index}
              icon={<Icon as={MdKeyboardArrowRight} size={'16px'} color={'#000'} border={'1px solid #282568'} borderRadius={'100%'} w={'100%'} h={'100%'} boxShadow="5px 4px 1px #00000040" _hover={{ boxShadow: "0px 0px 0px #00000040" }} transition={'.5s'} />}
              iconBg={'#ffc224'}
              text={item}
              
            />
            
          })
        }
    </Stack>
  );
}

function Rightcontainer({  resData }) {
  return(
    <Stack position={'relative'} display={{md:'block' ,base:'none'}} top={0} m={0} w={{ base: '90%', md: '30%' }} p={0}   >
      <Box p={5} gap={8} >
        <Stack gap="4">
          {/* <Input placeholder="Subtle" outline={'none'} border={'none'} bg={'#f7f7f9'} variant="subtle" end={<LuUser />} /> */}
          <InputGroup borderRadius={'sm'}  borderStart={'none'} outline='none' transition={'.3s '} border={'none'} bgColor={'none'} borderColor={'none'} color='#5751e1'  endAddon={<LuSearch size={30} cursor={'pointer'} outline='none' border='none' />}>
            <Input placeholder="Search here" fontSize={'md'} p={6} outline={'none'} border={'none'} bg={'#f7f7f9'} variant="subtle"  />
          </InputGroup>
        </Stack>

        <Stack gap={2} color={'#fff'} mt={6} borderRadius={'md'} bg={'#f7f7f9'} p={'20px'}>
          <Span color={'#161439'} fontWeight={'bold'} fontSize={'2xl'}> Categories</Span>
          <Flex flexDir={'column'} p={0} m={0} gap={0} fontSize={'30px'} fontWeight={'700'} textAlign={'center'} alignItems={'center'}  >
           {
              categories.map((item,index) => {
                return(
                  <Stack key={index} gap={0} m={0} alignItems={'center'} color={'#6d6c80'} _hover={{ color: '#5751e1' }}  flexDirection={'row'} w={'100%'} p={1} borderRadius={'10px'}  transition={'.5s'} cursor={'pointer'}>
                    <IconButton color={'#5751e1'} m={0} fontSize={'20px'} bg={'none'}> {item.icon}   </IconButton >
                    <Text  m={0} fontSize={'16px'} fontWeight={'medium'}>{item.label}</Text>
                  </Stack>
                )
              })
           }
          </Flex>
        </Stack>
        
        

      </Box>
    </Stack>
  )
}


function Autor() {
  return (
    
    <Flex direction="row" align="center" p={6} gap={6} bg={'#f7f7fa'} rounded={'xl'}>
          <Box
            border={'2px solid #DCDCEB'}
            borderRadius={'100%'}
            w='fit'
            rounded="full"
            mb="4"
          >
            <Image
              src={man2}
              alt={'ga'}
              // w="100%"
              // h="100%"
              objectFit="contain"
              bg={'none'}
              w="6rem"
              h="6rem"
            />
          </Box>
          <Box flex={2} gap={0} >
            <Text color="#1c1a4a" fontSize={'sm'} mb="1">Author</Text>
            <Heading fontSize="20px" color={'#161439'} fontWeight={'semibold'} mb="2">Brooklyn Simmons</Heading>
            
            <Text color="gray.600" fontSize={'sm'} mb={3}>
              Finanappreciate your trust greatly Our clients choose dentace ducts
              a curae in tristique liberois ultricesdiamraesent varius diam dui.
              Class aptent taciti sociosqu ad litora torquent per.
            </Text>
            {/* <Flex gap="3">
              {[<FaFacebook />, <FaInstagram />, <FaWhatsapp />, <FaXTwitter />].map((ic, index) => {
                return <Icons key={index} ic={ic} />
              })}
            </Flex> */}
          </Box>
        </Flex>
  );
}
//Left Container

function LeftContainer({ resData, url }) {



  return (
    <Stack position={'relative'}  m={0} mb={10} w={{ base: '100%', md: '70%' }} p={0} >
      <Box w={'100%'} px={8} gap={8} >
        <Flex mb={4} flex={1} w={'100%'}>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={blogDetailsImage}
            position={'cover'}
            align={'center'}
            borderRadius={'20px'}
            flex={1} 
            w={'100%'}
            h={'100%'}
          />
        </Flex>
        <Stack gap={{ base: 6, md: 10 }}>
          <Stack gap={2}>
            <Flex width={{ base: '100%', md: '100%' }} fontSize={{ base: '12px', md: 'md' }} alignItems={'center'} gap={2} py={1} >
              <Text color={'#6d6c80'} display={'flex'} alignItems={'center'} textAlign={'center'} gap={2} > <MdOutlineCalendarToday color="#5751e1" size={20} /> 20 July, 2024</Text>
              <Text color={'#6d6c80'} display={'flex'} alignItems={'center'} textAlign={'center'} gap={2} > <FiUser color="#5751e1" size={20} /> By Admin</Text>
              <Text color={'#6d6c80'} display={'flex'} alignItems={'center'} textAlign={'center'} gap={2} > <FiClock color="#5751e1" size={20} /> 5 Min Read</Text>
              <Text color={'#6d6c80'} display={'flex'} alignItems={'center'} textAlign={'center'} gap={2} > <FiMessageSquare color="#5751e1" size={20} /> 05 Comments</Text>
            </Flex>
            <Heading
              lineHeight={1.1}
              fontWeight={700}
              fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}
              >
              {resData?.title}

            </Heading>
            
            <Flex gap={2} width={{ base: '100%', md: '100%' }} alignItems={'center'} justifyContent={'space-between'} flexDirection={'column'}>
              
              <Text color={'#6d6c80'} display={'flex'} alignItems={'center'}  gap={2} fontSize={{ base: 'sm', md: 'md' }}> 
                Maximus ligula eleifend id nisl quis interdum.
                 Sed malesuada tortor non turpis semper bibendum.
                  Ut ac nisi porta,
                   malesuada risus nonrra dolo areay Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia curae
                    in tristique libero, quis ultrices diamraesent varius diam dui. Class aptent taciti
                     sociosqu ad litora torquent per conubia nostra.Maximus ligula eleifend.
              </Text>
              <Text color={'#6d6c80'} display={'flex'} alignItems={'center'}  gap={2} fontSize={{ base: 'sm', md: 'md' }}> 
                Maximus ligula eleifend id nisl quis interdum.
                 Sed malesuada tortor non turpis semper bibendum.
                  Ut ac nisi porta,
                   malesuada risus nonrra dolo areay Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia curae
                    in tristique libero, quis ultrices diamraesent varius diam dui. Class aptent taciti
                     sociosqu ad litora torquent per conubia nostra.Maximus ligula eleifend.
              </Text>
            </Flex>

            <Box
              bg="#f1f0ff"
              p={8}
              borderLeft="4px solid #574fd6"
              position="relative"
              borderRadius="md"
              
              textAlign={'center'}
            >
              <Text
                fontStyle="italic"
                fontSize="lg"
                color="black"
                pr={12}
                lineHeight="1.8"
              >
                “ urabitur varius eros rutrum consequat Mauris areathe sollicitudin enim
                condimentum luctus enim justo non molestie nisl ”
              </Text>
              <Icon
                as={FaQuoteRight}
                color="#c7c3fc"
                boxSize={10}
                position="absolute"
                right={6}
                top={6}
              />
            </Box>

            <Text color={'#6d6c80'} display={'flex'} alignItems={'center'} gap={2} fontSize={{ base: 'sm', md: 'md' }}>
              Maximus ligula eleifend id nisl quis interdum.
               Sed malesuada tortor non turpis semper bibendum. Ut ac nisi porta,
                malesuada risus nonrra dolo areay Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
            </Text>

            <Box>
              <Heading fontSize={{ base: '2xl', md: "3xl" }} fontWeight={600} mb="4" color={'#161439'}>What you'll learn in this course?</Heading>
              <Text color="#6d6c80" fontSize={{ base: '13px', md: '16px' }} fontWeight={400} mb="2">
                Maximus ligula eleifend id nisl quis interdum.
                Sed malesuada tortor non turpis semper bibendum. Ut ac nisi porta,
                malesuada risus non viverra dolor.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.
              </Text>
              <VStack gap="2" align="stretch" my={4}>
                <BlogFeature />
              </VStack>
              <Text color="#6d6c80" fontSize={{ base: '13px', md: '16px' }} fontWeight={400} mb="2" display={{ base: 'none', md: 'block' }}>
                Maximus ligula eleifend id nisl quis interdum. Sed malesuada tortor non turpis semper bibendum. Ut ac nisi porta,
                malesuada risus nonrra dolo areay Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia 
                curae in tristique libero, quis ultrices diamraesent varius diam dui. Class aptent taciti sociosqu ad litora torquent
                per conubia nostra.Maximus ligula eleifend id nisl quis interdum.
                Sed malesuada tortor non turpis semper bibendum. Ut ac nisi porta, malesuada risus nonVestibulum ante ipsum primis
              </Text>
            </Box>
            
            <Flex borderY={'1px solid #E8E8E8'} p={0} py={4} bg={'bck'} m={0} gap={4} width='100%'  display={'flex'} justifyContent={{base:'start',md:'space-between'}} flexDirection={{base:'column',md:'row'}} alignItems={'start'}>
                {/* <Text>fg</Text>
                <Text>fgf</Text> */}
               <Stack w={'fit'} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'row'} bg={'#fff'}>
                <Text fontSize={'xl'} fontWeight={'bold'}> Tags :</Text>
                <Stack flexDir={'row'} m={0} alignItems={'center'} justifyContent={'center'} textAlign={'center'} gap={2} ml={2}>
                  <Button bg={'#5751e1'} m={0} transition={'.3s'} _hover={{ bg:'#ffc224', color:'#000'}} borderRadius={'40px'} >Bath Cleaning</Button>
                  <Button bg={'#5751e1'} m={0} transition={'.3s'} _hover={{ bg: '#ffc224', color: '#000' }} borderRadius={'40px'}>Cleaning</Button>
                </Stack>
              </Stack>

              <Stack display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'row'} w={'fit'} bg={'#fff'}>
                <Text fontSize={'xl'} fontWeight={'bold'} >Share :</Text>
                <Stack  fontWeight={'bold'} gap={1} flexDirection={'row'} >
                  { [<TiSocialFacebook  />, <TiSocialTwitter />, <TiSocialPinterest />, <TiSocialLinkedin />].map((ic, index) => {

                    return <Box color={'#6d6c80'} transition={'.3s'} _hover={{ color: '#ffc224' }} fontSize={'3xl'} key={index}>{ic}</Box>
                    }
                  )}
                </Stack>
              </Stack> 

              {/* <Box></Box> */}
            </Flex>

            <Box mt={4}>
              <Autor />
            </Box>


          
          </Stack>
          
        
        </Stack>
        
      </Box>
    </Stack>
  )
}