---
title: '8クイーン問題'
date: '2021-07-25'
---

# 8クイーンズ問題
---
*普段はフロントの内容を主に投稿しているが、講義の内容もネタになる事に気がつき、8クイーンズ問題を自分なりにまとめてみた。*

## 〜前提〜♟️

- クイーンとはチェスのクイーンであり、攻撃範囲はクイーンのある、行、列、斜め。
- ヒューリスティック探索: ゲームやパズルなどの難問の解法に良く見られる。この様な効率的に解く解法が存在しない場合は、試行錯誤を繰り返すしか無い。そこで用いられる手段の一つがバックトラック法。総当たりをせずに、ある時点で、無駄だと判断し、巻き戻る事。(ロールバックみたいな！?）。この手段に基づいた、解法をヒューリスティック探索という。
- 8クイーンズ問題: ８×８のチェス盤にお互いの攻撃対象が被らない様に８つのクイーンを置く。という問題。

## 戦略(アルゴリズ)


一般的な試行錯誤の方法

1. ん？一から置いていったら良いんじゃね？　→  8*8 C 8 = 4,426,165,368通り。
2. もっと言うと、同じ、行にクイーンを置かないから → 8^8
3. だったらさらに、同じ行、同じ列に置かないと、→ 8!

ーーー

この様な、組み合わせで、順に調べていくよりさらに、効率的な手法がある！！！

### → ヒューリスティック探索(バックトラッキング)

1. まず、任意の場所にクイーンを置く。
2. 次に、１で置いたクイーンの攻撃に当たらない場所に置く。
3. 。。。
4. 各クイーンが他のどのクイーンからの攻撃を受けないi行にクイーンを置く。次に同じ手順で（i+1）行にクイーンを置く。

    *重要！！*ここで、もしその行にクイーンを置く場所がなかったら、i行に戻り、もう一度”攻撃されないマスを探す処理”を行う。

    (↑バックトラック)

    つまり、これ以上、今までの配置の仕方で置いていっても無駄だから、クイーンを８個置くために配置の方法を改め、前の段階に戻し、他の配置で試そうという事。

### ※この様に、可能性のある状態を順番に試す事により、地道ではあるが総当たりで考えるよりはベターだよねのやり方が8クイーンズ問題の解法で用いられる***ヒューリステック***探索。

チェスと言えば、Netflixで配信されている"クイーンズ・キャビネット"早く観たい。

余談はさておき、

### 実装

---

### *準備*
---
使用される変数達

 (マス（i, j）が他のクイーンによって攻撃されているか、記録するため、配列変数が用いられる。)

1. `row[N]`: row[x]がNOT_FREEでは無かったら、行xは攻撃されている。
2. `col[N]`: col[x]がNOT_FREEで無かったら、列xは攻撃されている。
3. `dpos[2N-1]`: dropsがNOT_FREEで無かったら、左下方向の列xは攻撃されている。
4. `dneg[2N-1]`: dropsがNOT_FREEで無かったら、右下方向の列xは攻撃されている。

### *疑似コード*
---
```疑似コード
def PutQueen(row):
 for col = 0 to n
	if column[col] = available and leftDiag[row+col] =
  available and rightDiag[row-col+n-1] = available:
		positionInRow[row] = col
		column[col] = not available
		leftDiag[row+col] = not available
		rightDiag[row-col+n-1] = not available
		if row < n-1:
			PutQueen (row+1)
		else:
			print "solution found"
		column[col] = available
		leftDiag[row+col] = available
		rightDiag[row-col+n-1]= available
```