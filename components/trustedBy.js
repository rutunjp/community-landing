import { Avatar, Box, Heading, Text, Container, VStack } from '@chakra-ui/react'
const TrustedBy = () => {
  return (
    <VStack justify={'start'} align={'start'}>
      <Text size="xs" fontFamily={'Inter'} fontWeight={700}>
        Trusted by
      </Text>
      <Container p={0}>
        <Avatar
          size="sm"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
        <Avatar
          size="sm"
          name="Ryan Florence"
          src="https://bit.ly/ryan-florence"
        />
        <Avatar size="sm" name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
        <Avatar
          size="sm"
          name="Ryan Florence"
          src="https://bit.ly/ryan-florence"
        />
      </Container>
    </VStack>
  )
}

export default TrustedBy
