import React from 'react'
import NextLink from 'next/link'
import { VStack, Heading, Text, Link, Image } from '@chakra-ui/react'
import { LinkIcon } from '@chakra-ui/icons'
import Layout from 'components/layout'
import { getArticleSlugs } from 'articles'

const Home = ({ articleSlugs }) => {
  return (
    <Layout>
      <VStack align='stretch' w='100%' spacing={8} shouldWrapChildren>
        <Image
          src='/header.jpeg'
          alt='Silicon Jungle'
          w='100%'
          sx={{ imageRendering: 'pixelated' }}
        />
        <Image
          src='/avatar.gif'
          alt='Silicon Jungle'
          w='96px'
          h='96px'
          sx={{ imageRendering: 'pixelated' }}
        />
        <Heading as='h1' size='2xl'>
          The Infinite Dream Machine
        </Heading>
        <Text>
          The Infinite Dream Machine is a collection of short stories that emerged from a collaboration between the author and ChatGPT-4.
The anthology invites readers to explore the intersection of dreams and reality through various narratives. Touching upon time and space, magic, and the human psyche, the stories delve into themes such as self-discovery, knowledge-seeking, and the changing nature of identity. "The Infinite Dream Machine" offers a range of thought-provoking tales that reveal the expansive scope of human imagination and the complexities of our lives.
        </Text>
        {articleSlugs.length && (
          <Heading as='h2' size='xl'>
            Stories
          </Heading>
        )}
        {articleSlugs.map((articleSlug) => (
          <NextLink href={articleSlug} passHref key={articleSlug}>
            <Link>
              {articleSlug} <LinkIcon mx='2px' />
            </Link>
          </NextLink>
        ))}
      </VStack>
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const articleSlugs = getArticleSlugs()

  return {
    props: {
      articleSlugs,
    },
  }
}

export default Home
