import BlogCard from '@/pages/blogs/blogCard';
import { useColorModeValue } from '@/components/ui/color-mode';
import { news } from '@/utilitis/data';
import {  Flex, Stack, Text } from '@chakra-ui/react';

import React from 'react'

const News = () => {
  const bg = useColorModeValue('#efeefe', 'blue.900');
  return (
    <Stack className={'coursess'} pb={'100px'} mx={'auto'} pt={'50px'}>

      <Stack my={'30px'} display={'flex'} alignItems={'center'} justifyContent={'center'} textAlign={'center'} w={'100%'} gap={2} >
        <Text
          w={'fit-content'}
          alignItems={'center'}
          textAlign={'center'}
          color={'#5751e1'}
          fontWeight={500}
          fontSize={'lg'}
          bg={bg}
          px={3}
          borderRadius={'30px'}>
          News & Blogs
        </Text>
        <Text fontSize={'40px'} fontWeight={'600'} textAlign={'center'}>
          Our Latest News Feed
        </Text>
        <Text color={'#6d6c80'} letterSpacing={'1.2px'} >When known printer took a galley of type scrambl edmake</Text>

      </Stack>
      <Flex flexWrap={'wrap'} mx={'auto'} zIndex={1} width={'95%'} justifyContent={'center'} gap={4}  >
        {news?.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </Flex>
    </Stack>

  );
}
export default News;








