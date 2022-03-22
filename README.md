# プロジェクト名

Rese（リーズ）

## 概要

Rese グループの飲食店予約サービスです。

デモページ: https://rese-lara-nuxt.herokuapp.com

## 機能一覧

### ユーザー

-   会員登録・ログイン
    -   新規会員登録時のメール認証
-   飲食店一覧を表示
    -   ジャンル・エリア・店名で絞り込み
-   お気に入り店舗登録・削除
-   予約機能
    -   日時・人数を指定して予約
    -   予約の削除
    -   予約の変更
-   Stripe による事前決済機能
-   訪れた飲食店の評価機能

### 店舗代表者

-   店舗情報の作成・更新
-   店舗の予約確認
-   店舗画像の追加
-   予約者へのメール送信機能

### 管理者

-   上記店舗代表者の機能
-   店舗代表者の作成

## 環境

-   Docker 20.10.12
-   PHP 7.4.1
-   laravel 8.81.0
-   Nodejs 16.14.2
-   Nuxt v2.15.8
-   MySQL 8.0.28

## インストール

```
$ git clone https://github.com/yskikuchi/rese-docker-sameorigin
$ cd rese-docker-sameorigin
$ cp .env.example .env
```
envファイルに、任意のPORT、DBの情報を入力

```
WEB_PORT=
FRONT_PORT=
DB_PORT=

DB_NAME=
DB_USER=
DB_PASSWORD=
DB_ROOT_PASSWORD=
```


```
$ docker compose up -d --build
```

### 1.laravelの環境設定
```
$ docker compose exec php /bin/bash
$ composer install
$ cp .env.local.example .env
$ php artisan key:generate
```

上で設定したDB情報に基づいて、.envファイルのデータベースの情報を修正
```
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```

修正後にマイグレーション、シーディングを実行

```
$ php artisan migrate
$ php artisan db:seed
```

Stripe決済用のパブリックキー、シークレットキーを設定

```
STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=
```

Laravel Sanctum認証用のドメインを設定

```
SANCTUM_STATEFUL_DOMAINS=localhost:{$FRONT_PORTで設定した値}
```

### 2.nuxtの環境設定

```
$ docker compose exec nuxt /bin/sh
$ cp .env.local.example .env
```

```
API_URL=http://localhost:{$WEB_PORTとして設定した値}
API_BASE_URL=http://localhost:{$WEB_PORTとして設定した値}/api
NODE_ENV=development
STRIPE_PUBLIC_KEY=
```

### 3. localhostにアクセス

localhostで{WEB_PORT}、{FRONT_PORT}で設定したポート番号を使用してアクセスしてください。

