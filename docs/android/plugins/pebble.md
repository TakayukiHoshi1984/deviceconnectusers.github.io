# Pebble

電子ペーパーを使った防水スマートウォッチのPebbleをDeviceConnectから操作します。

## 必要なもの

- **Pebble**  
現在は初代のPebbleが良いようです。iOSではPebble Timeも若干動きましたが、AndroidではURLスキーマが異なるためか動きませんでした。
- **DeviceConnect Manager**  
ビルドしてインストール、または[Google Playからダウンロード](https://play.google.com/store/apps/details?id=org.deviceconnect.android.manager&hl=ja)します。
- **Pebble (Device Connect Plug-in)**  
2つの方法があります。  
    - 自分でビルド。[プラグインのビルド](/android/plugin/)を参考に、 [DeviceConnect-Android/dConnectDevicePlugin/dConnectDevicePebble](https://github.com/DeviceConnect/DeviceConnect-Android/tree/master/dConnectDevicePlugin/dConnectDevicePebble)をビルド、インストールしてください。
    - ダウンロード。[dConnectDevicePebble.apk](http://deviceconnectusers.github.io/manager/apk/dConnectDevicePebble.apk)をダウンロード&インストールしてください（野良なのでご注意ください）。
- **Pebbleアプリ**  
古いバージョンのものをGoogle Playよりインストールします。[Pebble OLD VERSION - Google Play の Android アプリ](https://play.google.com/store/apps/details?id=com.getpebble.android&hl=ja)
- **DeviceConnect用Pebbleアプリ**  
2つの方法があります。  
    - 自分でビルド。このドキュメントの下にある **専用Pebbleアプリのビルド** を参考にビルドするか、
    - ダウンロード。[dc_pebble.pbw](https://github.com/DeviceConnect/DeviceConnect-Android/raw/master/dConnectDevicePlugin/dConnectDevicePebble/app/src/main/res/raw/dc_pebble.pbw) をAndroidでダウンロードしてください。ダウンロードしたファイルを実行すると、Pebbleアプリで開くので、そのままインストールします。

![](/images/android/pebble-app.png)

## PebbleとAndroidの接続

ここは省略します。Bluetooth接続できている状態になっていてください。

これで準備は完了です。

## DeviceConnect Managerの起動

DeviceConnect Managerアプリを起動したら、[DeviceConnectのデモ管理画面](http://deviceconnectusers.github.io/manager/) にアクセスします。

細かい使い方は[デモサイトの使い方](../../demosite) を参考にしてください。

## Pebbleプラグインのサポートしている機能

Pebbleプラグインでは以下の機能がサポートされています。

- [vibration](/webapi/vibration)
- [notification](/webapi/notification)
- servicediscovery
- settings
- canvas
- system
- [serviceinformation](/webapi/serviceinformation)
- [keyevent](/webapi/keyevent)
- [deviceorientation](/webapi/deviceorientation)
- authorization
- [battery](/webapi/battery)

## 参考情報

### DeviceConnect用Pebbleアプリのビルド

### SDKのダウンロード

[SDK // Pebble Developers](https://developer.pebble.com/sdk/)からダウンロードもできますが、Mac OSXであればHomebrewを使ってインストールできます。

```
$ brew install pebble/pebble-sdk/pebble-sdk
```

[Windows用](https://developer.pebble.com/sdk/install/windows/)、 [Linux用](https://developer.pebble.com/sdk/install/linux/) のインストールはそれぞれ参照してください。

### アプリのビルド

まずリポジトリをクローンします。

```
$ git clone https://github.com/DeviceConnect/DeviceConnect-Common.git
```

ディレクトリを移動してビルドします。

```
$ cd DeviceConnect-Common/dConnectDevicePebbleApp
$ pebble build
```

最初にSDKをダウンロードします。

```
  :
-------------------------------------------------------
APLITE APP MEMORY USAGE
Total size of resources:        4092 bytes / 128KB
Total footprint in RAM:         9127 bytes / 24KB
Free RAM available (heap):      15449 bytes
------------------------------------------------------- 
[58/58] aplite | dConnectDevicePebbleApp.pbw: build/basalt/pebble-app.bin build/basalt/app_resources.pbpack build/aplite/pebble-app.bin build/aplite/app_resources.pbpack -> build/dConnectDevicePebbleApp.pbw
Waf: Leaving directory `/Volumes/SD/Dropbox/DevRel/NTTDocomo/DeviceConnect-Common/dConnectDevicePebbleApp/build'
'build' finished successfully (0.474s)
```

と出ればビルド成功です。 `build` ディレクトリに `dConnectDevicePebbleApp.pbw` ができあがっているはずです。


できあがったファイルをDeviceConnect-AndroidのPebbleプラグインの中にコピーします。またはadbやHTTPを使ってAndroidにコピー&実行します。

```
$ cp build/dConnectDevicePebbleApp.pbw ../../DeviceConnect-Android/dConnectDevicePlugin/dConnectDevicePebble/app/src/main/res/raw/dc_pebble.pbw 
```