import path from 'path'
import morgan from 'morgan'

import Express from 'express'

export default () => {
  const app = new Express()

  app.use(morgan('dev'))
  app.set('view engine', 'ejs')
  app.use('/assets', Express.static(path.join(__dirname, 'public')))

  app.get('/*', (req, res, next) => {
    res.render('main/index', {
      pageTitle: 'SPA ecommerce on vannila js',
    })
  })

  return app
}
