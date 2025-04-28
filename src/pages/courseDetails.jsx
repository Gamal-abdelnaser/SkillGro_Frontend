'use client'

import {  Flex,  Heading , Link,   Span, Stack, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import CourseInfo from '@/components/CourseDetails/courseInfo';
import { IoIosArrowForward } from 'react-icons/io';
import LeftContainer from '@/components/CourseDetails/LeftContainer';
import Rightcontainer from '@/components/CourseDetails/RightContainer';
import CourseSkeleton from '@/components/CourseDetails/courseSkeleton';
export default function CourseDetails() {
  const params = useParams();
  let id = params.courseId


  const getProductList = async () => {
    const { data } = await axios.get(
      `http://localhost:1337/api/courses?filters[id][$eq]=${id}&populate=image`
    );
    return data;
  };

  const { isLoading ,data } = useQuery({
    queryKey: ["courses", id],
    queryFn: getProductList
  });
  

  useEffect(() => {
    document.title = `product Store | Product ${id} Page`;
  })

  // if (isLoading) return <h3>Loading...</h3>;
  // if (true) return <div>
  //   {Array.from({ length: 10 }, (_, idx) => (
  //     <CourseSkeleton key={idx}/>
  //   )
  //   )}
  // </div>;


  let resData = data?.data[0]
  const url = resData?.image?.formats?.thumbnail?.url;

  return (
    <Stack as={Flex} w={'100%'}  py={'10px'} alignItems={'center'} justifyContent={'center'} gap={2} bg={'#F7F7F9'}>

      <Stack w={'full'} py={{base:'50px',md:'100px'}} mt={'80px'} alignItems={'center'} justifyContent={'center'}  bg={'#161439'} px={6} gap={{base:3,md:8}} >
        <Stack maxW={'1500px'} w={'100%'} px={6} gap={{ base: 3, md: 8 }}>
        <Heading fontSize={{ base: 'lg', md: '4xl' }} color={'#fff'} fontWeight={'bold'}>Course Details</Heading>
        <Flex alignItems={'center'} textAlign={'start'} gap={2} color="#fff"  w={'full'}>
            <Link color="#fff" textDecor={'none'} to={'/'}>Home</Link> <IoIosArrowForward color="#7f7e97" size={12} /> <Link color="#fff" textDecor={'none'} to={'/'}> Courses</Link> <IoIosArrowForward color="#7f7e97" size={12} /><Text color="#726de7" > {resData?.Title}</Text>
        </Flex>
        </Stack>
      </Stack>

      <Flex maxW={'1500px'} w={'100%'} alignItems={'center'}  justifyItems={'center'}> 
        <Flex position={'relative'} w={'98%'} pt={'100px'} alignItems={{md:'start', base:'center'}} gap={{base:10,md:0}}  justifyContent={'center'} flexDirection={{base:'column', md:'row'}}  mx={'auto'}>
          <LeftContainer  resData={resData} url={url}/>
          <Rightcontainer resData={resData} url={url}/>
        </Flex >
      </Flex>
    </Stack>

  )
}










