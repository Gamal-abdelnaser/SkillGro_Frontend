

import React, { useState } from 'react';
import { Plus, Minus, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Box, Flex, Text, Link, Button, IconButton, Collapsible, Span } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';
import { BiPlus } from 'react-icons/bi';
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti';

const navigationData = [
  {
    title: 'Home',
    isExpanded: true,
    subItems: [
      { title: 'Main Home', path: '/main-home' },
      { title: 'Online Course', path: '/online-course', badge: { type: 'hot', label: 'Hot', bgcol: 'linear-gradient(90deg, #ff1515, #ed0fbc)' } },
      { title: 'University', path: '/university', badge: { type: 'new', label: 'New', bgcol:'#39cabd' } },
      { title: 'Yoga Instructor', path: '/yoga-instructor', badge: { type: 'new', label: 'New', bgcol: 'linear-gradient(90deg, #ff1515, #ed0fbc)' } },
      { title: 'Kindergarten', path: '/kindergarten', badge: { type: 'hot', label: 'Hot', bgcol: '#39cabd' } },
      { title: 'Language Academy', path: '/language-academy', badge: { type: 'new', label: 'New', bgcol: 'linear-gradient(90deg, #ff1515, #ed0fbc)' } },
      { title: 'Business Coach', path: '/business-coach', badge: { type: 'new', label: 'New', bgcol: '#39cabd' } },
      { title: 'Kitchen Coach', path: '/kitchen-coach', badge: { type: 'hot', label: 'Hot', bgcol: 'linear-gradient(90deg, #ff1515, #ed0fbc)' } },
    ],
  },
  {
    title: 'Courses',
    isExpanded: false,
    subItems: [
      { title: 'AllCourses', path: '/course-grid' },
      { title: 'Course Details', path: '/course-details' },
      { title: 'Course Lesson', path: '/course-lesson' },
    ],
  },
  {
    title: 'Pages',
    isExpanded: false,
    subItems: [
      { title: 'About Us', path: '/about' },
      { title: 'Contact', path: '/contact' },
      { title: 'FAQ', path: '/faq' },
      { title: 'Privacy Policy', path: '/privacy-policy' },
    ],
  },
  {
    title: 'Dashboard',
    isExpanded: false,
    subItems: [
      { title: 'Student Dashboard', path: '/student-dashboard' },
      { title: 'Instructor Dashboard', path: '/instructor-dashboard' },
      { title: 'Profile', path: '/profile' },
      { title: 'Settings', path: '/settings' },
    ],
  },
];

const Badge = ({ type, label }) => {
  const badgeColor = type === 'hot' ? 'red.500' : 'teal.500';

  return (
    <Box
      ml={2}
      px={2}
      py="1px"
      fontSize="xs"
      fontWeight="medium"
      borderRadius="md"
      bg={badgeColor}
      color="white"
    >
      {label}
    </Box>
  );
};

const NavItem = ({ title, path, badge }) => {
  return (
    <Link
      href={path}
      display="flex"
      alignItems="center"
      py={3}
      px={6}
      color="gray.700"
      _hover={{ color: 'indigo.600', bg: 'gray.50' }}
      transition="colors 0.2s"
    >
      <Text>{title}</Text>
      {badge && <Badge type={badge.type} label={badge.label} />}
    </Link>
  );
};

const NavSection = ({ title, subItems, defaultExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box >
        {navigationData.map((data, index) => (
          <Collapsible.Root key={index} >
            <Collapsible.Trigger px={8} textAlign={'start'} borderBottom={'1px solid #d7d7df'} w={'full'} fontSize={'md'} fontWeight={'semibold'}
              paddingY="3" cursor={'pointer'}
              rightIcon={data.isExpanded ? <Minus size={20} color="#4F46E5" /> : <BiPlus size={20} color="#6B7280" />}
            >
              {data.title}
            </Collapsible.Trigger>

            {data.subItems.map((item, subIndex) => (
              <Collapsible.Content key={subIndex} px={8} borderBottom={'1px solid #d7d7df'} fontSize={'md'} fontWeight={'semibold'} >
                <Box padding="4" cursor={'pointer'} >
                  {item.title} {item?.badge && <Span ml={3} px={2} bg={item?.badge?.bgcol} color={'#fff'} fontWeight={'semibold'} borderRadius={'10px'}> {item?.badge?.label}</Span>}
                </Box>
              </Collapsible.Content>
            ))}
          </Collapsible.Root>
        ))}
    </Box>
  );
};

const SocialIcon = ({ icon, href }) => {
  return (
    <Link
      href={href}
      isExternal
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="10"
      h="10"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="md"
      color="gray.500"
      transition={'.4s'}
      _hover={{ color: '#fff', borderColor: 'indigo.600', bg:'#4F46E5'}}


    >
      {icon}
    </Link>
  );
};

const SocialLinks = () => {
  return (
    <Flex wrap="wrap" justify="center" gap={2} px={4} mt={4}>
      <SocialIcon icon={<TiSocialFacebook size={20} />} href="https://facebook.com" />
      <SocialIcon icon={<TiSocialTwitter size={20} />} href="https://twitter.com" />
      <SocialIcon icon={<FaInstagram size={20} />} href="https://instagram.com" />
      <SocialIcon icon={<TiSocialLinkedin size={20} />} href="https://linkedin.com" />
      <SocialIcon icon={<FaYoutube size={20} />} href="https://youtube.com" />
    </Flex>
  );
};

const Sidebar = () => {
  return (
    <Box
      p={0}
      m={0}
      as="aside"
      w="full"
      display="flex"
      flexDirection="column"
    >
      <Box flex="1"  m={0}>
        <NavSection/>
      </Box>
      <Box mt="auto" w={'full'} pb={4}>
        <SocialLinks />
      </Box>
    </Box>
  );
};

export default Sidebar;
