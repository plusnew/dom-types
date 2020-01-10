/// <reference path="node_modules/@types/node/index.d.ts" />

import * as fs from 'fs';
import * as path from 'path';
import dom, { element } from './dom';

function unique(arr: string[]) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}

function getAbsolutePath(type: keyof dom, name: string) {
  return path.join(__dirname, 'dist', getRelativePath('elements', type), `${name}.d.ts`);
}

function generateTypeString(types: string[]) {
  return types.join(' | ');
}

function getRelativePath(from: keyof dom, to: keyof dom) {
  if (from === 'elements') {
    if (to === 'elements') {
      return '';
    } else {
      return `${to}`
    }
  } else {
    return `../${to}`;
  }
}

function generateImport(from: keyof dom, to: keyof dom, importName: string) {
  return `import { ${importName} } from './${getRelativePath(from, to)}/${importName}';`;
}

function formatElement(element: string) {
  return element.replace(/-[a-z]/g, find => find[1].toUpperCase());
}

function elementFactory(factoryType: 'elements' | 'abstract') {
  return ([elementName, element]: [string, element]) => {
    let parentImport = element.inherits.map(inherit => generateImport(factoryType, 'abstract', `${inherit}Element`));
  
    const typeImports = unique(Object.entries(element.properties).reduce((accumolator, [_propertyName, property]) => {
      return [...accumolator, ...property.types.filter((type) =>
        Object.keys(dom.types).includes(type)
      ).map((type) =>
        generateImport(factoryType, 'types', `${type}`),
      )];
    }, [] as string[]));
  
    const properties = Object.entries(element.properties).filter(([_propertyName, property]) =>
      property.deprecated === false
    ).map(([propertyName, property]) => {
      let typedPropertyName = propertyName;
      if (property.required === false) {
        typedPropertyName += '?';
      }
  
      return `${typedPropertyName}: ${generateTypeString(property.types)}${property.required ? '' : ' | null'};`;
    });

    let genericInformation = '';
    if (factoryType === 'abstract') {
      genericInformation = '<currentElement>'
    }

let result =`${parentImport}`;
if (typeImports.length > 0) {
  result += `\n${typeImports.join('\n')}`;
}

result +=`\ntype ${formatElement(elementName)}Element${genericInformation} = ${element.inherits.reduce((previousValue, inherit) => `${previousValue}${inherit}Element<${element.domInterface}>`, '')}`;


if (properties.length > 0) {
  result += ` & {\n  ${properties.join('\n  ')}\n};`;
} else {
  result += ';';
}

result += `\n\nexport { ${formatElement(elementName)}Element };
`;
    fs.writeFileSync(getAbsolutePath(factoryType, `${formatElement(elementName)}Element`), result);
  }
}
Object.entries(dom.elements).forEach(elementFactory('elements'));

Object.entries(dom.types).forEach(([typeName, types]) => {
  const result = `export type ${typeName} = ${generateTypeString(types)};\n`;

  fs.writeFileSync(getAbsolutePath('types', `${typeName}`), result);
});

Object.entries(dom.abstract).forEach(elementFactory('abstract'));

let jsxImport = Object.keys(dom.elements).map((elementName) =>
  generateImport('elements', 'elements', `${formatElement(elementName)}Element`)
).join('\n');

jsxImport += 
`declare global {
  namespace plusnew {
    namespace JSX {
      ${Object.keys(dom.elements).map((elementName) => `${elementName}: ${formatElement(elementName)}Element;`).join('\n')}
    }
  }
}`;

fs.writeFileSync(path.join(__dirname, 'dist', 'jsx', 'jsx.d.ts'), jsxImport);
