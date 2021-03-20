# 本プロジェクトについて
nodejsアプリ開発勉強用

# 環境構築

npmパッケージのインストール

```
$ docker-compose run node npm install
```

dbの初期化
```
# mysqlだけ起動
$ docker-compose up -d mysql
# Attach Shellでmysqlコンテナの中に入る
# mysqlに入る (passwordはdocker-composeに書いてある)
$ mysql -u root -p
# db, テーブル作成
mysql> source db/sql/create.sql 
# 初期データ挿入
mysql> source db/sql/seed.sql
# 確認
mysql> use sample;
mysql> select * from users;
```

# 起動
```
docker-compose up -d
```