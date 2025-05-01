//Left Container
import { AspectRatio, Box, Button, Container, Flex, Grid, Heading, HStack, Icon, IconButton, Image, Link, List, SimpleGrid, Span, Stack, Text, VStack } from '@chakra-ui/react';
// import courseDatils from './assets/courseDtails.jpg'
import courseDat from '../../assets/courses/courseDtails.jpg';
import person from '../../assets/persn.png'

import { FaStar } from 'react-icons/fa';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { PiStudent } from 'react-icons/pi';
import CourseInfo from './courseInfo';

export default function LeftContainer({ resData }) {
  return (
    <Stack position={'relative'} m={0} w={{ base: '100%', md: '70%' }} p={0} >
      <Box px={8} gap={8} >
        <Flex mb={4}>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={courseDat}
            // fit={'cover'}
            align={'center'}
            borderRadius={'20px'}

          />
        </Flex>
        <Stack gap={{ base: 6, md: 10 }}>
          <Stack gap={4}>
            <Flex width={{ base: '80%', md: '40%' }} alignItems={'center'} gap={4} >
              <Text cursor={'pointer'} px={'15px'} fontSize={'md'} fontWeight={'500'} borderRadius={'30px'} bgColor={'#efeff2'} transition={'.5s'} _hover={{ bgColor: '#5751e1', color: '#fff' }}>{resData?.category}</Text>
              <Text color={'#7f7e97'} display={'flex'} alignItems={'center'} textAlign={'center'}><FaStar color="#f8bc24" /> ({resData?.rating} Reviews)</Text>
            </Flex>
            <Heading
              lineHeight={1.1}
              fontWeight={700}
            // fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}
            >
              {resData?.Title}
            </Heading>
            <Flex gap={1} width={{ base: '100%', md: '60%' }} alignItems={'center'} justifyContent={'space-between'} flexDirection={'row'}>
              <Flex fontSize={{ base: 'sm', md: 'md' }} fontWeight={'normal'} mb={1} color={'#7f7e97'} alignItems={'center'} justifyContent={'center'} gap={{ base: 2, md: 3 }}>
                <Image src={person} />
                By <Span color={'#000'}>{resData?.Author}</Span>
              </Flex>
              <Text color={'#6d6c80'} display={'flex'} alignItems={'center'} textAlign={'center'} gap={2} fontSize={{ base: 'sm', md: 'md' }}> <MdOutlineCalendarToday color="#5751e1" size={'18px'} /> 20 July, 2024</Text>
              <Text color={'#6d6c80'} display={'flex'} alignItems={'center'} textAlign={'center'} gap={2} fontSize={{ base: 'sm', md: 'md' }}> <PiStudent color="#5751e1" size={'20px'} />2,250 Students</Text>
            </Flex>


          </Stack>
          <Stack minH={'100vh'} gap={4}>
            <CourseInfo />
          </Stack>

        </Stack>

      </Box>
    </Stack>
  )
}