import React from 'react';
import {
  Box,
  Flex,
  Grid,
  Image,
  Text,
  Heading,
  Button,
  Container,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ArrowRight } from 'lucide-react';
import boyAgirl from '../assets/boyAgirl.png';
import women from '../assets/women.png';

const belongItems = [
  {
    title: 'Become a Instructor',
    define: 'To take a trivial example, undertakes physical exercise yes is this happen here.',
    ic: women,
    wid: '170px',
    gapp: 14
  },
  {
    title: 'Become a Student',
    define: 'Join millions of people from around the world learning together Online learning,',
    ic: boyAgirl,
    wid: '200px',
    gapp:6
  }
]




function Boxes({typ}) {
  return(
    <Box className='hiverBox' bg="white" pt={'10px'} px={5}  minW={{base:'90%'}} rounded="3xl" mx={'auto'} overflow="hidden" shadow="lg">
      <Flex direction={'row'} gap={typ.gapp} my={0} >
        <Box minW={'160px'} display={{base:'none' , md:'block'}} maxW={typ.wid} zIndex={2} position="relative" >
          <Image
            src={typ.ic}
            alt="Happy students"
            objectFit="contain"
            w="full"
            h="full"
            zIndex={1}

          />
          <Box position="absolute" bottom={'-90px'} left={-10} zIndex={-1}>
            <Box w={60} h={60} transition={'0.3s ease-out'} className='hivermod' borderRadius="full" zIndex={-1} />
          </Box>
        </Box>
        <Box w={{md:'60%', base:'100%'}} display={'flex'} justifyContent={'center'} flexDirection={'column'}  p={6}>
          <Heading fontSize="28px" fontWeight="bold" color="#161439" transition={'0.3s ease-out'} _hover={{ color: '#FFC224' }} mb={3}>
            {typ.title}
          </Heading>
          <Text color="#6D6C80" mb={6} fontSize={'13px'} >
            {typ.define}
          </Text>
          <Button
            position={'relative'}
            rounded={'full'}
            width={'200px'}
            textAlign={'center'}
            color={'#fff'}
            bg={'#5751e1'}
            fontWeight={'600'}
            fontSize={'lg'}
            h={'50px'}
            transition={'.3s linear'}
            boxShadow="4px 6px 0 0 #050071" p="2" borderRadius={"30px"}
            _hover={{ boxShadow: "0px 0px 0 0 #050071", bg:'#FFC224', color:'#000' }}>
            Apply Now  <ArrowRight fontSize={'30px'} />
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}


function Belong() {

  const minColumnWidth = useBreakpointValue({
    base: '90%',  // On small screens
    md: '600px',  // On medium and up
  });

  return (
    <Box  bgGradient="linear(to-b, indigo.900, indigo.800)" p={{ base: 4, md: 8 }}>
      <Container w="100%">
        <Grid templateColumns={`repeat(auto-fill, minmax(${minColumnWidth}, 1fr))`} gap={5} >
          {/* Instructor Card */}
          {
            belongItems.map((typ, index) => {
              return <Boxes key={index} typ={typ} />
            })
          }
        </Grid>
      </Container>
    </Box>
  );
}



export default Belong;