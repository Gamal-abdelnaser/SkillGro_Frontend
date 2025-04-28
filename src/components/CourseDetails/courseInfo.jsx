import React, { useState } from 'react';
import { Lock, Play, Plus, Minus } from 'lucide-react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  HStack,
  Circle,
  IconButton,
  Progress,
  Icon,
} from '@chakra-ui/react';
import { useColorModeValue } from '../ui/color-mode';
import mark from '../../assets/mark.png'
// TabButton Component

import { FaFacebookF, FaInstagram, FaStar, FaWhatsapp } from 'react-icons/fa';
import { MdKeyboardArrowRight, MdPlayArrow } from 'react-icons/md';
import { FaXTwitter } from 'react-icons/fa6';

function TabButton({ id, title, isActive, onClick }) {
  return (
    <Button
      w={'fit'}
      bg={isActive ? '#5751e1' : '#e6e9ef'}
      color={isActive ? '#fff' : '#6d6c80'}
      fontSize={{ base: 'sm', md: 'md' }}
      fontWeight={600}
      onClick={onClick}
      // variant={isActive ? 'solid' : 'ghost'}
      boxShadow={isActive ? '4px 6px #050071' : 'none'}
      borderRadius="full"
      px={{ base: '3', md: "5" }}
      py={{ base: '2', md: "4" }}
      transition={'.5s'}
      _hover={{ boxShadow: '4px 6px #050071', color: '#fff', bg: '#5751e1', }}
    >
      {title}
    </Button>
  );
}

// CourseFeature Component
const FeatureItem = ({ text, icon, iconBg }) => {
  return (
    <Stack
      direction="row"
      align="center"
      role="group" // نحتاجه عشان نستخدم _groupHover
      cursor="pointer"
      gap={4}
    >
      <Flex
        w={{ base: 5, md: 8 }}
        h={{ base: 5, md: 8 }}
        align="center"
        justify="center"
        rounded="full"
        bg={iconBg}
        transition="0.3s ease"
        _groupHover={{
          boxShadow: '5px 4px 1px #00000040', // تأثير الظل لما نحط الماوس على العنصر كله
        }}
        fontSize={{ base: '5px', md: '12px' }}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} fontSize={{ base: '14px', md: '16px' }} color="#000">
        {text}
      </Text>
    </Stack>
  );
};


function CourseFeature({ text }) {
  const data = [
    ' Work with color & Gradients & Grids', 'All the useful shortcuts', 'Be able to create Flyers, Brochures, Advertisements', 'How to work with Images & Text']
  return (

    <Stack
      gap={2}
      fontSize={{ base: '16px', md: '20px' }}
    >
      {
        data.map((item, index) => {
          return <FeatureItem key={index}
            icon={<Icon as={MdKeyboardArrowRight} size={'16px'} color={'#000'} border={'1px solid #282568'} borderRadius={'100%'} w={'100%'} h={'100%'} boxShadow="5px 4px 1px #00000040" _hover={{ boxShadow: "0px 0px 0px #00000040" }} transition={'.5s'} />}
            iconBg={'#ffc224'}
            text={item}

          />

        })
      }
    </Stack>
  );
}

// LessonItem Component

function LessonItem({ title, duration, locked }) {
  return (
    <Flex as={'button'} cursor={'not-allowed'} justify="space-between" p="2" py={4} bg={'#f8f8ff'}>
      <HStack gap={4}>
        <Box p={1} borderRadius={'100%'} border={'1px solid #DCDCEB'}>
          <MdPlayArrow p={4} size={18} color="#5751e1" />
        </Box>
        <Text color="#1c1a4a" fontSize={'xl'} fontWeight={'normal'} transition={'.4s'} _hover={{ color: '#5751e1' }}>{title}</Text>
      </HStack>
      <HStack>
        <Text color="#1c1a4a" fontSize={'md'}>{duration}</Text>
        {locked && <Lock size={16} color="#5751e1" />}
      </HStack>
    </Flex>
  );
}

// RatingBar Component

