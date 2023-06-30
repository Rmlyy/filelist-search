import inquirer from 'inquirer'
import convertFileSize from './convertFileSize.js'

async function downloadChoices(results) {
  const choices = results
    .map((result) => [
      new inquirer.Separator(),
      `Name: ${result.name}\n  Category: ${result.category}\n  Size: ${convertFileSize(result.size)}\n  Seeders: ${
        result.seeders
      }\n  Added Date: ${result.upload_date}`,
    ])
    .flat()

  return choices
}

export default downloadChoices
