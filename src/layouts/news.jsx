import BlogCard from '@/components/blogCard';
import CourseCard from '@/components/CourseDetails/courseCard';
import { useColorModeValue } from '@/components/ui/color-mode';
import { Button, Flex, Grid, Stack, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Heading } from 'lucide-react';
import React, { useState } from 'react'

const News = () => {
  const [all, setAll] = useState(false)
  const [activeTab, setActiveTab] = useState('all');
  const [colored, setColored] = useState('#7f7e97');


  const bg = useColorModeValue('#efeefe', 'blue.900');
  const getProductList = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/api/blogs?populate=image`
    );
    return data; // Ensure API structure is correct
  };

  const { isLoading, data, } = useQuery({
    queryKey: ["blogs"],
    queryFn: getProductList
  });

  // if (isLoading) return <h3>Loading...</h3>;
  if (isLoading) return <div>
    <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6} margin={30}>
      {Array.from({ length: 20 }, (_, idx) => (
        //  <Skelaton key={idx} />
        <div key={idx}></div>

      )
      )}

    </Grid>
  </div>;

  const resData = data?.data;

  let DaraReversedArray = resData
  if (all) {
    DaraReversedArray = [...resData].reverse()
  } else {
    DaraReversedArray = resData
  }

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
          // alignSelf={'flex-start'}
          borderRadius={'30px'}>
          News & Blogs
        </Text>
        <Text fontSize={'40px'} fontWeight={'600'} textAlign={'center'}>
          Our Latest News Feed
        </Text>
        <Text color={'#6d6c80'} letterSpacing={'1.2px'} >When known printer took a galley of type scrambl edmake</Text>


      </Stack>
      <Flex flexWrap={'wrap'} mx={'auto'} zIndex={1} width={'95%'} justifyContent={'center'} gap={4}  >
        {DaraReversedArray?.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </Flex>
    </Stack>

  );
}
export default News;








