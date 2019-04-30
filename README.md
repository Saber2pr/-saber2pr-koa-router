# @saber2pr/koa-router

> router for @saber2pr/koa.

```bash
# from npm
npm install @saber2pr/koa-router

# from github
git clone https://github.com/Saber2pr/-saber2pr-koa-router.git
```

```ts
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
