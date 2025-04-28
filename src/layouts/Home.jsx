import mainImage from '../assets/main.png'
import sahm from '../assets/sahm.png'
import bgDot from '../assets/bg_dots.svg'
import arrow1 from '../assets/arrow1.gif'
import arrow2 from '../assets/arrow2.gif'
import banner from '../assets/banner_shape01.svg'

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,

  Span,
} from '@chakra-ui/react'
import { FaRegHeart } from "react-icons/fa";
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [hovered , setHovered] =useState(false)  
  return (
    <Stack as={Flex} justifyContent={'center'} alignItems={'center'} w={'100%'}  pl={{ base: '10px', md: '80px' }} pb={0} fontFamily={'Poppins'} className='home' h={'fit-content'}>
      
      <Flex
        align={'center'}
        gap={{ base: 20, md: 40 }}
        pt={ 40 }
        className='homeWraber'
        maxW={'1500px'}
      >
        <Stack flex={1} gap={{ base: 8, md: 8 }} textAlign={{ sm: 'center', md: 'start' }} >
          <Heading
            lineHeight={1.5}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }} 
            textAlign={{sm:'center' , md: 'start'}}
            color={'#000'}
            zIndex={1}
          >
            <Text
              as={'span'}
              position={'relative'}>
              Never Stop 
              <Text
                lineHeight={1.9}
                display="inline-block"
                px={2}
                as={'span'} position={'relative'}
                className='ngn'
              >
                <Span color={'#fff'} > Learning </Span>
              </Text>
            </Text>
            <br />
            <Text  as={'span'} >
              Life <Span fontWeight={'700'}>Never Stop</Span>  Teaching
            </Text>
          </Heading>
          <Text color={'gray.500'} textAlign={{ sm: 'center', md: 'start' }}>
            Snippy is a rich coding snippets app that lets you create your own code
            snippets, categorize them, and even sync them in the cloud so you can use them
            anywhere. All that is free!
          </Text>
          <Stack gap={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }} display={'felx'} alignItems={'center'} >
            <Button
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
              boxShadow="10px 6px 3px #000" p="6" borderRadius={"30px"}
              _hover={{ bg: '#ffc224', boxShadow: "0px 0px 0px #000", color: '#000',   } }
              as={Link}
              to={'/all-courses'}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
              Start Free Trial <Image width={'35px'} color={'#fff'} right={0} src={ hovered ? arrow1 : arrow2} />
            </Button>
            
            
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          alignItems={'center'}
          position={'relative'}
          w={'100%'}
          >
          
          <Box 
            position={'relative'}
            // height={'500px'}
            // width={'500px'}
            rounded={'2xl'}
            // boxShadow={'2xl'}
            overflow={'hidden'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            
          >
            <div  className='bg-animation absolute top-0 left-0 w-[110%] height-full'
              >
              <Image src={bgDot} width={'100%'} h={'100%'} />
            </div>
            <div className='animate-bounce-custom absolute top-20 left-8 width-full height-full'
              >
              <Image src={sahm} width={'100%'} h={'100%'} />
            </div>
            
            <Image
              position={'relative'}
              alt={'Hero Image'}
              fit={'contain'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                mainImage
              }
              zIndex={99}
            />
          </Box>
        </Flex>
      </Flex>
      <Image src={banner} position={'absolute'} top={0} left={0} zIndex={-1} />
      
    </Stack>
  )
}

