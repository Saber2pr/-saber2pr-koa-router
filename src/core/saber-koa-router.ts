/*
 * @Author: saber2pr
 * @Date: 2019-04-30 12:54:47
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-30 13:17:14
 */
import { Job } from '@saber2pr/koa'

export type Rule = (requestUrl: string, path: string) => boolean

export function route(
  path: string,
  rule: Rule = (requestUrl, path) => requestUrl === path
) {
  return <T>(job: Job<T>): Job<T> => async (ctx, next) => {
    if (rule(ctx.request.url, path)) {
      await job(ctx, next)
    } else {
      await next()
    }
  }
}

export function method(type: 'GET' | 'POST' | 'PUT' | 'DELETE') {
  return <T>(job: Job<T>): Job<T> => async (ctx, next) => {
    if (ctx.request.method === type) {
      await job(ctx, next)
    } else {
      await next()
    }
  }
}

const MATCH: Record<'GET' | 'POST' | 'DEL' | 'PUT', Rule> = {
  DEL: (req, path) => req.split('?')[0] === path,
  GET: (req, path) => req.split('?')[0] === path,
  POST: (req, path) => req.split('?')[0] === path,
  PUT: (req, path) => req.split('?')[0] === path
}

export namespace route {
  export function get(path: string, rule: Rule = MATCH.GET) {
    return <T>(job: Job<T>): Job<T> => route(path, rule)(method('GET')(job))
  }
  export function post(path: string, rule: Rule = MATCH.POST) {
    return <T>(job: Job<T>): Job<T> => route(path, rule)(method('POST')(job))
  }
  export function del(path: string, rule: Rule = MATCH.DEL) {
    return <T>(job: Job<T>): Job<T> => route(path, rule)(method('DELETE')(job))
  }
  export function put(path: string, rule: Rule = MATCH.PUT) {
    return <T>(job: Job<T>): Job<T> => route(path, rule)(method('PUT')(job))
  }
}
