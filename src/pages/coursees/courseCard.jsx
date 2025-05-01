// import { Heading } from 'lucide-react'
import { Button, Card, Center, Flex, Heading, Image, Span, Stack, Text } from "@chakra-ui/react"
import { Link } from "react-router"
import { ArrowRight } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { CourseContext } from "@/pages/coursees/courseContext.jsx";
import { useContext } from "react";
export default function CourseCard({ course }) {

  const { setSelectedCourses } = useContext(CourseContext);

  // const url = course.image.formats.thumbnail.url;
  // console.log(course);

  return (


    <Card.Root p={'2px'} overflow="hidden" bg={'none'} borderRadius={'10px'} border={'1px solid #B5B5C3'} transition={'.5s'} _hover={{ boxShadow: "10px 8px 0px #d7d7df" }} >
      <Card.Body gap="2" p={4} >
        <Image
          // src={`${import.meta.env.VITE_SERVER_URL}${url}`}
          src={course.image}
          alt="Green double couch with wooden legs"
          borderRadius={'15px'}
          // width={'200px'}
          // height={'200px'}
          w={'full'}
          // mx={'auto'}
          objectFit={'cover'}
        />
        <Stack gap={'1'} mt={'10px'} >
          <Flex width={'100%'} alignItems={'center'} style={{ justifyContent: 'space-between' }} >
            <Text cursor={'pointer'} color={'#000'} px={'15px'} fontSize={'15px'} fontWeight={'500'} borderRadius={'30px'} bgColor={'#efeff2'} transition={'.5s'} _hover={{ bgColor: '#5751e1', color: '#fff' }}>{course.category}</Text>
            <Text color={'#7f7e97'} display={'flex'} alignItems={'center'} textAlign={'center'}><FaStar color="#f8bc24" /> ({course.rating} Reviews)</Text>
          </Flex>
          <Heading fontSize="xl" fontWeight={'600'} textDecoration={'md'} my={1} color={'#161439'}> {course.Title}</Heading>
          <Card.Description fontSize={'lg'} fontWeight={'medium'} mb={1} color={'#7f7e97'}>
            By <Span color={'#000'}>{course.Author}</Span>
          </Card.Description>

        </Stack>
      </Card.Body>
      <Card.Footer >
        <Flex width={'100%'} alignItems={'center'} style={{ justifyContent: 'space-between' }} >
          <Button
            as={Link}
            to={`/course/${course.id}`}
            position={'relative'}
            rounded={'full'}
            // size={'lg'}
            width={'150px'}
            textAlign={'center'}
            color={'#000'}
            bg={'#ffc224'}
            fontWeight={'600'}
            fontSize={'sm'}
            transition={'.5s'}
            border={'1px solid #000'}
            boxShadow="6px 4px 0px #000" p="2" borderRadius={"30px"}
            _hover={{ boxShadow: "0px 0px 0px #000", }}
            // onClick={() => (window.scrollTo({ top: 0, behavior: 'smooth' }), setSelectedCourses(course))}
            onClick={() => {
              // console.log(training);
              window.scrollTo({ top: 0, behavior: 'smooth' })
              setSelectedCourses(course);
              // navigate("/training-details");
            }}
          >
            Start Free Trial  <ArrowRight fontSize={'30px'} />
          </Button>
          <Text fontSize={'lg'} color={'#5751E1'} fontWeight={'bold'} >${course.price}.00</Text>
        </Flex>

      </Card.Footer>
    </Card.Root>

  )
}