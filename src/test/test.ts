import { Koa } from '@saber2pr/koa'
import { router } from '../core/saber-koa-router'

Koa()
  .use(
    router('/')(async ctx => {
      ctx.response.end('helloworld')
    })
  )
  .use(
    router('/user')(async ctx => {
      ctx.response.end('user')
    })
  )
  .listen(3004, () => console.log('http://localhost:3004'))