function RatingBar({ rating, count, percentage }) {
  return (
    <HStack gap="2">
      <Text fontSize={'20px'} color={'#6d6c80'}>{rating}</Text>
      <FaStar size={20} color="#f8bc24" />
      <Progress.Root value={percentage} flex="1" height="8px" bg="#e0e3eb" borderRadius="30px" overflow="hidden">
        <Progress.Track bg="gray.200">
          <Progress.Range
            flex="1"
            colorScheme="yellow"
            borderRadius="full"
            size="sm"
            bg="#f8bc24"

          />
        </Progress.Track>
      </Progress.Root>
      <Text w="4" fontSize={'20px'} color={'#6d6c80'} textAlign="right">{count}</Text>
    </HStack>
  );
}
// Overview Tab
function Overview() {


  return (
    <Stack gap="8" align="stretch">
      <Box flexWrap={'wrap'}>
        <Heading fontSize={{ base: '2xl', md: "3xl" }} fontWeight={600} mb="4" color={'#161439'}>Course Description</Heading>
        <Text color="#6d6c80" fontSize={{ base: '13px', md: '16px' }} fontWeight={400} mb="2">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse ultrices gravida.
          Risus commodo viverra maecenas accumsan lacus vel facilisis.dolor sit amet,
          consectetur adipiscing elited do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Box>

      <Box>
        <Heading fontSize={{ base: '2xl', md: "3xl" }} fontWeight={600} mb="4" color={'#161439'}>What you'll learn in this course?</Heading>
        <Text color="#6d6c80" fontSize={{ base: '13px', md: '16px' }} fontWeight={400} mb="2">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse ultrices gravida.
          Risus commodo viverra maecenas accumsan lacus vel facilisis.dolor sit amet,
          consectetur adipiscing elited do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <VStack gap="2" align="stretch" my={4}>
          <CourseFeature />
        </VStack>
        <Text color="#6d6c80" fontSize={{ base: '13px', md: '16px' }} fontWeight={400} mb="2" display={{ base: 'none', md: 'block' }}>
          Morem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse ultrices gravida.
          Risus commodo viverra maecenas accumsan.Dorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn.
        </Text>
      </Box>
    </Stack>
  );
}

// Curriculum Tab


function Curriculum({ expandedSections, toggleSection }) {
  const lessons = [
    { title: 'Course Installation', duration: '03:03' },
    { title: 'Create a Simple React CourseInfo', duration: '07:48', locked: true },
    { title: 'React for the Rest of us', duration: '10:48', locked: true }
  ];

  return (
    <VStack gap="4" align="stretch">
      <Heading size="3xl" fontWeight={600} mb="2" color={'#161439'}>Course Curriculum</Heading>
      <Text color="#6d6c80" fontSize={'16px'} fontWeight={400} mb="2">
        Dorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse ultrices gravida.
        Risus commodo viverra maecenas accumsan.
      </Text>

      <VStack gap="1" align="stretch">
        <Box border="1px" borderColor="gray.200" borderRadius="lg" overflow="hidden">
          <Button
            onClick={() => toggleSection('introduction')}
            variant="ghost"
            width="full"
            display="flex"
            justifyContent="space-between"
            p="2"
            bg={'none'}

            m={0}
          >
            <Text fontWeight="semibold" fontSize="xl" color={'#5751E1'}>Introduction</Text>
            {expandedSections.includes('introduction') ?
              <Minus size={20} /> :
              <Plus size={20} />
            }
          </Button>

          {expandedSections.includes('introduction') && (
            <VStack borderTop={'1px solid #DCDCEB'} gap="1px" m={0} align="stretch">
              {lessons.map((lesson, index) => (
                <LessonItem key={index} {...lesson} />
              ))}
            </VStack>
          )}
          <Button
            variant="ghost"
            width="full"
            display="flex"
            justifyContent="space-between"
            p="2"
            bg={'none'}
            borderBottom={'1px solid #DCDCEB'}
            m={0}
            py={6}
          >
            <Text fontWeight="semibold" fontSize="xl" color={'#161439'}>Capacitance and Inductance</Text>
            <Plus size={20} />
          </Button>
          <Button
            variant="ghost"
            width="full"
            display="flex"
            justifyContent="space-between"
            p="2"
            bg={'none'}
            py={6}
            borderBottom={'1px solid #DCDCEB'}
            m={0}

          >
            <Text fontWeight="semibold" fontSize="xl" color={'#161439'}>Final Audit</Text>
            <Plus size={20} />
          </Button>
        </Box>
      </VStack>
    </VStack>
  );
}

