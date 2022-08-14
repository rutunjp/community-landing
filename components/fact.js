import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'

const Fact = (props) => {
  return (
    <HStack color={'#fff'} align={'center'}>
      <Image src={`${props.path}`} alt="icon" maxWidth={'3rem'}/>
      <Flex direction={'column'} justify={'flex-start'} gap={0} align={'start'}>
        <Heading fontFamily={'Sora'} fontSize={'3xl'} fontWeight={800}>
          {`${props.stat}`}+
        </Heading>
        <Heading
          as={'h6'}
          size="xs"
          marginTop={0}
          className="statDescription"
          fontFamily={'Inter'}
          fontWeight={300}
        >{`${props.statDescription}`}</Heading>
      </Flex>
    </HStack>
  )
}
export default Fact
