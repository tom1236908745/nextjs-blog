---
title: 'webGL (Three.js)'
date: '2021-07-25'
---
*three*.jsをreactに導入するやり方、応用方法を描いていこうと思う

このリンクを参考にしていく
- [https://ics.media/tutorial-three/quickstart/](https://ics.media/tutorial-three/quickstart/)
- [https://codesandbox.io/s/fervent-thompson-z1huy?file=/src/components/nyumon/sample1/sample1.tsx:5321-6103](https://codesandbox.io/s/fervent-thompson-z1huy?file=/src/components/nyumon/sample1/sample1.tsx:5321-6103)
を参考にしていく

まず、一つ目のリンクをさらっと確認すると、Three.jsはレンダリングをするにあたり、いくつかの要素があるのが確認できる。

1. レンダラー
2. シーン
3. カメラ
4. オブジェクト
5. オブジェクトの操作
6. レンダリング

そして、これらの要素をhtmlのタグにidを指定して、そこに埋め込んでいる。これを、reactでも同じ事をすればできる。