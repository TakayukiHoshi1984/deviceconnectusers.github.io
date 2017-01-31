# デバイス設定 API

## デバイスの現在時刻を取得

デバイスが保持している現在時刻を取得します。

### 基本情報

APIパス
: /gotapi/settings/date

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
|date|文字列|
|version|文字列|

## デバイスの音量設定を取得

デバイスの音量を0〜1の間で取得します。100倍して%になります。

### 基本情報

APIパス
: /gotapi/settings/sound/volume

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
|kind|✓|文字列|クエリー|1（アラーム）2（通話音）3（電話着信音） 4（メール着信音） 5（メディアプレイヤーの音量） 6（その他SNS等の着信音）|

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
|level|数値|
|version|文字列|

## デバイスのボリュームを設定

デバイスの音量を0〜1で設定します。

### 基本情報

APIパス
: /gotapi/settings/sound/volume

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
|kind|✓|文字列|クエリー|1（アラーム）2（通話音）3（電話着信音） 4（メール着信音） 5（メディアプレイヤーの音量） 6（その他SNS等の着信音）|
|level|✓|文字列|クエリー|ボリューム。0〜1の間で指定します（0.5など）。|

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

## デバイスの輝度を取得

デバイスのディスプレイの輝度を取得します。0〜1の間で返ってくるので、100倍して%表記になります。

### 基本情報

APIパス
: /gotapi/settings/display/light

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
|level|数値|
|version|文字列|

## ディスプレイの輝度を設定

ディスプレイの輝度を設定します。0〜1の間で指定します（0.5など）。

### 基本情報

APIパス
: /gotapi/settings/display/light

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
|level|✓|文字列|クエリー|輝度。0〜1の間で指定します。|

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

## スクリーンセーバが開始するまでの時間を取得

デバイスのスクリーンセーバが開始するまでの時間を取得します。msで返ってきます。

### 基本情報

APIパス
: /gotapi/settings/display/sleep

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
|time|数値|
|version|文字列|

## スクリーンセーバが開始するまでの時間を設定

デバイスのスクリーンセーバが開始するまでの時間を設定します。ms単位で指定します。

### 基本情報

APIパス
: /gotapi/settings/display/sleep

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
|time|✓|文字列|クエリー|スクリーンセーバが開始するまでの時間をmsで指定|

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