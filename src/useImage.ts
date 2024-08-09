/**
 * file转blob
 * @param file   {File} 文件
 * @returns blob {Blob} blob
 */
export function fileToBlob(file: File): string {
  return window.URL.createObjectURL(file)
}

/**
 * blob转file
 * @param blob       {Blob}   blob
 * @param fileName   {String} 文件名
 * @param mimeType   {String} 文件类型
 * @returns file     {File}   文件
 */
export function blobToFile(blob: Blob, fileName: string, mimeType: string): File {
  const file = new File([blob], fileName, { type: mimeType })
  return file
}
