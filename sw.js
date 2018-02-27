importScripts('workbox-sw.prod.v2.1.2.js');
const staticAssets=[
    './',
    './style.css',
    './script.js'
];

const wb = new WorkboxSW();
wb.precache(staticAssets);

wb.router.registerRoute('https://jsonplaceholder.typicode.com/(.*)', wb.strategies.networkFirst());
