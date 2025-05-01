import CourseCard from '@/pages/coursees/courseCard';
import { Button, Flex, Grid, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { courses } from '@/utilitis/data';
// import { CourseContext } from './courseContext';

const Courses = () => {
  // const { setSelectedCourses } = useContext(CourseContext);

  const [all, setAll] = useState(false)
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Courses', sts: true },
    { id: 'design', label: 'Design', sts: false },
    { id: 'business', label: 'Business', sts: true },
    { id: 'development', label: 'Development', sts: false }
  ];
  const bg = '#efeefe'


  const resData = courses;

  let DaraReversedArray = resData
  if (all) {
    DaraReversedArray = [...resData].reverse()
  } else {
    DaraReversedArray = resData
  }
  // console.log(DaraReversedArray);


  return (
    <Stack as={Flex} alignItems={'center'} justifyContent={'center'} className={'coursess'} w={'100%'} mx={'auto'} pb={'50px'}>
      <Flex flexDirection={'column'} maxW={'1500px'} w={'100%'}>

        <Stack my={'50px'} display={'flex'} alignItems={'center'} textAlign={'center'} w={'100%'} gap={4}  >
          <Text
            w={'fit-content'}
            alignItems={'center'}
            textAlign={'center'}
            color={'#5751e1'}
            fontWeight={500}
            fontSize={'lg'}
            bg={bg}
            px={3}
            // alignSelf={'flex-start'}
            borderRadius={'30px'} >
            Top Class Courses
          </Text>
          <Text fontSize={'40px'} px={2} fontWeight={'700'} textAlign={'center'} color={'#000'}>
            Explore Our World's Best Courses
          </Text>
          <Text color={'#6d6c80'} px={4} letterSpacing={'1.2px'} >When known printer took a galley of type scrambl edmake</Text>
          <Flex display={{ base: 'none', md: 'flex' }} gap={'40px'} mt={'20px'} position={'relative'} pb={'15px'} justifyContent={'center'} alignItems={'center'} width={{ base: '90%', md: 'fit-content' }} >
            <Stack position={'absolute'} borderRadius={'30px'} bottom={'0'} width={'140%'} h={'3px'} bgColor={'#d9d9f3'}></Stack>
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setAll(tab.sts);
                }}
                variant="unstyled"
                position="relative"
                py={6}
                px={1}
                color={activeTab === tab.id ? "black" : "#7f7e97"}
                // _hover={{ color: "black" }}
                fontSize="18px"
                fontWeight="500"
                transition="color 0.3s"
                _before={{
                  content: '""',
                  position: "absolute",
                  bottom: "-17px",
                  left: "10%",
                  height: "5px",
                  rounded: "4xl",
                  width: "80%",
                  transition: "background-color 0.3s",
                  bg: activeTab === tab.id ? "#5751e1" : "transparent"
                }}
              >
                {tab.label}
              </Button>
            ))}
          </Flex>

        </Stack>
        <Grid mx={'auto'} width={'90%'} templateColumns={{ md: "repeat(auto-fill, minmax(300px, 1fr))", base: "repeat(auto-fill, minmax(250px, 1fr))" }} gap={6}  >
          {DaraReversedArray?.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </Grid>
      </Flex>
    </Stack>

  );
}
export default Courses;








