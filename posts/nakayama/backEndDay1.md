---
title: 'Backend day1'
date: '2021-08-25'
---

*go言語を触り始め、[A Tour of go](https://go-tour-jp.appspot.com/welcome/1)を軽く勉強したものの、いまいちgoの利便性、また何に使えるのかのか分からず、その理解を深めるために今回、オライリー本、(「Go言語によるWebアプリケーション」)を手に取ってみた。まずは第1章のチャットアプリから開発してみる。*

概要: Go言語の標準パッケージである、net/httpパッケージを使って、シンプルなチャットアプリを作成する。まず、webサーバーを作成する。このサーバーがhtmlをファイルをクライアントに提供し、WebSocketを利用して、メッセージのやりとりをする。

## Goの特徴

- ハイパフォーマンスかつ並行処理を得意とし、サーバー側のアプリケーションに向いている。

webサーバーには大きく分けて２つ役割がある。

1. クライアントがブラウザ上で利用するHTML、jsを提供する事。
2. クライアントとの間でwebsocketを使った通信を行う事。

そもそも、go言語を触るというより、バックエンドの勉強が本題であり、その手段でしかない。色々とバックエンドの前提の知識が乏しいので、迂回しながら開発していく。

まず、http通信の内容、

1. DNSサーバーにアクセス先のIPアドレスを尋ねる。
2. １のIPアドレスを元に、サーバーにアクセスする。
3. HTTP requestを行う。
4. HTTP respoenseがサーバーから返ってくる。

goのnet/http　パッケージを用い、webサーバーを立てるのはすごく簡単。

使うパッケージは最低２つ。

```jsx
http.HandleFunc("/", func)
```

```jsx
http.ListenAndServe(":portNum", nil)
```

順に説明すると、１つめは第一引数のパスが呼ばれた時に、第二引数のハンドラが呼ばれ、それぞれにhtttp response,http requestが引数に入り、それらの内容を処理する。

二つ目のhttp.ListenAndServe関数は指定したport番号を監視し、レスポンスがあればコンテンツを表示し、なければnilを返す。