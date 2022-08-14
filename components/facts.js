import { Box, Flex, Image } from '@chakra-ui/react'
import Fact from './fact'

const Facts = () => {
  return (
    <Box
      backgroundColor={'#5271FF'}
      borderTopRadius={'1.5rem'}
      //  padding={'10px'}
      alignItems={'center'}
      justifyContent={'center'}
      maxW={'60%'}
      margin={'auto'}
    >
      <Image
        src="./images/topThumbs.svg"
        alt="topThumbs"
        zIndex={3}
        position={'relative'}
        // top={'-10px'}
        margin={'auto'}
      />
      <Flex
        direction={'row'}
        justify={'space-between'}
        align={'center'}
        marginX={'4rem'}
      >
        <Fact
          path={'./images/communityIcon.svg'}
          stat="40,000"
          statDescription="Community Members"
        />
        <Fact
          path={'./images/discordSessions.svg'}
          stat="300"
          statDescription="Discord Sessions"
        />
        <Fact
          path={'./images/sideprojectsDone.svg'}
          stat="1000"
          statDescription="Side Projects Done"
        />
      </Flex>
      <Image
        src="./images/bottomThumbs.svg"
        alt="bottomThumbs"
        zIndex={3}
        position={'relative'}
        maxW={'80%'}
        // bottom={'-10px'}
        margin={'auto'}
      />
    </Box>
  )
}
export default Facts
