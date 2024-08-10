# 常用工具函数
- [x] [文件保存 file-saver](https://www.npmjs.com/package/file-saver/v/2.0.5)
- [x] 图片处理：File转Blob、Blob转File、本地图片URL转base64


## 通用方法

### fileToBlob：将 File 对象转换为 Blob URL

```javascript
const blobUrl = fileToBlob(file)
// blobUrl 可以直接用于 img 标签的 src 属性
```

### blobToFile：将 Blob 对象转换回 File 对象

```javascript
const file = blobToFile(blob, 'image.png', 'image/png')
```

### toBase64：将本地图片 URL 转换为 base64 编码

```javascript
const base64 = await toBase64('/path/to/image.jpg')
```

## UNIAPP 专用方法

### UNI_toBase64：将本地图片 URL 转换为 base64 编码 (UNIAPP环境)

```javascript
// 示例用法
const base64Image = ref('')
onLoad(async () => {
  base64Image.value = await UNI_toBase64('/static/images/logo.png')
})
```
