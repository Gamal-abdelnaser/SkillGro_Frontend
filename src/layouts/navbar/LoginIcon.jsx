import { Box, Button } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function ProfileButton() {
  return (
    <>
      <MobileButton />
      <DesketopButton />
    </>
  );
}

function MobileButton() {
  return (
    <Button
      display={{ md: 'none', base: 'flex' }}
      // width={'40px'}
      // h={'40px'}
      p={0}
      overflow={'hidden'}
      as={Link}
      to={'/login'}
      fontSize={'lg'}
      border={'none'}
      shadow={'none'}
      color={'#000'}
      borderRadius={'50%'}
      m={'0'}
      bg={'none'}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}

    >
      <Box
        bg={"#f4f4f4"}
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
        color="#6d6c80"
        _hover={{ bg:'#5751E1', color:'#fff'}}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <FiUser size={40}  />
        
      </Box>
    </Button>
  )
}

function DesketopButton() {
  return(
    <Button display={{md:'flex', base:'none'}}  as={Link} to={'/login'}  fontSize={'sm'} bg={'#FFC224'} borderRadius={'50px'} color={'#000'} fontWeight={700} variant={'link'} >
      Sign In
    </Button>
  )
}