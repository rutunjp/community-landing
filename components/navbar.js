const { HStack } = require('@chakra-ui/react')
import { FaDiscord } from 'react-icons/fa'
import { Button, Flex, Image, Link, textDecoration } from '@chakra-ui/react'
const Navbar = () => {
  return (
    <Flex
      position={'relative'}
      align={'center'}
      pt={'35px'}
      margin={'auto'}
      justify={'space-between'}
      maxW={'1100px'}
    >
      <Image
        src="./images/markItUpLogo.svg"
        alt="logo"
        maxW={'180px'}
        maxH={'36px'}
      ></Image>
      <Flex
        justify={'space-around'}
        w={'350px'}
        fontSize={'14px'}
        fontFamily={'Inter'}
      >
        <Link
          color={'#002C6E'}
          className="navLink"
          _hover={{
            color: '#5271FF',

            textDecoration: 'none',
            opacity: 1,
          }}
        >
          Home
        </Link>
        <Link
          color={'#002C6E'}
          className="navLink"
          _hover={{ color: '#5271FF', textDecoration: 'none', opacity: 1 }}
        >
          Services
        </Link>
        <Link
          color={'#002C6E'}
          className="navLink"
          _hover={{ color: '#5271FF', textDecoration: 'none', opacity: 1 }}
        >
          About
        </Link>
        <Link
          color={'#002C6E'}
          className="navLink"
          _hover={{ color: '#5271FF', textDecoration: 'none', opacity: 1 }}
        >
          Contact
        </Link>
      </Flex>
      <Button
        className="cta-btn"
        background={'#5271FF'}
        color="white"
        fontWeight={600}
        fontFamily={'Sora'}
        fontSize={'16px'}
        padding={'18px'}
        paddingX={'30px'}
        _hover={{ background: '#567CFF' }}
      >
        Join us on &nbsp; <FaDiscord /> &nbsp;Discord
      </Button>
    </Flex>
  )
}
export default Navbar
