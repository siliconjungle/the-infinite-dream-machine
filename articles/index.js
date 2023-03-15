import fs from 'fs'
import path from 'path'

const order = {
  'the-infinite-dream-machine': 0,
  'the-time-travel-café': 1,
  'the-labyrinth-of-echos': 2,
  'shadows-of-latent-space': 3,
  'celestial-rhythms': 4,
  'the-magicians-observatory': 5,
  'the-alchemists-bargain': 6,
  'the-sculptors-dream': 7,
  'the-endless-bookshelf': 8,
  'river-of-ephemera': 9,
  'the-garden-of-shifting-identities': 10,
}

export const getFilesInFolder = (folder) => {
  return fs.readdirSync(folder)
}

export const loadFile = (filename) => {
  return fs.readFileSync(filename, 'utf8')
}

export const getArticleSlugs = () => {
  const articlesFolder = path.relative(process.cwd(), './articles/md')
  return getFilesInFolder(articlesFolder)
    .map((filename) => {
      return filename.replace('.md', '')
    })
    .sort((a, b) => order[a] - order[b])
}

export const getArticleBySlug = (slug) => {
  return loadFile(path.relative(process.cwd(), `./articles/md/${slug}.md`))
}
