import { defineConfig } from '@farmfe/core'
import farmPostcssPlugin from '@farmfe/js-plugin-postcss'
import solid from 'vite-plugin-solid'

export default defineConfig({
  vitePlugins: [
    () => ({
      vitePlugin: solid(),
      // 为其配置过滤器。 不匹配的模块路径将被跳过
      filters: ['\\.tsx$', '\\.jsx$'],
    }),
  ],
  server: {
    open: true,
    port: 3000,
    hmr: true,
  },
  plugins: [farmPostcssPlugin()],
})
