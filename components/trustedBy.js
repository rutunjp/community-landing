import {
  Avatar,
  Box,
  Heading,
  Text,
  Container,
  VStack,
  Image,
  Flex,
} from '@chakra-ui/react'
const TrustedBy = () => {
  return (
    <VStack justify={'start'} align={'start'}>
      <Text size="xs" fontFamily={'Inter'} fontWeight={700}>
        Trusted by
      </Text>
      <Flex direction={'row'} p={0}>
        <Image alt="avatar" maxW={'48px'} src="./images/avatar1.svg" />
        <Image
          alt="avatar"
          maxW={'48px'}
          marginLeft={'-16px'}
          src="./images/avatar2.svg"
        />
        <Image
          alt="avatar"
          maxW={'48px'}
          marginLeft={'-16px'}
          src="./images/avatar3.svg"
        />
        <Image
          alt="avatar"
          maxW={'48px'}
          marginLeft={'-16px'}
          src="./images/avatar4.svg"
        />
      </Flex>
    </VStack>
  )
}

export default TrustedBy
