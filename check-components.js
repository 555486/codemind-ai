const fs = require('fs');
const path = require('path');

const components = [
  'ControlPanel/ControlPanel.tsx',
  'ErrorPanel/ErrorPanel.tsx',
  'ExplanationPanel/ExplanationPanel.tsx',
  'CodeEditor/CodeEditor.tsx'
];

console.log('检查组件完整性...');
components.forEach(comp => {
  const tsxPath = path.join('frontend', 'src', 'components', comp);
  const cssPath = tsxPath.replace('.tsx', '.css');
  
  const hasTSX = fs.existsSync(tsxPath);
  const hasCSS = fs.existsSync(cssPath);
  
  console.log(`${comp}: ${hasTSX ? '✅ TSX' : '❌ TSX缺失'} | ${hasCSS ? '✅ CSS' : '❌ CSS缺失'}`);
});
