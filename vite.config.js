// vite.config.js
import { defineConfig } from 'vite'
import { toMarkdown } from './src/data/toMarkdown.js'
import { profile } from './src/data/content.js'

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Makes the site readable by AI agents and crawlers that don't run JavaScript:
// writes /llms.txt and puts the same text plus JSON-LD into index.html.
function aiReadable() {
  return {
    name: 'ai-readable',
    transformIndexHtml(html) {
      const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: profile.name,
        jobTitle: profile.role,
        url: profile.links.website,
        email: `mailto:${profile.links.email}`,
        knowsAbout: profile.focus,
        alumniOf: 'Arizona State University',
        sameAs: [profile.links.github, profile.links.linkedin, profile.links.scholar, profile.links.x],
      }
      const head = [
        `<meta name="description" content="${escapeHtml(profile.summary)}" />`,
        `<link rel="alternate" type="text/markdown" title="llms.txt" href="llms.txt" />`,
        `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`,
      ].join('\n    ')
      return html
        .replace('</head>', `    ${head}\n  </head>`)
        .replace('<div id="root"></div>', `<div id="root"></div>\n    <noscript><pre>${escapeHtml(toMarkdown())}</pre></noscript>`)
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'llms.txt', source: toMarkdown() })
    },
  }
}

export default defineConfig({
  base: '/my-portfolio/', // if your repo is my-portfolio
  plugins: [aiReadable()],
})
