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
	const file = new File([ blob ], fileName, { type: mimeType })
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
	}
	catch (error) {
		console.error(error)
		throw new Error('图片转 base64 失败')
	}
}

/**
 * UNIAPP 专供：将本地图片 url 转成 base64
 * @param path 静态路径
 * @returns base64
 */
export function UNI_toBase64(path: string): Promise<string> {
	return new Promise((resolve, reject) => {
		uni.getFileSystemManager().readFile({
			filePath: path,
			encoding: 'base64',
			success: (res) => {
				const base64 = `data:image/png;base64,${res.data}`
				resolve(base64)
			},
			fail: (error) => {
				console.error(error)
				reject(new Error('图片转 base64 失败'))
			},
		})
	})
}

export default {
	UNI_toBase64,
	fileToBlob,
	blobToFile,
	toBase64,
}
