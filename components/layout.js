import React from 'react'
import { Container } from '@chakra-ui/react'
import Header from 'components/header'
import Footer from 'components/footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container
        as='main'
        maxW='container.md'
        centerContent
        pt='1.5em'
        pb='1.5em'
      >
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout
