/**
 * gen-type.ts 文件用于生成组件类型提示代码
 * 作用：在TS项目中引入全局组件是没有类型提升的，很不友好。
 * 本功能只在 VsCode + Volar + TS 项目中适用
 */

import { resolve } from 'path'
import { readFileSync, writeFileSync, unlinkSync } from 'fs'

const indexDeclarePath = resolve('./dist/index.d.ts')

const declareFileContent = readFileSync(indexDeclarePath, { encoding: 'utf-8' })

const componentName = declareFileContent.match(/import\s(.*)\sfrom\s'.*\.vue'/)![1]

const appendContent = `declare module "vue" {
    export interface GlobalComponents {
        ${componentName}: typeof ${componentName};
    }
}
  `

// 删除文件
unlinkSync(indexDeclarePath)
writeFileSync(indexDeclarePath, `${declareFileContent}\n${appendContent}`, { encoding: 'utf-8' })
