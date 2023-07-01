import axios from 'axios'

async function search(query, category) {
  if (category === 0) category = ''

  const reqURL = `https://filelist.io/api.php?username=${process.env.USERNAME}&passkey=${process.env.PASSKEY}&action=search-torrents&category=${category}&query=${query}&type=name`

  try {
    const res = (await axios.get(reqURL)).data
    return res
  } catch (e) {
    if (e.data && e.data.error) return e.data.error
    return e.data ?? e
  }
}

export default search
