<h1>ファイル API</h1>


<h2>ファイルの一覧を取得する</h2>


<p>デバイスのストレージにあるファイルを一覧で取得します。</p>


<h3>基本情報</h3>


<p>APIパス</p>

<p>: /gotapi/file/list</p>


<p>HTTPメソッド</p>

<p>: GET</p>


<h3>リクエスト</h3>


<h4>HTTPヘッダー</h4>


|ヘッダーの種類|内容|
|----------------|----------------|
|Content-Type|application/json|

<h4>パラメータ</h4>


|キー|必須|型|場所|説明|
|-----|-----|-----|-----|-----|
|serviceId|✓|文字列|クエリー|サービスIDを指定します|
|accessToken|✓|文字列|クエリー|取得したアクセストークン|
|path|✓|文字列|クエリー|

<h3>レスポンス</h3>


<h4>HTTPレスポンス</h4>


|HTTPステータスコード|内容|
|-----|-----|
<p>|200||</p>


<p>エラーについては <a href="./error.md">エラーについて</a> を参照してください。</p>



<h4>レスポンス内容</h4>


|キー||型|
|-----|-----|-----|
|result||数値|
|product||文字列|
|files||配列|
||items|
|version||文字列|

<h2>ファイルを削除する</h2>


<p>デバイスのストレージにあるファイルを削除します。</p>


<h3>基本情報</h3>


<p>APIパス</p>

<p>: /gotapi/file/remove</p>


<p>HTTPメソッド</p>

<p>: DELETE</p>


<h3>リクエスト</h3>


<h4>HTTPヘッダー</h4>


|ヘッダーの種類|内容|
|----------------|----------------|
|Content-Type|application/json|

<h4>パラメータ</h4>


|キー|必須|型|場所|説明|
|-----|-----|-----|-----|-----|
|serviceId|✓|文字列|クエリー|サービスIDを指定します|
|accessToken|✓|文字列|クエリー|取得したアクセストークン|
|path|✓|文字列|クエリー|ファイルのパス|

<h3>レスポンス</h3>


<h4>HTTPレスポンス</h4>


|HTTPステータスコード|内容|
|-----|-----|
|200|ファイルを削除した後のレスポンス|

<p>エラーについては <a href="./error.md">エラーについて</a> を参照してください。</p>



<h4>レスポンス内容</h4>


|キー|型|
|-----|-----|
|result|数値|
|product|文字列|
|version|文字列|

<h2>ファイルを取得する</h2>


<p>デバイスのストレージにあるファイルを取得します。</p>


<h3>基本情報</h3>


<p>APIパス</p>

<p>: /gotapi/file/receive</p>


<p>HTTPメソッド</p>

<p>: GET</p>


<h3>リクエスト</h3>


<h4>HTTPヘッダー</h4>


|ヘッダーの種類|内容|
|----------------|----------------|
|Content-Type|application/json|

<h4>パラメータ</h4>


|キー|必須|型|場所|説明|
|-----|-----|-----|-----|-----|
|serviceId|✓|文字列|クエリー|サービスIDを指定します|
|accessToken|✓|文字列|クエリー|取得したアクセストークン|
|path|✓|文字列|クエリー|ファイルのパス|

<h3>レスポンス</h3>


<h4>HTTPレスポンス</h4>


|HTTPステータスコード|内容|
|-----|-----|
|200|HTTP経由でアクセスするファイル情報|

<p>エラーについては <a href="./error.md">エラーについて</a> を参照してください。</p>



<h4>レスポンス内容</h4>


|キー|型|
|-----|-----|
|mimeType|文字列|
|result|数値|
|product|文字列|
|uri|文字列|
|version|文字列|