---
title: '1st Blog'
date: '2021-07-21'
---

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