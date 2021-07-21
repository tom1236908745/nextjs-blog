---
title: 'Base of Firebase'
date: '2021-07-21'
---

# Firebase vol1
---
*Firebaseの基礎的な知識*


- サインイン

メールアドレスとパスワードを使ったサインインの実装

```jsx

// input なり何なりで、それぞれ、メールとパスワードの値を取得する。

let email = document.getElementById('input-email').value;
let password = document.getElementById('input-password').value;

firebase.auth().signInWithEmailAndPassword(email, password)
.then(user => {
	// ログイン成功
	// ページを遷移する、ユーザーの情報を取得して処理を行う。などなど、、
	// user.uid をユーザーIDとして使用する。
})
.catch(err => {
	// エラー処理
})
```

- サインアウト

```jsx
 firebase.auth().signOut()
.then( ()=> {
	// ログイン画面に戻るなどなど
})
.catch(err => {
	// エラーを表示する等
})
```

- 現在サインインしているかどうかを判定する。

    サインインしていない外部ユーザーがサービスを支える状態だと、認証の意味がない。

    ```jsx
    firebase.auth().onAuthStateChanged((user) => {
    	if (!user) {
    		// サインしていない状態
    		// サインイン画面に遷移する等
    		// 例:
    		location.href = '/signin.html';
    	}else {
    		// サイン済み
    	}
    });
    ```

    ```jsx

    ```