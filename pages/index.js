import { ChakraProvider, Heading } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Facts from '../components/facts'

export default function Home() {
  return (
    <ChakraProvider>
      <Hero />
      <Facts />
    </ChakraProvider>
  )
}
