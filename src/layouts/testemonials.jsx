'use client'

import { useColorModeValue } from '@/components/ui/color-mode'
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Image,
  HStack,
} from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa'
import testim1 from '../assets/testimonials/testim1.png';
import testim2 from '../assets/testimonials/testim2.png';
import testim3 from '../assets/testimonials/testim3.png';

const Testimonial = (props) => {
  const { children } = props

  return <Box >{children}</Box>
}

const TestimonialContent = (props) => {
  const { children } = props

  return (
    <Stack
      bg={'#f6f5fe'}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  )
}

const TestimonialHeading = (props) => {
  const { children } = props

  return (
    <Heading as={'h3'} fontSize={'lg'} color={'#161439'} textAlign={'center'} fontWeight={'bold'}>
      {children}
    </Heading>
  )
}

const TestimonialText = (props) => {
  const { children } = props

  return (
    <Text
      textAlign={'center'}
      color={'#6d6c80'}
      fontSize={{base:'sm', md:'md'}}>
      {children}
    </Text>
  )
}



export default function WithSpeechBubbles() {
  return (
    <Box bg="#fff" pt={'200px'} borderTop={'6px solid #282568'} >
      <Container maxW={'7xl'} py={16} as={Stack} gap={12} borderTop={'2px solid #282568'}>
        <Stack spacing={0} align={'center'}>
          <Text
              color="#5751e1"
              fontWeight={'semibold'}
              fontSize="lg"
              bg="#efeefe"
              px={3}
              borderRadius="30px"
            >
              Our Testimonials
            </Text>
          <Text w={{base:'100%', md:'60%'}} fontFamily={'revert'} fontSize={{base:'xl',md:'4xl'}} fontWeight={'700'} textAlign={'center'} color={'#18181b'}>
            What Students Think and Say About SkillGrow
          </Text>
          <Text color={'#6d6c80'} letterSpacing={'1.2px'} >when known printer took a galley of type scrambl edmake</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial   >
            <Flex alignItems={'center'} gap={10} flexDirection={'column'} justifyContent={'center'}>
              <TestimonialContent >
                <HStack justify="center" m={0}  gap={1}>
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <FaStar key={index} size={16} color="#f8bc24" />
                  ))}
                </HStack>
                <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
                <TestimonialText >
                  “ when an unknown printer took alley ffferer area typey and scrambled to make a type specimen book hass”
                </TestimonialText>
            </TestimonialContent>
            <Image
              src={
                  testim1
              }
              name={'Jane Cooper'}
              title={'CEO at ABC Corporation'}
                borderRadius={'50%'}
                border={'1px solid #6d6c80'}
            />
            </Flex>
          </Testimonial>
          <Testimonial  >
            <Flex alignItems={'center'} gap={10} flexDirection={'column'} justifyContent={'center'}>
              <TestimonialContent>
                <HStack justify="center" m={0} gap={1}>
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <FaStar key={index} size={16} color="#f8bc24" />
                  ))}
                </HStack>
                <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
                <TestimonialText>
                  “ when an unknown printer took alley ffferer area typey and scrambled to make a type specimen book hass”
                </TestimonialText>
              </TestimonialContent>
              <Image
                src={
                  testim2
                }
                name={'Jane Cooper'}
                title={'CEO at ABC Corporation'}
                borderRadius={'50%'}
                border={'1px solid #6d6c80'}
                
              /></Flex>
          </Testimonial>
          <Testimonial  >
            <Flex alignItems={'center'} gap={10} flexDirection={'column'} justifyContent={'center'}>
              <TestimonialContent>
                <HStack justify="center" m={0} gap={1}>
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <FaStar key={index} size={16} color="#f8bc24" />
                  ))}
                </HStack>
                <TestimonialHeading >Efficient Collaborating</TestimonialHeading>
                <TestimonialText>
                  “ when an unknown printer took alley ffferer area typey and scrambled to make a type specimen book hass”
                </TestimonialText>
              </TestimonialContent>
              <Image
                src={
                  testim3
                }
                name={'Jane Cooper'}
                title={'CEO at ABC Corporation'}
                borderRadius={'50%'}
                border={'1px solid #6d6c80'}
              /></Flex>
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  )
}