export const ROOT_DIV_ID = 'react_root';

export default function getRootDiv() {
  let rootDiv = document.getElementById(ROOT_DIV_ID);

  if (rootDiv) {
    return rootDiv;
  }

  rootDiv = document.createElement('div');
  rootDiv.id = ROOT_DIV_ID;
  document.body.appendChild(rootDiv);

  return rootDiv;
}