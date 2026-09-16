import { cpSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const source = join(root, 'dist', 'index.html');
const projectSlugs = [
  'pink-noise',
  'neon-city',
  'lilo-character',
  'no-rules-mv',
  'motion-source-05',
  'motion-source-07',
  'motion-source-08',
];

for (const slug of projectSlugs) {
  const routeDirectory = join(root, 'dist', 'work', slug);
  mkdirSync(routeDirectory, { recursive: true });
  cpSync(source, join(routeDirectory, 'index.html'));
}
