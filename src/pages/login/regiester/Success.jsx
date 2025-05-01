import {
  Box,
  Button,
  Text,
  Heading,
  Flex,
  Link as ChakraLink,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { CheckCircle, X } from "lucide-react";

export default function SubmitSuccess({ closeModal, showModal,text  }) {
  if (!showModal) return null;

  return (
    <Flex
      position="fixed"
      inset={0}
      bg="blackAlpha.600"
      justify="center"
      align="center"
      zIndex={9999}
    >
      <Box
        bg="white"
        p={{ base: 2, md: 4 }}
        rounded="lg"
        shadow="xl"
        textAlign="center"
        maxW="600px"
        w={{ base: "90%", md: "500px" }}
        position="relative"
      >
        <IconButton
          
          aria-label="Close"
          onClick={closeModal}
          position="absolute"
          top="3"
          right="3"
          color="red.500"
          variant="ghost"
          _hover={{ color: "gray.700" }}
          fontSize="xl"
        >
          <Icon><X size={24} /></Icon>
        </IconButton>

        <Flex
          bg="green.500"
          color="white"
          w={{ base: "70px", md: "80px" }}
          h={{ base: "70px", md: "80px" }}
          mx="auto"
          align="center"
          justify="center"
          rounded="full"
        >
          <CheckCircle size={50} />
        </Flex>

        <Heading
          mt={4}
          fontSize={{ base: "lg", md: "2xl" }}
          color="gray.800"
        >
          Hello
        </Heading>

        <Text
          color="gray.600"
          fontSize={{ base: "sm", md: "xl" }}
          mt={4}
          mb={6}
        >
          {text}
        </Text>

        
      </Box>
    </Flex>
  );
}
