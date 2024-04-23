// eslint-disable-next-line import/no-webpack-loader-syntax
import indexCss from '!!css-loader?{"sourceMap":false,"exportType":"string"}!./index.css';

const MATERIAL_ICONS_ID = 'material_icons';

export default function loadStyles(rootDiv) {
  let link = document.getElementById(MATERIAL_ICONS_ID);

  if (!link) {
    const [head] = document.getElementsByTagName('head');
    link = document.createElement('link');
    link.id = MATERIAL_ICONS_ID;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100';
    link.media = 'all';
    head.appendChild(link);
  }

  // TODO: polyfill for compatibility
  const stylesheet = new CSSStyleSheet();
  stylesheet.replaceSync(indexCss);
  document.adoptedStyleSheets = [stylesheet];
  
  if (rootDiv) {
    const linkClone = link.cloneNode();
    rootDiv.appendChild(linkClone);
    rootDiv.adoptedStyleSheets = [stylesheet];
  }
}