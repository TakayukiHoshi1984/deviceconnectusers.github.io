# 電話 API

## 電話をかける

電話をかけます。電話番号は数字のみで指定する必要があります。

### 基本情報

APIパス
: /gotapi/phone/call

HTTPメソッド
: POST

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
|phoneNumber|✓|文字列|クエリー|電話番号。数字のみで指定します。11桁は国内電話、13桁は国際電話として扱います|

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
|version|文字列|

## 通話ステータス変更イベントを設定

デバイスに対して行った通話のステータスが変わった際に受け取るイベントを設定します。登録した後のイベントはWebSocketにきますので、[電話API](/websocket/phone) を参照してください。

### 基本情報

APIパス
: /gotapi/phone/onconnect

HTTPメソッド
: PUT

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
|sessionKey|✓|文字列|クエリー|WebSocketで受け取るための一意のキー|

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
|version|文字列|

## 通話ステータスの変更イベントを削除

通話ステータスが変わった時のイベント設定を削除します。

### 基本情報

APIパス
: /gotapi/phone/onconnect

HTTPメソッド
: DELETE

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
|sessionKey|✓|文字列|クエリー|WebSocketで受け取るための一意のキー|

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
|version|文字列|

## 受電設定の変更

サウンドやバイブレーションなど、受電した際の設定を変更します。

### 基本情報

APIパス
: /gotapi/phone/set

HTTPメソッド
: PUT

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
|mode|✓|文字列|クエリー|設定。0（サイレント）1（マナー）2（音あり）。|

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
|version|文字列|