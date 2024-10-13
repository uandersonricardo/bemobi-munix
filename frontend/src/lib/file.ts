export const getFileName = (originalFilePath: string) => {
  return originalFilePath.replace('docs/', '').replace('.md', '.pdf')
}

export const getStorageUrl = (originalFilePath: string) => {
  const filename = getFileName(originalFilePath)
  return `https://firebasestorage.googleapis.com/v0/b/${import.meta.env.VITE_FIREBASE_URL}/o/${filename}?alt=media`
}

export const preprocessMarkdownImages = (markdown: string) => {
  const regex = /!\[\]\(images\/([^)]+)\)/g

  const updatedMarkdown = markdown.replace(regex, (match, fileName) => {
    const newFileName = encodeURI(fileName)
    return `![](https://firebasestorage.googleapis.com/v0/b/${import.meta.env.VITE_FIREBASE_URL}/o/${newFileName}?alt=media)`
  })

  return updatedMarkdown
}
