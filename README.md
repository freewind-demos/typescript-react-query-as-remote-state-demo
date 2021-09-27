TypeScript "react-query" as Remote State Demo
=================================

react-query除了可以包装从远程取数据，它内部还对数据进行了缓存，以及数据改变时自动触发所有使用了该数据的component重新render

所以可以将它包装成一个hook，当作remote state看待

```
npm install
npm run demo
```

It will open page on browser automatically.
