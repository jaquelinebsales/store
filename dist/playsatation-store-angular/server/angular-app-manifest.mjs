
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/store/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/store"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 930, hash: '8a30e49d2dec01ce2400658587fb3373ca94e5ac9ba38f3ade997af3e837d6c3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1048, hash: 'bd5cafdb45ddd7bb466727a90326d83371583cb4f25e25fc208145e040435aa8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 14048, hash: '2b48b7fa02d87c58a20d708e4a20cf98540c40ab47ae3dc7131cf705e9793361', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7OAQXG23.css': {size: 263, hash: 'AUZPfSzSfj0', text: () => import('./assets-chunks/styles-7OAQXG23_css.mjs').then(m => m.default)}
  },
};
