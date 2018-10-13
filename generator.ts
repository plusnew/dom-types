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

function generateImport(type: keyof dom, importName: string) {
  return `import { ${importName} } from ./${getRelativePath(type)}/${importName}.d.ts`;
}

Object.entries(dom.elements).forEach(([elementName, element]) => {
  let parentImport = element.inherits.map(inherit => generateImport('abstract', inherit));

  const typeImports = Object.entries(element.properties).reduce((accumolator, [_propertyName, property]) => {
    return [...accumolator, ...property.types.filter((type) =>
      Object.keys(dom.types).includes(type)
    ).map((type) =>
      generateImport('types', type),
    )];
  }, [] as string[]);

  const properties = Object.entries(element.properties).filter(([_propertyName, property]) =>
    property.deprecated === false
  ).map(([propertyName, property]) => {
    let typedPropertyName = propertyName;
    if (property.required === false) {
      typedPropertyName += '?';
    }

    return `${typedPropertyName}: ${property.types.join(' ')}`;
  });

const result = `
${parentImport}
${typeImports.join('\n')}

type ${elementName} = {
  ${properties.join('\n  ')}
} ${element.inherits.reduce((previousValue, inherit) => `${previousValue}& ${inherit}`, '')};

export { ${elementName} };
`;

  console.log(result);
  // fs.writeFileSync(getAbsolutePath('elements', elementName), result);
});