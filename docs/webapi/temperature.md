# 温度 API

## デバイスから温度を取得

温度センサーの値を取得します。

### 基本情報

APIパス
: /gotapi/temperature

HTTPメソッド
: GET

### リクエスト

#### HTTPヘッダー

|ヘッダーの種類|内容|
|----------------|----------------|
|Content-Type|application/json|

#### パラメータ

|キー|必須|型|場所|説明|
|-----|-----|-----|-----|-----|
|serviceId|✓|文字列|クエリー|サービスIDを指定します|
|accessToken|✓|文字列|クエリー|取得したアクセストークン|

### レスポンス

#### HTTPレスポンス

|HTTPステータスコード|内容|
|-----|-----|
|200|HTTP経由でアクセスするファイル情報|

エラーについては [エラーについて](./error.md) を参照してください。

#### レスポンス内容

|キー|型|
|----|----|
|result|数値|
|product|文字列|
|type|数値|
|temperature|数値|
|version|文字列|