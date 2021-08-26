---
title: 'Backend day2'
date: '2021-08-26'
---

*Go言語でhttp通信をするために用いられ得る、net,httpの基本的な関数をまとめる事によって、goでのhttp通信の理解を深める。*

参考資料 → [https://journal.lampetty.net/entry/understanding-http-handler-in-go](https://journal.lampetty.net/entry/understanding-http-handler-in-go)

- http.ListenAndServe
- http.Handler
- http.HandleFUnc
- http.ServeMux
- http.ServeMux.Handle
- http.ServeMux.HandleFinc
- http.Handle

### http.ListenAndServe

サーバーを稼働するもの。

- 第一引数にTCPアドレス
- 第二引数にhttp.Handler

仮に第二引数がnillの場合DefaultServeMuxがHandlerとして指定される。

を渡す。

### http.Handler

ServeHTTP(ResponseWriter, *Request)というメソッドを定義しているinterface。

ServeHTTPメソッドはHTTPリクエストを受けてHTTPレスポンスを返す処理が記述されている。

### http.ServeMux

- 第一引数にHTTPリクエストのURL(パス)
- 第二引数にServeHTTP

第一引数のパスにアクセスされると第二引数の関数が呼ばれる。

世に出し時にはあらかじめレシーバを設定する必要がある。

### http.HandlerFunc

HandlerFunc 型にはあらかじめ、ServeHTTP(ResponseWriter, *http.Request)のシグニチャを定義しておき、HandlerFuncにキャストを行うことで、構造体を指定する事なく、http.Handlerを実装する事ができる。

### http.ServeMux.HandleFunc

ServeMuxにはHandleメソッド以外にもHandleFuncというメソッドが定義されている。

第二引数にHandlerをキャストして、自身でHandleを呼び出す実装になっているので、わざわざhttp.HandlerFuncにキャストをせずに関数を呼び出せる。

http.HandleとDefaultServeMux

httpにDefaultServeMuxというグローバル変数定義されているので、http.Handleを呼び出すので、DefaultMux.Handleが呼び出される。つまり、登録されているURLに対しハンドラを返す。

http.HandleFuncも同様に定義されている。

### http.handle

- http.Handle はコンテンツを提供する(表示する) URL と、URL に対応する http.Handler を DefaultServeMux に登録する関数。

---

## 同じパッケージ内にある他のフォルダもまとめてビルド

```jsx
go build
```

これまでで、簡単なWebサーバーを立てて、templateの内容を表示する事は出来た。次にチャットルームアプリの土台を構築していく。

- クライアントとの接続の管理やメッセージのルーティングを受け持つ　→ room型
- ある１つのクライアントへの接続を表す → client型

が登場人物として加わる。

> 他の言語でクラスを使って表現される所は、Goでは型(type)を使用する。

> WebSocketを管理するために、サードパーティである、gorilla/websocketを使用する。