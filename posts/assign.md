---
title: '1st Blog'
date: '2021-07-21'
---
<!-- 
Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
 -->
# Object.assign
---
*基礎中の基礎で便利やけど、存在を忘れる時があるので、first commitは君で！;)*

⇒ オブジェクトをマージする

```jsx
const target = { a: 1, b: 2}
const source = { c: 3, d: 4}

const returnedTarget = Object.assign(target, source);

console.log(target)
console.log(source)
console.log(returnedTarget)
```

結果

```jsx
{ a: 1, b: 2, c: 3, d: 4 }
{ c: 3, d: 4 }
{ a: 1, b: 2, c: 3, d: 4 }
```

解説

⇒ Object.assignの第一引数のオブジェクトに第二引数をマージする。被っているプロパティがある場合、第一引数を優先する。