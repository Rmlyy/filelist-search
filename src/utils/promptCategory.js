import inquirer from 'inquirer'
import inquirerPrompt from 'inquirer-autocomplete-prompt'
import fuzzy from 'fuzzy'

inquirer.registerPrompt('autocomplete', inquirerPrompt)

export const categories = {
  Toate: 0,
  Anime: 24,
  Audio: 11,
  Desene: 15,
  Diverse: 18,
  Docs: 16,
  'Filme 3D': 25,
  'Filme 4K': 6,
  'Filme 4K Blu-Ray': 26,
  'Filme Blu-Ray': 20,
  'Filme DVD': 2,
  'Filme DVD-RO': 3,
  'Filme HD': 4,
  'Filme HD-RO': 19,
  'Filme SD': 1,
  FLAC: 5,
  'Jocuri PC': 9,
  'Jocuri Console': 10,
  Linux: 17,
  Mobile: 22,
  Programe: 8,
  'Seriale 4K': 27,
  'Seriale HD': 21,
  'Seriale SD': 23,
  Sport: 13,
  Videoclip: 12,
  XXX: 7,
}

const categoryNames = Object.keys(categories)

export async function promptCategory() {
  const inquire = await inquirer.prompt({
    type: 'autocomplete',
    name: 'category',
    message: 'Choose your category:',
    loop: false,
    source: async (answersSoFar, input) => {
      input = input || ''
      const fuzzyResult = fuzzy.filter(input, categoryNames)
      return fuzzyResult.map((el) => el.original)
    },
  })

  return inquire.category
}

export default promptCategory
