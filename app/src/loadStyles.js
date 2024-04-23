import './index.css';

export default function loadStyles() {
  const MATERIAL_ICONS_ID = 'material_icons';
  
  if (!document.getElementById(MATERIAL_ICONS_ID)) {
    const [head] = document.getElementsByTagName('head');
    const link = document.createElement('link');
    link.id = MATERIAL_ICONS_ID;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100';
    link.media = 'all';
    head.appendChild(link);
  }
}