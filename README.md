# @saber2pr/koa-router

> router for @saber2pr/koa.

```bash
# from npm
npm install @saber2pr/koa-router

# from github
git clone https://github.com/Saber2pr/-saber2pr-koa-router.git
```

# API

1. route(path)(async ctx

2. route.get(path)(async ctx

3. route.post(path)(async ctx

4. route.del(path)(async ctx

5. route.put(path)(async ctx

```ts
Koa()
  .use(
    route('/')(async ctx => {
      ctx.response.end('helloworld!')
    })
  )
  .use(
    route.get('/get')(async ctx => {
      ctx.response.end('get!')
    })
  )
  .use(
    route.post('/post')(async ctx => {
      ctx.response.end('post!')
    })
  )
  .use(
    route.del('/del')(async ctx => {
      ctx.response.end('del!')
    })
  )
  .use(
    route.put('/put')(async ctx => {
      ctx.response.end('put!')
    })
  )
  .listen(3004, () => console.log('http://localhost:3004'))
```

---

## start

```bash
npm install
```

```bash
npm start

npm test
```

> Author: saber2pr

---

## develope and test

> you should write ts in /src

> you should make test in /src/test

> export your core in /src/index.ts!
