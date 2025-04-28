import TeamMemberCard from '@/components/instructorsCard';
import { Box, Button, Center, Flex, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import arrow2 from '../assets/arrow2.gif'
import React from 'react'

 const Instractors = () => {
   const getProductList = async () => {
     const { data } = await axios.get(
       `${import.meta.env.VITE_SERVER_URL}/api/Instructors?populate=image`
     );
     return data; // Ensure API structure is correct
   };

   const { isLoading, data, } = useQuery({
     queryKey: ["instructors"],
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
   </div>
   const resData = data?.data;
   
  return (
    // <Stack className={'coursess'} mx={'auto'} w={'100%'}>
    <Box bg="none"  display={'flex'} justifyContent={'center'} alignItems={'center'} mx={'auto'} w={'100%'} pb={{ base: '200px', md: '150px' }}>
      <Flex maxW={'1500px'} w={'100%'}  justifyContent={'center'} alignItems={'center'} >
        
        {/* Container Width Section */}
        <Box w="full" py="16" px={{ base: 4, sm: 6, lg: 8 }} bg="white" display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Flex maxW="95%" w={'100%'} mx="auto" className='instrac' > 

            <Box flex={1} textAlign="start" alignItems={'start'} maxW="full"  mb="16">
              <Box  mb="8" >
                <Text
                  bg="#efeefe"
                  color="#5751e1"
                  px="4"
                  py="2"
                  rounded="full"
                  fontSize="sm"
                  display="inline-block"
                >
                  Skilled Introduce
                </Text>
              </Box>
              <Heading
                as="h2"
                fontSize="4xl"
                fontWeight="bold"
                color="gray.900"
                mb="6"
                textAlign="start"
                lineHeight={1.2}
              >
                Our Top Class &<br/> Expert Instructors In<br/> One Place
              </Heading>
              <Text textAlign="start" color="gray.600" mb="8">
                when an unknown printer took a galley of type and scrambled
                makespecimen book has survived not only five centuries
              </Text>
              
                <Button
                  position={'relative'}
                  rounded={'full'}
                  size={'lg'}
                  width={'250px'}
                  textAlign={'center'}
                  colorScheme={'red'}
                  bg={'#5751e1'}
                  fontWeight={'600'}
                  fontSize={'lg'}
                  transition={'.5s'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  boxShadow="10px 6px 3px #000" p="6" borderRadius={"30px"}
                  _hover={{ bg: '#ffc224', boxShadow: "0px 0px 0px #000", color: '#000',   } }>
                  See All Instructors <Image width={'35px'} color={'#fff'} right={0} src={ arrow2} />
                </Button>
              
            </Box>

            <Grid
              flex={2}
              alignItems={'center'}
              justifyContent={'center'}
              
              templateColumns="repeat(auto-fill, minmax(295px, 1fr))"
              gap={4}
              
            >
              {resData.map((member, index) => (
                <TeamMemberCard key={index} member={member} />
              ))}
            </Grid>
          </Flex>
        </Box>
      </Flex>
    </Box>
    // </Stack>
  )
}
export default Instractors;