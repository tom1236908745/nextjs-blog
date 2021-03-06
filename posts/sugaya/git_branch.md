---
title: "git branch"
date: "2021-08-30"
---

# git branch
---

git branchは、ブランチを作成したり、ブランチの一覧を表示するなどの機能を持ったコマンドです。ブランチを複数作成することで、変更を加えたくないブランチでミスが起きにくくなるほか、複数の事柄を同時に進められるといった利点があります。

## 使いかた
---

- ブランチを作成する場合
    ```
    $ git branch "ブランチ名"
    ```
    "ブランチ名"ブランチが作成される

- ブランチを削除する場合
    ```
    $ git branch -d "ブランチ名"
    ```
    で"ブランチ名"ブランチを削除することができます。

- ブランチの名前を変更する場合
    ```
    $ git branch -m "ブランチ名"
    ```
    で現在のブランチの名前を"ブランチ名"に変更します。

- ブランチを一覧表示する場合
    ```
    git branch
    ```
    で存在するブランチが一覧で表示され、、今いるブランチに"*"がつきます。

