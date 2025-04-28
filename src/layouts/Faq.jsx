import { useColorModeValue } from '@/components/ui/color-mode';
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
  AccordionItem,
} from '@chakra-ui/react';
import React from 'react';
import aboutImage from '../assets/about_img.png';
import aboutSahpe from '../assets/about_shape.svg';
import students from '../assets/student_grp.png';
import curved from '../assets/curved.png';
import { MdKeyboardArrowRight } from "react-icons/md";
import { ArrowDown } from 'lucide-react';
import { Accordion } from "@chakra-ui/react";
import boy from '../assets/boy.png';
import Belong from './belong';
import MainCounter from './counter';


const items = [
  {
    value: "a",
    title: "What’s Skillgrow Want to give you?",
    text: "Groove’s intuitive shared inbox makes it easy for team members organize prioritize and.In this episode.urvived not only five centuries.Edhen an unknown printer took a galley of type and scrambl"
  },
  {
    value: "b",
    title: "Why choose us for your education?",
    text: "Groove’s intuitive shared inbox makes it easy for team members organize prioritize and.In this episode.urvived not only five centuries.Edhen an unknown printer took a galley of type and scrambl"
  },
  {
    value: "c",
    title: "How We Provide Service For you?",
    text: "Groove’s intuitive shared inbox makes it easy for team members organize prioritize and.In this episode.urvived not only five centuries.Edhen an unknown printer took a galley of type and scrambl"
  },
  {
    value: "d",
    title: "Are you Affordable For Your Course",
    text: "Groove’s intuitive shared inbox makes it easy for team members organize prioritize and.In this episode.urvived not only five centuries.Edhen an unknown printer took a galley of type and scrambl"
  }
]

const Demo = () => {
  
  return (
    <Accordion.Root collapsible defaultValue={["a"]}>
      {items.map((item, index) => (
        <Accordion.Item key={index} value={item.value} py={1} borderBottom={'2px solid #b2bbcc'}>
          <Accordion.ItemTrigger _expanded={{ color: '#5751e1' }} color={'#6d6c80'}>
            <Span flex="1" fontSize={'17px'} color={'#6d6c80'}>{item.title}</Span>
            <Accordion.ItemIndicator  />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent paddingRight={2}>
            <Accordion.ItemBody color={'#1c1a4a'} fontSize={'13px'}>{item.text}</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
};


export const Faq = () => {
  const text = 'Hello world React is awesome';
  const words = text.split(' '); // Split the text into words
  return (
    <Stack width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'} position={'relative'}  bg={'#f7f7f9'} pt={{base: '300px', md:'100px'}} mx={'auto'}>
      <Flex maxW={'1500px'} alignItems={'center'} position={'relative'} justifyContent={'center'}>
      <Box width={'100%'} zIndex={1} position={'absolute'} top={{ base: '-400px',md:'-200px'}}  >  <MainCounter /></Box>
      <Container width={'100%'} py={10} mt={50} alignItems={'center'} >
        <Container w={{ base: '95%', sm: '95%' }} >
          <Flex className='futurebox'  gap={70}>

            <Flex  alignItems={'center'} justifyContent={'center'} flex={1}>
              
                <Box bg={'#fff'} zIndex={1} position={'relative'} overflow={'hidden'} minW={'300px'} pt={'30px'} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'40%'}  boxShadow={'9px 8px #171717'} >
                  
                  <Image
                    rounded={'md'}
                    alt={'FeatureItem image'}
                    src={boy}
                    objectFit={'contain'}
                    w={'90%'}
                  />
                  <Stack w={'200px'} position={'absolute'} top={8} zIndex={-1} >
                    <svg  width="100%" height="201"  viewBox="0 0 243 201" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M33.4888 2.33732C51.0788 -4.90402 74.7375 10.3492 95.1583 10.1059C112.054 9.90458 124.917 -1.94773 142.286 1.04108C161.229 4.30087 182.771 11.4675 196.311 27.5126C209.823 43.525 204.073 64.7482 211.768 83.3776C219.978 103.254 244.371 120.756 242.796 140.051C241.244 159.064 219.234 165.093 204.324 174.576C191.463 182.756 177.07 187.574 161.728 191.613C144.966 196.024 128.585 200.247 110.135 199.366C85.6793 198.199 52.9607 207.808 36.8703 185.654C19.1764 161.292 51.8095 136.455 44.5608 109.082C38.4883 86.1502 3.04428 71.7681 0.682568 48.9991C-1.5703 27.2795 15.2076 9.8632 33.4888 2.33732Z"
                        fill="#fbe67b"  
                        
                        />
                    </svg>
                  </Stack>
                  
              </Box>

              
            </Flex>
            
            <Stack fontSize={'20px'} gap={4} flex={1}>
              <Text
                color={'#5751e1'}
                fontWeight={500}
                fontSize={'sm'}
                bg={useColorModeValue('#efeefe', 'blue.900')}
                px={3}
                alignSelf={'flex-start'}
                borderRadius={'30px'}>
                Faq’s
              </Text>
              <Heading fontSize={'30px'} color={'#161439'} fontWeight={'bold'} lineHeight={1.2} mb={'5px'} letterSpacing={1.6}>
                <Span>Start Learning From<br/> World’s Pro Instructors </Span>
              </Heading>
              <Text color={'#6d6c80'} fontSize={'sm'} fontWeight={'medium'}>
                Groove’s intuitive shared inbox makes it easy for team members to organize,
                  prioritize and.In this episode of the Smashing Pod we’re talking about Web Platform Baseline.
              </Text>
              
              <Stack mt={'15px'}><Demo /></Stack>
            </Stack>
            
          </Flex>
        </Container>
      </Container>
      </Flex>
    </Stack>
  )
}