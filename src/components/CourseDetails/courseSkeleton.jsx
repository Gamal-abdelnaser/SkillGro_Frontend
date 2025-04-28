import {
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react"

 const CourseSkeleton = () => {
  return (
    <Stack gap="6" maxW="xs" minH={'100vh'} pt={'100px'}>
      <HStack width="full">
        <SkeletonCircle size="10" />
        <SkeletonText noOfLines={2} />
      </HStack>
      <Skeleton height="200px" />
    </Stack>
  )
}
export default CourseSkeleton;