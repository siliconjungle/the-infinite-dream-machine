import React from 'react'
import { VStack, Image } from '@chakra-ui/react'
import Layout from 'components/layout'
import Markdown from 'components/markdown'
import { getArticleBySlug, getArticleSlugs } from 'articles'

const Article = ({ article }) => {
  return (
    <Layout>
      <VStack align='stretch' w='100%' spacing={8}>
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
        <Markdown>{article || ''}</Markdown>
      </VStack>
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const article = getArticleBySlug(params.slug)
  if (!article) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      article,
    },
  }
}

export const getStaticPaths = async () => {
  const articleSlugs = getArticleSlugs()

  return {
    paths: articleSlugs.map((slug) => {
      return {
        params: {
          slug,
        },
      }
    }),
    fallback: false,
  }
}

export default Article
