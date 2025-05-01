'use client'
import arrow1 from '../assets/arrow1.gif'
import arrow2 from '../assets/arrow2.gif'
import aboutImage from '../assets/about_img.png';
import aboutSahpe from '../assets/about_shape.svg'
import students from '../assets/student_grp.png'
// import textBg from '../assets/extracted_svg.svg'

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Icon,
  Span,
  Box,
  Button,
} from '@chakra-ui/react'
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'
import { ReactElement, useState } from 'react'
import { useColorModeValue } from '@/components/ui/color-mode'
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';



const FeatureItem = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600} color={'#000'}>{text}</Text>
    </Stack>
  )
}

export default function Future() {
  const [hovered , setHovered] = useState(false)  

  return (
    <Stack w={'100%'} as={Flex} justifyContent={'center'} alignItems={'center'} bg={'#fff'} >
      <Flex maxW={'1500px'}>
        <Container maxW={{base:'80%', sm:'90%'}} py={20} pt={'200px'} bg={'white'}  alignItems={'center'}  >
          <Flex className='futurebox'  gap={10}>

            <Flex position={'relative'} maxW={'500px'} flex={1}>
              <Image
                rounded={'md'}
                alt={'FeatureItem image'}
                src={aboutImage}
                objectFit={'cover'}
                w={'full'}
                minW={'300px'}
              />
              <Image className='move'  src={aboutSahpe} position={'absolute'} top={15} right={{base: '100px',md:'160px'}} zIndex={1} />
              <Box width={{base: '180px',md:'250px'}} px={'10px'} h={{base: '70',md:'100px'}} display={'flex'}
                alignItems={'center'} flexDirection={'column'}
                justifyContent={'center'} bg={'#fff'} position={'absolute'}
                bottom={15} left={{base: '30px',md:'-50px'}} zIndex={1} border={'1px solid #B2BBCC'}
                borderRadius={'10px'} boxShadow="-10px 8px 1px #00000040"
              >
                <Text fontWeight={'600'} fontSize={{base:'sm', md:'md'}} >36K+ <Span color={'#5751e1'}>Enrolled Students</Span> </Text>
                <Image src={students} w={{ base: '70%',md:'80%'}}  />
              </Box>
            </Flex>
            
            <Stack fontSize={'20px'} gap={4} flex={1}>
              <Text
                // bg={'#efeefe'}
                color={'#5751e1'}
                fontWeight={600}
                fontSize={'lg'}
                bg={'#efeefe'}
                px={3}
                alignSelf={'flex-start'}
                borderRadius={'30px'}>
                Get More About Us
              </Text>
                <Heading fontSize={'30px'} zIndex={1} color={'#000'}>
                <Span color={'#000'}>Thousand Of Top Courses </Span>
                <Text
                  lineHeight={1.9} 
                  display="inline-block"
                  px={2}
                  as={'span'} position={'relative'}
                  className='ngn'
                >
                  <Span color={'#fff'} > Learning </Span>
                </Text>
                  
                <Span>Now in One Place</Span>  
              </Heading>
              <Text color={'gray.500'} fontSize={'md'}>
                Groove’s intuitive shared inbox makes it easy for team members to organize,
                prioritize and.In this episode of the Smashing Pod we’re talking about Web Platform Baseline.
              </Text>
              <Stack
                gap={6}
                fontSize={'20px'}
                fontWeight={'bold'}
                >
                <FeatureItem
                  icon={<Icon as={MdKeyboardArrowRight} color={'#000'} border={'1px solid #282568'} borderRadius={'100%'} w={'100%'} h={'100%'} boxShadow="5px 4px 1px #00000040" _hover={{ boxShadow: "0px 0px 0px #00000040" }} transition={'.5s'} />}
                  iconBg={'#ffc224'}
                  text={'The Most World Class Instructors'}       
          
                />
                
                <FeatureItem
                    icon={<Icon as={MdKeyboardArrowRight} color={'#000'} border={'1px solid #282568'} borderRadius={'100%'} w={'100%'} h={'100%'} boxShadow="5px 4px 1px #00000040" _hover={{ boxShadow: "0px 0px 0px #00000040" }} transition={'.5s'}  />}
                  iconBg={'#ffc224'}
                  iconborder
                    text={'Access Your Class anywhere'}
                    border={'1px solid #000'}
                />
                <FeatureItem
                  icon={<Icon as={MdKeyboardArrowRight} color={'#000'} border={'1px solid #282568'} borderRadius={'100%'} w={'100%'} h={'100%'} boxShadow="5px 4px 1px #00000040" _hover={{ boxShadow: "0px 0px 0px #00000040" }} transition={'.5s'} />}
                  iconBg={'#ffc224'}
                  text={'Flexible Course Plan'}
                />
              </Stack>
              <Stack gap={{ base: 4, sm: 6 }} mt={4} direction={{ base: 'column', sm: 'row' }} display={'felx'} alignItems={'center'} >
                <Button
                  as={Link}
                  to={'/all-courses'}
                  position={'relative'}
                  rounded={'full'}
                  size={'lg'}
                  width={'250px'}
                  textAlign={'center'}
                  colorScheme={'red'}
                  bg={'#5751e1'}
                  fontWeight={'600'}
                  fontSize={'22px'}
                  transition={'.5s'}
                  onMouseOver={() =>setHovered(true)}
                  onMouseLeave={() =>setHovered(false)}
                  color={'#fff'}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  boxShadow="10px 6px 3px #000" p="6" borderRadius={"30px"}
                  _hover={{ bg: '#ffc224', boxShadow: "0px 0px 0px #000", color: '#000',   } }>
                  Start Free Trial <Image width={'35px'} color={'#fff'} right={0} src={ hovered ? arrow1 : arrow2} />
                </Button>
                
                
              </Stack>
            </Stack>
            
          </Flex>
        </Container>
      </Flex>
    </Stack>
  )
}