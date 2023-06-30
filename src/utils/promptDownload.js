import inquirer from 'inquirer'

async function promptDownload(choices) {
  const prompt = await inquirer.prompt({
    type: 'list',
    name: 'choice',
    message: 'Select the item that you want to download:',
    loop: false,
    choices,
    filter(val) {
      return (val.match(/Name: (.+)/) || [])[1]
    },
  })

  return prompt
}

export default promptDownload
