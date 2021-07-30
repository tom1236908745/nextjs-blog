---
title: 'v-for or map'
date: '2021-07-29'
---

# Vue, Reactでそれぞれ配列を回すときの違い。
---

*配列、オブジェクトを回す時、Vueではv-forを使うのに対し、Reactではmapやforeach (reduce, for)などを使う。もちろん、Vueでもmapなどを使うことはできる。*

まず、Vueから

## 1. basic

---

- Vueには便利なタグ内にDOM操作を行うためのディレクティブというものが存在する。 ( v-bind, v-on, v-model などなど。) その中で、v-forという物が存在する。これは、配列、オブジェクト内の要素をいじるためのディレクティブ。

- temlate内のタグ要素内で、<div v-for="任意の変数 in 配列の変数>xxx</div>形。(他、ディレクティブと同じ様にdivでなくても良い。)

- 任意の変数はscriptの中で宣言するは必要ないが、配列の変数はscriptであらかじめ宣言する必要がある。

```jsx
<template>
	<div id="app">
		<div v-for="item in items">
			{{ item }}
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			items: ['apple', 'banana', 'meron'],
		};
}
})
</script>
			
```

出力

↓

apple

banana

meron

※簡単にVueプロジェクとを触れる、codesandboxという、sandboxオススメです！

↓

[https://codesandbox.io/](https://codesandbox.io/)

## 2. 第二引数あり !!

---

```jsx
<template>
  <div id="app">
    <ul>
      <p v-for="(value, key) in items" :key="value">
        {{ key }} is {{ value }}
      </p>
    </ul>
  </div>
</template>

<script>
	// (略)
</script>
```

先程のitemと同じく、任意の第二引数を指定して良い。

keyはインデックスの値で１から呼び出し順にインクリメントされる。

↓

1 is apple

2 is banana

3 is meron

( itemsが配列ではなく、オブジェクトだった場合。)

---

```jsx
<script>

export default {
  name: "App",
  data(){
    return {
      items: { message1: 'Hello', message2: 'World' }
    }
  },
};
</script>
```

値 == 第一引数

プロパティ名 == 第二引数 に対応する。

出力

↓

message1 is Hello

message2 is World 

## 3.  第三引数

---

```jsx
<template>
  <div id="app">
    <ul>
      <p v-for="(value, key, index) in items" :key="value">
        {{index}}: {{ value }} is {{ key }}
      </p>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      items: { message1: 'Hoge', message2: 'Foo' }
    }
  },
};
</script>
```

こちらも第三引数の値は任意で可。

第三引数にはオブジェクトのインデックスが入る。

出力

↓

0: Hoge is message1

1: Foo is message2

React で同じ事をてみると、、、(jsx記法)

*出力は同じなので、省略しています。*

## 1

```jsx
import React from 'react'

const App = () => {
  const items = ['message1', 'message2'];
    return(
        <>
          <ul>
            {items.map(item => <div>{item}</div>
              )}
          </ul>
        </>
    )
}

export default App;
```

## 2

配列 ver

（mapも同じく第二引数にインデックスが入るが、0からスタート)

```jsx
import React from 'react'

const App = () => {
  const items = ['Hello', 'World'];
    return(
        <>
          <ul>
            {items.map((item,index) => <div>{index + 1} is {item}</div>
              )}
          </ul>
        </>
    )
}

export default App;
```

 

オブジェクト ver　

```jsx
import React from 'react'

const App = () => {
  let items = {message1: 'Hello', message2: 'World'};
    return(
        <>
          <ul>
            {Object.keys(items).map(key => (
              <div key={key}>
                {key} is {items[key]}
                </div>
            ))}
          </ul>
        </>
    )
}

export default App;
```

## 3

```jsx
import React from 'react'

const App = () => {
  let items = {message1: 'Hello', message2: 'World'};
    return(
        <>
          <ul>
            {Object.keys(items).map((key,index) => (
              <div key={key}>
                {index}: {key} is {items[key]}
                </div>
            ))}
          </ul>
        </>
    )
}

export default App;
```

## **感想**

---

### Vue

pros

- V-forに入る引数の順番さえ覚えればこっちのもの。

 cond

- ディレクティブの書き方を抑えるまで、覚える要素が多いので、vueの書き方に慣れるまでとっつきづらい。

### React

pros

- jsの関数を自在に使えるので、Reduceなどを組み合わせて、汎用性が高い。

cons

- Vueのv-forに比べると、色々書かないといけなくて、、、