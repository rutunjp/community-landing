import { Heading, Text, VStack, Box, Image, HStack } from '@chakra-ui/react'
import BestCommunityAward from './bestCommunityAward'
import Icons from './icons'
import Navbar from './navbar'
import TrustedBy from './trustedBy'

const Hero = () => {
  return (
    <Box>
      <Box backgroundColor="#f4f6ff" h={'70vh'}>
        <Navbar />
        <Icons />
        <VStack pt={'4rem'}>
          <Heading
            fontWeight={700}
            as={'h1'}
            size="4xl"
            color={'#002C6E'}
            fontFamily={'Sora'}
          >
            Join India’s First
          </Heading>
          <Heading
            fontWeight={700}
            as={'h1'}
            size="4xl"
            color={'#5271FF'}
            fontFamily={'Sora'}
          >
            Builders Community
          </Heading>
          <Text
            color="#022E70"
            pt={'0.5rem'}
            fontWeight={600}
            fontSize={'1rem'}
          >
            We help individuals to grow by unleashing the potential of social
            media 🚀
          </Text>
        </VStack>
      </Box>{' '}
      <VStack mt={'-11rem'}>
        <Image
          position={'relative'}
          src="./images/hero-img.svg"
          alt="hero-img"
          maxW={'40%'}
          margin={'auto'}
        />
        <HStack
          position={'relative'}
          marginX={'auto'}
          top={'-16vh'}
          color={'#022E70'}
          w={'58%'}
          justify={'space-between'}
        >
          <TrustedBy />
          <BestCommunityAward />
        </HStack>
      </VStack>
    </Box>
  )
}
export default Hero
