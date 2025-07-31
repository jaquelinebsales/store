
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 896, hash: 'e6362e760a8cdb2825624812d521ad84d84bd6ddc108934fb61228a282e6c508', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1021, hash: '5a8ab43ca5a3641ae345aa5a5284a5bd74246cd1ecc72705869747cab7194461', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 14014, hash: '1e7ad67c9d11d06a4bb005bd5f4eb9d9df7b03fe645350c680272d538f8d77e6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7OAQXG23.css': {size: 263, hash: 'AUZPfSzSfj0', text: () => import('./assets-chunks/styles-7OAQXG23_css.mjs').then(m => m.default)}
  },
};
