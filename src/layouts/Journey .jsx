import { Box, Card, Flex, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import feature1 from '../assets/features1.svg'
import feature2 from '../assets/features2.svg'
import feature3 from '../assets/features3.svg'
import feature4 from '../assets/features4.svg'
import Belong from './belong';
const Journey = () => {


  const tabs = [
    {
      img: feature1, label: 'Learn with Experts', sts: 'Curate anding area share Pluralsight content to reach your' },
    { img: feature2, label: 'Learn Anything', sts: 'Curate anding area share Pluralsight content to reach your' },
    { img: feature3, label: 'Get Online Certificate', sts: 'Curate anding area share Pluralsight content to reach your' },
    { img: feature4, label: 'E-mail Marketing', sts: 'Curate anding area share Pluralsight content to reach your' }
  ];

  
  return (
    <Stack position={'relative'} display={'flex'} bg={'#282568'} justifyContent={'center'} py={'100px'} pb={ '300px' } alignItems={'center'} mx={'auto'}>

      <Stack my={'50px'} display={'flex'} alignItems={'center'} textAlign={'center'} w={'100%'} gap={4} >
        <Text 
          w={'fit-content'}
          alignItems={'center'}
          textAlign={'center'}
          color={'#fff'}
          fontWeight={500}
          fontSize={'lg'}
          bg={'#5751e1'}
          px={3}
          // alignSelf={'flex-start'}
          borderRadius={'30px'}>
            How We Start Journey
        </Text>
        <Text fontSize={'40px'} fontWeight={'700'} textAlign={'center'} color={'#fff'}>
          Start your Learning Journey Today!
        </Text>
        <Text color={'#acaacc'} letterSpacing={'1.2px'} >Groove’s intuitive shared inbox makesteam members together<br/>
          organize, prioritize and.In this episode.</Text>
          
      </Stack>
      <Flex flexWrap={'wrap'} px={8} gap={10} justifyContent={'center'} alignItems={'center'} width={'100%'}  templateColumns="repeat(auto-fill, minmax(200px, 1fr))"   >
        {tabs?.map((tab, index) => (
          <Card.Root p={0} border={'none'} className='cardhov' display={'flex'} bg={'none'} alignItems={'center'} justifyContent={'center'} textAlign={'center'}  key={index} w={'330px'} >
            <Card.Header  >
              <Image className='cardhovImage' transition={'.5s'} src={tab.img} w={'100px'} ml={4} />
            </Card.Header>
            <Card.Body gap={3} >
              <Heading textAlign={'center'} color={'#fff'} fontSize={'20px'}> {tab.label} </Heading>
              <Text textAlign={'center'}  color={'#acaacc'} fontSize={'15px'}> {tab.sts} </Text>
            </Card.Body>
            
          </Card.Root>
        ))}
      </Flex>

      <Box width={'100%'} zIndex={1} position={'absolute'} bottom={'-200px'}  >  <Belong /></Box>
    </Stack>

  );
}
export default Journey;



  
    



