/// <reference path="node_modules/@types/node/index.d.ts" />

import * as fs from 'fs';
import * as path from 'path';
import dom from './dom';


function getAbsolutePath(type: keyof dom, name: string) {
  return path.join(__dirname, 'dist', getRelativePath(type), `${name}.d.ts`);
}

function getRelativePath(type: keyof dom) {
  if (type === 'elements') {
    return ''
  } else {
    return type;
  }
}

Object.entries(dom.elements).forEach(([elementName, element]) => {
  let result = '';

  // fs.writeFileSync(getAbsolutePath('elements', elementName), result);
  
});