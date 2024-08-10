// uni-app.d.ts
declare const uni: {
  getFileSystemManager(): {
    readFile(options: {
      filePath: string;
      encoding: 'base64';
      success: (res: { data: string }) => void;
      fail: (error: any) => void;
    }): void;
  };
};
