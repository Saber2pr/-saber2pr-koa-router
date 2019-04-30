import { Koa } from '@saber2pr/koa'
import { route } from '../core/saber-koa-router'

Koa({ test: 'test' })
  .use(
    route('/')(async (ctx, next) => {
      ctx.response.end('helloworld')
      console.log(1)
      await next()
      console.log(10)
    })
  )
  .use(
    route.get('/get')(async (ctx, next) => {
      ctx.response.end('get user')
      console.log(2)
      await next()
      console.log(9)
    })
  )
  .use(
    route.post('/post')(async (ctx, next) => {
      ctx.response.end('post user')
      console.log(3)
      await next()
      console.log(8)
    })
  )
  .use(
    route.del('/del')(async (ctx, next) => {
      ctx.response.end('del user')
      console.log(4)
      await next()
      console.log(7)
    })
  )
  .use(
    route.put('/put')(async (ctx, next) => {
      ctx.response.end('put user')
      console.log(5)
      await next()
      console.log(6)
    })
  )
  .listen(3004, () => console.log('http://localhost:3004'))
