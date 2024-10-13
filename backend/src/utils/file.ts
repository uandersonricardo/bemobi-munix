import path from 'path'
import fs from 'fs'

export const readFileFromDocs = (filename: string) => {
  const absoluteFilePath = path.join(__dirname, '..', 'docs', filename)

  try {
    const fileContent = fs.readFileSync(absoluteFilePath, 'utf8')
    return fileContent
  } catch (error) {
    console.error(`Error reading file at ${absoluteFilePath}:`, error)
    throw error
  }
}
