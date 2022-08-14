import { Heading, HStack, Image, VStack, Text } from '@chakra-ui/react'

const BestCommunityAward = () => {
  return (
    <HStack>
      <Image src="./images/trophy.svg" alt="trophy" maxW={'2.6rem'}></Image>
      <VStack align={'flex-start'} spacing={'-2 '}>
        <Text fontSize={'17px'} fontWeight={500}>
          Best Community
        </Text>
        <Text fontSize={'17px'} fontWeight={700} h={'fit-content'}>
          Award 2022
        </Text>
      </VStack>
    </HStack>
  )
}
export default BestCommunityAward
