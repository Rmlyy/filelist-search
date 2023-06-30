import axios from 'axios'
import path from 'path'
import fs from 'fs'

async function downloadFile(url) {
  try {
    const res = await axios.get(url, { responseType: 'stream' })
    const contentDispositionHeader = res.headers['content-disposition']
    const fileNameMatch = contentDispositionHeader.match(/filename="(.+)"/)

    let fileName
    if (fileNameMatch && fileNameMatch.length > 1) {
      fileName = fileNameMatch[1]
    } else {
      fileName = 'download.torrent'
    }

    const savePath = path.join(path.resolve(process.env.DOWNLOAD_DIR), fileName)
    const fileWriter = fs.createWriteStream(savePath)

    res.data.pipe(fileWriter)

    return new Promise((resolve, reject) => {
      fileWriter.on('finish', () => {
        console.log(`[*] File successfully downloaded to ${savePath}`)
        resolve()
      })

      fileWriter.on('error', (error) => {
        reject(error)
      })
    })
  } catch (e) {
    if (e.data && e.data.error) return e.data.error
    return e.data ?? e
  }
}

export default downloadFile
