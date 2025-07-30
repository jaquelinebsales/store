
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'store',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/store"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 900, hash: 'd9231a4af522e25251851db618c4c652896ce18ba8b020e2044bf1972eb99cfb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1025, hash: 'ba1747096261bb74fa805ab313b15977ae614bb89aaa8e7b78896cb69aac0a8c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 14018, hash: '2890bc9082932d0454aa4b3fcc757e44d151d968c3363c8bd010d4d7ab3ec6fd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7OAQXG23.css': {size: 263, hash: 'AUZPfSzSfj0', text: () => import('./assets-chunks/styles-7OAQXG23_css.mjs').then(m => m.default)}
  },
};
