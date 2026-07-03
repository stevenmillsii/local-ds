import { writeFileSync, mkdirSync } from 'node:fs';
import { hfdTheme } from '../src/brands/hfd/index.js';
import { personalTheme } from '../src/brands/personal/index.js';
import { generateThemeCSS } from '../src/utils/css-gen.js';

const outDir = './dist/themes';
mkdirSync(outDir, { recursive: true });

writeFileSync(`${outDir}/hfd.css`, generateThemeCSS(hfdTheme));
writeFileSync(`${outDir}/personal.css`, generateThemeCSS(personalTheme));

console.log('Generated CSS theme files → dist/themes/{hfd,personal}.css');
