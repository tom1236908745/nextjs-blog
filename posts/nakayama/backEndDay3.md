---
title: 'Backend day3'
date: '2021-08-27'
---

*今更だが、[こちらに](https://github.com/tom1236908745/go-chat) githubのリポジトリを公開しているので、ヒストリーなどを参考にしながら順をおってブログを読み進めていく事をお勧めする。また、本記事から、振り返った時に今何をしていて、何が足りなかったかをすぐわかる様に対応する、オライリー本の章の番号を記していく。*

### 1.3

flagというパッケージを使って指定したポート番号でサイトを起動できるファイルをビルドする様にする。

使った、メソッドとして、

flag.String

flag.Parse

また、起動しているポート番号をターミナルに表示するために

log.Printlnという関数を初めて使った。

また、templateに関しての操作を記述していたメソッド関数にあるt(*templateHandler型)

```go
type templateHandler struct {
	once sync.Once
	filename string
	templ *tempalte.Template
}
```

のt.templ.Execute()の第二引数にr(*http.Request型)を指定し、テンプレート内で現在指定しているポート番号を動的に変更する様にした。

---

### 1.4

手動で一個一個確かめて、デバッグをするのはエンジニアらしく無いという、プライドと意地により、ログ情報を元にデバッグしていく事にする。　

TDD(test driven development)テスト駆動開発のやり方で、ログ記録をパッケージ化する。パッケージ化する事で、再利用や機能追加、共有、さらにはオープンソース化が見込めるため。

### 1.4.1

> go言語は先頭の先頭文字が大文字なら、Exportするという意味になる。

作成する、パッケージのコンセプト

- 利用しやすいパッケージである事。
- ユニットテストによってパッケージの機能を検証できる事。
- ログを記録するコードをユーザー独自のものに置き換える事ができる事。

## テストあるある

1. テストのためのファイルの末尾は_test.goになる。
2. 名前がTestで始まって、*testing.T型の引数を１つを受け取る関数は全てユニットテストとみなされる。