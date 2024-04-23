export const SHADOW_ROOT_DIV_ID = 'shadow_root';

export default function getRoots() {
  let shadowRootDiv = document.getElementById(SHADOW_ROOT_DIV_ID);

  if (!shadowRootDiv) {
    shadowRootDiv = document.createElement('div');
    shadowRootDiv.id = SHADOW_ROOT_DIV_ID;
    document.body.appendChild(shadowRootDiv);

    const rootDiv = shadowRootDiv.attachShadow({ mode: 'open' });
    return rootDiv;
  }
}