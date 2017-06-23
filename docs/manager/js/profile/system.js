/**
 system.js
 Copyright (c) 2014 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Search profile.
 *
 * @param {String} serviceId サービスID
 * @param {String} deviceName デバイス名
 */
function searchSystem(serviceId, deviceName) {
  if (deviceName !== undefined) {
    // 第2引数が空でない場合、代入を行う。
    myDeviceName = deviceName;
  }

  if (DEBUG) {
    console.log(myDeviceName);
  }
  initAll();

  var builder = new dConnect.URIBuilder();
  builder.setProfile('serviceinformation');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();

  if (DEBUG) {
    console.log('Uri:' + uri);
  }

  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response:', json);
    }

    if (json.result === 0) {
      var str = '';
      for (var i = 0; i < json.supports.length; i++) {
        str += '<li><a href="javascript:searchProfile(\'' + serviceId + '\', ';
        str += '\'' + json.supports[i] + '\');" ';
        if (json.supports[i] == 'authorization' ||
            json.supports[i] == 'servicediscovery' ||
            json.supports[i] == 'system') {
          str += ' class="ui-disabled" ';
        }
        str += 'value="' + json.supports[i] + '">';
        str += json.supports[i] + '</a></li>';
      }

      setTitle('Profile List');
      reloadList(str);
    } else {
      var errorCode = json.errorCode;
      var errorMessage = json.errorMessage;
      if (DEBUG) {
        console.log('Error: ' + errorCode + ': ' + errorMessage);
      }
      showError('serviceinformation', json);
    }
  }, function(errorCode, errorMessage) {
    showError('GET /serviceinformation', errorCode, errorMessage);
  });
}

/**
 * デバイスプラグインの確認をする。
 */
function checkDevicePlugins() {
  initAll();
  closeLoading();
  showLoading();

  dConnect.getSystemInfo(accessToken, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
    closeLoading();

    var str = '';
    for (var i = 0; i < json.plugins.length; i++) {
      str += '<li><a href="javascript:launchDevicePlugin(\'' +
              json.plugins[i].id + '\');" value="' +
              json.plugins[i].name + '" >' +
              json.plugins[i].name + '<br> <span style="font-size:12px; margin-left:12px;"> Version: ' + json.plugins[i].version +  '</span></a></li>';
    }

    var listHtml = document.getElementById('listSetting');
    listHtml.innerHTML = str;
    $('ul.listSetting').listview('refresh');
  }, function(errorCode, errorMessage) {
    closeLoading();
    if (errorCode == 12 || errorCode == 13 || errorCode == 15) {
      showLoading('Awaiting Your Approval...');
      authorization(function() {
        checkDevicePlugins();
      }, function() {
        closeLoading();
        location.hash = 'demo';
      });
    } else {
      alert('Failed to get system info.');
    }
  });
}

/**
 * デバイスプラグインの設定画面を起動する。
 * @param {String} pluginId プラグインのID
 */
function launchDevicePlugin(pluginId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('system');
  builder.setInterface('device');
  builder.setAttribute('wakeup');
  builder.addParameter('pluginId', pluginId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();

  if (DEBUG) {
    console.log('Uri:', uri);
  }

  dConnect.put(uri, null, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }
  }, function(errorCode, errorMessage) {
    alert('Failed to show the settings window.');
  });
}
