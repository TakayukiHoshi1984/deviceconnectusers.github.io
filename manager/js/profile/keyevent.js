/**
 keyevent.js
 Copyright (c) 2015 NTT DOCOMO,INC.
 Released under the MIT license
 http://opensource.org/licenses/mit-license.php
 */

/**
 * Key Event
 */
function showKeyEvent(serviceId) {
  initAll();
  setTitle('Key Event Profile(Event)');

  var sessionKey = currentClientId;
  var btnStr = getBackButton('Device Top', 'doKeyEventBack', serviceId,
                 sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<li><a href="javascript:showOnDown(\'' + serviceId +
            '\');" >Show Key(onDown)</a></li>';
  str += '<li><a href="javascript:showOnUp(\'' + serviceId +
            '\');" >Show Key(onUp)</a></li>';
  str += '<li><a href="javascript:showOnKeyChange(\'' + serviceId +
            '\');" >Show Key(onKeyChange)</a></li>';
  str += '<li><a href="javascript:showDownEvent(\'' + serviceId +
            '\');" >Key Event(onDown)</a></li>';
  str += '<li><a href="javascript:showUpEvent(\'' + serviceId +
            '\');" >Key Event(onUp)</a></li>';
  str += '<li><a href="javascript:showKeyChangeEvent(\'' + serviceId +
            '\');" >Key Event(onKeyChange)</a></li>';
  reloadList(str);
}

/**
 * Show OnKeyChange
 *
 * @param {String}serviceId サービスID
 */
function showOnKeyChange(serviceId) {
  initAll();
  setTitle('Show Key Change');

  var sessionKey = currentClientId;

  var btnStr = getBackButton('KeyEvent Top', 'doKeyBack', serviceId, sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<form name="onkeychangeForm">';
  str += 'KeyChange<br>';
  str += '<input type="button" name="getButton" id="getButton" value="Get"' +
           ' onclick="doGetOnKeyChange(\'' + serviceId + '\');"/>';
  str += '<input type="text" id="state" width="100%">';
  str += '<input type="text" id="idDU" width="100%">';
  str += '<input type="text" id="configDU" width="100%">';
  str += '</form>';
  reloadContent(str);
}

/**
 * Get OnKeyChange
 *
 * @param {String}serviceId サービスID
 */
function doGetOnKeyChange(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyevent');
  builder.setAttribute('onkeychange');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
    $('#idDU').val('');
    $('#configDU').val('');
    $('#state').val('');
    if (json.keyevent) {
      $('#state').val('State :' + json.keyevent.state);
      $('#idDU').val('KeyID: ' + json.keyevent.id);
      $('#configDU').val('config: ' + json.keyevent.config);
    }
  }, function(errorCode, errorMessage) {
    showError('GET onkeychange', errorCode, errorMessage);
  });
}

/**
 * Show Key Change Event
 *
 * @param {String}serviceId サービスID
 */
function showKeyChangeEvent(serviceId) {
  initAll();
  setTitle('Key Change Event');

  var sessionKey = currentClientId;

  var btnStr = getBackButton('KeyEvent Top', 'doKeyChangeEventBack', serviceId,
                 sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<form name="keyChangeForm">';
  str += 'KeyChange<br>';
  str += '<input type="text" id="state" width="100%">';
  str += '<input type="text" id="idD" width="100%">';
  str += '<input type="text" id="configD" width="100%">';
  str += '</form>';
  reloadContent(str);

  doKeyChangeRegister(serviceId, sessionKey);
  dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});
}




/**
 * Show OnDown
 *
 * @param {String}serviceId サービスID
 */
function showOnDown(serviceId) {
  initAll();
  setTitle('Show Down');

  var sessionKey = currentClientId;

  var btnStr = getBackButton('KeyEvent Top', 'doKeyBack', serviceId, sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<form name="ondownForm">';
  str += 'Down<br>';
  str += '<input type="button" name="getButton" id="getButton" value="Get"' +
           ' onclick="doGetOnDown(\'' + serviceId + '\');"/>';
  str += '<input type="text" id="idD" width="100%">';
  str += '<input type="text" id="configD" width="100%">';
  str += '</form>';
  reloadContent(str);
}

/**
 * Get OnDown
 *
 * @param {String}serviceId サービスID
 */
function doGetOnDown(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyevent');
  builder.setAttribute('ondown');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();
    $('#idD').val('');
    $('#configD').val('');

    if (json.keyevent) {
      $('#idD').val('KeyID: ' + json.keyevent.id);
      $('#configD').val('config: ' + json.keyevent.config);
    }
  }, function(errorCode, errorMessage) {
    showError('GET ondown', errorCode, errorMessage);
  });
}

/**
 * Show Down Event
 *
 * @param {String}serviceId サービスID
 */
function showDownEvent(serviceId) {
  initAll();
  setTitle('Down Event');

  var sessionKey = currentClientId;

  var btnStr = getBackButton('KeyEvent Top', 'doDownEventBack', serviceId,
                 sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<form name="downForm">';
  str += 'Down<br>';
  str += '<input type="text" id="idD" width="100%">';
  str += '<input type="text" id="configD" width="100%">';
  str += '</form>';
  reloadContent(str);

  doDownRegister(serviceId, sessionKey);
  dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});
}

/**
 * Show OnUp
 *
 * @param {String}serviceId サービスID
 */
