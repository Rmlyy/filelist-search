import 'dotenv/config'
import search from './utils/search.js'
import promptSearch from './utils/promptSearch.js'
import promptDownload from './utils/promptDownload.js'
import downloadChoices from './utils/downloadChoices.js'
import downloadFile from './utils/downloadFile.js'
import { promptCategory, categories } from './utils/promptCategory.js'

while (true) {
  const getCategory = await promptCategory()
  const searchCategory = categories[getCategory]
  const searchQuery = await promptSearch()
  const searchRes = await search(searchQuery, searchCategory)

  if (!searchRes.length) {
    console.log('[!] Your search returned 0 results. Please try again.')
    continue
  }

  console.log(`[*] Found ${searchRes.length} result(s) in category ${getCategory} (ID: ${searchCategory}).`)

  const promptChoices = await downloadChoices(searchRes)
  const chosenItem = await promptDownload(promptChoices)
  const itemToDownload = searchRes.filter((result) => result.name === chosenItem.choice)[0]

  await downloadFile(itemToDownload.download_link)

  process.exit(0)
}
