// vite.config.ts
import { defineConfig } from "vite";
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, './src/cli.ts'),
      name: 'yapi2ts',
      // 构建好的文件名（不包括文件后缀）
      fileName: 'yapi2ts',
    },
    rollupOptions: {
      external: [
        'yargs',
        'fs',
        'path',
        'url',
        'util', // 防止 `inspect` 报错
        'os',   // 防止可能的 `os` 模块报错
        'yargs '
      ],
    },
  }
});
