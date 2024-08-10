import * as FileSaver from 'file-saver';
export * from './useImage';

// 导出 file-saver 的方法
export const { saveAs } = FileSaver;

// 创建一个默认导出,包含所有方法
import * as useImage from './useImage';

export default {
  ...FileSaver,
  ...useImage
};
