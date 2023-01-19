import { writeFile, copyFile, mkdir, cp } from 'node:fs/promises'
import path from 'node:path'

import { Liquid } from 'liquidjs'

const prefix = 'assets/npm'
const outDir = 'public'

const engine = new Liquid({
  extname: '.liquid',
})

const assets = [
  "docsify/lib/docsify.min.js",
  "docsify/lib/plugins/search.min.js",
  "prismjs/components/prism-json.min.js",
  "prismjs/components/prism-go.min.js",
  "prismjs/components/prism-lua.min.js",
  "prismjs/components/prism-bash.min.js",
  "mermaid/dist/mermaid.min.js",
  "docsify-mermaid/dist/docsify-mermaid.js",
]

function addPrefix(i) {
  return `${prefix}/${i}`
}

const ctx = {
  assets: assets.map(i => addPrefix(i))
}

async function main () {
  await mkdir(outDir, { recursive: true })

  await cp('assets', path.join(outDir, 'assets'), { recursive: true })

  await cp('docs', outDir, { recursive: true })
  await cp('README.md', path.join(outDir, 'home.md'))
  //await cp(path.join('gosd', 'docs'), path.join(outDir, 'gosd'), { recursive: true })

  // CDN node_modules
  assets.map(async asset => {
    await mkdir(path.parse(path.join(outDir, addPrefix(asset))).dir, { recursive: true })
    await copyFile(`./node_modules/${asset}`, path.join(outDir, addPrefix(asset)))
  })

  const html = await engine.renderFile('index', ctx)
  await writeFile(path.join(outDir, 'index.html'), html)
}

await main()
