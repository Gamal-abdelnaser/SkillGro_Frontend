'use client'

import { AspectRatio, Box, Button, Checkbox, Container, Flex, Grid, Heading, HStack, Icon, IconButton, Image, List, Portal, Select, SimpleGrid, Span, Stack, Text, VStack } from '@chakra-ui/react';
import { IoIosArrowForward } from 'react-icons/io';
import CourseCard from '@/pages/coursees/courseCard';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { courses } from '@/utilitis/data';


export default function AllCourses() {
  const [all, setAll] = useState(false);

  const resData = courses;
  let DaraReversedArray = resData
  if (all) {
    DaraReversedArray = [...resData].reverse()
  } else {
    DaraReversedArray = resData
  }
  // console.log(DaraReversedArray);

  return (
    <Stack as={Flex} w={'100%'} py={'10px'} alignItems={'center'} justifyContent={'center'} gap={1} >
      <Stack w={'full'} py={{ base: '50px', md: '100px' }} mt={'80px'} alignItems={'center'} justifyContent={'center'} bg={'#161439'} px={6} gap={{ base: 3, md: 8 }} >
        <Stack maxW={'1500px'} w={'100%'} px={6} gap={{ base: 3, md: 8 }}>
          <Heading fontSize={{ base: 'lg', md: '4xl' }} color={'#fff'} fontWeight={'bold'}>All Courses</Heading>
          <Flex alignItems={'center'} textAlign={'start'} gap={2} color="#fff" w={'full'}>
            <Link color="#fff" to={'/'}>Home</Link> <IoIosArrowForward color="#7f7e97" size={12} /> <Text color="#726de7" > Courses</Text>
          </Flex>
        </Stack>
      </Stack>
      <Flex maxW={'1500px'} w={'100%'} alignItems={'center'} m={0} justifyItems={'center'}>
        <Flex position={'relative'} w={'98%'} pt={'100px'} alignItems={{ md: 'start', base: 'center' }} justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row' }} mx={'auto'}>
          <Rightcontainer resData={DaraReversedArray} setAll={setAll} />
          <LeftContainer resData={DaraReversedArray} />
        </Flex >
      </Flex>
    </Stack>

  )
}


//Right Container

const data = [
  {
    title: "Categories",
    options: [
      "All Category",
      "Development",
      "Art & Design",
      "Business",
      "Data Science",
      "Finance",
      "Health & Fitness",
      "Lifestyle"
    ],
    showMore: true
  },
  {
    title: "Languages",
    options: [
      "All Language",
      "Arabic",
      "English",
      "Spanish"
    ],
    showMore: true
  },
  {
    title: "Price",
    options: [
      "All Price",
      "Free",
      "Paid"
    ],
    showMore: false
  },
  {
    title: "Skill level",
    options: [
      "All Skill",
      "Beginner",
      "Intermediate",
      "High"
    ],
    showMore: false
  },
  {
    title: "Instructors",
    options: [
      "All Instructors",
      "David Millar",
      "Jenny Wilson",
      "Wade Warren"
    ],
    showMore: true
  },
  {
    title: "Ratings",
    options: [
      "All Ratings",
      "1 Star",
      "2 Stars",
      "3 Stars",
      "4 Stars",
      "5 Stars"
    ],
    showMore: false
  }
];


function MobileSelection() {
  return (
    <Box w={'full'} display={{ md: 'none', base: 'flex' }} flexWrap={'wrap'} gap={3} p={{ base: 4, md: 4 }} mb={4} bg='#F7F7F9' border={'1px solid #DFDFDF'} boxShadow={'0 0 14px #00000014'} borderRadius={'10px'}>

      {
        data.map((dt, index) => {
          return (
            <Box key={index} flexWrap={'wrap'} minW={'150px'} w={'40%'} flex={1} >
              <Flex alignItems={'center'} w={'full'} gap={6} flexDir={'row'} mb={3}>
                <Select.Root size="sm" w={'full'} >
                  <Select.HiddenSelect />
                  <Select.Label>{dt.title}</Select.Label>
                  <Select.Control bg='#fff' border={'1px solid #DFDFDF'} boxShadow={'0 0 14px #00000014'} w={'full'}>
                    <Select.Trigger>
                      <Select.ValueText placeholder={`Select ${dt.title}`} />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                      <Select.Indicator />
                    </Select.IndicatorGroup>
                  </Select.Control>
                  <Portal bg='#fff' border={'1px solid #DFDFDF'} boxShadow={'0 0 14px #00000014'} w={'full'}>
                    <Select.Positioner>
                      <Select.Content>
                        {dt.options.map((type, index) => (
                          <Select.Item item={type} key={index}>
                            {type}
                            <Select.ItemIndicator />
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select.Positioner>
                  </Portal>
                </Select.Root>
              </Flex>
            </Box>
          )
        })
      }
    </Box >

  )
}

function DesktopSelection() {
  return (
    <>

      {
        data.map((dt, index) => {
          return (
            <Box key={index} w={'full'} display={{ md: 'block', base: 'none' }} gap={3} p={{ base: 4, md: 10 }} mb={4} bg='#F7F7F9' border={'1px solid #DFDFDF'} boxShadow={'0 0 14px #00000014'} borderRadius={'10px'}>
              <Text fontWeight="bold" mb={3}>{dt.title}</Text>
              <Flex flexDir={{ base: 'row', md: 'column' }} flexWrap={'wrap'} gap={4}>
                {dt.options.map((option) => (
                  <Checkbox.Root size={'sm'} key={option} my={1} variant={'subtle'} mb={3} colorPalette={'#fff'} >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control bg={'#fff'} />
                    <Checkbox.Label color={'#161439'} fontSize={{ base: 'sm', md: 'md' }} fontWeight={'normal'}>{option}</Checkbox.Label>
                  </Checkbox.Root>
                ))}
              </Flex>
              {
                dt.showMore && (
                  <Text color="blue.500" fontSize="sm" mt={1} cursor="pointer">Show More +</Text>
                )
              }
            </Box>
          )
        })
      }
    </>
  )
}

function Rightcontainer() {

  return (
    <Stack position={'relative'} top={0} m={0} w={{ base: '90%', md: '20%' }} minW={'300px'}   >
      <Box px={4} gap={{ base: 1, md: 8 }} w={'100%'} display={'flex'} flexWrap={'wrap'} >

        <Stack w={'100%'}>
          <MobileSelection />
          <DesktopSelection />
        </Stack>

      </Box>
    </Stack>
  )
}


//Left Container

function LeftContainer({ resData }) {


  return (
    <Stack position={'relative'} m={0} w={{ base: '100%', md: '80%' }} p={0} >
      <Box px={4} gap={8} >
        <Flex mb={4}>
          <Heading fontSize={'sm'}  >Showing 1-12 of 48 Results</Heading>
          <Flex> </Flex>
        </Flex>
        <Grid mx={'auto'} width={'100%'} templateColumns="repeat(auto-fill, minmax(280px, 1fr))" gap={6}  >
          {resData?.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </Grid>
      </Box>
    </Stack>
  )
}