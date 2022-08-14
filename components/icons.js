import { HStack, Image, VStack } from '@chakra-ui/react'

const Icons = () => {
  return (
    <VStack position={'absolute'} width={'100%'} zIndex={2}>
      <HStack
        width={'80%'}
        position={'relative'}
        top={'4rem'}
        justify={'space-between'}
      >
        <Image src="./images/starsLeft.svg" alt="stars left" />
        <Image src="./images/starsRight.svg" alt="stars right" />
      </HStack>
      <HStack
        width={'65%'}
        position={'relative'}
        top={'15rem'}
        justify={'space-between'}
      >
        <Image src="./images/rocket.svg" maxW={'100px'} alt="rocket" />
        <Image src="./images/dollar.svg" maxW={'100px'} alt="dollar" />
      </HStack>
    </VStack>
  )
}
export default Icons
