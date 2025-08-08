import type { NextApiRequest, NextApiResponse } from 'next'
import JSZip from 'jszip'
import { getZionDesignMap, buildTokenSet, buildUIKit, UIKitKind } from '../../../utils/design-map'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const kit = (req.query.kit as string) || 'tailwind'
    const kind = (['tailwind','chakra','react'].includes(kit) ? kit : 'tailwind') as UIKitKind
    const zip = new JSZip()

    const map = getZionDesignMap()
    const tokens = await buildTokenSet()

    // Core files
    zip.file('map.json', JSON.stringify(map, null, 2))
    zip.file('tokens.json', JSON.stringify(tokens, null, 2))

    // UIKit folder
    const uikit = buildUIKit(kind)
    const uiFolder = zip.folder('uikit')!
    Object.entries(uikit).forEach(([path, content]) => uiFolder.file(path, content))

    // README
    zip.file('README.md', `# Zion OS Design Export\n\n- kit: ${kind}\n- Import tokens via Token Studio in Figma.\n- Components included under /uikit.`)

    const buffer = await zip.generateAsync({ type: 'nodebuffer' })
    res.setHeader('Content-Type', 'application/zip')
    res.setHeader('Content-Disposition', `attachment; filename=zion-design-${kind}.zip`)
    res.status(200).send(buffer)
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Export failed' })
  }
}