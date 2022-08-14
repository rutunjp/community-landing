import { Box, Flex } from '@chakra-ui/react'
import Fact from './fact'

const Facts = () => {
  return (
    <Box
      backgroundColor={'#5271FF'}
      borderTopRadius={'1.5rem'}
      padding={'3rem'}
      alignItems={'center'}
      justifyContent={'center'}
      maxW={'60%'}
      margin={'auto'}
    >
      <Flex direction={'row'}   justify={'space-between'} align={'center'}>
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
    </Box>
  )
}
export default Facts