function showOnUp(serviceId) {
  initAll();
  setTitle('Show Up');

  var sessionKey = currentClientId;

  var btnStr = getBackButton('KeyEvent Top', 'doKeyBack', serviceId, sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<form name="onupForm">';
  str += 'Up<br>';
  str += '<input type="button" name="getButton" id="getButton" value="Get"' +
           ' onclick="doGetOnUp(\'' + serviceId + '\');"/>';
  str += '<input type="text" id="idU" width="100%">';
  str += '<input type="text" id="configU" width="100%">';
  str += '</form>';
  reloadContent(str);
}

/**
 * Get OnUp
 *
 * @param {String}serviceId サービスID
 */
function doGetOnUp(serviceId) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyevent');
  builder.setAttribute('onup');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  dConnect.get(uri, null, function(json) {
    if (DEBUG) {
      console.log('Response: ', json);
    }

    closeLoading();

    $('#idU').val('');
    $('#configU').val('');

    if (json.keyevent) {
      $('#idU').val('KeyID: ' + json.keyevent.id);
      $('#configU').val('config: ' + json.keyevent.config);
    }
  }, function(errorCode, errorMessage) {
    showError('GET ondown', errorCode, errorMessage);
  });
}

/**
 * Show Up Event
 *
 * @param {String}serviceId サービスID
 */
function showUpEvent(serviceId) {
  initAll();
  setTitle('Up Event');

  var sessionKey = currentClientId;

  var btnStr = getBackButton('KeyEvent Top', 'doUpEventBack', serviceId,
                 sessionKey);
  reloadHeader(btnStr);
  reloadFooter(btnStr);

  var str = '';
  str += '<form name="upForm">';
  str += 'Up<br>';
  str += '<input type="text" id="idU" width="100%">';
  str += '<input type="text" id="configU" width="100%">';
  str += '</form>';
  reloadContent(str);

  doUpRegister(serviceId, sessionKey);
  dConnect.connectWebSocket(sessionKey, function(errorCode, errorMessage) {});
}

/**
 * Backボタン
 *
 * serviceId サービスID
 * sessionKey セッションKEY
 */
function doKeyEventBack(serviceId, sessionKey) {
  searchSystem(serviceId);
}

/**
 * Backボタン
 *
 * serviceId サービスID
 * sessionKey セッションKEY
 */
function doKeyBack(serviceId, sessionKey) {
  showKeyEvent(serviceId);
}

/**
 * Backボタン
 *
 * serviceId サービスID
 * sessionKey セッションKEY
 */
function doDownEventBack(serviceId, sessionKey) {
  doDownUnregister(serviceId, sessionKey);
  showKeyEvent(serviceId);
}

/**
 * Backボタン
 *
 * serviceId サービスID
 * sessionKey セッションKEY
 */
function doUpEventBack(serviceId, sessionKey) {
  doUpUnregister(serviceId, sessionKey);
  showKeyEvent(serviceId);
}
/**
 * Backボタン
 *
 * serviceId サービスID
 * sessionKey セッションKEY
 */
function doKeyChangeEventBack(serviceId, sessionKey) {
  doKeyChangeUnregister(serviceId, sessionKey);
  showKeyEvent(serviceId);
}
/**
 * Key Change Event Register.
 */
function doKeyChangeRegister(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyevent');
  builder.setAttribute('onkeychange');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  dConnect.addEventListener(uri, function(message) {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message)
    }

    var json = JSON.parse(message);
    if (json.keyevent) {
      $('#state').val('State: ' + json.keyevent.state);
      $('#idD').val('KeyID: ' + json.keyevent.id);
      $('#configD').val('config: ' + json.keyevent.config);
    }
  }, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}
/**
 * Down Event Register.
 */
function doDownRegister(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyevent');
  builder.setAttribute('ondown');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  dConnect.addEventListener(uri, function(message) {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message)
    }

    var json = JSON.parse(message);
    if (json.keyevent) {
      $('#idD').val('KeyID: ' + json.keyevent.id);
      $('#configD').val('config: ' + json.keyevent.config);
    }
  }, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}

/**
 * Up Event Register.
 */
function doUpRegister(serviceId, sessionKey) {
  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyevent');
  builder.setAttribute('onup');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri: ' + uri);
  }

  dConnect.addEventListener(uri, function(message) {
    // イベントメッセージが送られてくる
    if (DEBUG) {
      console.log('Event-Message:' + message);
    }

    var json = JSON.parse(message);
    if (json.keyevent) {
      $('#idU').val('KeyID: ' + json.keyevent.id);
      $('#configU').val('config: ' + json.keyevent.config);
    }
  }, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}

/**
 * Key Change Event Unregist
 */
function doKeyChangeUnregister(serviceId, sessionKey) {

  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyevent');
  builder.setAttribute('onkeychange');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri : ' + uri);
  }

  dConnect.removeEventListener(uri, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}
/**
 * Down Event Unregist
 */
function doDownUnregister(serviceId, sessionKey) {

  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyevent');
  builder.setAttribute('ondown');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri : ' + uri);
  }

  dConnect.removeEventListener(uri, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}

/**
 * Up Event Unregist
 */
function doUpUnregister(serviceId, sessionKey) {

  var builder = new dConnect.URIBuilder();
  builder.setProfile('keyevent');
  builder.setAttribute('onup');
  builder.setServiceId(serviceId);
  builder.setAccessToken(accessToken);
  var uri = builder.build();
  if (DEBUG) {
    console.log('Uri : ' + uri);
  }

  dConnect.removeEventListener(uri, null, function(errorCode, errorMessage) {
    alert(errorMessage);
  });
}
