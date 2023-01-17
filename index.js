import { writeFile, copyFile, mkdir } from 'node:fs/promises'
import path from 'node:path'

import { Liquid } from 'liquidjs'

const prefix = 'assets/npm'

const engine = new Liquid({
  extname: '.liquid',
})

const theme = "docsify/themes/vue.css"

const assets = [
  "docsify/lib/docsify.min.js",
  "docsify/lib/plugins/search.min.js",
  "prismjs/components/prism-json.min.js",
  "prismjs/components/prism-go.min.js",
  "prismjs/components/prism-lua.min.js",
  "prismjs/components/prism-bash.min.js",
  "mermaid/dist/mermaid.min.js",
  "mermaid/dist/mermaid.min.js.map",
]

function addPrefix(i) {
  return `${prefix}/${i}`
}

const ctx = {
  theme: addPrefix(theme),
  assets: assets.map(i => addPrefix(i))
}

async function main () {
  [theme, ...assets].map(async asset => {
    await mkdir(path.parse(addPrefix(asset)).dir, { recursive: true })
    await copyFile(`./node_modules/${asset}`, addPrefix(asset))
  })

  const html = await engine.renderFile('index', ctx)
  await writeFile("index.html", html)
}

await main()
