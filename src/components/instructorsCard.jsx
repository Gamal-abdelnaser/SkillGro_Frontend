// import { Badge, Box, Button, Card, HStack, Image, Stack, Text } from "@chakra-ui/react"
import { FaFacebookF, FaInstagram, FaStar, FaWhatsapp } from "react-icons/fa"


function Icons({ic}) {
  return(
    <Stack
      transition={'.5s'}
      boxShadow="2.50435px 3.33913px #00000040"
      _hover={{ boxShadow: "0px 0px 0px #00000040",bg:'#5751e1', color:'#fff' }}
      bg={'none'} color={'#7f7e97'} border={'.835px solid #9292B4'} p={2} fontSize={'18px'} borderRadius={'100%'} m={0} w={'fit-content'}>{ic}</Stack>
  )
}

import React from 'react';
import { Star } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import { Box, Flex, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";

function SocialIcon() {
  return (
    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
      <div className="w-5 h-5 text-gray-500 flex" ><FaFacebookF /> <FaInstagram /> <FaWhatsapp /> <FaXTwitter /></div> 
    </div>
  );
}

function TeamMemberCard({ member  }) {
  const url = member.image.formats.thumbnail.url;

  return (
    <Flex direction="row" align="center">
      <Box
        w="10rem"
        h="10rem"
        rounded="full"
        overflow="hidden"
        mb="4"
        bg="none"
      >
        <Image
          src={`${import.meta.env.VITE_SERVER_URL}${url}`}
          alt={member.name}
          w="100%"
          h="100%"
          objectFit="cover"
          bg={'none'}
        />
      </Box>
      <Box>
        <Heading as="h3" fontSize="2xl" fontWeight="bold" color="gray.800" transition={'.3s'}  _hover={{ color:' #ffc224' }} cursor={'pointer'}>
          {member.name}
        </Heading>
        <Text color="#5751e1" mb="2">
          {member.position}
        </Text>
        <Flex align="center" gap="1" mb="4">
          <FaStar color="#f8bc24" />
          <Text color="gray.600">(4.8 Ratings)</Text>
        </Flex>
        <Flex gap="3">
          {[<FaFacebookF />, <FaInstagram />, <FaWhatsapp />, <FaXTwitter />].map((ic, index) => {
            return <Icons key={index} ic={ic} />
          })}
        </Flex>
      </Box>
    </Flex>
  );
}


export default TeamMemberCard;