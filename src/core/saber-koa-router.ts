/*
 * @Author: saber2pr
 * @Date: 2019-04-30 12:54:47
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-30 13:17:14
 */
import { Job } from '@saber2pr/koa'

export function route(path: string) {
  return <T>(route: Job<T>): Job<T> => async (ctx, next) => {
    if (ctx.request.url === path) {
      await route(ctx, next)
    } else {
      await next()
    }
  }
}
