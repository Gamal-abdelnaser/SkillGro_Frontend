import Carousel from '@/pages/categories/carousel';
import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react'

 const Category = () => {
  return (
    <Flex w="100%" bg="#fff" justify="center">
      {/* الأب بيوصل للعرض الكامل، والمحتوى جواه محدود بـ 1500px */}
      <Box w="100%" maxW="1500px" px={4} py={10}>
        <Flex
          direction="column"
          align="center"
          justify="center"
          textAlign="center"
          w="100%"
          gap={10}
        >
          <Stack
            gap={6}
            align="center"
            textAlign="center"
            w="100%"
            px={4}
          >
            <Text
              color="#5751e1"
              fontWeight={500}
              fontSize="lg"
              bg="#efeefe"
              px={3}
              borderRadius="30px"
              
            >
              Trending Categories
            </Text>

            <Heading lineHeight={1} fontSize="40px" fontWeight="700" color="#000">
              Top Category We Have
            </Heading>

            <Text color="#6d6c80" letterSpacing="1.2px">
              when known printer took a galley of type scrambl edmake
            </Text>
          </Stack>

          {/* الكاروسيل في حدود الـ maxW وما يخرجش منها */}
          <Box w="100%"  bg="#fff" px={4}>
            <Carousel />
          </Box>
        </Flex>
      </Box>
    </Flex>

  )
}
export default Category;

