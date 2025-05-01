//Right Container
import { AspectRatio, Box, Button, Container, Flex, Grid, Heading, HStack, Icon, IconButton, Image, Link, List, SimpleGrid, Span, Stack, Text, VStack } from '@chakra-ui/react';
import {  useState } from 'react';
import { BiSolidBarChartAlt2 } from 'react-icons/bi';
import { FaFacebook, FaInstagram, FaPlay, FaStar, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import {
  BiTimeFive,
  BiBookAlt,
  BiCheckShield,
  BiCertification,
} from 'react-icons/bi';
import { RiGraduationCapLine } from 'react-icons/ri';
import PaymentImage from '../../assets/payment.png'

const courseData = [
  {
    title: 'Level',
    value: 'Expert',
    icon: <BiSolidBarChartAlt2 color='#7f7e97' />,
  },
  {
    title: 'Duration',
    value: '11h 20m',
    icon: <BiTimeFive color='#7f7e97' />,
  },
  {
    title: 'Lessons',
    value: '12',
    icon: <BiBookAlt color='#7f7e97' />,
  },
  {
    title: 'Quizzes',
    value: '145',
    icon: <BiCheckShield color='#7f7e97' />,
  },
  {
    title: 'Certifications',
    value: 'Yes',
    icon: <BiCertification color='#7f7e97' />,
  },
  {
    title: 'Graduation',
    value: '25K',
    icon: <RiGraduationCapLine color='#7f7e97' />,
  },
];
const socialLinks = [
  { icon: FaFacebook },
  { icon: FaTwitter },
  { icon: FaWhatsapp },
  { icon: FaInstagram },
  { icon: FaYoutube },
];
function CourseOverView() {
  return (
    <>
      <Heading as={'h1'}>
        Course includes:
      </Heading>
      <List.Root gap={3} listStyle={'none'}>
        {courseData.map((data, index) => {
          return (
            <List.Item key={index} borderBottom={'1px solid #D9D9D9'} pb={'15px'}>
              <Flex justify="space-between" align="center" w="100%">
                <Flex align="center" fontSize={'xl'} gap={3}>
                  <Box>{data.icon}</Box>
                  <Span fontSize={'lg'} color={'#1c1a4a'}>{data.title}</Span>
                </Flex>
                <Span fontSize={'lg'} color={'#7f7e97'}>{data.value}</Span>
              </Flex>
            </List.Item>
          );
        })}
      </List.Root>
      <Stack borderBottom={'1px solid #D9D9D9'} pb={'15px'}>
        <Heading as={'h1'}>
          Secure Payment :
        </Heading>
        <Image fit={'contain'}
          align={'center'}
          w={'100%'}
          src={PaymentImage} />
      </Stack>
      <Stack gap={3} borderBottom={'1px solid #D9D9D9'} pb={'15px'}>
        <Heading>Share this course:</Heading>
        <HStack gap={4} display={'flex'} justifyContent={'space-between'} alignItems={'center'} w={'96%'} >
          {socialLinks.map((item, i) => (
            <Box
              key={i}
              transition={'.3s'}
              color='#6d6c80'
              _hover={{ bg: '#5751E1', color: '#fff' }}
              p={'8px'} display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'50%'} bg={'#e6e9ef'}>
              <item.icon key={i} size={20} />
            </Box>
          ))}
        </HStack>
      </Stack>
    </>
  )
}
function YouTubeEmbed({ url }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <AspectRatio w={'100%'} ratio={16 / 9}>
      {isPlaying ? (
        <iframe
          title="naruto"
          src="https://www.youtube.com/embed/38kVU7DpDzw?si=-a9LLaI27ePmrvqr"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      ) : (
        <Box
          position="relative"

          onClick={() => setIsPlaying(true)}
          role="group"
        >
          <Image
            rounded={'md'}
            alt={'product image'}
            src={url}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={'100%'}
          />
          <IconButton
            bg={'#fff'}
            color={'#5751e1'}
            borderRadius={'50%'}
            aria-label="Play video"
            size="md"
            colorScheme="whiteAlpha"
            isRound
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            opacity={0.9}
            transition={'.3s'}
            _groupHover={{ opacity: 1 }}
            _hover={{ bg: '#5751e1', color: '#fff' }}
          ><FaPlay fontSize={'10px'} /></IconButton>
        </Box>
      )}
    </AspectRatio>
  );
}
export default function Rightcontainer({ url, resData }) {
  return (
    <Stack position={'relative'} top={0} m={0} w={{ base: '90%', md: '30%' }} p={0} border={'1px solid #DFDFDF'} borderRadius={'20px'} boxShadow={'0 0 14px #00000014'}>
      <Box p={5} gap={8} >
        <Stack pt={0} >
          <YouTubeEmbed url={url} />
        </Stack>
        <Stack gap={0} color={'#fff'} mt={6} borderRadius={'md'} bg={'#5751E1'} boxShadow={'0 3px 15px #0d096342'} p={'20px'}>
          <Span fontWeight={'500'} fontSize={'18px'}> This Course Fee :</Span>
          <Flex p={0} m={0} gap={'10px'} fontSize={'30px'} fontWeight={'700'} textAlign={'center'} alignItems={'center'}  >
            ${resData?.price}.00
            <Span fontSize={'20px'} fontWeight={'500'} color={'#9490fa'} textDecoration={'line-through'} >$32.00</Span>
          </Flex>
        </Stack>
        <Stack mt={'10px'}>
          <CourseOverView />

        </Stack>
      </Box>
    </Stack>
  )
}

