const browserSync = require('browser-sync')

const servePath = process.env.SERVE_PATH || 'public'

const port = process.env.PORT || '8080'

browserSync({
  server: [ servePath ],
  port: parseInt(port)
  /*
  proxy: {
    target: "localhost:1337",
    ws: true
  }*/
})
