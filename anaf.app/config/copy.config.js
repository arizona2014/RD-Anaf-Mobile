module.exports = {
    include: [
      {
          src: '{{SRC}}/assets/',
          dest: '{{WWW}}/assets/'
      },
      {
          src: '{{SRC}}/index.html',
          dest: '{{WWW}}/index.html'
      },
      {
          src: '{{SRC}}/manifest.json',
          dest: '{{WWW}}/manifest.json'
      },
      {
          src: '{{SRC}}/service-worker.js',
          dest: '{{WWW}}/service-worker.js'
      },
      {
          src: 'node_modules/ionic-angular/polyfills/polyfills.js',
          dest: '{{BUILD}}/polyfills.js'
      },
      {
          src: 'node_modules/ionicons/dist/fonts/',
          dest: '{{WWW}}/fonts/'
      },
      {
          src: 'node_modules/ionic-angular/fonts/',
          dest: '{{WWW}}/fonts/'
      }
    ]
};