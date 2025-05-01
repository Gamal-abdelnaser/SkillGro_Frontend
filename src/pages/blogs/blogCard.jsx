import { Box, Card, Flex, Heading, Image, Span, Stack, Text } from "@chakra-ui/react";
import { MdOutlineCalendarToday } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router";


export default function BlogCard({ blog }) {

  return (
      
    <Card.Root as={Link} to={`/blog/${blog.id}`} p={'4px'} overflow="hidden" zIndex={1} maxW={'330px'} borderRadius={'10px'} bg={'#fff'} border={'1px solid #B5B5C3'} transition={'.5s'} _hover={{boxShadow: "rgb(202, 201, 214) 10px 10px" }} >
      <Card.Body gap={2} p={4} >
        <Box position={'relative'} > 
          <Image
            src={blog.image}
            alt="Green double couch with wooden legs"
            borderRadius={'15px'}
            w={'full'}
            objectFit={'cover'}
          />
          <Text 
            position={'absolute'} py={1}  top={4} left={2} zIndex={2}
            cursor={'pointer'} px={'15px'} fontSize={'12px'} fontWeight={'500'}
            borderRadius={'30px'} bgColor={'#5751e1'} color={'#fff'} transition={'.5s'}
            _hover={{ bgColor: '#f8bc24', color: '#000' }}
          >
              {blog.field}
          </Text>
        </Box>
        <Stack  gap={2} mt={'10px'} >
          <Flex width={'100%'} alignItems={'center'} style={{ justifyContent: 'space-between' }} >
            <Text color={'#6d6c80'} display={'flex'} alignItems={'center'} textAlign={'center'} gap={2} fontSize={'sm'}> <MdOutlineCalendarToday color="#5751e1" size={'18px'} /> 20 July, 2024</Text>
            <Text color={'#6d6c80'} display={'flex'} alignItems={'center'} textAlign={'center'} gap={2} fontSize={'sm'}> <CgProfile color="#5751e1" size={'18px'}  /> By Admin</Text>
          </Flex>
          <Heading fontSize="lg" fontWeight={'700'} letterSpacing={1.2} textDecoration={'md'} my={1} color={'#161439'}> {blog.title}</Heading>
          
        </Stack>
      </Card.Body>
    </Card.Root>
     
  )
}