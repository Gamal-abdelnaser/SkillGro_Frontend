
import { Box, Button, Checkbox, Container, Field, Flex, Group, Heading, Image, Input, Span, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import man from '../assets/man.png'
import line from '../assets/lineMoved.png'
import kosah from '../assets/kosah.png'
import { PiDotsNineLight } from 'react-icons/pi';
import { RxDragHandleDots1 } from 'react-icons/rx';

 const Seperation = () => {
   const [user, setUser] = useState({
     email: "",
   });

   const onChangeHandeler = e => {
     const { name, value } = e.target;
     setUser({ ...user, [name]: value })
   }
   const submitHandeler = e => {
     e.preventDefault();
     console.log(user);

   }
  return (
    <Stack overflow={'hidden'} zIndex={1} w={'100%'} className='stn'   pt={30} bg={'#5751e1'}  my={'100px'} display={'flex'} justifyContent={'center'} alignItems={'center'} >
      <Flex maxW={'1500px'} w={'100%'} dir='row' alignItems={'center'} justifyContent={'center'}>
        
      <Flex zIndex={1} position={'relative'} w={'90%'} dir='row'  display={'flex'} alignItems={'center'} justifyContent={'center'}>

          <Box  
            zIndex={2} flex={1} minW={'300px'} className='stn'
            position={'relative'}
            // display={'none'}
            sx={{
              "@media (max-width: 1000px)": {
                display: "none"
              }
            }}
          >
            <Image src={kosah} position={'absolute'}  left={-30} bottom={0} w={'400px'} className='animate-bounce-custom'  zIndex={-1} />
            {/* <Image src={boxDot} position={'absolute'} right={'100px'} top={9} w={'100px'} borderRadius={'10px'} className='move2'  zIndex={-1} /> */}
            <Stack  position={'absolute'} left={40}  top={9} gap={20} fontWeight={'light'} m={0} p={0} fontSize={150} color={'#fff'} className='move2' zIndex={-1} display={'flex'} direction={'row'} justifyContent={'center'}><RxDragHandleDots1 /> </Stack>
            <Image src={man} />
          </Box>

          <Flex flex={2} w={'full'} className='ngng' gap={2} direction={'column'} alignItems={'center'} 
          justifyContent={'center'} >     
              <Heading className='altnttext' fontSize={'38px'} w={'full'} lineHeight={1.5}  color={'#fff'} fontWeight={'400'} >
              Want To Stay <Span fontWeight={'700'}>Informed</Span> About <br /> New <Span fontWeight={'700'}> Courses & Study?</Span>
              </Heading>
              
                
            <Box
              as={'form'}
              onSubmit={submitHandeler}
              rounded={'lg'}
              w={'100%'}
              mt={'20px'}
              display={'flex'}
              alignItems={'center'} justifyContent={'center'}
              >
              <Stack w={'100%'} className='formed' display={'flex'} gap={4} flexDir={{base: 'column',md:'row'}}
                >
                
                  <Input
                    
                    p={6}
                    py={'30px'}
                    type="email"
                    fontSize={'18px'}
                    color={'#fff'}
                    variant="none"
                    name='email'
                    value={user.email}
                    outline={'none'}
                    bg={'#4a44d1'}
                    borderRadius={'40px'}
                    border={'1px solid #433ec2'} w={{base: '100%',md:'60%'}}
                    onChange={onChangeHandeler}
                    
                    placeholder='Type Your E-Mail . . .'
                  />
                
                <Stack gap={0} ml={0}>
                  
                  <Button
                    position={'relative'}
                    type='submit'
                    rounded={'full'}
                    size={'lg'}
                    width={'200px'}
                    h={'60px'}
                    textAlign={'center'}
                    bg={' #FFC224'}
                    fontWeight={'600'}
                    fontSize={'18px'}
                    transition={'.5s'}
                    color={'#000'}
                    boxShadow="4px 6px #3d3d3d" p="6" borderRadius={"30px"}
                    _hover={{  boxShadow: "0px 0px 0px #000", color: '#000',   } }>
                    Subscribe Now
                  </Button>
                </Stack>
              </Stack>
            </Box>
                
          </Flex>
          
        </Flex>

        <Image src={line} position={'absolute'} className='animate-bounce-Spacer' w={'fit'} top={0} right={40} zIndex={-1} />

        </Flex>    
    </Stack>
  )
}
export default Seperation;

