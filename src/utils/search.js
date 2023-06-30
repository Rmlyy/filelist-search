import axios from 'axios'

async function search(query) {
  const reqURL = `https://filelist.io/api.php?username=${process.env.USERNAME}&passkey=${process.env.PASSKEY}&action=search-torrents&query=${query}&type=name`

  try {
    const res = (await axios.get(reqURL)).data
    return res
  } catch (e) {
    if (e.data && e.data.error) return e.data.error
    return e.data ?? e
  }
}

export default search
