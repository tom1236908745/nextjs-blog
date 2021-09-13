---
title: 'Vue.js'
date: '2021-08-26'
---

# Vue.js

Vue.jsとは、Javascriptフレームワークの一つです。リアクティブやコンポーネントなどの機能を持っています。Vue.jsのほかに、ReactやjQueryなどがあります。フレームワークとは、開発でよく使う一般的な機能などをライブラリとして予め用意したものです。


## Vue instance

Vueインスタンスを作成することによって、Vueアプリケーションを起動することができます。Vueインスタンスを作成するには、Vue関数を使う必要があります。
例：
```JavaScript
var vm=new Vue({
    //オプション
})
```

---
## データとメソッド

Vueインスタンスが作成されると、自身の`data`オブジェクトのすべてのプロパティをリアクティブシステム(内容の変化を検知して、自動的に再計算してくれるシステム)に追加します。これらのプロパティの値を変更すると、新しい値に一致するように更新します。
なお、`data`オブジェクトがリアクティブになるのは、インスタンスが作成されたときに存在していた場合のみです。インスタンスが作成された後に新しいプロパティを追加しても、更新されることはありません。リアクティブである必要があるなら、先に空の初期値を設定しておけばよいです。
例：
```JavaScript
car data={a:1, c:''}

var vm=new Vue({
    data: data
})
// vm.a==data.aはtrue

vm.a=2//このとき、data.a==2もtrue
data.a=3//このとき、vm.a==3もtrue
vm.b='hi'//このとき、data.b=='hi'はfalse
vm.c='hi'//このとき、data.c=='hi'はtrue
```

---
## ライフサイクル

Vue.jsには、Vueインスタンスが生成されてから破棄されるまでの特定の段階で実行される関数があります。そのような関数をライフサイクルフックと呼びます。ライフサイクルフックのうち、よく使うものにcreated, mounted, beforeDestroyがあるようです。なお、すべてのライフサイクルフック内では、`this`がVueインスタンスを指しています。

### 使いかた

ライフサイクルフックは関数なので、以下のように書きます。
```JavaScript
new Vue({
  //他のオブジェクトとか
  ライフサイクルフックの関数名() {
    //その関数が実行されるタイミングで行いたい処理
  }
})
```

---
### created

まず、Vueインスタンス生成後にリアクティブデータ(data)などの初期化処理が行われます。それが終わったタイミングで実行される関数が`created`です。主な役割に、マウントに必要なデータの取得や設定(例えばAPIから取得したデータを表示するとき)があるようです。

---
### mounted

初期化処理が終わった後、既存のDOM(htmlの制御に使う)要素にVueインスタンスを与え、マウント(既存のDOM要素をVue.jsが生成するDOM要素で置き換えること)します。その後に実行される関数がmountedです。初期表示時点でDOM要素を直接操作する場合に使うようです。なお、マウントされる範囲は`el`プロパティで指定したidセレクタ(HTMLタグ内のid=""の"")の範囲になります。

---
### beforeDestroy

ページ遷移をする際、そのページのインスタンスは破棄されます。破棄される直前に実行される関数がbeforeDestroyです。これは、インスタンスは木の前にクリアしなければいけない処理がある場合に使用するようです。

---
## API

Vue.jsは、`el`や`data`などのAPIを提供しています。APIとは、Application Programming Interfaceの略で、アプリケーションやソフトウェアを構築したり、統合したりする(つなげる)ツールやプロトコルです。

---
### el

Vue.jsが提供するAPIの一つに、`el`プロパティがあります。このプロパティの値にidセレクタ(HTMLタグ内のid=""の"")を入れると、idセレクタの範囲内のDOM要素にVueインスタンスを与え、既存のDOM要素をVue.jsが生成したDOM要素に置き換えます。こうすることで、Vue.jsを使って動的なWebアプリケーションを作ることができるようになります。

---
### data

Vue.jsが提供するAPIの一つに、`data`プロパティがあります。これに入れたオブジェクトに変更が加えられると、変更後のオブジェクトがHTMLに反映されます。なお、コンポーネント中で使用する際は、関数にする必要があります。

---

### computed

computedは、Vueインスタンスに組み込まれる算出プロパティで、計算結果をキャッシュ(保存)する他、依存するデータに変更がない限り(2度目の呼び出しからは)キャッシュを返します。
```JavaScript
new Vue({
  //他の処理等
  computed: {
    プロパティ名: function() {
      //処理
    }
  }
});
```

### methods

methodsは、Vueインスタンスに組み込まれるメソッドです。計算結果をキャッシュしない他、呼び出されるたびに計算を行います。Vueインスタンスに自動的に束縛された`this`コンテキストを持ちます。(C++のsort関数と書き方が似ているけど、違いってなんだ)
```JavaScript
new Vue({
  //他の処理等
  methods: {
    メソッド名: function() {
      //処理
    }
  }
})
```

# Directive

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
5. https://re-engines.com/2017/07/07/vue-js%E5%85%A5%E9%96%80%E3%81%9D%E3%81%AE%EF%BC%92%E3%80%9Cvue%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9%E3%80%9C/
6. https://qiita.com/KWS_0901/items/5105677462f69f197ad2
7. https://b1tblog.com/2019/10/18/vue-lifecycle/
8. https://johobase.com/vue-js-create-instance-mount-v2/#Vue-3