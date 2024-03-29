var sa = {},
  _ = {},
  is_first_launch = !1,
  mpshow_time = null;
(sa.para = {}), (sa.para.max_string_length =
  sa.para.max_string_length ||
  200), (sa._queue = []), (sa.getSystemInfoComplete = !1);
var ArrayProto = Array.prototype,
  FuncProto = Function.prototype,
  ObjProto = Object.prototype,
  slice = ArrayProto.slice,
  toString = ObjProto.toString,
  hasOwnProperty = ObjProto.hasOwnProperty,
  LIB_VERSION = '0.4.0',
  LIB_NAME = 'SmartProgram',
  source_channel_standard =
    'utm_source utm_medium utm_campaign utm_content utm_term',
  sa_referrer = '\u76f4\u63a5\u6253\u5f00';
sa.lib_version = LIB_VERSION;
var logger = 'object' == typeof logger ? logger : {};
(logger.info = function () {
  if ('object' == typeof console && console.log)
    try {
      return console.log.apply (console, arguments);
    } catch (t) {
      console.log (arguments[0]);
    }
}), (function () {
  FuncProto.bind;
  var t = ArrayProto.forEach,
    e = ArrayProto.indexOf,
    r = Array.isArray,
    n = {},
    i = (_.each = function (e, r, i) {
      if (null == e) return !1;
      if (t && e.forEach === t) e.forEach (r, i);
      else if (e.length === +e.length) {
        for (var s = 0, o = e.length; s < o; s++)
          if (s in e && r.call (i, e[s], s, e) === n) return !1;
      } else
        for (var a in e)
          if (hasOwnProperty.call (e, a) && r.call (i, e[a], a, e) === n)
            return !1;
    });
  (_.logger = logger), (_.extend = function (t) {
    return i (slice.call (arguments, 1), function (e) {
      for (var r in e) void 0 !== e[r] && (t[r] = e[r]);
    }), t;
  }), (_.extend2Lev = function (t) {
    return i (slice.call (arguments, 1), function (e) {
      for (var r in e) void 0 !== e[r] && (_.isObject (e[r]) && _.isObject (t[r]) ? _.extend (t[r], e[r]) : (t[r] = e[r]));
    }), t;
  }), (_.coverExtend = function (t) {
    return i (slice.call (arguments, 1), function (e) {
      for (var r in e) void 0 !== e[r] && void 0 === t[r] && (t[r] = e[r]);
    }), t;
  }), (_.isArray =
    r ||
    function (t) {
      return '[object Array]' === toString.call (t);
    }), (_.isFunction = function (t) {
    try {
      return /^\s*\bfunction\b/.test (t);
    } catch (t) {
      return !1;
    }
  }), (_.isArguments = function (t) {
    return !(!t || !hasOwnProperty.call (t, 'callee'));
  }), (_.toArray = function (t) {
    return t
      ? t.toArray
          ? t.toArray ()
          : _.isArray (t)
              ? slice.call (t)
              : _.isArguments (t) ? slice.call (t) : _.values (t)
      : [];
  }), (_.getPath = function (t) {
    return (t = 'string' == typeof t
      ? t.replace (/^\//, '')
      : '\u53d6\u503c\u5f02\u5e38');
  }), (_.getMPScene = function (t) {
    return 'number' == typeof t || ('string' == typeof t && '' !== t)
      ? (t = String (t))
      : '';
  }), (_.getCurrentPath = function () {
    var t = '\u672a\u53d6\u5230';
    try {
      var e = getCurrentPages ();
      t = e[e.length - 1].route;
    } catch (t) {
      logger.info (t);
    }
    return t;
  }), (_.values = function (t) {
    var e = [];
    return null == t
      ? e
      : (i (t, function (t) {
          e[e.length] = t;
        }), e);
  }), (_.include = function (t, r) {
    var s = !1;
    return null == t
      ? s
      : e && t.indexOf === e
          ? -1 != t.indexOf (r)
          : (i (t, function (t) {
              if (s || (s = t === r)) return n;
            }), s);
  });
}) (), (_.trim = function (t) {
  return t.replace (/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
}), (_.isObject = function (t) {
  return '[object Object]' == toString.call (t) && null != t;
}), (_.isEmptyObject = function (t) {
  if (_.isObject (t)) {
    for (var e in t)
      if (hasOwnProperty.call (t, e)) return !1;
    return !0;
  }
  return !1;
}), (_.isUndefined = function (t) {
  return void 0 === t;
}), (_.isString = function (t) {
  return '[object String]' == toString.call (t);
}), (_.isDate = function (t) {
  return '[object Date]' == toString.call (t);
}), (_.isBoolean = function (t) {
  return '[object Boolean]' == toString.call (t);
}), (_.isNumber = function (t) {
  return '[object Number]' == toString.call (t) && /[\d\.]+/.test (String (t));
}), (_.isJSONString = function (t) {
  try {
    JSON.parse (t);
  } catch (t) {
    return !1;
  }
  return !0;
}), (_.decodeURIComponent = function (t) {
  var e = '';
  try {
    e = decodeURIComponent (t);
  } catch (r) {
    e = t;
  }
  return e;
}), (_.encodeDates = function (t) {
  return _.each (t, function (e, r) {
    _.isDate (e)
      ? (t[r] = _.formatDate (e))
      : _.isObject (e) && (t[r] = _.encodeDates (e));
  }), t;
}), (_.formatDate = function (t) {
  function e (t) {
    return t < 10 ? '0' + t : t;
  }
  return (
    t.getFullYear () +
    '-' +
    e (t.getMonth () + 1) +
    '-' +
    e (t.getDate ()) +
    ' ' +
    e (t.getHours ()) +
    ':' +
    e (t.getMinutes ()) +
    ':' +
    e (t.getSeconds ()) +
    '.' +
    e (t.getMilliseconds ())
  );
}), (_.searchObjDate = function (t) {
  _.isObject (t) &&
    _.each (t, function (e, r) {
      _.isObject (e)
        ? _.searchObjDate (t[r])
        : _.isDate (e) && (t[r] = _.formatDate (e));
    });
}), (_.formatString = function (t) {
  return t.length > sa.para.max_string_length
    ? (logger.info (
        '\u5b57\u7b26\u4e32\u957f\u5ea6\u8d85\u8fc7\u9650\u5236\uff0c\u5df2\u7ecf\u505a\u622a\u53d6--' +
          t
      ), t.slice (0, sa.para.max_string_length))
    : t;
}), (_.searchObjString = function (t) {
  _.isObject (t) &&
    _.each (t, function (e, r) {
      _.isObject (e)
        ? _.searchObjString (t[r])
        : _.isString (e) && (t[r] = _.formatString (e));
    });
}), (_.unique = function (t) {
  for (var e, r = [], n = {}, i = 0; i < t.length; i++)
    (e = t[i]) in n || ((n[e] = !0), r.push (e));
  return r;
}), (_.strip_sa_properties = function (t) {
  return _.isObject (t)
    ? (_.each (t, function (e, r) {
        if (_.isArray (e)) {
          var n = [];
          _.each (e, function (t) {
            _.isString (t)
              ? n.push (t)
              : logger.info (
                  '\u60a8\u7684\u6570\u636e-',
                  e,
                  '\u7684\u6570\u7ec4\u91cc\u7684\u503c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32,\u5df2\u7ecf\u5c06\u5176\u5220\u9664'
                );
          }), 0 !== n.length
            ? (t[r] = n)
            : (delete t[r], logger.info (
                '\u5df2\u7ecf\u5220\u9664\u7a7a\u7684\u6570\u7ec4'
              ));
        }
        _.isString (e) ||
          _.isNumber (e) ||
          _.isDate (e) ||
          _.isBoolean (e) ||
          _.isArray (e) ||
          (logger.info (
            '\u60a8\u7684\u6570\u636e-',
            e,
            '-\u683c\u5f0f\u4e0d\u6ee1\u8db3\u8981\u6c42\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664'
          ), delete t[r]);
      }), t)
    : t;
}), (_.strip_empty_properties = function (t) {
  var e = {};
  return _.each (t, function (t, r) {
    null != t && (e[r] = t);
  }), e;
}), (_.utf8Encode = function (t) {
  var e, r, n, i, s = '';
  for (
    (e = r = 0), (n = (t = (t + '')
      .replace (/\r\n/g, '\n')
      .replace (/\r/g, '\n')).length), (i = 0);
    i < n;
    i++
  ) {
    var o = t.charCodeAt (i), a = null;
    o < 128
      ? r++
      : (a = o > 127 && o < 2048
          ? String.fromCharCode ((o >> 6) | 192, (63 & o) | 128)
          : String.fromCharCode (
              (o >> 12) | 224,
              ((o >> 6) & 63) | 128,
              (63 & o) | 128
            )), null !== a &&
      (r > e && (s += t.substring (e, r)), (s += a), (e = r = i + 1));
  }
  return r > e && (s += t.substring (e, t.length)), s;
}), (_.base64Encode = function (t) {
  var e,
    r,
    n,
    i,
    s,
    o = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
    a = 0,
    c = 0,
    u = '',
    p = [];
  if (!t) return t;
  t = _.utf8Encode (t);
  do {
    (e =
      ((s =
        (t.charCodeAt (a++) << 16) |
        (t.charCodeAt (a++) << 8) |
        t.charCodeAt (a++)) >>
        18) &
      63), (r = (s >> 12) & 63), (n = (s >> 6) & 63), (i = 63 & s), (p[c++] =
      o.charAt (e) + o.charAt (r) + o.charAt (n) + o.charAt (i));
  } while (a < t.length);
  switch (((u = p.join ('')), t.length % 3)) {
    case 1:
      u = u.slice (0, -2) + '==';
      break;
    case 2:
      u = u.slice (0, -1) + '=';
  }
  return u;
}), (_.info = {
  currentProps: {},
  properties: {$lib: LIB_NAME, $lib_version: String (LIB_VERSION)},
  getSystem: function () {
    var t = this.properties, e = this, r = !0;
    function n () {
      r &&
        ((r = !0), swan.getSystemInfo ({
          success: function (r) {
            var n, i;
            (t.$model = r.model), (t.$screen_width = Number (
              r.screenWidth
            )), (t.$screen_height = Number (r.screenHeight)), (t.$os = ((n =
              r.platform), 'ios' === (i = n.toLowerCase ())
              ? 'iOS'
              : 'android' === i
                  ? 'Android'
                  : n)), (t.$os_version = r.system.indexOf (' ') > -1
              ? r.system.split (' ')[1]
              : r.system), (t.$manufacturer = r.brand), e.setStatusComplete ();
          },
          complete: e.setStatusComplete,
        }));
    }
    swan.getNetworkType ({
      success: function (e) {
        (t.$network_type = e.networkType), n ();
      },
      complete: function () {
        n ();
      },
    });
  },
  setStatusComplete: function () {
    if (sa.getSystemInfoComplete) return !1;
    (sa.getSystemInfoComplete = !0), sa._queue.length > 0 &&
      (_.each (sa._queue, function (t) {
        sa.prepareData.apply (sa, slice.call (t));
      }), (sa._queue = []));
  },
}), (sa._ = _), (sa.prepareData = function (t, e) {
  if (!sa.getSystemInfoComplete) return sa._queue.push (arguments), !1;
  var r = {
    distinct_id: this.store.getDistinctId (),
    lib: {
      $lib: LIB_NAME,
      $lib_method: 'code',
      $lib_version: String (LIB_VERSION),
    },
    properties: {},
  };
  _.extend (r, t), _.isObject (t.properties) &&
    !_.isEmptyObject (t.properties) &&
    _.extend (r.properties, t.properties), (t.type &&
    'profile' === t.type.slice (0, 7)) ||
    ((r.properties = _.extend (
      {},
      _.info.properties,
      sa.store.getProps (),
      _.info.currentProps,
      r.properties
    )), 'object' == typeof sa.store._state &&
      'number' == typeof sa.store._state.first_visit_day_time &&
      sa.store._state.first_visit_day_time > new Date ().getTime ()
      ? (r.properties.$is_first_day = !0)
      : (r.properties.$is_first_day = !1)), r.properties.$time &&
    _.isDate (r.properties.$time)
    ? ((r.time = 1 * r.properties.$time), delete r.properties.$time)
    : (r.time = 1 * new Date ()), _.searchObjDate (r), _.searchObjString (
    r
  ), sa.send (r, e);
}), (sa.store = {
  getUUID: function () {
    return (
      Date.now () +
      '-' +
      Math.floor (1e7 * Math.random ()) +
      '-' +
      Math.random ().toString (16).replace ('.', '') +
      '-' +
      String (31242 * Math.random ()).replace ('.', '').slice (0, 8)
    );
  },
  setStorage: function () {},
  getStorage: function () {
    return swan.getStorageSync ('sensorsdata2015_baidu') || '';
  },
  _state: {},
  toState: function (t) {
    'object' == typeof t && t.distinct_id
      ? (this._state = t)
      : this.set ('distinct_id', this.getUUID ());
  },
  getFirstId: function () {
    return this._state.first_id;
  },
  getDistinctId: function () {
    return this._state.distinct_id;
  },
  getProps: function () {
    return this._state.props || {};
  },
  setProps: function (t, e) {
    var r = this._state.props || {};
    e ? this.set ('props', t) : (_.extend (r, t), this.set ('props', r));
  },
  set: function (t, e) {
    var r = {};
    for (var n in ('string' == typeof t
      ? (r[t] = e)
      : 'object' == typeof t && (r = t), (this._state = this._state || {}), r))
      this._state[n] = r[n];
    this.save ();
  },
  change: function (t, e) {
    this._state[t] = e;
  },
  save: function () {
    swan.setStorageSync ('sensorsdata2015_baidu', this._state);
  },
  init: function () {
    var t = this.getStorage ();
    if (t) this.toState (t);
    else {
      is_first_launch = !0;
      var e = new Date (), r = e.getTime ();
      e.setHours (23), e.setMinutes (59), e.setSeconds (60), this.set ({
        distinct_id: this.getUUID (),
        first_visit_time: r,
        first_visit_day_time: e.getTime (),
      });
    }
  },
}), (sa.setServerUrl = function (u) {
  sa.para.server_url = u || '';
}), (sa.setProfile = function (t, e) {
  sa.prepareData ({type: 'profile_set', properties: t}, e);
}), (sa.setOnceProfile = function (t, e) {
  sa.prepareData ({type: 'profile_set_once', properties: t}, e);
}), (sa.track = function (t, e, r) {
  this.prepareData ({type: 'track', event: t, properties: e}, r);
}), (sa.identify = function (t, e) {
  if ('number' == typeof t) t = String (t);
  else if ('string' != typeof t) return !1;
  var r = sa.store.getFirstId ();
  !0 === e
    ? r ? sa.store.set ('first_id', t) : sa.store.set ('distinct_id', t)
    : r ? sa.store.change ('first_id', t) : sa.store.change ('distinct_id', t);
}), (sa.trackSignup = function (t, e, r, n) {
  sa.prepareData (
    {
      original_id: sa.store.getFirstId () || sa.store.getDistinctId (),
      distinct_id: t,
      type: 'track_signup',
      event: e,
      properties: r,
    },
    n
  ), sa.store.set ('distinct_id', t);
}), (sa.registerApp = function (t) {
  _.isObject (t) &&
    !_.isEmptyObject (t) &&
    (_.info.currentProps = _.extend (_.info.currentProps, t));
}), (sa.clearAllRegister = function () {
  sa.store.setProps ({}, !0);
}), (sa.login = function (t) {
  var e = sa.store.getFirstId (), r = sa.store.getDistinctId ();
  t !== r &&
    (e
      ? sa.trackSignup (t, '$SignUp')
      : (sa.store.set ('first_id', r), sa.trackSignup (t, '$SignUp')));
}), (sa.appLaunch = function (t, e) {
  (e && _.isObject (e)) || (e = {});
  var r = {};
  t && t.path && (r.$url_path = _.getPath (t.path)), is_first_launch
    ? ((r.$is_first_time = !0), sa.setOnceProfile ())
    : (r.$is_first_time = !1);
  var n = _.getMPScene (t.scene);
  n && (r.$scene = n), _.extend (r, e), sa.track ('$MPLaunch', r);
}), (sa.appShow = function (t, e) {
  (e && _.isObject (e)) || (e = {});
  var r = {};
  (mpshow_time = new Date ().getTime ()), t &&
    t.path &&
    (r.$url_path = _.getPath (t.path));
  var n = _.getMPScene (t.scene);
  n && (r.$scene = n), _.extend (r, e), sa.track ('$MPShow', r);
}), (sa.appHide = function (t) {
  (t && _.isObject (t)) || (t = {});
  var e = new Date ().getTime (), r = {};
  (r.$url_path = _.getCurrentPath ()), mpshow_time &&
    e - mpshow_time > 0 &&
    (e - mpshow_time) / 36e5 < 24 &&
    (r.event_duration = (e - mpshow_time) / 1e3), _.extend (r, t), sa.track (
    '$MPHide',
    r
  );
}), (sa.quick = function () {
  var t = arguments[0],
    e = arguments[1],
    r = arguments[2],
    n = _.isObject (r) ? r : {};
  'appLaunch' === t || 'appShow' === t
    ? e
        ? sa[t] (e, n)
        : logger.info (
            'App\u7684launch\u548cshow\uff0c\u5728sensors.quick\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5fc5\u987b\u4f20\u5165App\u7684options\u53c2\u6570'
          )
    : 'appHide' === t && ((n = _.isObject (e) ? e : {}), sa[t] (n));
}), (sa.init = function () {
  this._.info.getSystem (), this.store.init (), _.isObject (
    this.para.register
  ) && (_.info.properties = _.extend (_.info.properties, this.para.register));
}), (sa.send = function (t) {
  console
  var e = '';
  (t._nocache = (String (Math.random ()) +
    String (Math.random ()) +
    String (Math.random ())).slice (2, 15)), logger.info (
    t
  ), (t = JSON.stringify (t)), (e = -1 !== sa.para.server_url.indexOf ('?')
    ? sa.para.server_url + '&data=' + encodeURIComponent (_.base64Encode (t))
    : sa.para.server_url + '?data=' + encodeURIComponent (_.base64Encode (t)));
  swan.request ({url: e, method: 'GET'});
}), sa.init (), (module.exports = sa);
