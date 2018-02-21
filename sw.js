importScripts('./node_modules/workbox-sw/build/importScripts/workbox-sw.dev.v2.1.2.js');
const staticAssets=[
    './',
    './style.css',
    './script.js'
];

const wb = new WorkboxSW();
wb.precache(staticAssets);

wb.router.registerRoute('https://jsonplaceholder.typicode.com/(.*)', wb.strategies.networkFirst());
