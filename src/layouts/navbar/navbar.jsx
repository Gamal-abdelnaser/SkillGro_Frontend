'use client'
import logo from '../../assets/logo.png'
import {
  Box,
  Flex,
  Text,
  Stack,
  Icon,
  Popover,
  Image,
  InputGroup,
  Input,
  Span,
  Drawer,
  CloseButton,

} from '@chakra-ui/react'

import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";

import { FaChevronRight } from "react-icons/fa";
import { useColorModeValue } from '@/components/ui/color-mode';
import { useState } from 'react';
import { LuSearch } from 'react-icons/lu';
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
export default function Navbar() {

  return (
    <Flex  w={'100%'} position={'relative'} zIndex={100} bg={'black'} >
      <Box zIndex={100} w={'100%'} bg={useColorModeValue('white', 'gray.800')} display={'flex'} justifyContent={'center'} alignItems={'center'}  boxShadow={'lg'} position={'fixed'} top={0} left={0} >
      
      <Flex
        color={'gray.600'}
        minH={'60px'}
        py={{ base: 1 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={'gray.200'}
        align={'center'}
        paddingY={'4'}
        w={{base:'1500px', md:'1600px', lg:'1600px'}}
          zIndex={100}
        >
          <Flex w={'100%'} justifyContent={'space-between'} px={{md:2, base:6}}>
            
            <Flex    alignItems={'center'} justify={{ base: 'center', md: 'start' }}>
              <Link to={'/'} border='none' 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                > <Image src={logo} minW={'100px'} maxW={'150px'} /></Link>
              <Flex  display={{ base: 'none', md: 'flex' }} ml={10}>
                <DesktopNav />
              </Flex>
            </Flex>

            <Stack
              
              justify={{md:'flex-end', base:'end'}}
              justifyContent={'space-between'}
              direction={'row'}
              gap={7}
              align={'center'}
              w={'fit'}
              
            > 
              {/* <ColorModeToggle /> */}
              <div 
                style={{ border: '1px solid #7F7E97'}}
                className={`hidden lg:flex items-center justify-center md:justify-start rounded-[30px] max-w-1200-hidden `}
              > 
                <SelectInputs />
                <InputGroup w={{md:'200px'}}  flex="1"  endElement={<LuSearch />} >
                  <Input fontSize={'18px'}  borderRadius={'40px'} outline={'none'} border={'none'} placeholder="Search For Courses ..." />
                </InputGroup>
              </div>
              <Box as={Flex} gap={{md:3 ,base:0}}>

                <IconsElement>
                  <FaRegHeart size={20} />
                </IconsElement>
                <IconsElement >
                  <BsCart2 size={20} />
                </IconsElement>
              </Box>
              
              <ProfileButton/>
              <Stack display={{ base: 'block', md: 'none' }}>
                <Demo />
              </Stack>
            </Stack>

        </Flex>
      </Flex>

    </Box>
    </Flex>
  )
}

const IconsElement = ( {children}) => {
  return(
    <Flex position={'relative'} border={'1px solid #7F7E97'} p={'9px'} borderRadius={'50%'} cursor={'pointer'}  display={{ base: "none", md: 'none', lg: "flex" }}>
      <Span position={'absolute'} fontWeight={'600'} boxSize={'20px'} display={'flex'} alignItems={'center'} justifyContent={'center'} textAlign={'center'} bg={'#FFC224'} color={'#000'} pb={'1px'} top={-2} right={-2} border={'1px solid #000'} borderRadius={'100%'} >
        <Span  > 0 </Span>
      </Span>
      {children}
    </Flex>
  )
}

const DesktopNav = ( ) => {
  const linkColor = '#000'
  const linkHoverColor = '#5751E1'
  const popoverContentBgColor = 'white'

  return (
    <Stack direction={'row'} >
      {NAV_ITEMS.map((navItem , index) => (
        <Box  key={index}>
          <Popover.Root  trigger={'hover'} placement={'bottom-start'}>
            <Popover.Trigger display={'flex'} alignItems={'center'} textAlign={'cneter'} >
              <Box
                as={'a'}
                p={2}
                to={navItem.href ?? '#'}
                fontSize={ {md: 'sm' }}
                fontWeight={600}
                color={linkColor}
                _hover={{ textDecoration: 'none', color: linkHoverColor }}
                transition={'.5s'}
              >
                {navItem.label}

              </Box>
              <FaChevronDown size={13}/>
            </Popover.Trigger>

            {navItem.children && (
              <Popover.Content
                position={'absolute'}
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack >
                  {navItem.children.map((child, index) => (
                    <DesktopSubNav key={index} {...child} />
                  ))}
                </Stack>
              </Popover.Content>
            )}
          </Popover.Root >
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      // position={''}
      _hover={{ bg: '#221f1f24' }}>
      <Stack direction={'row'}  align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: '#5751E1' }}
            _hover={{ color: '#5751E1' } }
            fontWeight={500}
            color={'#000'}
            >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={FaChevronRight} />
        </Flex>
      </Stack>
    </Box>
  )
}

const NAV_ITEMS = [
  {
    label: 'Inspiration',
    children: [
      {
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  {
    label: 'Courses',
    children: [
      {
        label: 'All Courses',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Course Details',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
      {
        label: 'Course Lesson',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  {
    label: 'Pages',
    children: [
      {
        label: 'Our Instructors',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Our Events',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
      {
        label: 'Shop',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
      {
        label: 'Blog',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
      {
        label: 'Student Login',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
      {
        label: 'Student Registeration',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
      {
        label: 'Contact',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  {
    label: 'Dashbord',
    children: [
      {
        label: 'Instructor Dashboard',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Student Dashbord',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  
]

"use client"

import { Portal, Select, createListCollection } from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import ProfileButton from './LoginIcon';
import { FiGrid, FiUser } from 'react-icons/fi';
import Sidebar from './sideBar';

const SelectInputs = () => {
  const [dat, stDat] = useState('Categories')
  return (
    <Select.Root collection={frameworks} outline={'none'} size="sm" width="130px" p={1} variant={'none'} borderRight={'1px solid #7F7E97'} borderRadius={'30px'}>
      <Select.HiddenSelect />
      {/* <Select.Label>Select framework</Select.Label> */}
      <Select.Control>
        <Select.Trigger>
          <AiOutlineAppstoreAdd size={30} color='#5751E1' bg='none'/>
          <Select.ValueText fontSize={'18px'} pr={3} placeholder={dat}/>
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content w={'fit'}>
            {frameworks.items.map((framework) => (
              <Select.Item fontSize={'18px'} p={3} pr={9} item={framework} transition={'.5s'} _hover={{ bg: "#5751E1"}}  key={framework.value}>
                {() => stDat(framework.value)}
                {framework.label} 
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

const frameworks = createListCollection({
  items: [
    { label: "Business", value: "Business" },
    { label: "Data Science", value: "Data Science" },
    { label: "Art & Design", value: "Art & Design" },
    { label: "Marketing", value: "Marketing" },
    { label: "Finance", value: "Finance" },
  ],
})




const Demo = () => {
  const [open, setOpen] = useState(false)

  return (
    <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)} >
      <Drawer.Trigger asChild cursor={'pointer'}>
        {/* <Button bg={'none'} w={'fit'} h={'fit'} p={0} outline={'none'} size="xl">
          <FiGrid size={60} color='#5751e1' />
        </Button> */}
        <Box
          borderRadius="full"
          w={'full'}
          h={'full'}
          p={0}
          m={0}
          border={'none'}
          shadow={0}
          display="flex"
          alignItems="center"
          justifyContent="center"
          transition={'.3s'}
          
        >
          <FiGrid size={30} color='#5751e1' />

        </Box>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner p={0} m={0} >
          <Drawer.Content p={0} m={0} mb={4} >
            <Drawer.Header mt={1}>
              <Drawer.Title><Link to={'/'} border='none'> <Image src={logo} minW={'100px'} maxW={'140px'} /></Link></Drawer.Title>
            </Drawer.Header>
            <Drawer.CloseTrigger alignItems={'center'} justifyContent={'center'} asChild>
              <CloseButton size="2xl" fontWeight={'bold'} color={'#5751e1'} top={4} bg={'none'} />
            </Drawer.CloseTrigger>

            <Drawer.Body p={0} m={0} display={'flex'} textAlign={'start'}  alignItems={'center'} flexDirection={'column'}>
              {/* <Stack px={4}> */}

                <InputGroup px={8} mt={4} mb={4} borderRadius={'sm'} borderStart={'none'} outline='none' transition={'.3s '} border={'none'} bgColor={'none'} borderColor={'none'} color='#5751e1' endAddon={<LuSearch size={20} cursor={'pointer'}  />}>
                  <Input placeholder="Search here" fontSize={'md'} p={4} outline={'none'} border={'none'} bg={'#f7f7f9'} variant="subtle" />
                </InputGroup>
                <Sidebar/>

              {/* </Stack> */}
            </Drawer.Body>
            
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}