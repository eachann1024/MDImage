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

/**
 * 将本地图片 url 转成 base64
 * @param path 静态路径
 * @returns base64
 */
export async function toBase64(path: string): Promise<string> {
  try {
    const res = await fetch(path)
    const blob = await res.blob()
    const reader = new FileReader()
    return new Promise<string>((resolve, reject) => {
      reader.onloadend = () => resolve(reader.result as string)
      reader.onerror = reject
      reader.readAsDataURL(blob)
    })
  } catch (error) {
    console.error(error)
    throw new Error('图片转 base64 失败')
  }
}


export default {
  fileToBlob,
  blobToFile,
  toBase64
}
