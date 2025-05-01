'use client'

import { Flex, Heading, Link, Span, Stack, Text } from '@chakra-ui/react';

import { useContext, useEffect } from 'react';
// import CourseInfo from '@/components/CourseDetails/courseInfo';
import { IoIosArrowForward } from 'react-icons/io';
import LeftContainer from '@/pages/coursees/LeftContainer';
import Rightcontainer from '@/pages/coursees/RightContainer';
import { CourseContext } from './courseContext';
// import CourseSkeleton from '@/components/CourseDetails/courseSkeleton';
export default function CourseDetails() {
  const { selectedCourses, setSelectedCourses } = useContext(CourseContext);

  useEffect(() => {
    const storedCourse = localStorage.getItem("selectedCourse");
    if (storedCourse) setSelectedCourses(JSON.parse(storedCourse));
  }, [setSelectedCourses]);

  useEffect(() => {
    if (selectedCourses) {
      localStorage.setItem("selectedCourse", JSON.stringify(selectedCourses));
    }
  }, [selectedCourses]);

  if (!selectedCourses) {
    return <h1 className="text-center text-red-600 text-2xl">التدريب غير موجود!</h1>;
  }

  let course = selectedCourses;


  // console.log(course);

  return (
    <Stack as={Flex} w={'100%'} py={'10px'} alignItems={'center'} justifyContent={'center'} gap={2} bg={'#F7F7F9'}>

      <Stack w={'full'} py={{ base: '50px', md: '100px' }} mt={'80px'} alignItems={'center'} justifyContent={'center'} bg={'#161439'} px={6} gap={{ base: 3, md: 8 }} >
        <Stack maxW={'1500px'} w={'100%'} px={6} gap={{ base: 3, md: 8 }}>
          <Heading fontSize={{ base: 'lg', md: '4xl' }} color={'#fff'} fontWeight={'bold'}>Course Details</Heading>
          <Flex alignItems={'center'} textAlign={'start'} gap={2} color="#fff" w={'full'}>
            <Link color="#fff" textDecor={'none'} to={'/'}>Home</Link> <IoIosArrowForward color="#7f7e97" size={12} /> <Link color="#fff" textDecor={'none'} to={'/'}> Courses</Link> <IoIosArrowForward color="#7f7e97" size={12} /><Text color="#726de7" > {course?.Title}</Text>
          </Flex>
        </Stack>
      </Stack>

      <Flex maxW={'1500px'} w={'100%'} alignItems={'center'} justifyItems={'center'}>
        <Flex position={'relative'} w={'98%'} pt={'100px'} alignItems={{ md: 'start', base: 'center' }} gap={{ base: 10, md: 0 }} justifyContent={'center'} flexDirection={{ base: 'column', md: 'row' }} mx={'auto'}>
          <LeftContainer resData={course} />
          <Rightcontainer resData={course} url={course.image} />
        </Flex >
      </Flex>
    </Stack>

  )
}










