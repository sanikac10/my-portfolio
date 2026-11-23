// Turns the site content into plain Markdown for AI agents and crawlers.
// The same text is shown in the AI mode panel, written to /llms.txt at build time,
// and placed in a <noscript> block in index.html so scrapers that don't run JS still see it.
import { profile, publications, experiences, projects } from './content.js';

export function toMarkdown() {
  const p = profile;
  const lines = [
    `# ${p.name}`,
    '',
    `> ${p.role} · ${p.location}. ${p.summary}`,
    '',
    `Focus areas: ${p.focus.join(', ')}.`,
    '',
    '## Links',
    `- Website: ${p.links.website}`,
    `- Resume (PDF): ${p.links.website}assets/resume.pdf`,
    `- Google Scholar: ${p.links.scholar}`,
    `- GitHub: ${p.links.github}`,
    `- LinkedIn: ${p.links.linkedin}`,
    `- X: ${p.links.x}`,
    `- Email: ${p.links.email}`,
    '',
    '## Publications',
    ...publications.map((pub) => `- ${pub.title} (${pub.venue || pub.year}). ${pub.url}`),
    '',
    '## Experience',
  ];
  for (const e of experiences) {
    lines.push(`### ${e.title}`, e.subheading, ...e.bullets.map((b) => `- ${b}`), '');
  }
  lines.push('## Projects');
  for (const pr of projects) {
    lines.push(`### ${pr.title}`, pr.date, ...pr.bullets.map((b) => `- ${b}`), '');
  }
  lines.push('## Education', `- ${p.education.degree}, ${p.education.school} (${p.education.date})`, '');
  return lines.join('\n');
}