function Icons({ ic }) {
  return (
    <Stack
      transition={'.5s'}
      boxShadow="2.50435px 3.33913px #00000040"
      _hover={{ boxShadow: "0px 0px 0px #00000040", bg: '#5751e1', color: '#fff' }}
      bg={'none'} color={'#7f7e97'} border={'.835px solid #9292B4'} p={2} fontSize={'18px'} borderRadius={'100%'} m={0} w={'fit-content'}>{ic}</Stack>
  )
}
// Instructors Tab
function Instructors() {
  return (

    <Flex direction="row" align="center" gap={6}>
      <Box

        w="13rem"
        h="13rem"
        rounded="full"
        mb="4"
        border={'1px solid #DCDCEB'}
        bg={'#e6e9ef'}
        pt={2}
      >
        <Image
          src={mark}
          alt={'ga'}
          w="100%"
          h="100%"
          objectFit="contain"
          bg={'none'}
        />
      </Box>
      <Box flex={2} >
        <Heading fontSize="20px" color={'#161439'} fontWeight={'bold'}>Mark Jukarberg</Heading>
        <Text color="#5751e1" mb="2">UX Design Lead</Text>
        <Flex align="center" gap="1" mb="4">
          <FaStar color="#f8bc24" />
          <Text color="gray.600">(4.8 Ratings)</Text>
        </Flex>
        <Text color="gray.600" mb={3}>
          Dorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse ultrices gravida.
          Risus commodo viverra maecenas accumsan.
        </Text>
        <Flex gap="3">
          {[<FaFacebookF />, <FaInstagram />, <FaWhatsapp />, <FaXTwitter />].map((ic, index) => {
            return <Icons key={index} ic={ic} />
          })}
        </Flex>
      </Box>
    </Flex>
  );
}

// Reviews Tab
function Reviews() {
  const ratings = [
    { rating: 5, count: 2, percentage: 70 },
    { rating: 4, count: 1, percentage: 20 },
    { rating: 3, count: 0, percentage: 0 },
    { rating: 2, count: 0, percentage: 0 },
    { rating: 1, count: 0, percentage: 0 }
  ];

  return (
    <VStack gap="8" align="stretch">
      <Heading fontSize="2xl" p={0} fontWeight={'bold'} color={'#161439'}>Reviews</Heading>
      <Flex gap="8" align="center">
        <Box textAlign="center" gap={0} p={8} bg="#fff" borderRadius="lg" boxShadow={'0 0 20px #00000017'} border={'1px solid #E6EAEF'}>
          <Text fontSize={{ base: '2xl', md: '6xl' }} fontWeight="bold" color="#082a5e">4.8</Text>
          <HStack justify="center" m={0} gap={1}>
            {[1, 2, 3, 4, 5].map((_, index) => (
              <FaStar key={index} size={16} color="#f8bc24" />
            ))}
          </HStack>
          <Text color="#5a7093" fontWeight={'normal'} fontSize={{ base: 'sm', md: 'lg' }} mt={2}>12 Ratings</Text>
        </Box>
        <VStack flex="1" gap="1" align="stretch">
          {ratings.map((rating, index) => (
            <RatingBar key={index} {...rating} />
          ))}
        </VStack>
      </Flex>
    </VStack>
  );
}

// Main CourseInfo
const tabs = [
  { id: 'overview', title: 'Overview', component: Overview },
  { id: 'curriculum', title: 'Curriculum', component: Curriculum },
  { id: 'instructors', title: 'Instructors', component: Instructors },
  { id: 'reviews', title: 'Reviews', component: Reviews }
];

function CourseInfo() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState(['introduction']);

  const toggleSection = (section) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;
  const bgColor = useColorModeValue('gray.100', 'gray.800');
  const cardBg = useColorModeValue('white', 'gray.700');

  return (
    <Box position={'relative'} w={'100%'} m={0} p={0} >

      <Box w={'100%'} overflow="hidden" >
        <Flex w={'100%'} gap="4" p="4" mb={6} flexWrap={'wrap'} >
          {tabs.map(tab => (
            <TabButton
              key={tab.id}
              id={tab.id}
              title={tab.title}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </Flex>

        <Box bg={'white'} w={'100%'} boxShadow={'0 0 14px #00000014'} border={'1px solid #DFDFDF'} borderRadius="10px" p={10} >
          {ActiveComponent && (
            ActiveComponent === Curriculum ? (
              <ActiveComponent expandedSections={expandedSections} toggleSection={toggleSection} />
            ) : (
              <ActiveComponent />
            )
          )}
        </Box>
      </Box>

    </Box>
  );
}

export default CourseInfo;