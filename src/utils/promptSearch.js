import inquirer from 'inquirer'

async function promptSearch() {
  const query = await inquirer.prompt({
    type: 'input',
    name: 'answer',
    message: 'Enter search query:',
    validate(value) {
      const valid = value.length > 0

      return valid || 'Please enter a search query.'
    },
  })

  return query.answer
}

export default promptSearch
