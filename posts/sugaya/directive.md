---
title: 'directive'
date: '2021-08-30'
---

# Directive
---

ディレクティブとは、Vue.jsにおいてタグに指定できる属性のことです。ディレクティブの先頭には、"v-"がついています。

---
## v-bind

v-bindは、HTMLタグの属性(id, class等)を動的に設定・変更することができるディレクティブです。なお、":"と省略することもできます。

### 使い方

基本的な使い方は、タグの中に
```html
v-bind:属性名="値"
```
のように書きます。
classやstyle属性へのバインディングの場合、
```html
v-bind:class="オブジェクト・配列"
v-bind:style="オブジェクト・配列"
```
のように書きます。

以下、例:class属性へのバインディングの場合
```html
<script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.14/vue.min.js'></script><!-- https://cdnjs.com/libraries/vue -->
<div id="app">
  <p v-bind:class="{ line: isActive }">pタグ</p> <!-- isActive=trueのとき、"pタグ"を横線で消す -->
  <button @click="isActive = !isActive">切り替え</button>
</div>
<script>
  var app = new Vue({
    el: "#app",
    data: { isActive: true },
  })
</script>
<style>
  .line { text-decoration: line-through; }
</style>
```

---
## v-on

v-onを使うことで、イベント（ユーザーによるクリック、スクロールなどの挙動）によってイベントハンドラ（イベントに対応して発動させる処理）を実行させることができます。なお、"@"と省略することができます。

### 使い方

基本的な使い方は、タグの中に
```html
v-on:イベント名="ハンドラ名"
```
のように書きます。これによって、ある要素に特定のイベントが起きたときに、ハンドラ名に書かれた処理が実行されます。

以下、例:buttonタグで使った場合
```html
<script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.14/vue.min.js'></script><!-- https://cdnjs.com/libraries/vue -->
<div id="app">
  <button v-on:click="func()">click button!</button>
  <p>{{ result }}</p><!--buttonをクリックするとresultに"click! "を後ろに連結する-->
</div>
<script>
  var app = new Vue({
    el: "#app",
    data: { result: "" },
    methods: {
      func() { this.result+="click! " }
    }
  })
</script>
```

---
## v-model

v-modelを使うことで、Vueオブジェクトのデータとフォームのデータをバインドし、一連の動作を割り当てる（同期させる？）ことができます。

### 使い方

基本的な使い方は、タグの中に
```html
v-model="変数"
```
のように書きます。

以下、例:inputに用いた場合
```html
<script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.14/vue.min.js'></script>
<div id="app">
  <input type="text" v-model="text" @keydown.enter="func()"/>
  <p>{{text}}</p><!--inputに入れた文字列をtextと双方向にバインディングさせている、enterを押すとtextに""が代入されるので、inputの文字列も消える-->
</div>
<script>
  var app=new Vue({
    el:"#app",
    data: { text:"" },
  methods: {
    func() { this.text="" },
  },
});
</script>
```

---
## v-for

v-forは、配列などの複数のデータを繰り返し表示させるときによく使うディレクティブです。

### 使いかた

基本的な使い方は、タグの中に
```
v-for="要素名 in 配列"
```
と書くことで配列の要素を列挙できます。なお、v-forには一意なkey属性を与えることが推奨されているようです。

以下、例:配列の要素を列挙する
```html
<script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.14/vue.min.js'></script>
<div id="app">
	<p> user list <p>
  <ul>
		<li v-for="user in users" v-bind:key="user.id">
			<!-- usersの要素にuserを当てて、user.nameを要素数分表示させる。keyには3桁の数字user.idを当てている -->
			{{user.name}}
		</li>
	</ul>
</div>
<script>
	var app=new Vue({
		el: "#app",
		data: {
			users: [
				{id:101, name:"Alice"},
				{id:102, name:"Bob"},
				{id:103, name:"Carol"},
			],
		}
	})
</script>
```



















































## 参考
1. https://v3.ja.vuejs.org/
2. https://fujiya228.com/categories/vuejs
3. https://noumenon-th.net/programming/javascript/
4. https://www.tohoho-web.com/ex/vuejs.html