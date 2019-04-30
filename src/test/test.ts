import { Koa } from '@saber2pr/koa'
import { route } from '../core/saber-koa-router'

Koa()
  .use(
    route('/')(async ctx => {
      ctx.response.end('helloworld')
    })
  )
  .use(
    route('/user')(async ctx => {
      ctx.response.end('user')
    })
  )
  .listen(3004, () => console.log('http://localhost:3004'))
