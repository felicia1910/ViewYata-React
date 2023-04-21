function _mergeNamespaces(n2, m2) {
  for (var i2 = 0; i2 < m2.length; i2++) {
    const e2 = m2[i2];
    if (typeof e2 !== "string" && !Array.isArray(e2)) {
      for (const k2 in e2) {
        if (k2 !== "default" && !(k2 in n2)) {
          const d2 = Object.getOwnPropertyDescriptor(e2, k2);
          if (d2) {
            Object.defineProperty(n2, k2, d2.get ? d2 : {
              enumerable: true,
              get: () => e2[k2]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var jsxRuntimeExports = {};
var jsxRuntime = {
  get exports() {
    return jsxRuntimeExports;
  },
  set exports(v2) {
    jsxRuntimeExports = v2;
  }
};
var reactJsxRuntime_production_min = {};
var reactExports = {};
var react$1 = {
  get exports() {
    return reactExports;
  },
  set exports(v2) {
    reactExports = v2;
  }
};
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$c = Symbol.for("react.element"), n$b = Symbol.for("react.portal"), p$e = Symbol.for("react.fragment"), q$7 = Symbol.for("react.strict_mode"), r$a = Symbol.for("react.profiler"), t$b = Symbol.for("react.provider"), u$9 = Symbol.for("react.context"), v$7 = Symbol.for("react.forward_ref"), w$6 = Symbol.for("react.suspense"), x$4 = Symbol.for("react.memo"), y$8 = Symbol.for("react.lazy"), z$4 = Symbol.iterator;
function A$4(a2) {
  if (null === a2 || "object" !== typeof a2)
    return null;
  a2 = z$4 && a2[z$4] || a2["@@iterator"];
  return "function" === typeof a2 ? a2 : null;
}
var B$2 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$2 = Object.assign, D$4 = {};
function E$3(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D$4;
  this.updater = e2 || B$2;
}
E$3.prototype.isReactComponent = {};
E$3.prototype.setState = function(a2, b2) {
  if ("object" !== typeof a2 && "function" !== typeof a2 && null != a2)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a2, b2, "setState");
};
E$3.prototype.forceUpdate = function(a2) {
  this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
};
function F$4() {
}
F$4.prototype = E$3.prototype;
function G$2(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D$4;
  this.updater = e2 || B$2;
}
var H$4 = G$2.prototype = new F$4();
H$4.constructor = G$2;
C$2(H$4, E$3.prototype);
H$4.isPureReactComponent = true;
var I$5 = Array.isArray, J$1 = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$3 = { key: true, ref: true, __self: true, __source: true };
function M$7(a2, b2, e2) {
  var d2, c2 = {}, k2 = null, h2 = null;
  if (null != b2)
    for (d2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2)
      J$1.call(b2, d2) && !L$3.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
  var g2 = arguments.length - 2;
  if (1 === g2)
    c2.children = e2;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
      f2[m2] = arguments[m2 + 2];
    c2.children = f2;
  }
  if (a2 && a2.defaultProps)
    for (d2 in g2 = a2.defaultProps, g2)
      void 0 === c2[d2] && (c2[d2] = g2[d2]);
  return { $$typeof: l$c, type: a2, key: k2, ref: h2, props: c2, _owner: K$1.current };
}
function N$4(a2, b2) {
  return { $$typeof: l$c, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
}
function O$4(a2) {
  return "object" === typeof a2 && null !== a2 && a2.$$typeof === l$c;
}
function escape(a2) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a2.replace(/[=:]/g, function(a3) {
    return b2[a3];
  });
}
var P$4 = /\/+/g;
function Q$3(a2, b2) {
  return "object" === typeof a2 && null !== a2 && null != a2.key ? escape("" + a2.key) : b2.toString(36);
}
function R$3(a2, b2, e2, d2, c2) {
  var k2 = typeof a2;
  if ("undefined" === k2 || "boolean" === k2)
    a2 = null;
  var h2 = false;
  if (null === a2)
    h2 = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a2.$$typeof) {
          case l$c:
          case n$b:
            h2 = true;
        }
    }
  if (h2)
    return h2 = a2, c2 = c2(h2), a2 = "" === d2 ? "." + Q$3(h2, 0) : d2, I$5(c2) ? (e2 = "", null != a2 && (e2 = a2.replace(P$4, "$&/") + "/"), R$3(c2, b2, e2, "", function(a3) {
      return a3;
    })) : null != c2 && (O$4(c2) && (c2 = N$4(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$4, "$&/") + "/") + a2)), b2.push(c2)), 1;
  h2 = 0;
  d2 = "" === d2 ? "." : d2 + ":";
  if (I$5(a2))
    for (var g2 = 0; g2 < a2.length; g2++) {
      k2 = a2[g2];
      var f2 = d2 + Q$3(k2, g2);
      h2 += R$3(k2, b2, e2, f2, c2);
    }
  else if (f2 = A$4(a2), "function" === typeof f2)
    for (a2 = f2.call(a2), g2 = 0; !(k2 = a2.next()).done; )
      k2 = k2.value, f2 = d2 + Q$3(k2, g2++), h2 += R$3(k2, b2, e2, f2, c2);
  else if ("object" === k2)
    throw b2 = String(a2), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
  return h2;
}
function S$a(a2, b2, e2) {
  if (null == a2)
    return a2;
  var d2 = [], c2 = 0;
  R$3(a2, d2, "", "", function(a3) {
    return b2.call(e2, a3, c2++);
  });
  return d2;
}
function T$3(a2) {
  if (-1 === a2._status) {
    var b2 = a2._result;
    b2 = b2();
    b2.then(function(b3) {
      if (0 === a2._status || -1 === a2._status)
        a2._status = 1, a2._result = b3;
    }, function(b3) {
      if (0 === a2._status || -1 === a2._status)
        a2._status = 2, a2._result = b3;
    });
    -1 === a2._status && (a2._status = 0, a2._result = b2);
  }
  if (1 === a2._status)
    return a2._result.default;
  throw a2._result;
}
var U$3 = { current: null }, V$1 = { transition: null }, W$2 = { ReactCurrentDispatcher: U$3, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
react_production_min.Children = { map: S$a, forEach: function(a2, b2, e2) {
  S$a(a2, function() {
    b2.apply(this, arguments);
  }, e2);
}, count: function(a2) {
  var b2 = 0;
  S$a(a2, function() {
    b2++;
  });
  return b2;
}, toArray: function(a2) {
  return S$a(a2, function(a3) {
    return a3;
  }) || [];
}, only: function(a2) {
  if (!O$4(a2))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a2;
} };
react_production_min.Component = E$3;
react_production_min.Fragment = p$e;
react_production_min.Profiler = r$a;
react_production_min.PureComponent = G$2;
react_production_min.StrictMode = q$7;
react_production_min.Suspense = w$6;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$2;
react_production_min.cloneElement = function(a2, b2, e2) {
  if (null === a2 || void 0 === a2)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
  var d2 = C$2({}, a2.props), c2 = a2.key, k2 = a2.ref, h2 = a2._owner;
  if (null != b2) {
    void 0 !== b2.ref && (k2 = b2.ref, h2 = K$1.current);
    void 0 !== b2.key && (c2 = "" + b2.key);
    if (a2.type && a2.type.defaultProps)
      var g2 = a2.type.defaultProps;
    for (f2 in b2)
      J$1.call(b2, f2) && !L$3.hasOwnProperty(f2) && (d2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2)
    d2.children = e2;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g2[m2] = arguments[m2 + 2];
    d2.children = g2;
  }
  return { $$typeof: l$c, type: a2.type, key: c2, ref: k2, props: d2, _owner: h2 };
};
react_production_min.createContext = function(a2) {
  a2 = { $$typeof: u$9, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a2.Provider = { $$typeof: t$b, _context: a2 };
  return a2.Consumer = a2;
};
react_production_min.createElement = M$7;
react_production_min.createFactory = function(a2) {
  var b2 = M$7.bind(null, a2);
  b2.type = a2;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a2) {
  return { $$typeof: v$7, render: a2 };
};
react_production_min.isValidElement = O$4;
react_production_min.lazy = function(a2) {
  return { $$typeof: y$8, _payload: { _status: -1, _result: a2 }, _init: T$3 };
};
react_production_min.memo = function(a2, b2) {
  return { $$typeof: x$4, type: a2, compare: void 0 === b2 ? null : b2 };
};
react_production_min.startTransition = function(a2) {
  var b2 = V$1.transition;
  V$1.transition = {};
  try {
    a2();
  } finally {
    V$1.transition = b2;
  }
};
react_production_min.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
react_production_min.useCallback = function(a2, b2) {
  return U$3.current.useCallback(a2, b2);
};
react_production_min.useContext = function(a2) {
  return U$3.current.useContext(a2);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a2) {
  return U$3.current.useDeferredValue(a2);
};
react_production_min.useEffect = function(a2, b2) {
  return U$3.current.useEffect(a2, b2);
};
react_production_min.useId = function() {
  return U$3.current.useId();
};
react_production_min.useImperativeHandle = function(a2, b2, e2) {
  return U$3.current.useImperativeHandle(a2, b2, e2);
};
react_production_min.useInsertionEffect = function(a2, b2) {
  return U$3.current.useInsertionEffect(a2, b2);
};
react_production_min.useLayoutEffect = function(a2, b2) {
  return U$3.current.useLayoutEffect(a2, b2);
};
react_production_min.useMemo = function(a2, b2) {
  return U$3.current.useMemo(a2, b2);
};
react_production_min.useReducer = function(a2, b2, e2) {
  return U$3.current.useReducer(a2, b2, e2);
};
react_production_min.useRef = function(a2) {
  return U$3.current.useRef(a2);
};
react_production_min.useState = function(a2) {
  return U$3.current.useState(a2);
};
react_production_min.useSyncExternalStore = function(a2, b2, e2) {
  return U$3.current.useSyncExternalStore(a2, b2, e2);
};
react_production_min.useTransition = function() {
  return U$3.current.useTransition();
};
react_production_min.version = "18.2.0";
(function(module) {
  {
    module.exports = react_production_min;
  }
})(react$1);
const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
const e$7 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: React
}, [reactExports]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$8 = reactExports, k$5 = Symbol.for("react.element"), l$b = Symbol.for("react.fragment"), m$8 = Object.prototype.hasOwnProperty, n$a = f$8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$d = { key: true, ref: true, __self: true, __source: true };
function q$6(c2, a2, g2) {
  var b2, d2 = {}, e2 = null, h2 = null;
  void 0 !== g2 && (e2 = "" + g2);
  void 0 !== a2.key && (e2 = "" + a2.key);
  void 0 !== a2.ref && (h2 = a2.ref);
  for (b2 in a2)
    m$8.call(a2, b2) && !p$d.hasOwnProperty(b2) && (d2[b2] = a2[b2]);
  if (c2 && c2.defaultProps)
    for (b2 in a2 = c2.defaultProps, a2)
      void 0 === d2[b2] && (d2[b2] = a2[b2]);
  return { $$typeof: k$5, type: c2, key: e2, ref: h2, props: d2, _owner: n$a.current };
}
reactJsxRuntime_production_min.Fragment = l$b;
reactJsxRuntime_production_min.jsx = q$6;
reactJsxRuntime_production_min.jsxs = q$6;
(function(module) {
  {
    module.exports = reactJsxRuntime_production_min;
  }
})(jsxRuntime);
const Fragment = jsxRuntimeExports.Fragment;
const jsx = jsxRuntimeExports.jsx;
const jsxs = jsxRuntimeExports.jsxs;
var reactDomExports = {};
var reactDom = {
  get exports() {
    return reactDomExports;
  },
  set exports(v2) {
    reactDomExports = v2;
  }
};
var reactDom_production_min = {};
var schedulerExports = {};
var scheduler = {
  get exports() {
    return schedulerExports;
  },
  set exports(v2) {
    schedulerExports = v2;
  }
};
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a2, b2) {
    var c2 = a2.length;
    a2.push(b2);
    a:
      for (; 0 < c2; ) {
        var d2 = c2 - 1 >>> 1, e2 = a2[d2];
        if (0 < g2(e2, b2))
          a2[d2] = b2, a2[c2] = e2, c2 = d2;
        else
          break a;
      }
  }
  function h2(a2) {
    return 0 === a2.length ? null : a2[0];
  }
  function k2(a2) {
    if (0 === a2.length)
      return null;
    var b2 = a2[0], c2 = a2.pop();
    if (c2 !== b2) {
      a2[0] = c2;
      a:
        for (var d2 = 0, e2 = a2.length, w2 = e2 >>> 1; d2 < w2; ) {
          var m2 = 2 * (d2 + 1) - 1, C2 = a2[m2], n2 = m2 + 1, x2 = a2[n2];
          if (0 > g2(C2, c2))
            n2 < e2 && 0 > g2(x2, C2) ? (a2[d2] = x2, a2[n2] = c2, d2 = n2) : (a2[d2] = C2, a2[m2] = c2, d2 = m2);
          else if (n2 < e2 && 0 > g2(x2, c2))
            a2[d2] = x2, a2[n2] = c2, d2 = n2;
          else
            break a;
        }
    }
    return b2;
  }
  function g2(a2, b2) {
    var c2 = a2.sortIndex - b2.sortIndex;
    return 0 !== c2 ? c2 : a2.id - b2.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a2) {
    for (var b2 = h2(t2); null !== b2; ) {
      if (null === b2.callback)
        k2(t2);
      else if (b2.startTime <= a2)
        k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
      else
        break;
      b2 = h2(t2);
    }
  }
  function H2(a2) {
    B2 = false;
    G2(a2);
    if (!A2)
      if (null !== h2(r2))
        A2 = true, I2(J2);
      else {
        var b2 = h2(t2);
        null !== b2 && K2(H2, b2.startTime - a2);
      }
  }
  function J2(a2, b2) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c2 = y2;
    try {
      G2(b2);
      for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b2) || a2 && !M2()); ) {
        var d2 = v2.callback;
        if ("function" === typeof d2) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e2 = d2(v2.expirationTime <= b2);
          b2 = exports.unstable_now();
          "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
          G2(b2);
        } else
          k2(r2);
        v2 = h2(r2);
      }
      if (null !== v2)
        var w2 = true;
      else {
        var m2 = h2(t2);
        null !== m2 && K2(H2, m2.startTime - b2);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c2, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a2 = exports.unstable_now();
      Q2 = a2;
      var b2 = true;
      try {
        b2 = O2(true, a2);
      } finally {
        b2 ? S2() : (N2 = false, O2 = null);
      }
    } else
      N2 = false;
  }
  var S2;
  if ("function" === typeof F2)
    S2 = function() {
      F2(R2);
    };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else
    S2 = function() {
      D2(R2, 0);
    };
  function I2(a2) {
    O2 = a2;
    N2 || (N2 = true, S2());
  }
  function K2(a2, b2) {
    L2 = D2(function() {
      a2(exports.unstable_now());
    }, b2);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a2) {
    a2.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a2) {
    0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h2(r2);
  };
  exports.unstable_next = function(a2) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = y2;
    }
    var c2 = y2;
    y2 = b2;
    try {
      return a2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a2, b2) {
    switch (a2) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a2 = 3;
    }
    var c2 = y2;
    y2 = a2;
    try {
      return b2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_scheduleCallback = function(a2, b2, c2) {
    var d2 = exports.unstable_now();
    "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
    switch (a2) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c2 + e2;
    a2 = { id: u2++, callback: b2, priorityLevel: a2, startTime: c2, expirationTime: e2, sortIndex: -1 };
    c2 > d2 ? (a2.sortIndex = c2, f2(t2, a2), null === h2(r2) && a2 === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a2.sortIndex = e2, f2(r2, a2), A2 || z2 || (A2 = true, I2(J2)));
    return a2;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a2) {
    var b2 = y2;
    return function() {
      var c2 = y2;
      y2 = b2;
      try {
        return a2.apply(this, arguments);
      } finally {
        y2 = c2;
      }
    };
  };
})(scheduler_production_min);
(function(module) {
  {
    module.exports = scheduler_production_min;
  }
})(scheduler);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = reactExports, ca = schedulerExports;
function p$c(a2) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a2, b2) {
  ha(a2, b2);
  ha(a2 + "Capture", b2);
}
function ha(a2, b2) {
  ea[a2] = b2;
  for (a2 = 0; a2 < b2.length; a2++)
    da.add(b2[a2]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a2) {
  if (ja.call(ma, a2))
    return true;
  if (ja.call(la, a2))
    return false;
  if (ka.test(a2))
    return ma[a2] = true;
  la[a2] = true;
  return false;
}
function pa(a2, b2, c2, d2) {
  if (null !== c2 && 0 === c2.type)
    return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d2)
        return false;
      if (null !== c2)
        return !c2.acceptsBooleans;
      a2 = a2.toLowerCase().slice(0, 5);
      return "data-" !== a2 && "aria-" !== a2;
    default:
      return false;
  }
}
function qa(a2, b2, c2, d2) {
  if (null === b2 || "undefined" === typeof b2 || pa(a2, b2, c2, d2))
    return true;
  if (d2)
    return false;
  if (null !== c2)
    switch (c2.type) {
      case 3:
        return !b2;
      case 4:
        return false === b2;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
  return false;
}
function v$6(a2, b2, c2, d2, e2, f2, g2) {
  this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
  this.attributeName = d2;
  this.attributeNamespace = e2;
  this.mustUseProperty = c2;
  this.propertyName = a2;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var z$3 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
  z$3[a2] = new v$6(a2, 0, false, a2, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
  var b2 = a2[0];
  z$3[b2] = new v$6(b2, 1, false, a2[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
  z$3[a2] = new v$6(a2, 2, false, a2.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
  z$3[a2] = new v$6(a2, 2, false, a2, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
  z$3[a2] = new v$6(a2, 3, false, a2.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a2) {
  z$3[a2] = new v$6(a2, 3, true, a2, null, false, false);
});
["capture", "download"].forEach(function(a2) {
  z$3[a2] = new v$6(a2, 4, false, a2, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a2) {
  z$3[a2] = new v$6(a2, 6, false, a2, null, false, false);
});
["rowSpan", "start"].forEach(function(a2) {
  z$3[a2] = new v$6(a2, 5, false, a2.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a2) {
  return a2[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
  var b2 = a2.replace(
    ra,
    sa
  );
  z$3[b2] = new v$6(b2, 1, false, a2, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
  var b2 = a2.replace(ra, sa);
  z$3[b2] = new v$6(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
  var b2 = a2.replace(ra, sa);
  z$3[b2] = new v$6(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a2) {
  z$3[a2] = new v$6(a2, 1, false, a2.toLowerCase(), null, false, false);
});
z$3.xlinkHref = new v$6("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a2) {
  z$3[a2] = new v$6(a2, 1, false, a2.toLowerCase(), null, true, true);
});
function ta(a2, b2, c2, d2) {
  var e2 = z$3.hasOwnProperty(b2) ? z$3[b2] : null;
  if (null !== e2 ? 0 !== e2.type : d2 || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1])
    qa(b2, c2, e2, d2) && (c2 = null), d2 || null === e2 ? oa(b2) && (null === c2 ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a2[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, null === c2 ? a2.removeAttribute(b2) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d2 ? a2.setAttributeNS(d2, b2, c2) : a2.setAttribute(b2, c2)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a2) {
  if (null === a2 || "object" !== typeof a2)
    return null;
  a2 = Ja && a2[Ja] || a2["@@iterator"];
  return "function" === typeof a2 ? a2 : null;
}
var A$3 = Object.assign, La;
function Ma(a2) {
  if (void 0 === La)
    try {
      throw Error();
    } catch (c2) {
      var b2 = c2.stack.trim().match(/\n( *(at )?)/);
      La = b2 && b2[1] || "";
    }
  return "\n" + La + a2;
}
var Na = false;
function Oa(a2, b2) {
  if (!a2 || Na)
    return "";
  Na = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2)
      if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (l2) {
          var d2 = l2;
        }
        Reflect.construct(a2, [], b2);
      } else {
        try {
          b2.call();
        } catch (l2) {
          d2 = l2;
        }
        a2.call(b2.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l2) {
        d2 = l2;
      }
      a2();
    }
  } catch (l2) {
    if (l2 && d2 && "string" === typeof l2.stack) {
      for (var e2 = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; )
        h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--)
        if (e2[g2] !== f2[h2]) {
          if (1 !== g2 || 1 !== h2) {
            do
              if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2]) {
                var k2 = "\n" + e2[g2].replace(" at new ", " at ");
                a2.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a2.displayName));
                return k2;
              }
            while (1 <= g2 && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c2;
  }
  return (a2 = a2 ? a2.displayName || a2.name : "") ? Ma(a2) : "";
}
function Pa(a2) {
  switch (a2.tag) {
    case 5:
      return Ma(a2.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a2 = Oa(a2.type, false), a2;
    case 11:
      return a2 = Oa(a2.type.render, false), a2;
    case 1:
      return a2 = Oa(a2.type, true), a2;
    default:
      return "";
  }
}
function Qa(a2) {
  if (null == a2)
    return null;
  if ("function" === typeof a2)
    return a2.displayName || a2.name || null;
  if ("string" === typeof a2)
    return a2;
  switch (a2) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a2)
    switch (a2.$$typeof) {
      case Ca:
        return (a2.displayName || "Context") + ".Consumer";
      case Ba:
        return (a2._context.displayName || "Context") + ".Provider";
      case Da:
        var b2 = a2.render;
        a2 = a2.displayName;
        a2 || (a2 = b2.displayName || b2.name || "", a2 = "" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
        return a2;
      case Ga:
        return b2 = a2.displayName || null, null !== b2 ? b2 : Qa(a2.type) || "Memo";
      case Ha:
        b2 = a2._payload;
        a2 = a2._init;
        try {
          return Qa(a2(b2));
        } catch (c2) {
        }
    }
  return null;
}
function Ra(a2) {
  var b2 = a2.type;
  switch (a2.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b2.displayName || "Context") + ".Consumer";
    case 10:
      return (b2._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a2 = b2.render, a2 = a2.displayName || a2.name || "", b2.displayName || ("" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b2;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b2);
    case 8:
      return b2 === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b2)
        return b2.displayName || b2.name || null;
      if ("string" === typeof b2)
        return b2;
  }
  return null;
}
function Sa(a2) {
  switch (typeof a2) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a2;
    case "object":
      return a2;
    default:
      return "";
  }
}
function Ta(a2) {
  var b2 = a2.type;
  return (a2 = a2.nodeName) && "input" === a2.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
}
function Ua(a2) {
  var b2 = Ta(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d2 = "" + a2[b2];
  if (!a2.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
    var e2 = c2.get, f2 = c2.set;
    Object.defineProperty(a2, b2, { configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a3) {
      d2 = "" + a3;
      f2.call(this, a3);
    } });
    Object.defineProperty(a2, b2, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d2;
    }, setValue: function(a3) {
      d2 = "" + a3;
    }, stopTracking: function() {
      a2._valueTracker = null;
      delete a2[b2];
    } };
  }
}
function Va(a2) {
  a2._valueTracker || (a2._valueTracker = Ua(a2));
}
function Wa(a2) {
  if (!a2)
    return false;
  var b2 = a2._valueTracker;
  if (!b2)
    return true;
  var c2 = b2.getValue();
  var d2 = "";
  a2 && (d2 = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
  a2 = d2;
  return a2 !== c2 ? (b2.setValue(a2), true) : false;
}
function Xa(a2) {
  a2 = a2 || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a2)
    return null;
  try {
    return a2.activeElement || a2.body;
  } catch (b2) {
    return a2.body;
  }
}
function Ya(a2, b2) {
  var c2 = b2.checked;
  return A$3({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a2._wrapperState.initialChecked });
}
function Za(a2, b2) {
  var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
  c2 = Sa(null != b2.value ? b2.value : c2);
  a2._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
}
function ab(a2, b2) {
  b2 = b2.checked;
  null != b2 && ta(a2, "checked", b2, false);
}
function bb(a2, b2) {
  ab(a2, b2);
  var c2 = Sa(b2.value), d2 = b2.type;
  if (null != c2)
    if ("number" === d2) {
      if (0 === c2 && "" === a2.value || a2.value != c2)
        a2.value = "" + c2;
    } else
      a2.value !== "" + c2 && (a2.value = "" + c2);
  else if ("submit" === d2 || "reset" === d2) {
    a2.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? cb(a2, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a2, b2.type, Sa(b2.defaultValue));
  null == b2.checked && null != b2.defaultChecked && (a2.defaultChecked = !!b2.defaultChecked);
}
function db(a2, b2, c2) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d2 = b2.type;
    if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value))
      return;
    b2 = "" + a2._wrapperState.initialValue;
    c2 || b2 === a2.value || (a2.value = b2);
    a2.defaultValue = b2;
  }
  c2 = a2.name;
  "" !== c2 && (a2.name = "");
  a2.defaultChecked = !!a2._wrapperState.initialChecked;
  "" !== c2 && (a2.name = c2);
}
function cb(a2, b2, c2) {
  if ("number" !== b2 || Xa(a2.ownerDocument) !== a2)
    null == c2 ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
}
var eb = Array.isArray;
function fb(a2, b2, c2, d2) {
  a2 = a2.options;
  if (b2) {
    b2 = {};
    for (var e2 = 0; e2 < c2.length; e2++)
      b2["$" + c2[e2]] = true;
    for (c2 = 0; c2 < a2.length; c2++)
      e2 = b2.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e2 && (a2[c2].selected = e2), e2 && d2 && (a2[c2].defaultSelected = true);
  } else {
    c2 = "" + Sa(c2);
    b2 = null;
    for (e2 = 0; e2 < a2.length; e2++) {
      if (a2[e2].value === c2) {
        a2[e2].selected = true;
        d2 && (a2[e2].defaultSelected = true);
        return;
      }
      null !== b2 || a2[e2].disabled || (b2 = a2[e2]);
    }
    null !== b2 && (b2.selected = true);
  }
}
function gb(a2, b2) {
  if (null != b2.dangerouslySetInnerHTML)
    throw Error(p$c(91));
  return A$3({}, b2, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
}
function hb(a2, b2) {
  var c2 = b2.value;
  if (null == c2) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (null != c2) {
      if (null != b2)
        throw Error(p$c(92));
      if (eb(c2)) {
        if (1 < c2.length)
          throw Error(p$c(93));
        c2 = c2[0];
      }
      b2 = c2;
    }
    null == b2 && (b2 = "");
    c2 = b2;
  }
  a2._wrapperState = { initialValue: Sa(c2) };
}
function ib(a2, b2) {
  var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
  null != c2 && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), null == b2.defaultValue && a2.defaultValue !== c2 && (a2.defaultValue = c2));
  null != d2 && (a2.defaultValue = "" + d2);
}
function jb(a2) {
  var b2 = a2.textContent;
  b2 === a2._wrapperState.initialValue && "" !== b2 && null !== b2 && (a2.value = b2);
}
function kb(a2) {
  switch (a2) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a2, b2) {
  return null == a2 || "http://www.w3.org/1999/xhtml" === a2 ? kb(b2) : "http://www.w3.org/2000/svg" === a2 && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a2;
}
var mb, nb = function(a2) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a2(b2, c2, d2, e2);
    });
  } : a2;
}(function(a2, b2) {
  if ("http://www.w3.org/2000/svg" !== a2.namespaceURI || "innerHTML" in a2)
    a2.innerHTML = b2;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = mb.firstChild; a2.firstChild; )
      a2.removeChild(a2.firstChild);
    for (; b2.firstChild; )
      a2.appendChild(b2.firstChild);
  }
});
function ob(a2, b2) {
  if (b2) {
    var c2 = a2.firstChild;
    if (c2 && c2 === a2.lastChild && 3 === c2.nodeType) {
      c2.nodeValue = b2;
      return;
    }
  }
  a2.textContent = b2;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a2) {
  qb.forEach(function(b2) {
    b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
    pb[b2] = pb[a2];
  });
});
function rb(a2, b2, c2) {
  return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a2) && pb[a2] ? ("" + b2).trim() : b2 + "px";
}
function sb(a2, b2) {
  a2 = a2.style;
  for (var c2 in b2)
    if (b2.hasOwnProperty(c2)) {
      var d2 = 0 === c2.indexOf("--"), e2 = rb(c2, b2[c2], d2);
      "float" === c2 && (c2 = "cssFloat");
      d2 ? a2.setProperty(c2, e2) : a2[c2] = e2;
    }
}
var tb = A$3({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a2, b2) {
  if (b2) {
    if (tb[a2] && (null != b2.children || null != b2.dangerouslySetInnerHTML))
      throw Error(p$c(137, a2));
    if (null != b2.dangerouslySetInnerHTML) {
      if (null != b2.children)
        throw Error(p$c(60));
      if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML))
        throw Error(p$c(61));
    }
    if (null != b2.style && "object" !== typeof b2.style)
      throw Error(p$c(62));
  }
}
function vb(a2, b2) {
  if (-1 === a2.indexOf("-"))
    return "string" === typeof b2.is;
  switch (a2) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a2) {
  a2 = a2.target || a2.srcElement || window;
  a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
  return 3 === a2.nodeType ? a2.parentNode : a2;
}
var yb = null, zb = null, Ab = null;
function Bb(a2) {
  if (a2 = Cb(a2)) {
    if ("function" !== typeof yb)
      throw Error(p$c(280));
    var b2 = a2.stateNode;
    b2 && (b2 = Db(b2), yb(a2.stateNode, a2.type, b2));
  }
}
function Eb(a2) {
  zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
}
function Fb() {
  if (zb) {
    var a2 = zb, b2 = Ab;
    Ab = zb = null;
    Bb(a2);
    if (b2)
      for (a2 = 0; a2 < b2.length; a2++)
        Bb(b2[a2]);
  }
}
function Gb(a2, b2) {
  return a2(b2);
}
function Hb() {
}
var Ib = false;
function Jb(a2, b2, c2) {
  if (Ib)
    return a2(b2, c2);
  Ib = true;
  try {
    return Gb(a2, b2, c2);
  } finally {
    if (Ib = false, null !== zb || null !== Ab)
      Hb(), Fb();
  }
}
function Kb(a2, b2) {
  var c2 = a2.stateNode;
  if (null === c2)
    return null;
  var d2 = Db(c2);
  if (null === d2)
    return null;
  c2 = d2[b2];
  a:
    switch (b2) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d2 = !d2.disabled) || (a2 = a2.type, d2 = !("button" === a2 || "input" === a2 || "select" === a2 || "textarea" === a2));
        a2 = !d2;
        break a;
      default:
        a2 = false;
    }
  if (a2)
    return null;
  if (c2 && "function" !== typeof c2)
    throw Error(p$c(231, b2, typeof c2));
  return c2;
}
var Lb = false;
if (ia)
  try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", { get: function() {
      Lb = true;
    } });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a2) {
    Lb = false;
  }
function Nb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c2, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a2) {
  Ob = true;
  Pb = a2;
} };
function Tb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else
      throw Error(p$c(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a2) {
  var b2 = a2, c2 = a2;
  if (a2.alternate)
    for (; b2.return; )
      b2 = b2.return;
  else {
    a2 = b2;
    do
      b2 = a2, 0 !== (b2.flags & 4098) && (c2 = b2.return), a2 = b2.return;
    while (a2);
  }
  return 3 === b2.tag ? c2 : null;
}
function Wb(a2) {
  if (13 === a2.tag) {
    var b2 = a2.memoizedState;
    null === b2 && (a2 = a2.alternate, null !== a2 && (b2 = a2.memoizedState));
    if (null !== b2)
      return b2.dehydrated;
  }
  return null;
}
function Xb(a2) {
  if (Vb(a2) !== a2)
    throw Error(p$c(188));
}
function Yb(a2) {
  var b2 = a2.alternate;
  if (!b2) {
    b2 = Vb(a2);
    if (null === b2)
      throw Error(p$c(188));
    return b2 !== a2 ? null : a2;
  }
  for (var c2 = a2, d2 = b2; ; ) {
    var e2 = c2.return;
    if (null === e2)
      break;
    var f2 = e2.alternate;
    if (null === f2) {
      d2 = e2.return;
      if (null !== d2) {
        c2 = d2;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c2)
          return Xb(e2), a2;
        if (f2 === d2)
          return Xb(e2), b2;
        f2 = f2.sibling;
      }
      throw Error(p$c(188));
    }
    if (c2.return !== d2.return)
      c2 = e2, d2 = f2;
    else {
      for (var g2 = false, h2 = e2.child; h2; ) {
        if (h2 === c2) {
          g2 = true;
          c2 = e2;
          d2 = f2;
          break;
        }
        if (h2 === d2) {
          g2 = true;
          d2 = e2;
          c2 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = f2;
            d2 = e2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = f2;
            c2 = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2)
          throw Error(p$c(189));
      }
    }
    if (c2.alternate !== d2)
      throw Error(p$c(190));
  }
  if (3 !== c2.tag)
    throw Error(p$c(188));
  return c2.stateNode.current === c2 ? a2 : b2;
}
function Zb(a2) {
  a2 = Yb(a2);
  return null !== a2 ? $b(a2) : null;
}
function $b(a2) {
  if (5 === a2.tag || 6 === a2.tag)
    return a2;
  for (a2 = a2.child; null !== a2; ) {
    var b2 = $b(a2);
    if (null !== b2)
      return b2;
    a2 = a2.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B$1 = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a2) {
  if (lc && "function" === typeof lc.onCommitFiberRoot)
    try {
      lc.onCommitFiberRoot(kc, a2, void 0, 128 === (a2.current.flags & 128));
    } catch (b2) {
    }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a2) {
  a2 >>>= 0;
  return 0 === a2 ? 32 : 31 - (pc(a2) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc$1(a2) {
  switch (a2 & -a2) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a2 & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a2 & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a2;
  }
}
function uc(a2, b2) {
  var c2 = a2.pendingLanes;
  if (0 === c2)
    return 0;
  var d2 = 0, e2 = a2.suspendedLanes, f2 = a2.pingedLanes, g2 = c2 & 268435455;
  if (0 !== g2) {
    var h2 = g2 & ~e2;
    0 !== h2 ? d2 = tc$1(h2) : (f2 &= g2, 0 !== f2 && (d2 = tc$1(f2)));
  } else
    g2 = c2 & ~e2, 0 !== g2 ? d2 = tc$1(g2) : 0 !== f2 && (d2 = tc$1(f2));
  if (0 === d2)
    return 0;
  if (0 !== b2 && b2 !== d2 && 0 === (b2 & e2) && (e2 = d2 & -d2, f2 = b2 & -b2, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240)))
    return b2;
  0 !== (d2 & 4) && (d2 |= c2 & 16);
  b2 = a2.entangledLanes;
  if (0 !== b2)
    for (a2 = a2.entanglements, b2 &= d2; 0 < b2; )
      c2 = 31 - oc(b2), e2 = 1 << c2, d2 |= a2[c2], b2 &= ~e2;
  return d2;
}
function vc(a2, b2) {
  switch (a2) {
    case 1:
    case 2:
    case 4:
      return b2 + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b2 + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a2, b2) {
  for (var c2 = a2.suspendedLanes, d2 = a2.pingedLanes, e2 = a2.expirationTimes, f2 = a2.pendingLanes; 0 < f2; ) {
    var g2 = 31 - oc(f2), h2 = 1 << g2, k2 = e2[g2];
    if (-1 === k2) {
      if (0 === (h2 & c2) || 0 !== (h2 & d2))
        e2[g2] = vc(h2, b2);
    } else
      k2 <= b2 && (a2.expiredLanes |= h2);
    f2 &= ~h2;
  }
}
function xc(a2) {
  a2 = a2.pendingLanes & -1073741825;
  return 0 !== a2 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a2 = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a2;
}
function zc(a2) {
  for (var b2 = [], c2 = 0; 31 > c2; c2++)
    b2.push(a2);
  return b2;
}
function Ac(a2, b2, c2) {
  a2.pendingLanes |= b2;
  536870912 !== b2 && (a2.suspendedLanes = 0, a2.pingedLanes = 0);
  a2 = a2.eventTimes;
  b2 = 31 - oc(b2);
  a2[b2] = c2;
}
function Bc(a2, b2) {
  var c2 = a2.pendingLanes & ~b2;
  a2.pendingLanes = b2;
  a2.suspendedLanes = 0;
  a2.pingedLanes = 0;
  a2.expiredLanes &= b2;
  a2.mutableReadLanes &= b2;
  a2.entangledLanes &= b2;
  b2 = a2.entanglements;
  var d2 = a2.eventTimes;
  for (a2 = a2.expirationTimes; 0 < c2; ) {
    var e2 = 31 - oc(c2), f2 = 1 << e2;
    b2[e2] = 0;
    d2[e2] = -1;
    a2[e2] = -1;
    c2 &= ~f2;
  }
}
function Cc(a2, b2) {
  var c2 = a2.entangledLanes |= b2;
  for (a2 = a2.entanglements; c2; ) {
    var d2 = 31 - oc(c2), e2 = 1 << d2;
    e2 & b2 | a2[d2] & b2 && (a2[d2] |= b2);
    c2 &= ~e2;
  }
}
var C$1 = 0;
function Dc(a2) {
  a2 &= -a2;
  return 1 < a2 ? 4 < a2 ? 0 !== (a2 & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a2, b2) {
  switch (a2) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b2.pointerId);
  }
}
function Tc(a2, b2, c2, d2, e2, f2) {
  if (null === a2 || a2.nativeEvent !== f2)
    return a2 = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a2;
  a2.eventSystemFlags |= d2;
  b2 = a2.targetContainers;
  null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
  return a2;
}
function Uc(a2, b2, c2, d2, e2) {
  switch (b2) {
    case "focusin":
      return Lc = Tc(Lc, a2, b2, c2, d2, e2), true;
    case "dragenter":
      return Mc = Tc(Mc, a2, b2, c2, d2, e2), true;
    case "mouseover":
      return Nc = Tc(Nc, a2, b2, c2, d2, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a2, b2, c2, d2, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a2, b2, c2, d2, e2)), true;
  }
  return false;
}
function Vc(a2) {
  var b2 = Wc(a2.target);
  if (null !== b2) {
    var c2 = Vb(b2);
    if (null !== c2) {
      if (b2 = c2.tag, 13 === b2) {
        if (b2 = Wb(c2), null !== b2) {
          a2.blockedOn = b2;
          Ic(a2.priority, function() {
            Gc(c2);
          });
          return;
        }
      } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
        a2.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a2.blockedOn = null;
}
function Xc(a2) {
  if (null !== a2.blockedOn)
    return false;
  for (var b2 = a2.targetContainers; 0 < b2.length; ) {
    var c2 = Yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
    if (null === c2) {
      c2 = a2.nativeEvent;
      var d2 = new c2.constructor(c2.type, c2);
      wb = d2;
      c2.target.dispatchEvent(d2);
      wb = null;
    } else
      return b2 = Cb(c2), null !== b2 && Fc(b2), a2.blockedOn = c2, false;
    b2.shift();
  }
  return true;
}
function Zc(a2, b2, c2) {
  Xc(a2) && c2.delete(b2);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a2, b2) {
  a2.blockedOn === b2 && (a2.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a2) {
  function b2(b3) {
    return ad(b3, a2);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a2);
    for (var c2 = 1; c2 < Kc.length; c2++) {
      var d2 = Kc[c2];
      d2.blockedOn === a2 && (d2.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a2);
  null !== Mc && ad(Mc, a2);
  null !== Nc && ad(Nc, a2);
  Oc.forEach(b2);
  Pc.forEach(b2);
  for (c2 = 0; c2 < Qc.length; c2++)
    d2 = Qc[c2], d2.blockedOn === a2 && (d2.blockedOn = null);
  for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); )
    Vc(c2), null === c2.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a2, b2, c2, d2) {
  var e2 = C$1, f2 = cd.transition;
  cd.transition = null;
  try {
    C$1 = 1, fd(a2, b2, c2, d2);
  } finally {
    C$1 = e2, cd.transition = f2;
  }
}
function gd(a2, b2, c2, d2) {
  var e2 = C$1, f2 = cd.transition;
  cd.transition = null;
  try {
    C$1 = 4, fd(a2, b2, c2, d2);
  } finally {
    C$1 = e2, cd.transition = f2;
  }
}
function fd(a2, b2, c2, d2) {
  if (dd) {
    var e2 = Yc(a2, b2, c2, d2);
    if (null === e2)
      hd(a2, b2, d2, id, c2), Sc(a2, d2);
    else if (Uc(e2, a2, b2, c2, d2))
      d2.stopPropagation();
    else if (Sc(a2, d2), b2 & 4 && -1 < Rc.indexOf(a2)) {
      for (; null !== e2; ) {
        var f2 = Cb(e2);
        null !== f2 && Ec(f2);
        f2 = Yc(a2, b2, c2, d2);
        null === f2 && hd(a2, b2, d2, id, c2);
        if (f2 === e2)
          break;
        e2 = f2;
      }
      null !== e2 && d2.stopPropagation();
    } else
      hd(a2, b2, d2, null, c2);
  }
}
var id = null;
function Yc(a2, b2, c2, d2) {
  id = null;
  a2 = xb(d2);
  a2 = Wc(a2);
  if (null !== a2)
    if (b2 = Vb(a2), null === b2)
      a2 = null;
    else if (c2 = b2.tag, 13 === c2) {
      a2 = Wb(b2);
      if (null !== a2)
        return a2;
      a2 = null;
    } else if (3 === c2) {
      if (b2.stateNode.current.memoizedState.isDehydrated)
        return 3 === b2.tag ? b2.stateNode.containerInfo : null;
      a2 = null;
    } else
      b2 !== a2 && (a2 = null);
  id = a2;
  return null;
}
function jd(a2) {
  switch (a2) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a2, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
  for (a2 = 0; a2 < c2 && b2[a2] === e2[a2]; a2++)
    ;
  var g2 = c2 - a2;
  for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++)
    ;
  return md = e2.slice(a2, 1 < d2 ? 1 - d2 : void 0);
}
function od(a2) {
  var b2 = a2.keyCode;
  "charCode" in a2 ? (a2 = a2.charCode, 0 === a2 && 13 === b2 && (a2 = 13)) : a2 = b2;
  10 === a2 && (a2 = 13);
  return 32 <= a2 || 13 === a2 ? a2 : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a2) {
  function b2(b3, d2, e2, f2, g2) {
    this._reactName = b3;
    this._targetInst = e2;
    this.type = d2;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c2 in a2)
      a2.hasOwnProperty(c2) && (b3 = a2[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A$3(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a3 = this.nativeEvent;
    a3 && (a3.preventDefault ? a3.preventDefault() : "unknown" !== typeof a3.returnValue && (a3.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a3 = this.nativeEvent;
    a3 && (a3.stopPropagation ? a3.stopPropagation() : "unknown" !== typeof a3.cancelBubble && (a3.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b2;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
  return a2.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A$3({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A$3({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
  return void 0 === a2.relatedTarget ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
}, movementX: function(a2) {
  if ("movementX" in a2)
    return a2.movementX;
  a2 !== yd && (yd && "mousemove" === a2.type ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
  return wd;
}, movementY: function(a2) {
  return "movementY" in a2 ? a2.movementY : xd;
} }), Bd = rd(Ad), Cd = A$3({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A$3({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A$3({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A$3({}, sd, { clipboardData: function(a2) {
  return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A$3({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a2) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Od[a2]) ? !!b2[a2] : false;
}
function zd() {
  return Pd;
}
var Qd = A$3({}, ud, { key: function(a2) {
  if (a2.key) {
    var b2 = Md[a2.key] || a2.key;
    if ("Unidentified" !== b2)
      return b2;
  }
  return "keypress" === a2.type ? (a2 = od(a2), 13 === a2 ? "Enter" : String.fromCharCode(a2)) : "keydown" === a2.type || "keyup" === a2.type ? Nd[a2.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
  return "keypress" === a2.type ? od(a2) : 0;
}, keyCode: function(a2) {
  return "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
}, which: function(a2) {
  return "keypress" === a2.type ? od(a2) : "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
} }), Rd = rd(Qd), Sd = A$3({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A$3({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A$3({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A$3({}, Ad, {
  deltaX: function(a2) {
    return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
  },
  deltaY: function(a2) {
    return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be$1 = null;
ia && "documentMode" in document && (be$1 = document.documentMode);
var ce = ia && "TextEvent" in window && !be$1, de = ia && (!ae || be$1 && 8 < be$1 && 11 >= be$1), ee = String.fromCharCode(32), fe = false;
function ge(a2, b2) {
  switch (a2) {
    case "keyup":
      return -1 !== $d.indexOf(b2.keyCode);
    case "keydown":
      return 229 !== b2.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a2) {
  a2 = a2.detail;
  return "object" === typeof a2 && "data" in a2 ? a2.data : null;
}
var ie$1 = false;
function je$1(a2, b2) {
  switch (a2) {
    case "compositionend":
      return he(b2);
    case "keypress":
      if (32 !== b2.which)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a2 = b2.data, a2 === ee && fe ? null : a2;
    default:
      return null;
  }
}
function ke$1(a2, b2) {
  if (ie$1)
    return "compositionend" === a2 || !ae && ge(a2, b2) ? (a2 = nd(), md = ld = kd = null, ie$1 = false, a2) : null;
  switch (a2) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length)
          return b2.char;
        if (b2.which)
          return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b2.locale ? null : b2.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return "input" === b2 ? !!le[a2.type] : "textarea" === b2 ? true : false;
}
function ne$1(a2, b2, c2, d2) {
  Eb(d2);
  b2 = oe$1(b2, "onChange");
  0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a2.push({ event: c2, listeners: b2 }));
}
var pe = null, qe = null;
function re$1(a2) {
  se(a2, 0);
}
function te$1(a2) {
  var b2 = ue(a2);
  if (Wa(b2))
    return a2;
}
function ve(a2, b2) {
  if ("change" === a2)
    return b2;
}
var we$1 = false;
if (ia) {
  var xe$2;
  if (ia) {
    var ye$1 = "oninput" in document;
    if (!ye$1) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye$1 = "function" === typeof ze.oninput;
    }
    xe$2 = ye$1;
  } else
    xe$2 = false;
  we$1 = xe$2 && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be$1), qe = pe = null);
}
function Be$1(a2) {
  if ("value" === a2.propertyName && te$1(qe)) {
    var b2 = [];
    ne$1(b2, qe, a2, xb(a2));
    Jb(re$1, b2);
  }
}
function Ce$1(a2, b2, c2) {
  "focusin" === a2 ? (Ae(), pe = b2, qe = c2, pe.attachEvent("onpropertychange", Be$1)) : "focusout" === a2 && Ae();
}
function De$1(a2) {
  if ("selectionchange" === a2 || "keyup" === a2 || "keydown" === a2)
    return te$1(qe);
}
function Ee$1(a2, b2) {
  if ("click" === a2)
    return te$1(b2);
}
function Fe$1(a2, b2) {
  if ("input" === a2 || "change" === a2)
    return te$1(b2);
}
function Ge$1(a2, b2) {
  return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var He$2 = "function" === typeof Object.is ? Object.is : Ge$1;
function Ie$1(a2, b2) {
  if (He$2(a2, b2))
    return true;
  if ("object" !== typeof a2 || null === a2 || "object" !== typeof b2 || null === b2)
    return false;
  var c2 = Object.keys(a2), d2 = Object.keys(b2);
  if (c2.length !== d2.length)
    return false;
  for (d2 = 0; d2 < c2.length; d2++) {
    var e2 = c2[d2];
    if (!ja.call(b2, e2) || !He$2(a2[e2], b2[e2]))
      return false;
  }
  return true;
}
function Je$1(a2) {
  for (; a2 && a2.firstChild; )
    a2 = a2.firstChild;
  return a2;
}
function Ke$1(a2, b2) {
  var c2 = Je$1(a2);
  a2 = 0;
  for (var d2; c2; ) {
    if (3 === c2.nodeType) {
      d2 = a2 + c2.textContent.length;
      if (a2 <= b2 && d2 >= b2)
        return { node: c2, offset: b2 - a2 };
      a2 = d2;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Je$1(c2);
  }
}
function Le(a2, b2) {
  return a2 && b2 ? a2 === b2 ? true : a2 && 3 === a2.nodeType ? false : b2 && 3 === b2.nodeType ? Le(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
}
function Me$1() {
  for (var a2 = window, b2 = Xa(); b2 instanceof a2.HTMLIFrameElement; ) {
    try {
      var c2 = "string" === typeof b2.contentWindow.location.href;
    } catch (d2) {
      c2 = false;
    }
    if (c2)
      a2 = b2.contentWindow;
    else
      break;
    b2 = Xa(a2.document);
  }
  return b2;
}
function Ne$2(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 && ("input" === b2 && ("text" === a2.type || "search" === a2.type || "tel" === a2.type || "url" === a2.type || "password" === a2.type) || "textarea" === b2 || "true" === a2.contentEditable);
}
function Oe(a2) {
  var b2 = Me$1(), c2 = a2.focusedElem, d2 = a2.selectionRange;
  if (b2 !== c2 && c2 && c2.ownerDocument && Le(c2.ownerDocument.documentElement, c2)) {
    if (null !== d2 && Ne$2(c2)) {
      if (b2 = d2.start, a2 = d2.end, void 0 === a2 && (a2 = b2), "selectionStart" in c2)
        c2.selectionStart = b2, c2.selectionEnd = Math.min(a2, c2.value.length);
      else if (a2 = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a2.getSelection) {
        a2 = a2.getSelection();
        var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
        d2 = void 0 === d2.end ? f2 : Math.min(d2.end, e2);
        !a2.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
        e2 = Ke$1(c2, f2);
        var g2 = Ke$1(
          c2,
          d2
        );
        e2 && g2 && (1 !== a2.rangeCount || a2.anchorNode !== e2.node || a2.anchorOffset !== e2.offset || a2.focusNode !== g2.node || a2.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a2.removeAllRanges(), f2 > d2 ? (a2.addRange(b2), a2.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a2.addRange(b2)));
      }
    }
    b2 = [];
    for (a2 = c2; a2 = a2.parentNode; )
      1 === a2.nodeType && b2.push({ element: a2, left: a2.scrollLeft, top: a2.scrollTop });
    "function" === typeof c2.focus && c2.focus();
    for (c2 = 0; c2 < b2.length; c2++)
      a2 = b2[c2], a2.element.scrollLeft = a2.left, a2.element.scrollTop = a2.top;
  }
}
var Pe$1 = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re$2 = null, Se$2 = null, Te = false;
function Ue$1(a2, b2, c2) {
  var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
  Te || null == Qe || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Ne$2(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se$2 && Ie$1(Se$2, d2) || (Se$2 = d2, d2 = oe$1(Re$2, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a2.push({ event: b2, listeners: d2 }), b2.target = Qe)));
}
function Ve$1(a2, b2) {
  var c2 = {};
  c2[a2.toLowerCase()] = b2.toLowerCase();
  c2["Webkit" + a2] = "webkit" + b2;
  c2["Moz" + a2] = "moz" + b2;
  return c2;
}
var We$1 = { animationend: Ve$1("Animation", "AnimationEnd"), animationiteration: Ve$1("Animation", "AnimationIteration"), animationstart: Ve$1("Animation", "AnimationStart"), transitionend: Ve$1("Transition", "TransitionEnd") }, Xe$1 = {}, Ye$1 = {};
ia && (Ye$1 = document.createElement("div").style, "AnimationEvent" in window || (delete We$1.animationend.animation, delete We$1.animationiteration.animation, delete We$1.animationstart.animation), "TransitionEvent" in window || delete We$1.transitionend.transition);
function Ze(a2) {
  if (Xe$1[a2])
    return Xe$1[a2];
  if (!We$1[a2])
    return a2;
  var b2 = We$1[a2], c2;
  for (c2 in b2)
    if (b2.hasOwnProperty(c2) && c2 in Ye$1)
      return Xe$1[a2] = b2[c2];
  return a2;
}
var $e$1 = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a2, b2) {
  df.set(a2, b2);
  fa(b2, [a2]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e$1, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a2, b2, c2) {
  var d2 = a2.type || "unknown-event";
  a2.currentTarget = c2;
  Ub(d2, b2, void 0, a2);
  a2.currentTarget = null;
}
function se(a2, b2) {
  b2 = 0 !== (b2 & 4);
  for (var c2 = 0; c2 < a2.length; c2++) {
    var d2 = a2[c2], e2 = d2.event;
    d2 = d2.listeners;
    a: {
      var f2 = void 0;
      if (b2)
        for (var g2 = d2.length - 1; 0 <= g2; g2--) {
          var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          nf(e2, h2, l2);
          f2 = k2;
        }
      else
        for (g2 = 0; g2 < d2.length; g2++) {
          h2 = d2[g2];
          k2 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          nf(e2, h2, l2);
          f2 = k2;
        }
    }
  }
  if (Qb)
    throw a2 = Rb, Qb = false, Rb = null, a2;
}
function D$3(a2, b2) {
  var c2 = b2[of];
  void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
  var d2 = a2 + "__bubble";
  c2.has(d2) || (pf(b2, a2, 2, false), c2.add(d2));
}
function qf(a2, b2, c2) {
  var d2 = 0;
  b2 && (d2 |= 4);
  pf(c2, a2, d2, b2);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a2) {
  if (!a2[rf]) {
    a2[rf] = true;
    da.forEach(function(b3) {
      "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a2), qf(b3, true, a2));
    });
    var b2 = 9 === a2.nodeType ? a2 : a2.ownerDocument;
    null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
  }
}
function pf(a2, b2, c2, d2) {
  switch (jd(b2)) {
    case 1:
      var e2 = ed;
      break;
    case 4:
      e2 = gd;
      break;
    default:
      e2 = fd;
  }
  c2 = e2.bind(null, b2, c2, a2);
  e2 = void 0;
  !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
  d2 ? void 0 !== e2 ? a2.addEventListener(b2, c2, { capture: true, passive: e2 }) : a2.addEventListener(b2, c2, true) : void 0 !== e2 ? a2.addEventListener(b2, c2, { passive: e2 }) : a2.addEventListener(b2, c2, false);
}
function hd(a2, b2, c2, d2, e2) {
  var f2 = d2;
  if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2)
    a:
      for (; ; ) {
        if (null === d2)
          return;
        var g2 = d2.tag;
        if (3 === g2 || 4 === g2) {
          var h2 = d2.stateNode.containerInfo;
          if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2)
            break;
          if (4 === g2)
            for (g2 = d2.return; null !== g2; ) {
              var k2 = g2.tag;
              if (3 === k2 || 4 === k2) {
                if (k2 = g2.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2)
                  return;
              }
              g2 = g2.return;
            }
          for (; null !== h2; ) {
            g2 = Wc(h2);
            if (null === g2)
              return;
            k2 = g2.tag;
            if (5 === k2 || 6 === k2) {
              d2 = f2 = g2;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d2 = d2.return;
      }
  Jb(function() {
    var d3 = f2, e3 = xb(c2), g3 = [];
    a: {
      var h3 = df.get(a2);
      if (void 0 !== h3) {
        var k3 = td, n2 = a2;
        switch (a2) {
          case "keypress":
            if (0 === od(c2))
              break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c2.button)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e$1:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a2, x2 = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
        t2 = [];
        for (var w2 = d3, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2)
            break;
          w2 = w2.return;
        }
        0 < t2.length && (h3 = new k3(h3, n2, null, c2, e3), g3.push({ event: h3, listeners: t2 }));
      }
    }
    if (0 === (b2 & 7)) {
      a: {
        h3 = "mouseover" === a2 || "pointerover" === a2;
        k3 = "mouseout" === a2 || "pointerout" === a2;
        if (h3 && c2 !== wb && (n2 = c2.relatedTarget || c2.fromElement) && (Wc(n2) || n2[uf]))
          break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (n2 = c2.relatedTarget || c2.toElement, k3 = d3, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag))
              n2 = null;
          } else
            k3 = null, n2 = d3;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a2 || "pointerover" === a2)
              t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h3 : ue(k3);
            u2 = null == n2 ? h3 : ue(n2);
            h3 = new t2(F2, w2 + "leave", k3, c2, e3);
            h3.target = J2;
            h3.relatedTarget = u2;
            F2 = null;
            Wc(e3) === d3 && (t2 = new t2(x2, w2 + "enter", n2, c2, e3), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2)
              b: {
                t2 = k3;
                x2 = n2;
                w2 = 0;
                for (u2 = t2; u2; u2 = vf(u2))
                  w2++;
                u2 = 0;
                for (F2 = x2; F2; F2 = vf(F2))
                  u2++;
                for (; 0 < w2 - u2; )
                  t2 = vf(t2), w2--;
                for (; 0 < u2 - w2; )
                  x2 = vf(x2), u2--;
                for (; w2--; ) {
                  if (t2 === x2 || null !== x2 && t2 === x2.alternate)
                    break b;
                  t2 = vf(t2);
                  x2 = vf(x2);
                }
                t2 = null;
              }
            else
              t2 = null;
            null !== k3 && wf(g3, h3, k3, t2, false);
            null !== n2 && null !== J2 && wf(g3, J2, n2, t2, true);
          }
        }
      }
      a: {
        h3 = d3 ? ue(d3) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h3.type)
          var na = ve;
        else if (me(h3))
          if (we$1)
            na = Fe$1;
          else {
            na = De$1;
            var xa = Ce$1;
          }
        else
          (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee$1);
        if (na && (na = na(a2, d3))) {
          ne$1(g3, na, c2, e3);
          break a;
        }
        xa && xa(a2, h3, d3);
        "focusout" === a2 && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
      }
      xa = d3 ? ue(d3) : window;
      switch (a2) {
        case "focusin":
          if (me(xa) || "true" === xa.contentEditable)
            Qe = xa, Re$2 = d3, Se$2 = null;
          break;
        case "focusout":
          Se$2 = Re$2 = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue$1(g3, c2, e3);
          break;
        case "selectionchange":
          if (Pe$1)
            break;
        case "keydown":
        case "keyup":
          Ue$1(g3, c2, e3);
      }
      var $a;
      if (ae)
        b: {
          switch (a2) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
      else
        ie$1 ? ge(a2, c2) && (ba = "onCompositionEnd") : "keydown" === a2 && 229 === c2.keyCode && (ba = "onCompositionStart");
      ba && (de && "ko" !== c2.locale && (ie$1 || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie$1 && ($a = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie$1 = true)), xa = oe$1(d3, ba), 0 < xa.length && (ba = new Ld(ba, a2, null, c2, e3), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c2), null !== $a && (ba.data = $a))));
      if ($a = ce ? je$1(a2, c2) : ke$1(a2, c2))
        d3 = oe$1(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = $a);
    }
    se(g3, b2);
  });
}
function tf(a2, b2, c2) {
  return { instance: a2, listener: b2, currentTarget: c2 };
}
function oe$1(a2, b2) {
  for (var c2 = b2 + "Capture", d2 = []; null !== a2; ) {
    var e2 = a2, f2 = e2.stateNode;
    5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a2, c2), null != f2 && d2.unshift(tf(a2, f2, e2)), f2 = Kb(a2, b2), null != f2 && d2.push(tf(a2, f2, e2)));
    a2 = a2.return;
  }
  return d2;
}
function vf(a2) {
  if (null === a2)
    return null;
  do
    a2 = a2.return;
  while (a2 && 5 !== a2.tag);
  return a2 ? a2 : null;
}
function wf(a2, b2, c2, d2, e2) {
  for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
    var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
    if (null !== k2 && k2 === d2)
      break;
    5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Kb(c2, f2), null != k2 && g2.unshift(tf(c2, k2, h2))) : e2 || (k2 = Kb(c2, f2), null != k2 && g2.push(tf(c2, k2, h2))));
    c2 = c2.return;
  }
  0 !== g2.length && a2.push({ event: b2, listeners: g2 });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a2) {
  return ("string" === typeof a2 ? a2 : "" + a2).replace(xf, "\n").replace(yf, "");
}
function Af(a2, b2, c2) {
  b2 = zf(b2);
  if (zf(a2) !== b2 && c2)
    throw Error(p$c(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a2, b2) {
  return "textarea" === a2 || "noscript" === a2 || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a2) {
  return Hf.resolve(null).then(a2).catch(If);
} : Ff;
function If(a2) {
  setTimeout(function() {
    throw a2;
  });
}
function Kf(a2, b2) {
  var c2 = b2, d2 = 0;
  do {
    var e2 = c2.nextSibling;
    a2.removeChild(c2);
    if (e2 && 8 === e2.nodeType)
      if (c2 = e2.data, "/$" === c2) {
        if (0 === d2) {
          a2.removeChild(e2);
          bd(b2);
          return;
        }
        d2--;
      } else
        "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
    c2 = e2;
  } while (c2);
  bd(b2);
}
function Lf(a2) {
  for (; null != a2; a2 = a2.nextSibling) {
    var b2 = a2.nodeType;
    if (1 === b2 || 3 === b2)
      break;
    if (8 === b2) {
      b2 = a2.data;
      if ("$" === b2 || "$!" === b2 || "$?" === b2)
        break;
      if ("/$" === b2)
        return null;
    }
  }
  return a2;
}
function Mf(a2) {
  a2 = a2.previousSibling;
  for (var b2 = 0; a2; ) {
    if (8 === a2.nodeType) {
      var c2 = a2.data;
      if ("$" === c2 || "$!" === c2 || "$?" === c2) {
        if (0 === b2)
          return a2;
        b2--;
      } else
        "/$" === c2 && b2++;
    }
    a2 = a2.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a2) {
  var b2 = a2[Of];
  if (b2)
    return b2;
  for (var c2 = a2.parentNode; c2; ) {
    if (b2 = c2[uf] || c2[Of]) {
      c2 = b2.alternate;
      if (null !== b2.child || null !== c2 && null !== c2.child)
        for (a2 = Mf(a2); null !== a2; ) {
          if (c2 = a2[Of])
            return c2;
          a2 = Mf(a2);
        }
      return b2;
    }
    a2 = c2;
    c2 = a2.parentNode;
  }
  return null;
}
function Cb(a2) {
  a2 = a2[Of] || a2[uf];
  return !a2 || 5 !== a2.tag && 6 !== a2.tag && 13 !== a2.tag && 3 !== a2.tag ? null : a2;
}
function ue(a2) {
  if (5 === a2.tag || 6 === a2.tag)
    return a2.stateNode;
  throw Error(p$c(33));
}
function Db(a2) {
  return a2[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a2) {
  return { current: a2 };
}
function E$2(a2) {
  0 > Tf || (a2.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G$1(a2, b2) {
  Tf++;
  Sf[Tf] = a2.current;
  a2.current = b2;
}
var Vf = {}, H$3 = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a2, b2) {
  var c2 = a2.type.contextTypes;
  if (!c2)
    return Vf;
  var d2 = a2.stateNode;
  if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2)
    return d2.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c2)
    e2[f2] = b2[f2];
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Zf(a2) {
  a2 = a2.childContextTypes;
  return null !== a2 && void 0 !== a2;
}
function $f() {
  E$2(Wf);
  E$2(H$3);
}
function ag(a2, b2, c2) {
  if (H$3.current !== Vf)
    throw Error(p$c(168));
  G$1(H$3, b2);
  G$1(Wf, c2);
}
function bg(a2, b2, c2) {
  var d2 = a2.stateNode;
  b2 = b2.childContextTypes;
  if ("function" !== typeof d2.getChildContext)
    return c2;
  d2 = d2.getChildContext();
  for (var e2 in d2)
    if (!(e2 in b2))
      throw Error(p$c(108, Ra(a2) || "Unknown", e2));
  return A$3({}, c2, d2);
}
function cg(a2) {
  a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H$3.current;
  G$1(H$3, a2);
  G$1(Wf, Wf.current);
  return true;
}
function dg(a2, b2, c2) {
  var d2 = a2.stateNode;
  if (!d2)
    throw Error(p$c(169));
  c2 ? (a2 = bg(a2, b2, Xf), d2.__reactInternalMemoizedMergedChildContext = a2, E$2(Wf), E$2(H$3), G$1(H$3, a2)) : E$2(Wf);
  G$1(Wf, c2);
}
var eg = null, fg = false, gg = false;
function hg(a2) {
  null === eg ? eg = [a2] : eg.push(a2);
}
function ig(a2) {
  fg = true;
  hg(a2);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a2 = 0, b2 = C$1;
    try {
      var c2 = eg;
      for (C$1 = 1; a2 < c2.length; a2++) {
        var d2 = c2[a2];
        do
          d2 = d2(true);
        while (null !== d2);
      }
      eg = null;
      fg = false;
    } catch (e2) {
      throw null !== eg && (eg = eg.slice(a2 + 1)), ac(fc, jg), e2;
    } finally {
      C$1 = b2, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a2, b2) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a2;
  ng = b2;
}
function ug(a2, b2, c2) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a2;
  var d2 = rg;
  a2 = sg;
  var e2 = 32 - oc(d2) - 1;
  d2 &= ~(1 << e2);
  c2 += 1;
  var f2 = 32 - oc(b2) + e2;
  if (30 < f2) {
    var g2 = e2 - e2 % 5;
    f2 = (d2 & (1 << g2) - 1).toString(32);
    d2 >>= g2;
    e2 -= g2;
    rg = 1 << 32 - oc(b2) + e2 | c2 << e2 | d2;
    sg = f2 + a2;
  } else
    rg = 1 << f2 | c2 << e2 | d2, sg = a2;
}
function vg(a2) {
  null !== a2.return && (tg(a2, 1), ug(a2, 1, 0));
}
function wg(a2) {
  for (; a2 === mg; )
    mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a2 === qg; )
    qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I$4 = false, zg = null;
function Ag(a2, b2) {
  var c2 = Bg(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.stateNode = b2;
  c2.return = a2;
  b2 = a2.deletions;
  null === b2 ? (a2.deletions = [c2], a2.flags |= 16) : b2.push(c2);
}
function Cg(a2, b2) {
  switch (a2.tag) {
    case 5:
      var c2 = a2.type;
      b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return null !== b2 ? (a2.stateNode = b2, xg = a2, yg = Lf(b2.firstChild), true) : false;
    case 6:
      return b2 = "" === a2.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a2.stateNode = b2, xg = a2, yg = null, true) : false;
    case 13:
      return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a2.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a2, a2.child = c2, xg = a2, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a2) {
  return 0 !== (a2.mode & 1) && 0 === (a2.flags & 128);
}
function Eg(a2) {
  if (I$4) {
    var b2 = yg;
    if (b2) {
      var c2 = b2;
      if (!Cg(a2, b2)) {
        if (Dg(a2))
          throw Error(p$c(418));
        b2 = Lf(c2.nextSibling);
        var d2 = xg;
        b2 && Cg(a2, b2) ? Ag(d2, c2) : (a2.flags = a2.flags & -4097 | 2, I$4 = false, xg = a2);
      }
    } else {
      if (Dg(a2))
        throw Error(p$c(418));
      a2.flags = a2.flags & -4097 | 2;
      I$4 = false;
      xg = a2;
    }
  }
}
function Fg(a2) {
  for (a2 = a2.return; null !== a2 && 5 !== a2.tag && 3 !== a2.tag && 13 !== a2.tag; )
    a2 = a2.return;
  xg = a2;
}
function Gg(a2) {
  if (a2 !== xg)
    return false;
  if (!I$4)
    return Fg(a2), I$4 = true, false;
  var b2;
  (b2 = 3 !== a2.tag) && !(b2 = 5 !== a2.tag) && (b2 = a2.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a2.type, a2.memoizedProps));
  if (b2 && (b2 = yg)) {
    if (Dg(a2))
      throw Hg(), Error(p$c(418));
    for (; b2; )
      Ag(a2, b2), b2 = Lf(b2.nextSibling);
  }
  Fg(a2);
  if (13 === a2.tag) {
    a2 = a2.memoizedState;
    a2 = null !== a2 ? a2.dehydrated : null;
    if (!a2)
      throw Error(p$c(317));
    a: {
      a2 = a2.nextSibling;
      for (b2 = 0; a2; ) {
        if (8 === a2.nodeType) {
          var c2 = a2.data;
          if ("/$" === c2) {
            if (0 === b2) {
              yg = Lf(a2.nextSibling);
              break a;
            }
            b2--;
          } else
            "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
        }
        a2 = a2.nextSibling;
      }
      yg = null;
    }
  } else
    yg = xg ? Lf(a2.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a2 = yg; a2; )
    a2 = Lf(a2.nextSibling);
}
function Ig() {
  yg = xg = null;
  I$4 = false;
}
function Jg(a2) {
  null === zg ? zg = [a2] : zg.push(a2);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a2, b2) {
  if (a2 && a2.defaultProps) {
    b2 = A$3({}, b2);
    a2 = a2.defaultProps;
    for (var c2 in a2)
      void 0 === b2[c2] && (b2[c2] = a2[c2]);
    return b2;
  }
  return b2;
}
var Mg = Uf(null), Ng = null, Og = null, Pg = null;
function Qg() {
  Pg = Og = Ng = null;
}
function Rg(a2) {
  var b2 = Mg.current;
  E$2(Mg);
  a2._currentValue = b2;
}
function Sg(a2, b2, c2) {
  for (; null !== a2; ) {
    var d2 = a2.alternate;
    (a2.childLanes & b2) !== b2 ? (a2.childLanes |= b2, null !== d2 && (d2.childLanes |= b2)) : null !== d2 && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
    if (a2 === c2)
      break;
    a2 = a2.return;
  }
}
function Tg(a2, b2) {
  Ng = a2;
  Pg = Og = null;
  a2 = a2.dependencies;
  null !== a2 && null !== a2.firstContext && (0 !== (a2.lanes & b2) && (Ug = true), a2.firstContext = null);
}
function Vg(a2) {
  var b2 = a2._currentValue;
  if (Pg !== a2)
    if (a2 = { context: a2, memoizedValue: b2, next: null }, null === Og) {
      if (null === Ng)
        throw Error(p$c(308));
      Og = a2;
      Ng.dependencies = { lanes: 0, firstContext: a2 };
    } else
      Og = Og.next = a2;
  return b2;
}
var Wg = null;
function Xg(a2) {
  null === Wg ? Wg = [a2] : Wg.push(a2);
}
function Yg(a2, b2, c2, d2) {
  var e2 = b2.interleaved;
  null === e2 ? (c2.next = c2, Xg(b2)) : (c2.next = e2.next, e2.next = c2);
  b2.interleaved = c2;
  return Zg(a2, d2);
}
function Zg(a2, b2) {
  a2.lanes |= b2;
  var c2 = a2.alternate;
  null !== c2 && (c2.lanes |= b2);
  c2 = a2;
  for (a2 = a2.return; null !== a2; )
    a2.childLanes |= b2, c2 = a2.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a2, a2 = a2.return;
  return 3 === c2.tag ? c2.stateNode : null;
}
var $g = false;
function ah(a2) {
  a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function bh(a2, b2) {
  a2 = a2.updateQueue;
  b2.updateQueue === a2 && (b2.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
}
function ch(a2, b2) {
  return { eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function dh(a2, b2, c2) {
  var d2 = a2.updateQueue;
  if (null === d2)
    return null;
  d2 = d2.shared;
  if (0 !== (K & 2)) {
    var e2 = d2.pending;
    null === e2 ? b2.next = b2 : (b2.next = e2.next, e2.next = b2);
    d2.pending = b2;
    return Zg(a2, c2);
  }
  e2 = d2.interleaved;
  null === e2 ? (b2.next = b2, Xg(d2)) : (b2.next = e2.next, e2.next = b2);
  d2.interleaved = b2;
  return Zg(a2, c2);
}
function eh(a2, b2, c2) {
  b2 = b2.updateQueue;
  if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
    var d2 = b2.lanes;
    d2 &= a2.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Cc(a2, c2);
  }
}
function fh(a2, b2) {
  var c2 = a2.updateQueue, d2 = a2.alternate;
  if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
    var e2 = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (null !== c2) {
      do {
        var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
        null === f2 ? e2 = f2 = g2 : f2 = f2.next = g2;
        c2 = c2.next;
      } while (null !== c2);
      null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
    } else
      e2 = f2 = b2;
    c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
    a2.updateQueue = c2;
    return;
  }
  a2 = c2.lastBaseUpdate;
  null === a2 ? c2.firstBaseUpdate = b2 : a2.next = b2;
  c2.lastBaseUpdate = b2;
}
function gh(a2, b2, c2, d2) {
  var e2 = a2.updateQueue;
  $g = false;
  var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (null !== h2) {
    e2.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    null === g2 ? f2 = l2 : g2.next = l2;
    g2 = k2;
    var m2 = a2.alternate;
    null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g2 && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e2.baseState;
    g2 = 0;
    m2 = l2 = k2 = null;
    h2 = f2;
    do {
      var r2 = h2.lane, y2 = h2.eventTime;
      if ((d2 & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h2.tag,
          payload: h2.payload,
          callback: h2.callback,
          next: null
        });
        a: {
          var n2 = a2, t2 = h2;
          r2 = b2;
          y2 = c2;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2)
                break a;
              q2 = A$3({}, q2, r2);
              break a;
            case 2:
              $g = true;
          }
        }
        null !== h2.callback && 0 !== h2.lane && (a2.flags |= 64, r2 = e2.effects, null === r2 ? e2.effects = [h2] : r2.push(h2));
      } else
        y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g2 |= r2;
      h2 = h2.next;
      if (null === h2)
        if (h2 = e2.shared.pending, null === h2)
          break;
        else
          r2 = h2, h2 = r2.next, r2.next = null, e2.lastBaseUpdate = r2, e2.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l2;
    e2.lastBaseUpdate = m2;
    b2 = e2.shared.interleaved;
    if (null !== b2) {
      e2 = b2;
      do
        g2 |= e2.lane, e2 = e2.next;
      while (e2 !== b2);
    } else
      null === f2 && (e2.shared.lanes = 0);
    hh |= g2;
    a2.lanes = g2;
    a2.memoizedState = q2;
  }
}
function ih(a2, b2, c2) {
  a2 = b2.effects;
  b2.effects = null;
  if (null !== a2)
    for (b2 = 0; b2 < a2.length; b2++) {
      var d2 = a2[b2], e2 = d2.callback;
      if (null !== e2) {
        d2.callback = null;
        d2 = c2;
        if ("function" !== typeof e2)
          throw Error(p$c(191, e2));
        e2.call(d2);
      }
    }
}
var jh = new aa.Component().refs;
function kh(a2, b2, c2, d2) {
  b2 = a2.memoizedState;
  c2 = c2(d2, b2);
  c2 = null === c2 || void 0 === c2 ? b2 : A$3({}, b2, c2);
  a2.memoizedState = c2;
  0 === a2.lanes && (a2.updateQueue.baseState = c2);
}
var nh = { isMounted: function(a2) {
  return (a2 = a2._reactInternals) ? Vb(a2) === a2 : false;
}, enqueueSetState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = L$2(), e2 = lh(a2), f2 = ch(d2, e2);
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = dh(a2, f2, e2);
  null !== b2 && (mh(b2, a2, e2, d2), eh(b2, a2, e2));
}, enqueueReplaceState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = L$2(), e2 = lh(a2), f2 = ch(d2, e2);
  f2.tag = 1;
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = dh(a2, f2, e2);
  null !== b2 && (mh(b2, a2, e2, d2), eh(b2, a2, e2));
}, enqueueForceUpdate: function(a2, b2) {
  a2 = a2._reactInternals;
  var c2 = L$2(), d2 = lh(a2), e2 = ch(c2, d2);
  e2.tag = 2;
  void 0 !== b2 && null !== b2 && (e2.callback = b2);
  b2 = dh(a2, e2, d2);
  null !== b2 && (mh(b2, a2, d2, c2), eh(b2, a2, d2));
} };
function oh(a2, b2, c2, d2, e2, f2, g2) {
  a2 = a2.stateNode;
  return "function" === typeof a2.shouldComponentUpdate ? a2.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie$1(c2, d2) || !Ie$1(e2, f2) : true;
}
function ph(a2, b2, c2) {
  var d2 = false, e2 = Vf;
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = Vg(f2) : (e2 = Zf(b2) ? Xf : H$3.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a2, e2) : Vf);
  b2 = new b2(c2, f2);
  a2.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
  b2.updater = nh;
  a2.stateNode = b2;
  b2._reactInternals = a2;
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e2, a2.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function qh(a2, b2, c2, d2) {
  a2 = b2.state;
  "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
  "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
  b2.state !== a2 && nh.enqueueReplaceState(b2, b2.state, null);
}
function rh(a2, b2, c2, d2) {
  var e2 = a2.stateNode;
  e2.props = c2;
  e2.state = a2.memoizedState;
  e2.refs = jh;
  ah(a2);
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? e2.context = Vg(f2) : (f2 = Zf(b2) ? Xf : H$3.current, e2.context = Yf(a2, f2));
  e2.state = a2.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  "function" === typeof f2 && (kh(a2, b2, f2, c2), e2.state = a2.memoizedState);
  "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && nh.enqueueReplaceState(e2, e2.state, null), gh(a2, c2, e2, d2), e2.state = a2.memoizedState);
  "function" === typeof e2.componentDidMount && (a2.flags |= 4194308);
}
function sh(a2, b2, c2) {
  a2 = c2.ref;
  if (null !== a2 && "function" !== typeof a2 && "object" !== typeof a2) {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (1 !== c2.tag)
          throw Error(p$c(309));
        var d2 = c2.stateNode;
      }
      if (!d2)
        throw Error(p$c(147, a2));
      var e2 = d2, f2 = "" + a2;
      if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2)
        return b2.ref;
      b2 = function(a3) {
        var b3 = e2.refs;
        b3 === jh && (b3 = e2.refs = {});
        null === a3 ? delete b3[f2] : b3[f2] = a3;
      };
      b2._stringRef = f2;
      return b2;
    }
    if ("string" !== typeof a2)
      throw Error(p$c(284));
    if (!c2._owner)
      throw Error(p$c(290, a2));
  }
  return a2;
}
function th(a2, b2) {
  a2 = Object.prototype.toString.call(b2);
  throw Error(p$c(31, "[object Object]" === a2 ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a2));
}
function uh(a2) {
  var b2 = a2._init;
  return b2(a2._payload);
}
function vh(a2) {
  function b2(b3, c3) {
    if (a2) {
      var d3 = b3.deletions;
      null === d3 ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
    }
  }
  function c2(c3, d3) {
    if (!a2)
      return null;
    for (; null !== d3; )
      b2(c3, d3), d3 = d3.sibling;
    return null;
  }
  function d2(a3, b3) {
    for (a3 = /* @__PURE__ */ new Map(); null !== b3; )
      null !== b3.key ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
    return a3;
  }
  function e2(a3, b3) {
    a3 = wh(a3, b3);
    a3.index = 0;
    a3.sibling = null;
    return a3;
  }
  function f2(b3, c3, d3) {
    b3.index = d3;
    if (!a2)
      return b3.flags |= 1048576, c3;
    d3 = b3.alternate;
    if (null !== d3)
      return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
    b3.flags |= 2;
    return c3;
  }
  function g2(b3) {
    a2 && null === b3.alternate && (b3.flags |= 2);
    return b3;
  }
  function h2(a3, b3, c3, d3) {
    if (null === b3 || 6 !== b3.tag)
      return b3 = xh(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function k2(a3, b3, c3, d3) {
    var f3 = c3.type;
    if (f3 === ya)
      return m2(a3, b3, c3.props.children, d3, c3.key);
    if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && uh(f3) === b3.type))
      return d3 = e2(b3, c3.props), d3.ref = sh(a3, b3, c3), d3.return = a3, d3;
    d3 = yh(c3.type, c3.key, c3.props, null, a3.mode, d3);
    d3.ref = sh(a3, b3, c3);
    d3.return = a3;
    return d3;
  }
  function l2(a3, b3, c3, d3) {
    if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation)
      return b3 = zh(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3.children || []);
    b3.return = a3;
    return b3;
  }
  function m2(a3, b3, c3, d3, f3) {
    if (null === b3 || 7 !== b3.tag)
      return b3 = Ah(c3, a3.mode, d3, f3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function q2(a3, b3, c3) {
    if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3)
      return b3 = xh("" + b3, a3.mode, c3), b3.return = a3, b3;
    if ("object" === typeof b3 && null !== b3) {
      switch (b3.$$typeof) {
        case va:
          return c3 = yh(b3.type, b3.key, b3.props, null, a3.mode, c3), c3.ref = sh(a3, null, b3), c3.return = a3, c3;
        case wa:
          return b3 = zh(b3, a3.mode, c3), b3.return = a3, b3;
        case Ha:
          var d3 = b3._init;
          return q2(a3, d3(b3._payload), c3);
      }
      if (eb(b3) || Ka(b3))
        return b3 = Ah(b3, a3.mode, c3, null), b3.return = a3, b3;
      th(a3, b3);
    }
    return null;
  }
  function r2(a3, b3, c3, d3) {
    var e3 = null !== b3 ? b3.key : null;
    if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3)
      return null !== e3 ? null : h2(a3, b3, "" + c3, d3);
    if ("object" === typeof c3 && null !== c3) {
      switch (c3.$$typeof) {
        case va:
          return c3.key === e3 ? k2(a3, b3, c3, d3) : null;
        case wa:
          return c3.key === e3 ? l2(a3, b3, c3, d3) : null;
        case Ha:
          return e3 = c3._init, r2(
            a3,
            b3,
            e3(c3._payload),
            d3
          );
      }
      if (eb(c3) || Ka(c3))
        return null !== e3 ? null : m2(a3, b3, c3, d3, null);
      th(a3, c3);
    }
    return null;
  }
  function y2(a3, b3, c3, d3, e3) {
    if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3)
      return a3 = a3.get(c3) || null, h2(b3, a3, "" + d3, e3);
    if ("object" === typeof d3 && null !== d3) {
      switch (d3.$$typeof) {
        case va:
          return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, k2(b3, a3, d3, e3);
        case wa:
          return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a3, d3, e3);
        case Ha:
          var f3 = d3._init;
          return y2(a3, b3, c3, f3(d3._payload), e3);
      }
      if (eb(d3) || Ka(d3))
        return a3 = a3.get(c3) || null, m2(b3, a3, d3, e3, null);
      th(b3, d3);
    }
    return null;
  }
  function n2(e3, g3, h3, k3) {
    for (var l3 = null, m3 = null, u2 = g3, w2 = g3 = 0, x2 = null; null !== u2 && w2 < h3.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e3, u2, h3[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a2 && u2 && null === n3.alternate && b2(e3, u2);
      g3 = f2(n3, g3, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h3.length)
      return c2(e3, u2), I$4 && tg(e3, w2), l3;
    if (null === u2) {
      for (; w2 < h3.length; w2++)
        u2 = q2(e3, h3[w2], k3), null !== u2 && (g3 = f2(u2, g3, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I$4 && tg(e3, w2);
      return l3;
    }
    for (u2 = d2(e3, u2); w2 < h3.length; w2++)
      x2 = y2(u2, e3, w2, h3[w2], k3), null !== x2 && (a2 && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g3 = f2(x2, g3, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a2 && u2.forEach(function(a3) {
      return b2(e3, a3);
    });
    I$4 && tg(e3, w2);
    return l3;
  }
  function t2(e3, g3, h3, k3) {
    var l3 = Ka(h3);
    if ("function" !== typeof l3)
      throw Error(p$c(150));
    h3 = l3.call(h3);
    if (null == h3)
      throw Error(p$c(151));
    for (var u2 = l3 = null, m3 = g3, w2 = g3 = 0, x2 = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e3, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a2 && m3 && null === t3.alternate && b2(e3, m3);
      g3 = f2(t3, g3, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done)
      return c2(
        e3,
        m3
      ), I$4 && tg(e3, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h3.next())
        n3 = q2(e3, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I$4 && tg(e3, w2);
      return l3;
    }
    for (m3 = d2(e3, m3); !n3.done; w2++, n3 = h3.next())
      n3 = y2(m3, e3, w2, n3.value, k3), null !== n3 && (a2 && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a2 && m3.forEach(function(a3) {
      return b2(e3, a3);
    });
    I$4 && tg(e3, w2);
    return l3;
  }
  function J2(a3, d3, f3, h3) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l3 = d3; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c2(a3, l3.sibling);
                    d3 = e2(l3, f3.props.children);
                    d3.return = a3;
                    a3 = d3;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && uh(k3) === l3.type) {
                  c2(a3, l3.sibling);
                  d3 = e2(l3, f3.props);
                  d3.ref = sh(a3, l3, f3);
                  d3.return = a3;
                  a3 = d3;
                  break a;
                }
                c2(a3, l3);
                break;
              } else
                b2(a3, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d3 = Ah(f3.props.children, a3.mode, h3, f3.key), d3.return = a3, a3 = d3) : (h3 = yh(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = sh(a3, d3, f3), h3.return = a3, a3 = h3);
          }
          return g2(a3);
        case wa:
          a: {
            for (l3 = f3.key; null !== d3; ) {
              if (d3.key === l3)
                if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                  c2(a3, d3.sibling);
                  d3 = e2(d3, f3.children || []);
                  d3.return = a3;
                  a3 = d3;
                  break a;
                } else {
                  c2(a3, d3);
                  break;
                }
              else
                b2(a3, d3);
              d3 = d3.sibling;
            }
            d3 = zh(f3, a3.mode, h3);
            d3.return = a3;
            a3 = d3;
          }
          return g2(a3);
        case Ha:
          return l3 = f3._init, J2(a3, d3, l3(f3._payload), h3);
      }
      if (eb(f3))
        return n2(a3, d3, f3, h3);
      if (Ka(f3))
        return t2(a3, d3, f3, h3);
      th(a3, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a3, d3.sibling), d3 = e2(d3, f3), d3.return = a3, a3 = d3) : (c2(a3, d3), d3 = xh(f3, a3.mode, h3), d3.return = a3, a3 = d3), g2(a3)) : c2(a3, d3);
  }
  return J2;
}
var Bh = vh(true), Ch = vh(false), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
function Hh(a2) {
  if (a2 === Dh)
    throw Error(p$c(174));
  return a2;
}
function Ih(a2, b2) {
  G$1(Gh, b2);
  G$1(Fh, a2);
  G$1(Eh, Dh);
  a2 = b2.nodeType;
  switch (a2) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
      break;
    default:
      a2 = 8 === a2 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = lb(b2, a2);
  }
  E$2(Eh);
  G$1(Eh, b2);
}
function Jh() {
  E$2(Eh);
  E$2(Fh);
  E$2(Gh);
}
function Kh(a2) {
  Hh(Gh.current);
  var b2 = Hh(Eh.current);
  var c2 = lb(b2, a2.type);
  b2 !== c2 && (G$1(Fh, a2), G$1(Eh, c2));
}
function Lh(a2) {
  Fh.current === a2 && (E$2(Eh), E$2(Fh));
}
var M$6 = Uf(0);
function Mh(a2) {
  for (var b2 = a2; null !== b2; ) {
    if (13 === b2.tag) {
      var c2 = b2.memoizedState;
      if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data))
        return b2;
    } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
      if (0 !== (b2.flags & 128))
        return b2;
    } else if (null !== b2.child) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a2)
      break;
    for (; null === b2.sibling; ) {
      if (null === b2.return || b2.return === a2)
        return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var Nh = [];
function Oh() {
  for (var a2 = 0; a2 < Nh.length; a2++)
    Nh[a2]._workInProgressVersionPrimary = null;
  Nh.length = 0;
}
var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N$3 = null, O$3 = null, P$3 = null, Sh = false, Th = false, Uh = 0, Vh = 0;
function Q$2() {
  throw Error(p$c(321));
}
function Wh(a2, b2) {
  if (null === b2)
    return false;
  for (var c2 = 0; c2 < b2.length && c2 < a2.length; c2++)
    if (!He$2(a2[c2], b2[c2]))
      return false;
  return true;
}
function Xh(a2, b2, c2, d2, e2, f2) {
  Rh = f2;
  N$3 = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  Ph.current = null === a2 || null === a2.memoizedState ? Yh : Zh;
  a2 = c2(d2, e2);
  if (Th) {
    f2 = 0;
    do {
      Th = false;
      Uh = 0;
      if (25 <= f2)
        throw Error(p$c(301));
      f2 += 1;
      P$3 = O$3 = null;
      b2.updateQueue = null;
      Ph.current = $h;
      a2 = c2(d2, e2);
    } while (Th);
  }
  Ph.current = ai;
  b2 = null !== O$3 && null !== O$3.next;
  Rh = 0;
  P$3 = O$3 = N$3 = null;
  Sh = false;
  if (b2)
    throw Error(p$c(300));
  return a2;
}
function bi() {
  var a2 = 0 !== Uh;
  Uh = 0;
  return a2;
}
function ci() {
  var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === P$3 ? N$3.memoizedState = P$3 = a2 : P$3 = P$3.next = a2;
  return P$3;
}
function di() {
  if (null === O$3) {
    var a2 = N$3.alternate;
    a2 = null !== a2 ? a2.memoizedState : null;
  } else
    a2 = O$3.next;
  var b2 = null === P$3 ? N$3.memoizedState : P$3.next;
  if (null !== b2)
    P$3 = b2, O$3 = a2;
  else {
    if (null === a2)
      throw Error(p$c(310));
    O$3 = a2;
    a2 = { memoizedState: O$3.memoizedState, baseState: O$3.baseState, baseQueue: O$3.baseQueue, queue: O$3.queue, next: null };
    null === P$3 ? N$3.memoizedState = P$3 = a2 : P$3 = P$3.next = a2;
  }
  return P$3;
}
function ei(a2, b2) {
  return "function" === typeof b2 ? b2(a2) : b2;
}
function fi(a2) {
  var b2 = di(), c2 = b2.queue;
  if (null === c2)
    throw Error(p$c(311));
  c2.lastRenderedReducer = a2;
  var d2 = O$3, e2 = d2.baseQueue, f2 = c2.pending;
  if (null !== f2) {
    if (null !== e2) {
      var g2 = e2.next;
      e2.next = f2.next;
      f2.next = g2;
    }
    d2.baseQueue = e2 = f2;
    c2.pending = null;
  }
  if (null !== e2) {
    f2 = e2.next;
    d2 = d2.baseState;
    var h2 = g2 = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Rh & m2) === m2)
        null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a2(d2, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h2 = k2 = q2, g2 = d2) : k2 = k2.next = q2;
        N$3.lanes |= m2;
        hh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g2 = d2 : k2.next = h2;
    He$2(d2, b2.memoizedState) || (Ug = true);
    b2.memoizedState = d2;
    b2.baseState = g2;
    b2.baseQueue = k2;
    c2.lastRenderedState = d2;
  }
  a2 = c2.interleaved;
  if (null !== a2) {
    e2 = a2;
    do
      f2 = e2.lane, N$3.lanes |= f2, hh |= f2, e2 = e2.next;
    while (e2 !== a2);
  } else
    null === e2 && (c2.lanes = 0);
  return [b2.memoizedState, c2.dispatch];
}
function gi(a2) {
  var b2 = di(), c2 = b2.queue;
  if (null === c2)
    throw Error(p$c(311));
  c2.lastRenderedReducer = a2;
  var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
  if (null !== e2) {
    c2.pending = null;
    var g2 = e2 = e2.next;
    do
      f2 = a2(f2, g2.action), g2 = g2.next;
    while (g2 !== e2);
    He$2(f2, b2.memoizedState) || (Ug = true);
    b2.memoizedState = f2;
    null === b2.baseQueue && (b2.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d2];
}
function hi() {
}
function ii(a2, b2) {
  var c2 = N$3, d2 = di(), e2 = b2(), f2 = !He$2(d2.memoizedState, e2);
  f2 && (d2.memoizedState = e2, Ug = true);
  d2 = d2.queue;
  ji(ki.bind(null, c2, d2, a2), [a2]);
  if (d2.getSnapshot !== b2 || f2 || null !== P$3 && P$3.memoizedState.tag & 1) {
    c2.flags |= 2048;
    li(9, mi.bind(null, c2, d2, e2, b2), void 0, null);
    if (null === R$2)
      throw Error(p$c(349));
    0 !== (Rh & 30) || ni(c2, b2, e2);
  }
  return e2;
}
function ni(a2, b2, c2) {
  a2.flags |= 16384;
  a2 = { getSnapshot: b2, value: c2 };
  b2 = N$3.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, N$3.updateQueue = b2, b2.stores = [a2]) : (c2 = b2.stores, null === c2 ? b2.stores = [a2] : c2.push(a2));
}
function mi(a2, b2, c2, d2) {
  b2.value = c2;
  b2.getSnapshot = d2;
  oi(b2) && pi(a2);
}
function ki(a2, b2, c2) {
  return c2(function() {
    oi(b2) && pi(a2);
  });
}
function oi(a2) {
  var b2 = a2.getSnapshot;
  a2 = a2.value;
  try {
    var c2 = b2();
    return !He$2(a2, c2);
  } catch (d2) {
    return true;
  }
}
function pi(a2) {
  var b2 = Zg(a2, 1);
  null !== b2 && mh(b2, a2, 1, -1);
}
function qi(a2) {
  var b2 = ci();
  "function" === typeof a2 && (a2 = a2());
  b2.memoizedState = b2.baseState = a2;
  a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a2 };
  b2.queue = a2;
  a2 = a2.dispatch = ri.bind(null, N$3, a2);
  return [b2.memoizedState, a2];
}
function li(a2, b2, c2, d2) {
  a2 = { tag: a2, create: b2, destroy: c2, deps: d2, next: null };
  b2 = N$3.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, N$3.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a2.next = a2 : (d2 = c2.next, c2.next = a2, a2.next = d2, b2.lastEffect = a2));
  return a2;
}
function si() {
  return di().memoizedState;
}
function ti(a2, b2, c2, d2) {
  var e2 = ci();
  N$3.flags |= a2;
  e2.memoizedState = li(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
}
function ui(a2, b2, c2, d2) {
  var e2 = di();
  d2 = void 0 === d2 ? null : d2;
  var f2 = void 0;
  if (null !== O$3) {
    var g2 = O$3.memoizedState;
    f2 = g2.destroy;
    if (null !== d2 && Wh(d2, g2.deps)) {
      e2.memoizedState = li(b2, c2, f2, d2);
      return;
    }
  }
  N$3.flags |= a2;
  e2.memoizedState = li(1 | b2, c2, f2, d2);
}
function vi(a2, b2) {
  return ti(8390656, 8, a2, b2);
}
function ji(a2, b2) {
  return ui(2048, 8, a2, b2);
}
function wi(a2, b2) {
  return ui(4, 2, a2, b2);
}
function xi(a2, b2) {
  return ui(4, 4, a2, b2);
}
function yi(a2, b2) {
  if ("function" === typeof b2)
    return a2 = a2(), b2(a2), function() {
      b2(null);
    };
  if (null !== b2 && void 0 !== b2)
    return a2 = a2(), b2.current = a2, function() {
      b2.current = null;
    };
}
function zi(a2, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
  return ui(4, 4, yi.bind(null, b2, a2), c2);
}
function Ai() {
}
function Bi(a2, b2) {
  var c2 = di();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Wh(b2, d2[1]))
    return d2[0];
  c2.memoizedState = [a2, b2];
  return a2;
}
function Ci(a2, b2) {
  var c2 = di();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Wh(b2, d2[1]))
    return d2[0];
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}
function Di(a2, b2, c2) {
  if (0 === (Rh & 21))
    return a2.baseState && (a2.baseState = false, Ug = true), a2.memoizedState = c2;
  He$2(c2, b2) || (c2 = yc(), N$3.lanes |= c2, hh |= c2, a2.baseState = true);
  return b2;
}
function Ei(a2, b2) {
  var c2 = C$1;
  C$1 = 0 !== c2 && 4 > c2 ? c2 : 4;
  a2(true);
  var d2 = Qh.transition;
  Qh.transition = {};
  try {
    a2(false), b2();
  } finally {
    C$1 = c2, Qh.transition = d2;
  }
}
function Fi() {
  return di().memoizedState;
}
function Gi(a2, b2, c2) {
  var d2 = lh(a2);
  c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a2))
    Ii(b2, c2);
  else if (c2 = Yg(a2, b2, c2, d2), null !== c2) {
    var e2 = L$2();
    mh(c2, a2, d2, e2);
    Ji(c2, b2, d2);
  }
}
function ri(a2, b2, c2) {
  var d2 = lh(a2), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a2))
    Ii(b2, e2);
  else {
    var f2 = a2.alternate;
    if (0 === a2.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2))
      try {
        var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
        e2.hasEagerState = true;
        e2.eagerState = h2;
        if (He$2(h2, g2)) {
          var k2 = b2.interleaved;
          null === k2 ? (e2.next = e2, Xg(b2)) : (e2.next = k2.next, k2.next = e2);
          b2.interleaved = e2;
          return;
        }
      } catch (l2) {
      } finally {
      }
    c2 = Yg(a2, b2, e2, d2);
    null !== c2 && (e2 = L$2(), mh(c2, a2, d2, e2), Ji(c2, b2, d2));
  }
}
function Hi(a2) {
  var b2 = a2.alternate;
  return a2 === N$3 || null !== b2 && b2 === N$3;
}
function Ii(a2, b2) {
  Th = Sh = true;
  var c2 = a2.pending;
  null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
  a2.pending = b2;
}
function Ji(a2, b2, c2) {
  if (0 !== (c2 & 4194240)) {
    var d2 = b2.lanes;
    d2 &= a2.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Cc(a2, c2);
  }
}
var ai = { readContext: Vg, useCallback: Q$2, useContext: Q$2, useEffect: Q$2, useImperativeHandle: Q$2, useInsertionEffect: Q$2, useLayoutEffect: Q$2, useMemo: Q$2, useReducer: Q$2, useRef: Q$2, useState: Q$2, useDebugValue: Q$2, useDeferredValue: Q$2, useTransition: Q$2, useMutableSource: Q$2, useSyncExternalStore: Q$2, useId: Q$2, unstable_isNewReconciler: false }, Yh = { readContext: Vg, useCallback: function(a2, b2) {
  ci().memoizedState = [a2, void 0 === b2 ? null : b2];
  return a2;
}, useContext: Vg, useEffect: vi, useImperativeHandle: function(a2, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
  return ti(
    4194308,
    4,
    yi.bind(null, b2, a2),
    c2
  );
}, useLayoutEffect: function(a2, b2) {
  return ti(4194308, 4, a2, b2);
}, useInsertionEffect: function(a2, b2) {
  return ti(4, 2, a2, b2);
}, useMemo: function(a2, b2) {
  var c2 = ci();
  b2 = void 0 === b2 ? null : b2;
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}, useReducer: function(a2, b2, c2) {
  var d2 = ci();
  b2 = void 0 !== c2 ? c2(b2) : b2;
  d2.memoizedState = d2.baseState = b2;
  a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2 };
  d2.queue = a2;
  a2 = a2.dispatch = Gi.bind(null, N$3, a2);
  return [d2.memoizedState, a2];
}, useRef: function(a2) {
  var b2 = ci();
  a2 = { current: a2 };
  return b2.memoizedState = a2;
}, useState: qi, useDebugValue: Ai, useDeferredValue: function(a2) {
  return ci().memoizedState = a2;
}, useTransition: function() {
  var a2 = qi(false), b2 = a2[0];
  a2 = Ei.bind(null, a2[1]);
  ci().memoizedState = a2;
  return [b2, a2];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a2, b2, c2) {
  var d2 = N$3, e2 = ci();
  if (I$4) {
    if (void 0 === c2)
      throw Error(p$c(407));
    c2 = c2();
  } else {
    c2 = b2();
    if (null === R$2)
      throw Error(p$c(349));
    0 !== (Rh & 30) || ni(d2, b2, c2);
  }
  e2.memoizedState = c2;
  var f2 = { value: c2, getSnapshot: b2 };
  e2.queue = f2;
  vi(ki.bind(
    null,
    d2,
    f2,
    a2
  ), [a2]);
  d2.flags |= 2048;
  li(9, mi.bind(null, d2, f2, c2, b2), void 0, null);
  return c2;
}, useId: function() {
  var a2 = ci(), b2 = R$2.identifierPrefix;
  if (I$4) {
    var c2 = sg;
    var d2 = rg;
    c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
    b2 = ":" + b2 + "R" + c2;
    c2 = Uh++;
    0 < c2 && (b2 += "H" + c2.toString(32));
    b2 += ":";
  } else
    c2 = Vh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
  return a2.memoizedState = b2;
}, unstable_isNewReconciler: false }, Zh = {
  readContext: Vg,
  useCallback: Bi,
  useContext: Vg,
  useEffect: ji,
  useImperativeHandle: zi,
  useInsertionEffect: wi,
  useLayoutEffect: xi,
  useMemo: Ci,
  useReducer: fi,
  useRef: si,
  useState: function() {
    return fi(ei);
  },
  useDebugValue: Ai,
  useDeferredValue: function(a2) {
    var b2 = di();
    return Di(b2, O$3.memoizedState, a2);
  },
  useTransition: function() {
    var a2 = fi(ei)[0], b2 = di().memoizedState;
    return [a2, b2];
  },
  useMutableSource: hi,
  useSyncExternalStore: ii,
  useId: Fi,
  unstable_isNewReconciler: false
}, $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
  return gi(ei);
}, useDebugValue: Ai, useDeferredValue: function(a2) {
  var b2 = di();
  return null === O$3 ? b2.memoizedState = a2 : Di(b2, O$3.memoizedState, a2);
}, useTransition: function() {
  var a2 = gi(ei)[0], b2 = di().memoizedState;
  return [a2, b2];
}, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
function Ki(a2, b2) {
  try {
    var c2 = "", d2 = b2;
    do
      c2 += Pa(d2), d2 = d2.return;
    while (d2);
    var e2 = c2;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a2, source: b2, stack: e2, digest: null };
}
function Li(a2, b2, c2) {
  return { value: a2, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
}
function Mi(a2, b2) {
  try {
    console.error(b2.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Ni = "function" === typeof WeakMap ? WeakMap : Map;
function Oi(a2, b2, c2) {
  c2 = ch(-1, c2);
  c2.tag = 3;
  c2.payload = { element: null };
  var d2 = b2.value;
  c2.callback = function() {
    Pi || (Pi = true, Qi = d2);
    Mi(a2, b2);
  };
  return c2;
}
function Ri(a2, b2, c2) {
  c2 = ch(-1, c2);
  c2.tag = 3;
  var d2 = a2.type.getDerivedStateFromError;
  if ("function" === typeof d2) {
    var e2 = b2.value;
    c2.payload = function() {
      return d2(e2);
    };
    c2.callback = function() {
      Mi(a2, b2);
    };
  }
  var f2 = a2.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
    Mi(a2, b2);
    "function" !== typeof d2 && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
    var c3 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
  });
  return c2;
}
function Ti(a2, b2, c2) {
  var d2 = a2.pingCache;
  if (null === d2) {
    d2 = a2.pingCache = new Ni();
    var e2 = /* @__PURE__ */ new Set();
    d2.set(b2, e2);
  } else
    e2 = d2.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d2.set(b2, e2));
  e2.has(c2) || (e2.add(c2), a2 = Ui.bind(null, a2, b2, c2), b2.then(a2, a2));
}
function Vi(a2) {
  do {
    var b2;
    if (b2 = 13 === a2.tag)
      b2 = a2.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
    if (b2)
      return a2;
    a2 = a2.return;
  } while (null !== a2);
  return null;
}
function Wi(a2, b2, c2, d2, e2) {
  if (0 === (a2.mode & 1))
    return a2 === b2 ? a2.flags |= 65536 : (a2.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = ch(-1, 1), b2.tag = 2, dh(c2, b2, 1))), c2.lanes |= 1), a2;
  a2.flags |= 65536;
  a2.lanes = e2;
  return a2;
}
var Xi = ua.ReactCurrentOwner, Ug = false;
function Yi(a2, b2, c2, d2) {
  b2.child = null === a2 ? Ch(b2, null, c2, d2) : Bh(b2, a2.child, c2, d2);
}
function Zi(a2, b2, c2, d2, e2) {
  c2 = c2.render;
  var f2 = b2.ref;
  Tg(b2, e2);
  d2 = Xh(a2, b2, c2, d2, f2, e2);
  c2 = bi();
  if (null !== a2 && !Ug)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, $i(a2, b2, e2);
  I$4 && c2 && vg(b2);
  b2.flags |= 1;
  Yi(a2, b2, d2, e2);
  return b2.child;
}
function aj(a2, b2, c2, d2, e2) {
  if (null === a2) {
    var f2 = c2.type;
    if ("function" === typeof f2 && !bj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps)
      return b2.tag = 15, b2.type = f2, cj(a2, b2, f2, d2, e2);
    a2 = yh(c2.type, null, d2, b2, b2.mode, e2);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  f2 = a2.child;
  if (0 === (a2.lanes & e2)) {
    var g2 = f2.memoizedProps;
    c2 = c2.compare;
    c2 = null !== c2 ? c2 : Ie$1;
    if (c2(g2, d2) && a2.ref === b2.ref)
      return $i(a2, b2, e2);
  }
  b2.flags |= 1;
  a2 = wh(f2, d2);
  a2.ref = b2.ref;
  a2.return = b2;
  return b2.child = a2;
}
function cj(a2, b2, c2, d2, e2) {
  if (null !== a2) {
    var f2 = a2.memoizedProps;
    if (Ie$1(f2, d2) && a2.ref === b2.ref)
      if (Ug = false, b2.pendingProps = d2 = f2, 0 !== (a2.lanes & e2))
        0 !== (a2.flags & 131072) && (Ug = true);
      else
        return b2.lanes = a2.lanes, $i(a2, b2, e2);
  }
  return dj(a2, b2, c2, d2, e2);
}
function ej(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.children, f2 = null !== a2 ? a2.memoizedState : null;
  if ("hidden" === d2.mode)
    if (0 === (b2.mode & 1))
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G$1(fj, gj), gj |= c2;
    else {
      if (0 === (c2 & 1073741824))
        return a2 = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2, cachePool: null, transitions: null }, b2.updateQueue = null, G$1(fj, gj), gj |= a2, null;
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d2 = null !== f2 ? f2.baseLanes : c2;
      G$1(fj, gj);
      gj |= d2;
    }
  else
    null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G$1(fj, gj), gj |= d2;
  Yi(a2, b2, e2, c2);
  return b2.child;
}
function hj(a2, b2) {
  var c2 = b2.ref;
  if (null === a2 && null !== c2 || null !== a2 && a2.ref !== c2)
    b2.flags |= 512, b2.flags |= 2097152;
}
function dj(a2, b2, c2, d2, e2) {
  var f2 = Zf(c2) ? Xf : H$3.current;
  f2 = Yf(b2, f2);
  Tg(b2, e2);
  c2 = Xh(a2, b2, c2, d2, f2, e2);
  d2 = bi();
  if (null !== a2 && !Ug)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, $i(a2, b2, e2);
  I$4 && d2 && vg(b2);
  b2.flags |= 1;
  Yi(a2, b2, c2, e2);
  return b2.child;
}
function ij(a2, b2, c2, d2, e2) {
  if (Zf(c2)) {
    var f2 = true;
    cg(b2);
  } else
    f2 = false;
  Tg(b2, e2);
  if (null === b2.stateNode)
    jj(a2, b2), ph(b2, c2, d2), rh(b2, c2, d2, e2), d2 = true;
  else if (null === a2) {
    var g2 = b2.stateNode, h2 = b2.memoizedProps;
    g2.props = h2;
    var k2 = g2.context, l2 = c2.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = Vg(l2) : (l2 = Zf(c2) ? Xf : H$3.current, l2 = Yf(b2, l2));
    var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && qh(b2, g2, d2, l2);
    $g = false;
    var r2 = b2.memoizedState;
    g2.state = r2;
    gh(b2, d2, g2, e2);
    k2 = b2.memoizedState;
    h2 !== d2 || r2 !== k2 || Wf.current || $g ? ("function" === typeof m2 && (kh(b2, c2, m2, d2), k2 = b2.memoizedState), (h2 = $g || oh(b2, c2, h2, d2, r2, k2, l2)) ? (q2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), d2 = false);
  } else {
    g2 = b2.stateNode;
    bh(a2, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : Lg(b2.type, h2);
    g2.props = l2;
    q2 = b2.pendingProps;
    r2 = g2.context;
    k2 = c2.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = Vg(k2) : (k2 = Zf(c2) ? Xf : H$3.current, k2 = Yf(b2, k2));
    var y2 = c2.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && qh(b2, g2, d2, k2);
    $g = false;
    r2 = b2.memoizedState;
    g2.state = r2;
    gh(b2, d2, g2, e2);
    var n2 = b2.memoizedState;
    h2 !== q2 || r2 !== n2 || Wf.current || $g ? ("function" === typeof y2 && (kh(b2, c2, y2, d2), n2 = b2.memoizedState), (l2 = $g || oh(b2, c2, l2, d2, r2, n2, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n2, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n2, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = n2), g2.props = d2, g2.state = n2, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), d2 = false);
  }
  return kj(a2, b2, c2, d2, f2, e2);
}
function kj(a2, b2, c2, d2, e2, f2) {
  hj(a2, b2);
  var g2 = 0 !== (b2.flags & 128);
  if (!d2 && !g2)
    return e2 && dg(b2, c2, false), $i(a2, b2, f2);
  d2 = b2.stateNode;
  Xi.current = b2;
  var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
  b2.flags |= 1;
  null !== a2 && g2 ? (b2.child = Bh(b2, a2.child, null, f2), b2.child = Bh(b2, null, h2, f2)) : Yi(a2, b2, h2, f2);
  b2.memoizedState = d2.state;
  e2 && dg(b2, c2, true);
  return b2.child;
}
function lj(a2) {
  var b2 = a2.stateNode;
  b2.pendingContext ? ag(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a2, b2.context, false);
  Ih(a2, b2.containerInfo);
}
function mj(a2, b2, c2, d2, e2) {
  Ig();
  Jg(e2);
  b2.flags |= 256;
  Yi(a2, b2, c2, d2);
  return b2.child;
}
var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
function oj(a2) {
  return { baseLanes: a2, cachePool: null, transitions: null };
}
function pj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = M$6.current, f2 = false, g2 = 0 !== (b2.flags & 128), h2;
  (h2 = g2) || (h2 = null !== a2 && null === a2.memoizedState ? false : 0 !== (e2 & 2));
  if (h2)
    f2 = true, b2.flags &= -129;
  else if (null === a2 || null !== a2.memoizedState)
    e2 |= 1;
  G$1(M$6, e2 & 1);
  if (null === a2) {
    Eg(b2);
    a2 = b2.memoizedState;
    if (null !== a2 && (a2 = a2.dehydrated, null !== a2))
      return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a2.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
    g2 = d2.children;
    a2 = d2.fallback;
    return f2 ? (d2 = b2.mode, f2 = b2.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = qj(g2, d2, 0, null), a2 = Ah(a2, d2, c2, null), f2.return = b2, a2.return = b2, f2.sibling = a2, b2.child = f2, b2.child.memoizedState = oj(c2), b2.memoizedState = nj, a2) : rj(b2, g2);
  }
  e2 = a2.memoizedState;
  if (null !== e2 && (h2 = e2.dehydrated, null !== h2))
    return sj(a2, b2, g2, d2, h2, e2, c2);
  if (f2) {
    f2 = d2.fallback;
    g2 = b2.mode;
    e2 = a2.child;
    h2 = e2.sibling;
    var k2 = { mode: "hidden", children: d2.children };
    0 === (g2 & 1) && b2.child !== e2 ? (d2 = b2.child, d2.childLanes = 0, d2.pendingProps = k2, b2.deletions = null) : (d2 = wh(e2, k2), d2.subtreeFlags = e2.subtreeFlags & 14680064);
    null !== h2 ? f2 = wh(h2, f2) : (f2 = Ah(f2, g2, c2, null), f2.flags |= 2);
    f2.return = b2;
    d2.return = b2;
    d2.sibling = f2;
    b2.child = d2;
    d2 = f2;
    f2 = b2.child;
    g2 = a2.child.memoizedState;
    g2 = null === g2 ? oj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
    f2.memoizedState = g2;
    f2.childLanes = a2.childLanes & ~c2;
    b2.memoizedState = nj;
    return d2;
  }
  f2 = a2.child;
  a2 = f2.sibling;
  d2 = wh(f2, { mode: "visible", children: d2.children });
  0 === (b2.mode & 1) && (d2.lanes = c2);
  d2.return = b2;
  d2.sibling = null;
  null !== a2 && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a2], b2.flags |= 16) : c2.push(a2));
  b2.child = d2;
  b2.memoizedState = null;
  return d2;
}
function rj(a2, b2) {
  b2 = qj({ mode: "visible", children: b2 }, a2.mode, 0, null);
  b2.return = a2;
  return a2.child = b2;
}
function tj(a2, b2, c2, d2) {
  null !== d2 && Jg(d2);
  Bh(b2, a2.child, null, c2);
  a2 = rj(b2, b2.pendingProps.children);
  a2.flags |= 2;
  b2.memoizedState = null;
  return a2;
}
function sj(a2, b2, c2, d2, e2, f2, g2) {
  if (c2) {
    if (b2.flags & 256)
      return b2.flags &= -257, d2 = Li(Error(p$c(422))), tj(a2, b2, g2, d2);
    if (null !== b2.memoizedState)
      return b2.child = a2.child, b2.flags |= 128, null;
    f2 = d2.fallback;
    e2 = b2.mode;
    d2 = qj({ mode: "visible", children: d2.children }, e2, 0, null);
    f2 = Ah(f2, e2, g2, null);
    f2.flags |= 2;
    d2.return = b2;
    f2.return = b2;
    d2.sibling = f2;
    b2.child = d2;
    0 !== (b2.mode & 1) && Bh(b2, a2.child, null, g2);
    b2.child.memoizedState = oj(g2);
    b2.memoizedState = nj;
    return f2;
  }
  if (0 === (b2.mode & 1))
    return tj(a2, b2, g2, null);
  if ("$!" === e2.data) {
    d2 = e2.nextSibling && e2.nextSibling.dataset;
    if (d2)
      var h2 = d2.dgst;
    d2 = h2;
    f2 = Error(p$c(419));
    d2 = Li(f2, d2, void 0);
    return tj(a2, b2, g2, d2);
  }
  h2 = 0 !== (g2 & a2.childLanes);
  if (Ug || h2) {
    d2 = R$2;
    if (null !== d2) {
      switch (g2 & -g2) {
        case 4:
          e2 = 2;
          break;
        case 16:
          e2 = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e2 = 32;
          break;
        case 536870912:
          e2 = 268435456;
          break;
        default:
          e2 = 0;
      }
      e2 = 0 !== (e2 & (d2.suspendedLanes | g2)) ? 0 : e2;
      0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, Zg(a2, e2), mh(d2, a2, e2, -1));
    }
    uj();
    d2 = Li(Error(p$c(421)));
    return tj(a2, b2, g2, d2);
  }
  if ("$?" === e2.data)
    return b2.flags |= 128, b2.child = a2.child, b2 = vj.bind(null, a2), e2._reactRetry = b2, null;
  a2 = f2.treeContext;
  yg = Lf(e2.nextSibling);
  xg = b2;
  I$4 = true;
  zg = null;
  null !== a2 && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a2.id, sg = a2.overflow, qg = b2);
  b2 = rj(b2, d2.children);
  b2.flags |= 4096;
  return b2;
}
function wj(a2, b2, c2) {
  a2.lanes |= b2;
  var d2 = a2.alternate;
  null !== d2 && (d2.lanes |= b2);
  Sg(a2.return, b2, c2);
}
function xj(a2, b2, c2, d2, e2) {
  var f2 = a2.memoizedState;
  null === f2 ? a2.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
}
function yj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
  Yi(a2, b2, d2.children, c2);
  d2 = M$6.current;
  if (0 !== (d2 & 2))
    d2 = d2 & 1 | 2, b2.flags |= 128;
  else {
    if (null !== a2 && 0 !== (a2.flags & 128))
      a:
        for (a2 = b2.child; null !== a2; ) {
          if (13 === a2.tag)
            null !== a2.memoizedState && wj(a2, c2, b2);
          else if (19 === a2.tag)
            wj(a2, c2, b2);
          else if (null !== a2.child) {
            a2.child.return = a2;
            a2 = a2.child;
            continue;
          }
          if (a2 === b2)
            break a;
          for (; null === a2.sibling; ) {
            if (null === a2.return || a2.return === b2)
              break a;
            a2 = a2.return;
          }
          a2.sibling.return = a2.return;
          a2 = a2.sibling;
        }
    d2 &= 1;
  }
  G$1(M$6, d2);
  if (0 === (b2.mode & 1))
    b2.memoizedState = null;
  else
    switch (e2) {
      case "forwards":
        c2 = b2.child;
        for (e2 = null; null !== c2; )
          a2 = c2.alternate, null !== a2 && null === Mh(a2) && (e2 = c2), c2 = c2.sibling;
        c2 = e2;
        null === c2 ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
        xj(b2, false, e2, c2, f2);
        break;
      case "backwards":
        c2 = null;
        e2 = b2.child;
        for (b2.child = null; null !== e2; ) {
          a2 = e2.alternate;
          if (null !== a2 && null === Mh(a2)) {
            b2.child = e2;
            break;
          }
          a2 = e2.sibling;
          e2.sibling = c2;
          c2 = e2;
          e2 = a2;
        }
        xj(b2, true, c2, null, f2);
        break;
      case "together":
        xj(b2, false, null, null, void 0);
        break;
      default:
        b2.memoizedState = null;
    }
  return b2.child;
}
function jj(a2, b2) {
  0 === (b2.mode & 1) && null !== a2 && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
}
function $i(a2, b2, c2) {
  null !== a2 && (b2.dependencies = a2.dependencies);
  hh |= b2.lanes;
  if (0 === (c2 & b2.childLanes))
    return null;
  if (null !== a2 && b2.child !== a2.child)
    throw Error(p$c(153));
  if (null !== b2.child) {
    a2 = b2.child;
    c2 = wh(a2, a2.pendingProps);
    b2.child = c2;
    for (c2.return = b2; null !== a2.sibling; )
      a2 = a2.sibling, c2 = c2.sibling = wh(a2, a2.pendingProps), c2.return = b2;
    c2.sibling = null;
  }
  return b2.child;
}
function zj(a2, b2, c2) {
  switch (b2.tag) {
    case 3:
      lj(b2);
      Ig();
      break;
    case 5:
      Kh(b2);
      break;
    case 1:
      Zf(b2.type) && cg(b2);
      break;
    case 4:
      Ih(b2, b2.stateNode.containerInfo);
      break;
    case 10:
      var d2 = b2.type._context, e2 = b2.memoizedProps.value;
      G$1(Mg, d2._currentValue);
      d2._currentValue = e2;
      break;
    case 13:
      d2 = b2.memoizedState;
      if (null !== d2) {
        if (null !== d2.dehydrated)
          return G$1(M$6, M$6.current & 1), b2.flags |= 128, null;
        if (0 !== (c2 & b2.child.childLanes))
          return pj(a2, b2, c2);
        G$1(M$6, M$6.current & 1);
        a2 = $i(a2, b2, c2);
        return null !== a2 ? a2.sibling : null;
      }
      G$1(M$6, M$6.current & 1);
      break;
    case 19:
      d2 = 0 !== (c2 & b2.childLanes);
      if (0 !== (a2.flags & 128)) {
        if (d2)
          return yj(a2, b2, c2);
        b2.flags |= 128;
      }
      e2 = b2.memoizedState;
      null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
      G$1(M$6, M$6.current);
      if (d2)
        break;
      else
        return null;
    case 22:
    case 23:
      return b2.lanes = 0, ej(a2, b2, c2);
  }
  return $i(a2, b2, c2);
}
var Aj, Bj, Cj, Dj;
Aj = function(a2, b2) {
  for (var c2 = b2.child; null !== c2; ) {
    if (5 === c2.tag || 6 === c2.tag)
      a2.appendChild(c2.stateNode);
    else if (4 !== c2.tag && null !== c2.child) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2)
      break;
    for (; null === c2.sibling; ) {
      if (null === c2.return || c2.return === b2)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Bj = function() {
};
Cj = function(a2, b2, c2, d2) {
  var e2 = a2.memoizedProps;
  if (e2 !== d2) {
    a2 = b2.stateNode;
    Hh(Eh.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e2 = Ya(a2, e2);
        d2 = Ya(a2, d2);
        f2 = [];
        break;
      case "select":
        e2 = A$3({}, e2, { value: void 0 });
        d2 = A$3({}, d2, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e2 = gb(a2, e2);
        d2 = gb(a2, d2);
        f2 = [];
        break;
      default:
        "function" !== typeof e2.onClick && "function" === typeof d2.onClick && (a2.onclick = Bf);
    }
    ub(c2, d2);
    var g2;
    c2 = null;
    for (l2 in e2)
      if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2])
        if ("style" === l2) {
          var h2 = e2[l2];
          for (g2 in h2)
            h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
        } else
          "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d2) {
      var k2 = d2[l2];
      h2 = null != e2 ? e2[l2] : void 0;
      if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2))
        if ("style" === l2)
          if (h2) {
            for (g2 in h2)
              !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
            for (g2 in k2)
              k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
          } else
            c2 || (f2 || (f2 = []), f2.push(
              l2,
              c2
            )), c2 = k2;
        else
          "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D$3("scroll", a2), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c2 && (f2 = f2 || []).push("style", c2);
    var l2 = f2;
    if (b2.updateQueue = l2)
      b2.flags |= 4;
  }
};
Dj = function(a2, b2, c2, d2) {
  c2 !== d2 && (b2.flags |= 4);
};
function Ej(a2, b2) {
  if (!I$4)
    switch (a2.tailMode) {
      case "hidden":
        b2 = a2.tail;
        for (var c2 = null; null !== b2; )
          null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
        null === c2 ? a2.tail = null : c2.sibling = null;
        break;
      case "collapsed":
        c2 = a2.tail;
        for (var d2 = null; null !== c2; )
          null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
        null === d2 ? b2 || null === a2.tail ? a2.tail = null : a2.tail.sibling = null : d2.sibling = null;
    }
}
function S$9(a2) {
  var b2 = null !== a2.alternate && a2.alternate.child === a2.child, c2 = 0, d2 = 0;
  if (b2)
    for (var e2 = a2.child; null !== e2; )
      c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a2, e2 = e2.sibling;
  else
    for (e2 = a2.child; null !== e2; )
      c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a2, e2 = e2.sibling;
  a2.subtreeFlags |= d2;
  a2.childLanes = c2;
  return b2;
}
function Fj(a2, b2, c2) {
  var d2 = b2.pendingProps;
  wg(b2);
  switch (b2.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S$9(b2), null;
    case 1:
      return Zf(b2.type) && $f(), S$9(b2), null;
    case 3:
      d2 = b2.stateNode;
      Jh();
      E$2(Wf);
      E$2(H$3);
      Oh();
      d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
      if (null === a2 || null === a2.child)
        Gg(b2) ? b2.flags |= 4 : null === a2 || a2.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Gj(zg), zg = null));
      Bj(a2, b2);
      S$9(b2);
      return null;
    case 5:
      Lh(b2);
      var e2 = Hh(Gh.current);
      c2 = b2.type;
      if (null !== a2 && null != b2.stateNode)
        Cj(a2, b2, c2, d2, e2), a2.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      else {
        if (!d2) {
          if (null === b2.stateNode)
            throw Error(p$c(166));
          S$9(b2);
          return null;
        }
        a2 = Hh(Eh.current);
        if (Gg(b2)) {
          d2 = b2.stateNode;
          c2 = b2.type;
          var f2 = b2.memoizedProps;
          d2[Of] = b2;
          d2[Pf] = f2;
          a2 = 0 !== (b2.mode & 1);
          switch (c2) {
            case "dialog":
              D$3("cancel", d2);
              D$3("close", d2);
              break;
            case "iframe":
            case "object":
            case "embed":
              D$3("load", d2);
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < lf.length; e2++)
                D$3(lf[e2], d2);
              break;
            case "source":
              D$3("error", d2);
              break;
            case "img":
            case "image":
            case "link":
              D$3(
                "error",
                d2
              );
              D$3("load", d2);
              break;
            case "details":
              D$3("toggle", d2);
              break;
            case "input":
              Za(d2, f2);
              D$3("invalid", d2);
              break;
            case "select":
              d2._wrapperState = { wasMultiple: !!f2.multiple };
              D$3("invalid", d2);
              break;
            case "textarea":
              hb(d2, f2), D$3("invalid", d2);
          }
          ub(c2, f2);
          e2 = null;
          for (var g2 in f2)
            if (f2.hasOwnProperty(g2)) {
              var h2 = f2[g2];
              "children" === g2 ? "string" === typeof h2 ? d2.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d2.textContent, h2, a2), e2 = ["children", h2]) : "number" === typeof h2 && d2.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
                d2.textContent,
                h2,
                a2
              ), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g2) && null != h2 && "onScroll" === g2 && D$3("scroll", d2);
            }
          switch (c2) {
            case "input":
              Va(d2);
              db(d2, f2, true);
              break;
            case "textarea":
              Va(d2);
              jb(d2);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d2.onclick = Bf);
          }
          d2 = e2;
          b2.updateQueue = d2;
          null !== d2 && (b2.flags |= 4);
        } else {
          g2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a2 && (a2 = kb(c2));
          "http://www.w3.org/1999/xhtml" === a2 ? "script" === c2 ? (a2 = g2.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : "string" === typeof d2.is ? a2 = g2.createElement(c2, { is: d2.is }) : (a2 = g2.createElement(c2), "select" === c2 && (g2 = a2, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a2 = g2.createElementNS(a2, c2);
          a2[Of] = b2;
          a2[Pf] = d2;
          Aj(a2, b2, false, false);
          b2.stateNode = a2;
          a: {
            g2 = vb(c2, d2);
            switch (c2) {
              case "dialog":
                D$3("cancel", a2);
                D$3("close", a2);
                e2 = d2;
                break;
              case "iframe":
              case "object":
              case "embed":
                D$3("load", a2);
                e2 = d2;
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < lf.length; e2++)
                  D$3(lf[e2], a2);
                e2 = d2;
                break;
              case "source":
                D$3("error", a2);
                e2 = d2;
                break;
              case "img":
              case "image":
              case "link":
                D$3(
                  "error",
                  a2
                );
                D$3("load", a2);
                e2 = d2;
                break;
              case "details":
                D$3("toggle", a2);
                e2 = d2;
                break;
              case "input":
                Za(a2, d2);
                e2 = Ya(a2, d2);
                D$3("invalid", a2);
                break;
              case "option":
                e2 = d2;
                break;
              case "select":
                a2._wrapperState = { wasMultiple: !!d2.multiple };
                e2 = A$3({}, d2, { value: void 0 });
                D$3("invalid", a2);
                break;
              case "textarea":
                hb(a2, d2);
                e2 = gb(a2, d2);
                D$3("invalid", a2);
                break;
              default:
                e2 = d2;
            }
            ub(c2, e2);
            h2 = e2;
            for (f2 in h2)
              if (h2.hasOwnProperty(f2)) {
                var k2 = h2[f2];
                "style" === f2 ? sb(a2, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a2, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a2, k2) : "number" === typeof k2 && ob(a2, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D$3("scroll", a2) : null != k2 && ta(a2, f2, k2, g2));
              }
            switch (c2) {
              case "input":
                Va(a2);
                db(a2, d2, false);
                break;
              case "textarea":
                Va(a2);
                jb(a2);
                break;
              case "option":
                null != d2.value && a2.setAttribute("value", "" + Sa(d2.value));
                break;
              case "select":
                a2.multiple = !!d2.multiple;
                f2 = d2.value;
                null != f2 ? fb(a2, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(
                  a2,
                  !!d2.multiple,
                  d2.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e2.onClick && (a2.onclick = Bf);
            }
            switch (c2) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d2 = !!d2.autoFocus;
                break a;
              case "img":
                d2 = true;
                break a;
              default:
                d2 = false;
            }
          }
          d2 && (b2.flags |= 4);
        }
        null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      }
      S$9(b2);
      return null;
    case 6:
      if (a2 && null != b2.stateNode)
        Dj(a2, b2, a2.memoizedProps, d2);
      else {
        if ("string" !== typeof d2 && null === b2.stateNode)
          throw Error(p$c(166));
        c2 = Hh(Gh.current);
        Hh(Eh.current);
        if (Gg(b2)) {
          d2 = b2.stateNode;
          c2 = b2.memoizedProps;
          d2[Of] = b2;
          if (f2 = d2.nodeValue !== c2) {
            if (a2 = xg, null !== a2)
              switch (a2.tag) {
                case 3:
                  Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
                  break;
                case 5:
                  true !== a2.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
              }
          }
          f2 && (b2.flags |= 4);
        } else
          d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b2, b2.stateNode = d2;
      }
      S$9(b2);
      return null;
    case 13:
      E$2(M$6);
      d2 = b2.memoizedState;
      if (null === a2 || null !== a2.memoizedState && null !== a2.memoizedState.dehydrated) {
        if (I$4 && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128))
          Hg(), Ig(), b2.flags |= 98560, f2 = false;
        else if (f2 = Gg(b2), null !== d2 && null !== d2.dehydrated) {
          if (null === a2) {
            if (!f2)
              throw Error(p$c(318));
            f2 = b2.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2)
              throw Error(p$c(317));
            f2[Of] = b2;
          } else
            Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
          S$9(b2);
          f2 = false;
        } else
          null !== zg && (Gj(zg), zg = null), f2 = true;
        if (!f2)
          return b2.flags & 65536 ? b2 : null;
      }
      if (0 !== (b2.flags & 128))
        return b2.lanes = c2, b2;
      d2 = null !== d2;
      d2 !== (null !== a2 && null !== a2.memoizedState) && d2 && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a2 || 0 !== (M$6.current & 1) ? 0 === T$2 && (T$2 = 3) : uj()));
      null !== b2.updateQueue && (b2.flags |= 4);
      S$9(b2);
      return null;
    case 4:
      return Jh(), Bj(a2, b2), null === a2 && sf(b2.stateNode.containerInfo), S$9(b2), null;
    case 10:
      return Rg(b2.type._context), S$9(b2), null;
    case 17:
      return Zf(b2.type) && $f(), S$9(b2), null;
    case 19:
      E$2(M$6);
      f2 = b2.memoizedState;
      if (null === f2)
        return S$9(b2), null;
      d2 = 0 !== (b2.flags & 128);
      g2 = f2.rendering;
      if (null === g2)
        if (d2)
          Ej(f2, false);
        else {
          if (0 !== T$2 || null !== a2 && 0 !== (a2.flags & 128))
            for (a2 = b2.child; null !== a2; ) {
              g2 = Mh(a2);
              if (null !== g2) {
                b2.flags |= 128;
                Ej(f2, false);
                d2 = g2.updateQueue;
                null !== d2 && (b2.updateQueue = d2, b2.flags |= 4);
                b2.subtreeFlags = 0;
                d2 = c2;
                for (c2 = b2.child; null !== c2; )
                  f2 = c2, a2 = d2, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a2 = g2.dependencies, f2.dependencies = null === a2 ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
                G$1(M$6, M$6.current & 1 | 2);
                return b2.child;
              }
              a2 = a2.sibling;
            }
          null !== f2.tail && B$1() > Hj && (b2.flags |= 128, d2 = true, Ej(f2, false), b2.lanes = 4194304);
        }
      else {
        if (!d2)
          if (a2 = Mh(g2), null !== a2) {
            if (b2.flags |= 128, d2 = true, c2 = a2.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Ej(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I$4)
              return S$9(b2), null;
          } else
            2 * B$1() - f2.renderingStartTime > Hj && 1073741824 !== c2 && (b2.flags |= 128, d2 = true, Ej(f2, false), b2.lanes = 4194304);
        f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
      }
      if (null !== f2.tail)
        return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B$1(), b2.sibling = null, c2 = M$6.current, G$1(M$6, d2 ? c2 & 1 | 2 : c2 & 1), b2;
      S$9(b2);
      return null;
    case 22:
    case 23:
      return Ij(), d2 = null !== b2.memoizedState, null !== a2 && null !== a2.memoizedState !== d2 && (b2.flags |= 8192), d2 && 0 !== (b2.mode & 1) ? 0 !== (gj & 1073741824) && (S$9(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S$9(b2), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p$c(156, b2.tag));
}
function Jj(a2, b2) {
  wg(b2);
  switch (b2.tag) {
    case 1:
      return Zf(b2.type) && $f(), a2 = b2.flags, a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 3:
      return Jh(), E$2(Wf), E$2(H$3), Oh(), a2 = b2.flags, 0 !== (a2 & 65536) && 0 === (a2 & 128) ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 5:
      return Lh(b2), null;
    case 13:
      E$2(M$6);
      a2 = b2.memoizedState;
      if (null !== a2 && null !== a2.dehydrated) {
        if (null === b2.alternate)
          throw Error(p$c(340));
        Ig();
      }
      a2 = b2.flags;
      return a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 19:
      return E$2(M$6), null;
    case 4:
      return Jh(), null;
    case 10:
      return Rg(b2.type._context), null;
    case 22:
    case 23:
      return Ij(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kj = false, U$2 = false, Lj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
function Mj(a2, b2) {
  var c2 = a2.ref;
  if (null !== c2)
    if ("function" === typeof c2)
      try {
        c2(null);
      } catch (d2) {
        W$1(a2, b2, d2);
      }
    else
      c2.current = null;
}
function Nj(a2, b2, c2) {
  try {
    c2();
  } catch (d2) {
    W$1(a2, b2, d2);
  }
}
var Oj = false;
function Pj(a2, b2) {
  Cf = dd;
  a2 = Me$1();
  if (Ne$2(a2)) {
    if ("selectionStart" in a2)
      var c2 = { start: a2.selectionStart, end: a2.selectionEnd };
    else
      a: {
        c2 = (c2 = a2.ownerDocument) && c2.defaultView || window;
        var d2 = c2.getSelection && c2.getSelection();
        if (d2 && 0 !== d2.rangeCount) {
          c2 = d2.anchorNode;
          var e2 = d2.anchorOffset, f2 = d2.focusNode;
          d2 = d2.focusOffset;
          try {
            c2.nodeType, f2.nodeType;
          } catch (F2) {
            c2 = null;
            break a;
          }
          var g2 = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a2, r2 = null;
          b:
            for (; ; ) {
              for (var y2; ; ) {
                q2 !== c2 || 0 !== e2 && 3 !== q2.nodeType || (h2 = g2 + e2);
                q2 !== f2 || 0 !== d2 && 3 !== q2.nodeType || (k2 = g2 + d2);
                3 === q2.nodeType && (g2 += q2.nodeValue.length);
                if (null === (y2 = q2.firstChild))
                  break;
                r2 = q2;
                q2 = y2;
              }
              for (; ; ) {
                if (q2 === a2)
                  break b;
                r2 === c2 && ++l2 === e2 && (h2 = g2);
                r2 === f2 && ++m2 === d2 && (k2 = g2);
                if (null !== (y2 = q2.nextSibling))
                  break;
                q2 = r2;
                r2 = q2.parentNode;
              }
              q2 = y2;
            }
          c2 = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
        } else
          c2 = null;
      }
    c2 = c2 || { start: 0, end: 0 };
  } else
    c2 = null;
  Df = { focusedElem: a2, selectionRange: c2 };
  dd = false;
  for (V = b2; null !== V; )
    if (b2 = V, a2 = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a2)
      a2.return = b2, V = a2;
    else
      for (; null !== V; ) {
        b2 = V;
        try {
          var n2 = b2.alternate;
          if (0 !== (b2.flags & 1024))
            switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n2) {
                  var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Lg(b2.type, t2), J2);
                  x2.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u2 = b2.stateNode.containerInfo;
                1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p$c(163));
            }
        } catch (F2) {
          W$1(b2, b2.return, F2);
        }
        a2 = b2.sibling;
        if (null !== a2) {
          a2.return = b2.return;
          V = a2;
          break;
        }
        V = b2.return;
      }
  n2 = Oj;
  Oj = false;
  return n2;
}
function Qj(a2, b2, c2) {
  var d2 = b2.updateQueue;
  d2 = null !== d2 ? d2.lastEffect : null;
  if (null !== d2) {
    var e2 = d2 = d2.next;
    do {
      if ((e2.tag & a2) === a2) {
        var f2 = e2.destroy;
        e2.destroy = void 0;
        void 0 !== f2 && Nj(b2, c2, f2);
      }
      e2 = e2.next;
    } while (e2 !== d2);
  }
}
function Rj(a2, b2) {
  b2 = b2.updateQueue;
  b2 = null !== b2 ? b2.lastEffect : null;
  if (null !== b2) {
    var c2 = b2 = b2.next;
    do {
      if ((c2.tag & a2) === a2) {
        var d2 = c2.create;
        c2.destroy = d2();
      }
      c2 = c2.next;
    } while (c2 !== b2);
  }
}
function Sj(a2) {
  var b2 = a2.ref;
  if (null !== b2) {
    var c2 = a2.stateNode;
    switch (a2.tag) {
      case 5:
        a2 = c2;
        break;
      default:
        a2 = c2;
    }
    "function" === typeof b2 ? b2(a2) : b2.current = a2;
  }
}
function Tj(a2) {
  var b2 = a2.alternate;
  null !== b2 && (a2.alternate = null, Tj(b2));
  a2.child = null;
  a2.deletions = null;
  a2.sibling = null;
  5 === a2.tag && (b2 = a2.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
  a2.stateNode = null;
  a2.return = null;
  a2.dependencies = null;
  a2.memoizedProps = null;
  a2.memoizedState = null;
  a2.pendingProps = null;
  a2.stateNode = null;
  a2.updateQueue = null;
}
function Uj(a2) {
  return 5 === a2.tag || 3 === a2.tag || 4 === a2.tag;
}
function Vj(a2) {
  a:
    for (; ; ) {
      for (; null === a2.sibling; ) {
        if (null === a2.return || Uj(a2.return))
          return null;
        a2 = a2.return;
      }
      a2.sibling.return = a2.return;
      for (a2 = a2.sibling; 5 !== a2.tag && 6 !== a2.tag && 18 !== a2.tag; ) {
        if (a2.flags & 2)
          continue a;
        if (null === a2.child || 4 === a2.tag)
          continue a;
        else
          a2.child.return = a2, a2 = a2.child;
      }
      if (!(a2.flags & 2))
        return a2.stateNode;
    }
}
function Wj(a2, b2, c2) {
  var d2 = a2.tag;
  if (5 === d2 || 6 === d2)
    a2 = a2.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a2, b2) : c2.insertBefore(a2, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a2, c2)) : (b2 = c2, b2.appendChild(a2)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
  else if (4 !== d2 && (a2 = a2.child, null !== a2))
    for (Wj(a2, b2, c2), a2 = a2.sibling; null !== a2; )
      Wj(a2, b2, c2), a2 = a2.sibling;
}
function Xj(a2, b2, c2) {
  var d2 = a2.tag;
  if (5 === d2 || 6 === d2)
    a2 = a2.stateNode, b2 ? c2.insertBefore(a2, b2) : c2.appendChild(a2);
  else if (4 !== d2 && (a2 = a2.child, null !== a2))
    for (Xj(a2, b2, c2), a2 = a2.sibling; null !== a2; )
      Xj(a2, b2, c2), a2 = a2.sibling;
}
var X$3 = null, Yj = false;
function Zj(a2, b2, c2) {
  for (c2 = c2.child; null !== c2; )
    ak(a2, b2, c2), c2 = c2.sibling;
}
function ak(a2, b2, c2) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount)
    try {
      lc.onCommitFiberUnmount(kc, c2);
    } catch (h2) {
    }
  switch (c2.tag) {
    case 5:
      U$2 || Mj(c2, b2);
    case 6:
      var d2 = X$3, e2 = Yj;
      X$3 = null;
      Zj(a2, b2, c2);
      X$3 = d2;
      Yj = e2;
      null !== X$3 && (Yj ? (a2 = X$3, c2 = c2.stateNode, 8 === a2.nodeType ? a2.parentNode.removeChild(c2) : a2.removeChild(c2)) : X$3.removeChild(c2.stateNode));
      break;
    case 18:
      null !== X$3 && (Yj ? (a2 = X$3, c2 = c2.stateNode, 8 === a2.nodeType ? Kf(a2.parentNode, c2) : 1 === a2.nodeType && Kf(a2, c2), bd(a2)) : Kf(X$3, c2.stateNode));
      break;
    case 4:
      d2 = X$3;
      e2 = Yj;
      X$3 = c2.stateNode.containerInfo;
      Yj = true;
      Zj(a2, b2, c2);
      X$3 = d2;
      Yj = e2;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U$2 && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
        e2 = d2 = d2.next;
        do {
          var f2 = e2, g2 = f2.destroy;
          f2 = f2.tag;
          void 0 !== g2 && (0 !== (f2 & 2) ? Nj(c2, b2, g2) : 0 !== (f2 & 4) && Nj(c2, b2, g2));
          e2 = e2.next;
        } while (e2 !== d2);
      }
      Zj(a2, b2, c2);
      break;
    case 1:
      if (!U$2 && (Mj(c2, b2), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount))
        try {
          d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
        } catch (h2) {
          W$1(c2, b2, h2);
        }
      Zj(a2, b2, c2);
      break;
    case 21:
      Zj(a2, b2, c2);
      break;
    case 22:
      c2.mode & 1 ? (U$2 = (d2 = U$2) || null !== c2.memoizedState, Zj(a2, b2, c2), U$2 = d2) : Zj(a2, b2, c2);
      break;
    default:
      Zj(a2, b2, c2);
  }
}
function bk(a2) {
  var b2 = a2.updateQueue;
  if (null !== b2) {
    a2.updateQueue = null;
    var c2 = a2.stateNode;
    null === c2 && (c2 = a2.stateNode = new Lj());
    b2.forEach(function(b3) {
      var d2 = ck.bind(null, a2, b3);
      c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
    });
  }
}
function dk(a2, b2) {
  var c2 = b2.deletions;
  if (null !== c2)
    for (var d2 = 0; d2 < c2.length; d2++) {
      var e2 = c2[d2];
      try {
        var f2 = a2, g2 = b2, h2 = g2;
        a:
          for (; null !== h2; ) {
            switch (h2.tag) {
              case 5:
                X$3 = h2.stateNode;
                Yj = false;
                break a;
              case 3:
                X$3 = h2.stateNode.containerInfo;
                Yj = true;
                break a;
              case 4:
                X$3 = h2.stateNode.containerInfo;
                Yj = true;
                break a;
            }
            h2 = h2.return;
          }
        if (null === X$3)
          throw Error(p$c(160));
        ak(f2, g2, e2);
        X$3 = null;
        Yj = false;
        var k2 = e2.alternate;
        null !== k2 && (k2.return = null);
        e2.return = null;
      } catch (l2) {
        W$1(e2, b2, l2);
      }
    }
  if (b2.subtreeFlags & 12854)
    for (b2 = b2.child; null !== b2; )
      ek(b2, a2), b2 = b2.sibling;
}
function ek(a2, b2) {
  var c2 = a2.alternate, d2 = a2.flags;
  switch (a2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      dk(b2, a2);
      fk(a2);
      if (d2 & 4) {
        try {
          Qj(3, a2, a2.return), Rj(3, a2);
        } catch (t2) {
          W$1(a2, a2.return, t2);
        }
        try {
          Qj(5, a2, a2.return);
        } catch (t2) {
          W$1(a2, a2.return, t2);
        }
      }
      break;
    case 1:
      dk(b2, a2);
      fk(a2);
      d2 & 512 && null !== c2 && Mj(c2, c2.return);
      break;
    case 5:
      dk(b2, a2);
      fk(a2);
      d2 & 512 && null !== c2 && Mj(c2, c2.return);
      if (a2.flags & 32) {
        var e2 = a2.stateNode;
        try {
          ob(e2, "");
        } catch (t2) {
          W$1(a2, a2.return, t2);
        }
      }
      if (d2 & 4 && (e2 = a2.stateNode, null != e2)) {
        var f2 = a2.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h2 = a2.type, k2 = a2.updateQueue;
        a2.updateQueue = null;
        if (null !== k2)
          try {
            "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
            vb(h2, g2);
            var l2 = vb(h2, f2);
            for (g2 = 0; g2 < k2.length; g2 += 2) {
              var m2 = k2[g2], q2 = k2[g2 + 1];
              "style" === m2 ? sb(e2, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q2) : "children" === m2 ? ob(e2, q2) : ta(e2, m2, q2, l2);
            }
            switch (h2) {
              case "input":
                bb(e2, f2);
                break;
              case "textarea":
                ib(e2, f2);
                break;
              case "select":
                var r2 = e2._wrapperState.wasMultiple;
                e2._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                null != y2 ? fb(e2, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                  e2,
                  !!f2.multiple,
                  f2.defaultValue,
                  true
                ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e2[Pf] = f2;
          } catch (t2) {
            W$1(a2, a2.return, t2);
          }
      }
      break;
    case 6:
      dk(b2, a2);
      fk(a2);
      if (d2 & 4) {
        if (null === a2.stateNode)
          throw Error(p$c(162));
        e2 = a2.stateNode;
        f2 = a2.memoizedProps;
        try {
          e2.nodeValue = f2;
        } catch (t2) {
          W$1(a2, a2.return, t2);
        }
      }
      break;
    case 3:
      dk(b2, a2);
      fk(a2);
      if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated)
        try {
          bd(b2.containerInfo);
        } catch (t2) {
          W$1(a2, a2.return, t2);
        }
      break;
    case 4:
      dk(b2, a2);
      fk(a2);
      break;
    case 13:
      dk(b2, a2);
      fk(a2);
      e2 = a2.child;
      e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (gk = B$1()));
      d2 & 4 && bk(a2);
      break;
    case 22:
      m2 = null !== c2 && null !== c2.memoizedState;
      a2.mode & 1 ? (U$2 = (l2 = U$2) || m2, dk(b2, a2), U$2 = l2) : dk(b2, a2);
      fk(a2);
      if (d2 & 8192) {
        l2 = null !== a2.memoizedState;
        if ((a2.stateNode.isHidden = l2) && !m2 && 0 !== (a2.mode & 1))
          for (V = a2, m2 = a2.child; null !== m2; ) {
            for (q2 = V = m2; null !== V; ) {
              r2 = V;
              y2 = r2.child;
              switch (r2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qj(4, r2, r2.return);
                  break;
                case 1:
                  Mj(r2, r2.return);
                  var n2 = r2.stateNode;
                  if ("function" === typeof n2.componentWillUnmount) {
                    d2 = r2;
                    c2 = r2.return;
                    try {
                      b2 = d2, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                    } catch (t2) {
                      W$1(d2, c2, t2);
                    }
                  }
                  break;
                case 5:
                  Mj(r2, r2.return);
                  break;
                case 22:
                  if (null !== r2.memoizedState) {
                    hk(q2);
                    continue;
                  }
              }
              null !== y2 ? (y2.return = r2, V = y2) : hk(q2);
            }
            m2 = m2.sibling;
          }
        a:
          for (m2 = null, q2 = a2; ; ) {
            if (5 === q2.tag) {
              if (null === m2) {
                m2 = q2;
                try {
                  e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g2));
                } catch (t2) {
                  W$1(a2, a2.return, t2);
                }
              }
            } else if (6 === q2.tag) {
              if (null === m2)
                try {
                  q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                } catch (t2) {
                  W$1(a2, a2.return, t2);
                }
            } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a2) && null !== q2.child) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a2)
              break a;
            for (; null === q2.sibling; ) {
              if (null === q2.return || q2.return === a2)
                break a;
              m2 === q2 && (m2 = null);
              q2 = q2.return;
            }
            m2 === q2 && (m2 = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
      }
      break;
    case 19:
      dk(b2, a2);
      fk(a2);
      d2 & 4 && bk(a2);
      break;
    case 21:
      break;
    default:
      dk(
        b2,
        a2
      ), fk(a2);
  }
}
function fk(a2) {
  var b2 = a2.flags;
  if (b2 & 2) {
    try {
      a: {
        for (var c2 = a2.return; null !== c2; ) {
          if (Uj(c2)) {
            var d2 = c2;
            break a;
          }
          c2 = c2.return;
        }
        throw Error(p$c(160));
      }
      switch (d2.tag) {
        case 5:
          var e2 = d2.stateNode;
          d2.flags & 32 && (ob(e2, ""), d2.flags &= -33);
          var f2 = Vj(a2);
          Xj(a2, f2, e2);
          break;
        case 3:
        case 4:
          var g2 = d2.stateNode.containerInfo, h2 = Vj(a2);
          Wj(a2, h2, g2);
          break;
        default:
          throw Error(p$c(161));
      }
    } catch (k2) {
      W$1(a2, a2.return, k2);
    }
    a2.flags &= -3;
  }
  b2 & 4096 && (a2.flags &= -4097);
}
function ik(a2, b2, c2) {
  V = a2;
  jk(a2);
}
function jk(a2, b2, c2) {
  for (var d2 = 0 !== (a2.mode & 1); null !== V; ) {
    var e2 = V, f2 = e2.child;
    if (22 === e2.tag && d2) {
      var g2 = null !== e2.memoizedState || Kj;
      if (!g2) {
        var h2 = e2.alternate, k2 = null !== h2 && null !== h2.memoizedState || U$2;
        h2 = Kj;
        var l2 = U$2;
        Kj = g2;
        if ((U$2 = k2) && !l2)
          for (V = e2; null !== V; )
            g2 = V, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? kk(e2) : null !== k2 ? (k2.return = g2, V = k2) : kk(e2);
        for (; null !== f2; )
          V = f2, jk(f2), f2 = f2.sibling;
        V = e2;
        Kj = h2;
        U$2 = l2;
      }
      lk(a2);
    } else
      0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V = f2) : lk(a2);
  }
}
function lk(a2) {
  for (; null !== V; ) {
    var b2 = V;
    if (0 !== (b2.flags & 8772)) {
      var c2 = b2.alternate;
      try {
        if (0 !== (b2.flags & 8772))
          switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              U$2 || Rj(5, b2);
              break;
            case 1:
              var d2 = b2.stateNode;
              if (b2.flags & 4 && !U$2)
                if (null === c2)
                  d2.componentDidMount();
                else {
                  var e2 = b2.elementType === b2.type ? c2.memoizedProps : Lg(b2.type, c2.memoizedProps);
                  d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
                }
              var f2 = b2.updateQueue;
              null !== f2 && ih(b2, f2, d2);
              break;
            case 3:
              var g2 = b2.updateQueue;
              if (null !== g2) {
                c2 = null;
                if (null !== b2.child)
                  switch (b2.child.tag) {
                    case 5:
                      c2 = b2.child.stateNode;
                      break;
                    case 1:
                      c2 = b2.child.stateNode;
                  }
                ih(b2, g2, c2);
              }
              break;
            case 5:
              var h2 = b2.stateNode;
              if (null === c2 && b2.flags & 4) {
                c2 = h2;
                var k2 = b2.memoizedProps;
                switch (b2.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c2.focus();
                    break;
                  case "img":
                    k2.src && (c2.src = k2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (null === b2.memoizedState) {
                var l2 = b2.alternate;
                if (null !== l2) {
                  var m2 = l2.memoizedState;
                  if (null !== m2) {
                    var q2 = m2.dehydrated;
                    null !== q2 && bd(q2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p$c(163));
          }
        U$2 || b2.flags & 512 && Sj(b2);
      } catch (r2) {
        W$1(b2, b2.return, r2);
      }
    }
    if (b2 === a2) {
      V = null;
      break;
    }
    c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V = c2;
      break;
    }
    V = b2.return;
  }
}
function hk(a2) {
  for (; null !== V; ) {
    var b2 = V;
    if (b2 === a2) {
      V = null;
      break;
    }
    var c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V = c2;
      break;
    }
    V = b2.return;
  }
}
function kk(a2) {
  for (; null !== V; ) {
    var b2 = V;
    try {
      switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          var c2 = b2.return;
          try {
            Rj(4, b2);
          } catch (k2) {
            W$1(b2, c2, k2);
          }
          break;
        case 1:
          var d2 = b2.stateNode;
          if ("function" === typeof d2.componentDidMount) {
            var e2 = b2.return;
            try {
              d2.componentDidMount();
            } catch (k2) {
              W$1(b2, e2, k2);
            }
          }
          var f2 = b2.return;
          try {
            Sj(b2);
          } catch (k2) {
            W$1(b2, f2, k2);
          }
          break;
        case 5:
          var g2 = b2.return;
          try {
            Sj(b2);
          } catch (k2) {
            W$1(b2, g2, k2);
          }
      }
    } catch (k2) {
      W$1(b2, b2.return, k2);
    }
    if (b2 === a2) {
      V = null;
      break;
    }
    var h2 = b2.sibling;
    if (null !== h2) {
      h2.return = b2.return;
      V = h2;
      break;
    }
    V = b2.return;
  }
}
var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K = 0, R$2 = null, Y$1 = null, Z$2 = 0, gj = 0, fj = Uf(0), T$2 = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = false, Qi = null, Si = null, wk = false, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
function L$2() {
  return 0 !== (K & 6) ? B$1() : -1 !== Bk ? Bk : Bk = B$1();
}
function lh(a2) {
  if (0 === (a2.mode & 1))
    return 1;
  if (0 !== (K & 2) && 0 !== Z$2)
    return Z$2 & -Z$2;
  if (null !== Kg.transition)
    return 0 === Ck && (Ck = yc()), Ck;
  a2 = C$1;
  if (0 !== a2)
    return a2;
  a2 = window.event;
  a2 = void 0 === a2 ? 16 : jd(a2.type);
  return a2;
}
function mh(a2, b2, c2, d2) {
  if (50 < zk)
    throw zk = 0, Ak = null, Error(p$c(185));
  Ac(a2, c2, d2);
  if (0 === (K & 2) || a2 !== R$2)
    a2 === R$2 && (0 === (K & 2) && (rk |= c2), 4 === T$2 && Dk(a2, Z$2)), Ek(a2, d2), 1 === c2 && 0 === K && 0 === (b2.mode & 1) && (Hj = B$1() + 500, fg && jg());
}
function Ek(a2, b2) {
  var c2 = a2.callbackNode;
  wc(a2, b2);
  var d2 = uc(a2, a2 === R$2 ? Z$2 : 0);
  if (0 === d2)
    null !== c2 && bc(c2), a2.callbackNode = null, a2.callbackPriority = 0;
  else if (b2 = d2 & -d2, a2.callbackPriority !== b2) {
    null != c2 && bc(c2);
    if (1 === b2)
      0 === a2.tag ? ig(Fk.bind(null, a2)) : hg(Fk.bind(null, a2)), Jf(function() {
        0 === (K & 6) && jg();
      }), c2 = null;
    else {
      switch (Dc(d2)) {
        case 1:
          c2 = fc;
          break;
        case 4:
          c2 = gc;
          break;
        case 16:
          c2 = hc;
          break;
        case 536870912:
          c2 = jc;
          break;
        default:
          c2 = hc;
      }
      c2 = Gk(c2, Hk.bind(null, a2));
    }
    a2.callbackPriority = b2;
    a2.callbackNode = c2;
  }
}
function Hk(a2, b2) {
  Bk = -1;
  Ck = 0;
  if (0 !== (K & 6))
    throw Error(p$c(327));
  var c2 = a2.callbackNode;
  if (Ik() && a2.callbackNode !== c2)
    return null;
  var d2 = uc(a2, a2 === R$2 ? Z$2 : 0);
  if (0 === d2)
    return null;
  if (0 !== (d2 & 30) || 0 !== (d2 & a2.expiredLanes) || b2)
    b2 = Jk(a2, d2);
  else {
    b2 = d2;
    var e2 = K;
    K |= 2;
    var f2 = Kk();
    if (R$2 !== a2 || Z$2 !== b2)
      vk = null, Hj = B$1() + 500, Lk(a2, b2);
    do
      try {
        Mk();
        break;
      } catch (h2) {
        Nk(a2, h2);
      }
    while (1);
    Qg();
    nk.current = f2;
    K = e2;
    null !== Y$1 ? b2 = 0 : (R$2 = null, Z$2 = 0, b2 = T$2);
  }
  if (0 !== b2) {
    2 === b2 && (e2 = xc(a2), 0 !== e2 && (d2 = e2, b2 = Ok(a2, e2)));
    if (1 === b2)
      throw c2 = qk, Lk(a2, 0), Dk(a2, d2), Ek(a2, B$1()), c2;
    if (6 === b2)
      Dk(a2, d2);
    else {
      e2 = a2.current.alternate;
      if (0 === (d2 & 30) && !Pk(e2) && (b2 = Jk(a2, d2), 2 === b2 && (f2 = xc(a2), 0 !== f2 && (d2 = f2, b2 = Ok(a2, f2))), 1 === b2))
        throw c2 = qk, Lk(a2, 0), Dk(a2, d2), Ek(a2, B$1()), c2;
      a2.finishedWork = e2;
      a2.finishedLanes = d2;
      switch (b2) {
        case 0:
        case 1:
          throw Error(p$c(345));
        case 2:
          Qk(a2, uk, vk);
          break;
        case 3:
          Dk(a2, d2);
          if ((d2 & 130023424) === d2 && (b2 = gk + 500 - B$1(), 10 < b2)) {
            if (0 !== uc(a2, 0))
              break;
            e2 = a2.suspendedLanes;
            if ((e2 & d2) !== d2) {
              L$2();
              a2.pingedLanes |= a2.suspendedLanes & e2;
              break;
            }
            a2.timeoutHandle = Ff(Qk.bind(null, a2, uk, vk), b2);
            break;
          }
          Qk(a2, uk, vk);
          break;
        case 4:
          Dk(a2, d2);
          if ((d2 & 4194240) === d2)
            break;
          b2 = a2.eventTimes;
          for (e2 = -1; 0 < d2; ) {
            var g2 = 31 - oc(d2);
            f2 = 1 << g2;
            g2 = b2[g2];
            g2 > e2 && (e2 = g2);
            d2 &= ~f2;
          }
          d2 = e2;
          d2 = B$1() - d2;
          d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * mk(d2 / 1960)) - d2;
          if (10 < d2) {
            a2.timeoutHandle = Ff(Qk.bind(null, a2, uk, vk), d2);
            break;
          }
          Qk(a2, uk, vk);
          break;
        case 5:
          Qk(a2, uk, vk);
          break;
        default:
          throw Error(p$c(329));
      }
    }
  }
  Ek(a2, B$1());
  return a2.callbackNode === c2 ? Hk.bind(null, a2) : null;
}
function Ok(a2, b2) {
  var c2 = tk;
  a2.current.memoizedState.isDehydrated && (Lk(a2, b2).flags |= 256);
  a2 = Jk(a2, b2);
  2 !== a2 && (b2 = uk, uk = c2, null !== b2 && Gj(b2));
  return a2;
}
function Gj(a2) {
  null === uk ? uk = a2 : uk.push.apply(uk, a2);
}
function Pk(a2) {
  for (var b2 = a2; ; ) {
    if (b2.flags & 16384) {
      var c2 = b2.updateQueue;
      if (null !== c2 && (c2 = c2.stores, null !== c2))
        for (var d2 = 0; d2 < c2.length; d2++) {
          var e2 = c2[d2], f2 = e2.getSnapshot;
          e2 = e2.value;
          try {
            if (!He$2(f2(), e2))
              return false;
          } catch (g2) {
            return false;
          }
        }
    }
    c2 = b2.child;
    if (b2.subtreeFlags & 16384 && null !== c2)
      c2.return = b2, b2 = c2;
    else {
      if (b2 === a2)
        break;
      for (; null === b2.sibling; ) {
        if (null === b2.return || b2.return === a2)
          return true;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return true;
}
function Dk(a2, b2) {
  b2 &= ~sk;
  b2 &= ~rk;
  a2.suspendedLanes |= b2;
  a2.pingedLanes &= ~b2;
  for (a2 = a2.expirationTimes; 0 < b2; ) {
    var c2 = 31 - oc(b2), d2 = 1 << c2;
    a2[c2] = -1;
    b2 &= ~d2;
  }
}
function Fk(a2) {
  if (0 !== (K & 6))
    throw Error(p$c(327));
  Ik();
  var b2 = uc(a2, 0);
  if (0 === (b2 & 1))
    return Ek(a2, B$1()), null;
  var c2 = Jk(a2, b2);
  if (0 !== a2.tag && 2 === c2) {
    var d2 = xc(a2);
    0 !== d2 && (b2 = d2, c2 = Ok(a2, d2));
  }
  if (1 === c2)
    throw c2 = qk, Lk(a2, 0), Dk(a2, b2), Ek(a2, B$1()), c2;
  if (6 === c2)
    throw Error(p$c(345));
  a2.finishedWork = a2.current.alternate;
  a2.finishedLanes = b2;
  Qk(a2, uk, vk);
  Ek(a2, B$1());
  return null;
}
function Rk(a2, b2) {
  var c2 = K;
  K |= 1;
  try {
    return a2(b2);
  } finally {
    K = c2, 0 === K && (Hj = B$1() + 500, fg && jg());
  }
}
function Sk(a2) {
  null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
  var b2 = K;
  K |= 1;
  var c2 = pk.transition, d2 = C$1;
  try {
    if (pk.transition = null, C$1 = 1, a2)
      return a2();
  } finally {
    C$1 = d2, pk.transition = c2, K = b2, 0 === (K & 6) && jg();
  }
}
function Ij() {
  gj = fj.current;
  E$2(fj);
}
function Lk(a2, b2) {
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  var c2 = a2.timeoutHandle;
  -1 !== c2 && (a2.timeoutHandle = -1, Gf(c2));
  if (null !== Y$1)
    for (c2 = Y$1.return; null !== c2; ) {
      var d2 = c2;
      wg(d2);
      switch (d2.tag) {
        case 1:
          d2 = d2.type.childContextTypes;
          null !== d2 && void 0 !== d2 && $f();
          break;
        case 3:
          Jh();
          E$2(Wf);
          E$2(H$3);
          Oh();
          break;
        case 5:
          Lh(d2);
          break;
        case 4:
          Jh();
          break;
        case 13:
          E$2(M$6);
          break;
        case 19:
          E$2(M$6);
          break;
        case 10:
          Rg(d2.type._context);
          break;
        case 22:
        case 23:
          Ij();
      }
      c2 = c2.return;
    }
  R$2 = a2;
  Y$1 = a2 = wh(a2.current, null);
  Z$2 = gj = b2;
  T$2 = 0;
  qk = null;
  sk = rk = hh = 0;
  uk = tk = null;
  if (null !== Wg) {
    for (b2 = 0; b2 < Wg.length; b2++)
      if (c2 = Wg[b2], d2 = c2.interleaved, null !== d2) {
        c2.interleaved = null;
        var e2 = d2.next, f2 = c2.pending;
        if (null !== f2) {
          var g2 = f2.next;
          f2.next = e2;
          d2.next = g2;
        }
        c2.pending = d2;
      }
    Wg = null;
  }
  return a2;
}
function Nk(a2, b2) {
  do {
    var c2 = Y$1;
    try {
      Qg();
      Ph.current = ai;
      if (Sh) {
        for (var d2 = N$3.memoizedState; null !== d2; ) {
          var e2 = d2.queue;
          null !== e2 && (e2.pending = null);
          d2 = d2.next;
        }
        Sh = false;
      }
      Rh = 0;
      P$3 = O$3 = N$3 = null;
      Th = false;
      Uh = 0;
      ok.current = null;
      if (null === c2 || null === c2.return) {
        T$2 = 1;
        qk = b2;
        Y$1 = null;
        break;
      }
      a: {
        var f2 = a2, g2 = c2.return, h2 = c2, k2 = b2;
        b2 = Z$2;
        h2.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h2, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Vi(g2);
          if (null !== y2) {
            y2.flags &= -257;
            Wi(y2, g2, h2, f2, b2);
            y2.mode & 1 && Ti(f2, l2, b2);
            b2 = y2;
            k2 = l2;
            var n2 = b2.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b2.updateQueue = t2;
            } else
              n2.add(k2);
            break a;
          } else {
            if (0 === (b2 & 1)) {
              Ti(f2, l2, b2);
              uj();
              break a;
            }
            k2 = Error(p$c(426));
          }
        } else if (I$4 && h2.mode & 1) {
          var J2 = Vi(g2);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Wi(J2, g2, h2, f2, b2);
            Jg(Ki(k2, h2));
            break a;
          }
        }
        f2 = k2 = Ki(k2, h2);
        4 !== T$2 && (T$2 = 2);
        null === tk ? tk = [f2] : tk.push(f2);
        f2 = g2;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b2 &= -b2;
              f2.lanes |= b2;
              var x2 = Oi(f2, k2, b2);
              fh(f2, x2);
              break a;
            case 1:
              h2 = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si || !Si.has(u2)))) {
                f2.flags |= 65536;
                b2 &= -b2;
                f2.lanes |= b2;
                var F2 = Ri(f2, h2, b2);
                fh(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Tk(c2);
    } catch (na) {
      b2 = na;
      Y$1 === c2 && null !== c2 && (Y$1 = c2 = c2.return);
      continue;
    }
    break;
  } while (1);
}
function Kk() {
  var a2 = nk.current;
  nk.current = ai;
  return null === a2 ? ai : a2;
}
function uj() {
  if (0 === T$2 || 3 === T$2 || 2 === T$2)
    T$2 = 4;
  null === R$2 || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R$2, Z$2);
}
function Jk(a2, b2) {
  var c2 = K;
  K |= 2;
  var d2 = Kk();
  if (R$2 !== a2 || Z$2 !== b2)
    vk = null, Lk(a2, b2);
  do
    try {
      Uk();
      break;
    } catch (e2) {
      Nk(a2, e2);
    }
  while (1);
  Qg();
  K = c2;
  nk.current = d2;
  if (null !== Y$1)
    throw Error(p$c(261));
  R$2 = null;
  Z$2 = 0;
  return T$2;
}
function Uk() {
  for (; null !== Y$1; )
    Vk(Y$1);
}
function Mk() {
  for (; null !== Y$1 && !cc(); )
    Vk(Y$1);
}
function Vk(a2) {
  var b2 = Wk(a2.alternate, a2, gj);
  a2.memoizedProps = a2.pendingProps;
  null === b2 ? Tk(a2) : Y$1 = b2;
  ok.current = null;
}
function Tk(a2) {
  var b2 = a2;
  do {
    var c2 = b2.alternate;
    a2 = b2.return;
    if (0 === (b2.flags & 32768)) {
      if (c2 = Fj(c2, b2, gj), null !== c2) {
        Y$1 = c2;
        return;
      }
    } else {
      c2 = Jj(c2, b2);
      if (null !== c2) {
        c2.flags &= 32767;
        Y$1 = c2;
        return;
      }
      if (null !== a2)
        a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null;
      else {
        T$2 = 6;
        Y$1 = null;
        return;
      }
    }
    b2 = b2.sibling;
    if (null !== b2) {
      Y$1 = b2;
      return;
    }
    Y$1 = b2 = a2;
  } while (null !== b2);
  0 === T$2 && (T$2 = 5);
}
function Qk(a2, b2, c2) {
  var d2 = C$1, e2 = pk.transition;
  try {
    pk.transition = null, C$1 = 1, Xk(a2, b2, c2, d2);
  } finally {
    pk.transition = e2, C$1 = d2;
  }
  return null;
}
function Xk(a2, b2, c2, d2) {
  do
    Ik();
  while (null !== xk);
  if (0 !== (K & 6))
    throw Error(p$c(327));
  c2 = a2.finishedWork;
  var e2 = a2.finishedLanes;
  if (null === c2)
    return null;
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  if (c2 === a2.current)
    throw Error(p$c(177));
  a2.callbackNode = null;
  a2.callbackPriority = 0;
  var f2 = c2.lanes | c2.childLanes;
  Bc(a2, f2);
  a2 === R$2 && (Y$1 = R$2 = null, Z$2 = 0);
  0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || wk || (wk = true, Gk(hc, function() {
    Ik();
    return null;
  }));
  f2 = 0 !== (c2.flags & 15990);
  if (0 !== (c2.subtreeFlags & 15990) || f2) {
    f2 = pk.transition;
    pk.transition = null;
    var g2 = C$1;
    C$1 = 1;
    var h2 = K;
    K |= 4;
    ok.current = null;
    Pj(a2, c2);
    ek(c2, a2);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a2.current = c2;
    ik(c2);
    dc();
    K = h2;
    C$1 = g2;
    pk.transition = f2;
  } else
    a2.current = c2;
  wk && (wk = false, xk = a2, yk = e2);
  f2 = a2.pendingLanes;
  0 === f2 && (Si = null);
  mc(c2.stateNode);
  Ek(a2, B$1());
  if (null !== b2)
    for (d2 = a2.onRecoverableError, c2 = 0; c2 < b2.length; c2++)
      e2 = b2[c2], d2(e2.value, { componentStack: e2.stack, digest: e2.digest });
  if (Pi)
    throw Pi = false, a2 = Qi, Qi = null, a2;
  0 !== (yk & 1) && 0 !== a2.tag && Ik();
  f2 = a2.pendingLanes;
  0 !== (f2 & 1) ? a2 === Ak ? zk++ : (zk = 0, Ak = a2) : zk = 0;
  jg();
  return null;
}
function Ik() {
  if (null !== xk) {
    var a2 = Dc(yk), b2 = pk.transition, c2 = C$1;
    try {
      pk.transition = null;
      C$1 = 16 > a2 ? 16 : a2;
      if (null === xk)
        var d2 = false;
      else {
        a2 = xk;
        xk = null;
        yk = 0;
        if (0 !== (K & 6))
          throw Error(p$c(331));
        var e2 = K;
        K |= 4;
        for (V = a2.current; null !== V; ) {
          var f2 = V, g2 = f2.child;
          if (0 !== (V.flags & 16)) {
            var h2 = f2.deletions;
            if (null !== h2) {
              for (var k2 = 0; k2 < h2.length; k2++) {
                var l2 = h2[k2];
                for (V = l2; null !== V; ) {
                  var m2 = V;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2)
                    q2.return = m2, V = q2;
                  else
                    for (; null !== V; ) {
                      m2 = V;
                      var r2 = m2.sibling, y2 = m2.return;
                      Tj(m2);
                      if (m2 === l2) {
                        V = null;
                        break;
                      }
                      if (null !== r2) {
                        r2.return = y2;
                        V = r2;
                        break;
                      }
                      V = y2;
                    }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g2)
            g2.return = f2, V = g2;
          else
            b:
              for (; null !== V; ) {
                f2 = V;
                if (0 !== (f2.flags & 2048))
                  switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, f2, f2.return);
                  }
                var x2 = f2.sibling;
                if (null !== x2) {
                  x2.return = f2.return;
                  V = x2;
                  break b;
                }
                V = f2.return;
              }
        }
        var w2 = a2.current;
        for (V = w2; null !== V; ) {
          g2 = V;
          var u2 = g2.child;
          if (0 !== (g2.subtreeFlags & 2064) && null !== u2)
            u2.return = g2, V = u2;
          else
            b:
              for (g2 = w2; null !== V; ) {
                h2 = V;
                if (0 !== (h2.flags & 2048))
                  try {
                    switch (h2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rj(9, h2);
                    }
                  } catch (na) {
                    W$1(h2, h2.return, na);
                  }
                if (h2 === g2) {
                  V = null;
                  break b;
                }
                var F2 = h2.sibling;
                if (null !== F2) {
                  F2.return = h2.return;
                  V = F2;
                  break b;
                }
                V = h2.return;
              }
        }
        K = e2;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot)
          try {
            lc.onPostCommitFiberRoot(kc, a2);
          } catch (na) {
          }
        d2 = true;
      }
      return d2;
    } finally {
      C$1 = c2, pk.transition = b2;
    }
  }
  return false;
}
function Yk(a2, b2, c2) {
  b2 = Ki(c2, b2);
  b2 = Oi(a2, b2, 1);
  a2 = dh(a2, b2, 1);
  b2 = L$2();
  null !== a2 && (Ac(a2, 1, b2), Ek(a2, b2));
}
function W$1(a2, b2, c2) {
  if (3 === a2.tag)
    Yk(a2, a2, c2);
  else
    for (; null !== b2; ) {
      if (3 === b2.tag) {
        Yk(b2, a2, c2);
        break;
      } else if (1 === b2.tag) {
        var d2 = b2.stateNode;
        if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Si || !Si.has(d2))) {
          a2 = Ki(c2, a2);
          a2 = Ri(b2, a2, 1);
          b2 = dh(b2, a2, 1);
          a2 = L$2();
          null !== b2 && (Ac(b2, 1, a2), Ek(b2, a2));
          break;
        }
      }
      b2 = b2.return;
    }
}
function Ui(a2, b2, c2) {
  var d2 = a2.pingCache;
  null !== d2 && d2.delete(b2);
  b2 = L$2();
  a2.pingedLanes |= a2.suspendedLanes & c2;
  R$2 === a2 && (Z$2 & c2) === c2 && (4 === T$2 || 3 === T$2 && (Z$2 & 130023424) === Z$2 && 500 > B$1() - gk ? Lk(a2, 0) : sk |= c2);
  Ek(a2, b2);
}
function Zk(a2, b2) {
  0 === b2 && (0 === (a2.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c2 = L$2();
  a2 = Zg(a2, b2);
  null !== a2 && (Ac(a2, b2, c2), Ek(a2, c2));
}
function vj(a2) {
  var b2 = a2.memoizedState, c2 = 0;
  null !== b2 && (c2 = b2.retryLane);
  Zk(a2, c2);
}
function ck(a2, b2) {
  var c2 = 0;
  switch (a2.tag) {
    case 13:
      var d2 = a2.stateNode;
      var e2 = a2.memoizedState;
      null !== e2 && (c2 = e2.retryLane);
      break;
    case 19:
      d2 = a2.stateNode;
      break;
    default:
      throw Error(p$c(314));
  }
  null !== d2 && d2.delete(b2);
  Zk(a2, c2);
}
var Wk;
Wk = function(a2, b2, c2) {
  if (null !== a2)
    if (a2.memoizedProps !== b2.pendingProps || Wf.current)
      Ug = true;
    else {
      if (0 === (a2.lanes & c2) && 0 === (b2.flags & 128))
        return Ug = false, zj(a2, b2, c2);
      Ug = 0 !== (a2.flags & 131072) ? true : false;
    }
  else
    Ug = false, I$4 && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      var d2 = b2.type;
      jj(a2, b2);
      a2 = b2.pendingProps;
      var e2 = Yf(b2, H$3.current);
      Tg(b2, c2);
      e2 = Xh(null, b2, d2, a2, e2, c2);
      var f2 = bi();
      b2.flags |= 1;
      "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d2) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, ah(b2), e2.updater = nh, b2.stateNode = e2, e2._reactInternals = b2, rh(b2, d2, a2, c2), b2 = kj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I$4 && f2 && vg(b2), Yi(null, b2, e2, c2), b2 = b2.child);
      return b2;
    case 16:
      d2 = b2.elementType;
      a: {
        jj(a2, b2);
        a2 = b2.pendingProps;
        e2 = d2._init;
        d2 = e2(d2._payload);
        b2.type = d2;
        e2 = b2.tag = $k(d2);
        a2 = Lg(d2, a2);
        switch (e2) {
          case 0:
            b2 = dj(null, b2, d2, a2, c2);
            break a;
          case 1:
            b2 = ij(null, b2, d2, a2, c2);
            break a;
          case 11:
            b2 = Zi(null, b2, d2, a2, c2);
            break a;
          case 14:
            b2 = aj(null, b2, d2, Lg(d2.type, a2), c2);
            break a;
        }
        throw Error(p$c(
          306,
          d2,
          ""
        ));
      }
      return b2;
    case 0:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), dj(a2, b2, d2, e2, c2);
    case 1:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), ij(a2, b2, d2, e2, c2);
    case 3:
      a: {
        lj(b2);
        if (null === a2)
          throw Error(p$c(387));
        d2 = b2.pendingProps;
        f2 = b2.memoizedState;
        e2 = f2.element;
        bh(a2, b2);
        gh(b2, d2, null, c2);
        var g2 = b2.memoizedState;
        d2 = g2.element;
        if (f2.isDehydrated)
          if (f2 = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
            e2 = Ki(Error(p$c(423)), b2);
            b2 = mj(a2, b2, d2, c2, e2);
            break a;
          } else if (d2 !== e2) {
            e2 = Ki(Error(p$c(424)), b2);
            b2 = mj(a2, b2, d2, c2, e2);
            break a;
          } else
            for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I$4 = true, zg = null, c2 = Ch(b2, null, d2, c2), b2.child = c2; c2; )
              c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
        else {
          Ig();
          if (d2 === e2) {
            b2 = $i(a2, b2, c2);
            break a;
          }
          Yi(a2, b2, d2, c2);
        }
        b2 = b2.child;
      }
      return b2;
    case 5:
      return Kh(b2), null === a2 && Eg(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = null !== a2 ? a2.memoizedProps : null, g2 = e2.children, Ef(d2, e2) ? g2 = null : null !== f2 && Ef(d2, f2) && (b2.flags |= 32), hj(a2, b2), Yi(a2, b2, g2, c2), b2.child;
    case 6:
      return null === a2 && Eg(b2), null;
    case 13:
      return pj(a2, b2, c2);
    case 4:
      return Ih(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a2 ? b2.child = Bh(b2, null, d2, c2) : Yi(a2, b2, d2, c2), b2.child;
    case 11:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), Zi(a2, b2, d2, e2, c2);
    case 7:
      return Yi(a2, b2, b2.pendingProps, c2), b2.child;
    case 8:
      return Yi(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 12:
      return Yi(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 10:
      a: {
        d2 = b2.type._context;
        e2 = b2.pendingProps;
        f2 = b2.memoizedProps;
        g2 = e2.value;
        G$1(Mg, d2._currentValue);
        d2._currentValue = g2;
        if (null !== f2)
          if (He$2(f2.value, g2)) {
            if (f2.children === e2.children && !Wf.current) {
              b2 = $i(a2, b2, c2);
              break a;
            }
          } else
            for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
              var h2 = f2.dependencies;
              if (null !== h2) {
                g2 = f2.child;
                for (var k2 = h2.firstContext; null !== k2; ) {
                  if (k2.context === d2) {
                    if (1 === f2.tag) {
                      k2 = ch(-1, c2 & -c2);
                      k2.tag = 2;
                      var l2 = f2.updateQueue;
                      if (null !== l2) {
                        l2 = l2.shared;
                        var m2 = l2.pending;
                        null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                        l2.pending = k2;
                      }
                    }
                    f2.lanes |= c2;
                    k2 = f2.alternate;
                    null !== k2 && (k2.lanes |= c2);
                    Sg(
                      f2.return,
                      c2,
                      b2
                    );
                    h2.lanes |= c2;
                    break;
                  }
                  k2 = k2.next;
                }
              } else if (10 === f2.tag)
                g2 = f2.type === b2.type ? null : f2.child;
              else if (18 === f2.tag) {
                g2 = f2.return;
                if (null === g2)
                  throw Error(p$c(341));
                g2.lanes |= c2;
                h2 = g2.alternate;
                null !== h2 && (h2.lanes |= c2);
                Sg(g2, c2, b2);
                g2 = f2.sibling;
              } else
                g2 = f2.child;
              if (null !== g2)
                g2.return = f2;
              else
                for (g2 = f2; null !== g2; ) {
                  if (g2 === b2) {
                    g2 = null;
                    break;
                  }
                  f2 = g2.sibling;
                  if (null !== f2) {
                    f2.return = g2.return;
                    g2 = f2;
                    break;
                  }
                  g2 = g2.return;
                }
              f2 = g2;
            }
        Yi(a2, b2, e2.children, c2);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e2 = b2.type, d2 = b2.pendingProps.children, Tg(b2, c2), e2 = Vg(e2), d2 = d2(e2), b2.flags |= 1, Yi(a2, b2, d2, c2), b2.child;
    case 14:
      return d2 = b2.type, e2 = Lg(d2, b2.pendingProps), e2 = Lg(d2.type, e2), aj(a2, b2, d2, e2, c2);
    case 15:
      return cj(a2, b2, b2.type, b2.pendingProps, c2);
    case 17:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), jj(a2, b2), b2.tag = 1, Zf(d2) ? (a2 = true, cg(b2)) : a2 = false, Tg(b2, c2), ph(b2, d2, e2), rh(b2, d2, e2, c2), kj(null, b2, d2, true, a2, c2);
    case 19:
      return yj(a2, b2, c2);
    case 22:
      return ej(a2, b2, c2);
  }
  throw Error(p$c(156, b2.tag));
};
function Gk(a2, b2) {
  return ac(a2, b2);
}
function al(a2, b2, c2, d2) {
  this.tag = a2;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d2;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a2, b2, c2, d2) {
  return new al(a2, b2, c2, d2);
}
function bj(a2) {
  a2 = a2.prototype;
  return !(!a2 || !a2.isReactComponent);
}
function $k(a2) {
  if ("function" === typeof a2)
    return bj(a2) ? 1 : 0;
  if (void 0 !== a2 && null !== a2) {
    a2 = a2.$$typeof;
    if (a2 === Da)
      return 11;
    if (a2 === Ga)
      return 14;
  }
  return 2;
}
function wh(a2, b2) {
  var c2 = a2.alternate;
  null === c2 ? (c2 = Bg(a2.tag, b2, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b2, c2.type = a2.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
  c2.flags = a2.flags & 14680064;
  c2.childLanes = a2.childLanes;
  c2.lanes = a2.lanes;
  c2.child = a2.child;
  c2.memoizedProps = a2.memoizedProps;
  c2.memoizedState = a2.memoizedState;
  c2.updateQueue = a2.updateQueue;
  b2 = a2.dependencies;
  c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c2.sibling = a2.sibling;
  c2.index = a2.index;
  c2.ref = a2.ref;
  return c2;
}
function yh(a2, b2, c2, d2, e2, f2) {
  var g2 = 2;
  d2 = a2;
  if ("function" === typeof a2)
    bj(a2) && (g2 = 1);
  else if ("string" === typeof a2)
    g2 = 5;
  else
    a:
      switch (a2) {
        case ya:
          return Ah(c2.children, e2, f2, b2);
        case za:
          g2 = 8;
          e2 |= 8;
          break;
        case Aa:
          return a2 = Bg(12, c2, b2, e2 | 2), a2.elementType = Aa, a2.lanes = f2, a2;
        case Ea:
          return a2 = Bg(13, c2, b2, e2), a2.elementType = Ea, a2.lanes = f2, a2;
        case Fa:
          return a2 = Bg(19, c2, b2, e2), a2.elementType = Fa, a2.lanes = f2, a2;
        case Ia:
          return qj(c2, e2, f2, b2);
        default:
          if ("object" === typeof a2 && null !== a2)
            switch (a2.$$typeof) {
              case Ba:
                g2 = 10;
                break a;
              case Ca:
                g2 = 9;
                break a;
              case Da:
                g2 = 11;
                break a;
              case Ga:
                g2 = 14;
                break a;
              case Ha:
                g2 = 16;
                d2 = null;
                break a;
            }
          throw Error(p$c(130, null == a2 ? a2 : typeof a2, ""));
      }
  b2 = Bg(g2, c2, b2, e2);
  b2.elementType = a2;
  b2.type = d2;
  b2.lanes = f2;
  return b2;
}
function Ah(a2, b2, c2, d2) {
  a2 = Bg(7, a2, d2, b2);
  a2.lanes = c2;
  return a2;
}
function qj(a2, b2, c2, d2) {
  a2 = Bg(22, a2, d2, b2);
  a2.elementType = Ia;
  a2.lanes = c2;
  a2.stateNode = { isHidden: false };
  return a2;
}
function xh(a2, b2, c2) {
  a2 = Bg(6, a2, null, b2);
  a2.lanes = c2;
  return a2;
}
function zh(a2, b2, c2) {
  b2 = Bg(4, null !== a2.children ? a2.children : [], a2.key, b2);
  b2.lanes = c2;
  b2.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
  return b2;
}
function bl(a2, b2, c2, d2, e2) {
  this.tag = b2;
  this.containerInfo = a2;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d2;
  this.onRecoverableError = e2;
  this.mutableSourceEagerHydrationData = null;
}
function cl(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  a2 = new bl(a2, b2, c2, h2, k2);
  1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
  f2 = Bg(3, null, null, b2);
  a2.current = f2;
  f2.stateNode = a2;
  f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  ah(f2);
  return a2;
}
function dl(a2, b2, c2) {
  var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d2 ? null : "" + d2, children: a2, containerInfo: b2, implementation: c2 };
}
function el(a2) {
  if (!a2)
    return Vf;
  a2 = a2._reactInternals;
  a: {
    if (Vb(a2) !== a2 || 1 !== a2.tag)
      throw Error(p$c(170));
    var b2 = a2;
    do {
      switch (b2.tag) {
        case 3:
          b2 = b2.stateNode.context;
          break a;
        case 1:
          if (Zf(b2.type)) {
            b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b2 = b2.return;
    } while (null !== b2);
    throw Error(p$c(171));
  }
  if (1 === a2.tag) {
    var c2 = a2.type;
    if (Zf(c2))
      return bg(a2, c2, b2);
  }
  return b2;
}
function fl(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  a2 = cl(c2, d2, true, a2, e2, f2, g2, h2, k2);
  a2.context = el(null);
  c2 = a2.current;
  d2 = L$2();
  e2 = lh(c2);
  f2 = ch(d2, e2);
  f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
  dh(c2, f2, e2);
  a2.current.lanes = e2;
  Ac(a2, e2, d2);
  Ek(a2, d2);
  return a2;
}
function gl(a2, b2, c2, d2) {
  var e2 = b2.current, f2 = L$2(), g2 = lh(e2);
  c2 = el(c2);
  null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
  b2 = ch(f2, g2);
  b2.payload = { element: a2 };
  d2 = void 0 === d2 ? null : d2;
  null !== d2 && (b2.callback = d2);
  a2 = dh(e2, b2, g2);
  null !== a2 && (mh(a2, e2, g2, f2), eh(a2, e2, g2));
  return g2;
}
function hl(a2) {
  a2 = a2.current;
  if (!a2.child)
    return null;
  switch (a2.child.tag) {
    case 5:
      return a2.child.stateNode;
    default:
      return a2.child.stateNode;
  }
}
function il(a2, b2) {
  a2 = a2.memoizedState;
  if (null !== a2 && null !== a2.dehydrated) {
    var c2 = a2.retryLane;
    a2.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
  }
}
function jl(a2, b2) {
  il(a2, b2);
  (a2 = a2.alternate) && il(a2, b2);
}
function kl() {
  return null;
}
var ll = "function" === typeof reportError ? reportError : function(a2) {
  console.error(a2);
};
function ml(a2) {
  this._internalRoot = a2;
}
nl.prototype.render = ml.prototype.render = function(a2) {
  var b2 = this._internalRoot;
  if (null === b2)
    throw Error(p$c(409));
  gl(a2, b2, null, null);
};
nl.prototype.unmount = ml.prototype.unmount = function() {
  var a2 = this._internalRoot;
  if (null !== a2) {
    this._internalRoot = null;
    var b2 = a2.containerInfo;
    Sk(function() {
      gl(null, a2, null, null);
    });
    b2[uf] = null;
  }
};
function nl(a2) {
  this._internalRoot = a2;
}
nl.prototype.unstable_scheduleHydration = function(a2) {
  if (a2) {
    var b2 = Hc();
    a2 = { blockedOn: null, target: a2, priority: b2 };
    for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++)
      ;
    Qc.splice(c2, 0, a2);
    0 === c2 && Vc(a2);
  }
};
function ol(a2) {
  return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType);
}
function pl(a2) {
  return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType && (8 !== a2.nodeType || " react-mount-point-unstable " !== a2.nodeValue));
}
function ql() {
}
function rl(a2, b2, c2, d2, e2) {
  if (e2) {
    if ("function" === typeof d2) {
      var f2 = d2;
      d2 = function() {
        var a3 = hl(g2);
        f2.call(a3);
      };
    }
    var g2 = fl(b2, d2, a2, 0, null, false, false, "", ql);
    a2._reactRootContainer = g2;
    a2[uf] = g2.current;
    sf(8 === a2.nodeType ? a2.parentNode : a2);
    Sk();
    return g2;
  }
  for (; e2 = a2.lastChild; )
    a2.removeChild(e2);
  if ("function" === typeof d2) {
    var h2 = d2;
    d2 = function() {
      var a3 = hl(k2);
      h2.call(a3);
    };
  }
  var k2 = cl(a2, 0, false, null, null, false, false, "", ql);
  a2._reactRootContainer = k2;
  a2[uf] = k2.current;
  sf(8 === a2.nodeType ? a2.parentNode : a2);
  Sk(function() {
    gl(b2, k2, c2, d2);
  });
  return k2;
}
function sl(a2, b2, c2, d2, e2) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g2 = f2;
    if ("function" === typeof e2) {
      var h2 = e2;
      e2 = function() {
        var a3 = hl(g2);
        h2.call(a3);
      };
    }
    gl(b2, g2, a2, e2);
  } else
    g2 = rl(c2, b2, a2, e2, d2);
  return hl(g2);
}
Ec = function(a2) {
  switch (a2.tag) {
    case 3:
      var b2 = a2.stateNode;
      if (b2.current.memoizedState.isDehydrated) {
        var c2 = tc$1(b2.pendingLanes);
        0 !== c2 && (Cc(b2, c2 | 1), Ek(b2, B$1()), 0 === (K & 6) && (Hj = B$1() + 500, jg()));
      }
      break;
    case 13:
      Sk(function() {
        var b3 = Zg(a2, 1);
        if (null !== b3) {
          var c3 = L$2();
          mh(b3, a2, 1, c3);
        }
      }), jl(a2, 1);
  }
};
Fc = function(a2) {
  if (13 === a2.tag) {
    var b2 = Zg(a2, 134217728);
    if (null !== b2) {
      var c2 = L$2();
      mh(b2, a2, 134217728, c2);
    }
    jl(a2, 134217728);
  }
};
Gc = function(a2) {
  if (13 === a2.tag) {
    var b2 = lh(a2), c2 = Zg(a2, b2);
    if (null !== c2) {
      var d2 = L$2();
      mh(c2, a2, b2, d2);
    }
    jl(a2, b2);
  }
};
Hc = function() {
  return C$1;
};
Ic = function(a2, b2) {
  var c2 = C$1;
  try {
    return C$1 = a2, b2();
  } finally {
    C$1 = c2;
  }
};
yb = function(a2, b2, c2) {
  switch (b2) {
    case "input":
      bb(a2, c2);
      b2 = c2.name;
      if ("radio" === c2.type && null != b2) {
        for (c2 = a2; c2.parentNode; )
          c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c2.length; b2++) {
          var d2 = c2[b2];
          if (d2 !== a2 && d2.form === a2.form) {
            var e2 = Db(d2);
            if (!e2)
              throw Error(p$c(90));
            Wa(d2);
            bb(d2, e2);
          }
        }
      }
      break;
    case "textarea":
      ib(a2, c2);
      break;
    case "select":
      b2 = c2.value, null != b2 && fb(a2, !!c2.multiple, b2, false);
  }
};
Gb = Rk;
Hb = Sk;
var tl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Rk] }, ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
  a2 = Zb(a2);
  return null === a2 ? null : a2.stateNode;
}, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wl.isDisabled && wl.supportsFiber)
    try {
      kc = wl.inject(vl), lc = wl;
    } catch (a2) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
reactDom_production_min.createPortal = function(a2, b2) {
  var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!ol(b2))
    throw Error(p$c(200));
  return dl(a2, b2, null, c2);
};
reactDom_production_min.createRoot = function(a2, b2) {
  if (!ol(a2))
    throw Error(p$c(299));
  var c2 = false, d2 = "", e2 = ll;
  null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d2 = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e2 = b2.onRecoverableError));
  b2 = cl(a2, 1, false, null, null, c2, false, d2, e2);
  a2[uf] = b2.current;
  sf(8 === a2.nodeType ? a2.parentNode : a2);
  return new ml(b2);
};
reactDom_production_min.findDOMNode = function(a2) {
  if (null == a2)
    return null;
  if (1 === a2.nodeType)
    return a2;
  var b2 = a2._reactInternals;
  if (void 0 === b2) {
    if ("function" === typeof a2.render)
      throw Error(p$c(188));
    a2 = Object.keys(a2).join(",");
    throw Error(p$c(268, a2));
  }
  a2 = Zb(b2);
  a2 = null === a2 ? null : a2.stateNode;
  return a2;
};
reactDom_production_min.flushSync = function(a2) {
  return Sk(a2);
};
reactDom_production_min.hydrate = function(a2, b2, c2) {
  if (!pl(b2))
    throw Error(p$c(200));
  return sl(null, a2, b2, true, c2);
};
reactDom_production_min.hydrateRoot = function(a2, b2, c2) {
  if (!ol(a2))
    throw Error(p$c(405));
  var d2 = null != c2 && c2.hydratedSources || null, e2 = false, f2 = "", g2 = ll;
  null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e2 = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
  b2 = fl(b2, null, a2, 1, null != c2 ? c2 : null, e2, false, f2, g2);
  a2[uf] = b2.current;
  sf(a2);
  if (d2)
    for (a2 = 0; a2 < d2.length; a2++)
      c2 = d2[a2], e2 = c2._getVersion, e2 = e2(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(
        c2,
        e2
      );
  return new nl(b2);
};
reactDom_production_min.render = function(a2, b2, c2) {
  if (!pl(b2))
    throw Error(p$c(200));
  return sl(null, a2, b2, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a2) {
  if (!pl(a2))
    throw Error(p$c(40));
  return a2._reactRootContainer ? (Sk(function() {
    sl(null, null, a2, false, function() {
      a2._reactRootContainer = null;
      a2[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Rk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a2, b2, c2, d2) {
  if (!pl(c2))
    throw Error(p$c(200));
  if (null == a2 || void 0 === a2._reactInternals)
    throw Error(p$c(38));
  return sl(a2, b2, c2, false, d2);
};
reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";
(function(module) {
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    module.exports = reactDom_production_min;
  }
})(reactDom);
var hydrateRoot;
var createRoot;
var m$7 = reactDomExports;
{
  createRoot = m$7.createRoot;
  hydrateRoot = m$7.hydrateRoot;
}
/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$4() {
  _extends$4 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4.apply(this, arguments);
}
var Action;
(function(Action2) {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
})(Action || (Action = {}));
const PopStateEventType = "popstate";
function createBrowserHistory(options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  function createBrowserLocation(window2, globalHistory) {
    let {
      pathname,
      search,
      hash
    } = window2.location;
    return createLocation(
      "",
      {
        pathname,
        search,
        hash
      },
      // state defaults to `null` because `window.history.state` does
      globalHistory.state && globalHistory.state.usr || null,
      globalHistory.state && globalHistory.state.key || "default"
    );
  }
  function createBrowserHref(window2, to) {
    return typeof to === "string" ? to : createPath(to);
  }
  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options2);
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e2) {
    }
  }
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
function getHistoryState(location, index2) {
  return {
    usr: location.state,
    key: location.key,
    idx: index2
  };
}
function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }
  let location = _extends$4({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });
  return location;
}
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  let {
    window: window2 = document.defaultView,
    v5Compat = false
  } = options2;
  let globalHistory = window2.history;
  let action = Action.Pop;
  let listener = null;
  let index2 = getIndex();
  if (index2 == null) {
    index2 = 0;
    globalHistory.replaceState(_extends$4({}, globalHistory.state, {
      idx: index2
    }), "");
  }
  function getIndex() {
    let state = globalHistory.state || {
      idx: null
    };
    return state.idx;
  }
  function handlePop() {
    action = Action.Pop;
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index2;
    index2 = nextIndex;
    if (listener) {
      listener({
        action,
        location: history.location,
        delta
      });
    }
  }
  function push(to, state) {
    action = Action.Push;
    let location = createLocation(history.location, to, state);
    if (validateLocation)
      validateLocation(location, to);
    index2 = getIndex() + 1;
    let historyState = getHistoryState(location, index2);
    let url = history.createHref(location);
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      window2.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 1
      });
    }
  }
  function replace(to, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to, state);
    if (validateLocation)
      validateLocation(location, to);
    index2 = getIndex();
    let historyState = getHistoryState(location, index2);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 0
      });
    }
  }
  function createURL(to) {
    let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href;
    let href = typeof to === "string" ? to : createPath(to);
    invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
    return new URL(href, base);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window2, globalHistory);
    },
    listen(fn2) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window2.addEventListener(PopStateEventType, handlePop);
      listener = fn2;
      return () => {
        window2.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return createHref(window2, to);
    },
    createURL,
    encodeLocation(to) {
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push,
    replace,
    go(n2) {
      return globalHistory.go(n2);
    }
  };
  return history;
}
var ResultType;
(function(ResultType2) {
  ResultType2["data"] = "data";
  ResultType2["deferred"] = "deferred";
  ResultType2["redirect"] = "redirect";
  ResultType2["error"] = "error";
})(ResultType || (ResultType = {}));
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i2 = 0; matches == null && i2 < branches.length; ++i2) {
    matches = matchRouteBranch(
      branches[i2],
      // Incoming pathnames are generally encoded from either window.location
      // or from router.navigate, but we want to match against the unencoded
      // paths in the route definitions.  Memory router locations won't be
      // encoded here but there also shouldn't be anything to decode so this
      // should be a safe operation.  This avoids needing matchRoutes to be
      // history-aware.
      safelyDecodeURI(pathname)
    );
  }
  return matches;
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  let flattenRoute = (route, index2, relativePath) => {
    let meta = {
      relativePath: relativePath === void 0 ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index2,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant(
        // Our types know better, but runtime JS may not!
        // @ts-expect-error
        route.index !== true,
        "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')
      );
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes.forEach((route, index2) => {
    var _route$path;
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index2);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index2, exploded);
      }
    }
  });
  return branches;
}
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0)
    return [];
  let [first, ...rest] = segments;
  let isOptional = first.endsWith("?");
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  result.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/")));
  if (isOptional) {
    result.push(...restExploded);
  }
  return result.map((exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
  branches.sort((a2, b2) => a2.score !== b2.score ? b2.score - a2.score : compareIndexes(a2.routesMeta.map((meta) => meta.childrenIndex), b2.routesMeta.map((meta) => meta.childrenIndex)));
}
const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = (s2) => s2 === "*";
function computeScore(path, index2) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index2) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s2) => !isSplat(s2)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a2, b2) {
  let siblings = a2.length === b2.length && a2.slice(0, -1).every((n2, i2) => n2 === b2[i2]);
  return siblings ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a2[a2.length - 1] - b2[b2.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i2 = 0; i2 < routesMeta.length; ++i2) {
    let meta = routesMeta[i2];
    let end = i2 === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match)
      return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match)
    return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index2) => {
    if (paramName === "*") {
      let splatValue = captureGroups[index2] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    memo[paramName] = safelyDecodeURIComponent(captureGroups[index2] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (_2, paramName) => {
    paramNames.push(paramName);
    return "/([^\\/]+)";
  });
  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end) {
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  } else
    ;
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, paramNames];
}
function safelyDecodeURI(value) {
  try {
    return decodeURI(value);
  } catch (error) {
    warning(false, 'The URL path "' + value + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + error + ")."));
    return value;
  }
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ")."));
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1)
        segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function getPathContributingMatches(matches) {
  return matches.filter((match, index2) => index2 === 0 || match.route.path && match.route.path.length > 0);
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends$4({}, toArg);
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  if (isPathRelative || toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
const normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
const normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function isPolyfill(x2, y2) {
  return x2 === y2 && (x2 !== 0 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
}
const is = typeof Object.is === "function" ? Object.is : isPolyfill;
const {
  useState,
  useEffect,
  useLayoutEffect,
  useDebugValue
} = e$7;
function useSyncExternalStore$2(subscribe, getSnapshot, getServerSnapshot) {
  const value = getSnapshot();
  const [{
    inst
  }, forceUpdate] = useState({
    inst: {
      value,
      getSnapshot
    }
  });
  useLayoutEffect(() => {
    inst.value = value;
    inst.getSnapshot = getSnapshot;
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({
        inst
      });
    }
  }, [subscribe, value, getSnapshot]);
  useEffect(() => {
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({
        inst
      });
    }
    const handleStoreChange = () => {
      if (checkIfSnapshotChanged(inst)) {
        forceUpdate({
          inst
        });
      }
    };
    return subscribe(handleStoreChange);
  }, [subscribe]);
  useDebugValue(value);
  return value;
}
function checkIfSnapshotChanged(inst) {
  const latestGetSnapshot = inst.getSnapshot;
  const prevValue = inst.value;
  try {
    const nextValue = latestGetSnapshot();
    return !is(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}
function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
  return getSnapshot();
}
const canUseDOM$1 = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
const isServerEnvironment = !canUseDOM$1;
const shim$1 = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore$2;
"useSyncExternalStore" in e$7 ? ((module) => module.useSyncExternalStore)(e$7) : shim$1;
const DataRouterContext = /* @__PURE__ */ reactExports.createContext(null);
const DataRouterStateContext = /* @__PURE__ */ reactExports.createContext(null);
const NavigationContext = /* @__PURE__ */ reactExports.createContext(null);
const LocationContext = /* @__PURE__ */ reactExports.createContext(null);
const RouteContext = /* @__PURE__ */ reactExports.createContext({
  outlet: null,
  matches: []
});
const RouteErrorContext = /* @__PURE__ */ reactExports.createContext(null);
function _extends$3() {
  _extends$3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    basename,
    navigator: navigator2
  } = reactExports.useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to, {
    relative
  });
  let joinedPathname = pathname;
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
  }
  return navigator2.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
function useInRouterContext() {
  return reactExports.useContext(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? invariant(false) : void 0;
  return reactExports.useContext(LocationContext).location;
}
function useNavigate() {
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    basename,
    navigator: navigator2
  } = reactExports.useContext(NavigationContext);
  let {
    matches
  } = reactExports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map((match) => match.pathnameBase));
  let activeRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    activeRef.current = true;
  });
  let navigate = reactExports.useCallback(function(to, options2) {
    if (options2 === void 0) {
      options2 = {};
    }
    if (!activeRef.current)
      return;
    if (typeof to === "number") {
      navigator2.go(to);
      return;
    }
    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options2.relative === "path");
    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    (!!options2.replace ? navigator2.replace : navigator2.push)(path, options2.state, options2);
  }, [basename, navigator2, routePathnamesJson, locationPathname]);
  return navigate;
}
function useResolvedPath(to, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    matches
  } = reactExports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map((match) => match.pathnameBase));
  return reactExports.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}
function useRoutes(routes, locationArg) {
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    navigator: navigator2
  } = reactExports.useContext(NavigationContext);
  let dataRouterStateContext = reactExports.useContext(DataRouterStateContext);
  let {
    matches: parentMatches
  } = reactExports.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  routeMatch && routeMatch.route;
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes, {
    pathname: remainingPathname
  });
  let renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([
      parentPathnameBase,
      // Re-encode pathnames that were decoded inside matchRoutes
      navigator2.encodeLocation ? navigator2.encodeLocation(match.pathname).pathname : match.pathname
    ]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
      parentPathnameBase,
      // Re-encode pathnames that were decoded inside matchRoutes
      navigator2.encodeLocation ? navigator2.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
    ])
  })), parentMatches, dataRouterStateContext || void 0);
  if (locationArg && renderedMatches) {
    return /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
      value: {
        location: _extends$3({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: Action.Pop
      }
    }, renderedMatches);
  }
  return renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let devInfo = null;
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ reactExports.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /* @__PURE__ */ reactExports.createElement("pre", {
    style: preStyles
  }, stack) : null, devInfo);
}
class RenderErrorBoundary extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location) {
      return {
        error: props.error,
        location: props.location
      };
    }
    return {
      error: props.error || state.error,
      location: state.location
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ reactExports.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataRouterContext = reactExports.useContext(DataRouterContext);
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (matches == null) {
    if (dataRouterState != null && dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  let errors = dataRouterState == null ? void 0 : dataRouterState.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex((m2) => m2.route.id && (errors == null ? void 0 : errors[m2.route.id]));
    !(errorIndex >= 0) ? invariant(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }
  return renderedMatches.reduceRight((outlet, match, index2) => {
    let error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null;
    let errorElement = null;
    if (dataRouterState) {
      if (match.route.ErrorBoundary) {
        errorElement = /* @__PURE__ */ reactExports.createElement(match.route.ErrorBoundary, null);
      } else if (match.route.errorElement) {
        errorElement = match.route.errorElement;
      } else {
        errorElement = /* @__PURE__ */ reactExports.createElement(DefaultErrorComponent, null);
      }
    }
    let matches2 = parentMatches.concat(renderedMatches.slice(0, index2 + 1));
    let getChildren = () => {
      let children = outlet;
      if (error) {
        children = errorElement;
      } else if (match.route.Component) {
        children = /* @__PURE__ */ reactExports.createElement(match.route.Component, null);
      } else if (match.route.element) {
        children = match.route.element;
      }
      return /* @__PURE__ */ reactExports.createElement(RenderedRoute, {
        match,
        routeContext: {
          outlet,
          matches: matches2
        },
        children
      });
    };
    return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index2 === 0) ? /* @__PURE__ */ reactExports.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      component: errorElement,
      error,
      children: getChildren(),
      routeContext: {
        outlet: null,
        matches: matches2
      }
    }) : getChildren();
  }, null);
}
var DataRouterHook$1;
(function(DataRouterHook2) {
  DataRouterHook2["UseBlocker"] = "useBlocker";
  DataRouterHook2["UseRevalidator"] = "useRevalidator";
})(DataRouterHook$1 || (DataRouterHook$1 = {}));
var DataRouterStateHook$1;
(function(DataRouterStateHook2) {
  DataRouterStateHook2["UseBlocker"] = "useBlocker";
  DataRouterStateHook2["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook2["UseActionData"] = "useActionData";
  DataRouterStateHook2["UseRouteError"] = "useRouteError";
  DataRouterStateHook2["UseNavigation"] = "useNavigation";
  DataRouterStateHook2["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook2["UseMatches"] = "useMatches";
  DataRouterStateHook2["UseRevalidator"] = "useRevalidator";
})(DataRouterStateHook$1 || (DataRouterStateHook$1 = {}));
function useDataRouterState(hookName) {
  let state = reactExports.useContext(DataRouterStateContext);
  !state ? invariant(false) : void 0;
  return state;
}
function useRouteContext(hookName) {
  let route = reactExports.useContext(RouteContext);
  !route ? invariant(false) : void 0;
  return route;
}
function useCurrentRouteId(hookName) {
  let route = useRouteContext();
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ? invariant(false) : void 0;
  return thisRoute.route.id;
}
function useRouteError() {
  var _state$errors;
  let error = reactExports.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook$1.UseRouteError);
  let routeId = useCurrentRouteId(DataRouterStateHook$1.UseRouteError);
  if (error) {
    return error;
  }
  return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
function Route(_props) {
  invariant(false);
}
function Router(_ref4) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator: navigator2,
    static: staticProp = false
  } = _ref4;
  !!useInRouterContext() ? invariant(false) : void 0;
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = reactExports.useMemo(() => ({
    basename,
    navigator: navigator2,
    static: staticProp
  }), [basename, navigator2, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = reactExports.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
  if (locationContext == null) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
    children,
    value: locationContext
  }));
}
function Routes(_ref5) {
  let {
    children,
    location
  } = _ref5;
  let dataRouterContext = reactExports.useContext(DataRouterContext);
  let routes = dataRouterContext && !children ? dataRouterContext.router.routes : createRoutesFromChildren(children);
  return useRoutes(routes, location);
}
var AwaitRenderStatus;
(function(AwaitRenderStatus2) {
  AwaitRenderStatus2[AwaitRenderStatus2["pending"] = 0] = "pending";
  AwaitRenderStatus2[AwaitRenderStatus2["success"] = 1] = "success";
  AwaitRenderStatus2[AwaitRenderStatus2["error"] = 2] = "error";
})(AwaitRenderStatus || (AwaitRenderStatus = {}));
new Promise(() => {
});
function createRoutesFromChildren(children, parentPath) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  let routes = [];
  reactExports.Children.forEach(children, (element, index2) => {
    if (!/* @__PURE__ */ reactExports.isValidElement(element)) {
      return;
    }
    let treePath = [...parentPath, index2];
    if (element.type === reactExports.Fragment) {
      routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
      return;
    }
    !(element.type === Route) ? invariant(false) : void 0;
    !(!element.props.index || !element.props.children) ? invariant(false) : void 0;
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      Component: element.props.Component,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      errorElement: element.props.errorElement,
      ErrorBoundary: element.props.ErrorBoundary,
      hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle,
      lazy: element.props.lazy
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children, treePath);
    }
    routes.push(route);
  });
  return routes;
}
/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && // Ignore everything but left clicks
  (!target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event);
}
const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"];
function BrowserRouter(_ref) {
  let {
    basename,
    children,
    window: window2
  } = _ref;
  let historyRef = reactExports.useRef();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({
      window: window2,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setState] = reactExports.useState({
    action: history.action,
    location: history.location
  });
  reactExports.useLayoutEffect(() => history.listen(setState), [history]);
  return /* @__PURE__ */ reactExports.createElement(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const Link = /* @__PURE__ */ reactExports.forwardRef(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    relative,
    reloadDocument,
    replace,
    state,
    target,
    to,
    preventScrollReset
  } = _ref4, rest = _objectWithoutPropertiesLoose(_ref4, _excluded);
  let {
    basename
  } = reactExports.useContext(NavigationContext);
  let absoluteHref;
  let isExternal = false;
  if (typeof to === "string" && ABSOLUTE_URL_REGEX.test(to)) {
    absoluteHref = to;
    if (isBrowser) {
      let currentUrl = new URL(window.location.href);
      let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
      let path = stripBasename(targetUrl.pathname, basename);
      if (targetUrl.origin === currentUrl.origin && path != null) {
        to = path + targetUrl.search + targetUrl.hash;
      } else {
        isExternal = true;
      }
    }
  }
  let href = useHref(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
    preventScrollReset,
    relative
  });
  function handleClick(event) {
    if (onClick)
      onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ reactExports.createElement("a", _extends$2({}, rest, {
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref,
      target
    }))
  );
});
var DataRouterHook;
(function(DataRouterHook2) {
  DataRouterHook2["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook2["UseSubmitImpl"] = "useSubmitImpl";
  DataRouterHook2["UseFetcher"] = "useFetcher";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function(DataRouterStateHook2) {
  DataRouterStateHook2["UseFetchers"] = "useFetchers";
  DataRouterStateHook2["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to, {
    relative
  });
  return reactExports.useCallback((event) => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      let replace = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
      navigate(to, {
        replace,
        state,
        preventScrollReset,
        relative
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative]);
}
const keenSlider_min = "";
function n$9(n2) {
  for (var r2 = arguments.length, t2 = Array(r2 > 1 ? r2 - 1 : 0), e2 = 1; e2 < r2; e2++)
    t2[e2 - 1] = arguments[e2];
  throw Error("[Immer] minified error nr: " + n2 + (t2.length ? " " + t2.map(function(n3) {
    return "'" + n3 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r$9(n2) {
  return !!n2 && !!n2[Q$1];
}
function t$a(n2) {
  var r2;
  return !!n2 && (function(n3) {
    if (!n3 || "object" != typeof n3)
      return false;
    var r3 = Object.getPrototypeOf(n3);
    if (null === r3)
      return true;
    var t2 = Object.hasOwnProperty.call(r3, "constructor") && r3.constructor;
    return t2 === Object || "function" == typeof t2 && Function.toString.call(t2) === Z$1;
  }(n2) || Array.isArray(n2) || !!n2[L$1] || !!(null === (r2 = n2.constructor) || void 0 === r2 ? void 0 : r2[L$1]) || s$9(n2) || v$5(n2));
}
function i$5(n2, r2, t2) {
  void 0 === t2 && (t2 = false), 0 === o$7(n2) ? (t2 ? Object.keys : nn)(n2).forEach(function(e2) {
    t2 && "symbol" == typeof e2 || r2(e2, n2[e2], n2);
  }) : n2.forEach(function(t3, e2) {
    return r2(e2, t3, n2);
  });
}
function o$7(n2) {
  var r2 = n2[Q$1];
  return r2 ? r2.i > 3 ? r2.i - 4 : r2.i : Array.isArray(n2) ? 1 : s$9(n2) ? 2 : v$5(n2) ? 3 : 0;
}
function u$8(n2, r2) {
  return 2 === o$7(n2) ? n2.has(r2) : Object.prototype.hasOwnProperty.call(n2, r2);
}
function a$8(n2, r2) {
  return 2 === o$7(n2) ? n2.get(r2) : n2[r2];
}
function f$7(n2, r2, t2) {
  var e2 = o$7(n2);
  2 === e2 ? n2.set(r2, t2) : 3 === e2 ? n2.add(t2) : n2[r2] = t2;
}
function c$c(n2, r2) {
  return n2 === r2 ? 0 !== n2 || 1 / n2 == 1 / r2 : n2 != n2 && r2 != r2;
}
function s$9(n2) {
  return X$2 && n2 instanceof Map;
}
function v$5(n2) {
  return q$5 && n2 instanceof Set;
}
function p$b(n2) {
  return n2.o || n2.t;
}
function l$a(n2) {
  if (Array.isArray(n2))
    return Array.prototype.slice.call(n2);
  var r2 = rn(n2);
  delete r2[Q$1];
  for (var t2 = nn(r2), e2 = 0; e2 < t2.length; e2++) {
    var i2 = t2[e2], o3 = r2[i2];
    false === o3.writable && (o3.writable = true, o3.configurable = true), (o3.get || o3.set) && (r2[i2] = { configurable: true, writable: true, enumerable: o3.enumerable, value: n2[i2] });
  }
  return Object.create(Object.getPrototypeOf(n2), r2);
}
function d$9(n2, e2) {
  return void 0 === e2 && (e2 = false), y$7(n2) || r$9(n2) || !t$a(n2) || (o$7(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h$a), Object.freeze(n2), e2 && i$5(n2, function(n3, r2) {
    return d$9(r2, true);
  }, true)), n2;
}
function h$a() {
  n$9(2);
}
function y$7(n2) {
  return null == n2 || "object" != typeof n2 || Object.isFrozen(n2);
}
function b$4(r2) {
  var t2 = tn[r2];
  return t2 || n$9(18, r2), t2;
}
function m$6(n2, r2) {
  tn[n2] || (tn[n2] = r2);
}
function _$2() {
  return U$1;
}
function j$2(n2, r2) {
  r2 && (b$4("Patches"), n2.u = [], n2.s = [], n2.v = r2);
}
function g$4(n2) {
  O$2(n2), n2.p.forEach(S$8), n2.p = null;
}
function O$2(n2) {
  n2 === U$1 && (U$1 = n2.l);
}
function w$5(n2) {
  return U$1 = { p: [], l: U$1, h: n2, m: true, _: 0 };
}
function S$8(n2) {
  var r2 = n2[Q$1];
  0 === r2.i || 1 === r2.i ? r2.j() : r2.g = true;
}
function P$2(r2, e2) {
  e2._ = e2.p.length;
  var i2 = e2.p[0], o3 = void 0 !== r2 && r2 !== i2;
  return e2.h.O || b$4("ES5").S(e2, r2, o3), o3 ? (i2[Q$1].P && (g$4(e2), n$9(4)), t$a(r2) && (r2 = M$5(e2, r2), e2.l || x$3(e2, r2)), e2.u && b$4("Patches").M(i2[Q$1].t, r2, e2.u, e2.s)) : r2 = M$5(e2, i2, []), g$4(e2), e2.u && e2.v(e2.u, e2.s), r2 !== H$2 ? r2 : void 0;
}
function M$5(n2, r2, t2) {
  if (y$7(r2))
    return r2;
  var e2 = r2[Q$1];
  if (!e2)
    return i$5(r2, function(i2, o4) {
      return A$2(n2, e2, r2, i2, o4, t2);
    }, true), r2;
  if (e2.A !== n2)
    return r2;
  if (!e2.P)
    return x$3(n2, e2.t, true), e2.t;
  if (!e2.I) {
    e2.I = true, e2.A._--;
    var o3 = 4 === e2.i || 5 === e2.i ? e2.o = l$a(e2.k) : e2.o, u2 = o3, a2 = false;
    3 === e2.i && (u2 = new Set(o3), o3.clear(), a2 = true), i$5(u2, function(r3, i2) {
      return A$2(n2, e2, o3, r3, i2, t2, a2);
    }), x$3(n2, o3, false), t2 && n2.u && b$4("Patches").N(e2, t2, n2.u, n2.s);
  }
  return e2.o;
}
function A$2(e2, i2, o3, a2, c2, s2, v2) {
  if (r$9(c2)) {
    var p2 = M$5(e2, c2, s2 && i2 && 3 !== i2.i && !u$8(i2.R, a2) ? s2.concat(a2) : void 0);
    if (f$7(o3, a2, p2), !r$9(p2))
      return;
    e2.m = false;
  } else
    v2 && o3.add(c2);
  if (t$a(c2) && !y$7(c2)) {
    if (!e2.h.D && e2._ < 1)
      return;
    M$5(e2, c2), i2 && i2.A.l || x$3(e2, c2);
  }
}
function x$3(n2, r2, t2) {
  void 0 === t2 && (t2 = false), !n2.l && n2.h.D && n2.m && d$9(r2, t2);
}
function z$2(n2, r2) {
  var t2 = n2[Q$1];
  return (t2 ? p$b(t2) : n2)[r2];
}
function I$3(n2, r2) {
  if (r2 in n2)
    for (var t2 = Object.getPrototypeOf(n2); t2; ) {
      var e2 = Object.getOwnPropertyDescriptor(t2, r2);
      if (e2)
        return e2;
      t2 = Object.getPrototypeOf(t2);
    }
}
function k$4(n2) {
  n2.P || (n2.P = true, n2.l && k$4(n2.l));
}
function E$1(n2) {
  n2.o || (n2.o = l$a(n2.t));
}
function N$2(n2, r2, t2) {
  var e2 = s$9(r2) ? b$4("MapSet").F(r2, t2) : v$5(r2) ? b$4("MapSet").T(r2, t2) : n2.O ? function(n3, r3) {
    var t3 = Array.isArray(n3), e3 = { i: t3 ? 1 : 0, A: r3 ? r3.A : _$2(), P: false, I: false, R: {}, l: r3, t: n3, k: null, o: null, j: null, C: false }, i2 = e3, o3 = en;
    t3 && (i2 = [e3], o3 = on);
    var u2 = Proxy.revocable(i2, o3), a2 = u2.revoke, f2 = u2.proxy;
    return e3.k = f2, e3.j = a2, f2;
  }(r2, t2) : b$4("ES5").J(r2, t2);
  return (t2 ? t2.A : _$2()).p.push(e2), e2;
}
function R$1(e2) {
  return r$9(e2) || n$9(22, e2), function n2(r2) {
    if (!t$a(r2))
      return r2;
    var e3, u2 = r2[Q$1], c2 = o$7(r2);
    if (u2) {
      if (!u2.P && (u2.i < 4 || !b$4("ES5").K(u2)))
        return u2.t;
      u2.I = true, e3 = D$2(r2, c2), u2.I = false;
    } else
      e3 = D$2(r2, c2);
    return i$5(e3, function(r3, t2) {
      u2 && a$8(u2.t, r3) === t2 || f$7(e3, r3, n2(t2));
    }), 3 === c2 ? new Set(e3) : e3;
  }(e2);
}
function D$2(n2, r2) {
  switch (r2) {
    case 2:
      return new Map(n2);
    case 3:
      return Array.from(n2);
  }
  return l$a(n2);
}
function F$3() {
  function t2(n2, r2) {
    var t3 = s2[n2];
    return t3 ? t3.enumerable = r2 : s2[n2] = t3 = { configurable: true, enumerable: r2, get: function() {
      var r3 = this[Q$1];
      return en.get(r3, n2);
    }, set: function(r3) {
      var t4 = this[Q$1];
      en.set(t4, n2, r3);
    } }, t3;
  }
  function e2(n2) {
    for (var r2 = n2.length - 1; r2 >= 0; r2--) {
      var t3 = n2[r2][Q$1];
      if (!t3.P)
        switch (t3.i) {
          case 5:
            a2(t3) && k$4(t3);
            break;
          case 4:
            o3(t3) && k$4(t3);
        }
    }
  }
  function o3(n2) {
    for (var r2 = n2.t, t3 = n2.k, e3 = nn(t3), i2 = e3.length - 1; i2 >= 0; i2--) {
      var o4 = e3[i2];
      if (o4 !== Q$1) {
        var a3 = r2[o4];
        if (void 0 === a3 && !u$8(r2, o4))
          return true;
        var f2 = t3[o4], s3 = f2 && f2[Q$1];
        if (s3 ? s3.t !== a3 : !c$c(f2, a3))
          return true;
      }
    }
    var v2 = !!r2[Q$1];
    return e3.length !== nn(r2).length + (v2 ? 0 : 1);
  }
  function a2(n2) {
    var r2 = n2.k;
    if (r2.length !== n2.t.length)
      return true;
    var t3 = Object.getOwnPropertyDescriptor(r2, r2.length - 1);
    if (t3 && !t3.get)
      return true;
    for (var e3 = 0; e3 < r2.length; e3++)
      if (!r2.hasOwnProperty(e3))
        return true;
    return false;
  }
  var s2 = {};
  m$6("ES5", { J: function(n2, r2) {
    var e3 = Array.isArray(n2), i2 = function(n3, r3) {
      if (n3) {
        for (var e4 = Array(r3.length), i3 = 0; i3 < r3.length; i3++)
          Object.defineProperty(e4, "" + i3, t2(i3, true));
        return e4;
      }
      var o5 = rn(r3);
      delete o5[Q$1];
      for (var u2 = nn(o5), a3 = 0; a3 < u2.length; a3++) {
        var f2 = u2[a3];
        o5[f2] = t2(f2, n3 || !!o5[f2].enumerable);
      }
      return Object.create(Object.getPrototypeOf(r3), o5);
    }(e3, n2), o4 = { i: e3 ? 5 : 4, A: r2 ? r2.A : _$2(), P: false, I: false, R: {}, l: r2, t: n2, k: i2, o: null, g: false, C: false };
    return Object.defineProperty(i2, Q$1, { value: o4, writable: true }), i2;
  }, S: function(n2, t3, o4) {
    o4 ? r$9(t3) && t3[Q$1].A === n2 && e2(n2.p) : (n2.u && function n3(r2) {
      if (r2 && "object" == typeof r2) {
        var t4 = r2[Q$1];
        if (t4) {
          var e3 = t4.t, o5 = t4.k, f2 = t4.R, c2 = t4.i;
          if (4 === c2)
            i$5(o5, function(r3) {
              r3 !== Q$1 && (void 0 !== e3[r3] || u$8(e3, r3) ? f2[r3] || n3(o5[r3]) : (f2[r3] = true, k$4(t4)));
            }), i$5(e3, function(n4) {
              void 0 !== o5[n4] || u$8(o5, n4) || (f2[n4] = false, k$4(t4));
            });
          else if (5 === c2) {
            if (a2(t4) && (k$4(t4), f2.length = true), o5.length < e3.length)
              for (var s3 = o5.length; s3 < e3.length; s3++)
                f2[s3] = false;
            else
              for (var v2 = e3.length; v2 < o5.length; v2++)
                f2[v2] = true;
            for (var p2 = Math.min(o5.length, e3.length), l2 = 0; l2 < p2; l2++)
              o5.hasOwnProperty(l2) || (f2[l2] = true), void 0 === f2[l2] && n3(o5[l2]);
          }
        }
      }
    }(n2.p[0]), e2(n2.p));
  }, K: function(n2) {
    return 4 === n2.i ? o3(n2) : a2(n2);
  } });
}
var G, U$1, W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"), X$2 = "undefined" != typeof Map, q$5 = "undefined" != typeof Set, B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect, H$2 = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G), L$1 = W ? Symbol.for("immer-draftable") : "__$immer_draftable", Q$1 = W ? Symbol.for("immer-state") : "__$immer_state", Z$1 = "" + Object.prototype.constructor, nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n2) {
  return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
} : Object.getOwnPropertyNames, rn = Object.getOwnPropertyDescriptors || function(n2) {
  var r2 = {};
  return nn(n2).forEach(function(t2) {
    r2[t2] = Object.getOwnPropertyDescriptor(n2, t2);
  }), r2;
}, tn = {}, en = { get: function(n2, r2) {
  if (r2 === Q$1)
    return n2;
  var e2 = p$b(n2);
  if (!u$8(e2, r2))
    return function(n3, r3, t2) {
      var e3, i3 = I$3(r3, t2);
      return i3 ? "value" in i3 ? i3.value : null === (e3 = i3.get) || void 0 === e3 ? void 0 : e3.call(n3.k) : void 0;
    }(n2, e2, r2);
  var i2 = e2[r2];
  return n2.I || !t$a(i2) ? i2 : i2 === z$2(n2.t, r2) ? (E$1(n2), n2.o[r2] = N$2(n2.A.h, i2, n2)) : i2;
}, has: function(n2, r2) {
  return r2 in p$b(n2);
}, ownKeys: function(n2) {
  return Reflect.ownKeys(p$b(n2));
}, set: function(n2, r2, t2) {
  var e2 = I$3(p$b(n2), r2);
  if (null == e2 ? void 0 : e2.set)
    return e2.set.call(n2.k, t2), true;
  if (!n2.P) {
    var i2 = z$2(p$b(n2), r2), o3 = null == i2 ? void 0 : i2[Q$1];
    if (o3 && o3.t === t2)
      return n2.o[r2] = t2, n2.R[r2] = false, true;
    if (c$c(t2, i2) && (void 0 !== t2 || u$8(n2.t, r2)))
      return true;
    E$1(n2), k$4(n2);
  }
  return n2.o[r2] === t2 && (void 0 !== t2 || r2 in n2.o) || Number.isNaN(t2) && Number.isNaN(n2.o[r2]) || (n2.o[r2] = t2, n2.R[r2] = true), true;
}, deleteProperty: function(n2, r2) {
  return void 0 !== z$2(n2.t, r2) || r2 in n2.t ? (n2.R[r2] = false, E$1(n2), k$4(n2)) : delete n2.R[r2], n2.o && delete n2.o[r2], true;
}, getOwnPropertyDescriptor: function(n2, r2) {
  var t2 = p$b(n2), e2 = Reflect.getOwnPropertyDescriptor(t2, r2);
  return e2 ? { writable: true, configurable: 1 !== n2.i || "length" !== r2, enumerable: e2.enumerable, value: t2[r2] } : e2;
}, defineProperty: function() {
  n$9(11);
}, getPrototypeOf: function(n2) {
  return Object.getPrototypeOf(n2.t);
}, setPrototypeOf: function() {
  n$9(12);
} }, on = {};
i$5(en, function(n2, r2) {
  on[n2] = function() {
    return arguments[0] = arguments[0][0], r2.apply(this, arguments);
  };
}), on.deleteProperty = function(r2, t2) {
  return on.set.call(this, r2, t2, void 0);
}, on.set = function(r2, t2, e2) {
  return en.set.call(this, r2[0], t2, e2, r2[0]);
};
var un = function() {
  function e2(r2) {
    var e3 = this;
    this.O = B, this.D = true, this.produce = function(r3, i3, o3) {
      if ("function" == typeof r3 && "function" != typeof i3) {
        var u2 = i3;
        i3 = r3;
        var a2 = e3;
        return function(n2) {
          var r4 = this;
          void 0 === n2 && (n2 = u2);
          for (var t2 = arguments.length, e4 = Array(t2 > 1 ? t2 - 1 : 0), o4 = 1; o4 < t2; o4++)
            e4[o4 - 1] = arguments[o4];
          return a2.produce(n2, function(n3) {
            var t3;
            return (t3 = i3).call.apply(t3, [r4, n3].concat(e4));
          });
        };
      }
      var f2;
      if ("function" != typeof i3 && n$9(6), void 0 !== o3 && "function" != typeof o3 && n$9(7), t$a(r3)) {
        var c2 = w$5(e3), s2 = N$2(e3, r3, void 0), v2 = true;
        try {
          f2 = i3(s2), v2 = false;
        } finally {
          v2 ? g$4(c2) : O$2(c2);
        }
        return "undefined" != typeof Promise && f2 instanceof Promise ? f2.then(function(n2) {
          return j$2(c2, o3), P$2(n2, c2);
        }, function(n2) {
          throw g$4(c2), n2;
        }) : (j$2(c2, o3), P$2(f2, c2));
      }
      if (!r3 || "object" != typeof r3) {
        if (void 0 === (f2 = i3(r3)) && (f2 = r3), f2 === H$2 && (f2 = void 0), e3.D && d$9(f2, true), o3) {
          var p2 = [], l2 = [];
          b$4("Patches").M(r3, f2, p2, l2), o3(p2, l2);
        }
        return f2;
      }
      n$9(21, r3);
    }, this.produceWithPatches = function(n2, r3) {
      if ("function" == typeof n2)
        return function(r4) {
          for (var t3 = arguments.length, i4 = Array(t3 > 1 ? t3 - 1 : 0), o4 = 1; o4 < t3; o4++)
            i4[o4 - 1] = arguments[o4];
          return e3.produceWithPatches(r4, function(r5) {
            return n2.apply(void 0, [r5].concat(i4));
          });
        };
      var t2, i3, o3 = e3.produce(n2, r3, function(n3, r4) {
        t2 = n3, i3 = r4;
      });
      return "undefined" != typeof Promise && o3 instanceof Promise ? o3.then(function(n3) {
        return [n3, t2, i3];
      }) : [o3, t2, i3];
    }, "boolean" == typeof (null == r2 ? void 0 : r2.useProxies) && this.setUseProxies(r2.useProxies), "boolean" == typeof (null == r2 ? void 0 : r2.autoFreeze) && this.setAutoFreeze(r2.autoFreeze);
  }
  var i2 = e2.prototype;
  return i2.createDraft = function(e3) {
    t$a(e3) || n$9(8), r$9(e3) && (e3 = R$1(e3));
    var i3 = w$5(this), o3 = N$2(this, e3, void 0);
    return o3[Q$1].C = true, O$2(i3), o3;
  }, i2.finishDraft = function(r2, t2) {
    var e3 = r2 && r2[Q$1];
    var i3 = e3.A;
    return j$2(i3, t2), P$2(void 0, i3);
  }, i2.setAutoFreeze = function(n2) {
    this.D = n2;
  }, i2.setUseProxies = function(r2) {
    r2 && !B && n$9(20), this.O = r2;
  }, i2.applyPatches = function(n2, t2) {
    var e3;
    for (e3 = t2.length - 1; e3 >= 0; e3--) {
      var i3 = t2[e3];
      if (0 === i3.path.length && "replace" === i3.op) {
        n2 = i3.value;
        break;
      }
    }
    e3 > -1 && (t2 = t2.slice(e3 + 1));
    var o3 = b$4("Patches").$;
    return r$9(n2) ? o3(n2, t2) : this.produce(n2, function(n3) {
      return o3(n3, t2);
    });
  }, e2;
}(), an = new un(), fn = an.produce;
an.produceWithPatches.bind(an);
an.setAutoFreeze.bind(an);
an.setUseProxies.bind(an);
an.applyPatches.bind(an);
an.createDraft.bind(an);
an.finishDraft.bind(an);
function _typeof$2(obj) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$2(obj);
}
function _toPrimitive(input, hint) {
  if (_typeof$2(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof$2(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof$2(key) === "symbol" ? key : String(key);
}
function _defineProperty$4(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = null != arguments[i2] ? arguments[i2] : {};
    i2 % 2 ? ownKeys$2(Object(source), true).forEach(function(key) {
      _defineProperty$4(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or use the non-minified dev environment for full errors. ";
}
var $$observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
var randomString = function randomString2() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
function isPlainObject$1(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
}
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(formatProdErrorMessage(0));
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(formatProdErrorMessage(1));
    }
    return enhancer(createStore)(reducer, preloadedState);
  }
  if (typeof reducer !== "function") {
    throw new Error(formatProdErrorMessage(2));
  }
  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(3));
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(formatProdErrorMessage(4));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(5));
    }
    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(formatProdErrorMessage(6));
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index2 = nextListeners.indexOf(listener);
      nextListeners.splice(index2, 1);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject$1(action)) {
      throw new Error(formatProdErrorMessage(7));
    }
    if (typeof action.type === "undefined") {
      throw new Error(formatProdErrorMessage(8));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(9));
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    var listeners = currentListeners = nextListeners;
    for (var i2 = 0; i2 < listeners.length; i2++) {
      var listener = listeners[i2];
      listener();
    }
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(formatProdErrorMessage(10));
    }
    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  function observable() {
    var _ref;
    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe2(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(formatProdErrorMessage(11));
        }
        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }
        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      }
    }, _ref[$$observable] = function() {
      return this;
    }, _ref;
  }
  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function(key) {
    var reducer = reducers[key];
    var initialState2 = reducer(void 0, {
      type: ActionTypes.INIT
    });
    if (typeof initialState2 === "undefined") {
      throw new Error(formatProdErrorMessage(12));
    }
    if (typeof reducer(void 0, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === "undefined") {
      throw new Error(formatProdErrorMessage(13));
    }
  });
}
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i2 = 0; i2 < reducerKeys.length; i2++) {
    var key = reducerKeys[i2];
    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);
  var shapeAssertionError;
  try {
    assertReducerShape(finalReducers);
  } catch (e2) {
    shapeAssertionError = e2;
  }
  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }
    if (shapeAssertionError) {
      throw shapeAssertionError;
    }
    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === "undefined") {
        action && action.type;
        throw new Error(formatProdErrorMessage(14));
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (funcs.length === 0) {
    return function(arg) {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(function(a2, b2) {
    return function() {
      return a2(b2.apply(void 0, arguments));
    };
  });
}
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }
  return function(createStore2) {
    return function() {
      var store2 = createStore2.apply(void 0, arguments);
      var _dispatch = function dispatch() {
        throw new Error(formatProdErrorMessage(15));
      };
      var middlewareAPI = {
        getState: store2.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function(middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store2.dispatch);
      return _objectSpread2(_objectSpread2({}, store2), {}, {
        dispatch: _dispatch
      });
    };
  };
}
function createThunkMiddleware(extraArgument) {
  var middleware = function middleware2(_ref) {
    var dispatch = _ref.dispatch, getState = _ref.getState;
    return function(next) {
      return function(action) {
        if (typeof action === "function") {
          return action(dispatch, getState, extraArgument);
        }
        return next(action);
      };
    };
  };
  return middleware;
}
var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
const thunkMiddleware = thunk;
var __extends$2 = globalThis && globalThis.__extends || function() {
  var extendStatics2 = function(d2, b2) {
    extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p2 in b3)
        if (Object.prototype.hasOwnProperty.call(b3, p2))
          d3[p2] = b3[p2];
    };
    return extendStatics2(d2, b2);
  };
  return function(d2, b2) {
    if (typeof b2 !== "function" && b2 !== null)
      throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
    extendStatics2(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __generator = globalThis && globalThis.__generator || function(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t2[0] & 1)
      throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y2, t2, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (_2)
      try {
        if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
          return t2;
        if (y2 = 0, t2)
          op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _2.label++;
            return { value: op[1], done: false };
          case 5:
            _2.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _2.ops.pop();
            _2.trys.pop();
            continue;
          default:
            if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _2 = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
              _2.label = op[1];
              break;
            }
            if (op[0] === 6 && _2.label < t2[1]) {
              _2.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _2.label < t2[2]) {
              _2.label = t2[2];
              _2.ops.push(op);
              break;
            }
            if (t2[2])
              _2.ops.pop();
            _2.trys.pop();
            continue;
        }
        op = body.call(thisArg, _2);
      } catch (e2) {
        op = [6, e2];
        y2 = 0;
      } finally {
        f2 = t2 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __spreadArray = globalThis && globalThis.__spreadArray || function(to, from) {
  for (var i2 = 0, il2 = from.length, j2 = to.length; i2 < il2; i2++, j2++)
    to[j2] = from[i2];
  return to;
};
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = function(obj, key, value) {
  return key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
};
var __spreadValues = function(a2, b2) {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var _i = 0, _c = __getOwnPropSymbols(b2); _i < _c.length; _i++) {
      var prop = _c[_i];
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = function(a2, b2) {
  return __defProps(a2, __getOwnPropDescs(b2));
};
var __async = function(__this, __arguments, generator) {
  return new Promise(function(resolve, reject) {
    var fulfilled = function(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = function(value) {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = function(x2) {
      return x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    };
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length === 0)
    return void 0;
  if (typeof arguments[0] === "object")
    return compose;
  return compose.apply(null, arguments);
};
function isPlainObject(value) {
  if (typeof value !== "object" || value === null)
    return false;
  var proto = Object.getPrototypeOf(value);
  if (proto === null)
    return true;
  var baseProto = proto;
  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }
  return proto === baseProto;
}
var MiddlewareArray = (
  /** @class */
  function(_super) {
    __extends$2(MiddlewareArray2, _super);
    function MiddlewareArray2() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var _this = _super.apply(this, args) || this;
      Object.setPrototypeOf(_this, MiddlewareArray2.prototype);
      return _this;
    }
    Object.defineProperty(MiddlewareArray2, Symbol.species, {
      get: function() {
        return MiddlewareArray2;
      },
      enumerable: false,
      configurable: true
    });
    MiddlewareArray2.prototype.concat = function() {
      var arr = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
      }
      return _super.prototype.concat.apply(this, arr);
    };
    MiddlewareArray2.prototype.prepend = function() {
      var arr = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
      }
      if (arr.length === 1 && Array.isArray(arr[0])) {
        return new (MiddlewareArray2.bind.apply(MiddlewareArray2, __spreadArray([void 0], arr[0].concat(this))))();
      }
      return new (MiddlewareArray2.bind.apply(MiddlewareArray2, __spreadArray([void 0], arr.concat(this))))();
    };
    return MiddlewareArray2;
  }(Array)
);
function freezeDraftable(val) {
  return t$a(val) ? fn(val, function() {
  }) : val;
}
function isBoolean(x2) {
  return typeof x2 === "boolean";
}
function curryGetDefaultMiddleware() {
  return function curriedGetDefaultMiddleware(options2) {
    return getDefaultMiddleware(options2);
  };
}
function getDefaultMiddleware(options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  var _c = options2.thunk, thunk2 = _c === void 0 ? true : _c;
  options2.immutableCheck;
  options2.serializableCheck;
  var middlewareArray = new MiddlewareArray();
  if (thunk2) {
    if (isBoolean(thunk2)) {
      middlewareArray.push(thunkMiddleware);
    } else {
      middlewareArray.push(thunkMiddleware.withExtraArgument(thunk2.extraArgument));
    }
  }
  return middlewareArray;
}
var IS_PRODUCTION = true;
function configureStore(options2) {
  var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();
  var _c = options2 || {}, _d = _c.reducer, reducer = _d === void 0 ? void 0 : _d, _e2 = _c.middleware, middleware = _e2 === void 0 ? curriedGetDefaultMiddleware() : _e2, _f = _c.devTools, devTools = _f === void 0 ? true : _f, _g = _c.preloadedState, preloadedState = _g === void 0 ? void 0 : _g, _h = _c.enhancers, enhancers = _h === void 0 ? void 0 : _h;
  var rootReducer2;
  if (typeof reducer === "function") {
    rootReducer2 = reducer;
  } else if (isPlainObject(reducer)) {
    rootReducer2 = combineReducers(reducer);
  } else {
    throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
  }
  var finalMiddleware = middleware;
  if (typeof finalMiddleware === "function") {
    finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);
  }
  var middlewareEnhancer = applyMiddleware.apply(void 0, finalMiddleware);
  var finalCompose = compose;
  if (devTools) {
    finalCompose = composeWithDevTools(__spreadValues({
      trace: !IS_PRODUCTION
    }, typeof devTools === "object" && devTools));
  }
  var storeEnhancers = [middlewareEnhancer];
  if (Array.isArray(enhancers)) {
    storeEnhancers = __spreadArray([middlewareEnhancer], enhancers);
  } else if (typeof enhancers === "function") {
    storeEnhancers = enhancers(storeEnhancers);
  }
  var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
  return createStore(rootReducer2, preloadedState, composedEnhancer);
}
function createAction(type, prepareAction) {
  function actionCreator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (prepareAction) {
      var prepared = prepareAction.apply(void 0, args);
      if (!prepared) {
        throw new Error("prepareAction did not return an object");
      }
      return __spreadValues(__spreadValues({
        type,
        payload: prepared.payload
      }, "meta" in prepared && { meta: prepared.meta }), "error" in prepared && { error: prepared.error });
    }
    return { type, payload: args[0] };
  }
  actionCreator.toString = function() {
    return "" + type;
  };
  actionCreator.type = type;
  actionCreator.match = function(action) {
    return action.type === type;
  };
  return actionCreator;
}
function executeReducerBuilderCallback(builderCallback) {
  var actionsMap = {};
  var actionMatchers = [];
  var defaultCaseReducer;
  var builder = {
    addCase: function(typeOrActionCreator, reducer) {
      var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
      if (type in actionsMap) {
        throw new Error("addCase cannot be called with two reducers for the same action type");
      }
      actionsMap[type] = reducer;
      return builder;
    },
    addMatcher: function(matcher, reducer) {
      actionMatchers.push({ matcher, reducer });
      return builder;
    },
    addDefaultCase: function(reducer) {
      defaultCaseReducer = reducer;
      return builder;
    }
  };
  builderCallback(builder);
  return [actionsMap, actionMatchers, defaultCaseReducer];
}
function isStateFunction(x2) {
  return typeof x2 === "function";
}
function createReducer(initialState2, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
  if (actionMatchers === void 0) {
    actionMatchers = [];
  }
  var _c = typeof mapOrBuilderCallback === "function" ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer], actionsMap = _c[0], finalActionMatchers = _c[1], finalDefaultCaseReducer = _c[2];
  var getInitialState;
  if (isStateFunction(initialState2)) {
    getInitialState = function() {
      return freezeDraftable(initialState2());
    };
  } else {
    var frozenInitialState_1 = freezeDraftable(initialState2);
    getInitialState = function() {
      return frozenInitialState_1;
    };
  }
  function reducer(state, action) {
    if (state === void 0) {
      state = getInitialState();
    }
    var caseReducers = __spreadArray([
      actionsMap[action.type]
    ], finalActionMatchers.filter(function(_c2) {
      var matcher = _c2.matcher;
      return matcher(action);
    }).map(function(_c2) {
      var reducer2 = _c2.reducer;
      return reducer2;
    }));
    if (caseReducers.filter(function(cr) {
      return !!cr;
    }).length === 0) {
      caseReducers = [finalDefaultCaseReducer];
    }
    return caseReducers.reduce(function(previousState, caseReducer) {
      if (caseReducer) {
        if (r$9(previousState)) {
          var draft = previousState;
          var result = caseReducer(draft, action);
          if (result === void 0) {
            return previousState;
          }
          return result;
        } else if (!t$a(previousState)) {
          var result = caseReducer(previousState, action);
          if (result === void 0) {
            if (previousState === null) {
              return previousState;
            }
            throw Error("A case reducer on a non-draftable value must not return undefined");
          }
          return result;
        } else {
          return fn(previousState, function(draft2) {
            return caseReducer(draft2, action);
          });
        }
      }
      return previousState;
    }, state);
  }
  reducer.getInitialState = getInitialState;
  return reducer;
}
function getType2(slice, actionKey) {
  return slice + "/" + actionKey;
}
function createSlice(options2) {
  var name = options2.name;
  if (!name) {
    throw new Error("`name` is a required option for createSlice");
  }
  if (typeof process !== "undefined" && false) {
    if (options2.initialState === void 0) {
      console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    }
  }
  var initialState2 = typeof options2.initialState == "function" ? options2.initialState : freezeDraftable(options2.initialState);
  var reducers = options2.reducers || {};
  var reducerNames = Object.keys(reducers);
  var sliceCaseReducersByName = {};
  var sliceCaseReducersByType = {};
  var actionCreators = {};
  reducerNames.forEach(function(reducerName) {
    var maybeReducerWithPrepare = reducers[reducerName];
    var type = getType2(name, reducerName);
    var caseReducer;
    var prepareCallback;
    if ("reducer" in maybeReducerWithPrepare) {
      caseReducer = maybeReducerWithPrepare.reducer;
      prepareCallback = maybeReducerWithPrepare.prepare;
    } else {
      caseReducer = maybeReducerWithPrepare;
    }
    sliceCaseReducersByName[reducerName] = caseReducer;
    sliceCaseReducersByType[type] = caseReducer;
    actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
  });
  function buildReducer() {
    var _c = typeof options2.extraReducers === "function" ? executeReducerBuilderCallback(options2.extraReducers) : [options2.extraReducers], _d = _c[0], extraReducers = _d === void 0 ? {} : _d, _e2 = _c[1], actionMatchers = _e2 === void 0 ? [] : _e2, _f = _c[2], defaultCaseReducer = _f === void 0 ? void 0 : _f;
    var finalCaseReducers = __spreadValues(__spreadValues({}, extraReducers), sliceCaseReducersByType);
    return createReducer(initialState2, function(builder) {
      for (var key in finalCaseReducers) {
        builder.addCase(key, finalCaseReducers[key]);
      }
      for (var _i = 0, actionMatchers_1 = actionMatchers; _i < actionMatchers_1.length; _i++) {
        var m2 = actionMatchers_1[_i];
        builder.addMatcher(m2.matcher, m2.reducer);
      }
      if (defaultCaseReducer) {
        builder.addDefaultCase(defaultCaseReducer);
      }
    });
  }
  var _reducer;
  return {
    name,
    reducer: function(state, action) {
      if (!_reducer)
        _reducer = buildReducer();
      return _reducer(state, action);
    },
    actions: actionCreators,
    caseReducers: sliceCaseReducersByName,
    getInitialState: function() {
      if (!_reducer)
        _reducer = buildReducer();
      return _reducer.getInitialState();
    }
  };
}
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = function(size) {
  if (size === void 0) {
    size = 21;
  }
  var id2 = "";
  var i2 = size;
  while (i2--) {
    id2 += urlAlphabet[Math.random() * 64 | 0];
  }
  return id2;
};
var commonProperties = [
  "name",
  "message",
  "stack",
  "code"
];
var RejectWithValue = (
  /** @class */
  function() {
    function RejectWithValue2(payload, meta) {
      this.payload = payload;
      this.meta = meta;
    }
    return RejectWithValue2;
  }()
);
var FulfillWithMeta = (
  /** @class */
  function() {
    function FulfillWithMeta2(payload, meta) {
      this.payload = payload;
      this.meta = meta;
    }
    return FulfillWithMeta2;
  }()
);
var miniSerializeError = function(value) {
  if (typeof value === "object" && value !== null) {
    var simpleError = {};
    for (var _i = 0, commonProperties_1 = commonProperties; _i < commonProperties_1.length; _i++) {
      var property = commonProperties_1[_i];
      if (typeof value[property] === "string") {
        simpleError[property] = value[property];
      }
    }
    return simpleError;
  }
  return { message: String(value) };
};
var createAsyncThunk = function() {
  function createAsyncThunk2(typePrefix, payloadCreator, options2) {
    var fulfilled = createAction(typePrefix + "/fulfilled", function(payload, requestId, arg, meta) {
      return {
        payload,
        meta: __spreadProps(__spreadValues({}, meta || {}), {
          arg,
          requestId,
          requestStatus: "fulfilled"
        })
      };
    });
    var pending = createAction(typePrefix + "/pending", function(requestId, arg, meta) {
      return {
        payload: void 0,
        meta: __spreadProps(__spreadValues({}, meta || {}), {
          arg,
          requestId,
          requestStatus: "pending"
        })
      };
    });
    var rejected = createAction(typePrefix + "/rejected", function(error, requestId, arg, payload, meta) {
      return {
        payload,
        error: (options2 && options2.serializeError || miniSerializeError)(error || "Rejected"),
        meta: __spreadProps(__spreadValues({}, meta || {}), {
          arg,
          requestId,
          rejectedWithValue: !!payload,
          requestStatus: "rejected",
          aborted: (error == null ? void 0 : error.name) === "AbortError",
          condition: (error == null ? void 0 : error.name) === "ConditionError"
        })
      };
    });
    var AC = typeof AbortController !== "undefined" ? AbortController : (
      /** @class */
      function() {
        function class_1() {
          this.signal = {
            aborted: false,
            addEventListener: function() {
            },
            dispatchEvent: function() {
              return false;
            },
            onabort: function() {
            },
            removeEventListener: function() {
            },
            reason: void 0,
            throwIfAborted: function() {
            }
          };
        }
        class_1.prototype.abort = function() {
        };
        return class_1;
      }()
    );
    function actionCreator(arg) {
      return function(dispatch, getState, extra) {
        var requestId = (options2 == null ? void 0 : options2.idGenerator) ? options2.idGenerator(arg) : nanoid();
        var abortController = new AC();
        var abortReason;
        function abort(reason) {
          abortReason = reason;
          abortController.abort();
        }
        var promise2 = function() {
          return __async(this, null, function() {
            var _a, _b, finalAction, conditionResult, abortedPromise, err_1, skipDispatch;
            return __generator(this, function(_c) {
              switch (_c.label) {
                case 0:
                  _c.trys.push([0, 4, , 5]);
                  conditionResult = (_a = options2 == null ? void 0 : options2.condition) == null ? void 0 : _a.call(options2, arg, { getState, extra });
                  if (!isThenable(conditionResult))
                    return [3, 2];
                  return [4, conditionResult];
                case 1:
                  conditionResult = _c.sent();
                  _c.label = 2;
                case 2:
                  if (conditionResult === false || abortController.signal.aborted) {
                    throw {
                      name: "ConditionError",
                      message: "Aborted due to condition callback returning false."
                    };
                  }
                  abortedPromise = new Promise(function(_2, reject) {
                    return abortController.signal.addEventListener("abort", function() {
                      return reject({
                        name: "AbortError",
                        message: abortReason || "Aborted"
                      });
                    });
                  });
                  dispatch(pending(requestId, arg, (_b = options2 == null ? void 0 : options2.getPendingMeta) == null ? void 0 : _b.call(options2, { requestId, arg }, { getState, extra })));
                  return [4, Promise.race([
                    abortedPromise,
                    Promise.resolve(payloadCreator(arg, {
                      dispatch,
                      getState,
                      extra,
                      requestId,
                      signal: abortController.signal,
                      abort,
                      rejectWithValue: function(value, meta) {
                        return new RejectWithValue(value, meta);
                      },
                      fulfillWithValue: function(value, meta) {
                        return new FulfillWithMeta(value, meta);
                      }
                    })).then(function(result) {
                      if (result instanceof RejectWithValue) {
                        throw result;
                      }
                      if (result instanceof FulfillWithMeta) {
                        return fulfilled(result.payload, requestId, arg, result.meta);
                      }
                      return fulfilled(result, requestId, arg);
                    })
                  ])];
                case 3:
                  finalAction = _c.sent();
                  return [3, 5];
                case 4:
                  err_1 = _c.sent();
                  finalAction = err_1 instanceof RejectWithValue ? rejected(null, requestId, arg, err_1.payload, err_1.meta) : rejected(err_1, requestId, arg);
                  return [3, 5];
                case 5:
                  skipDispatch = options2 && !options2.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                  if (!skipDispatch) {
                    dispatch(finalAction);
                  }
                  return [2, finalAction];
              }
            });
          });
        }();
        return Object.assign(promise2, {
          abort,
          requestId,
          arg,
          unwrap: function() {
            return promise2.then(unwrapResult);
          }
        });
      };
    }
    return Object.assign(actionCreator, {
      pending,
      rejected,
      fulfilled,
      typePrefix
    });
  }
  createAsyncThunk2.withTypes = function() {
    return createAsyncThunk2;
  };
  return createAsyncThunk2;
}();
function unwrapResult(action) {
  if (action.meta && action.meta.rejectedWithValue) {
    throw action.payload;
  }
  if (action.error) {
    throw action.error;
  }
  return action.payload;
}
function isThenable(value) {
  return value !== null && typeof value === "object" && typeof value.then === "function";
}
var alm = "listenerMiddleware";
createAction(alm + "/add");
createAction(alm + "/removeAll");
createAction(alm + "/remove");
var promise;
typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : globalThis) : function(cb2) {
  return (promise || (promise = Promise.resolve())).then(cb2).catch(function(err) {
    return setTimeout(function() {
      throw err;
    }, 0);
  });
};
F$3();
var shimExports = {};
var shim = {
  get exports() {
    return shimExports;
  },
  set exports(v2) {
    shimExports = v2;
  }
};
var useSyncExternalStoreShim_production_min = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e$6 = reactExports;
function h$9(a2, b2) {
  return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var k$3 = "function" === typeof Object.is ? Object.is : h$9, l$9 = e$6.useState, m$5 = e$6.useEffect, n$8 = e$6.useLayoutEffect, p$a = e$6.useDebugValue;
function q$4(a2, b2) {
  var d2 = b2(), f2 = l$9({ inst: { value: d2, getSnapshot: b2 } }), c2 = f2[0].inst, g2 = f2[1];
  n$8(function() {
    c2.value = d2;
    c2.getSnapshot = b2;
    r$8(c2) && g2({ inst: c2 });
  }, [a2, d2, b2]);
  m$5(function() {
    r$8(c2) && g2({ inst: c2 });
    return a2(function() {
      r$8(c2) && g2({ inst: c2 });
    });
  }, [a2]);
  p$a(d2);
  return d2;
}
function r$8(a2) {
  var b2 = a2.getSnapshot;
  a2 = a2.value;
  try {
    var d2 = b2();
    return !k$3(a2, d2);
  } catch (f2) {
    return true;
  }
}
function t$9(a2, b2) {
  return b2();
}
var u$7 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t$9 : q$4;
useSyncExternalStoreShim_production_min.useSyncExternalStore = void 0 !== e$6.useSyncExternalStore ? e$6.useSyncExternalStore : u$7;
(function(module) {
  {
    module.exports = useSyncExternalStoreShim_production_min;
  }
})(shim);
var withSelectorExports = {};
var withSelector = {
  get exports() {
    return withSelectorExports;
  },
  set exports(v2) {
    withSelectorExports = v2;
  }
};
var withSelector_production_min = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h$8 = reactExports, n$7 = shimExports;
function p$9(a2, b2) {
  return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var q$3 = "function" === typeof Object.is ? Object.is : p$9, r$7 = n$7.useSyncExternalStore, t$8 = h$8.useRef, u$6 = h$8.useEffect, v$4 = h$8.useMemo, w$4 = h$8.useDebugValue;
withSelector_production_min.useSyncExternalStoreWithSelector = function(a2, b2, e2, l2, g2) {
  var c2 = t$8(null);
  if (null === c2.current) {
    var f2 = { hasValue: false, value: null };
    c2.current = f2;
  } else
    f2 = c2.current;
  c2 = v$4(function() {
    function a3(a4) {
      if (!c3) {
        c3 = true;
        d3 = a4;
        a4 = l2(a4);
        if (void 0 !== g2 && f2.hasValue) {
          var b3 = f2.value;
          if (g2(b3, a4))
            return k2 = b3;
        }
        return k2 = a4;
      }
      b3 = k2;
      if (q$3(d3, a4))
        return b3;
      var e3 = l2(a4);
      if (void 0 !== g2 && g2(b3, e3))
        return b3;
      d3 = a4;
      return k2 = e3;
    }
    var c3 = false, d3, k2, m2 = void 0 === e2 ? null : e2;
    return [function() {
      return a3(b2());
    }, null === m2 ? void 0 : function() {
      return a3(m2());
    }];
  }, [b2, e2, l2, g2]);
  var d2 = r$7(a2, c2[0], c2[1]);
  u$6(function() {
    f2.hasValue = true;
    f2.value = d2;
  }, [d2]);
  w$4(d2);
  return d2;
};
(function(module) {
  {
    module.exports = withSelector_production_min;
  }
})(withSelector);
function defaultNoopBatch(callback) {
  callback();
}
let batch = defaultNoopBatch;
const setBatch = (newBatch) => batch = newBatch;
const getBatch = () => batch;
const ReactReduxContext = /* @__PURE__ */ reactExports.createContext(null);
function useReduxContext() {
  const contextValue = reactExports.useContext(ReactReduxContext);
  return contextValue;
}
const notInitialized = () => {
  throw new Error("uSES not initialized!");
};
let useSyncExternalStoreWithSelector = notInitialized;
const initializeUseSelector = (fn2) => {
  useSyncExternalStoreWithSelector = fn2;
};
const refEquality = (a2, b2) => a2 === b2;
function createSelectorHook(context2 = ReactReduxContext) {
  const useReduxContext$1 = context2 === ReactReduxContext ? useReduxContext : () => reactExports.useContext(context2);
  return function useSelector2(selector, equalityFn = refEquality) {
    const {
      store: store2,
      subscription,
      getServerState
    } = useReduxContext$1();
    const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store2.getState, getServerState || store2.getState, selector, equalityFn);
    reactExports.useDebugValue(selectedState);
    return selectedState;
  };
}
const useSelector = /* @__PURE__ */ createSelectorHook();
var reactIsExports$1 = {};
var reactIs$2 = {
  get exports() {
    return reactIsExports$1;
  },
  set exports(v2) {
    reactIsExports$1 = v2;
  }
};
var reactIs_production_min$1 = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$3 = "function" === typeof Symbol && Symbol.for, c$b = b$3 ? Symbol.for("react.element") : 60103, d$8 = b$3 ? Symbol.for("react.portal") : 60106, e$5 = b$3 ? Symbol.for("react.fragment") : 60107, f$6 = b$3 ? Symbol.for("react.strict_mode") : 60108, g$3 = b$3 ? Symbol.for("react.profiler") : 60114, h$7 = b$3 ? Symbol.for("react.provider") : 60109, k$2 = b$3 ? Symbol.for("react.context") : 60110, l$8 = b$3 ? Symbol.for("react.async_mode") : 60111, m$4 = b$3 ? Symbol.for("react.concurrent_mode") : 60111, n$6 = b$3 ? Symbol.for("react.forward_ref") : 60112, p$8 = b$3 ? Symbol.for("react.suspense") : 60113, q$2 = b$3 ? Symbol.for("react.suspense_list") : 60120, r$6 = b$3 ? Symbol.for("react.memo") : 60115, t$7 = b$3 ? Symbol.for("react.lazy") : 60116, v$3 = b$3 ? Symbol.for("react.block") : 60121, w$3 = b$3 ? Symbol.for("react.fundamental") : 60117, x$2 = b$3 ? Symbol.for("react.responder") : 60118, y$6 = b$3 ? Symbol.for("react.scope") : 60119;
function z$1(a2) {
  if ("object" === typeof a2 && null !== a2) {
    var u2 = a2.$$typeof;
    switch (u2) {
      case c$b:
        switch (a2 = a2.type, a2) {
          case l$8:
          case m$4:
          case e$5:
          case g$3:
          case f$6:
          case p$8:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k$2:
              case n$6:
              case t$7:
              case r$6:
              case h$7:
                return a2;
              default:
                return u2;
            }
        }
      case d$8:
        return u2;
    }
  }
}
function A$1(a2) {
  return z$1(a2) === m$4;
}
reactIs_production_min$1.AsyncMode = l$8;
reactIs_production_min$1.ConcurrentMode = m$4;
reactIs_production_min$1.ContextConsumer = k$2;
reactIs_production_min$1.ContextProvider = h$7;
reactIs_production_min$1.Element = c$b;
reactIs_production_min$1.ForwardRef = n$6;
reactIs_production_min$1.Fragment = e$5;
reactIs_production_min$1.Lazy = t$7;
reactIs_production_min$1.Memo = r$6;
reactIs_production_min$1.Portal = d$8;
reactIs_production_min$1.Profiler = g$3;
reactIs_production_min$1.StrictMode = f$6;
reactIs_production_min$1.Suspense = p$8;
reactIs_production_min$1.isAsyncMode = function(a2) {
  return A$1(a2) || z$1(a2) === l$8;
};
reactIs_production_min$1.isConcurrentMode = A$1;
reactIs_production_min$1.isContextConsumer = function(a2) {
  return z$1(a2) === k$2;
};
reactIs_production_min$1.isContextProvider = function(a2) {
  return z$1(a2) === h$7;
};
reactIs_production_min$1.isElement = function(a2) {
  return "object" === typeof a2 && null !== a2 && a2.$$typeof === c$b;
};
reactIs_production_min$1.isForwardRef = function(a2) {
  return z$1(a2) === n$6;
};
reactIs_production_min$1.isFragment = function(a2) {
  return z$1(a2) === e$5;
};
reactIs_production_min$1.isLazy = function(a2) {
  return z$1(a2) === t$7;
};
reactIs_production_min$1.isMemo = function(a2) {
  return z$1(a2) === r$6;
};
reactIs_production_min$1.isPortal = function(a2) {
  return z$1(a2) === d$8;
};
reactIs_production_min$1.isProfiler = function(a2) {
  return z$1(a2) === g$3;
};
reactIs_production_min$1.isStrictMode = function(a2) {
  return z$1(a2) === f$6;
};
reactIs_production_min$1.isSuspense = function(a2) {
  return z$1(a2) === p$8;
};
reactIs_production_min$1.isValidElementType = function(a2) {
  return "string" === typeof a2 || "function" === typeof a2 || a2 === e$5 || a2 === m$4 || a2 === g$3 || a2 === f$6 || a2 === p$8 || a2 === q$2 || "object" === typeof a2 && null !== a2 && (a2.$$typeof === t$7 || a2.$$typeof === r$6 || a2.$$typeof === h$7 || a2.$$typeof === k$2 || a2.$$typeof === n$6 || a2.$$typeof === w$3 || a2.$$typeof === x$2 || a2.$$typeof === y$6 || a2.$$typeof === v$3);
};
reactIs_production_min$1.typeOf = z$1;
(function(module) {
  {
    module.exports = reactIs_production_min$1;
  }
})(reactIs$2);
var reactIs$1 = reactIsExports$1;
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs$1.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs$1.Memo] = MEMO_STATICS;
var reactIsExports = {};
var reactIs = {
  get exports() {
    return reactIsExports;
  },
  set exports(v2) {
    reactIsExports = v2;
  }
};
var reactIs_production_min = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$2 = Symbol.for("react.element"), c$a = Symbol.for("react.portal"), d$7 = Symbol.for("react.fragment"), e$4 = Symbol.for("react.strict_mode"), f$5 = Symbol.for("react.profiler"), g$2 = Symbol.for("react.provider"), h$6 = Symbol.for("react.context"), k$1 = Symbol.for("react.server_context"), l$7 = Symbol.for("react.forward_ref"), m$3 = Symbol.for("react.suspense"), n$5 = Symbol.for("react.suspense_list"), p$7 = Symbol.for("react.memo"), q$1 = Symbol.for("react.lazy"), t$6 = Symbol.for("react.offscreen"), u$5;
u$5 = Symbol.for("react.module.reference");
function v$2(a2) {
  if ("object" === typeof a2 && null !== a2) {
    var r2 = a2.$$typeof;
    switch (r2) {
      case b$2:
        switch (a2 = a2.type, a2) {
          case d$7:
          case f$5:
          case e$4:
          case m$3:
          case n$5:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k$1:
              case h$6:
              case l$7:
              case q$1:
              case p$7:
              case g$2:
                return a2;
              default:
                return r2;
            }
        }
      case c$a:
        return r2;
    }
  }
}
reactIs_production_min.ContextConsumer = h$6;
reactIs_production_min.ContextProvider = g$2;
reactIs_production_min.Element = b$2;
reactIs_production_min.ForwardRef = l$7;
reactIs_production_min.Fragment = d$7;
reactIs_production_min.Lazy = q$1;
reactIs_production_min.Memo = p$7;
reactIs_production_min.Portal = c$a;
reactIs_production_min.Profiler = f$5;
reactIs_production_min.StrictMode = e$4;
reactIs_production_min.Suspense = m$3;
reactIs_production_min.SuspenseList = n$5;
reactIs_production_min.isAsyncMode = function() {
  return false;
};
reactIs_production_min.isConcurrentMode = function() {
  return false;
};
reactIs_production_min.isContextConsumer = function(a2) {
  return v$2(a2) === h$6;
};
reactIs_production_min.isContextProvider = function(a2) {
  return v$2(a2) === g$2;
};
reactIs_production_min.isElement = function(a2) {
  return "object" === typeof a2 && null !== a2 && a2.$$typeof === b$2;
};
reactIs_production_min.isForwardRef = function(a2) {
  return v$2(a2) === l$7;
};
reactIs_production_min.isFragment = function(a2) {
  return v$2(a2) === d$7;
};
reactIs_production_min.isLazy = function(a2) {
  return v$2(a2) === q$1;
};
reactIs_production_min.isMemo = function(a2) {
  return v$2(a2) === p$7;
};
reactIs_production_min.isPortal = function(a2) {
  return v$2(a2) === c$a;
};
reactIs_production_min.isProfiler = function(a2) {
  return v$2(a2) === f$5;
};
reactIs_production_min.isStrictMode = function(a2) {
  return v$2(a2) === e$4;
};
reactIs_production_min.isSuspense = function(a2) {
  return v$2(a2) === m$3;
};
reactIs_production_min.isSuspenseList = function(a2) {
  return v$2(a2) === n$5;
};
reactIs_production_min.isValidElementType = function(a2) {
  return "string" === typeof a2 || "function" === typeof a2 || a2 === d$7 || a2 === f$5 || a2 === e$4 || a2 === m$3 || a2 === n$5 || a2 === t$6 || "object" === typeof a2 && null !== a2 && (a2.$$typeof === q$1 || a2.$$typeof === p$7 || a2.$$typeof === g$2 || a2.$$typeof === h$6 || a2.$$typeof === l$7 || a2.$$typeof === u$5 || void 0 !== a2.getModuleId) ? true : false;
};
reactIs_production_min.typeOf = v$2;
(function(module) {
  {
    module.exports = reactIs_production_min;
  }
})(reactIs);
function createListenerCollection() {
  const batch2 = getBatch();
  let first = null;
  let last = null;
  return {
    clear() {
      first = null;
      last = null;
    },
    notify() {
      batch2(() => {
        let listener = first;
        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get() {
      let listeners = [];
      let listener = first;
      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }
      return listeners;
    },
    subscribe(callback) {
      let isSubscribed = true;
      let listener = last = {
        callback,
        next: null,
        prev: last
      };
      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }
      return function unsubscribe() {
        if (!isSubscribed || first === null)
          return;
        isSubscribed = false;
        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }
        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}
const nullListeners = {
  notify() {
  },
  get: () => []
};
function createSubscription(store2, parentSub) {
  let unsubscribe;
  let listeners = nullListeners;
  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }
  function notifyNestedSubs() {
    listeners.notify();
  }
  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }
  function isSubscribed() {
    return Boolean(unsubscribe);
  }
  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store2.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }
  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = void 0;
      listeners.clear();
      listeners = nullListeners;
    }
  }
  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe,
    tryUnsubscribe,
    getListeners: () => listeners
  };
  return subscription;
}
const canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
const useIsomorphicLayoutEffect = canUseDOM ? reactExports.useLayoutEffect : reactExports.useEffect;
function Provider$1({
  store: store2,
  context: context2,
  children,
  serverState
}) {
  const contextValue = reactExports.useMemo(() => {
    const subscription = createSubscription(store2);
    return {
      store: store2,
      subscription,
      getServerState: serverState ? () => serverState : void 0
    };
  }, [store2, serverState]);
  const previousState = reactExports.useMemo(() => store2.getState(), [store2]);
  useIsomorphicLayoutEffect(() => {
    const {
      subscription
    } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();
    if (previousState !== store2.getState()) {
      subscription.notifyNestedSubs();
    }
    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = void 0;
    };
  }, [contextValue, previousState]);
  const Context = context2 || ReactReduxContext;
  return /* @__PURE__ */ React.createElement(Context.Provider, {
    value: contextValue
  }, children);
}
function createStoreHook(context2 = ReactReduxContext) {
  const useReduxContext$1 = (
    // @ts-ignore
    context2 === ReactReduxContext ? useReduxContext : () => reactExports.useContext(context2)
  );
  return function useStore2() {
    const {
      store: store2
    } = useReduxContext$1();
    return store2;
  };
}
const useStore = /* @__PURE__ */ createStoreHook();
function createDispatchHook(context2 = ReactReduxContext) {
  const useStore$1 = (
    // @ts-ignore
    context2 === ReactReduxContext ? useStore : createStoreHook(context2)
  );
  return function useDispatch2() {
    const store2 = useStore$1();
    return store2.dispatch;
  };
}
const useDispatch = /* @__PURE__ */ createDispatchHook();
initializeUseSelector(withSelectorExports.useSyncExternalStoreWithSelector);
setBatch(reactDomExports.unstable_batchedUpdates);
const initialState$5 = {
  isAuthenticated: false,
  isAdminLogin: null,
  isLoginProcessing: false,
  error: null,
  adb2cUser: null,
  crmUser: null,
  adminUser: null,
  adminGrabUser: null,
  userId: null,
  codeVerifier: "",
  codeChallenge: "",
  currentPolicy: "",
  pointList: null,
  totalPoint: null
  // deliveryOption: EShippingMode.default
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialState$5,
  reducers: {},
  extraReducers: (builder) => {
  }
});
const authReducer = authSlice.reducer;
const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
const selectUserInfo = (state) => state.auth.crmUser;
const selectAdminUserInfo = (state) => state.auth.adminUser;
const selectIsAdmin = (state) => state.auth.isAdminLogin;
const initialState$4 = {
  isLoading: false,
  isCardLoading: false,
  isLoginModalOpen: false,
  isWishListModalOpen: false,
  isDeliveryModalOpen: false,
  isECouponModalOpen: false,
  isLackAmountModalOpen: false,
  isKeepShoppingModalOpen: false,
  isFillAddressModalOpen: false,
  isChooseAddressModalOpen: false,
  isWarningModalOpen: {
    type: "close",
    text: ""
  },
  isCommonModalOpen: false,
  isDrawerOpen: false,
  windowSize: "default",
  isEdited: false,
  isCheckOut: false,
  isNewAddressAdded: false,
  isKeepFilter: false
};
const controlSlice = createSlice({
  name: "control",
  initialState: initialState$4,
  reducers: {
    onLoading: (state) => {
      state.isLoading = true;
    },
    onLoaded: (state) => {
      state.isLoading = false;
    },
    onCardLoading: (state) => {
      state.isCardLoading = true;
    },
    onCardLoaded: (state) => {
      state.isCardLoading = false;
    },
    openLoginModal: (state) => {
      state.isLoginModalOpen = true;
    },
    closeLoginModal: (state) => {
      state.isLoginModalOpen = false;
    },
    openWishListModal: (state) => {
      state.isWishListModalOpen = true;
    },
    closeWishListModal: (state) => {
      state.isWishListModalOpen = false;
    },
    openDeliveryModal: (state) => {
      state.isDeliveryModalOpen = true;
    },
    closeDeliveryModal: (state) => {
      state.isDeliveryModalOpen = false;
    },
    openECouponModal: (state) => {
      state.isECouponModalOpen = true;
    },
    closeECouponModal: (state) => {
      state.isECouponModalOpen = false;
    },
    openWarningModal: (state, action) => {
      state.isWarningModalOpen = action.payload;
    },
    closeWarningModal: (state) => {
      state.isWarningModalOpen = {
        type: "close",
        text: ""
      };
    },
    openShoppingModal: (state) => {
      state.isKeepShoppingModalOpen = true;
    },
    closeShoppingModal: (state) => {
      state.isKeepShoppingModalOpen = false;
    },
    openLackAmountModal: (state) => {
      state.isLackAmountModalOpen = true;
    },
    closeLackAmountModal: (state) => {
      state.isLackAmountModalOpen = false;
    },
    openCommonModal: (state) => {
      state.isCommonModalOpen = true;
    },
    closeCommonModal: (state) => {
      state.isCommonModalOpen = false;
    },
    openFillAddressModal: (state) => {
      state.isFillAddressModalOpen = true;
    },
    closeFillAddressModal: (state) => {
      state.isFillAddressModalOpen = false;
    },
    openChooseAddressModal: (state) => {
      state.isChooseAddressModalOpen = true;
    },
    closeChooseAddressModal: (state) => {
      state.isChooseAddressModalOpen = false;
    },
    openDrawer: (state) => {
      state.isDrawerOpen = true;
    },
    closeDrawer: (state) => {
      state.isDrawerOpen = false;
    },
    onLaptopSize: (state) => {
      state.windowSize = "laptop";
    },
    onMobileSize: (state) => {
      state.windowSize = "mobile";
    },
    onCartEdit: (state, action) => {
      state.isEdited = action.payload;
    },
    onCartCheckOut: (state, action) => {
      state.isCheckOut = action.payload;
    },
    onNewAddressAdd: (state) => {
      state.isNewAddressAdded = true;
    },
    onNewAddressClose: (state) => {
      state.isNewAddressAdded = false;
    },
    setKeepFilter: (state, action) => {
      state.isKeepFilter = action.payload;
    }
  }
});
const {
  onLoading,
  onLoaded,
  onCardLoading,
  onCardLoaded,
  openLoginModal,
  closeLoginModal,
  openWishListModal,
  closeWishListModal,
  openDeliveryModal,
  closeDeliveryModal,
  openECouponModal,
  closeECouponModal,
  openLackAmountModal,
  closeLackAmountModal,
  openShoppingModal,
  closeShoppingModal,
  openFillAddressModal,
  closeFillAddressModal,
  openChooseAddressModal,
  closeChooseAddressModal,
  openCommonModal,
  closeCommonModal,
  openWarningModal,
  closeWarningModal,
  openDrawer,
  closeDrawer,
  onLaptopSize,
  onMobileSize,
  onCartEdit,
  onCartCheckOut,
  onNewAddressAdd,
  onNewAddressClose,
  setKeepFilter
} = controlSlice.actions;
const controlReducer = controlSlice.reducer;
const selectIsLoading = (state) => state.control.isLoading;
const selectIsCardLoading = (state) => state.control.isCardLoading;
const selectIsWarningModalOpen = (state) => state.control.isWarningModalOpen;
const selectIsCommonModalOpen = (state) => state.control.isCommonModalOpen;
const selectWindowSize = (state) => state.control.windowSize;
const selectIsCheckOut = (state) => state.control.isCheckOut;
const defaultLang = "zh";
const supportedLangs = {
  en: "English",
  zh: "Chinese"
};
const initialState$3 = {
  lang: defaultLang,
  supportedLangs: { ...supportedLangs },
  translations: {
    zh: {
      placeholders: "搜尋產品名稱或品牌",
      btn: "搜尋"
    },
    en: {
      placeholders: "Search by product name or category",
      btn: "Search"
    }
  }
};
const i18nSlice = createSlice({
  name: "i18n",
  initialState: initialState$3,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload.lang;
    }
  }
});
const selectTranslations = (state) => state.i18n.translations[state.i18n.lang];
const i18nReducer = i18nSlice.reducer;
const getProductDetailThunk = createAsyncThunk(
  "shopping/productDetail",
  async (data2, thunkAPI) => {
    var _a;
    const { dispatch, rejectWithValue, getState } = thunkAPI;
    const memberNo = ((_a = getState().auth.crmUser) == null ? void 0 : _a.memberNo) ?? "";
    const pickupStore = "NTP";
    try {
      dispatch(onLoading());
      let postData = {
        ...data2,
        MemberNo: memberNo,
        pickup_location_code: pickupStore
      };
      postData = Object.fromEntries(Object.entries(postData).filter(([_2, v2]) => v2 != void 0));
      const res = await fetch(
        `${"https://yataapi.azurefd.net/eshop/api"}/product/productDetail`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(postData)
        }
      );
      const result = await res.json();
      if (res.status == 200) {
        dispatch(onLoaded());
        return result.data.productDetail.items[0];
      }
    } catch (error) {
      console.log("product detail err: ", error);
      dispatch(onLoaded());
      return rejectWithValue({ error });
    }
  }
);
const getShoppingCartListThunk = createAsyncThunk(
  "shopping/cartItemList",
  async (_2, thunkAPI) => {
    const { dispatch, getState, rejectWithValue } = thunkAPI;
    const state = getState();
    const memberNo = state.auth.crmUser.memberNo ?? "";
    state.shopping;
    try {
      const groupIdList = [];
      const res = await fetch(`${"https://yataapi.azurefd.net/eshop/api"}/cart/getCart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify({ MemberNo: "M9032308" }),
        body: JSON.stringify({ MemberNo: memberNo }),
        redirect: "follow"
      });
      const result = await res.json();
      console.log("shopping cart res: ", res);
      if (res.status == 200) {
        console.log("shopping cart result.data: ", result.data);
        if (result.data) {
          let detail = result.data.getCart.items;
          if (detail.length == 0)
            return detail;
          console.log("shopping cart list: ", detail);
          detail = detail.slice().sort((a2, b2) => a2.quote_type - b2.quote_type);
          return detail;
        } else {
          return result;
        }
      }
    } catch (error) {
      console.log("get shopping cart list error: ", error);
      dispatch(onLoaded());
      return rejectWithValue(error);
    }
  }
);
const PRODUCT_LIST_PAGE_SIZE = 20;
const getProductListApi = createAsyncThunk("shopping/productSearch", async (list, thunkAPI) => {
  const searchQuery = {
    category_id: list.categories,
    sub_category_id: list.subCategories,
    brand_name: list.brands,
    source_from: list.countries,
    limit: [0, PRODUCT_LIST_PAGE_SIZE],
    sort_by: list.sort ?? "",
    current_page: list.currentPage,
    pickup_location_code: "NTP"
  };
  try {
    const res = await fetch(`${"https://yataapi.azurefd.net/eshop/api"}/product/productSearch`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(searchQuery)
    });
    if (res.status == 200) {
      const result = await res.json();
      return {
        total_count: result.data.productSearch.total_count,
        current_page: result.data.productSearch.current_page,
        total_page: result.data.productSearch.total_page,
        current_page_count: result.data.productSearch.current_page_count,
        items: result.data.productSearch.items
      };
    } else {
      return { error: "Error" };
    }
  } catch (error) {
    console.log("product search not success: ", error);
    return { error };
  }
});
const getCarouselApi = createAsyncThunk("shopping/getCarousel", async (_2, thunkAPI) => {
  var _a;
  const memberNo = ((_a = thunkAPI.getState().auth.crmUser) == null ? void 0 : _a.memberNo) ?? "";
  try {
    const res = await fetch(`${"https://yataapi.azurefd.net/eshop/api"}/category/getCarousell`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ MemberNo: memberNo })
    });
    if (res.status == 200) {
      const result = await res.json();
      return { items: result.data.getCarousell.items };
    } else {
      return { error: "Error" };
    }
  } catch (error) {
    console.log("carousel not success: ", error);
    return { error };
  }
});
const initialState$2 = {
  filterList: {
    countries: [],
    brands: [],
    categories: [],
    subCategories: []
  },
  productDetail: null,
  shoppingCartDetail: null,
  ungroupedShoppingCartDetail: null,
  cartGroupId: [],
  cartItemQty: 0,
  cartTabIdx: 0,
  cartQuoteType: -1,
  modifiedCartItems: null,
  likedCartItem: null,
  error: null,
  currentOrder: null,
  filterCatList: [],
  hamperDetail: [],
  hamperDescription: null,
  currentHamperId: {
    quote_id: 0,
    product_id: 0
  }
};
const shoppingSlice = createSlice({
  name: "shopping",
  initialState: initialState$2,
  reducers: {
    setFilteringSubCategories: (state, action) => {
      if (state.filterList.subCategories.includes(action.payload.id)) {
        state.filterList.subCategories = state.filterList.subCategories.filter(
          (category) => category !== action.payload.id
        );
        state.filterCatList = state.filterCatList.filter(
          (category) => category.id !== action.payload.id
        );
      } else {
        state.filterList.subCategories = [
          ...state.filterList.subCategories,
          action.payload.id
        ];
        state.filterCatList = [
          ...state.filterCatList,
          {
            name: action.payload.name,
            id: action.payload.id
          }
        ];
      }
    },
    setFilteringCategoriesId: (state, action) => {
      state.filterList.categories = [action.payload];
    },
    setFilteringCountries: (state, action) => {
      if (state.filterList.countries.includes(action.payload)) {
        state.filterList.countries = state.filterList.countries.filter(
          (country) => country !== action.payload
        );
      } else {
        state.filterList.countries = [
          ...state.filterList.countries,
          action.payload
        ];
      }
    },
    setFilteringBrands: (state, action) => {
      if (state.filterList.brands.includes(action.payload)) {
        state.filterList.brands = state.filterList.brands.filter(
          (brand) => brand !== action.payload
        );
      } else {
        state.filterList.brands = [...state.filterList.brands, action.payload];
      }
    },
    resetFilterList: (state) => {
      state.filterList = {
        brands: [],
        countries: [],
        subCategories: [],
        categories: state.filterList.categories
      };
      state.filterCatList = [];
    },
    initShoppingCartList: (state) => {
      state.shoppingCartDetail = [];
    },
    getCartItemQty: (state, action) => {
      state.cartItemQty = action.payload;
    },
    setCartTabIndex: (state, action) => {
      state.cartTabIdx = action.payload;
    },
    setCartQuoteType: (state, action) => {
      state.cartQuoteType = action.payload;
    },
    setModifiedCartItem: (state, action) => {
      state.modifiedCartItems = action.payload;
    },
    setLikedCartItem: (state, action) => {
      state.likedCartItem = action.payload;
    },
    initModifiedCartItem: (state) => {
      state.modifiedCartItems = null;
    },
    setCurrentOrder: (state, action) => {
      state.currentOrder = action.payload;
    },
    initProductDetail: (state) => {
      state.productDetail = null;
    },
    setCartGroupId: (state, action) => {
      state.cartGroupId = action.payload;
    },
    setHamperDetail: (state, action) => {
      state.hamperDetail = action.payload;
    },
    setCurrentHamperId: (state, action) => {
      state.currentHamperId = action.payload;
    },
    setHamperDescription: (state, action) => {
      state.hamperDescription = action.payload;
    },
    addItemWishList: (state, { payload }) => {
      state.shoppingCartDetail[payload.idx].item_lines = state.shoppingCartDetail[payload.idx].item_lines.map((item) => {
        if (item.plu == payload.plu)
          return { ...item, wish_list: 1 };
        else
          return item;
      });
    },
    removeItemWishList: (state, { payload }) => {
      state.shoppingCartDetail[payload.idx].item_lines = state.shoppingCartDetail[payload.idx].item_lines.map((item) => {
        if (item.plu == payload.plu)
          return { ...item, wish_list: 0 };
        else
          return item;
      });
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProductDetailThunk.fulfilled, (state, action) => {
      state.productDetail = action.payload;
    });
    builder.addCase(getProductDetailThunk.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error;
      }
    });
    builder.addCase(getShoppingCartListThunk.fulfilled, (state, action) => {
      state.shoppingCartDetail = action.payload;
    });
    builder.addCase(getShoppingCartListThunk.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error;
      }
    });
  }
});
const {
  setFilteringSubCategories,
  setFilteringCategoriesId,
  setFilteringBrands,
  setFilteringCountries,
  resetFilterList,
  initShoppingCartList,
  getCartItemQty,
  setLikedCartItem,
  setModifiedCartItem,
  initModifiedCartItem,
  setCurrentOrder,
  initProductDetail,
  setCartTabIndex,
  setCartQuoteType,
  setCartGroupId,
  setHamperDetail,
  setCurrentHamperId,
  setHamperDescription,
  addItemWishList,
  removeItemWishList
} = shoppingSlice.actions;
const shoppingReducer = shoppingSlice.reducer;
const selectFilterList = (state) => state.shopping.filterList;
const selectProductDetail = (state) => state.shopping.productDetail;
const selectFilterCatList = (state) => state.shopping.filterCatList;
const getCategoryListThunk = createAsyncThunk(
  "config/getCategoryList",
  async (_2, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(onLoading());
    try {
      const res = await fetch(`${"https://yataapi.azurefd.net/eshop/api"}/category/list`, {
        method: "POST"
      });
      const result = await res.json();
      console.log("get category by  : ", res);
      if (res.status == 200) {
        console.log("get category by  : ", result.data.categories.items);
        const list = result.data.categories.items;
        return list;
      }
    } catch (error) {
      dispatch(onLoaded());
      return thunkAPI.rejectWithValue({ error });
    }
  }
);
const getCategoryById = createAsyncThunk(
  "config/getCategoryById",
  async (catId, thunkAPI) => {
    try {
      const postData = { "category_id": catId };
      const res = await fetch(`${"https://yataapi.azurefd.net/eshop/api"}/category/getCategoryById`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData)
      });
      const result = await res.json();
      if (res.status == 200) {
        const list = result.data.categories.items;
        return list;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ error });
    }
  }
);
const getPickupStoresThunk = createAsyncThunk(
  "config/getPickupStores",
  async (_2, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(onLoading());
    try {
      const res = await fetch(`${"https://yataapi.azurefd.net/eshop/api"}/cart/getPUStoreInfo`, {
        method: "POST"
      });
      const result = await res.json();
      if (res.status == 200) {
        const list = result.data.getPUStoreInfo.items;
        return list;
      }
    } catch (error) {
      dispatch(onLoaded());
      return thunkAPI.rejectWithValue({ error });
    }
  }
);
const getConfigDataThunk = createAsyncThunk(
  "config/getUserCouponType",
  async (_2, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      dispatch(onLoading());
      const storedData = localStorage.getItem("configData");
      const marketList = [];
      const getData = async () => {
        if (!storedData) {
          const res = await fetch(`${"https://yatacustomerappserviceprod.azurewebsites.net/api"}/ConfigData`);
          const result2 = await res.json();
          if (res.status == 200 && result2.isSuccess == true) {
            localStorage.setItem("configData", JSON.stringify(result2.data));
            return result2.data;
          }
        } else {
          return JSON.parse(storedData);
        }
      };
      const result = await getData();
      const hkRegion = result.countryList.filter((city) => city.name.en == "Hong Kong")[0].regionList;
      if (hkRegion) {
        hkRegion.map((region) => {
          marketList.push({
            id: region.id,
            name: region.name,
            marketList: region.marketList,
            districtList: region.districtList
          });
        });
        dispatch(getRegionMarketList(marketList));
      }
      dispatch(getPointHistoryList(result.pointHistoryTypeList));
      dispatch(getCountryList(result.countryList));
      dispatch(onLoaded());
    } catch (error) {
      dispatch(onLoaded());
      return thunkAPI.rejectWithValue({ error });
    }
  }
);
createAsyncThunk(
  "config/contactUs",
  async (data2, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      const res = await fetch("https://prod-19.southeastasia.logic.azure.com:443/workflows/91662aa6f1944fa884bab2a5c9274a8b/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=99Uon6YuK9MUQYueNnSOsRbRILfs5DMP_TYEuUrTy2g", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data2)
      });
      if (res.status != 200) {
        return dispatch(getContactData({ statusCode: 400, result: "failure", message: "something went wrong" }));
      }
      const result = await res.json();
      if (result) {
        dispatch(getContactData(result));
      }
      return result;
    } catch (error) {
      return { error };
    }
  }
);
const getBannerImageApi = async (path) => {
  try {
    const res = await fetch(
      `${"https://yataapi.azurefd.net/eshop/api"}/imageslider/getImageSlider?`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path_name: path }),
        redirect: "follow"
      }
    );
    const result = await res.json();
    if (res.status == 200) {
      const images = result.data.getImageSlider.items;
      return images;
    }
  } catch (error) {
    console.log("get banner err: ", error);
  }
};
const initBannerList = {
  topSlider: [],
  middleBanner: [],
  narrowBanner: [],
  bottomBanner: [],
  otherBanner: []
};
const initialState$1 = {
  categoryList: [],
  categoryPath: null,
  regionList: [],
  countryList: [],
  contactMessage: null,
  banners: initBannerList,
  pickupStoreList: [],
  pointHistoryList: []
};
const configSlice = createSlice({
  name: "config",
  initialState: initialState$1,
  reducers: {
    getRegionMarketList: (state, action) => {
      state.regionList = action.payload;
    },
    getCountryList: (state, action) => {
      state.countryList = action.payload;
    },
    getPointHistoryList: (state, action) => {
      state.pointHistoryList = action.payload;
    },
    getContactData: (state, action) => {
      state.contactMessage = action.payload;
    },
    setCategoryPath: (state, action) => {
      state.categoryPath = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCategoryListThunk.fulfilled, (state, action) => {
      state.categoryList = action.payload;
    });
    builder.addCase(getPickupStoresThunk.fulfilled, (state, action) => {
      state.pickupStoreList = action.payload;
    });
  }
});
const {
  getRegionMarketList,
  getCountryList,
  getPointHistoryList,
  getContactData,
  setCategoryPath
} = configSlice.actions;
const configReducer = configSlice.reducer;
const selectCategoryList = (state) => state.config.categoryList;
const initialState = {
  imgUrl: "./img"
};
const IconfigSlice = createSlice({
  name: "Iconfig",
  initialState,
  reducers: {
    getRegionMarketList: (state, action) => {
      state.imgUrl = action.payload;
    }
  }
});
const IconfigReducer = IconfigSlice.reducer;
const selectImgUrl = (state) => state.Iconfig.imgUrl;
const combinedReducer = combineReducers({
  auth: authReducer,
  Iconfig: IconfigReducer,
  config: configReducer,
  control: controlReducer,
  i18n: i18nReducer,
  shopping: shoppingReducer
});
const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};
const store = configureStore({
  reducer: rootReducer
});
const useAppDispatch = () => useDispatch();
const useAppSelector = useSelector;
const defaultVal = {
  name: "",
  setName: () => {
  }
};
const context = React.createContext(defaultVal);
const { Provider } = context;
const ContextWrapper = ({ children }) => {
  const [name, setName] = reactExports.useState(defaultVal.name);
  return /* @__PURE__ */ jsx(Provider, { value: { name, setName }, children });
};
const useAppContext = () => reactExports.useContext(context);
const Loading = ({
  isLoading,
  bgColor = "#A6CE39",
  height = "100vh",
  opacity = 0.4
}) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-transparent visible",
        style: {
          opacity: isLoading ? opacity : 0,
          visibility: isLoading ? "visible" : "hidden"
        }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "z-40 fixed flex items-center justify-center duration-300 ease-out backdrop-opacity-60 backdrop-blur-[200px]",
        style: {
          transitionProperty: "color, opacity, visibility",
          backgroundColor: bgColor,
          width: "100%",
          height,
          opacity: isLoading ? opacity : 0,
          visibility: isLoading ? "visible" : "hidden",
          top: "-10px"
        },
        children: /* @__PURE__ */ jsx("div", { className: "lds-roller z-[100] ", children: [...Array(8)].map((_2, idx) => /* @__PURE__ */ jsx("div", { className: "" }, `dot-${idx}`)) })
      }
    )
  ] });
};
const carousel_min = "";
var js = {};
var Carousel$1 = {};
var lib = {};
var reactSwipe = {};
var propTypesExports = {};
var propTypes = {
  get exports() {
    return propTypesExports;
  },
  set exports(v2) {
    propTypesExports = v2;
  }
};
var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;
function requireReactPropTypesSecret() {
  if (hasRequiredReactPropTypesSecret)
    return ReactPropTypesSecret_1;
  hasRequiredReactPropTypesSecret = 1;
  var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  ReactPropTypesSecret_1 = ReactPropTypesSecret;
  return ReactPropTypesSecret_1;
}
var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;
function requireFactoryWithThrowingShims() {
  if (hasRequiredFactoryWithThrowingShims)
    return factoryWithThrowingShims;
  hasRequiredFactoryWithThrowingShims = 1;
  var ReactPropTypesSecret = requireReactPropTypesSecret();
  function emptyFunction() {
  }
  function emptyFunctionWithReset() {
  }
  emptyFunctionWithReset.resetWarningCache = emptyFunction;
  factoryWithThrowingShims = function() {
    function shim2(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        return;
      }
      var err = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      err.name = "Invariant Violation";
      throw err;
    }
    shim2.isRequired = shim2;
    function getShim() {
      return shim2;
    }
    var ReactPropTypes = {
      array: shim2,
      bigint: shim2,
      bool: shim2,
      func: shim2,
      number: shim2,
      object: shim2,
      string: shim2,
      symbol: shim2,
      any: shim2,
      arrayOf: getShim,
      element: shim2,
      elementType: shim2,
      instanceOf: getShim,
      node: shim2,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
  return factoryWithThrowingShims;
}
var hasRequiredPropTypes;
function requirePropTypes() {
  if (hasRequiredPropTypes)
    return propTypesExports;
  hasRequiredPropTypes = 1;
  {
    propTypes.exports = requireFactoryWithThrowingShims()();
  }
  return propTypesExports;
}
var hasRequiredReactSwipe;
function requireReactSwipe() {
  if (hasRequiredReactSwipe)
    return reactSwipe;
  hasRequiredReactSwipe = 1;
  (function(exports) {
    (function(global2, factory) {
      {
        factory(exports, reactExports, requirePropTypes());
      }
    })(commonjsGlobal, function(exports2, _react2, _propTypes) {
      Object.defineProperty(exports2, "__esModule", {
        value: true
      });
      exports2.setHasSupportToCaptureOption = setHasSupportToCaptureOption;
      var _react22 = _interopRequireDefault2(_react2);
      var _propTypes2 = _interopRequireDefault2(_propTypes);
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var _extends2 = Object.assign || function(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i2 in obj) {
          if (keys.indexOf(i2) >= 0)
            continue;
          if (!Object.prototype.hasOwnProperty.call(obj, i2))
            continue;
          target[i2] = obj[i2];
        }
        return target;
      }
      function _classCallCheck2(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var _createClass2 = function() {
        function defineProperties(target, props) {
          for (var i2 = 0; i2 < props.length; i2++) {
            var descriptor = props[i2];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      function _possibleConstructorReturn2(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits2(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var supportsCaptureOption = false;
      function setHasSupportToCaptureOption(hasSupport) {
        supportsCaptureOption = hasSupport;
      }
      try {
        addEventListener("test", null, Object.defineProperty({}, "capture", { get: function get() {
          setHasSupportToCaptureOption(true);
        } }));
      } catch (e2) {
      }
      function getSafeEventHandlerOpts() {
        var options2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { capture: true };
        return supportsCaptureOption ? options2 : options2.capture;
      }
      function getPosition3(event) {
        if ("touches" in event) {
          var _event$touches$ = event.touches[0], pageX = _event$touches$.pageX, pageY = _event$touches$.pageY;
          return { x: pageX, y: pageY };
        }
        var screenX = event.screenX, screenY = event.screenY;
        return { x: screenX, y: screenY };
      }
      var ReactSwipe = function(_Component) {
        _inherits2(ReactSwipe2, _Component);
        function ReactSwipe2() {
          var _ref;
          _classCallCheck2(this, ReactSwipe2);
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var _this = _possibleConstructorReturn2(this, (_ref = ReactSwipe2.__proto__ || Object.getPrototypeOf(ReactSwipe2)).call.apply(_ref, [this].concat(args)));
          _this._handleSwipeStart = _this._handleSwipeStart.bind(_this);
          _this._handleSwipeMove = _this._handleSwipeMove.bind(_this);
          _this._handleSwipeEnd = _this._handleSwipeEnd.bind(_this);
          _this._onMouseDown = _this._onMouseDown.bind(_this);
          _this._onMouseMove = _this._onMouseMove.bind(_this);
          _this._onMouseUp = _this._onMouseUp.bind(_this);
          _this._setSwiperRef = _this._setSwiperRef.bind(_this);
          return _this;
        }
        _createClass2(ReactSwipe2, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            if (this.swiper) {
              this.swiper.addEventListener("touchmove", this._handleSwipeMove, getSafeEventHandlerOpts({
                capture: true,
                passive: false
              }));
            }
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            if (this.swiper) {
              this.swiper.removeEventListener("touchmove", this._handleSwipeMove, getSafeEventHandlerOpts({
                capture: true,
                passive: false
              }));
            }
          }
        }, {
          key: "_onMouseDown",
          value: function _onMouseDown(event) {
            if (!this.props.allowMouseEvents) {
              return;
            }
            this.mouseDown = true;
            document.addEventListener("mouseup", this._onMouseUp);
            document.addEventListener("mousemove", this._onMouseMove);
            this._handleSwipeStart(event);
          }
        }, {
          key: "_onMouseMove",
          value: function _onMouseMove(event) {
            if (!this.mouseDown) {
              return;
            }
            this._handleSwipeMove(event);
          }
        }, {
          key: "_onMouseUp",
          value: function _onMouseUp(event) {
            this.mouseDown = false;
            document.removeEventListener("mouseup", this._onMouseUp);
            document.removeEventListener("mousemove", this._onMouseMove);
            this._handleSwipeEnd(event);
          }
        }, {
          key: "_handleSwipeStart",
          value: function _handleSwipeStart(event) {
            var _getPosition = getPosition3(event), x2 = _getPosition.x, y2 = _getPosition.y;
            this.moveStart = { x: x2, y: y2 };
            this.props.onSwipeStart(event);
          }
        }, {
          key: "_handleSwipeMove",
          value: function _handleSwipeMove(event) {
            if (!this.moveStart) {
              return;
            }
            var _getPosition2 = getPosition3(event), x2 = _getPosition2.x, y2 = _getPosition2.y;
            var deltaX = x2 - this.moveStart.x;
            var deltaY = y2 - this.moveStart.y;
            this.moving = true;
            var shouldPreventDefault = this.props.onSwipeMove({
              x: deltaX,
              y: deltaY
            }, event);
            if (shouldPreventDefault && event.cancelable) {
              event.preventDefault();
            }
            this.movePosition = { deltaX, deltaY };
          }
        }, {
          key: "_handleSwipeEnd",
          value: function _handleSwipeEnd(event) {
            this.props.onSwipeEnd(event);
            var tolerance = this.props.tolerance;
            if (this.moving && this.movePosition) {
              if (this.movePosition.deltaX < -tolerance) {
                this.props.onSwipeLeft(1, event);
              } else if (this.movePosition.deltaX > tolerance) {
                this.props.onSwipeRight(1, event);
              }
              if (this.movePosition.deltaY < -tolerance) {
                this.props.onSwipeUp(1, event);
              } else if (this.movePosition.deltaY > tolerance) {
                this.props.onSwipeDown(1, event);
              }
            }
            this.moveStart = null;
            this.moving = false;
            this.movePosition = null;
          }
        }, {
          key: "_setSwiperRef",
          value: function _setSwiperRef(node) {
            this.swiper = node;
            this.props.innerRef(node);
          }
        }, {
          key: "render",
          value: function render() {
            var _props = this.props;
            _props.tagName;
            var className = _props.className, style = _props.style, children = _props.children;
            _props.allowMouseEvents;
            _props.onSwipeUp;
            _props.onSwipeDown;
            _props.onSwipeLeft;
            _props.onSwipeRight;
            _props.onSwipeStart;
            _props.onSwipeMove;
            _props.onSwipeEnd;
            _props.innerRef;
            _props.tolerance;
            var props = _objectWithoutProperties(_props, ["tagName", "className", "style", "children", "allowMouseEvents", "onSwipeUp", "onSwipeDown", "onSwipeLeft", "onSwipeRight", "onSwipeStart", "onSwipeMove", "onSwipeEnd", "innerRef", "tolerance"]);
            return _react22.default.createElement(
              this.props.tagName,
              _extends2({
                ref: this._setSwiperRef,
                onMouseDown: this._onMouseDown,
                onTouchStart: this._handleSwipeStart,
                onTouchEnd: this._handleSwipeEnd,
                className,
                style
              }, props),
              children
            );
          }
        }]);
        return ReactSwipe2;
      }(_react2.Component);
      ReactSwipe.displayName = "ReactSwipe";
      ReactSwipe.propTypes = {
        tagName: _propTypes2.default.string,
        className: _propTypes2.default.string,
        style: _propTypes2.default.object,
        children: _propTypes2.default.node,
        allowMouseEvents: _propTypes2.default.bool,
        onSwipeUp: _propTypes2.default.func,
        onSwipeDown: _propTypes2.default.func,
        onSwipeLeft: _propTypes2.default.func,
        onSwipeRight: _propTypes2.default.func,
        onSwipeStart: _propTypes2.default.func,
        onSwipeMove: _propTypes2.default.func,
        onSwipeEnd: _propTypes2.default.func,
        innerRef: _propTypes2.default.func,
        tolerance: _propTypes2.default.number.isRequired
      };
      ReactSwipe.defaultProps = {
        tagName: "div",
        allowMouseEvents: false,
        onSwipeUp: function onSwipeUp() {
        },
        onSwipeDown: function onSwipeDown() {
        },
        onSwipeLeft: function onSwipeLeft() {
        },
        onSwipeRight: function onSwipeRight() {
        },
        onSwipeStart: function onSwipeStart2() {
        },
        onSwipeMove: function onSwipeMove2() {
        },
        onSwipeEnd: function onSwipeEnd2() {
        },
        innerRef: function innerRef() {
        },
        tolerance: 0
      };
      exports2.default = ReactSwipe;
    });
  })(reactSwipe);
  return reactSwipe;
}
(function(exports) {
  (function(global2, factory) {
    {
      factory(exports, requireReactSwipe());
    }
  })(commonjsGlobal, function(exports2, _reactSwipe) {
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    var _reactSwipe2 = _interopRequireDefault2(_reactSwipe);
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    exports2.default = _reactSwipe2.default;
  });
})(lib);
var cssClasses = {};
var classnamesExports = {};
var classnames = {
  get exports() {
    return classnamesExports;
  },
  set exports(v2) {
    classnamesExports = v2;
  }
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
      var classes = [];
      for (var i2 = 0; i2 < arguments.length; i2++) {
        var arg = arguments[i2];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === "object") {
          if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
            classes.push(arg.toString());
            continue;
          }
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }
      return classes.join(" ");
    }
    if (module.exports) {
      classNames.default = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
})(classnames);
Object.defineProperty(cssClasses, "__esModule", {
  value: true
});
cssClasses.default = void 0;
var _classnames = _interopRequireDefault$4(classnamesExports);
function _interopRequireDefault$4(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _defineProperty$3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var _default$3 = {
  ROOT: function ROOT(customClassName) {
    return (0, _classnames.default)(_defineProperty$3({
      "carousel-root": true
    }, customClassName || "", !!customClassName));
  },
  CAROUSEL: function CAROUSEL(isSlider) {
    return (0, _classnames.default)({
      carousel: true,
      "carousel-slider": isSlider
    });
  },
  WRAPPER: function WRAPPER(isSlider, axis) {
    return (0, _classnames.default)({
      "thumbs-wrapper": !isSlider,
      "slider-wrapper": isSlider,
      "axis-horizontal": axis === "horizontal",
      "axis-vertical": axis !== "horizontal"
    });
  },
  SLIDER: function SLIDER(isSlider, isSwiping) {
    return (0, _classnames.default)({
      thumbs: !isSlider,
      slider: isSlider,
      animated: !isSwiping
    });
  },
  ITEM: function ITEM(isSlider, selected, previous) {
    return (0, _classnames.default)({
      thumb: !isSlider,
      slide: isSlider,
      selected,
      previous
    });
  },
  ARROW_PREV: function ARROW_PREV(disabled) {
    return (0, _classnames.default)({
      "control-arrow control-prev": true,
      "control-disabled": disabled
    });
  },
  ARROW_NEXT: function ARROW_NEXT(disabled) {
    return (0, _classnames.default)({
      "control-arrow control-next": true,
      "control-disabled": disabled
    });
  },
  DOT: function DOT(selected) {
    return (0, _classnames.default)({
      dot: true,
      selected
    });
  }
};
cssClasses.default = _default$3;
var Thumbs$1 = {};
var dimensions = {};
Object.defineProperty(dimensions, "__esModule", {
  value: true
});
dimensions.outerWidth = void 0;
var outerWidth = function outerWidth2(el2) {
  var width = el2.offsetWidth;
  var style = getComputedStyle(el2);
  width += parseInt(style.marginLeft) + parseInt(style.marginRight);
  return width;
};
dimensions.outerWidth = outerWidth;
var CSSTranslate = {};
Object.defineProperty(CSSTranslate, "__esModule", {
  value: true
});
CSSTranslate.default = void 0;
var _default$2 = function _default(position, metric, axis) {
  var positionPercent = position === 0 ? position : position + metric;
  var positionCss = axis === "horizontal" ? [positionPercent, 0, 0] : [0, positionPercent, 0];
  var transitionProp = "translate3d";
  var translatedPosition = "(" + positionCss.join(",") + ")";
  return transitionProp + translatedPosition;
};
CSSTranslate.default = _default$2;
var window$1 = {};
Object.defineProperty(window$1, "__esModule", {
  value: true
});
window$1.default = void 0;
var _default$1 = function _default2() {
  return window;
};
window$1.default = _default$1;
Object.defineProperty(Thumbs$1, "__esModule", {
  value: true
});
Thumbs$1.default = void 0;
var _react$3 = _interopRequireWildcard$1(reactExports);
var _cssClasses$1 = _interopRequireDefault$3(cssClasses);
var _dimensions = dimensions;
var _CSSTranslate$2 = _interopRequireDefault$3(CSSTranslate);
var _reactEasySwipe$1 = _interopRequireDefault$3(lib);
var _window$1 = _interopRequireDefault$3(window$1);
function _interopRequireDefault$3(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _getRequireWildcardCache$1() {
  if (typeof WeakMap !== "function")
    return null;
  var cache = /* @__PURE__ */ new WeakMap();
  _getRequireWildcardCache$1 = function _getRequireWildcardCache2() {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard$1(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof$1(obj) !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache$1();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _typeof$1(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$1 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$1(obj);
}
function _extends$1() {
  _extends$1 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$1(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$1(Constructor, staticProps);
  return Constructor;
}
function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf$1(subClass, superClass);
}
function _setPrototypeOf$1(o3, p2) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf2(o4, p3) {
    o4.__proto__ = p3;
    return o4;
  };
  return _setPrototypeOf$1(o3, p2);
}
function _createSuper$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$1(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$1(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$1(this, result);
  };
}
function _possibleConstructorReturn$1(self2, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$1(self2);
}
function _assertThisInitialized$1(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf$1(o3) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o4) {
    return o4.__proto__ || Object.getPrototypeOf(o4);
  };
  return _getPrototypeOf$1(o3);
}
function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var isKeyboardEvent$1 = function isKeyboardEvent(e2) {
  return e2.hasOwnProperty("key");
};
var Thumbs = /* @__PURE__ */ function(_Component) {
  _inherits$1(Thumbs2, _Component);
  var _super = _createSuper$1(Thumbs2);
  function Thumbs2(_props) {
    var _this;
    _classCallCheck$1(this, Thumbs2);
    _this = _super.call(this, _props);
    _defineProperty$2(_assertThisInitialized$1(_this), "itemsWrapperRef", void 0);
    _defineProperty$2(_assertThisInitialized$1(_this), "itemsListRef", void 0);
    _defineProperty$2(_assertThisInitialized$1(_this), "thumbsRef", void 0);
    _defineProperty$2(_assertThisInitialized$1(_this), "setItemsWrapperRef", function(node) {
      _this.itemsWrapperRef = node;
    });
    _defineProperty$2(_assertThisInitialized$1(_this), "setItemsListRef", function(node) {
      _this.itemsListRef = node;
    });
    _defineProperty$2(_assertThisInitialized$1(_this), "setThumbsRef", function(node, index2) {
      if (!_this.thumbsRef) {
        _this.thumbsRef = [];
      }
      _this.thumbsRef[index2] = node;
    });
    _defineProperty$2(_assertThisInitialized$1(_this), "updateSizes", function() {
      if (!_this.props.children || !_this.itemsWrapperRef || !_this.thumbsRef) {
        return;
      }
      var total = _react$3.Children.count(_this.props.children);
      var wrapperSize = _this.itemsWrapperRef.clientWidth;
      var itemSize = _this.props.thumbWidth ? _this.props.thumbWidth : (0, _dimensions.outerWidth)(_this.thumbsRef[0]);
      var visibleItems = Math.floor(wrapperSize / itemSize);
      var showArrows = visibleItems < total;
      var lastPosition = showArrows ? total - visibleItems : 0;
      _this.setState(function(_state, props) {
        return {
          itemSize,
          visibleItems,
          firstItem: showArrows ? _this.getFirstItem(props.selectedItem) : 0,
          lastPosition,
          showArrows
        };
      });
    });
    _defineProperty$2(_assertThisInitialized$1(_this), "handleClickItem", function(index2, item, e2) {
      if (!isKeyboardEvent$1(e2) || e2.key === "Enter") {
        var handler = _this.props.onSelectItem;
        if (typeof handler === "function") {
          handler(index2, item);
        }
      }
    });
    _defineProperty$2(_assertThisInitialized$1(_this), "onSwipeStart", function() {
      _this.setState({
        swiping: true
      });
    });
    _defineProperty$2(_assertThisInitialized$1(_this), "onSwipeEnd", function() {
      _this.setState({
        swiping: false
      });
    });
    _defineProperty$2(_assertThisInitialized$1(_this), "onSwipeMove", function(delta) {
      var deltaX = delta.x;
      if (!_this.state.itemSize || !_this.itemsWrapperRef || !_this.state.visibleItems) {
        return false;
      }
      var leftBoundary = 0;
      var childrenLength = _react$3.Children.count(_this.props.children);
      var currentPosition = -(_this.state.firstItem * 100) / _this.state.visibleItems;
      var lastLeftItem = Math.max(childrenLength - _this.state.visibleItems, 0);
      var lastLeftBoundary = -lastLeftItem * 100 / _this.state.visibleItems;
      if (currentPosition === leftBoundary && deltaX > 0) {
        deltaX = 0;
      }
      if (currentPosition === lastLeftBoundary && deltaX < 0) {
        deltaX = 0;
      }
      var wrapperSize = _this.itemsWrapperRef.clientWidth;
      var position = currentPosition + 100 / (wrapperSize / deltaX);
      if (_this.itemsListRef) {
        ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach(function(prop) {
          _this.itemsListRef.style[prop] = (0, _CSSTranslate$2.default)(position, "%", _this.props.axis);
        });
      }
      return true;
    });
    _defineProperty$2(_assertThisInitialized$1(_this), "slideRight", function(positions) {
      _this.moveTo(_this.state.firstItem - (typeof positions === "number" ? positions : 1));
    });
    _defineProperty$2(_assertThisInitialized$1(_this), "slideLeft", function(positions) {
      _this.moveTo(_this.state.firstItem + (typeof positions === "number" ? positions : 1));
    });
    _defineProperty$2(_assertThisInitialized$1(_this), "moveTo", function(position) {
      position = position < 0 ? 0 : position;
      position = position >= _this.state.lastPosition ? _this.state.lastPosition : position;
      _this.setState({
        firstItem: position
      });
    });
    _this.state = {
      selectedItem: _props.selectedItem,
      swiping: false,
      showArrows: false,
      firstItem: 0,
      visibleItems: 0,
      lastPosition: 0
    };
    return _this;
  }
  _createClass$1(Thumbs2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setupThumbs();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.selectedItem !== this.state.selectedItem) {
        this.setState({
          selectedItem: this.props.selectedItem,
          firstItem: this.getFirstItem(this.props.selectedItem)
        });
      }
      if (this.props.children === prevProps.children) {
        return;
      }
      this.updateSizes();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyThumbs();
    }
  }, {
    key: "setupThumbs",
    value: function setupThumbs() {
      (0, _window$1.default)().addEventListener("resize", this.updateSizes);
      (0, _window$1.default)().addEventListener("DOMContentLoaded", this.updateSizes);
      this.updateSizes();
    }
  }, {
    key: "destroyThumbs",
    value: function destroyThumbs() {
      (0, _window$1.default)().removeEventListener("resize", this.updateSizes);
      (0, _window$1.default)().removeEventListener("DOMContentLoaded", this.updateSizes);
    }
  }, {
    key: "getFirstItem",
    value: function getFirstItem(selectedItem) {
      var firstItem = selectedItem;
      if (selectedItem >= this.state.lastPosition) {
        firstItem = this.state.lastPosition;
      }
      if (selectedItem < this.state.firstItem + this.state.visibleItems) {
        firstItem = this.state.firstItem;
      }
      if (selectedItem < this.state.firstItem) {
        firstItem = selectedItem;
      }
      return firstItem;
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this2 = this;
      return this.props.children.map(function(img, index2) {
        var itemClass = _cssClasses$1.default.ITEM(false, index2 === _this2.state.selectedItem);
        var thumbProps = {
          key: index2,
          ref: function ref(e2) {
            return _this2.setThumbsRef(e2, index2);
          },
          className: itemClass,
          onClick: _this2.handleClickItem.bind(_this2, index2, _this2.props.children[index2]),
          onKeyDown: _this2.handleClickItem.bind(_this2, index2, _this2.props.children[index2]),
          "aria-label": "".concat(_this2.props.labels.item, " ").concat(index2 + 1),
          style: {
            width: _this2.props.thumbWidth
          }
        };
        return /* @__PURE__ */ _react$3.default.createElement("li", _extends$1({}, thumbProps, {
          role: "button",
          tabIndex: 0
        }), img);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      if (!this.props.children) {
        return null;
      }
      var isSwipeable = _react$3.Children.count(this.props.children) > 1;
      var hasPrev = this.state.showArrows && this.state.firstItem > 0;
      var hasNext = this.state.showArrows && this.state.firstItem < this.state.lastPosition;
      var itemListStyles = {};
      var currentPosition = -this.state.firstItem * (this.state.itemSize || 0);
      var transformProp = (0, _CSSTranslate$2.default)(currentPosition, "px", this.props.axis);
      var transitionTime = this.props.transitionTime + "ms";
      itemListStyles = {
        WebkitTransform: transformProp,
        MozTransform: transformProp,
        MsTransform: transformProp,
        OTransform: transformProp,
        transform: transformProp,
        msTransform: transformProp,
        WebkitTransitionDuration: transitionTime,
        MozTransitionDuration: transitionTime,
        MsTransitionDuration: transitionTime,
        OTransitionDuration: transitionTime,
        transitionDuration: transitionTime,
        msTransitionDuration: transitionTime
      };
      return /* @__PURE__ */ _react$3.default.createElement("div", {
        className: _cssClasses$1.default.CAROUSEL(false)
      }, /* @__PURE__ */ _react$3.default.createElement("div", {
        className: _cssClasses$1.default.WRAPPER(false),
        ref: this.setItemsWrapperRef
      }, /* @__PURE__ */ _react$3.default.createElement("button", {
        type: "button",
        className: _cssClasses$1.default.ARROW_PREV(!hasPrev),
        onClick: function onClick() {
          return _this3.slideRight();
        },
        "aria-label": this.props.labels.leftArrow
      }), isSwipeable ? /* @__PURE__ */ _react$3.default.createElement(_reactEasySwipe$1.default, {
        tagName: "ul",
        className: _cssClasses$1.default.SLIDER(false, this.state.swiping),
        onSwipeLeft: this.slideLeft,
        onSwipeRight: this.slideRight,
        onSwipeMove: this.onSwipeMove,
        onSwipeStart: this.onSwipeStart,
        onSwipeEnd: this.onSwipeEnd,
        style: itemListStyles,
        innerRef: this.setItemsListRef,
        allowMouseEvents: this.props.emulateTouch
      }, this.renderItems()) : /* @__PURE__ */ _react$3.default.createElement("ul", {
        className: _cssClasses$1.default.SLIDER(false, this.state.swiping),
        ref: function ref(node) {
          return _this3.setItemsListRef(node);
        },
        style: itemListStyles
      }, this.renderItems()), /* @__PURE__ */ _react$3.default.createElement("button", {
        type: "button",
        className: _cssClasses$1.default.ARROW_NEXT(!hasNext),
        onClick: function onClick() {
          return _this3.slideLeft();
        },
        "aria-label": this.props.labels.rightArrow
      })));
    }
  }]);
  return Thumbs2;
}(_react$3.Component);
Thumbs$1.default = Thumbs;
_defineProperty$2(Thumbs, "displayName", "Thumbs");
_defineProperty$2(Thumbs, "defaultProps", {
  axis: "horizontal",
  labels: {
    leftArrow: "previous slide / item",
    rightArrow: "next slide / item",
    item: "slide item"
  },
  selectedItem: 0,
  thumbWidth: 80,
  transitionTime: 350
});
var document$1 = {};
Object.defineProperty(document$1, "__esModule", {
  value: true
});
document$1.default = void 0;
var _default3 = function _default4() {
  return document;
};
document$1.default = _default3;
var utils = {};
Object.defineProperty(utils, "__esModule", {
  value: true
});
utils.setPosition = utils.getPosition = utils.isKeyboardEvent = utils.defaultStatusFormatter = utils.noop = void 0;
var _react$2 = reactExports;
var _CSSTranslate$1 = _interopRequireDefault$2(CSSTranslate);
function _interopRequireDefault$2(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var noop = function noop2() {
};
utils.noop = noop;
var defaultStatusFormatter = function defaultStatusFormatter2(current, total) {
  return "".concat(current, " of ").concat(total);
};
utils.defaultStatusFormatter = defaultStatusFormatter;
var isKeyboardEvent2 = function isKeyboardEvent3(e2) {
  return e2 ? e2.hasOwnProperty("key") : false;
};
utils.isKeyboardEvent = isKeyboardEvent2;
var getPosition = function getPosition2(index2, props) {
  if (props.infiniteLoop) {
    ++index2;
  }
  if (index2 === 0) {
    return 0;
  }
  var childrenLength = _react$2.Children.count(props.children);
  if (props.centerMode && props.axis === "horizontal") {
    var currentPosition = -index2 * props.centerSlidePercentage;
    var lastPosition = childrenLength - 1;
    if (index2 && (index2 !== lastPosition || props.infiniteLoop)) {
      currentPosition += (100 - props.centerSlidePercentage) / 2;
    } else if (index2 === lastPosition) {
      currentPosition += 100 - props.centerSlidePercentage;
    }
    return currentPosition;
  }
  return -index2 * 100;
};
utils.getPosition = getPosition;
var setPosition = function setPosition2(position, axis) {
  var style = {};
  ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach(function(prop) {
    style[prop] = (0, _CSSTranslate$1.default)(position, "%", axis);
  });
  return style;
};
utils.setPosition = setPosition;
var animations = {};
Object.defineProperty(animations, "__esModule", {
  value: true
});
animations.fadeAnimationHandler = animations.slideStopSwipingHandler = animations.slideSwipeAnimationHandler = animations.slideAnimationHandler = void 0;
var _react$1 = reactExports;
var _CSSTranslate = _interopRequireDefault$1(CSSTranslate);
var _utils$1 = utils;
function _interopRequireDefault$1(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$1(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    if (i2 % 2) {
      ownKeys$1(Object(source), true).forEach(function(key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var slideAnimationHandler = function slideAnimationHandler2(props, state) {
  var returnStyles = {};
  var selectedItem = state.selectedItem;
  var previousItem = selectedItem;
  var lastPosition = _react$1.Children.count(props.children) - 1;
  var needClonedSlide = props.infiniteLoop && (selectedItem < 0 || selectedItem > lastPosition);
  if (needClonedSlide) {
    if (previousItem < 0) {
      if (props.centerMode && props.centerSlidePercentage && props.axis === "horizontal") {
        returnStyles.itemListStyle = (0, _utils$1.setPosition)(-(lastPosition + 2) * props.centerSlidePercentage - (100 - props.centerSlidePercentage) / 2, props.axis);
      } else {
        returnStyles.itemListStyle = (0, _utils$1.setPosition)(-(lastPosition + 2) * 100, props.axis);
      }
    } else if (previousItem > lastPosition) {
      returnStyles.itemListStyle = (0, _utils$1.setPosition)(0, props.axis);
    }
    return returnStyles;
  }
  var currentPosition = (0, _utils$1.getPosition)(selectedItem, props);
  var transformProp = (0, _CSSTranslate.default)(currentPosition, "%", props.axis);
  var transitionTime = props.transitionTime + "ms";
  returnStyles.itemListStyle = {
    WebkitTransform: transformProp,
    msTransform: transformProp,
    OTransform: transformProp,
    transform: transformProp
  };
  if (!state.swiping) {
    returnStyles.itemListStyle = _objectSpread$1(_objectSpread$1({}, returnStyles.itemListStyle), {}, {
      WebkitTransitionDuration: transitionTime,
      MozTransitionDuration: transitionTime,
      OTransitionDuration: transitionTime,
      transitionDuration: transitionTime,
      msTransitionDuration: transitionTime
    });
  }
  return returnStyles;
};
animations.slideAnimationHandler = slideAnimationHandler;
var slideSwipeAnimationHandler = function slideSwipeAnimationHandler2(delta, props, state, setState) {
  var returnStyles = {};
  var isHorizontal = props.axis === "horizontal";
  var childrenLength = _react$1.Children.count(props.children);
  var initialBoundry = 0;
  var currentPosition = (0, _utils$1.getPosition)(state.selectedItem, props);
  var finalBoundry = props.infiniteLoop ? (0, _utils$1.getPosition)(childrenLength - 1, props) - 100 : (0, _utils$1.getPosition)(childrenLength - 1, props);
  var axisDelta = isHorizontal ? delta.x : delta.y;
  var handledDelta = axisDelta;
  if (currentPosition === initialBoundry && axisDelta > 0) {
    handledDelta = 0;
  }
  if (currentPosition === finalBoundry && axisDelta < 0) {
    handledDelta = 0;
  }
  var position = currentPosition + 100 / (state.itemSize / handledDelta);
  var hasMoved = Math.abs(axisDelta) > props.swipeScrollTolerance;
  if (props.infiniteLoop && hasMoved) {
    if (state.selectedItem === 0 && position > -100) {
      position -= childrenLength * 100;
    } else if (state.selectedItem === childrenLength - 1 && position < -childrenLength * 100) {
      position += childrenLength * 100;
    }
  }
  if (!props.preventMovementUntilSwipeScrollTolerance || hasMoved || state.swipeMovementStarted) {
    if (!state.swipeMovementStarted) {
      setState({
        swipeMovementStarted: true
      });
    }
    returnStyles.itemListStyle = (0, _utils$1.setPosition)(position, props.axis);
  }
  if (hasMoved && !state.cancelClick) {
    setState({
      cancelClick: true
    });
  }
  return returnStyles;
};
animations.slideSwipeAnimationHandler = slideSwipeAnimationHandler;
var slideStopSwipingHandler = function slideStopSwipingHandler2(props, state) {
  var currentPosition = (0, _utils$1.getPosition)(state.selectedItem, props);
  var itemListStyle = (0, _utils$1.setPosition)(currentPosition, props.axis);
  return {
    itemListStyle
  };
};
animations.slideStopSwipingHandler = slideStopSwipingHandler;
var fadeAnimationHandler = function fadeAnimationHandler2(props, state) {
  var transitionTime = props.transitionTime + "ms";
  var transitionTimingFunction = "ease-in-out";
  var slideStyle = {
    position: "absolute",
    display: "block",
    zIndex: -2,
    minHeight: "100%",
    opacity: 0,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    transitionTimingFunction,
    msTransitionTimingFunction: transitionTimingFunction,
    MozTransitionTimingFunction: transitionTimingFunction,
    WebkitTransitionTimingFunction: transitionTimingFunction,
    OTransitionTimingFunction: transitionTimingFunction
  };
  if (!state.swiping) {
    slideStyle = _objectSpread$1(_objectSpread$1({}, slideStyle), {}, {
      WebkitTransitionDuration: transitionTime,
      MozTransitionDuration: transitionTime,
      OTransitionDuration: transitionTime,
      transitionDuration: transitionTime,
      msTransitionDuration: transitionTime
    });
  }
  return {
    slideStyle,
    selectedStyle: _objectSpread$1(_objectSpread$1({}, slideStyle), {}, {
      opacity: 1,
      position: "relative"
    }),
    prevStyle: _objectSpread$1({}, slideStyle)
  };
};
animations.fadeAnimationHandler = fadeAnimationHandler;
Object.defineProperty(Carousel$1, "__esModule", {
  value: true
});
Carousel$1.default = void 0;
var _react = _interopRequireWildcard(reactExports);
var _reactEasySwipe = _interopRequireDefault(lib);
var _cssClasses = _interopRequireDefault(cssClasses);
var _Thumbs = _interopRequireDefault(Thumbs$1);
var _document = _interopRequireDefault(document$1);
var _window = _interopRequireDefault(window$1);
var _utils = utils;
var _animations = animations;
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function")
    return null;
  var cache = /* @__PURE__ */ new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache2() {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    if (i2 % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o3, p2) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o4, p3) {
    o4.__proto__ = p3;
    return o4;
  };
  return _setPrototypeOf(o3, p2);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self2, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self2);
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf(o3) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o4) {
    return o4.__proto__ || Object.getPrototypeOf(o4);
  };
  return _getPrototypeOf(o3);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var Carousel = /* @__PURE__ */ function(_React$Component) {
  _inherits(Carousel2, _React$Component);
  var _super = _createSuper(Carousel2);
  function Carousel2(props) {
    var _this;
    _classCallCheck(this, Carousel2);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "thumbsRef", void 0);
    _defineProperty(_assertThisInitialized(_this), "carouselWrapperRef", void 0);
    _defineProperty(_assertThisInitialized(_this), "listRef", void 0);
    _defineProperty(_assertThisInitialized(_this), "itemsRef", void 0);
    _defineProperty(_assertThisInitialized(_this), "timer", void 0);
    _defineProperty(_assertThisInitialized(_this), "animationHandler", void 0);
    _defineProperty(_assertThisInitialized(_this), "setThumbsRef", function(node) {
      _this.thumbsRef = node;
    });
    _defineProperty(_assertThisInitialized(_this), "setCarouselWrapperRef", function(node) {
      _this.carouselWrapperRef = node;
    });
    _defineProperty(_assertThisInitialized(_this), "setListRef", function(node) {
      _this.listRef = node;
    });
    _defineProperty(_assertThisInitialized(_this), "setItemsRef", function(node, index2) {
      if (!_this.itemsRef) {
        _this.itemsRef = [];
      }
      _this.itemsRef[index2] = node;
    });
    _defineProperty(_assertThisInitialized(_this), "autoPlay", function() {
      if (_react.Children.count(_this.props.children) <= 1) {
        return;
      }
      _this.clearAutoPlay();
      if (!_this.props.autoPlay) {
        return;
      }
      _this.timer = setTimeout(function() {
        _this.increment();
      }, _this.props.interval);
    });
    _defineProperty(_assertThisInitialized(_this), "clearAutoPlay", function() {
      if (_this.timer)
        clearTimeout(_this.timer);
    });
    _defineProperty(_assertThisInitialized(_this), "resetAutoPlay", function() {
      _this.clearAutoPlay();
      _this.autoPlay();
    });
    _defineProperty(_assertThisInitialized(_this), "stopOnHover", function() {
      _this.setState({
        isMouseEntered: true
      }, _this.clearAutoPlay);
    });
    _defineProperty(_assertThisInitialized(_this), "startOnLeave", function() {
      _this.setState({
        isMouseEntered: false
      }, _this.autoPlay);
    });
    _defineProperty(_assertThisInitialized(_this), "isFocusWithinTheCarousel", function() {
      if (!_this.carouselWrapperRef) {
        return false;
      }
      if ((0, _document.default)().activeElement === _this.carouselWrapperRef || _this.carouselWrapperRef.contains((0, _document.default)().activeElement)) {
        return true;
      }
      return false;
    });
    _defineProperty(_assertThisInitialized(_this), "navigateWithKeyboard", function(e2) {
      if (!_this.isFocusWithinTheCarousel()) {
        return;
      }
      var axis = _this.props.axis;
      var isHorizontal = axis === "horizontal";
      var keyNames = {
        ArrowUp: 38,
        ArrowRight: 39,
        ArrowDown: 40,
        ArrowLeft: 37
      };
      var nextKey = isHorizontal ? keyNames.ArrowRight : keyNames.ArrowDown;
      var prevKey = isHorizontal ? keyNames.ArrowLeft : keyNames.ArrowUp;
      if (nextKey === e2.keyCode) {
        _this.increment();
      } else if (prevKey === e2.keyCode) {
        _this.decrement();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "updateSizes", function() {
      if (!_this.state.initialized || !_this.itemsRef || _this.itemsRef.length === 0) {
        return;
      }
      var isHorizontal = _this.props.axis === "horizontal";
      var firstItem = _this.itemsRef[0];
      if (!firstItem) {
        return;
      }
      var itemSize = isHorizontal ? firstItem.clientWidth : firstItem.clientHeight;
      _this.setState({
        itemSize
      });
      if (_this.thumbsRef) {
        _this.thumbsRef.updateSizes();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "setMountState", function() {
      _this.setState({
        hasMount: true
      });
      _this.updateSizes();
    });
    _defineProperty(_assertThisInitialized(_this), "handleClickItem", function(index2, item) {
      if (_react.Children.count(_this.props.children) === 0) {
        return;
      }
      if (_this.state.cancelClick) {
        _this.setState({
          cancelClick: false
        });
        return;
      }
      _this.props.onClickItem(index2, item);
      if (index2 !== _this.state.selectedItem) {
        _this.setState({
          selectedItem: index2
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleOnChange", function(index2, item) {
      if (_react.Children.count(_this.props.children) <= 1) {
        return;
      }
      _this.props.onChange(index2, item);
    });
    _defineProperty(_assertThisInitialized(_this), "handleClickThumb", function(index2, item) {
      _this.props.onClickThumb(index2, item);
      _this.moveTo(index2);
    });
    _defineProperty(_assertThisInitialized(_this), "onSwipeStart", function(event) {
      _this.setState({
        swiping: true
      });
      _this.props.onSwipeStart(event);
    });
    _defineProperty(_assertThisInitialized(_this), "onSwipeEnd", function(event) {
      _this.setState({
        swiping: false,
        cancelClick: false,
        swipeMovementStarted: false
      });
      _this.props.onSwipeEnd(event);
      _this.clearAutoPlay();
      if (_this.state.autoPlay) {
        _this.autoPlay();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onSwipeMove", function(delta, event) {
      _this.props.onSwipeMove(event);
      var animationHandlerResponse = _this.props.swipeAnimationHandler(delta, _this.props, _this.state, _this.setState.bind(_assertThisInitialized(_this)));
      _this.setState(_objectSpread({}, animationHandlerResponse));
      return !!Object.keys(animationHandlerResponse).length;
    });
    _defineProperty(_assertThisInitialized(_this), "decrement", function() {
      var positions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
      _this.moveTo(_this.state.selectedItem - (typeof positions === "number" ? positions : 1));
    });
    _defineProperty(_assertThisInitialized(_this), "increment", function() {
      var positions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
      _this.moveTo(_this.state.selectedItem + (typeof positions === "number" ? positions : 1));
    });
    _defineProperty(_assertThisInitialized(_this), "moveTo", function(position) {
      if (typeof position !== "number") {
        return;
      }
      var lastPosition = _react.Children.count(_this.props.children) - 1;
      if (position < 0) {
        position = _this.props.infiniteLoop ? lastPosition : 0;
      }
      if (position > lastPosition) {
        position = _this.props.infiniteLoop ? 0 : lastPosition;
      }
      _this.selectItem({
        // if it's not a slider, we don't need to set position here
        selectedItem: position
      });
      if (_this.state.autoPlay && _this.state.isMouseEntered === false) {
        _this.resetAutoPlay();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onClickNext", function() {
      _this.increment(1);
    });
    _defineProperty(_assertThisInitialized(_this), "onClickPrev", function() {
      _this.decrement(1);
    });
    _defineProperty(_assertThisInitialized(_this), "onSwipeForward", function() {
      _this.increment(1);
      if (_this.props.emulateTouch) {
        _this.setState({
          cancelClick: true
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onSwipeBackwards", function() {
      _this.decrement(1);
      if (_this.props.emulateTouch) {
        _this.setState({
          cancelClick: true
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this), "changeItem", function(newIndex) {
      return function(e2) {
        if (!(0, _utils.isKeyboardEvent)(e2) || e2.key === "Enter") {
          _this.moveTo(newIndex);
        }
      };
    });
    _defineProperty(_assertThisInitialized(_this), "selectItem", function(state) {
      _this.setState(_objectSpread({
        previousItem: _this.state.selectedItem
      }, state), function() {
        _this.setState(_this.animationHandler(_this.props, _this.state));
      });
      _this.handleOnChange(state.selectedItem, _react.Children.toArray(_this.props.children)[state.selectedItem]);
    });
    _defineProperty(_assertThisInitialized(_this), "getInitialImage", function() {
      var selectedItem = _this.props.selectedItem;
      var item = _this.itemsRef && _this.itemsRef[selectedItem];
      var images = item && item.getElementsByTagName("img") || [];
      return images[0];
    });
    _defineProperty(_assertThisInitialized(_this), "getVariableItemHeight", function(position) {
      var item = _this.itemsRef && _this.itemsRef[position];
      if (_this.state.hasMount && item && item.children.length) {
        var slideImages = item.children[0].getElementsByTagName("img") || [];
        if (slideImages.length > 0) {
          var image = slideImages[0];
          if (!image.complete) {
            var onImageLoad = function onImageLoad2() {
              _this.forceUpdate();
              image.removeEventListener("load", onImageLoad2);
            };
            image.addEventListener("load", onImageLoad);
          }
        }
        var displayItem = slideImages[0] || item.children[0];
        var height = displayItem.clientHeight;
        return height > 0 ? height : null;
      }
      return null;
    });
    var initState = {
      initialized: false,
      previousItem: props.selectedItem,
      selectedItem: props.selectedItem,
      hasMount: false,
      isMouseEntered: false,
      autoPlay: props.autoPlay,
      swiping: false,
      swipeMovementStarted: false,
      cancelClick: false,
      itemSize: 1,
      itemListStyle: {},
      slideStyle: {},
      selectedStyle: {},
      prevStyle: {}
    };
    _this.animationHandler = typeof props.animationHandler === "function" && props.animationHandler || props.animationHandler === "fade" && _animations.fadeAnimationHandler || _animations.slideAnimationHandler;
    _this.state = _objectSpread(_objectSpread({}, initState), _this.animationHandler(props, initState));
    return _this;
  }
  _createClass(Carousel2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.children) {
        return;
      }
      this.setupCarousel();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (!prevProps.children && this.props.children && !this.state.initialized) {
        this.setupCarousel();
      }
      if (!prevProps.autoFocus && this.props.autoFocus) {
        this.forceFocus();
      }
      if (prevState.swiping && !this.state.swiping) {
        this.setState(_objectSpread({}, this.props.stopSwipingHandler(this.props, this.state)));
      }
      if (prevProps.selectedItem !== this.props.selectedItem || prevProps.centerMode !== this.props.centerMode) {
        this.updateSizes();
        this.moveTo(this.props.selectedItem);
      }
      if (prevProps.autoPlay !== this.props.autoPlay) {
        if (this.props.autoPlay) {
          this.setupAutoPlay();
        } else {
          this.destroyAutoPlay();
        }
        this.setState({
          autoPlay: this.props.autoPlay
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyCarousel();
    }
  }, {
    key: "setupCarousel",
    value: function setupCarousel() {
      var _this2 = this;
      this.bindEvents();
      if (this.state.autoPlay && _react.Children.count(this.props.children) > 1) {
        this.setupAutoPlay();
      }
      if (this.props.autoFocus) {
        this.forceFocus();
      }
      this.setState({
        initialized: true
      }, function() {
        var initialImage = _this2.getInitialImage();
        if (initialImage && !initialImage.complete) {
          initialImage.addEventListener("load", _this2.setMountState);
        } else {
          _this2.setMountState();
        }
      });
    }
  }, {
    key: "destroyCarousel",
    value: function destroyCarousel() {
      if (this.state.initialized) {
        this.unbindEvents();
        this.destroyAutoPlay();
      }
    }
  }, {
    key: "setupAutoPlay",
    value: function setupAutoPlay() {
      this.autoPlay();
      var carouselWrapper = this.carouselWrapperRef;
      if (this.props.stopOnHover && carouselWrapper) {
        carouselWrapper.addEventListener("mouseenter", this.stopOnHover);
        carouselWrapper.addEventListener("mouseleave", this.startOnLeave);
      }
    }
  }, {
    key: "destroyAutoPlay",
    value: function destroyAutoPlay() {
      this.clearAutoPlay();
      var carouselWrapper = this.carouselWrapperRef;
      if (this.props.stopOnHover && carouselWrapper) {
        carouselWrapper.removeEventListener("mouseenter", this.stopOnHover);
        carouselWrapper.removeEventListener("mouseleave", this.startOnLeave);
      }
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      (0, _window.default)().addEventListener("resize", this.updateSizes);
      (0, _window.default)().addEventListener("DOMContentLoaded", this.updateSizes);
      if (this.props.useKeyboardArrows) {
        (0, _document.default)().addEventListener("keydown", this.navigateWithKeyboard);
      }
    }
  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      (0, _window.default)().removeEventListener("resize", this.updateSizes);
      (0, _window.default)().removeEventListener("DOMContentLoaded", this.updateSizes);
      var initialImage = this.getInitialImage();
      if (initialImage) {
        initialImage.removeEventListener("load", this.setMountState);
      }
      if (this.props.useKeyboardArrows) {
        (0, _document.default)().removeEventListener("keydown", this.navigateWithKeyboard);
      }
    }
  }, {
    key: "forceFocus",
    value: function forceFocus() {
      var _this$carouselWrapper;
      (_this$carouselWrapper = this.carouselWrapperRef) === null || _this$carouselWrapper === void 0 ? void 0 : _this$carouselWrapper.focus();
    }
  }, {
    key: "renderItems",
    value: function renderItems(isClone) {
      var _this3 = this;
      if (!this.props.children) {
        return [];
      }
      return _react.Children.map(this.props.children, function(item, index2) {
        var isSelected = index2 === _this3.state.selectedItem;
        var isPrevious = index2 === _this3.state.previousItem;
        var style = isSelected && _this3.state.selectedStyle || isPrevious && _this3.state.prevStyle || _this3.state.slideStyle || {};
        if (_this3.props.centerMode && _this3.props.axis === "horizontal") {
          style = _objectSpread(_objectSpread({}, style), {}, {
            minWidth: _this3.props.centerSlidePercentage + "%"
          });
        }
        if (_this3.state.swiping && _this3.state.swipeMovementStarted) {
          style = _objectSpread(_objectSpread({}, style), {}, {
            pointerEvents: "none"
          });
        }
        var slideProps = {
          ref: function ref(e2) {
            return _this3.setItemsRef(e2, index2);
          },
          key: "itemKey" + index2 + (isClone ? "clone" : ""),
          className: _cssClasses.default.ITEM(true, index2 === _this3.state.selectedItem, index2 === _this3.state.previousItem),
          onClick: _this3.handleClickItem.bind(_this3, index2, item),
          style
        };
        return /* @__PURE__ */ _react.default.createElement("li", slideProps, _this3.props.renderItem(item, {
          isSelected: index2 === _this3.state.selectedItem,
          isPrevious: index2 === _this3.state.previousItem
        }));
      });
    }
  }, {
    key: "renderControls",
    value: function renderControls() {
      var _this4 = this;
      var _this$props = this.props, showIndicators = _this$props.showIndicators, labels = _this$props.labels, renderIndicator2 = _this$props.renderIndicator, children = _this$props.children;
      if (!showIndicators) {
        return null;
      }
      return /* @__PURE__ */ _react.default.createElement("ul", {
        className: "control-dots"
      }, _react.Children.map(children, function(_2, index2) {
        return renderIndicator2 && renderIndicator2(_this4.changeItem(index2), index2 === _this4.state.selectedItem, index2, labels.item);
      }));
    }
  }, {
    key: "renderStatus",
    value: function renderStatus() {
      if (!this.props.showStatus) {
        return null;
      }
      return /* @__PURE__ */ _react.default.createElement("p", {
        className: "carousel-status"
      }, this.props.statusFormatter(this.state.selectedItem + 1, _react.Children.count(this.props.children)));
    }
  }, {
    key: "renderThumbs",
    value: function renderThumbs2() {
      if (!this.props.showThumbs || !this.props.children || _react.Children.count(this.props.children) === 0) {
        return null;
      }
      return /* @__PURE__ */ _react.default.createElement(_Thumbs.default, {
        ref: this.setThumbsRef,
        onSelectItem: this.handleClickThumb,
        selectedItem: this.state.selectedItem,
        transitionTime: this.props.transitionTime,
        thumbWidth: this.props.thumbWidth,
        labels: this.props.labels,
        emulateTouch: this.props.emulateTouch
      }, this.props.renderThumbs(this.props.children));
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;
      if (!this.props.children || _react.Children.count(this.props.children) === 0) {
        return null;
      }
      var isSwipeable = this.props.swipeable && _react.Children.count(this.props.children) > 1;
      var isHorizontal = this.props.axis === "horizontal";
      var canShowArrows = this.props.showArrows && _react.Children.count(this.props.children) > 1;
      var hasPrev = canShowArrows && (this.state.selectedItem > 0 || this.props.infiniteLoop) || false;
      var hasNext = canShowArrows && (this.state.selectedItem < _react.Children.count(this.props.children) - 1 || this.props.infiniteLoop) || false;
      var itemsClone = this.renderItems(true);
      var firstClone = itemsClone.shift();
      var lastClone = itemsClone.pop();
      var swiperProps = {
        className: _cssClasses.default.SLIDER(true, this.state.swiping),
        onSwipeMove: this.onSwipeMove,
        onSwipeStart: this.onSwipeStart,
        onSwipeEnd: this.onSwipeEnd,
        style: this.state.itemListStyle,
        tolerance: this.props.swipeScrollTolerance
      };
      var containerStyles = {};
      if (isHorizontal) {
        swiperProps.onSwipeLeft = this.onSwipeForward;
        swiperProps.onSwipeRight = this.onSwipeBackwards;
        if (this.props.dynamicHeight) {
          var itemHeight = this.getVariableItemHeight(this.state.selectedItem);
          containerStyles.height = itemHeight || "auto";
        }
      } else {
        swiperProps.onSwipeUp = this.props.verticalSwipe === "natural" ? this.onSwipeBackwards : this.onSwipeForward;
        swiperProps.onSwipeDown = this.props.verticalSwipe === "natural" ? this.onSwipeForward : this.onSwipeBackwards;
        swiperProps.style = _objectSpread(_objectSpread({}, swiperProps.style), {}, {
          height: this.state.itemSize
        });
        containerStyles.height = this.state.itemSize;
      }
      return /* @__PURE__ */ _react.default.createElement("div", {
        "aria-label": this.props.ariaLabel,
        className: _cssClasses.default.ROOT(this.props.className),
        ref: this.setCarouselWrapperRef,
        tabIndex: this.props.useKeyboardArrows ? 0 : void 0
      }, /* @__PURE__ */ _react.default.createElement("div", {
        className: _cssClasses.default.CAROUSEL(true),
        style: {
          width: this.props.width
        }
      }, this.renderControls(), this.props.renderArrowPrev(this.onClickPrev, hasPrev, this.props.labels.leftArrow), /* @__PURE__ */ _react.default.createElement("div", {
        className: _cssClasses.default.WRAPPER(true, this.props.axis),
        style: containerStyles
      }, isSwipeable ? /* @__PURE__ */ _react.default.createElement(_reactEasySwipe.default, _extends({
        tagName: "ul",
        innerRef: this.setListRef
      }, swiperProps, {
        allowMouseEvents: this.props.emulateTouch
      }), this.props.infiniteLoop && lastClone, this.renderItems(), this.props.infiniteLoop && firstClone) : /* @__PURE__ */ _react.default.createElement("ul", {
        className: _cssClasses.default.SLIDER(true, this.state.swiping),
        ref: function ref(node) {
          return _this5.setListRef(node);
        },
        style: this.state.itemListStyle || {}
      }, this.props.infiniteLoop && lastClone, this.renderItems(), this.props.infiniteLoop && firstClone)), this.props.renderArrowNext(this.onClickNext, hasNext, this.props.labels.rightArrow), this.renderStatus()), this.renderThumbs());
    }
  }]);
  return Carousel2;
}(_react.default.Component);
Carousel$1.default = Carousel;
_defineProperty(Carousel, "displayName", "Carousel");
_defineProperty(Carousel, "defaultProps", {
  ariaLabel: void 0,
  axis: "horizontal",
  centerSlidePercentage: 80,
  interval: 3e3,
  labels: {
    leftArrow: "previous slide / item",
    rightArrow: "next slide / item",
    item: "slide item"
  },
  onClickItem: _utils.noop,
  onClickThumb: _utils.noop,
  onChange: _utils.noop,
  onSwipeStart: function onSwipeStart() {
  },
  onSwipeEnd: function onSwipeEnd() {
  },
  onSwipeMove: function onSwipeMove() {
    return false;
  },
  preventMovementUntilSwipeScrollTolerance: false,
  renderArrowPrev: function renderArrowPrev(onClickHandler, hasPrev, label) {
    return /* @__PURE__ */ _react.default.createElement("button", {
      type: "button",
      "aria-label": label,
      className: _cssClasses.default.ARROW_PREV(!hasPrev),
      onClick: onClickHandler
    });
  },
  renderArrowNext: function renderArrowNext(onClickHandler, hasNext, label) {
    return /* @__PURE__ */ _react.default.createElement("button", {
      type: "button",
      "aria-label": label,
      className: _cssClasses.default.ARROW_NEXT(!hasNext),
      onClick: onClickHandler
    });
  },
  renderIndicator: function renderIndicator(onClickHandler, isSelected, index2, label) {
    return /* @__PURE__ */ _react.default.createElement("li", {
      className: _cssClasses.default.DOT(isSelected),
      onClick: onClickHandler,
      onKeyDown: onClickHandler,
      value: index2,
      key: index2,
      role: "button",
      tabIndex: 0,
      "aria-label": "".concat(label, " ").concat(index2 + 1)
    });
  },
  renderItem: function renderItem(item) {
    return item;
  },
  renderThumbs: function renderThumbs(children) {
    var images = _react.Children.map(children, function(item) {
      var img = item;
      if (item.type !== "img") {
        img = _react.Children.toArray(item.props.children).find(function(children2) {
          return children2.type === "img";
        });
      }
      if (!img) {
        return void 0;
      }
      return img;
    });
    if (images.filter(function(image) {
      return image;
    }).length === 0) {
      console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md");
      return [];
    }
    return images;
  },
  statusFormatter: _utils.defaultStatusFormatter,
  selectedItem: 0,
  showArrows: true,
  showIndicators: true,
  showStatus: true,
  showThumbs: true,
  stopOnHover: true,
  swipeScrollTolerance: 5,
  swipeable: true,
  transitionTime: 350,
  verticalSwipe: "standard",
  width: "100%",
  animationHandler: "slide",
  swipeAnimationHandler: _animations.slideSwipeAnimationHandler,
  stopSwipingHandler: _animations.slideStopSwipingHandler
});
var types = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Carousel", {
    enumerable: true,
    get: function get() {
      return _Carousel.default;
    }
  });
  Object.defineProperty(exports, "CarouselProps", {
    enumerable: true,
    get: function get() {
      return _types.CarouselProps;
    }
  });
  Object.defineProperty(exports, "Thumbs", {
    enumerable: true,
    get: function get() {
      return _Thumbs2.default;
    }
  });
  var _Carousel = _interopRequireDefault2(Carousel$1);
  var _types = types;
  var _Thumbs2 = _interopRequireDefault2(Thumbs$1);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
})(js);
const Slider = ({ images }) => {
  useNavigate();
  useAppSelector(selectImgUrl);
  return /* @__PURE__ */ jsx(Fragment, { children: images.length > 0 && /* @__PURE__ */ jsx(js.Carousel, { children: images.map((img, idx) => /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center keen-slider__slide bg-gradient-to-br from-yata-light to-yata-deep aspect-[1366/394] rounded-lg overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: img.images_url, alt: "pic", className: "object-contain" }) }, `top-slider-${idx}`)) }) });
};
const HeadBanner = ({ middleImages, narrowImages }) => {
  return /* @__PURE__ */ jsxs("div", { className: "w-full overflow-x-scroll lg:overflow-hidden mt-[20px]", children: [
    middleImages.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex flex-row justify-center lg:w-full w-[150%] mt-3 space-x-2 lg:space-x-4 lg:mt-0", children: middleImages.map((img, idx) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "w-1/2 lg:w-1/3",
        children: /* @__PURE__ */ jsx("img", { src: img.images_url, className: "min-w-full" })
      },
      `mid-banner-${idx}`
    )) }),
    /* @__PURE__ */ jsx("div", { className: "underLg:hidden", children: narrowImages.length > 0 && /* @__PURE__ */ jsx(
      "div",
      {
        className: "w-full",
        onClick: () => {
        },
        children: /* @__PURE__ */ jsx("img", { src: narrowImages[0].images_url, className: "w-full mt-7" })
      }
    ) })
  ] });
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var n$4 = function(t2, e2) {
  return (n$4 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
    t3.__proto__ = e3;
  } || function(t3, e3) {
    for (var n2 in e3)
      e3.hasOwnProperty(n2) && (t3[n2] = e3[n2]);
  })(t2, e2);
};
var o$6, r$5, i$4 = (function(t2) {
  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  !function() {
    var e2 = {}.hasOwnProperty;
    function n2() {
      for (var t3 = [], o3 = 0; o3 < arguments.length; o3++) {
        var r2 = arguments[o3];
        if (r2) {
          var i2 = typeof r2;
          if ("string" === i2 || "number" === i2)
            t3.push(r2);
          else if (Array.isArray(r2) && r2.length) {
            var s2 = n2.apply(null, r2);
            s2 && t3.push(s2);
          } else if ("object" === i2)
            for (var l2 in r2)
              e2.call(r2, l2) && r2[l2] && t3.push(l2);
        }
      }
      return t3.join(" ");
    }
    t2.exports ? (n2.default = n2, t2.exports = n2) : window.classNames = n2;
  }();
}(r$5 = { path: o$6, exports: {}, require: function(t2, e2) {
  return function() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
  }(null == e2 && r$5.path);
} }, r$5.exports), r$5.exports);
function s$8(t2, e2, n2) {
  var o3, r2, i2, s2, l2;
  function a2() {
    var c3 = Date.now() - s2;
    c3 < e2 && c3 >= 0 ? o3 = setTimeout(a2, e2 - c3) : (o3 = null, n2 || (l2 = t2.apply(i2, r2), i2 = r2 = null));
  }
  null == e2 && (e2 = 100);
  var c2 = function() {
    i2 = this, r2 = arguments, s2 = Date.now();
    var c3 = n2 && !o3;
    return o3 || (o3 = setTimeout(a2, e2)), c3 && (l2 = t2.apply(i2, r2), i2 = r2 = null), l2;
  };
  return c2.clear = function() {
    o3 && (clearTimeout(o3), o3 = null);
  }, c2.flush = function() {
    o3 && (l2 = t2.apply(i2, r2), i2 = r2 = null, clearTimeout(o3), o3 = null);
  }, c2;
}
s$8.debounce = s$8;
var l$6 = s$8;
!function(t2, e2) {
  void 0 === e2 && (e2 = {});
  var n2 = e2.insertAt;
  if (t2 && "undefined" != typeof document) {
    var o3 = document.head || document.getElementsByTagName("head")[0], r2 = document.createElement("style");
    r2.type = "text/css", "top" === n2 && o3.firstChild ? o3.insertBefore(r2, o3.firstChild) : o3.appendChild(r2), r2.styleSheet ? r2.styleSheet.cssText = t2 : r2.appendChild(document.createTextNode(t2));
  }
}(".indiana-scroll-container {\n  overflow: auto; }\n  .indiana-scroll-container--dragging {\n    scroll-behavior: auto !important; }\n    .indiana-scroll-container--dragging > * {\n      pointer-events: none;\n      cursor: -webkit-grab;\n      cursor: grab; }\n  .indiana-scroll-container--hide-scrollbars {\n    overflow: hidden;\n    overflow: -moz-scrollbars-none;\n    -ms-overflow-style: none;\n    scrollbar-width: none; }\n    .indiana-scroll-container--hide-scrollbars::-webkit-scrollbar {\n      display: none !important;\n      height: 0 !important;\n      width: 0 !important;\n      background: transparent !important;\n      -webkit-appearance: none !important; }\n  .indiana-scroll-container--native-scroll {\n    overflow: auto; }\n\n.indiana-dragging {\n  cursor: -webkit-grab;\n  cursor: grab; }\n");
var a$7, c$9 = (a$7 = "indiana-scroll-container", function(t2, e2) {
  if (!t2)
    return a$7;
  var n2;
  "string" == typeof t2 ? n2 = t2 : e2 = t2;
  var o3 = a$7;
  return n2 && (o3 += "__" + n2), o3 + (e2 ? Object.keys(e2).reduce(function(t3, n3) {
    var r2 = e2[n3];
    return r2 && (t3 += " " + ("boolean" == typeof r2 ? o3 + "--" + n3 : o3 + "--" + n3 + "_" + r2)), t3;
  }, "") : "");
}), p$6 = function(e2) {
  function o3(n2) {
    var o4 = e2.call(this, n2) || this;
    return o4.onEndScroll = function() {
      o4.scrolling = false, !o4.pressed && o4.started && o4.processEnd();
    }, o4.onScroll = function(t2) {
      var e3 = o4.container.current;
      e3.scrollLeft === o4.scrollLeft && e3.scrollTop === o4.scrollTop || (o4.scrolling = true, o4.processScroll(t2), o4.onEndScroll());
    }, o4.onTouchStart = function(t2) {
      var e3 = o4.props.nativeMobileScroll;
      if (o4.isDraggable(t2.target))
        if (o4.internal = true, e3 && o4.scrolling)
          o4.pressed = true;
        else {
          var n3 = t2.touches[0];
          o4.processClick(t2, n3.clientX, n3.clientY), !e3 && o4.props.stopPropagation && t2.stopPropagation();
        }
    }, o4.onTouchEnd = function(t2) {
      var e3 = o4.props.nativeMobileScroll;
      o4.pressed && (!o4.started || o4.scrolling && e3 ? o4.pressed = false : o4.processEnd(), o4.forceUpdate());
    }, o4.onTouchMove = function(t2) {
      var e3 = o4.props.nativeMobileScroll;
      if (o4.pressed && (!e3 || !o4.isMobile)) {
        var n3 = t2.touches[0];
        n3 && o4.processMove(t2, n3.clientX, n3.clientY), t2.preventDefault(), o4.props.stopPropagation && t2.stopPropagation();
      }
    }, o4.onMouseDown = function(t2) {
      o4.isDraggable(t2.target) && o4.isScrollable() && (o4.internal = true, -1 !== o4.props.buttons.indexOf(t2.button) && (o4.processClick(t2, t2.clientX, t2.clientY), t2.preventDefault(), o4.props.stopPropagation && t2.stopPropagation()));
    }, o4.onMouseMove = function(t2) {
      o4.pressed && (o4.processMove(t2, t2.clientX, t2.clientY), t2.preventDefault(), o4.props.stopPropagation && t2.stopPropagation());
    }, o4.onMouseUp = function(t2) {
      o4.pressed && (o4.started ? o4.processEnd() : (o4.internal = false, o4.pressed = false, o4.forceUpdate(), o4.props.onClick && o4.props.onClick(t2)), t2.preventDefault(), o4.props.stopPropagation && t2.stopPropagation());
    }, o4.container = React.createRef(), o4.onEndScroll = l$6(o4.onEndScroll, 300), o4.scrolling = false, o4.started = false, o4.pressed = false, o4.internal = false, o4.getRef = o4.getRef.bind(o4), o4;
  }
  return function(t2, e3) {
    function o4() {
      this.constructor = t2;
    }
    n$4(t2, e3), t2.prototype = null === e3 ? Object.create(e3) : (o4.prototype = e3.prototype, new o4());
  }(o3, e2), o3.prototype.componentDidMount = function() {
    var t2 = this.props.nativeMobileScroll, e3 = this.container.current;
    window.addEventListener("mouseup", this.onMouseUp), window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("touchmove", this.onTouchMove, { passive: false }), window.addEventListener("touchend", this.onTouchEnd), e3.addEventListener("touchstart", this.onTouchStart, { passive: false }), e3.addEventListener("mousedown", this.onMouseDown, { passive: false }), t2 && (this.isMobile = this.isMobileDevice(), this.isMobile && this.forceUpdate());
  }, o3.prototype.componentWillUnmount = function() {
    window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd);
  }, o3.prototype.getElement = function() {
    return this.container.current;
  }, o3.prototype.isMobileDevice = function() {
    return void 0 !== window.orientation || -1 !== navigator.userAgent.indexOf("IEMobile");
  }, o3.prototype.isDraggable = function(t2) {
    var e3 = this.props.ignoreElements;
    if (e3) {
      var n2 = t2.closest(e3);
      return null === n2 || n2.contains(this.getElement());
    }
    return true;
  }, o3.prototype.isScrollable = function() {
    var t2 = this.container.current;
    return t2 && (t2.scrollWidth > t2.clientWidth || t2.scrollHeight > t2.clientHeight);
  }, o3.prototype.processClick = function(t2, e3, n2) {
    var o4 = this.container.current;
    this.scrollLeft = o4.scrollLeft, this.scrollTop = o4.scrollTop, this.clientX = e3, this.clientY = n2, this.pressed = true;
  }, o3.prototype.processStart = function(t2) {
    void 0 === t2 && (t2 = true);
    var e3 = this.props.onStartScroll;
    this.started = true, t2 && document.body.classList.add("indiana-dragging"), e3 && e3({ external: !this.internal }), this.forceUpdate();
  }, o3.prototype.processScroll = function(t2) {
    if (this.started) {
      var e3 = this.props.onScroll;
      e3 && e3({ external: !this.internal });
    } else
      this.processStart(false);
  }, o3.prototype.processMove = function(t2, e3, n2) {
    var o4 = this.props, r2 = o4.horizontal, i2 = o4.vertical, s2 = o4.activationDistance, l2 = o4.onScroll, a2 = this.container.current;
    this.started ? (r2 && (a2.scrollLeft -= e3 - this.clientX), i2 && (a2.scrollTop -= n2 - this.clientY), l2 && l2({ external: !this.internal }), this.clientX = e3, this.clientY = n2, this.scrollLeft = a2.scrollLeft, this.scrollTop = a2.scrollTop) : (r2 && Math.abs(e3 - this.clientX) > s2 || i2 && Math.abs(n2 - this.clientY) > s2) && (this.clientX = e3, this.clientY = n2, this.processStart());
  }, o3.prototype.processEnd = function() {
    var t2 = this.props.onEndScroll;
    this.container.current && t2 && t2({ external: !this.internal }), this.pressed = false, this.started = false, this.scrolling = false, this.internal = false, document.body.classList.remove("indiana-dragging"), this.forceUpdate();
  }, o3.prototype.getRef = function(t2) {
    [this.container, this.props.innerRef].forEach(function(e3) {
      e3 && ("function" == typeof e3 ? e3(t2) : e3.current = t2);
    });
  }, o3.prototype.render = function() {
    var e3 = this.props, n2 = e3.children, o4 = e3.draggingClassName, r2 = e3.className, s2 = e3.style, l2 = e3.hideScrollbars, a2 = e3.component;
    return React.createElement(a2, { className: i$4(r2, this.pressed && o4, c$9({ dragging: this.pressed, "hide-scrollbars": l2, "native-scroll": this.isMobile })), style: s2, ref: this.getRef, onScroll: this.onScroll }, n2);
  }, o3.defaultProps = { nativeMobileScroll: true, hideScrollbars: true, activationDistance: 10, vertical: true, horizontal: true, stopPropagation: false, style: {}, component: "div", buttons: [0] }, o3;
}(reactExports.PureComponent);
const ChevronRightSvg = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 320 512",
    width: 16,
    height: 24,
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M96 480c-8.188 0-16.38-3.125-22.62-9.375-12.5-12.5-12.5-32.75 0-45.25L242.8 256 73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" })
  }
);
/*! @azure/msal-browser v2.35.0 2023-04-03 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics$1 = function(d2, b2) {
  extendStatics$1 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
    d3.__proto__ = b3;
  } || function(d3, b3) {
    for (var p2 in b3)
      if (Object.prototype.hasOwnProperty.call(b3, p2))
        d3[p2] = b3[p2];
  };
  return extendStatics$1(d2, b2);
};
function __extends$1(d2, b2) {
  extendStatics$1(d2, b2);
  function __() {
    this.constructor = d2;
  }
  d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
/*! @azure/msal-common v12.0.0 2023-04-03 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = function(d2, b2) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
    d3.__proto__ = b3;
  } || function(d3, b3) {
    for (var p2 in b3)
      if (Object.prototype.hasOwnProperty.call(b3, p2))
        d3[p2] = b3[p2];
  };
  return extendStatics(d2, b2);
};
function __extends(d2, b2) {
  extendStatics(d2, b2);
  function __() {
    this.constructor = d2;
  }
  d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
function __spreadArrays() {
  for (var s2 = 0, i2 = 0, il2 = arguments.length; i2 < il2; i2++)
    s2 += arguments[i2].length;
  for (var r2 = Array(s2), k2 = 0, i2 = 0; i2 < il2; i2++)
    for (var a2 = arguments[i2], j2 = 0, jl2 = a2.length; j2 < jl2; j2++, k2++)
      r2[k2] = a2[j2];
  return r2;
}
/*! @azure/msal-common v12.0.0 2023-04-03 */
var Constants = {
  LIBRARY_NAME: "MSAL.JS",
  SKU: "msal.js.common",
  // Prefix for all library cache entries
  CACHE_PREFIX: "msal",
  // default authority
  DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common/",
  DEFAULT_AUTHORITY_HOST: "login.microsoftonline.com",
  DEFAULT_COMMON_TENANT: "common",
  // ADFS String
  ADFS: "adfs",
  DSTS: "dstsv2",
  // Default AAD Instance Discovery Endpoint
  AAD_INSTANCE_DISCOVERY_ENDPT: "https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=",
  // Resource delimiter - used for certain cache entries
  RESOURCE_DELIM: "|",
  // Placeholder for non-existent account ids/objects
  NO_ACCOUNT: "NO_ACCOUNT",
  // Claims
  CLAIMS: "claims",
  // Consumer UTID
  CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad",
  // Default scopes
  OPENID_SCOPE: "openid",
  PROFILE_SCOPE: "profile",
  OFFLINE_ACCESS_SCOPE: "offline_access",
  EMAIL_SCOPE: "email",
  // Default response type for authorization code flow
  CODE_RESPONSE_TYPE: "code",
  CODE_GRANT_TYPE: "authorization_code",
  RT_GRANT_TYPE: "refresh_token",
  FRAGMENT_RESPONSE_MODE: "fragment",
  S256_CODE_CHALLENGE_METHOD: "S256",
  URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded;charset=utf-8",
  AUTHORIZATION_PENDING: "authorization_pending",
  NOT_DEFINED: "not_defined",
  EMPTY_STRING: "",
  NOT_APPLICABLE: "N/A",
  FORWARD_SLASH: "/",
  IMDS_ENDPOINT: "http://169.254.169.254/metadata/instance/compute/location",
  IMDS_VERSION: "2020-06-01",
  IMDS_TIMEOUT: 2e3,
  AZURE_REGION_AUTO_DISCOVER_FLAG: "TryAutoDetect",
  REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX: "login.microsoft.com",
  REGIONAL_AUTH_NON_MSI_QUERY_STRING: "allowestsrnonmsi=true",
  KNOWN_PUBLIC_CLOUDS: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"],
  TOKEN_RESPONSE_TYPE: "token",
  ID_TOKEN_RESPONSE_TYPE: "id_token",
  SHR_NONCE_VALIDITY: 240,
  INVALID_INSTANCE: "invalid_instance"
};
var OIDC_DEFAULT_SCOPES = [
  Constants.OPENID_SCOPE,
  Constants.PROFILE_SCOPE,
  Constants.OFFLINE_ACCESS_SCOPE
];
__spreadArrays(OIDC_DEFAULT_SCOPES, [
  Constants.EMAIL_SCOPE
]);
var HeaderNames;
(function(HeaderNames2) {
  HeaderNames2["CONTENT_TYPE"] = "Content-Type";
  HeaderNames2["RETRY_AFTER"] = "Retry-After";
  HeaderNames2["CCS_HEADER"] = "X-AnchorMailbox";
  HeaderNames2["WWWAuthenticate"] = "WWW-Authenticate";
  HeaderNames2["AuthenticationInfo"] = "Authentication-Info";
  HeaderNames2["X_MS_REQUEST_ID"] = "x-ms-request-id";
  HeaderNames2["X_MS_HTTP_VERSION"] = "x-ms-httpver";
})(HeaderNames || (HeaderNames = {}));
var PersistentCacheKeys;
(function(PersistentCacheKeys2) {
  PersistentCacheKeys2["ID_TOKEN"] = "idtoken";
  PersistentCacheKeys2["CLIENT_INFO"] = "client.info";
  PersistentCacheKeys2["ADAL_ID_TOKEN"] = "adal.idtoken";
  PersistentCacheKeys2["ERROR"] = "error";
  PersistentCacheKeys2["ERROR_DESC"] = "error.description";
  PersistentCacheKeys2["ACTIVE_ACCOUNT"] = "active-account";
  PersistentCacheKeys2["ACTIVE_ACCOUNT_FILTERS"] = "active-account-filters";
})(PersistentCacheKeys || (PersistentCacheKeys = {}));
var AADAuthorityConstants;
(function(AADAuthorityConstants2) {
  AADAuthorityConstants2["COMMON"] = "common";
  AADAuthorityConstants2["ORGANIZATIONS"] = "organizations";
  AADAuthorityConstants2["CONSUMERS"] = "consumers";
})(AADAuthorityConstants || (AADAuthorityConstants = {}));
var AADServerParamKeys;
(function(AADServerParamKeys2) {
  AADServerParamKeys2["CLIENT_ID"] = "client_id";
  AADServerParamKeys2["REDIRECT_URI"] = "redirect_uri";
  AADServerParamKeys2["RESPONSE_TYPE"] = "response_type";
  AADServerParamKeys2["RESPONSE_MODE"] = "response_mode";
  AADServerParamKeys2["GRANT_TYPE"] = "grant_type";
  AADServerParamKeys2["CLAIMS"] = "claims";
  AADServerParamKeys2["SCOPE"] = "scope";
  AADServerParamKeys2["ERROR"] = "error";
  AADServerParamKeys2["ERROR_DESCRIPTION"] = "error_description";
  AADServerParamKeys2["ACCESS_TOKEN"] = "access_token";
  AADServerParamKeys2["ID_TOKEN"] = "id_token";
  AADServerParamKeys2["REFRESH_TOKEN"] = "refresh_token";
  AADServerParamKeys2["EXPIRES_IN"] = "expires_in";
  AADServerParamKeys2["STATE"] = "state";
  AADServerParamKeys2["NONCE"] = "nonce";
  AADServerParamKeys2["PROMPT"] = "prompt";
  AADServerParamKeys2["SESSION_STATE"] = "session_state";
  AADServerParamKeys2["CLIENT_INFO"] = "client_info";
  AADServerParamKeys2["CODE"] = "code";
  AADServerParamKeys2["CODE_CHALLENGE"] = "code_challenge";
  AADServerParamKeys2["CODE_CHALLENGE_METHOD"] = "code_challenge_method";
  AADServerParamKeys2["CODE_VERIFIER"] = "code_verifier";
  AADServerParamKeys2["CLIENT_REQUEST_ID"] = "client-request-id";
  AADServerParamKeys2["X_CLIENT_SKU"] = "x-client-SKU";
  AADServerParamKeys2["X_CLIENT_VER"] = "x-client-VER";
  AADServerParamKeys2["X_CLIENT_OS"] = "x-client-OS";
  AADServerParamKeys2["X_CLIENT_CPU"] = "x-client-CPU";
  AADServerParamKeys2["X_CLIENT_CURR_TELEM"] = "x-client-current-telemetry";
  AADServerParamKeys2["X_CLIENT_LAST_TELEM"] = "x-client-last-telemetry";
  AADServerParamKeys2["X_MS_LIB_CAPABILITY"] = "x-ms-lib-capability";
  AADServerParamKeys2["X_APP_NAME"] = "x-app-name";
  AADServerParamKeys2["X_APP_VER"] = "x-app-ver";
  AADServerParamKeys2["POST_LOGOUT_URI"] = "post_logout_redirect_uri";
  AADServerParamKeys2["ID_TOKEN_HINT"] = "id_token_hint";
  AADServerParamKeys2["DEVICE_CODE"] = "device_code";
  AADServerParamKeys2["CLIENT_SECRET"] = "client_secret";
  AADServerParamKeys2["CLIENT_ASSERTION"] = "client_assertion";
  AADServerParamKeys2["CLIENT_ASSERTION_TYPE"] = "client_assertion_type";
  AADServerParamKeys2["TOKEN_TYPE"] = "token_type";
  AADServerParamKeys2["REQ_CNF"] = "req_cnf";
  AADServerParamKeys2["OBO_ASSERTION"] = "assertion";
  AADServerParamKeys2["REQUESTED_TOKEN_USE"] = "requested_token_use";
  AADServerParamKeys2["ON_BEHALF_OF"] = "on_behalf_of";
  AADServerParamKeys2["FOCI"] = "foci";
  AADServerParamKeys2["CCS_HEADER"] = "X-AnchorMailbox";
  AADServerParamKeys2["RETURN_SPA_CODE"] = "return_spa_code";
  AADServerParamKeys2["NATIVE_BROKER"] = "nativebroker";
  AADServerParamKeys2["LOGOUT_HINT"] = "logout_hint";
})(AADServerParamKeys || (AADServerParamKeys = {}));
var ClaimsRequestKeys;
(function(ClaimsRequestKeys2) {
  ClaimsRequestKeys2["ACCESS_TOKEN"] = "access_token";
  ClaimsRequestKeys2["XMS_CC"] = "xms_cc";
})(ClaimsRequestKeys || (ClaimsRequestKeys = {}));
var SSOTypes;
(function(SSOTypes2) {
  SSOTypes2["ACCOUNT"] = "account";
  SSOTypes2["SID"] = "sid";
  SSOTypes2["LOGIN_HINT"] = "login_hint";
  SSOTypes2["ID_TOKEN"] = "id_token";
  SSOTypes2["DOMAIN_HINT"] = "domain_hint";
  SSOTypes2["ORGANIZATIONS"] = "organizations";
  SSOTypes2["CONSUMERS"] = "consumers";
  SSOTypes2["ACCOUNT_ID"] = "accountIdentifier";
  SSOTypes2["HOMEACCOUNT_ID"] = "homeAccountIdentifier";
})(SSOTypes || (SSOTypes = {}));
var ResponseMode;
(function(ResponseMode2) {
  ResponseMode2["QUERY"] = "query";
  ResponseMode2["FRAGMENT"] = "fragment";
  ResponseMode2["FORM_POST"] = "form_post";
})(ResponseMode || (ResponseMode = {}));
var GrantType;
(function(GrantType2) {
  GrantType2["IMPLICIT_GRANT"] = "implicit";
  GrantType2["AUTHORIZATION_CODE_GRANT"] = "authorization_code";
  GrantType2["CLIENT_CREDENTIALS_GRANT"] = "client_credentials";
  GrantType2["RESOURCE_OWNER_PASSWORD_GRANT"] = "password";
  GrantType2["REFRESH_TOKEN_GRANT"] = "refresh_token";
  GrantType2["DEVICE_CODE_GRANT"] = "device_code";
  GrantType2["JWT_BEARER"] = "urn:ietf:params:oauth:grant-type:jwt-bearer";
})(GrantType || (GrantType = {}));
var CacheAccountType;
(function(CacheAccountType2) {
  CacheAccountType2["MSSTS_ACCOUNT_TYPE"] = "MSSTS";
  CacheAccountType2["ADFS_ACCOUNT_TYPE"] = "ADFS";
  CacheAccountType2["MSAV1_ACCOUNT_TYPE"] = "MSA";
  CacheAccountType2["GENERIC_ACCOUNT_TYPE"] = "Generic";
})(CacheAccountType || (CacheAccountType = {}));
var Separators;
(function(Separators2) {
  Separators2["CACHE_KEY_SEPARATOR"] = "-";
  Separators2["CLIENT_INFO_SEPARATOR"] = ".";
})(Separators || (Separators = {}));
var CredentialType;
(function(CredentialType2) {
  CredentialType2["ID_TOKEN"] = "IdToken";
  CredentialType2["ACCESS_TOKEN"] = "AccessToken";
  CredentialType2["ACCESS_TOKEN_WITH_AUTH_SCHEME"] = "AccessToken_With_AuthScheme";
  CredentialType2["REFRESH_TOKEN"] = "RefreshToken";
})(CredentialType || (CredentialType = {}));
var CacheType;
(function(CacheType2) {
  CacheType2[CacheType2["ADFS"] = 1001] = "ADFS";
  CacheType2[CacheType2["MSA"] = 1002] = "MSA";
  CacheType2[CacheType2["MSSTS"] = 1003] = "MSSTS";
  CacheType2[CacheType2["GENERIC"] = 1004] = "GENERIC";
  CacheType2[CacheType2["ACCESS_TOKEN"] = 2001] = "ACCESS_TOKEN";
  CacheType2[CacheType2["REFRESH_TOKEN"] = 2002] = "REFRESH_TOKEN";
  CacheType2[CacheType2["ID_TOKEN"] = 2003] = "ID_TOKEN";
  CacheType2[CacheType2["APP_METADATA"] = 3001] = "APP_METADATA";
  CacheType2[CacheType2["UNDEFINED"] = 9999] = "UNDEFINED";
})(CacheType || (CacheType = {}));
var AuthorityMetadataSource;
(function(AuthorityMetadataSource2) {
  AuthorityMetadataSource2["CONFIG"] = "config";
  AuthorityMetadataSource2["CACHE"] = "cache";
  AuthorityMetadataSource2["NETWORK"] = "network";
  AuthorityMetadataSource2["HARDCODED_VALUES"] = "hardcoded_values";
})(AuthorityMetadataSource || (AuthorityMetadataSource = {}));
var AuthenticationScheme;
(function(AuthenticationScheme2) {
  AuthenticationScheme2["BEARER"] = "Bearer";
  AuthenticationScheme2["POP"] = "pop";
  AuthenticationScheme2["SSH"] = "ssh-cert";
})(AuthenticationScheme || (AuthenticationScheme = {}));
var PasswordGrantConstants;
(function(PasswordGrantConstants2) {
  PasswordGrantConstants2["username"] = "username";
  PasswordGrantConstants2["password"] = "password";
})(PasswordGrantConstants || (PasswordGrantConstants = {}));
var ResponseCodes;
(function(ResponseCodes2) {
  ResponseCodes2[ResponseCodes2["httpSuccess"] = 200] = "httpSuccess";
  ResponseCodes2[ResponseCodes2["httpBadRequest"] = 400] = "httpBadRequest";
})(ResponseCodes || (ResponseCodes = {}));
var RegionDiscoverySources;
(function(RegionDiscoverySources2) {
  RegionDiscoverySources2["FAILED_AUTO_DETECTION"] = "1";
  RegionDiscoverySources2["INTERNAL_CACHE"] = "2";
  RegionDiscoverySources2["ENVIRONMENT_VARIABLE"] = "3";
  RegionDiscoverySources2["IMDS"] = "4";
})(RegionDiscoverySources || (RegionDiscoverySources = {}));
var RegionDiscoveryOutcomes;
(function(RegionDiscoveryOutcomes2) {
  RegionDiscoveryOutcomes2["CONFIGURED_MATCHES_DETECTED"] = "1";
  RegionDiscoveryOutcomes2["CONFIGURED_NO_AUTO_DETECTION"] = "2";
  RegionDiscoveryOutcomes2["CONFIGURED_NOT_DETECTED"] = "3";
  RegionDiscoveryOutcomes2["AUTO_DETECTION_REQUESTED_SUCCESSFUL"] = "4";
  RegionDiscoveryOutcomes2["AUTO_DETECTION_REQUESTED_FAILED"] = "5";
})(RegionDiscoveryOutcomes || (RegionDiscoveryOutcomes = {}));
var CacheOutcome;
(function(CacheOutcome2) {
  CacheOutcome2["NO_CACHE_HIT"] = "0";
  CacheOutcome2["FORCE_REFRESH"] = "1";
  CacheOutcome2["NO_CACHED_ACCESS_TOKEN"] = "2";
  CacheOutcome2["CACHED_ACCESS_TOKEN_EXPIRED"] = "3";
  CacheOutcome2["REFRESH_CACHED_ACCESS_TOKEN"] = "4";
})(CacheOutcome || (CacheOutcome = {}));
var JsonTypes;
(function(JsonTypes2) {
  JsonTypes2["Jwt"] = "JWT";
  JsonTypes2["Jwk"] = "JWK";
  JsonTypes2["Pop"] = "pop";
})(JsonTypes || (JsonTypes = {}));
/*! @azure/msal-common v12.0.0 2023-04-03 */
var AuthErrorMessage = {
  unexpectedError: {
    code: "unexpected_error",
    desc: "Unexpected error in authentication."
  },
  postRequestFailed: {
    code: "post_request_failed",
    desc: "Post request failed from the network, could be a 4xx/5xx or a network unavailability. Please check the exact error code for details."
  }
};
var AuthError = (
  /** @class */
  function(_super) {
    __extends(AuthError2, _super);
    function AuthError2(errorCode, errorMessage, suberror) {
      var _this = this;
      var errorString = errorMessage ? errorCode + ": " + errorMessage : errorCode;
      _this = _super.call(this, errorString) || this;
      Object.setPrototypeOf(_this, AuthError2.prototype);
      _this.errorCode = errorCode || Constants.EMPTY_STRING;
      _this.errorMessage = errorMessage || Constants.EMPTY_STRING;
      _this.subError = suberror || Constants.EMPTY_STRING;
      _this.name = "AuthError";
      return _this;
    }
    AuthError2.prototype.setCorrelationId = function(correlationId) {
      this.correlationId = correlationId;
    };
    AuthError2.createUnexpectedError = function(errDesc) {
      return new AuthError2(AuthErrorMessage.unexpectedError.code, AuthErrorMessage.unexpectedError.desc + ": " + errDesc);
    };
    AuthError2.createPostRequestFailed = function(errDesc) {
      return new AuthError2(AuthErrorMessage.postRequestFailed.code, AuthErrorMessage.postRequestFailed.desc + ": " + errDesc);
    };
    return AuthError2;
  }(Error)
);
/*! @azure/msal-common v12.0.0 2023-04-03 */
var ClientAuthErrorMessage = {
  clientInfoDecodingError: {
    code: "client_info_decoding_error",
    desc: "The client info could not be parsed/decoded correctly. Please review the trace to determine the root cause."
  },
  clientInfoEmptyError: {
    code: "client_info_empty_error",
    desc: "The client info was empty. Please review the trace to determine the root cause."
  },
  tokenParsingError: {
    code: "token_parsing_error",
    desc: "Token cannot be parsed. Please review stack trace to determine root cause."
  },
  nullOrEmptyToken: {
    code: "null_or_empty_token",
    desc: "The token is null or empty. Please review the trace to determine the root cause."
  },
  endpointResolutionError: {
    code: "endpoints_resolution_error",
    desc: "Error: could not resolve endpoints. Please check network and try again."
  },
  networkError: {
    code: "network_error",
    desc: "Network request failed. Please check network trace to determine root cause."
  },
  unableToGetOpenidConfigError: {
    code: "openid_config_error",
    desc: "Could not retrieve endpoints. Check your authority and verify the .well-known/openid-configuration endpoint returns the required endpoints."
  },
  hashNotDeserialized: {
    code: "hash_not_deserialized",
    desc: "The hash parameters could not be deserialized. Please review the trace to determine the root cause."
  },
  blankGuidGenerated: {
    code: "blank_guid_generated",
    desc: "The guid generated was blank. Please review the trace to determine the root cause."
  },
  invalidStateError: {
    code: "invalid_state",
    desc: "State was not the expected format. Please check the logs to determine whether the request was sent using ProtocolUtils.setRequestState()."
  },
  stateMismatchError: {
    code: "state_mismatch",
    desc: "State mismatch error. Please check your network. Continued requests may cause cache overflow."
  },
  stateNotFoundError: {
    code: "state_not_found",
    desc: "State not found"
  },
  nonceMismatchError: {
    code: "nonce_mismatch",
    desc: "Nonce mismatch error. This may be caused by a race condition in concurrent requests."
  },
  nonceNotFoundError: {
    code: "nonce_not_found",
    desc: "nonce not found"
  },
  authTimeNotFoundError: {
    code: "auth_time_not_found",
    desc: "Max Age was requested and the ID token is missing the auth_time variable. auth_time is an optional claim and is not enabled by default - it must be enabled. See https://aka.ms/msaljs/optional-claims for more information."
  },
  maxAgeTranspiredError: {
    code: "max_age_transpired",
    desc: "Max Age is set to 0, or too much time has elapsed since the last end-user authentication."
  },
  noTokensFoundError: {
    code: "no_tokens_found",
    desc: "No tokens were found for the given scopes, and no authorization code was passed to acquireToken. You must retrieve an authorization code before making a call to acquireToken()."
  },
  multipleMatchingTokens: {
    code: "multiple_matching_tokens",
    desc: "The cache contains multiple tokens satisfying the requirements. Call AcquireToken again providing more requirements such as authority or account."
  },
  multipleMatchingAccounts: {
    code: "multiple_matching_accounts",
    desc: "The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account"
  },
  multipleMatchingAppMetadata: {
    code: "multiple_matching_appMetadata",
    desc: "The cache contains multiple appMetadata satisfying the given parameters. Please pass more info to obtain the correct appMetadata"
  },
  tokenRequestCannotBeMade: {
    code: "request_cannot_be_made",
    desc: "Token request cannot be made without authorization code or refresh token."
  },
  appendEmptyScopeError: {
    code: "cannot_append_empty_scope",
    desc: "Cannot append null or empty scope to ScopeSet. Please check the stack trace for more info."
  },
  removeEmptyScopeError: {
    code: "cannot_remove_empty_scope",
    desc: "Cannot remove null or empty scope from ScopeSet. Please check the stack trace for more info."
  },
  appendScopeSetError: {
    code: "cannot_append_scopeset",
    desc: "Cannot append ScopeSet due to error."
  },
  emptyInputScopeSetError: {
    code: "empty_input_scopeset",
    desc: "Empty input ScopeSet cannot be processed."
  },
  DeviceCodePollingCancelled: {
    code: "device_code_polling_cancelled",
    desc: "Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true."
  },
  DeviceCodeExpired: {
    code: "device_code_expired",
    desc: "Device code is expired."
  },
  DeviceCodeUnknownError: {
    code: "device_code_unknown_error",
    desc: "Device code stopped polling for unknown reasons."
  },
  NoAccountInSilentRequest: {
    code: "no_account_in_silent_request",
    desc: "Please pass an account object, silent flow is not supported without account information"
  },
  invalidCacheRecord: {
    code: "invalid_cache_record",
    desc: "Cache record object was null or undefined."
  },
  invalidCacheEnvironment: {
    code: "invalid_cache_environment",
    desc: "Invalid environment when attempting to create cache entry"
  },
  noAccountFound: {
    code: "no_account_found",
    desc: "No account found in cache for given key."
  },
  CachePluginError: {
    code: "no cache plugin set on CacheManager",
    desc: "ICachePlugin needs to be set before using readFromStorage or writeFromStorage"
  },
  noCryptoObj: {
    code: "no_crypto_object",
    desc: "No crypto object detected. This is required for the following operation: "
  },
  invalidCacheType: {
    code: "invalid_cache_type",
    desc: "Invalid cache type"
  },
  unexpectedAccountType: {
    code: "unexpected_account_type",
    desc: "Unexpected account type."
  },
  unexpectedCredentialType: {
    code: "unexpected_credential_type",
    desc: "Unexpected credential type."
  },
  invalidAssertion: {
    code: "invalid_assertion",
    desc: "Client assertion must meet requirements described in https://tools.ietf.org/html/rfc7515"
  },
  invalidClientCredential: {
    code: "invalid_client_credential",
    desc: "Client credential (secret, certificate, or assertion) must not be empty when creating a confidential client. An application should at most have one credential"
  },
  tokenRefreshRequired: {
    code: "token_refresh_required",
    desc: "Cannot return token from cache because it must be refreshed. This may be due to one of the following reasons: forceRefresh parameter is set to true, claims have been requested, there is no cached access token or it is expired."
  },
  userTimeoutReached: {
    code: "user_timeout_reached",
    desc: "User defined timeout for device code polling reached"
  },
  tokenClaimsRequired: {
    code: "token_claims_cnf_required_for_signedjwt",
    desc: "Cannot generate a POP jwt if the token_claims are not populated"
  },
  noAuthorizationCodeFromServer: {
    code: "authorization_code_missing_from_server_response",
    desc: "Server response does not contain an authorization code to proceed"
  },
  noAzureRegionDetected: {
    code: "no_azure_region_detected",
    desc: "No azure region was detected and no fallback was made available"
  },
  accessTokenEntityNullError: {
    code: "access_token_entity_null",
    desc: "Access token entity is null, please check logs and cache to ensure a valid access token is present."
  },
  bindingKeyNotRemovedError: {
    code: "binding_key_not_removed",
    desc: "Could not remove the credential's binding key from storage."
  },
  logoutNotSupported: {
    code: "end_session_endpoint_not_supported",
    desc: "Provided authority does not support logout."
  },
  keyIdMissing: {
    code: "key_id_missing",
    desc: "A keyId value is missing from the requested bound token's cache record and is required to match the token to it's stored binding key."
  },
  noNetworkConnectivity: {
    code: "no_network_connectivity",
    desc: "No network connectivity. Check your internet connection."
  },
  userCanceledError: {
    code: "user_canceled",
    desc: "User canceled the flow."
  }
};
var ClientAuthError = (
  /** @class */
  function(_super) {
    __extends(ClientAuthError2, _super);
    function ClientAuthError2(errorCode, errorMessage) {
      var _this = _super.call(this, errorCode, errorMessage) || this;
      _this.name = "ClientAuthError";
      Object.setPrototypeOf(_this, ClientAuthError2.prototype);
      return _this;
    }
    ClientAuthError2.createClientInfoDecodingError = function(caughtError) {
      return new ClientAuthError2(ClientAuthErrorMessage.clientInfoDecodingError.code, ClientAuthErrorMessage.clientInfoDecodingError.desc + " Failed with error: " + caughtError);
    };
    ClientAuthError2.createClientInfoEmptyError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.clientInfoEmptyError.code, "" + ClientAuthErrorMessage.clientInfoEmptyError.desc);
    };
    ClientAuthError2.createTokenParsingError = function(caughtExtractionError) {
      return new ClientAuthError2(ClientAuthErrorMessage.tokenParsingError.code, ClientAuthErrorMessage.tokenParsingError.desc + " Failed with error: " + caughtExtractionError);
    };
    ClientAuthError2.createTokenNullOrEmptyError = function(invalidRawTokenString) {
      return new ClientAuthError2(ClientAuthErrorMessage.nullOrEmptyToken.code, ClientAuthErrorMessage.nullOrEmptyToken.desc + " Raw Token Value: " + invalidRawTokenString);
    };
    ClientAuthError2.createEndpointDiscoveryIncompleteError = function(errDetail) {
      return new ClientAuthError2(ClientAuthErrorMessage.endpointResolutionError.code, ClientAuthErrorMessage.endpointResolutionError.desc + " Detail: " + errDetail);
    };
    ClientAuthError2.createNetworkError = function(endpoint, errDetail) {
      return new ClientAuthError2(ClientAuthErrorMessage.networkError.code, ClientAuthErrorMessage.networkError.desc + " | Fetch client threw: " + errDetail + " | Attempted to reach: " + endpoint.split("?")[0]);
    };
    ClientAuthError2.createUnableToGetOpenidConfigError = function(errDetail) {
      return new ClientAuthError2(ClientAuthErrorMessage.unableToGetOpenidConfigError.code, ClientAuthErrorMessage.unableToGetOpenidConfigError.desc + " Attempted to retrieve endpoints from: " + errDetail);
    };
    ClientAuthError2.createHashNotDeserializedError = function(hashParamObj) {
      return new ClientAuthError2(ClientAuthErrorMessage.hashNotDeserialized.code, ClientAuthErrorMessage.hashNotDeserialized.desc + " Given Object: " + hashParamObj);
    };
    ClientAuthError2.createInvalidStateError = function(invalidState, errorString) {
      return new ClientAuthError2(ClientAuthErrorMessage.invalidStateError.code, ClientAuthErrorMessage.invalidStateError.desc + " Invalid State: " + invalidState + ", Root Err: " + errorString);
    };
    ClientAuthError2.createStateMismatchError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.stateMismatchError.code, ClientAuthErrorMessage.stateMismatchError.desc);
    };
    ClientAuthError2.createStateNotFoundError = function(missingState) {
      return new ClientAuthError2(ClientAuthErrorMessage.stateNotFoundError.code, ClientAuthErrorMessage.stateNotFoundError.desc + ":  " + missingState);
    };
    ClientAuthError2.createNonceMismatchError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.nonceMismatchError.code, ClientAuthErrorMessage.nonceMismatchError.desc);
    };
    ClientAuthError2.createAuthTimeNotFoundError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.authTimeNotFoundError.code, ClientAuthErrorMessage.authTimeNotFoundError.desc);
    };
    ClientAuthError2.createMaxAgeTranspiredError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.maxAgeTranspiredError.code, ClientAuthErrorMessage.maxAgeTranspiredError.desc);
    };
    ClientAuthError2.createNonceNotFoundError = function(missingNonce) {
      return new ClientAuthError2(ClientAuthErrorMessage.nonceNotFoundError.code, ClientAuthErrorMessage.nonceNotFoundError.desc + ":  " + missingNonce);
    };
    ClientAuthError2.createMultipleMatchingTokensInCacheError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.multipleMatchingTokens.code, ClientAuthErrorMessage.multipleMatchingTokens.desc + ".");
    };
    ClientAuthError2.createMultipleMatchingAccountsInCacheError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.multipleMatchingAccounts.code, ClientAuthErrorMessage.multipleMatchingAccounts.desc);
    };
    ClientAuthError2.createMultipleMatchingAppMetadataInCacheError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.multipleMatchingAppMetadata.code, ClientAuthErrorMessage.multipleMatchingAppMetadata.desc);
    };
    ClientAuthError2.createTokenRequestCannotBeMadeError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.tokenRequestCannotBeMade.code, ClientAuthErrorMessage.tokenRequestCannotBeMade.desc);
    };
    ClientAuthError2.createAppendEmptyScopeToSetError = function(givenScope) {
      return new ClientAuthError2(ClientAuthErrorMessage.appendEmptyScopeError.code, ClientAuthErrorMessage.appendEmptyScopeError.desc + " Given Scope: " + givenScope);
    };
    ClientAuthError2.createRemoveEmptyScopeFromSetError = function(givenScope) {
      return new ClientAuthError2(ClientAuthErrorMessage.removeEmptyScopeError.code, ClientAuthErrorMessage.removeEmptyScopeError.desc + " Given Scope: " + givenScope);
    };
    ClientAuthError2.createAppendScopeSetError = function(appendError) {
      return new ClientAuthError2(ClientAuthErrorMessage.appendScopeSetError.code, ClientAuthErrorMessage.appendScopeSetError.desc + " Detail Error: " + appendError);
    };
    ClientAuthError2.createEmptyInputScopeSetError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.emptyInputScopeSetError.code, "" + ClientAuthErrorMessage.emptyInputScopeSetError.desc);
    };
    ClientAuthError2.createDeviceCodeCancelledError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.DeviceCodePollingCancelled.code, "" + ClientAuthErrorMessage.DeviceCodePollingCancelled.desc);
    };
    ClientAuthError2.createDeviceCodeExpiredError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.DeviceCodeExpired.code, "" + ClientAuthErrorMessage.DeviceCodeExpired.desc);
    };
    ClientAuthError2.createDeviceCodeUnknownError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.DeviceCodeUnknownError.code, "" + ClientAuthErrorMessage.DeviceCodeUnknownError.desc);
    };
    ClientAuthError2.createNoAccountInSilentRequestError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.NoAccountInSilentRequest.code, "" + ClientAuthErrorMessage.NoAccountInSilentRequest.desc);
    };
    ClientAuthError2.createNullOrUndefinedCacheRecord = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.invalidCacheRecord.code, ClientAuthErrorMessage.invalidCacheRecord.desc);
    };
    ClientAuthError2.createInvalidCacheEnvironmentError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.invalidCacheEnvironment.code, ClientAuthErrorMessage.invalidCacheEnvironment.desc);
    };
    ClientAuthError2.createNoAccountFoundError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.noAccountFound.code, ClientAuthErrorMessage.noAccountFound.desc);
    };
    ClientAuthError2.createCachePluginError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.CachePluginError.code, "" + ClientAuthErrorMessage.CachePluginError.desc);
    };
    ClientAuthError2.createNoCryptoObjectError = function(operationName) {
      return new ClientAuthError2(ClientAuthErrorMessage.noCryptoObj.code, "" + ClientAuthErrorMessage.noCryptoObj.desc + operationName);
    };
    ClientAuthError2.createInvalidCacheTypeError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.invalidCacheType.code, "" + ClientAuthErrorMessage.invalidCacheType.desc);
    };
    ClientAuthError2.createUnexpectedAccountTypeError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.unexpectedAccountType.code, "" + ClientAuthErrorMessage.unexpectedAccountType.desc);
    };
    ClientAuthError2.createUnexpectedCredentialTypeError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.unexpectedCredentialType.code, "" + ClientAuthErrorMessage.unexpectedCredentialType.desc);
    };
    ClientAuthError2.createInvalidAssertionError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.invalidAssertion.code, "" + ClientAuthErrorMessage.invalidAssertion.desc);
    };
    ClientAuthError2.createInvalidCredentialError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.invalidClientCredential.code, "" + ClientAuthErrorMessage.invalidClientCredential.desc);
    };
    ClientAuthError2.createRefreshRequiredError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.tokenRefreshRequired.code, ClientAuthErrorMessage.tokenRefreshRequired.desc);
    };
    ClientAuthError2.createUserTimeoutReachedError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.userTimeoutReached.code, ClientAuthErrorMessage.userTimeoutReached.desc);
    };
    ClientAuthError2.createTokenClaimsRequiredError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.tokenClaimsRequired.code, ClientAuthErrorMessage.tokenClaimsRequired.desc);
    };
    ClientAuthError2.createNoAuthCodeInServerResponseError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.noAuthorizationCodeFromServer.code, ClientAuthErrorMessage.noAuthorizationCodeFromServer.desc);
    };
    ClientAuthError2.createBindingKeyNotRemovedError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.bindingKeyNotRemovedError.code, ClientAuthErrorMessage.bindingKeyNotRemovedError.desc);
    };
    ClientAuthError2.createLogoutNotSupportedError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.logoutNotSupported.code, ClientAuthErrorMessage.logoutNotSupported.desc);
    };
    ClientAuthError2.createKeyIdMissingError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.keyIdMissing.code, ClientAuthErrorMessage.keyIdMissing.desc);
    };
    ClientAuthError2.createNoNetworkConnectivityError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.noNetworkConnectivity.code, ClientAuthErrorMessage.noNetworkConnectivity.desc);
    };
    ClientAuthError2.createUserCanceledError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.userCanceledError.code, ClientAuthErrorMessage.userCanceledError.desc);
    };
    return ClientAuthError2;
  }(AuthError)
);
/*! @azure/msal-common v12.0.0 2023-04-03 */
var StringUtils = (
  /** @class */
  function() {
    function StringUtils2() {
    }
    StringUtils2.decodeAuthToken = function(authToken) {
      if (StringUtils2.isEmpty(authToken)) {
        throw ClientAuthError.createTokenNullOrEmptyError(authToken);
      }
      var tokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
      var matches = tokenPartsRegex.exec(authToken);
      if (!matches || matches.length < 4) {
        throw ClientAuthError.createTokenParsingError("Given token is malformed: " + JSON.stringify(authToken));
      }
      var crackedToken = {
        header: matches[1],
        JWSPayload: matches[2],
        JWSSig: matches[3]
      };
      return crackedToken;
    };
    StringUtils2.isEmpty = function(str) {
      return typeof str === "undefined" || !str || 0 === str.length;
    };
    StringUtils2.isEmptyObj = function(strObj) {
      if (strObj && !StringUtils2.isEmpty(strObj)) {
        try {
          var obj = JSON.parse(strObj);
          return Object.keys(obj).length === 0;
        } catch (e2) {
        }
      }
      return true;
    };
    StringUtils2.startsWith = function(str, search) {
      return str.indexOf(search) === 0;
    };
    StringUtils2.endsWith = function(str, search) {
      return str.length >= search.length && str.lastIndexOf(search) === str.length - search.length;
    };
    StringUtils2.queryStringToObject = function(query) {
      var obj = {};
      var params = query.split("&");
      var decode = function(s2) {
        return decodeURIComponent(s2.replace(/\+/g, " "));
      };
      params.forEach(function(pair) {
        if (pair.trim()) {
          var _a = pair.split(/=(.+)/g, 2), key = _a[0], value = _a[1];
          if (key && value) {
            obj[decode(key)] = decode(value);
          }
        }
      });
      return obj;
    };
    StringUtils2.trimArrayEntries = function(arr) {
      return arr.map(function(entry) {
        return entry.trim();
      });
    };
    StringUtils2.removeEmptyStringsFromArray = function(arr) {
      return arr.filter(function(entry) {
        return !StringUtils2.isEmpty(entry);
      });
    };
    StringUtils2.jsonParseHelper = function(str) {
      try {
        return JSON.parse(str);
      } catch (e2) {
        return null;
      }
    };
    StringUtils2.matchPattern = function(pattern, input) {
      var regex = new RegExp(pattern.replace(/\\/g, "\\\\").replace(/\*/g, "[^ ]*").replace(/\?/g, "\\?"));
      return regex.test(input);
    };
    return StringUtils2;
  }()
);
/*! @azure/msal-common v12.0.0 2023-04-03 */
var LogLevel;
(function(LogLevel2) {
  LogLevel2[LogLevel2["Error"] = 0] = "Error";
  LogLevel2[LogLevel2["Warning"] = 1] = "Warning";
  LogLevel2[LogLevel2["Info"] = 2] = "Info";
  LogLevel2[LogLevel2["Verbose"] = 3] = "Verbose";
  LogLevel2[LogLevel2["Trace"] = 4] = "Trace";
})(LogLevel || (LogLevel = {}));
var Logger = (
  /** @class */
  function() {
    function Logger2(loggerOptions, packageName, packageVersion) {
      this.level = LogLevel.Info;
      var defaultLoggerCallback = function() {
        return;
      };
      var setLoggerOptions = loggerOptions || Logger2.createDefaultLoggerOptions();
      this.localCallback = setLoggerOptions.loggerCallback || defaultLoggerCallback;
      this.piiLoggingEnabled = setLoggerOptions.piiLoggingEnabled || false;
      this.level = typeof setLoggerOptions.logLevel === "number" ? setLoggerOptions.logLevel : LogLevel.Info;
      this.correlationId = setLoggerOptions.correlationId || Constants.EMPTY_STRING;
      this.packageName = packageName || Constants.EMPTY_STRING;
      this.packageVersion = packageVersion || Constants.EMPTY_STRING;
    }
    Logger2.createDefaultLoggerOptions = function() {
      return {
        loggerCallback: function() {
        },
        piiLoggingEnabled: false,
        logLevel: LogLevel.Info
      };
    };
    Logger2.prototype.clone = function(packageName, packageVersion, correlationId) {
      return new Logger2({ loggerCallback: this.localCallback, piiLoggingEnabled: this.piiLoggingEnabled, logLevel: this.level, correlationId: correlationId || this.correlationId }, packageName, packageVersion);
    };
    Logger2.prototype.logMessage = function(logMessage, options2) {
      if (options2.logLevel > this.level || !this.piiLoggingEnabled && options2.containsPii) {
        return;
      }
      var timestamp = (/* @__PURE__ */ new Date()).toUTCString();
      var logHeader;
      if (!StringUtils.isEmpty(options2.correlationId)) {
        logHeader = "[" + timestamp + "] : [" + options2.correlationId + "]";
      } else if (!StringUtils.isEmpty(this.correlationId)) {
        logHeader = "[" + timestamp + "] : [" + this.correlationId + "]";
      } else {
        logHeader = "[" + timestamp + "]";
      }
      var log = logHeader + " : " + this.packageName + "@" + this.packageVersion + " : " + LogLevel[options2.logLevel] + " - " + logMessage;
      this.executeCallback(options2.logLevel, log, options2.containsPii || false);
    };
    Logger2.prototype.executeCallback = function(level, message, containsPii) {
      if (this.localCallback) {
        this.localCallback(level, message, containsPii);
      }
    };
    Logger2.prototype.error = function(message, correlationId) {
      this.logMessage(message, {
        logLevel: LogLevel.Error,
        containsPii: false,
        correlationId: correlationId || Constants.EMPTY_STRING
      });
    };
    Logger2.prototype.errorPii = function(message, correlationId) {
      this.logMessage(message, {
        logLevel: LogLevel.Error,
        containsPii: true,
        correlationId: correlationId || Constants.EMPTY_STRING
      });
    };
    Logger2.prototype.warning = function(message, correlationId) {
      this.logMessage(message, {
        logLevel: LogLevel.Warning,
        containsPii: false,
        correlationId: correlationId || Constants.EMPTY_STRING
      });
    };
    Logger2.prototype.warningPii = function(message, correlationId) {
      this.logMessage(message, {
        logLevel: LogLevel.Warning,
        containsPii: true,
        correlationId: correlationId || Constants.EMPTY_STRING
      });
    };
    Logger2.prototype.info = function(message, correlationId) {
      this.logMessage(message, {
        logLevel: LogLevel.Info,
        containsPii: false,
        correlationId: correlationId || Constants.EMPTY_STRING
      });
    };
    Logger2.prototype.infoPii = function(message, correlationId) {
      this.logMessage(message, {
        logLevel: LogLevel.Info,
        containsPii: true,
        correlationId: correlationId || Constants.EMPTY_STRING
      });
    };
    Logger2.prototype.verbose = function(message, correlationId) {
      this.logMessage(message, {
        logLevel: LogLevel.Verbose,
        containsPii: false,
        correlationId: correlationId || Constants.EMPTY_STRING
      });
    };
    Logger2.prototype.verbosePii = function(message, correlationId) {
      this.logMessage(message, {
        logLevel: LogLevel.Verbose,
        containsPii: true,
        correlationId: correlationId || Constants.EMPTY_STRING
      });
    };
    Logger2.prototype.trace = function(message, correlationId) {
      this.logMessage(message, {
        logLevel: LogLevel.Trace,
        containsPii: false,
        correlationId: correlationId || Constants.EMPTY_STRING
      });
    };
    Logger2.prototype.tracePii = function(message, correlationId) {
      this.logMessage(message, {
        logLevel: LogLevel.Trace,
        containsPii: true,
        correlationId: correlationId || Constants.EMPTY_STRING
      });
    };
    Logger2.prototype.isPiiLoggingEnabled = function() {
      return this.piiLoggingEnabled || false;
    };
    return Logger2;
  }()
);
/*! @azure/msal-browser v2.35.0 2023-04-03 */
var NativeExtensionMethod;
(function(NativeExtensionMethod2) {
  NativeExtensionMethod2["HandshakeRequest"] = "Handshake";
  NativeExtensionMethod2["HandshakeResponse"] = "HandshakeResponse";
  NativeExtensionMethod2["GetToken"] = "GetToken";
  NativeExtensionMethod2["Response"] = "Response";
})(NativeExtensionMethod || (NativeExtensionMethod = {}));
var BrowserCacheLocation;
(function(BrowserCacheLocation2) {
  BrowserCacheLocation2["LocalStorage"] = "localStorage";
  BrowserCacheLocation2["SessionStorage"] = "sessionStorage";
  BrowserCacheLocation2["MemoryStorage"] = "memoryStorage";
})(BrowserCacheLocation || (BrowserCacheLocation = {}));
var HTTP_REQUEST_TYPE;
(function(HTTP_REQUEST_TYPE2) {
  HTTP_REQUEST_TYPE2["GET"] = "GET";
  HTTP_REQUEST_TYPE2["POST"] = "POST";
})(HTTP_REQUEST_TYPE || (HTTP_REQUEST_TYPE = {}));
var TemporaryCacheKeys;
(function(TemporaryCacheKeys2) {
  TemporaryCacheKeys2["AUTHORITY"] = "authority";
  TemporaryCacheKeys2["ACQUIRE_TOKEN_ACCOUNT"] = "acquireToken.account";
  TemporaryCacheKeys2["SESSION_STATE"] = "session.state";
  TemporaryCacheKeys2["REQUEST_STATE"] = "request.state";
  TemporaryCacheKeys2["NONCE_IDTOKEN"] = "nonce.id_token";
  TemporaryCacheKeys2["ORIGIN_URI"] = "request.origin";
  TemporaryCacheKeys2["RENEW_STATUS"] = "token.renew.status";
  TemporaryCacheKeys2["URL_HASH"] = "urlHash";
  TemporaryCacheKeys2["REQUEST_PARAMS"] = "request.params";
  TemporaryCacheKeys2["SCOPES"] = "scopes";
  TemporaryCacheKeys2["INTERACTION_STATUS_KEY"] = "interaction.status";
  TemporaryCacheKeys2["CCS_CREDENTIAL"] = "ccs.credential";
  TemporaryCacheKeys2["CORRELATION_ID"] = "request.correlationId";
  TemporaryCacheKeys2["NATIVE_REQUEST"] = "request.native";
  TemporaryCacheKeys2["REDIRECT_CONTEXT"] = "request.redirect.context";
})(TemporaryCacheKeys || (TemporaryCacheKeys = {}));
var StaticCacheKeys;
(function(StaticCacheKeys2) {
  StaticCacheKeys2["ACCOUNT_KEYS"] = "msal.account.keys";
  StaticCacheKeys2["TOKEN_KEYS"] = "msal.token.keys";
})(StaticCacheKeys || (StaticCacheKeys = {}));
var InMemoryCacheKeys;
(function(InMemoryCacheKeys2) {
  InMemoryCacheKeys2["WRAPPER_SKU"] = "wrapper.sku";
  InMemoryCacheKeys2["WRAPPER_VER"] = "wrapper.version";
})(InMemoryCacheKeys || (InMemoryCacheKeys = {}));
var ApiId;
(function(ApiId2) {
  ApiId2[ApiId2["acquireTokenRedirect"] = 861] = "acquireTokenRedirect";
  ApiId2[ApiId2["acquireTokenPopup"] = 862] = "acquireTokenPopup";
  ApiId2[ApiId2["ssoSilent"] = 863] = "ssoSilent";
  ApiId2[ApiId2["acquireTokenSilent_authCode"] = 864] = "acquireTokenSilent_authCode";
  ApiId2[ApiId2["handleRedirectPromise"] = 865] = "handleRedirectPromise";
  ApiId2[ApiId2["acquireTokenByCode"] = 866] = "acquireTokenByCode";
  ApiId2[ApiId2["acquireTokenSilent_silentFlow"] = 61] = "acquireTokenSilent_silentFlow";
  ApiId2[ApiId2["logout"] = 961] = "logout";
  ApiId2[ApiId2["logoutPopup"] = 962] = "logoutPopup";
})(ApiId || (ApiId = {}));
var InteractionType;
(function(InteractionType2) {
  InteractionType2["Redirect"] = "redirect";
  InteractionType2["Popup"] = "popup";
  InteractionType2["Silent"] = "silent";
  InteractionType2["None"] = "none";
})(InteractionType || (InteractionType = {}));
var InteractionStatus;
(function(InteractionStatus2) {
  InteractionStatus2["Startup"] = "startup";
  InteractionStatus2["Login"] = "login";
  InteractionStatus2["Logout"] = "logout";
  InteractionStatus2["AcquireToken"] = "acquireToken";
  InteractionStatus2["SsoSilent"] = "ssoSilent";
  InteractionStatus2["HandleRedirect"] = "handleRedirect";
  InteractionStatus2["None"] = "none";
})(InteractionStatus || (InteractionStatus = {}));
var WrapperSKU;
(function(WrapperSKU2) {
  WrapperSKU2["React"] = "@azure/msal-react";
  WrapperSKU2["Angular"] = "@azure/msal-angular";
})(WrapperSKU || (WrapperSKU = {}));
var CacheLookupPolicy;
(function(CacheLookupPolicy2) {
  CacheLookupPolicy2[CacheLookupPolicy2["Default"] = 0] = "Default";
  CacheLookupPolicy2[CacheLookupPolicy2["AccessToken"] = 1] = "AccessToken";
  CacheLookupPolicy2[CacheLookupPolicy2["AccessTokenAndRefreshToken"] = 2] = "AccessTokenAndRefreshToken";
  CacheLookupPolicy2[CacheLookupPolicy2["RefreshToken"] = 3] = "RefreshToken";
  CacheLookupPolicy2[CacheLookupPolicy2["RefreshTokenAndNetwork"] = 4] = "RefreshTokenAndNetwork";
  CacheLookupPolicy2[CacheLookupPolicy2["Skip"] = 5] = "Skip";
})(CacheLookupPolicy || (CacheLookupPolicy = {}));
/*! @azure/msal-browser v2.35.0 2023-04-03 */
var BrowserConfigurationAuthErrorMessage = {
  redirectUriNotSet: {
    code: "redirect_uri_empty",
    desc: "A redirect URI is required for all calls, and none has been set."
  },
  postLogoutUriNotSet: {
    code: "post_logout_uri_empty",
    desc: "A post logout redirect has not been set."
  },
  storageNotSupportedError: {
    code: "storage_not_supported",
    desc: "Given storage configuration option was not supported."
  },
  noRedirectCallbacksSet: {
    code: "no_redirect_callbacks",
    desc: "No redirect callbacks have been set. Please call setRedirectCallbacks() with the appropriate function arguments before continuing. More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
  },
  invalidCallbackObject: {
    code: "invalid_callback_object",
    desc: "The object passed for the callback was invalid. More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
  },
  stubPcaInstanceCalled: {
    code: "stubbed_public_client_application_called",
    desc: "Stub instance of Public Client Application was called. If using msal-react, please ensure context is not used without a provider. For more visit: aka.ms/msaljs/browser-errors"
  },
  inMemRedirectUnavailable: {
    code: "in_mem_redirect_unavailable",
    desc: "Redirect cannot be supported. In-memory storage was selected and storeAuthStateInCookie=false, which would cause the library to be unable to handle the incoming hash. If you would like to use the redirect API, please use session/localStorage or set storeAuthStateInCookie=true."
  },
  entropyNotProvided: {
    code: "entropy_not_provided",
    desc: "The available browser crypto interface requires entropy set via system.cryptoOptions.entropy configuration option."
  }
};
var BrowserConfigurationAuthError = (
  /** @class */
  function(_super) {
    __extends$1(BrowserConfigurationAuthError2, _super);
    function BrowserConfigurationAuthError2(errorCode, errorMessage) {
      var _this = _super.call(this, errorCode, errorMessage) || this;
      _this.name = "BrowserConfigurationAuthError";
      Object.setPrototypeOf(_this, BrowserConfigurationAuthError2.prototype);
      return _this;
    }
    BrowserConfigurationAuthError2.createRedirectUriEmptyError = function() {
      return new BrowserConfigurationAuthError2(BrowserConfigurationAuthErrorMessage.redirectUriNotSet.code, BrowserConfigurationAuthErrorMessage.redirectUriNotSet.desc);
    };
    BrowserConfigurationAuthError2.createPostLogoutRedirectUriEmptyError = function() {
      return new BrowserConfigurationAuthError2(BrowserConfigurationAuthErrorMessage.postLogoutUriNotSet.code, BrowserConfigurationAuthErrorMessage.postLogoutUriNotSet.desc);
    };
    BrowserConfigurationAuthError2.createStorageNotSupportedError = function(givenStorageLocation) {
      return new BrowserConfigurationAuthError2(BrowserConfigurationAuthErrorMessage.storageNotSupportedError.code, BrowserConfigurationAuthErrorMessage.storageNotSupportedError.desc + " Given Location: " + givenStorageLocation);
    };
    BrowserConfigurationAuthError2.createRedirectCallbacksNotSetError = function() {
      return new BrowserConfigurationAuthError2(BrowserConfigurationAuthErrorMessage.noRedirectCallbacksSet.code, BrowserConfigurationAuthErrorMessage.noRedirectCallbacksSet.desc);
    };
    BrowserConfigurationAuthError2.createStubPcaInstanceCalledError = function() {
      return new BrowserConfigurationAuthError2(BrowserConfigurationAuthErrorMessage.stubPcaInstanceCalled.code, BrowserConfigurationAuthErrorMessage.stubPcaInstanceCalled.desc);
    };
    BrowserConfigurationAuthError2.createInMemoryRedirectUnavailableError = function() {
      return new BrowserConfigurationAuthError2(BrowserConfigurationAuthErrorMessage.inMemRedirectUnavailable.code, BrowserConfigurationAuthErrorMessage.inMemRedirectUnavailable.desc);
    };
    BrowserConfigurationAuthError2.createEntropyNotProvided = function() {
      return new BrowserConfigurationAuthError2(BrowserConfigurationAuthErrorMessage.entropyNotProvided.code, BrowserConfigurationAuthErrorMessage.entropyNotProvided.desc);
    };
    return BrowserConfigurationAuthError2;
  }(AuthError)
);
/*! @azure/msal-browser v2.35.0 2023-04-03 */
var stubbedPublicClientApplication = {
  initialize: function() {
    return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
  },
  acquireTokenPopup: function() {
    return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
  },
  acquireTokenRedirect: function() {
    return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
  },
  acquireTokenSilent: function() {
    return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
  },
  acquireTokenByCode: function() {
    return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
  },
  getAllAccounts: function() {
    return [];
  },
  getAccountByHomeId: function() {
    return null;
  },
  getAccountByUsername: function() {
    return null;
  },
  getAccountByLocalId: function() {
    return null;
  },
  handleRedirectPromise: function() {
    return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
  },
  loginPopup: function() {
    return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
  },
  loginRedirect: function() {
    return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
  },
  logout: function() {
    return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
  },
  logoutRedirect: function() {
    return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
  },
  logoutPopup: function() {
    return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
  },
  ssoSilent: function() {
    return Promise.reject(BrowserConfigurationAuthError.createStubPcaInstanceCalledError());
  },
  addEventCallback: function() {
    return null;
  },
  removeEventCallback: function() {
    return;
  },
  addPerformanceCallback: function() {
    return "";
  },
  removePerformanceCallback: function() {
    return false;
  },
  enableAccountStorageEvents: function() {
    return;
  },
  disableAccountStorageEvents: function() {
    return;
  },
  getTokenCache: function() {
    throw BrowserConfigurationAuthError.createStubPcaInstanceCalledError();
  },
  getLogger: function() {
    throw BrowserConfigurationAuthError.createStubPcaInstanceCalledError();
  },
  setLogger: function() {
    return;
  },
  setActiveAccount: function() {
    return;
  },
  getActiveAccount: function() {
    return null;
  },
  initializeWrapperLibrary: function() {
    return;
  },
  setNavigationClient: function() {
    return;
  },
  getConfiguration: function() {
    throw BrowserConfigurationAuthError.createStubPcaInstanceCalledError();
  }
};
const defaultMsalContext = {
  instance: stubbedPublicClientApplication,
  inProgress: InteractionStatus.None,
  accounts: [],
  logger: /* @__PURE__ */ new Logger({})
};
const MsalContext = /* @__PURE__ */ reactExports.createContext(defaultMsalContext);
MsalContext.Consumer;
var MsalProviderActionType;
(function(MsalProviderActionType2) {
  MsalProviderActionType2["UNBLOCK_INPROGRESS"] = "UNBLOCK_INPROGRESS";
  MsalProviderActionType2["EVENT"] = "EVENT";
})(MsalProviderActionType || (MsalProviderActionType = {}));
const useMsal = () => reactExports.useContext(MsalContext);
const scope = "https://yatafans.onmicrosoft.com/f10e1c0a-7e6f-4a4f-86cc-f29123a38800/YataFansAppBackend";
const silentRequest = {
  scopes: [scope, "openid", "offline_access"]
};
const LoginButton = () => {
  const router2 = useNavigate();
  const location = useLocation();
  const imgUrl = useAppSelector(selectImgUrl);
  useMsal();
  useAppDispatch();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const username = useAppSelector(
    (state) => {
      var _a, _b;
      return ((_a = state.auth.crmUser) == null ? void 0 : _a.firstName) + " " + ((_b = state.auth.crmUser) == null ? void 0 : _b.lastName);
    }
  );
  const windowSize = useAppSelector(selectWindowSize);
  const isAdmin = useAppSelector(selectIsAdmin);
  reactExports.useState(false);
  const [btnPosition, setBtnPosition] = reactExports.useState({ left: 0, bottom: 0 });
  const accountBtnRef = reactExports.useRef(null);
  const onMobile = windowSize === "mobile";
  const atPaymentPage = location.pathname === "/shopping-cart/confirmation";
  const atAdminLoginPage = location.pathname === "/admin/login";
  location.pathname === "/admin/pickup/[id]";
  const getButtonDimensions = () => {
    var _a, _b;
    setBtnPosition({
      left: (_a = accountBtnRef.current) == null ? void 0 : _a.getBoundingClientRect().left,
      bottom: (_b = accountBtnRef.current) == null ? void 0 : _b.getBoundingClientRect().bottom
    });
  };
  reactExports.useEffect(() => {
    window.addEventListener("resize", getButtonDimensions, true);
    return () => window.removeEventListener("resize", getButtonDimensions, true);
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "div",
    {
      className: "relative w-16 mx-1 lg:w-auto lg:min-w-fit  " + (atPaymentPage || atAdminLoginPage ? "hidden lg:h-0" : "block lg:h-3/5"),
      children: /* @__PURE__ */ jsxs(
        "button",
        {
          ref: accountBtnRef,
          className: "flex flex-col items-center justify-center w-full h-full p-1 transition-colors duration-300 ease-in-out rounded-lg lg:p-2 lg:flex-row lg:bg-yata-deep lg:hover:bg-yata group",
          onClick: (e2) => {
            closeDrawer();
            router2(`${"/ViewYata-React/"}account`);
          },
          children: [
            isAdmin ? /* @__PURE__ */ jsx("div", { className: "relative w-5 h-5 lg:w-4 lg:hidden", children: /* @__PURE__ */ jsx("img", { src: imgUrl + "/myAccount/dropdownList/info-default.svg", alt: "pic", className: "object-contain" }) }) : /* @__PURE__ */ jsxs("div", { className: "relative w-8 h-8 lg:w-4 lg:h-4", children: [
              onMobile && /* @__PURE__ */ jsx("img", { src: imgUrl + "/mobile/profile.svg", alt: "pic", className: "object-contain" }),
              windowSize == "laptop" && /* @__PURE__ */ jsx("img", { src: imgUrl + "/homepage/navbar/my-account.svg", alt: "pic", className: "object-contain" })
            ] }),
            /* @__PURE__ */ jsx(
              "p",
              {
                className: `text-sm cursor-pointer text-white ${onMobile ? "" : "mx-1"}`,
                children: isAuthenticated ? onMobile ? isAdmin ? "" : "我的帳戶" : isAdmin ? "yata-admin" : username : onMobile ? "登入" : "登入/註冊"
              }
            )
          ]
        }
      )
    }
  ) });
};
const TickSvg = (props) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      width: 16,
      height: 16,
      ...props,
      children: /* @__PURE__ */ jsx("path", { d: "M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" })
    }
  );
};
const AddToCartPopup = ({ isAddToCart, setIsAddToCart }) => {
  reactExports.useEffect(() => {
    if (isAddToCart && setIsAddToCart) {
      setTimeout(() => {
        setIsAddToCart(null);
      }, 4e3);
    }
  }, [isAddToCart]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "absolute flex z-20 flex-col items-center -top-[4.5rem] transition-all ease-in-out duration-300 w-[20rem]",
      style: isAddToCart != null ? { opacity: 1, visibility: "visible", pointerEvents: "initial" } : { opacity: 0, visibility: "hidden", pointerEvents: "none" },
      onClick: (e2) => e2.stopPropagation(),
      children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center w-auto p-2 bg-white border border-yata-deep", children: isAddToCart && /* @__PURE__ */ jsxs(Fragment, { children: [
          isAddToCart.success && /* @__PURE__ */ jsx("div", { className: "p-[0.4rem] mr-2 rounded-full w-8 h-8 flex items-center justify-center bg-yata-deep", children: /* @__PURE__ */ jsx(TickSvg, { fill: "#FFF" }) }),
          /* @__PURE__ */ jsxs("div", { className: "z-30 flex flex-col items-start", children: [
            isAddToCart.success && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs text-black", children: "成功加到購物車" }),
              /* @__PURE__ */ jsx(Link, { to: "/ViewYata-React/shopping-cart", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center text-sm border-b text-yata-deep border-yata-deep", children: [
                /* @__PURE__ */ jsx("span", { className: "mr-1", children: "前往付款" }),
                /* @__PURE__ */ jsx("div", { className: "w-[0.6rem] h-[0.6rem] flex items-center mr-1", children: /* @__PURE__ */ jsx(ChevronRightSvg, { fill: "#82A90E" }) })
              ] }) })
            ] }),
            isAddToCart.success == false && /* @__PURE__ */ jsx("button", { className: "text-sm text-black whitespace-pre-wrap max-w-[8rem] p-[0.4rem] h-8 ", children: isAddToCart.err })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `
        absolute z-20 -bottom-[0.55rem] w-5 h-5 rotate-[225deg] bg-white
        border-t border-yata-deep border-r border-r-transparent border-b border-b-transparent 
        border-l transition-color ease-in-out duration-300
      `
          }
        )
      ]
    }
  );
};
const ItemCard = ({ detail, cardRef, categoryId = 0, setTrigger }) => {
  const router2 = useNavigate();
  const imgUrl = useAppSelector(selectImgUrl);
  const location = useLocation();
  useAppDispatch();
  const { instance } = useMsal();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const [isAddToCart, setIsAddToCart] = reactExports.useState(null);
  const [btnLoading, setBtnLoading] = reactExports.useState(false);
  const [like, setLike] = reactExports.useState("");
  const imgPath2 = detail.images.length > 0 ? detail.images[0].images_url : void 0;
  const saveAmt = parseFloat(detail.rsp) - parseFloat(detail.psp);
  reactExports.useEffect(() => {
    if (detail.wish_list)
      setLike(detail.plu);
  }, [detail]);
  const likeChangeHandler = async (e2) => {
    e2.stopPropagation();
    router2(`${"/ViewYata-React/"}account`);
  };
  const toggleSubmit = async () => {
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "div",
    {
      ref: cardRef,
      onClick: () => router2(`/product/${detail.plu}?id=${categoryId}`),
      className: "relative flex-none px-2 py-2 bg-white border-2 border-dotted rounded-lg lg:mb-2 lg:mr-2 h-60 w-44 lg:w-97 border-yata-dotted transition-all duration-300 ease-in-out ",
      children: /* @__PURE__ */ jsxs("div", { className: "relative w-full h-full", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute z-10 object-contain w-5 h-5 right-2 top-2", children: /* @__PURE__ */ jsx("img", { src: like == detail.plu ? imgUrl + "/homepage/heart-selected.svg" : imgUrl + "/homepage/heart-default.svg", alt: "heart", className: "object-fill", onClick: likeChangeHandler }) }),
        /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col items-center cursor-pointer h-5/12", children: [
          /* @__PURE__ */ jsx("div", { className: "relative object-contain overflow-hidden h-28 w-28", children: imgPath2 && /* @__PURE__ */ jsx("img", { src: imgPath2, alt: "product-card-img", className: "fill" }) }),
          detail.promotions.length > 0 && /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 flex items-center h-6 max-w-full px-1 text-xs font-light text-white rounded-sm bg-red-500/90 ", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden whitespace-nowrap text-ellipsis", children: Object.values(detail.promotions[0]) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full pt-2 overflow-hidden text-xs cursor-pointer h-6/12", children: [
          /* @__PURE__ */ jsx("div", { className: "h-8 text-cat-pro-list", children: detail.full_name_c }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-row items-center justify-between w-auto h-7 ", children: saveAmt ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { className: "text-sm font-bold align-text-bottom text-red-text", children: [
              "$",
              detail.psp
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "pt-1 text-xs text-gray-500 line-through align-text-bottom decoration-2 decoration-gray-500", children: [
              "$",
              detail.rsp
            ] })
          ] }) : /* @__PURE__ */ jsxs("div", { className: "text-sm font-bold align-text-bottom text-red-text", children: [
            "$",
            detail.rsp
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            className: "relative flex justify-center w-full py-2 mt-1 space-x-1 text-sm text-white rounded-md bg-yata-deep",
            onClick: async (e2) => {
              e2.stopPropagation();
              if (detail.configurable == 0 && detail.product_status == 0 && detail.inventory_status == 1) {
                if (isAuthenticated) {
                  await toggleSubmit();
                } else {
                  localStorage.setItem("redirectUrl", location.pathname);
                  instance.loginRedirect(silentRequest);
                }
              } else {
                router2(`/product/${detail.plu}?id=${categoryId}`);
              }
            },
            children: [
              detail.configurable != 0 ? /* @__PURE__ */ jsx("span", { children: "產品詳情" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                detail.product_status == 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
                  detail.inventory_status == 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx("div", { className: "relative object-contain w-5 h-5", children: /* @__PURE__ */ jsx("img", { src: imgUrl + "/homepage/navbar/cart.svg", alt: "pic", className: "object-fill" }) }),
                    /* @__PURE__ */ jsx("span", { children: !btnLoading ? "加入購物車" : "加入中" })
                  ] }),
                  detail.inventory_status == 0 && /* @__PURE__ */ jsx("span", { children: "已售罄" })
                ] }),
                detail.product_status == 1 && /* @__PURE__ */ jsx("span", { children: "已下架" }),
                detail.product_status == 2 && /* @__PURE__ */ jsx("span", { children: "即將開售" })
              ] }),
              /* @__PURE__ */ jsx(
                AddToCartPopup,
                {
                  isAddToCart,
                  setIsAddToCart
                }
              )
            ]
          }
        )
      ] })
    }
  ) });
};
function CategoryBox({ cats, row }) {
  const router2 = useNavigate();
  const rowRef = reactExports.useRef(null);
  const handleClick = (direction) => {
    if (rowRef.current) {
      const { scrollLeft } = rowRef.current;
      const scrollTo = direction === "left" ? scrollLeft - 480 : scrollLeft + 480;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `flex flex-row w-full mt-3 justify-between lg:justify-start rounded-lg lg:h-14 h-9`,
        style: { backgroundColor: row.header_color },
        children: [
          /* @__PURE__ */ jsxs("h1", { className: `flex my-auto lg:w-2/12 ml-3 whitespace-nowrap`, children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `h-auto pr-2 mr-2 rounded `,
                style: { background: row.button_color }
              }
            ),
            row.name_c
          ] }),
          /* @__PURE__ */ jsx("div", { className: "justify-end hidden lg:flex whitespace-nowrap lg:w-9/12", children: row.children.length > 0 && row.children.map((tab, idx) => {
            return /* @__PURE__ */ jsx(
              "button",
              {
                style: { background: row.button_color },
                className: `flex px-3 py-2 my-auto ml-2 text-sm rounded-full underLg:hidden`,
                onClick: () => router2(`/category/${tab.url_path}`),
                children: tab.name
              },
              `home-cat-${tab.id}-${idx}`
            );
          }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: `flex justify-end items-center my-auto pr-1 space-x-1 whitespace-nowrap lg:w-1/12 ml-1 mr-2`,
              children: /* @__PURE__ */ jsx(Link, { to: { pathname: `/ViewYata-React/category/${row.url_path}` }, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsx("span", { children: "更多" }),
                /* @__PURE__ */ jsx(ChevronRightSvg, { height: 18, fill: row.button_color })
              ] }) })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `rounded-bl-lg rounded-br-lg py-3 lg:mb-10 lg:px-12 scrollbar-hide`,
        style: { background: row.background_color },
        children: /* @__PURE__ */ jsx(
          p$6,
          {
            className: "flex overflow-scroll scrollbar-hide",
            innerRef: rowRef,
            children: row.product_list.length > 0 && row.product_list.map((detail, i2) => /* @__PURE__ */ jsx("div", { className: "mx-1", children: /* @__PURE__ */ jsx(ItemCard, { detail, categoryId: row.category_id }) }, `product-list-${i2}`))
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `underLg:hidden cursor-pointer absolute top-[55%] justify-center translate-y-[-50%] left-2 flex items-center w-8 h-8 rounded-full shadow-sm opacity-80`,
        style: { background: row.button_color },
        onClick: () => handleClick("left"),
        children: /* @__PURE__ */ jsx("div", { className: "relative flex items-center object-contain w-4 h-4 rotate-180 ", children: /* @__PURE__ */ jsx(ChevronRightSvg, { fill: "#FFF" }) })
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `underLg:hidden cursor-pointer absolute top-[55%] translate-y-[-50%] right-2 flex items-center w-8 h-8 rounded-full justify-center shadow-sm opacity-80`,
        style: { background: row.button_color },
        onClick: () => handleClick("right"),
        children: /* @__PURE__ */ jsx("div", { className: "relative flex items-center object-contain w-4 h-4 ", children: /* @__PURE__ */ jsx(ChevronRightSvg, { fill: "#FFF" }) })
      }
    )
  ] });
}
const homeCat = [
  {
    type: "期間限定",
    route: "/seasonal-limited",
    barColor: "cat-yellow-bar",
    textColor: "cat-yellow-text",
    bgColor: "cat-yellow",
    icon: "limited.svg",
    next: "更多",
    tabs: [
      { name: "Tamashii 人氣卡通預售", route: "/tamashii" },
      { name: "一田春日美肌提案", route: "/spring-skincare" },
      { name: "一田春日嬰兒用品展", route: "/spring-bb-item" }
    ]
  },
  {
    type: "店長推介",
    route: "/recommend",
    barColor: "cat-green-bar",
    textColor: "cat-green-text",
    bgColor: "cat-green",
    icon: "recommend.svg",
    next: "更多",
    tabs: [
      { name: "抗疫推介", route: "/prevent-covid" },
      { name: "荀貨推介", route: "/good-product" },
      { name: "美妝推介", route: "/skincare" }
    ]
  },
  {
    type: "母嬰專區",
    route: "/maternal",
    barColor: "cat-pink-bar",
    textColor: "cat-pink-text",
    bgColor: "cat-pink",
    icon: "baby.svg",
    next: "更多",
    tabs: [
      { name: "新手孕媽媽必備", route: "/new-mum" },
      { name: "孕媽媽產前準備", route: "/pregnant" },
      { name: "BB媽產後護理", route: "/postpartum" },
      { name: "護理用品", route: "/diapers" },
      { name: "嬰兒服飾", route: "/postpartum" }
    ]
  },
  {
    type: "超市精選",
    route: "/supermarket",
    barColor: "cat-blue-bar",
    textColor: "cat-blue-text",
    bgColor: "cat-blue",
    icon: "supermarket.svg",
    next: "更多",
    tabs: [
      { name: "新手孕媽媽必備", route: "/new-mum" },
      { name: "孕媽媽產前準備", route: "/pregnant" },
      { name: "BB媽產後護理", route: "/postpartum" },
      { name: "護理用品", route: "/diapers" },
      { name: "嬰兒服飾", route: "/postpartum" }
    ]
  },
  {
    type: "百貨精選",
    route: "/department",
    barColor: "cat-orange-bar",
    textColor: "cat-orange-text",
    bgColor: "cat-orange",
    icon: "department.svg",
    next: "更多",
    tabs: [
      { name: "新手孕媽媽必備", route: "/new-mum" },
      { name: "孕媽媽產前準備", route: "/pregnant" },
      { name: "BB媽產後護理", route: "/postpartum" },
      { name: "護理用品", route: "/diapers" },
      { name: "嬰兒服飾", route: "/postpartum" }
    ]
  },
  {
    type: "百貨精選",
    route: "/department",
    barColor: "cat-orange-bar",
    textColor: "cat-orange-text",
    bgColor: "cat-orange",
    icon: "department.svg",
    next: "更多",
    tabs: [
      { name: "新手孕媽媽必備", route: "/new-mum" },
      { name: "孕媽媽產前準備", route: "/pregnant" },
      { name: "BB媽產後護理", route: "/postpartum" },
      { name: "護理用品", route: "/diapers" },
      { name: "嬰兒服飾", route: "/postpartum" }
    ]
  },
  {
    next: "",
    type: "百貨精選",
    route: "",
    barColor: "white",
    textColor: "yata-brown",
    bgColor: "white",
    icon: "heart-selected.svg",
    tabs: []
  }
];
function CategoryContainer({ carousel }) {
  reactExports.useEffect(() => {
  }, [carousel]);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "lg:flex lg:flex-row", children: /* @__PURE__ */ jsx("div", { className: "lg:w-full lg:mt-4", children: carousel.length > 0 && carousel.map((row, idx) => /* @__PURE__ */ jsx(reactExports.Fragment, { children: /* @__PURE__ */ jsx(CategoryBox, { cats: homeCat[0], row }) }, "carousel-list-" + idx)) }) }) });
}
function LowerBanner({ images }) {
  const router2 = useNavigate();
  const imgUrl = useAppSelector(selectImgUrl);
  return /* @__PURE__ */ jsx(Fragment, { children: images.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex w-full mb-10 space-x-2 lg:space-x-3", children: images.map((img, idx) => /* @__PURE__ */ jsx(
    "div",
    {
      className: "aspect-[990/326] relative w-1/2 rounded-lg overflow-hidden",
      onClick: () => {
        router2(img.url_path != "" ? img.url_path : "/");
      },
      children: /* @__PURE__ */ jsx("img", { src: imgUrl + img.images_url, alt: "pic", className: "object-cover" })
    },
    "low-banner-" + idx
  )) }) });
}
const Home = () => {
  const dispatch = useAppDispatch();
  useAppContext();
  const [carousel, setCarousel] = reactExports.useState([]);
  const [banners, setBanner] = reactExports.useState(initBannerList);
  reactExports.useEffect(() => {
    dispatch(onLoading());
    const getBannersAndCarousel = async () => {
      const middleBanner = await getBannerImageApi("homepage-middle-banner");
      const narrowImage = await getBannerImageApi(
        "homepage-middle-narrow-banner"
      );
      const bottomImage = await getBannerImageApi("homepage-bottom");
      const homeSlider = await getBannerImageApi("homepage-top-slider");
      const result = await dispatch(getCarouselApi(1));
      setTimeout(() => {
        setBanner({
          topSlider: homeSlider,
          middleBanner,
          narrowBanner: narrowImage,
          bottomBanner: bottomImage
        });
        if (result.payload)
          setCarousel(result.payload.items);
        dispatch(onLoaded());
      }, 1e3);
    };
    getBannersAndCarousel();
  }, []);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Loading, { isLoading: carousel.length == 0 }),
    /* @__PURE__ */ jsxs("div", { className: "relative lg:mt-3 underLg:mx-2 lg:mx-[12%]", children: [
      /* @__PURE__ */ jsx(Slider, { images: banners.topSlider }),
      /* @__PURE__ */ jsx(
        HeadBanner,
        {
          middleImages: banners.middleBanner,
          narrowImages: banners.narrowBanner
        }
      ),
      carousel.length > 0 && /* @__PURE__ */ jsx(CategoryContainer, { carousel }),
      /* @__PURE__ */ jsx(LowerBanner, { images: banners.bottomBanner })
    ] })
  ] });
};
const ReturnButton = ({
  btnName,
  path = "/account",
  goBack,
  clickFunction
}) => {
  const router2 = useNavigate();
  const dispatch = useAppDispatch();
  return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(
    "button",
    {
      className: "flex items-center justify-center w-full h-12 py-2 mx-6 text-left text-white border lg:max-w-[16rem] transition-all ease-in-out duration-150 hover:bg-yata rounded-lg hover:border-2 hover:border-yata bg-yata-deep",
      onClick: () => {
        dispatch(onLoading());
        !goBack ? router2(path) : router2(-1);
      },
      children: /* @__PURE__ */ jsx("div", { className: "font-medium", children: btnName })
    }
  ) });
};
const Login = () => {
  useNavigate();
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "mt-20", children: [
    /* @__PURE__ */ jsx("div", { className: "w-full flex justify-center h-40", children: "閹割版本，原登陸轉去Outh2.0畫面，這邊不做。" }),
    /* @__PURE__ */ jsx(ReturnButton, { btnName: "返回", goBack: true })
  ] }) });
};
const Input = ({
  placeholder,
  value,
  title,
  isRequired,
  disable,
  star,
  style,
  width,
  require: require2,
  onChange,
  type,
  pattern,
  handleFocus,
  maxLength
}) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `flex items-center lg:items-start justify-between px-4 mt-5 ${width ? width : "w-full"} ${style ? "flex-col" : "lg:flex-col"}`,
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `flex lg:items-start ${style ? "w-full" : "w-2/6"} lg:mx-1 lg:mb-2`,
            children: [
              star && /* @__PURE__ */ jsx("span", { className: "text-[#FF0000]", children: "*" }),
              /* @__PURE__ */ jsx("span", { className: "lg:w-full", children: title })
            ]
          }
        ),
        isRequired ? /* @__PURE__ */ jsx(
          "input",
          {
            className: "w-full px-3 py-2 border-2 rounded-lg border-grey placeholder-[#b7b7b7] focus:outline-none h-12",
            type,
            placeholder,
            required: require2,
            value,
            maxLength,
            pattern,
            disabled: disable,
            onChange,
            onBlur: handleFocus
          }
        ) : /* @__PURE__ */ jsx(
          "textarea",
          {
            rows: 2,
            className: "w-full px-3 min-h-[3rem] max-h-[16rem] py-2 border-2 rounded-lg border-grey placeholder-[#b7b7b7] focus:outline-none",
            placeholder,
            disabled: disable,
            value,
            onChange,
            onBlur: handleFocus
          }
        )
      ]
    }
  );
};
const options = [
  { tc: "查詢", en: "Enquiry" },
  { tc: "稱讚", en: "Compliment" },
  { tc: "投訴", en: "Complaint" },
  { tc: "其他", en: "Others" }
];
const ContactUs = () => {
  useAppDispatch();
  useNavigate();
  useLocation();
  const imgUrl = useAppSelector(selectImgUrl);
  const user = useAppSelector(selectUserInfo);
  useAppSelector(selectWindowSize);
  const initialState2 = {
    MemberId: user == null ? void 0 : user.memberNo,
    EmailAddress: user == null ? void 0 : user.email,
    CaseCategory: "Enquiry",
    RelatedSectionScore: "eShop",
    CaseTopic: "",
    CaseDescription: "",
    OrderNumber: "",
    PrimaryImage: ""
  };
  const [dataSend, setDataSend] = reactExports.useState(initialState2);
  const initialErrorState = {
    EmailAddress: false,
    CaseCategory: false,
    CaseTopic: false
  };
  const [error, setError] = reactExports.useState(initialErrorState);
  const [fileName, setFileName] = reactExports.useState("");
  const [hover, setHover] = reactExports.useState(false);
  const hiddenFileInput = reactExports.useRef(null);
  const fileNameRef = reactExports.useRef(null);
  const handleClick = () => {
    var _a;
    (_a = hiddenFileInput.current) == null ? void 0 : _a.click();
  };
  const handleChange = (event) => {
    const file = event.target.files[0];
    console.log("file", file);
    if (file) {
      setFileName(file.name);
    }
    if (file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.result) {
          reader.result.toString().split(",")[1];
        }
      };
    }
  };
  const handleRemove = () => {
    setFileName("");
    setHover(false);
    setDataSend({ ...dataSend, PrimaryImage: "" });
  };
  const handleSubmit = async (e2) => {
    e2.preventDefault();
    setError(initialErrorState);
    let hasErr = false;
    await Object.keys(initialErrorState).map((err) => {
      if (dataSend[err] == "" || dataSend[err] == void 0) {
        setError({ ...error, [err]: true });
        hasErr = true;
      }
    });
    if (hasErr)
      return;
    alert("傳送成功!(閹割版並未真的與後端串聯)");
  };
  return /* @__PURE__ */ jsxs("div", { className: "lg:mt-6 lg:w-9/12 lg:m-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center px-6 space-x-2 text-lg font-bold", children: [
      /* @__PURE__ */ jsx("div", { className: "min-w-[1.25rem] min-h-[1.25rem] max-h-[28px] max-w-[28px] mr-1 flex items-center ", children: /* @__PURE__ */ jsx("div", { className: "w-5 h-5 rounded-md bg-yata" }) }),
      /* @__PURE__ */ jsx("span", { className: " lg:text-yata", children: "聯絡我們" })
    ] }),
    /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: handleSubmit,
        className: "rounded-lg pt-2.5 space-y-5 lg:mt-4 lg:mb-8 lg:bg-grey lg:px-4",
        children: [
          /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              Input,
              {
                title: "您的電郵地址",
                star: true,
                style: true,
                isRequired: true,
                type: "email",
                value: dataSend.EmailAddress ?? "",
                handleFocus: () => setError({ ...error, EmailAddress: true }),
                onChange: (e2) => setDataSend({ ...dataSend, EmailAddress: e2.target.value })
              }
            ),
            error.EmailAddress && (!dataSend.EmailAddress || !/\S+@\S+\.\S+/.test(dataSend.EmailAddress)) && /* @__PURE__ */ jsx("span", { className: "mx-6 my-2 text-[#FF0000] text-sm", children: "請輸入有效的電郵地址" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "px-5", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#FF0000]", children: "*" }),
              /* @__PURE__ */ jsx("label", { className: "mb-1 ", children: "個案類別" })
            ] }),
            /* @__PURE__ */ jsx(
              "select",
              {
                onChange: (e2) => setDataSend({ ...dataSend, CaseCategory: e2.target.value }),
                required: true,
                className: "w-full p-2.5 text-yata-brown bg-white focus:outline-none border-2 rounded-lg border-grey",
                placeholder: "請選擇您的個案類別",
                children: options.map((e2, i2) => {
                  return /* @__PURE__ */ jsx("option", { value: e2.en, children: e2.tc }, i2);
                })
              }
            ),
            error.CaseCategory && !dataSend.CaseCategory && /* @__PURE__ */ jsx("span", { className: "mx-6 my-2 text-[#FF0000] text-sm" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "", children: [
            /* @__PURE__ */ jsx(
              Input,
              {
                title: "個案主題",
                star: true,
                style: true,
                isRequired: true,
                placeholder: "請提供您的個案主題",
                value: dataSend.CaseTopic ?? "",
                maxLength: 100,
                handleFocus: () => setError({ ...error, CaseTopic: true }),
                onChange: (e2) => setDataSend({ ...dataSend, CaseTopic: e2.target.value })
              }
            ),
            error.CaseTopic && !dataSend.CaseTopic && /* @__PURE__ */ jsx("span", { className: "mx-6 my-2 text-[#FF0000] text-sm", children: "請輸入個案主題" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "", children: [
            /* @__PURE__ */ jsx(
              Input,
              {
                title: "個案內容",
                style: true,
                placeholder: "請講解您的個案內容或意見",
                value: dataSend.CaseDescription ?? "",
                onChange: (e2) => setDataSend({ ...dataSend, CaseDescription: e2.target.value })
              }
            ),
            error.CaseDescription && !dataSend.CaseDescription && /* @__PURE__ */ jsx("span", { className: "mx-6 my-2 text-[#FF0000] text-sm", children: "請輸入個案內容​" })
          ] }),
          /* @__PURE__ */ jsx(
            Input,
            {
              title: "訂單編號",
              style: true,
              isRequired: true,
              placeholder: "請提供您的訂單編號。",
              value: dataSend.OrderNumber ?? "",
              onChange: (e2) => setDataSend({ ...dataSend, OrderNumber: e2.target.value })
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "px-5", children: /* @__PURE__ */ jsx("label", { className: "block pr-4 mb-1", children: "上傳相關相片" }) }),
            /* @__PURE__ */ jsxs(
              "div",
              {
                onClick: handleClick,
                className: "px-2.5 py-4 mx-5 my-2 flex flex-col justify-center items-center w-36 border rounded-lg border-[#eaeaea] cursor-pointer bg-white",
                children: [
                  /* @__PURE__ */ jsx("img", { src: imgUrl + "/contactUs/upload.png", alt: "", className: "w-2/3" }),
                  /* @__PURE__ */ jsx("span", { className: "border-b border-[#cdc9c9] text-yata-deep font-bold mt-2", children: "瀏覽我的電腦" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "file",
                      className: "hidden",
                      accept: "image/*",
                      ref: hiddenFileInput,
                      onChange: handleChange
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "relative h-auto lg:max-w-[20rem] mx-5 text-xs transition-all duration-200 ease-out cursor-default ",
                onMouseEnter: (e2) => {
                  setHover(true);
                },
                onMouseLeave: () => {
                  setHover(false);
                },
                ref: fileNameRef,
                children: /* @__PURE__ */ jsx("p", { className: "w-full break-words lg:overflow-hidden lg:text-ellipsis lg:whitespace-nowrap", children: fileName != "" ? /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-start w-full", children: [
                  /* @__PURE__ */ jsxs("span", { className: "mr-2", children: [
                    "檔案名稱: ",
                    fileName
                  ] }),
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: imgUrl + "/modal/plus.png",
                      alt: "",
                      className: "rotate-45 cursor-pointer w-5 h-5",
                      onClick: handleRemove
                    }
                  )
                ] }) : "" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-full py-6", children: /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "pt-3 pb-3 font-bold text-white rounded bg-yata-deep px-36",
              children: "確認"
            }
          ) })
        ]
      }
    )
  ] });
};
const FullLoading = ({ bgColor = "rgb(0 0 0 / 0.4)", isLoading }) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center w-screen h-screen backdrop-opacity-60 backdrop-blur-[200px]",
      style: {
        backgroundColor: bgColor,
        visibility: isLoading ? "visible" : "hidden"
      },
      children: /* @__PURE__ */ jsxs("div", { className: "lds-roller z-[100]", children: [
        /* @__PURE__ */ jsx("div", {}),
        /* @__PURE__ */ jsx("div", {}),
        /* @__PURE__ */ jsx("div", {}),
        /* @__PURE__ */ jsx("div", {}),
        /* @__PURE__ */ jsx("div", {}),
        /* @__PURE__ */ jsx("div", {}),
        /* @__PURE__ */ jsx("div", {}),
        /* @__PURE__ */ jsx("div", {})
      ] })
    }
  );
};
const storesDetailList = [
  {
    id: 1,
    content: "沙田",
    title: "一田百貨",
    storeAddress: "店鋪地址",
    address: "香港沙田正街2號新城市廣場3期1及2樓",
    storeHours: "營業時間",
    hours: "查詢營業時間",
    customerCare: "顧客熱線",
    phoneNumber: "+852 2694 1111​",
    storeEmail: "查詢電郵",
    email: "cs@yata.hk",
    details: "https://www.yata.hk/tch/store/sha-tin/",
    iframe: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14757.225325720154!2d114.1876868!3d22.3798064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4bcd7b3df40e8d23!2z5LiA55Sw55m-6LKoIC0g5rKZ55Sw!5e0!3m2!1szh-TW!2shk!4v1641811355218!5m2!1szh-TW!2shk"
  },
  {
    id: 2,
    content: "大埔",
    title: "一田百貨",
    storeAddress: "店鋪地址",
    address: "香港大埔安邦路8號大埔超級城B區1及2樓",
    storeHours: "營業時間",
    hours: "查詢營業時間",
    customerCare: "顧客熱線",
    phoneNumber: "+852 3761 1388",
    storeEmail: "查詢電郵",
    email: "cs@yata.hk",
    details: "https://www.yata.hk/tch/store/tai-po/",
    iframe: "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1z5LiA55Sw55m-6LKoLeWkp-WflA!6i17!3m1!1sen!5m1!1sen"
  },
  {
    id: 3,
    content: "荃灣",
    title: "一田百貨",
    storeAddress: "店鋪地址",
    address: "香港荃灣大壩街4號荃灣廣場3-4樓",
    storeHours: "營業時間",
    hours: "查詢營業時間",
    customerCare: "顧客熱線",
    phoneNumber: "+852 2803 9188",
    storeEmail: "查詢電郵",
    email: "cs@yata.hk",
    details: "https://www.yata.hk/tch/store/tsuen-wan/",
    iframe: "https://maps.google.com/maps?width=100%25&height=400&hl=en&q=%E4%B8%80%E7%94%B0%E7%99%BE%E8%B2%A8-%E8%8D%83%E7%81%A3+(%E4%B8%80%E7%94%B0%E7%99%BE%E8%B2%A8-%E8%8D%83%E7%81%A3)&t=&z=17&ie=UTF8&iwloc=B&output=embed"
  },
  {
    id: 4,
    content: "旺角",
    title: "一田超市",
    storeAddress: "店鋪地址",
    address: "香港旺角太子道西193號新世紀廣場5樓",
    storeHours: "營業時間",
    hours: "查詢營業時間",
    customerCare: "顧客熱線",
    phoneNumber: "+852 2192 2388",
    storeEmail: "查詢電郵",
    email: "cs@yata.hk",
    details: "https://www.yata.hk/tch/store/mong-kok/",
    iframe: "https://maps.google.com/maps?width=100%25&height=400&hl=en&q=%E4%B8%80%E7%94%B0%E7%99%BE%E8%B2%A8-%E6%97%BA%E8%A7%92+(%E4%B8%80%E7%94%B0%E7%99%BE%E8%B2%A8-%E6%97%BA%E8%A7%92)&t=&z=17&ie=UTF8&iwloc=B&output=embed"
  },
  {
    id: 5,
    content: "新蒲崗",
    title: "一田超市",
    storeAddress: "店鋪地址",
    address: "香港新蒲崗太子道東638號Mikiki LG",
    storeHours: "營業時間",
    hours: "查詢營業時間",
    customerCare: "顧客熱線",
    phoneNumber: "+852 2694 1111​",
    storeEmail: "查詢電郵",
    email: "cs@yata.hk",
    details: "https://www.yata.hk/tch/store/san-po-kong/",
    iframe: "https://maps.google.com/maps?width=100%25&height=400&hl=en&q=%E4%B8%80%E7%94%B0%E7%99%BE%E8%B2%A8-%E6%96%B0%E8%92%B2%E5%B4%97+(%E4%B8%80%E7%94%B0%E7%99%BE%E8%B2%A8-%E6%96%B0%E8%92%B2%E5%B4%97)&t=&z=17&ie=UTF8&iwloc=B&output=embed"
  },
  {
    id: 6,
    content: "觀塘",
    title: "一田超市",
    storeAddress: "店鋪地址",
    address: "香港觀塘道418號apm LG",
    storeHours: "營業時間",
    hours: "查詢營業時間",
    customerCare: "顧客熱線",
    phoneNumber: "+852 3955 1818",
    storeEmail: "查詢電郵",
    email: "cs@yata.hk",
    details: "https://www.yata.hk/tch/store/kwun-tong/",
    iframe: "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1z5LiA55Sw55m-6LKoLeingOWhmA!6i17!3m1!1sen!5m1!1sen"
  },
  {
    id: 7,
    content: "將軍澳",
    title: "一田超市",
    storeAddress: "店鋪地址",
    address: "將軍澳坑口重華路8號東港城2樓",
    storeHours: "營業時間",
    hours: "查詢營業時間",
    customerCare: "顧客熱線",
    phoneNumber: "+852 3615 1838",
    storeEmail: "查詢電郵",
    email: "cs@yata.hk",
    details: "https://www.yata.hk/tch/store/tseung-kwan-o/",
    iframe: "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1z5LiA55Sw55m-6LKoLeWwh-i7jea-sw!6i17!3m1!1sen!5m1!1sen"
  },
  {
    id: 8,
    content: "葵芳",
    title: "一田超市",
    storeAddress: "店鋪地址",
    address: "葵芳興芳路223號新都會廣場L4",
    storeHours: "營業時間",
    hours: "查詢營業時間",
    customerCare: "顧客熱線",
    phoneNumber: "+852 3956 1000",
    storeEmail: "查詢電郵",
    email: "cs@yata.hk",
    details: "https://www.yata.hk/tch/store/kwai-fong/",
    iframe: "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1z5LiA55Sw55m-6LKoLeiRteiKsw!6i17!3m1!1sen!5m1!1sen"
  },
  {
    id: 9,
    content: "屯門",
    title: "一田超市",
    storeAddress: "店鋪地址",
    address: "屯門鄉事會路83號V City 地下",
    storeHours: "營業時間",
    hours: "查詢營業時間",
    customerCare: "顧客熱線",
    phoneNumber: "+852 2451 3988",
    storeEmail: "查詢電郵",
    email: "cs@yata.hk",
    details: "https://www.yata.hk/tch/store/tuen-mun/",
    iframe: "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1z5LiA55Sw55m-6LKoLeWxr-mWgA!6i17!3m1!1sen!5m1!1sen"
  },
  {
    id: 10,
    content: "元朗",
    title: "一田超市",
    storeAddress: "店鋪地址",
    address: "元朗朗日路9號形點I L1",
    storeHours: "營業時間",
    hours: "查詢營業時間",
    customerCare: "顧客熱線",
    phoneNumber: "+852 3705 5600",
    storeEmail: "查詢電郵",
    email: "cs@yata.hk",
    details: "https://www.yata.hk/tch/store/yuen-long/",
    iframe: "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1z5LiA55Sw55m-6LKoLeWFg-aclw!6i17!3m1!1sen!5m1!1sen"
  },
  {
    id: 11,
    content: "西環",
    title: "一田超市",
    storeAddress: "店鋪地址",
    address: "干諾道西188號香港商業中心地下及一樓",
    storeHours: "營業時間",
    hours: "查詢營業時間",
    customerCare: "顧客熱線",
    phoneNumber: "+852 2983 8336",
    storeEmail: "查詢電郵",
    email: "cs@yata.hk",
    details: "https://www.yata.hk/tch/store/sai-wan/",
    iframe: "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1z5LiA55Sw55m-6LKoLeilv-eSsA!6i17!3m1!1sen!5m1!1sen"
  },
  {
    id: 12,
    content: "北角",
    title: "一田超市",
    storeAddress: "店鋪地址",
    address: "北角渣華道123號北角匯2期B1",
    storeHours: "營業時間",
    hours: "查詢營業時間",
    customerCare: "顧客熱線",
    phoneNumber: "+852 2192 2300",
    storeEmail: "查詢電郵",
    email: "cs@yata.hk",
    details: "https://www.yata.hk/tch/store/north-point/",
    iframe: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d922.9025681510993!2d114.20037291167412!3d22.292748242146036!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340401fc8d0c3485%3A0xe8ff75b5bbef73a9!2z5LiA55Sw6LaF5biCIC0g5YyX6KeS!5e0!3m2!1szh-TW!2shk!4v1617256606086!5m2!1szh-TW!2shk;output=embed"
  },
  {
    id: 13,
    content: "小瀝源",
    title: "一田KONBINI",
    storeAddress: "店鋪地址",
    address: "沙田源康街1號帝逸酒店地下",
    storeHours: "營業時間",
    hours: "查詢營業時間",
    customerCare: "顧客熱線",
    phoneNumber: "+852 3611 1078",
    storeEmail: "查詢電郵",
    email: "cs@yata.hk",
    details: "https://www.yata.hk/tch/store/siu-lek-yuen/",
    iframe: "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1zS09OQklOSSDkvr_liKnjgrnjg4jjgqIgYnkgWUFUQQ!6i17!3m1!1sen!5m1!1sen"
  },
  {
    id: 14,
    content: "天水圍",
    title: "一田KONBINI",
    storeAddress: "店鋪地址",
    address: "天水圍濕地公園路9號Wetland Seasons Park地下1號舖",
    storeHours: "營業時間",
    hours: "查詢營業時間",
    customerCare: "顧客熱線",
    phoneNumber: "+852 3616 0489",
    storeEmail: "查詢電郵",
    email: "cs@yata.hk",
    details: "https://www.yata.hk/tch/store/tin-shui-wai/",
    iframe: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1843.5005255773347!2d114.0041711!3d22.4665948!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f13cf3d5a213%3A0x8ebdd0aa6e486fc!2z5LiA55SwS09OQklOSSjlpKnmsLTlnI0p!5e0!3m2!1szh-TW!2shk!4v1654481847892!5m2!1szh-TW!2shk&t=&z=17&ie=UTF8&iwloc=B&output=embed"
  }
];
function Store({ id: id2 }) {
  const router2 = useNavigate();
  useLocation();
  const windowType = useAppSelector(selectWindowSize);
  const storeData = storesDetailList.filter(
    (post) => post.id === parseInt(id2)
  )[0];
  const [width, setWidth] = reactExports.useState(0);
  const onMobile = windowType === "mobile";
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
    if (!onMobile) {
      router2(`${"/ViewYata-React/"}store-locations`);
    }
  }, [windowType]);
  return /* @__PURE__ */ jsx(Fragment, { children: storeData && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center pt-10 lg:flex-row lg:pl-10 lg:justify-start", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto lg:mx-8", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "pt-2.5", children: width ? /* @__PURE__ */ jsx(
      "iframe",
      {
        scrolling: "no",
        marginHeight: 0,
        marginWidth: 0,
        src: storeData.iframe,
        width: onMobile ? width * 0.9 : 431,
        height: onMobile ? width * 0.9 : 489,
        frameBorder: 0,
        tabIndex: -1
      }
    ) : /* @__PURE__ */ jsx(FullLoading, {}) }) }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "px-4 font-bold pt-7 lg:pl-7 text-yata-deep", children: /* @__PURE__ */ jsx("h1", { children: `${storeData.title} (${storeData.content})` }) }),
      /* @__PURE__ */ jsxs("div", { className: "mb-2", children: [
        /* @__PURE__ */ jsx("div", { className: "px-4 pt-2 mr-10 lg:pl-7 text-yata-deep", children: /* @__PURE__ */ jsx("h1", { children: storeData.storeAddress }) }),
        /* @__PURE__ */ jsx("div", { className: "px-4 lg:pl-7 text-yata-brown ", children: /* @__PURE__ */ jsx("h1", { children: storeData.address }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-2", children: [
        /* @__PURE__ */ jsx("div", { className: "px-4 pt-2 mr-10 lg:pl-7 text-yata-deep", children: /* @__PURE__ */ jsx("h1", { children: storeData.storeHours }) }),
        /* @__PURE__ */ jsx("div", { className: "px-4 lg:pl-7 text-yata-brown ", children: /* @__PURE__ */ jsx(
          "a",
          {
            className: "underline underline-offset-2",
            href: storeData.details,
            children: /* @__PURE__ */ jsx("h1", { children: storeData.hours })
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-2", children: [
        /* @__PURE__ */ jsx("div", { className: "px-4 pt-2 mr-10 lg:pl-7 text-yata-deep", children: /* @__PURE__ */ jsx("h1", { children: storeData.customerCare }) }),
        /* @__PURE__ */ jsx("div", { className: "px-4 lg:pl-7 text-yata-brown ", children: /* @__PURE__ */ jsx("a", { href: `tel:${storeData.phoneNumber}`, children: storeData.phoneNumber }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-2", children: [
        /* @__PURE__ */ jsx("div", { className: "px-4 pt-2 mr-10 lg:pl-7 text-yata-deep", children: /* @__PURE__ */ jsx("h1", { children: storeData.storeEmail }) }),
        /* @__PURE__ */ jsx("div", { className: "px-4 lg:pl-7 text-yata-brown ", children: /* @__PURE__ */ jsx("a", { href: `mailto:${storeData.email}`, children: storeData.email }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 mb-12 lg:hidden", children: /* @__PURE__ */ jsx(ReturnButton, { btnName: "返回", path: "/store-locations" }) })
  ] }) }) });
}
Store.getInitialProps = async ({ query }) => {
  const { id: id2 } = query;
  return { id: id2 };
};
const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = reactExports.useState({
    width: 1440,
    height: 900
  });
  reactExports.useEffect(() => {
    if (typeof window === "undefined")
      return;
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerWidth
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
};
const useGridCols = (boxRef, containerRef, paddingX) => {
  const [gridCols, setGridCols] = reactExports.useState();
  const windowDimensions = useWindowDimensions();
  const location = useLocation();
  reactExports.useEffect(() => {
    if (boxRef.current && containerRef.current) {
      let cols = containerRef.current.scrollWidth / boxRef.current.scrollWidth;
      switch (true) {
        case (cols > 6 && cols <= 7):
          setGridCols("repeat(5, minmax(0, 1fr))");
          break;
        case (cols > 5 && cols <= 6):
          setGridCols("repeat(4, minmax(0, 1fr))");
          break;
        case (cols > 4 && cols <= 5):
          setGridCols("repeat(3, minmax(0, 1fr))");
          break;
        case (cols > 2 && cols <= 4):
          setGridCols("repeat(2, minmax(0, 1fr))");
          break;
        case cols <= 2:
          setGridCols("repeat(1, minmax(0, 1fr))");
          break;
        default:
          setGridCols(`repeat(2, minmax(0, 1fr))`);
          break;
      }
    }
  }, [containerRef, boxRef, windowDimensions, location.pathname]);
  return gridCols;
};
const storeName = [
  {
    title: "一田百貨",
    list: [
      { content: "沙田", route: "/store/1.jpg", id: "1" },
      { content: "大埔", route: "/store/2.jpg", id: "2" },
      { content: "荃灣", route: "/store/3.jpg", id: "3" }
    ]
  },
  {
    title: "一田超市",
    list: [
      { content: "旺角", route: "/store/4.jpg", id: "4" },
      { content: "新蒲崗", route: "/store/5.jpg", id: "5" },
      { content: "觀塘", route: "/store/6.jpg", id: "6" },
      { content: "將軍澳", route: "/store/7.jpg", id: "7" },
      { content: "葵芳", route: "/store/8.jpg", id: "8" },
      { content: "屯門", route: "/store/9.jpg", id: "9" },
      { content: "元朗", route: "/store/10.jpg", id: "10" },
      { content: "西環", route: "/store/11.jpg", id: "11" },
      { content: "北角", route: "/store/12.jpg", id: "12" }
    ]
  },
  {
    title: "KONBINI By YATA",
    list: [
      { content: "小瀝源", route: "/store/13.jpg", id: "13" },
      { content: "天水圍", route: "/store/14.jpg", id: "14" }
    ]
  }
];
function StoreLocations() {
  const imgUrl = useAppSelector(selectImgUrl);
  const [radio, setRadio] = reactExports.useState("1");
  const windowType = useAppSelector(selectWindowSize);
  useWindowDimensions();
  const boxRef = reactExports.useRef(null);
  const containerRef = reactExports.useRef(null);
  const gridCols = useGridCols(boxRef, containerRef);
  const onMobile = windowType === "mobile";
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center lg:flex-row lg:w-4/5 lg:mt-9 lg:m-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:w-1/4 lg:float-left ", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center pl-3", children: [
        /* @__PURE__ */ jsx("div", { className: "w-5 h-5 mr-2 rounded-md bg-yata" }),
        /* @__PURE__ */ jsx("div", { className: "font-bold", children: "商店位置" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "h-auto mt-6 overflow-y-auto rounded-md lg:w-72 lg:bg-[#F1EFEB] lg:block", children: storeName.map((store2, index2) => /* @__PURE__ */ jsxs("div", { ref: containerRef, children: [
        /* @__PURE__ */ jsx("div", { className: "mb-2", children: /* @__PURE__ */ jsx("div", { className: "pt-5 pl-3 text-xl font-bold text-yata-deep", children: store2.title }) }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center w-auto", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "grid gap-2 lg:block",
            style: onMobile ? { gridTemplateColumns: gridCols } : {},
            children: store2.list.map((item, idx) => /* @__PURE__ */ jsx(reactExports.Fragment, { children: onMobile ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
              Link,
              {
                to: "/store-locations/[id]",
                children: /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "pt-3 pl-3 pr-3 text-left border rounded-xl hover:border-2 hover:border-yata lg:bg-white text-yata-deep w-44",
                    ref: boxRef,
                    children: [
                      /* @__PURE__ */ jsx("img", { src: imgUrl + item.route }),
                      /* @__PURE__ */ jsx("div", { className: "my-1 font-bold", children: item.content })
                    ]
                  }
                )
              }
            ) }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: (e2) => {
                  e2.stopPropagation();
                  setRadio(item.id);
                },
                className: "flex items-center justify-between h-24 py-2 pl-4 pr-2 mb-2 text-left border rounded-xl hover:border-2 hover:border-yata lg:bg-white text-yata-deep w-60",
                style: radio === item.id ? {
                  backgroundColor: "#FAFFEC",
                  border: "2px solid #A6CE39"
                } : {},
                children: [
                  /* @__PURE__ */ jsx("div", { className: "font-bold", children: item.content }),
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: imgUrl + item.route,
                      className: "w-3/5 rounded-md"
                    }
                  )
                ]
              }
            ) }) }, `store-box-${idx}`))
          }
        ) })
      ] }, `store-${index2}`)) }),
      /* @__PURE__ */ jsx("br", {})
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 mb-12 lg:hidden", children: /* @__PURE__ */ jsx(ReturnButton, { btnName: "返回", path: "/" }) }),
    /* @__PURE__ */ jsx("div", { className: "lg:w-9/12 lg:float-right underLg:hidden", children: /* @__PURE__ */ jsx(Store, { id: radio }) })
  ] }) }) });
}
function EShopInfo() {
  return /* @__PURE__ */ jsxs("div", { className: "relative px-4 mt-2 mb-16 rangeLg:px-8 rangeXl:px-24 2xl:px-48 rangeMd:pt-4 rangeSm:pt-4 rangeXs:pt-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex space-x-2 lg:space-x-2 lg:px-0 lg:mt-5", children: [
      /* @__PURE__ */ jsx("div", { className: "min-w-[1.25rem] min-h-[1.25rem] max-h-[28px] max-w-[28px] mr-1 flex items-center ", children: /* @__PURE__ */ jsx("span", { className: "w-5 h-5 min-w-[1.25rem] rounded-md bg-yata" }) }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center space-x-1 text-lg font-semibold leading-none lg:text-xl lg:font-bold lg:text-yata-deep", children: "eShop 簡介" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "my-10", children: [
      /* @__PURE__ */ jsx("h1", { className: "mb-2 text-lg font-semibold underline text-yata-deep underline-offset-1", children: "一田網上商店YATA eShop，給您簡單方便的網購服務！" }),
      /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed text-justify", children: "我們為您網羅多元化產品種類，提供價格合理的選擇，滿足您的不同需要。您可自由選擇送貨上門或店舖自取，透過簡易網上付款，輕鬆快捷選購生活所需。" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "my-10", children: [
      /* @__PURE__ */ jsx("h1", { className: "mb-2 text-lg font-semibold underline text-yata-deep underline-offset-1", children: "產品應有盡有" }),
      /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed text-justify", children: "YATA eShop將有數千款來自世界各地的優質精選產品，讓您隨時隨地選購心儀貨品。從超市食品、家居雜貨，到潮流彩妝、生活百貨、母嬰用品等應有盡有。在美食專區，除了各種優惠禮券，您更可以訂購節日或派對到會美食。 我們更設送禮專區，提供各款精選及節慶果籃禮籃。" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "my-10", children: [
      /* @__PURE__ */ jsx("h1", { className: "mb-2 text-lg font-semibold underline text-yata-deep underline-offset-1", children: "網上優先訂購" }),
      /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed text-justify", children: "每年的一田購物優惠日、嬰兒用品展等大型優惠活動，eShop均會率先開售多款精選筍貨，您可預先搶購心儀產品，並享有網上及每日限定精選優惠，多款減價廚具及電器更低至1折。​" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "my-10", children: [
      /* @__PURE__ */ jsx("h1", { className: "mb-2 text-lg font-semibold underline text-yata-deep underline-offset-1", children: "設有店舖自取" }),
      /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed text-justify", children: "我們致力爲您提供無縫的線上及線下體驗，除了購物滿指定金額可享免費送貨服務，更設有店舖自取服務。透過eShop網站，您更可在一田超市及KONBINI自取百貨產品！我們將分階段將店舖自取服務拓展至全部分店，為顧客提供更方便的購物體驗。" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "my-10", children: [
      /* @__PURE__ */ jsx("h1", { className: "mb-2 text-lg font-semibold underline text-yata-deep underline-offset-1", children: "送禮果籃及禮籃" }),
      /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed text-justify", children: [
        "eShop設有送禮專區，為您提供各款節日果籃、送禮果籃、BB禮籃、結婚過大禮禮籃等多款選擇。​",
        /* @__PURE__ */ jsx("br", {}),
        "我們的果籃用上最當造的時果，經多重品質檢定，以確保送出的每顆果物碩大多汁，有如新鮮摘下。新鮮果籃只會於送禮當日早上包裝，絕不過夜，以確保水果質素。",
        /* @__PURE__ */ jsx("br", {}),
        "每個果籃及禮籃均享免費送貨服務，讓您盡享快捷方便。​",
        /* @__PURE__ */ jsx("br", {}),
        "同時您亦可自訂祝福語，隨果籃及禮籃，為　貴客或親朋好友送上獨一無二的祝福。​"
      ] })
    ] })
  ] });
}
EShopInfo.title = "eShop 簡介 | YATA eShop​";
const imgPath = [
  {
    laptop: "/purchase-process/guideline-b1.png",
    mobile: "/purchase-process/guideline-b1-mobile.png",
    ratio: "720 / 466"
  },
  {
    laptop: "/purchase-process/guideline-b2.png",
    mobile: "/purchase-process/guideline-b2-mobile.png",
    ratio: "720 / 548"
  },
  {
    laptop: "/purchase-process/guideline-b3.png",
    mobile: "/purchase-process/guideline-b3-mobile.png",
    ratio: "720 / 604"
  }
];
const noticeList = [
  { id: 1, title: "購物流程", route: "/purchase-process/guideline-a1" },
  { id: 2, title: "訂購果籃/禮籃", route: "/purchase-process/guideline-hamper" }
];
function ShoppingGuideline() {
  const imgUrl = useAppSelector(selectImgUrl);
  const windowSize = useAppSelector(selectWindowSize);
  const onMobile = windowSize == "mobile";
  const [noticeTag, setNoticeTag] = reactExports.useState(1);
  return /* @__PURE__ */ jsxs("div", { className: "relative px-4 mt-2 mb-16 lg:mt-8 lg:mb-28 rangeLg:px-8 rangeXl:px-24 2xl:px-48 rangeMd:pt-4 rangeSm:pt-4 rangeXs:pt-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "h-[18px] w-[18px] bg-yata rounded-md" }),
      /* @__PURE__ */ jsx("span", { className: "mx-2 text-lg font-semibold leading-none lg:text-xl lg:font-normal lg:text-yata-deep", children: "購物流程" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex text-center w-full gap-4", children: noticeList.map((n2, index2) => {
      return /* @__PURE__ */ jsx(
        "div",
        {
          onClick: () => setNoticeTag(n2.id),
          className: "py-2 mt-8 mb-4 text-center rounded-lg lg:my-8 w-1/2 cursor-pointer border-4 border-solid " + (noticeTag == n2.id ? " bg-yata-deep" : " border-yata"),
          children: /* @__PURE__ */ jsx("span", { className: "text-xl font-semibold lg:text-2xl tranistion-all duration-300 ease-in-out " + (noticeTag == n2.id ? "text-white" : "text-yata"), children: n2.title })
        },
        index2
      );
    }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full h-auto mt-4 bg-light-yellow rounded-3xl", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "relative object-contain w-full overflow-hidden",
        style: {
          aspectRatio: onMobile ? noticeTag == 1 ? "360 / 2819" : "360 / 2372" : "348 / 761",
          imageRendering: "crisp-edges"
        },
        children: /* @__PURE__ */ jsx("img", { src: onMobile ? imgUrl + noticeList.filter((n2) => n2.id == noticeTag)[0].route + "-mobile.png" : imgUrl + noticeList.filter((n2) => n2.id == noticeTag)[0].route + ".png", alt: "pic" })
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "py-2 mt-12 text-center rounded-lg lg:mt-16 bg-yata-deep", children: /* @__PURE__ */ jsx("span", { className: "text-2xl font-semibold text-white", children: "精明小貼士" }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full mt-4", children: /* @__PURE__ */ jsx("div", { className: "w-full grid-cols-3 gap-4 space-y-4 lg:space-y-0 lg:grid", children: imgPath.map((path, idx) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "relative w-full",
        style: { aspectRatio: onMobile ? path.ratio : "860/956" },
        children: /* @__PURE__ */ jsx("img", { src: onMobile ? imgUrl + path.mobile : imgUrl + path.laptop, alt: "pic" })
      },
      "guideline-b-img" + idx
    )) }) })
  ] });
}
ShoppingGuideline.title = "購物流程 | YATA eShop​";
const DeliveryAndSelfPick = () => {
  return /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col px-4 mt-2 mb-16 lg:mb-28 rangeLg:px-8 rangeXl:px-24 2xl:px-48 rangeMd:pt-4 rangeSm:pt-4 rangeXs:pt-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex space-x-2 lg:space-x-2 lg:px-0 lg:mt-5", children: [
      /* @__PURE__ */ jsx("div", { className: "min-w-[1.25rem] min-h-[1.25rem] max-h-[28px] max-w-[28px] mr-1 flex items-center ", children: /* @__PURE__ */ jsx("span", { className: "w-5 h-5 min-w-[1.25rem] rounded-md bg-yata" }) }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center space-x-1 text-lg font-semibold leading-none lg:text-xl lg:font-bold lg:text-yata-deep", children: "送貨及運費" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-14", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full mt-8 mb-2 text-lg font-bold", children: "送貨上門" }),
      /* @__PURE__ */ jsx("div", { className: "font-bold underline text-yata-deep underline-offset-4 ", children: "送貨範圍" }),
      /* @__PURE__ */ jsxs("ul", { className: "mb-2 ml-5 leading-relaxed text-justify list-disc list-outside", children: [
        /* @__PURE__ */ jsx("li", { children: "送貨服務只適用於香港主要地區，包括香港島、九龍、新界，但不包括離島、愉景灣、沙頭角禁區、打鼓嶺、文錦渡、米埔、落馬洲。" }),
        /* @__PURE__ */ jsx("li", { children: "顧客所提供之送貨地區如屬非送貨範圍內，該訂單將當作無效。" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 font-bold underline text-yata-deep underline-offset-4 ", children: "送貨時段" }),
      /* @__PURE__ */ jsx("ul", { className: "mb-2 ml-5 leading-relaxed text-justify list-disc list-outside", children: /* @__PURE__ */ jsx("li", { children: "目前我們有兩個送貨時段可供選擇，分別為下午1時至5時，及晚上6時至10時。" }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 font-bold underline text-yata-deep underline-offset-4 ", children: "最快送貨日期及每日截單時間" }),
      /* @__PURE__ */ jsx("span", { children: "除預售活動外，我們的最快送貨日期如下：" }),
      /* @__PURE__ */ jsxs("ul", { className: "mb-2 ml-5 leading-relaxed text-justify list-disc list-outside", children: [
        /* @__PURE__ */ jsx("li", { children: "超市產品：最快第二天送貨*" }),
        /* @__PURE__ */ jsx("li", { children: "百貨產品：最快三天後送貨*" }),
        /* @__PURE__ */ jsx("li", { children: "送禮果籃、禮籃：最快第二天送貨*" }),
        /* @__PURE__ */ jsx("li", { children: "節日果籃、禮籃：請參照相關訂購詳情" }),
        /* @__PURE__ */ jsx("li", { children: "商戶直送產品：七至十四天内送達" }),
        /* @__PURE__ */ jsx("li", { className: "mt-3 list-none", children: "*每日截單時間為下午3時。最快送貨時間視乎送貨地區，每個時段額滿即止" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 font-bold underline text-yata-deep underline-offset-4 ", children: "運費" }),
      /* @__PURE__ */ jsxs("ul", { className: "mb-2 ml-5 leading-relaxed text-justify list-disc list-outside", children: [
        /* @__PURE__ */ jsx("li", { children: "香港島、九龍、新界地區送貨費用為$80；東涌及馬灣送貨費用為$150。" }),
        /* @__PURE__ */ jsx("li", { children: "商戶直送產品、果籃、禮籃的價格已經包括免費獨立發貨服務​​。" }),
        /* @__PURE__ */ jsx("li", { children: "果籃、禮籃之免費送貨服務不適用於馬灣，每個配送至馬灣之果籃及禮籃需收取附加費用港幣200元正，請聯繫顧客服務部作安排。" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 font-bold underline text-yata-deep underline-offset-4", children: "免運費之最低消費" }),
      /* @__PURE__ */ jsxs("ul", { className: "mb-2 ml-5 leading-relaxed text-justify list-disc list-outside", children: [
        /* @__PURE__ */ jsx("li", { children: "顧客於一田eShop購物淨值滿港幣$800或以上（個別限定產品*不計算在内)，即可享免費送貨服務。" }),
        /* @__PURE__ */ jsx("li", { children: "預訂產品的送貨費用計算方式跟普通產品一樣，但每輪送貨將逐次計算​送貨費用。" }),
        /* @__PURE__ */ jsx("li", { children: "餐飲美食請參照產品頁面的供應商發貨條款。" }),
        /* @__PURE__ */ jsx("li", { className: "mt-3 list-none", children: "*限定產品包括只限自取產品、各類禮券、商戶直送產品、餐飲美食、果籃、禮籃或指定產品" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 font-bold underline text-yata-deep underline-offset-4", children: "受惡劣天氣影響之特別安排" }),
      /* @__PURE__ */ jsx("ul", { className: "mb-2 ml-5 leading-relaxed text-justify list-disc list-outside", children: /* @__PURE__ */ jsx("li", { children: "如遇上八號烈風或暴風信號、紅色或黑色暴雨警告時，或我們判斷為進行送貨並不安全的天氣情況下，送貨服務將會延期。我們將會聯絡閣下更改送貨日期。" }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 font-bold underline text-yata-deep underline-offset-4", children: "其他事項" }),
      /* @__PURE__ */ jsxs("ul", { className: "mb-2 ml-5 leading-relaxed text-justify list-disc list-outside", children: [
        /* @__PURE__ */ jsx("li", { children: "訂單一經確認，將不設更改送貨日期及地址。" }),
        /* @__PURE__ */ jsx("li", { children: "所有訂單將不設合併送貨。" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-full mt-8 mb-2 text-lg font-bold", children: "店鋪自取" }),
      /* @__PURE__ */ jsx("div", { className: "font-bold underline text-yata-deep underline-offset-4", children: "自取時段" }),
      /* @__PURE__ */ jsx("ul", { className: "mb-2 ml-5 leading-relaxed text-justify list-disc list-outside", children: /* @__PURE__ */ jsx("li", { children: "店鋪自取不設特定取貨時段。從您選擇的取貨日下午一時起，您可以在所選分店的營業時間內，到臨顧客服務部取貨。產品將會爲您保留三天（取貨日為第一天）。" }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 font-bold underline text-yata-deep underline-offset-4 ", children: "最快取貨日期及每日截單時間" }),
      /* @__PURE__ */ jsx("span", { children: "除預售活動外，我們的最快取貨日期如下：" }),
      /* @__PURE__ */ jsxs("ul", { className: "mb-2 ml-5 leading-relaxed text-justify list-disc list-outside", children: [
        /* @__PURE__ */ jsx("li", { children: "超市產品：最快第二天下午一時取貨*" }),
        /* @__PURE__ */ jsx("li", { children: "百貨產品：最快三天後取貨*" }),
        /* @__PURE__ */ jsx("li", { children: "餐飲美食、預售產品、一田現金禮券：請參閲產品頁面詳情" }),
        /* @__PURE__ */ jsx("li", { className: "mt-3 list-none", children: "*每日截單時間為下午3時。視乎分店配額，每個時段額滿即止。" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 font-bold underline text-yata-deep underline-offset-4", children: "費用" }),
      /* @__PURE__ */ jsx("ul", { className: "mb-2 ml-5 leading-relaxed text-justify list-disc list-outside", children: /* @__PURE__ */ jsx("li", { children: "店鋪自取目前是免費的，也不設最低消費。" }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 font-bold underline text-yata-deep underline-offset-4", children: "受惡劣天氣影響之特別安排" }),
      /* @__PURE__ */ jsx("ul", { className: "mb-2 ml-5 leading-relaxed text-justify list-disc list-outside", children: /* @__PURE__ */ jsx("li", { children: "如遇上八號烈風或暴風信號、紅色或黑色暴雨警告時或特殊狀況下，貨物到店日期或會延誤。我們將會聯絡閣下更改取貨日期。" }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 font-bold underline text-yata-deep underline-offset-4", children: "其他事項" }),
      /* @__PURE__ */ jsx("ul", { className: "mb-2 ml-5 leading-relaxed text-justify list-disc list-outside", children: /* @__PURE__ */ jsx("li", { children: "訂單一經確認，將不設更改取貨日期及店鋪。" }) })
    ] })
  ] });
};
DeliveryAndSelfPick.title = "送貨及運費 | YATA eShop​";
const Sidebar = ({ data: data2 }) => {
  const imgUrl = useAppSelector(selectImgUrl);
  const windowType = useAppSelector(selectWindowSize);
  const onMobile = windowType === "mobile";
  const onLaptop = windowType === "laptop";
  const router2 = useLocation();
  console.log("windowType:", windowType);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center w-full mb-12 lg:mb-0", children: [
    onLaptop && /* @__PURE__ */ jsx("div", { className: "flex flex-col w-full h-auto mt-5 justify-evenly rounded-tl-3xl bg-yata-brown-light rounded-bl-3xl", children: data2.map((option, idx) => /* @__PURE__ */ jsx(Link, { to: option.path, children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: `py-4 px-5 text-yata-brown flex items-center h-16 cursor-pointer ${router2.pathname === option.path && "bg-yata text-yata-extra-light font-bold rounded-tl-full rounded-bl-full "}`,
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "relative object-contain w-6 h-auto ",
              style: { aspectRatio: option.ratio ?? "1/1" },
              children: /* @__PURE__ */ jsx("img", { src: router2.pathname === option.path ? imgUrl + option.active : imgUrl + option.route, alt: option.route })
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "ml-4 text-base font-medium", children: option.content })
        ]
      },
      option.id
    ) }, "faq-laptop-" + idx)) }),
    onMobile && /* @__PURE__ */ jsx("div", { className: "w-full mb-12", children: data2.map((option, idx) => /* @__PURE__ */ jsx(Link, { to: option.path, children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex items-center mt-5 justify-between text-lg px-8 py-2.5 cursor-pointer",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "relative object-contain w-6 h-auto ",
                style: { aspectRatio: option.ratio ?? "1/1" },
                children: /* @__PURE__ */ jsx("img", { src: imgUrl + option.route, alt: option.route })
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "ml-4 ", children: option.content })
          ] }),
          /* @__PURE__ */ jsx(ChevronRightSvg, { width: 14, height: 14, fill: "#6A3B0D" })
        ]
      },
      option.id
    ) }, "faq-mobile-" + idx)) })
  ] });
};
const ChevronDownSvg = (props) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      width: 24,
      height: 16,
      viewBox: "0 0 448 512",
      ...props,
      children: /* @__PURE__ */ jsx("path", { d: "M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" })
    }
  );
};
function Accordion({
  title,
  content,
  pic,
  turn,
  setTurn,
  idx
}) {
  const imgUrl = useAppSelector(selectImgUrl);
  const windowType = useAppSelector(selectWindowSize);
  const contentRef = reactExports.useRef(null);
  const onMobile = windowType === "mobile";
  reactExports.useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = turn[idx] ? `${contentRef.current.scrollHeight}px` : "0px";
    }
  }, [contentRef, turn]);
  const toggleAccordion = () => {
    let newTurn = [...turn];
    newTurn[idx] = !newTurn[idx];
    setTurn(newTurn);
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center justify-center w-full px-2 text-sm lg:text-base", children: /* @__PURE__ */ jsx(
    "div",
    {
      className: `bg-transparent border-b m-3 pb-0.5 border-dashed border-[#98877A] w-full  ${turn[idx]}`,
      children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-center justify-between h-10 mb-3 text-left cursor-pointer",
            onClick: toggleAccordion,
            children: [
              /* @__PURE__ */ jsx("span", { className: "ml-2 font-medium lg:font-semibold", children: title }),
              /* @__PURE__ */ jsx("div", { className: "relative w-3 h-3 mr-2 lg:h-4 lg:w-4", children: turn[idx] ? /* @__PURE__ */ jsx("img", { src: imgUrl + "/faq/minus.png", alt: "minus.png" }) : /* @__PURE__ */ jsx("img", { src: imgUrl + "/faq/plus.png", alt: "plus.png" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            ref: contentRef,
            className: `mx-4 overflow-hidden text-left lg:mt-5 transition-all max-h-0 duration-500`,
            children: [
              /* @__PURE__ */ jsx("p", { className: "pb-3 my-3 font-normal leading-relaxed text-justify whitespace-pre-line", children: content }),
              pic && /* @__PURE__ */ jsx("img", { src: imgUrl + pic, className: "w-full h-full mb-4", alt: "" })
            ]
          }
        ),
        onMobile && /* @__PURE__ */ jsx(
          "div",
          {
            className: ` border-b border-dashed border-[#98877A] cursor-pointer w-full`
          }
        )
      ] })
    }
  ) }) });
}
const HeadTitle = ({ title, path, head }) => {
  const router2 = useNavigate();
  useAppSelector(selectWindowSize);
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center px-5 space-x-1 lg:px-0 lg:mt-5 lg:min-w-fit lg:whitespace-nowrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-5 h-5 mr-2 rounded-md bg-yata" }),
      /* @__PURE__ */ jsx(
        "span",
        {
          className: "font-bold min-w-fit cursor-pointer",
          onClick: () => router2(path),
          children: head
        }
      )
    ] }),
    /* @__PURE__ */ jsx(ChevronRightSvg, { width: 15, height: 15, fill: "#A6CE39" }),
    /* @__PURE__ */ jsx("span", { className: "ml-2 font-bold text-yata min-w-fit", children: title })
  ] });
};
const FaqLayout = ({
  handleClick,
  isSomeActive,
  turn,
  setTurn,
  data: data2,
  title
}) => {
  const windowType = useAppSelector(selectWindowSize);
  const onMobile = windowType === "mobile";
  const onLaptop = windowType === "laptop";
  const imgUrl = useAppSelector(selectImgUrl);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center mb-8 text-lg lg:items-center lg:w-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "items-start justify-center mb-8 lg:flex lg:w-full ", children: [
      onLaptop && /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-3/12 px-8 mt-2", children: [
        /* @__PURE__ */ jsx(HeadTitle, { title, path: "/about/faq", head: faqRoute.title }),
        /* @__PURE__ */ jsx(Sidebar, { data: faqRoute.list })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "items-center flex flex-col lg:w-7/12 lg:mt-7 w-full bg-[#FCFCFA]", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between w-full mb-6 lg:justify-end", children: [
          onMobile && /* @__PURE__ */ jsx(HeadTitle, { title, path: "/about/faq", head: faqRoute.title }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              className: "flex items-center mr-3 space-x-1 text-sm font-bold border-b lg:text-base lg:space-x-2 border-yata",
              onClick: () => {
                handleClick();
              },
              children: [
                /* @__PURE__ */ jsxs("span", { className: "text-yata min-w-fit text-ellipsis", children: [
                  " ",
                  !isSomeActive ? "全部展開" : "全部收合"
                ] }),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "relative lg:w-3 lg:h-3 h-2 w-2 flex items-center justify-center transition-all ease-in-out duration-200 " + (!isSomeActive ? " rotate-0" : "rotate-180"),
                    children: /* @__PURE__ */ jsx(ChevronDownSvg, { fill: "#A6CE39" })
                  }
                )
              ]
            }
          )
        ] }),
        data2.map((el2, i2) => {
          return /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx(
            Accordion,
            {
              title: el2.title,
              content: el2.content,
              pic: el2.pic,
              turn,
              setTurn,
              idx: i2
            }
          ) }, "faq-products-" + i2);
        })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute bottom-32 lg:bottom-8 lg:right-10 right-2",
        onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        children: /* @__PURE__ */ jsx("div", { className: "relative cursor-pointer h-9 w-9", children: /* @__PURE__ */ jsx("img", { src: imgUrl + "/faq/back.png", alt: "pic" }) })
      }
    ),
    onMobile && /* @__PURE__ */ jsx("div", { className: "mt-20", children: /* @__PURE__ */ jsx(ReturnButton, { btnName: "返回", path: "/about/faq" }) })
  ] });
};
const data$9 = [
  {
    idx: 1,
    title: "1. 爲甚麽當我選定/更改配送模式後，看到的產品會不一樣？",
    content: "由於各種產品適用的配送模式不同，所以網站會根據您選擇的配送模式或自取分店，顯示該模式下可供選購的產品。\n 例如：所有禮籃、果籃只適用於送貨，如果您選擇了店舖自取，就無法瀏覽該類產品，必須切換至「送貨上門」才能進行選購。"
  },
  {
    idx: 2,
    title: "2. 如何把產品加到「喜愛清單」？",
    content: "當您進入產品頁面後，點選「加入我的最愛」，便可保存您的心儀產品。「喜愛清單」設於「我的帳戶」內，您可隨時查看及購買產品。",
    pic: "/faq/pic.png"
  },
  {
    idx: 3,
    title: "3. 如何搜索產品？",
    content: "您可於一田eShop頁面頂部的搜尋欄位輸入產品的關鍵字詞（如嬰兒床），然後點選旁邊的「搜尋」找尋您想瀏覽的產品。      ",
    pic: "/faq/pic2.png"
  },
  {
    idx: 4,
    title: "4. 如果我想訂購的產品沒有存貨，我可怎樣做？",
    content: "如您的心儀產品暫時缺貨，您可於先將產品加入「喜愛清單」，稍後再購買。\n此外，由於我們各店之庫存量不一，您亦可更改配送模式（如改為送貨/改到其他店舖取貨），查看其他地點的產品供應情況。"
  }
];
const SurfProductsFaq = () => {
  const [active, setActive] = reactExports.useState([false, false, false, false]);
  const isSomeActive = active.some((element) => element);
  const handleClick = () => {
    isSomeActive ? setActive([false, false, false, false]) : setActive([true, true, true, true]);
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    FaqLayout,
    {
      handleClick,
      isSomeActive,
      data: data$9,
      turn: active,
      setTurn: setActive,
      title: "瀏覽商品"
    }
  ) });
};
SurfProductsFaq.title = "常見問題 | YATA eShop​";
const useWindowSize = () => {
  const [windowSize, setWindowSize] = reactExports.useState({
    width: 0,
    height: 0
  });
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
};
function Tnc() {
  const windowType = useAppSelector(selectWindowSize);
  const router2 = useNavigate();
  const onLaptop = windowType === "laptop";
  const onMobile = windowType === "mobile";
  const size = useWindowSize();
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") {
      if (size.width >= 1024) {
        router2(`/about/tnc/purchase`);
      }
    }
  }, [size]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    onMobile && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center px-5 rangeMd:pt-4 rangeSm:pt-4 rangeXs:pt-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-5 h-5 mr-2 rounded-md bg-yata" }),
        /* @__PURE__ */ jsx("div", { className: "text-lg font-bold", children: tcIntro.title })
      ] }),
      /* @__PURE__ */ jsx(Sidebar, { data: tcIntro.list })
    ] }),
    onLaptop && /* @__PURE__ */ jsx("div", { className: "h-screen", children: /* @__PURE__ */ jsx(FullLoading, {}) })
  ] });
}
Tnc.title = "條款及細則 | YATA eShop​";
const shop = {
  title: "購物流程",
  list: [
    { content: "eShop 簡介", path: "/ViewYata-React/about/eshop-info", component: EShopInfo },
    { content: "購物流程", path: "/ViewYata-React/about/shopping-guideline", component: ShoppingGuideline },
    { content: "送貨及運費", path: "/ViewYata-React/about/delivery", component: DeliveryAndSelfPick },
    {
      content: "常見問題",
      path: "/ViewYata-React/about/faq/surf-products",
      component: SurfProductsFaq
    },
    { content: "條款及細則", path: "/ViewYata-React/about/tnc", component: Tnc }
  ]
};
const TncLayout = ({ children, isRequired, title }) => {
  const windowType = useAppSelector(selectWindowSize);
  const onMobile = windowType === "mobile";
  const onLaptop = windowType === "laptop";
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center mb-8 text-lg lg:items-center lg:w-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "items-start justify-center mb-8 lg:flex lg:w-full", children: [
      onLaptop && /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-3/12 px-8 mt-2", children: [
        /* @__PURE__ */ jsx(HeadTitle, { title, path: "/about/tnc", head: "條款及細則" }),
        /* @__PURE__ */ jsx(Sidebar, { data: tcIntro.list })
      ] }),
      onMobile && /* @__PURE__ */ jsx(HeadTitle, { title, path: "/about/tnc", head: "條款及細則" }),
      /* @__PURE__ */ jsxs("div", { className: "lg:w-7/12 bg-[#FCFCFA] pt-2 pb-8 mt-4 lg:mt-16 mx-2 rounded-lg lg:m-0 lg:px-2", children: [
        /* @__PURE__ */ jsx("div", { className: "w-full p-2 mt-2 ml-2 text-lg font-bold", children: title }),
        children
      ] })
    ] }),
    isRequired && onMobile && /* @__PURE__ */ jsx(ReturnButton, { btnName: "返回", path: "/about/tnc" })
  ] });
};
const PurchaseTnc = () => {
  return /* @__PURE__ */ jsx(TncLayout, { isRequired: true, title: "訂購條款", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start w-full", children: [
    /* @__PURE__ */ jsxs("ul", { className: "px-4 mx-6 mt-2 text-base font-normal leading-relaxed list-disc lg:mx-0 lg:px-0 lg:ml-9", children: [
      /* @__PURE__ */ jsx("li", { children: "顧客須先成為YATA-Fans會員方可選購一田eShop產品" }),
      /* @__PURE__ */ jsx("li", { children: "顧客在一田eShop消費所得之積分，將於14天內存入相關帳戶" }),
      /* @__PURE__ */ jsx("li", { children: "貨品圖片僅供參考，與實際貨品可能有所差異" }),
      /* @__PURE__ */ jsx("li", { children: "由於測量方法不同，貨品尺寸資料可能存在1-4cm誤差" }),
      /* @__PURE__ */ jsx("li", { children: "由於貨品數量於付款後方扣減庫存，加入購物車不代表成功購買貨品，一切以結賬為準" }),
      /* @__PURE__ */ jsx("li", { children: "每款產品數量有限，售完即止" }),
      /* @__PURE__ */ jsx("li", { children: "成功完成訂購後，訂單確認電郵會於12小時內發送到顧客提供的電郵。請檢查電郵及登入帳戶檢查，以確保資料無誤" }),
      /* @__PURE__ */ jsxs("li", { children: [
        " ",
        "如付款訂購24小時後仍未收到確認電郵，顧客亦可登入eShop帳戶查閱訂單狀態"
      ] }),
      /* @__PURE__ */ jsx("li", { children: " eShop產品價錢以顧客結帳時的發售價為準" }),
      /* @__PURE__ */ jsx("li", { children: " 在訂單準備好後（一般會在取貨/送貨前一天），您將收到取貨/送貨提示電郵。取貨提示電郵內包含一個取貨二維碼 (QR code) 。" }),
      /* @__PURE__ */ jsx("li", { children: "訂單一經確認，將不設取消或更改訂單內容，所收款項亦將不獲退還。如顧客所訂購的貨品缺貨，一田eShop將為缺貨貨品進行退款，退款需時4至6個星期。不便之處，敬請見諒。" })
    ] }),
    /* @__PURE__ */ jsx("span", { className: "mx-3 mt-8 font-bold", children: "「中銀信用卡客戶專享 - 一田購物禮遇」條款及細則" }),
    /* @__PURE__ */ jsxs("ul", { className: "px-4 mx-6 mt-2 text-base font-normal leading-relaxed list-disc lg:mx-0 lg:px-0 lg:ml-9", children: [
      /* @__PURE__ */ jsx("li", { children: "優惠期由2023年2月1日至 3月31日（「優惠期」），客戶必須以中銀信用卡簽帳，方有機會獲享以上優惠。" }),
      /* @__PURE__ */ jsx("li", { children: "於優惠期內，合資格用戶每卡簽帳滿$400或以上即減$30（每張訂單最多可獲$30折扣）。優惠名額數量有限，送完即止。" }),
      /* @__PURE__ */ jsx("li", { children: "中國銀行(香港)有限公司及一田有限公司保留隨時更改或終止以上優惠及不時修訂優惠條款及細則之權利。" }),
      /* @__PURE__ */ jsx("li", { children: "如有任何爭議，中國銀行(香港)有限公司及一田有限公司保留最終決定權。" })
    ] }),
    /* @__PURE__ */ jsx("span", { className: "mx-3 mt-8 font-bold", children: "「一田春日BB用品展 - eShop 購物優惠」條款及細則" }),
    /* @__PURE__ */ jsxs("ul", { className: "px-4 mx-6 mt-2 text-base font-normal leading-relaxed list-disc lg:mx-0 lg:px-0 lg:ml-9", children: [
      /* @__PURE__ */ jsx("li", { children: "推廣期由2023年2月8日至3月8日，客戶單次購買嬰幼兒產品滿$1,000或以上 ，將獲得$60電子優惠券。" }),
      /* @__PURE__ */ jsx("li", { children: "合資格客戶於推廣期內最多獲取1張優惠劵，下次於門市購買嬰幼兒產品滿$200可用，有效期為30天。" }),
      /* @__PURE__ */ jsx("li", { children: "如於星期三/生日月份購物，額外積分將以取得較高者方法計算。" }),
      /* @__PURE__ */ jsx("li", { children: "購物條件不適用於個人護理/ 家品/ 玩具/健康部門之嬰幼兒產品 (個人護理/ 家品部門: AQ、baby SWIPE、Bilka、Elmex 、EMOUNT 、HIPP、PAPA JELLY、SANOSAN 、Tai san(KAWAI)、卡洛塔妮、思詩樂、威潔、蚊專家、柏橋、立保、力達; 健康部門：日本命力、家得路、澳至尊、卓營方、片仔癀、馬百良、Green Tree、Life Nutrition、Quest Nutrition ; 玩具部門：樂高、英語童書)、嬰兒奶粉(1號)、塑膠購物袋環保徵費、拆舊機/舊機回收棄置徵費、送貨費用、搬運樓梯費用、安裝費用、因更換/ 逾期取貨/ 未能成功派送貨品而收取之網購額外行政費用、修改服裝費用、訂金、自動售賣機/扭蛋機貨品、捐款及指定商戶之產品。" }),
      /* @__PURE__ */ jsx("li", { children: "如有任何爭議，一田保留最終決定權。" })
    ] }),
    /* @__PURE__ */ jsx("span", { className: "mx-3 mt-8 font-bold", children: "果籃及禮籃適用" }),
    /* @__PURE__ */ jsxs("ul", { className: "px-4 mx-6 mt-2 text-base font-normal leading-relaxed list-disc lg:mx-0 lg:px-0 lg:ml-9", children: [
      /* @__PURE__ */ jsx("li", { children: "禮籃及禮盒之圖片僅供參考" }),
      /* @__PURE__ */ jsx("li", { children: "如個別貨品缺貨，一田保留權利以同等貨值之貨品替換" }),
      /* @__PURE__ */ jsx("li", { children: "貨品不包括餐具、擺設和裝飾品 " }),
      /* @__PURE__ */ jsx("li", { children: "包裝尺寸以一田最後決定為準 " }),
      /* @__PURE__ */ jsx("li", { children: "送禮果籃為新鮮食品，建議顧客即時食用，如顧客簽收時，即時發現品質情況，請保留完整包裝之貨品及拍下相片，以便安排退換貨品 (果籃適用)" }),
      /* @__PURE__ */ jsx("li", { children: "如有任何爭議，一田保留最終決定權" })
    ] }),
    /* @__PURE__ */ jsx("span", { className: "mx-3 mt-8 font-bold", children: "「一田超市宅急便」服務條款及細則" }),
    /* @__PURE__ */ jsxs("ul", { className: "px-4 mx-6 mt-2 text-base font-normal leading-relaxed list-disc lg:mx-0 lg:px-0 lg:ml-9", children: [
      /* @__PURE__ */ jsx("li", { children: "即日送貨服務只適用於：" }),
      /* @__PURE__ */ jsx("p", { children: "- 成功註冊「一田超市宅急便」服務之YATA-Fans會員" }),
      /* @__PURE__ */ jsx("p", { children: "- 每日中午12時前成功確認之超市貨品訂單 " }),
      /* @__PURE__ */ jsx("p", { children: "- 送貨至8個特選屋苑*之服務處（不提供送貨上門及店鋪自取服務）" })
    ] }),
    /* @__PURE__ */ jsx("span", { className: "mx-3 mt-8 text-sm", children: "*特選屋苑包括：Imperial Kennedy、形薈、曉峰閣、雋巒、帝景園、浪琴園、淺水灣道127號及Wetland Seasons Park" })
  ] }) });
};
PurchaseTnc.title = "條款及細則 | YATA eShop​";
const DeliveryTnc = () => {
  return (
    // <TncLayout isRequired title="一田百貨BB秋日用品展預訂 - 送貨及運費">
    /* @__PURE__ */ jsx(TncLayout, { isRequired: true, title: "一般送貨條款", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start w-full px-4 mb-6 text-base font-normal", children: [
      /* @__PURE__ */ jsx("span", { className: "mt-3 font-bold underline text-yata-deep underline-offset-2", children: "送貨範圍" }),
      /* @__PURE__ */ jsxs("ul", { className: "mx-6 mt-1 text-base font-normal leading-relaxed list-disc lg:ml-9 lg:mx-0", children: [
        /* @__PURE__ */ jsx("li", { children: "送貨服務適用於香港主要地區，包括香港島、九龍、新界地區，但並不適用於離島、愉景灣、沙頭角禁區、打鼓嶺、文錦渡、米埔、落馬洲。" }),
        /* @__PURE__ */ jsx("li", { children: "顧客所提供之送貨地區如屬非送貨範圍內，該訂單將當作無效。" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "mt-6 font-bold underline text-yata-deep underline-offset-2", children: "送貨日期及時間" }),
      /* @__PURE__ */ jsxs("ul", { className: "mx-6 mt-1 text-base font-normal leading-relaxed list-disc lg:ml-9 lg:mx-0", children: [
        /* @__PURE__ */ jsx("li", { children: "每日截單時間為下午3時。最快送貨時間則視乎送貨地區，每個時段額滿即止。" }),
        /* @__PURE__ */ jsx("li", { children: "不同類型貨品之取貨及送貨安排或有不同，請留意個別貨品之取貨及送貨詳情及相關條款。" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "mt-6 font-bold underline text-yata-deep underline-offset-2", children: "免費送貨服務" }),
      /* @__PURE__ */ jsxs("ul", { className: "mx-6 mt-1 text-base font-normal leading-relaxed list-disc lg:ml-9 lg:mx-0", children: [
        /* @__PURE__ */ jsx("li", { children: "顧客於一田eShop購物淨值滿港幣$800或以上 (個別限定貨品*不計算在内)，即可享免費送貨服務 。" }),
        /* @__PURE__ */ jsx("li", { children: "預訂產品的送貨費用計算方式跟普通產品一樣，但每輪送貨將分次計算送貨費用。" }),
        /* @__PURE__ */ jsx("li", { children: "餐飲美食請參照貨品頁的供應商發貨條款。" }),
        /* @__PURE__ */ jsx("li", { className: "mt-3 list-none", children: "*限定產品包括只限自取產品、各類禮券、商戶直送貨品、餐飲美食、果籃、禮籃或指定貨品" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "mt-6 font-bold underline text-yata-deep underline-offset-2", children: "受惡劣天氣影響之特別安排" }),
      /* @__PURE__ */ jsx("ul", { className: "mx-6 mt-1 text-base font-normal leading-relaxed list-disc lg:ml-9 lg:mx-0", children: /* @__PURE__ */ jsx("li", { children: "如遇上八號烈風或暴風信號、紅色或黑色暴雨警告生效時或我們判斷為進行送貨並不安全的天氣情況下，送貨服務將會延期。我們將會聯絡閣下更改送貨日期。" }) }),
      /* @__PURE__ */ jsx("span", { className: "mt-6 font-bold underline text-yata-deep underline-offset-2", children: "其他事項" }),
      /* @__PURE__ */ jsxs("ul", { className: "mx-6 mt-1 text-base font-normal leading-relaxed list-disc lg:ml-9 lg:mx-0", children: [
        /* @__PURE__ */ jsx("li", { children: "訂單一經確認，將不設更改送貨日期及地址。" }),
        /* @__PURE__ */ jsx("li", { children: "所有訂單將不設合併送貨。" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "mt-6 font-bold underline text-yata-deep underline-offset-2", children: "送貨物流安排" }),
      /* @__PURE__ */ jsxs("ul", { className: "mx-6 mt-1 text-base font-normal leading-relaxed list-disc lg:ml-9 lg:mx-0", children: [
        /* @__PURE__ */ jsx("li", { children: "實際送貨日期或會因應天氣或交通情況而有所改動或延遲" }),
        /* @__PURE__ */ jsx("li", { children: "如遇上八號烈風或暴風信號、紅色或黑色暴雨警告生效時或我們判斷為進行送貨並不安全的天氣情況下，送貨服務將會延期。我們將會聯絡閣下更改送貨日期。" }),
        /* @__PURE__ */ jsx("li", { children: "每張訂單可享一次送貨服務，如因以下情況導致派送延誤或需重新安排送貨，而造成任何直接或間接的損失，一田恕不負責。" })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "px-4 mx-6 mt-1 text-base font-normal leading-relaxed list-decimal lg:ml-9 lg:mx-0", children: [
        /* @__PURE__ */ jsx("li", { children: "貨品出倉後，顧客要求更改派送地址或日期；" }),
        /* @__PURE__ */ jsx("li", { children: "在確認之送貨日期及時段內，收件人不在送貨地址；" }),
        /* @__PURE__ */ jsx("li", { children: "顧客提供之送貨地址不正確或有誤；" }),
        /* @__PURE__ */ jsx("li", { children: "提供的送貨地址並無有關收件人；" }),
        /* @__PURE__ */ jsx("li", { children: "顧客提供收件人之聯絡電話不正確或無效" })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "mx-6 mt-1 text-base font-normal leading-relaxed list-disc lg:ml-9 lg:mx-0", children: /* @__PURE__ */ jsx("li", { children: "顧客須於7日內聯絡我們，並另付送貨費用*以重新安排派送。 (*香港島、九龍及新界之送貨費用為$80; 東涌及馬灣之送貨費用為$150)" }) })
    ] }) })
  );
};
DeliveryTnc.title = "條款及細則 | YATA eShop​";
const SelfPickupTnc = () => {
  return /* @__PURE__ */ jsx(TncLayout, { isRequired: true, title: "一般分店自取條款", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start w-full px-4 mb-6", children: [
    /* @__PURE__ */ jsx("span", { className: "mt-2 font-bold underline text-yata-deep underline-offset-2 text-base", children: "取貨地點" }),
    /* @__PURE__ */ jsxs("ul", { className: "mx-6 mt-1 text-base font-normal leading-relaxed list-disc lg:mx-0 lg:ml-9", children: [
      /* @__PURE__ */ jsx("li", { children: "顧客需在付款前選取自取店鋪，完成訂購後，將不設更改取貨地點" }),
      /* @__PURE__ */ jsx("li", { children: "不同貨品之適用取貨地點或有不同，請留意個別貨品之取貨詳情及相關條款" })
    ] }),
    /* @__PURE__ */ jsxs("span", { className: "mt-6 font-bold underline text-yata-deep underline-offset-2 text-base", children: [
      "取貨日期及時間",
      " "
    ] }),
    /* @__PURE__ */ jsxs("ul", { className: "mx-6 mt-1 text-base font-normal leading-relaxed list-disc lg:mx-0 lg:ml-9", children: [
      /* @__PURE__ */ jsx("li", { children: "每間分店每日均設取貨限額，額滿即止" }),
      /* @__PURE__ */ jsx("li", { children: "從顧客所選定的取貨日下午一點起，店鋪將爲顧客保留貨品3天（由取貨日起計）。如顧客於限期內未能領取貨品，一田將自行處理有關貨品，恕不作退款或另行通知。" }),
      /* @__PURE__ */ jsx("li", { children: "如需重新安排貨品，顧客需繳付$50手續費，方可再次安排領取貨品。詳情請聯絡顧客服務部安排" })
    ] }),
    /* @__PURE__ */ jsx("span", { className: "mt-6 font-bold underline text-yata-deep underline-offset-2 text-base", children: "取貨方法" }),
    /* @__PURE__ */ jsxs("ul", { className: "mx-6 mt-1 text-base font-normal leading-relaxed list-disc lg:mx-0 lg:ml-9", children: [
      /* @__PURE__ */ jsx("li", { children: "在訂單準備好後，您將收到取貨提示電郵，電郵內包含一個取貨二維碼 (QR code)。取貨時您必須提供取貨二維碼 (QR Code) 到分店顧客服務部或指定專櫃取貨。" }),
      /* @__PURE__ */ jsx("li", { children: "分店員工或會要求核對取貨人之身份及有關資料​" }),
      /* @__PURE__ */ jsx("li", { children: "訂單貨品不設現場更換尺寸、顏色、口味或款式" }),
      /* @__PURE__ */ jsx("li", { children: "顧客於取貨時，請即時檢查貨品，如發現品質情況，一田可安排退換貨品。如於取貨後才發現品質情況，則不作換貨或退款" })
    ] })
  ] }) });
};
SelfPickupTnc.title = "條款及細則 | YATA eShop​";
const RefundTnc = () => {
  return /* @__PURE__ */ jsx(TncLayout, { isRequired: true, title: "一般退換條款", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col items-start w-full mb-12", children: /* @__PURE__ */ jsxs("ul", { className: "px-4 mx-6 mt-1 text-base font-normal leading-relaxed list-disc lg:mx-0 lg:px-0 lg:ml-9", children: [
    /* @__PURE__ */ jsx("li", { children: "訂單一經確認，將不設取消或更改訂單內容，所收款項亦將不獲退還。" }),
    /* @__PURE__ */ jsx("li", { children: "顧客收貨後，請即時檢查貨品，如有錯漏損壞或品質問題，請保留完整包裝之貨品及拍下包裝及貨品相片，並於收貨當天以「聯絡我們」表格聯絡一田顧客服務部，以便安排退換貨品。" }),
    /* @__PURE__ */ jsx("li", { children: "申請一經批核，我們將安排到店退貨或換貨。" }),
    /* @__PURE__ */ jsx("li", { children: "如有任何爭議，一田保留最終決定權。" })
  ] }) }) });
};
RefundTnc.title = "條款及細則 | YATA eShop​";
const list1 = [
  {
    id: 1,
    content: "以下是 一田有限公司 (以下統稱「我們」或「本公司」)根據《個人資料(私隱)條例》(第486章)之規定所訂之私隱政策聲明。 我們將確保我們之職員依將執行有關政策，嚴格保密你的個人資料。"
  },
  {
    id: 2,
    content: "本公司保障客戶及本網站用戶所提供之一切資料。 除用戶使用會員登記、貨品查詢、“轉寄給朋友”服務時，我們可能需要收集個人資料及記錄用戶電腦的網路位址外，我們不會於用戶瀏覽我們之網站時收集任何足以識辨個人身份之資料。當用戶瀏覽我們之網站時，我們僅將其瀏覽記錄為一次按動次數，並不收集任何個人資料。而此等資料將用於編備有關我們網站使用情況之一般統計資料。	"
  },
  {
    id: 3,
    content: "倘若用戶使用本公司所提供服務／推廣或申請享用／參與此等服務／推廣時，向我們提供用戶的個人資料，即表示用戶同意本私隱政策以及本政策所述的對你個人資料的收集、使用、獲取、轉移、儲存及處理。用戶將會透過網站之《個人資料收集聲明》而獲悉有關之目的及用途，包括資料之傳送及披露程度；存取及更正所收集個人資料之權利。"
  }
];
const list2 = [
  {
    id: 1,
    content: "我們在網站上使用cookies以提高網站的性能和增強閣下的在線體驗。 我們使用Session cookies令閣下可瀏覽及使用網站上的基本功能，例如保留登入資料並減少在互聯網上資料傳遞的需要。我們使用Google Analytics識別重訪用戶以使我們能夠更好地了解用戶如何瀏覽我們的網站及瀏覽網站所花的時間和頻率，從而改善我們的網站。閣下瀏覽我們的網站時，我們使用 Font size cookies來提供適當的字符外觀。我們在使用cookies時，將不會向閣下收集任何個人資料。"
  },
  {
    id: 2,
    content: "任何個人資料的收集將按本公司的《個人資料收集聲明》的條款所進行。個人資料將會安全穩妥儲存於我們的系統內，而本公司將採取所有切實可行的步驟，以確保個人資料的保存時間不超過將其保存以貫徹該資料被使用於或會被使用於的目的(包括任何直接有關的目的)所需的時間。只有經培訓及獲授權的職員才可獲准查閱該等個人資料，除《個人資料收集聲明》所載之人士除外，我們不會向任何本公司以外的人士發佈該等個人資料，用戶有權根據載於《個人資料收集聲明》的程序，要求存取及更正其個人資料。"
  },
  {
    id: 3,
    content: "本公司可不時根據用戶之個人資料向他們寄出宣傳產品及服務之直接市場推廣訊息。在直接市場推廣過程中，我們將提供適當之「拒絕服務選擇」。"
  },
  {
    id: 4,
    content: " 本公司將竭盡所能，確保用戶之私隱獲得妥善保障。本網站使用128位元安全通訊端層保密技術 (SSL) 處理你的個人資料。然而，鑑於互聯網之性質，我們不能擔保可以做到「完全保障」。"
  },
  {
    id: 5,
    content: " 本公司會起用第三者內容供應商及服務供應商，並提供接駁其他網站之連結。此等第三者可於用戶使用其服務時收集有關用戶之個人資料。此等第三者將依其私隱政策行事，而我們的《私隱政策聲明》及《個人資料收集聲明》並不涵蓋該等第三者。"
  },
  {
    id: 6,
    content: "用戶如對我們之私隱政策及慣例有任何疑問，請電郵 marketing@yata.hk 往一田有限公司，或投寄到香港沙田鄉事會路138號新城市中央廣場第一座九樓901-910室，市務部（資料保障主任）收。"
  },
  {
    id: 7,
    content: "此乃中文譯本，如有任何爭議，一切以英文為準。"
  }
];
const list3 = [
  {
    id: 1,
    content: "我們所收集之資料將用作以下用途："
  },
  {
    id: 2,
    content: "監控本網站之運作及協助本網站之未來發展；"
  },
  {
    id: 3,
    content: "匯編有關我們之用戶之整體統計資料以作關於網站使用的分析；"
  },
  {
    id: 4,
    content: "監為有意註冊本網站上所提供的服務的用戶設立戶口及維護其戶口；"
  },
  {
    id: 5,
    content: " 識別和核實使用本網站所提供服務的用戶的身份；"
  },
  {
    id: 6,
    content: "就有關或因使用本網站上所提供的服務發生的事項與用戶溝通；"
  },
  {
    id: 7,
    content: "我們有意使用閣下的姓名、聯繫資料和任何與可能感興趣的商品和服務有關的資料，提供閣下可能有興趣的資訊，包括有針對性的橫幅廣告、新服務和產品和其他優惠並進行直接促銷，包括產品、服務、諮詢、意見和與以下各項有關的促銷標的，包括香港和世界各地的百貨及超市業務有關之產品及服務。如無閣下的同意，我們則不能如上使用或向該些機構提供上述資料。閣下可在向我們網站提供資料時表示同意，或以書面向我們的市務部表示同意，不另收費。"
  }
];
const PrivacyTnc = () => {
  return /* @__PURE__ */ jsx(TncLayout, { isRequired: true, title: "私隱政策聲明", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start w-full px-4 mb-6 text-base font-normal", children: [
    /* @__PURE__ */ jsx("ul", { className: "mx-6 mt-1 leading-relaxed list-disc lg:mx-0 lg:ml-9", children: list1.map((el2, i2) => {
      return /* @__PURE__ */ jsx("li", { children: el2.content }, i2);
    }) }),
    /* @__PURE__ */ jsxs("span", { className: "mt-6 mb-2 font-bold underline text-yata-deep underline-offset-2", children: [
      " ",
      "使用COOKIES檔案",
      " "
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "mx-6 mt-1 leading-relaxed text-justify list-disc lg:mx-0 lg:ml-9", children: list2.map((el2, i2) => {
      return /* @__PURE__ */ jsx("li", { children: el2.content }, i2);
    }) }),
    /* @__PURE__ */ jsxs("span", { className: "mt-6 font-bold underline text-yata-deep underline-offset-2", children: [
      " ",
      "個人資料收集聲明",
      " "
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "mx-6 mt-1 leading-relaxed text-justify list-disc lg:mx-0 lg:ml-9", children: /* @__PURE__ */ jsx("li", { children: "本聲明乃遵照《個人資料(私隱)條例》(第486章)的要求而發出，通知閣下收集資料的目的、閣下同意我們如何使用這些資料和及閣下的權利。本聲明會不時更改，故請定期查閱。閣下登記使用我們之服務及每次登入我們網站，即表示同意接受當時生效之個人資料收集聲明。" }) }),
    /* @__PURE__ */ jsxs("span", { className: "mt-6 font-bold underline text-yata-deep underline-offset-2", children: [
      "資料之收集",
      " "
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "mx-6 mt-1 leading-relaxed text-justify list-disc lg:mx-0 lg:ml-9", children: /* @__PURE__ */ jsx("li", { children: "在登記成為用戶及使用我們網站之時，用戶會被要求向我們提供個人識別資料，包括姓名、電郵地址、送貨/帳單地址、電話號碼、手提電話號碼、公司名稱等。我們有必要收集用戶之資料，以便向用戶提供本網站之各項服務及活動。倘若用戶未能提供所需資料，我們將不能向用戶提供我們網站上可供享用之服務及活動。" }) }),
    /* @__PURE__ */ jsxs("span", { className: "mt-6 font-bold underline text-yata-deep underline-offset-2", children: [
      "資料之目的及用途",
      " "
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "mx-6 mt-1 leading-relaxed text-justify list-disc lg:mx-0 lg:ml-9", children: list3.map((el2, i2) => {
      return /* @__PURE__ */ jsx("li", { children: el2.content }, i2);
    }) }),
    /* @__PURE__ */ jsx("span", { className: "mt-6 font-bold underline text-yata-deep underline-offset-2", children: "電腦數據收集" }),
    /* @__PURE__ */ jsx("ul", { className: "mx-6 mt-1 leading-relaxed text-justify list-disc lg:mx-0 lg:ml-9", children: /* @__PURE__ */ jsx("li", { children: "當你瀏覽一田eShop網站時, 本公司的伺服器會自動記錄你的瀏覽器所傳送的資料。 資料包括 你的電腦IP地址、瀏覽器類別、瀏覽我們網站前所瀏覽的網頁、在一田eGift網站內瀏覽的頁面、於上述頁面的使用時間、於我們網站搜尋的產品及資料、存取時間及日期, 以及其他統計數據。收集所得的資料會用作分析和評估, 從而幫助改善本網站及我們提供的服務和產品。這些資料不會與其他個人資料一同使用。" }) }),
    /* @__PURE__ */ jsxs("span", { className: "mt-6 font-bold underline text-yata-deep underline-offset-2", children: [
      " ",
      "資料之傳遞"
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "mx-6 mt-1 leading-relaxed text-justify list-disc lg:mx-0 lg:ml-9", children: /* @__PURE__ */ jsx("li", { children: "除了為上述目的使用有關資料時，合理而有需要把有關資料轉移予的相關人仕及機構外，我們不會以可識別閣下之方式向任何其他人士披露或傳遞閣下之資料。" }) }),
    /* @__PURE__ */ jsx("span", { className: "mt-6 font-bold underline text-yata-deep underline-offset-2", children: "資料之查閱" }),
    /* @__PURE__ */ jsx("ul", { className: "mx-6 mt-1 leading-relaxed text-justify list-disc lg:mx-0 lg:ml-9", children: /* @__PURE__ */ jsx("li", { children: "閣下有權要求存取及更正我們所持有關於閣下之資料，如閣下同意向我們支付合理之手續費。倘若閣下需要查核我們是否持有閣下之個人資料，又或者想存取或更正閣下有關之任何不確資料，請電郵 marketing@yata.hk 往一田有限公司，或投寄香港沙田鄉事會路138號新城市中央廣場第一座九樓901-910室，市務部（資料保障主任）收。" }) })
  ] }) });
};
PrivacyTnc.title = "條款及細則 | YATA eShop​";
const tc = {
  title: "購物流程",
  list: [
    {
      content: "訂購條款",
      path: "/ViewYata-React/about/tnc/purchase",
      route: "/tnc/default/purchase-brown.png",
      active: "/tnc/selected/purchase-white.png",
      ratio: "10/8",
      id: "1",
      component: PurchaseTnc
    },
    {
      content: "一般送貨條款",
      path: "/ViewYata-React/about/tnc/delivery",
      route: "/tnc/default/delivery-brown.png",
      active: "/tnc/selected/delivery-white.png",
      ratio: "11/10",
      id: "2",
      component: DeliveryTnc
    },
    {
      content: "一般店舖自取條款",
      path: "/ViewYata-React/about/tnc/self-pickup",
      route: "/tnc/default/pickup-brown.png",
      active: "/tnc/selected/pickup-white.png",
      ratio: "19/22",
      id: "3",
      component: SelfPickupTnc
    },
    {
      content: "一般退換條款",
      path: "/ViewYata-React/about/tnc/refund",
      route: "/tnc/default/refund-brown.png",
      active: "/tnc/selected/refund-white.png",
      ratio: "1/1",
      id: "4",
      component: RefundTnc
    },
    {
      content: "私隱政策聲明",
      path: "/ViewYata-React/about/tnc/privacy",
      route: "/tnc/default/privacy-brown.png",
      active: "/tnc/selected/privacy-white.png",
      ratio: "19/20",
      id: "5",
      component: PrivacyTnc
    }
  ]
};
const data$8 = [
  {
    idx: 1,
    title: "1. 如果我並沒有註冊成為YATA-Fans會員，可以購物嗎？",
    content: "您必須註冊成為YATA-Fans會員方可進行購物。請立即行動，享受更多會員優惠！"
  },
  {
    idx: 2,
    title: "2. 新會員如何註冊？",
    content: "您可在頁面頂部按登入/註冊。填寫基本的個人資料後，您將會收到一封由系統發出的手提電話驗證短訊。完成驗證流程後，您便正式成為YATA-Fans​會員。"
  },
  {
    idx: 3,
    title: "3. 如何登入YATA-Fans會員？",
    content: "您只須輸入已登記的手提電話號碼及密碼，便能登入一田eShop購物。"
  },
  {
    idx: 4,
    title: "4. 如我忘記了密碼應怎麼辦？",
    content: "如您忘記了帳戶密碼，可於登入位置點選「忘記密碼」。您將會收到一封由系統發出的重設密碼短訊，只須按照指示重設密碼便可。"
  },
  {
    idx: 5,
    title: "5. 我曾在2022年7月前在一田eShop購物，現在卻無法以電郵登入，應怎麽辦？",
    content: "由於我們的YATA-Fans​會員系統於2022年7月進行升級，您須重新註冊成為YATA-Fans會員才能登入，不便之處，敬請原諒。"
  },
  {
    idx: 6,
    title: "6. 如何更新我的個人或聯絡資料？",
    content: "您可於YATA-Fans手機應用程式隨時更新個人資料。"
  },
  {
    idx: 7,
    title: "7. 如何更改密碼？",
    content: "您可於YATA-Fans手機應用程式隨時更新帳戶密碼。"
  },
  {
    idx: 8,
    title: "8. 成功註冊後，我可否更改我的登記電話及電郵？",
    content: "一個手提電話號碼只能註冊成為YATA-Fans會員一次。為確保會員權益，註冊成為YATA-Fans會員後，除手提電話號碼外，您可以更改電郵地址等所有個人資料。"
  },
  {
    idx: 9,
    title: "9. 成爲YATA-Fans會員有什麽優惠？",
    content: "成為YATA-Fans會員除了能於一田eShop購物外，您亦可享有不同的優惠，例如高達1%的購物回贈、每週三的三倍積分獎賞、生日獎賞等等。"
  }
];
const RegistrationFaq = () => {
  const [active, setActive] = reactExports.useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ]);
  const isSomeActive = active.some((element) => element);
  const handleClick = () => {
    isSomeActive ? setActive([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ]) : setActive([true, true, true, true, true, true, true, true, true]);
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    FaqLayout,
    {
      handleClick,
      isSomeActive,
      data: data$8,
      turn: active,
      setTurn: setActive,
      title: "會員登記"
    }
  ) });
};
RegistrationFaq.title = "常見問題 | YATA eShop​";
const data$7 = [
  {
    idx: 1,
    title: "1. 是否所有產品都可以安排送貨服務？",
    content: "我們大部分產品均提供送貨服務（一田實體禮券除外），詳情請查看產品之送貨資訊。"
  },
  {
    idx: 2,
    title: "2. 於成功訂購產品後，最快能於何時安排送貨？",
    content: "除預售活動外，我們的最快送貨日期如下：\n - 超市產品：最快第二天送貨*\n - 百貨產品：最快三天後送貨*\n - 送禮果籃、禮籃：最快兩天後送貨*\n - 商戶直送產品：七至十四天内送達\n - 餐飲美食、預售產品：請參閲產品頁面詳情\n - 電子禮券：24小時内透過電郵發出\n*每日截單時間為下午3時。最快送貨時間視乎送貨地區，每個時段額滿即止\n"
  },
  // {
  //   idx: 3,
  //   title: "3. 如安排送貨服務，有什麼時段可供選擇？",
  //   content: "目前我們有兩個送貨時段可供選擇 ，分別為下午1時至5時，及晚上6時至10時。"
  // },
  {
    idx: 4,
    title: "3. 送貨服務範圍覆蓋全香港嗎？",
    content: "我們的送貨服務適用於香港主要地區，包括香港島、九龍、新界地區，但並不適用於離島、愉景灣、沙頭角禁區、打鼓嶺、文錦渡、米埔、落馬洲。"
  },
  {
    idx: 5,
    title: "4. 如何選擇送貨日期及時段？",
    //選擇送貨時段 - don’t display in phase 1A
    content: "當您將心儀產品加入購物車，並在結帳頁面上選擇送貨地址後，系統會因應產品的備貨時間及配送地區計算出可選擇的送貨日期及時段供您選擇。\n部分產品將分開發貨（如：果籃、美食到會等），您可以在購物車頁面選擇每一輪的收貨日期。\n商戶直送的百貨產品不設自選日期，供應商將直接聯絡顧客安排。"
  },
  {
    idx: 6,
    title: "5. 送貨服務的收費為多少？",
    content: "香港島、九龍、新界地區送貨費用為$80；東涌及馬灣送貨費用為$150。\n商戶直送產品、果籃及禮籃的價格已經包含免費獨立發貨，毋須額外收費​。果籃、禮籃之免費送貨服務不適用於馬灣，每個配送至馬灣之果籃及禮籃需收取附加費用港幣200元正。下單前，請先聯繫顧客服務部作安排。\n如送貨地點不設升降機而需要以人力搬運，運輸公司可安排免費上落三層或最多 29 級梯級。如超出有關限額，請先與我們聯絡以作安排。​"
  },
  {
    idx: 7,
    title: "6. 怎麽可以享有免費送貨服務？",
    content: "顧客於一田eShop購物淨值滿港幣$800或以上（不計算個別限定貨品*在内​)，即可享免費送貨服務。\n*包括各類禮券、商戶直送產品、餐飲美食、果籃、禮籃或指定產品\n\n顧客也可選擇免費到店自取。\n\n餐飲美食請參照產品頁面的供應商發貨條款。"
  },
  // {
  //   idx: 8,
  //   title: "8. 購買預售產品的送貨費用應怎麽計算？",
  //   content: "預售產品的送貨費用計算方式跟普通產品一樣，但每輪發貨將分開計算運費。\n例如：同一訂單有三件預售產品 \n 1. 產品A $1,000 ，十月發貨 - 已經符合免運條件，該產品將獲免費送貨 \n2. 產品B $300，十二月發貨 - 此部分未達免運條件，將收取一次送貨費用 \n3. 產品C $200，一月發貨 - 此部分也未達免運條件，將收取第二次送貨費用"
  // },
  {
    idx: 9,
    title: "7. 我可以更改已確認訂單的送貨日期及地址嗎？",
    content: "訂單一經確認，將無法更改送貨日期及地址。如有任何疑問，請聯絡我們的顧客服務部，我們將盡力協助。"
  },
  {
    idx: 10,
    title: "8. 如果送貨當日無法收貨，可否再次安排改天送貨？",
    content: "如因顧客原因而須安排第二次派送，顧客須再次繳付送貨費用，詳情請留意相關送貨條款。"
  },
  {
    idx: 11,
    title: "9. 如果我不方便收貨，可否讓物流將訂單產品放在樓下、門外？",
    content: "基於衛生及安全理由，我們不建議訂單產品直接放在住宅大堂或單位門外。"
  },
  {
    idx: 12,
    title: "10. 爲什麽有些產品未能一併安排送貨？",
    content: "由於部分產品由供應商直接送貨，若您的訂單內同時包含一田直送及商戶直送的產品，我們將安排分次 （兩次或以上）送貨。預售產品將根據到貨日期安排發貨。不便之處，敬請原諒。"
  },
  {
    idx: 13,
    title: "11. 同時購買一田直送及預售產品的送貨費用應怎麽計算？",
    content: "預售產品的送貨費用計算方式跟一田直送一樣，但每輪發貨將分開計算運費。\n例如：同一訂單有一田直送$300及一田購物優惠日預售產品$1,800\n1. 一田直送 $300 - 此部分未達免運條件，將收取一次送貨費用\n2. 購物優惠日預售 $1,800 - 已經符合免運條件，此部分將獲免費送貨"
  }
];
const DeliveryFaq = () => {
  const [active, setActive] = reactExports.useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ]);
  const isSomeActive = active.some((element) => element);
  const handleClick = () => {
    isSomeActive ? setActive([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ]) : setActive([
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true
    ]);
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    " ",
    /* @__PURE__ */ jsx(
      FaqLayout,
      {
        handleClick,
        isSomeActive,
        data: data$7,
        turn: active,
        setTurn: setActive,
        title: "送貨上門"
      }
    )
  ] });
};
DeliveryFaq.title = "常見問題 | YATA eShop​";
const data$6 = [
  {
    idx: 1,
    title: "1. 什麽產品可以到店自取?",
    pic: "/faq/ques1.png",
    content: "大部分超市、百貨產品、一田現金禮券均可以到店自取。\n顯示為「商戶直送」的產品則不能到店自取，詳情請查看個別產品之取貨詳情。\n請注意：所有禮籃、果籃、部分餐飲美食只能安排送貨，不能自取。如須選購，請選擇「送貨上門」模式瀏覽網站。"
  },
  {
    idx: 2,
    title: "2. 哪些分店提供自取服務？",
    content: "目前我們7間分店（沙田店、大埔店、荃灣店、北角店、觀塘店、元朗店、屯門店）提供自取服務。\n\n我們在未來會分階段將「店鋪自取」服務開拓至全部分店，為顧客提供更方便的購物體驗。"
  },
  // {
  //   idx: 3,
  //   title: "3. 百貨產品可否在超市自取？",
  //   content: "爲了提供更方便的購物體驗予顧客，eShop所有百貨精選產品均可以於全線一田店舖自取。 "
  // },
  {
    idx: 4,
    title: "3. 到店自取會否有任何收費？",
    content: "為慶祝全新eShop登場，目前到店自取並沒有額外收費。"
  },
  {
    idx: 5,
    title: "4. 於成功訂購產品後，最快能於何時安排取貨？",
    content: "除預售活動外，我們的最快取貨日期如下：\n - 超市產品：最快第二天下午一時取貨*\n - 百貨產品：最快三天後取貨*\n - 餐飲美食、預售產品、一田現金禮券：請參閲產品頁面詳情\n*視乎分店配額，每個時段額滿即止\n"
  },
  {
    idx: 6,
    title: "5. 到店取貨會否設有時段？",
    content: "從您選擇的取貨日下午一點起，您可以在所選分店的營業時間內取貨。產品將會爲您保留三天（取貨日為第一日）。"
  },
  {
    idx: 7,
    title: "6. 到店後可如何取貨？",
    content: "成功付款後，您會收到一封訂單確認電郵。在訂單準備好後（一般會在取貨/送貨前一天），您將收到取貨提示電郵，裏面將包含一個取貨二維碼 (QR code)。顧客必須提供取貨二維碼到分店顧客服務部或指定專櫃取貨。"
  },
  {
    idx: 8,
    title: "7. 如果我的自取訂單裏有超市和百貨產品，是否須要待齊貨才能一併取貨？ ",
    content: "由於百貨產品轉運需時，如您希望盡快取到超市產品，可選擇分開取貨。否則您亦可以因應需要，選擇同一取貨日期。"
  },
  {
    idx: 9,
    title: "8. 我可以更改已確認訂單的取貨日期及分店嗎？",
    content: "訂單一經確認，將無法更改取貨日期及分店。如有任何疑問，請聯絡我們的顧客服務部，我們將盡力協助。"
  },
  {
    idx: 10,
    title: "9. 如果我未能在限期前到店取貨會怎樣？",
    content: "如您於限期內未領取產品，一田將自行處理有關產品，恕不作退款或另行通知。如須重新安排產品，我們將收取$50手續費，方可再次安排領取產品，詳情請聯絡顧客服務部安排。"
  }
];
const SelfPickupFaq = () => {
  const [active, setActive] = reactExports.useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ]);
  const isSomeActive = active.some((element) => element);
  const handleClick = () => {
    isSomeActive ? setActive([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ]) : setActive([true, true, true, true, true, true, true, true, true, true]);
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    FaqLayout,
    {
      handleClick,
      isSomeActive,
      data: data$6,
      turn: active,
      setTurn: setActive,
      title: "店舖自取"
    }
  ) });
};
SelfPickupFaq.title = "常見問題 | YATA eShop​";
const data$5 = [
  {
    idx: 1,
    title: "1. 如何訂購產品？",
    content: "您可透過網站的產品分類或於搜索欄位選取您的心儀產品，並把產品加入到購物車購買。"
  },
  {
    idx: 2,
    title: "2. 我想把心儀產品加入購物車，該如何做？",
    content: (
      // "您只須瀏覽「我的清單」，並點選「加入購物車」，便能將心儀產品直接放進購物車。"
      "您只須瀏覽「喜愛清單」，並點選「加入購物車」，便能將心儀產品直接放進購物車。"
    )
  },
  {
    idx: 3,
    title: "3. 當產品加入購物車後，我能否修改取貨方式？",
    content: "您可以於付款前隨時更改您的取貨方式。但由於各店之庫存有異，以及部分產品不適用於送貨或到店自取，轉換取貨方式，購物車裏的產品有機會庫存不足，或取貨方式不適用。"
  },
  {
    idx: 4,
    title: "4. 產品於加入購物車後應如何完成購物？",
    content: "您可於購物車內查看您的心儀產品，點選「結帳」，並填寫相關資料（若選擇送貨服務，須提供送貨地址​）。當您完成上述步驟後，便會進入付款程序。成功付款後，您便會收到一封由系統發出的訂單確認電郵，整個購物過程便會完成。"
  },
  // {
  //   idx: 5,
  //   title: "5. 當頁面彈出信息，說扣除特殊產品後，一田直送部分未滿$800並須收取送貨費用，我可以怎麽辦？",
  //   content: "如扣除不適用於計算送貨費用的產品後，一田直送部分未能符合免運條件，您可選擇：\n1. 繼續結賬並繳付送貨費用 \n2. 先為已免運費的產品（如商戶直送、餐飲服務等）結賬，其餘產品保留在購物車 \n\n您可以選擇將保留部分改爲「分店自取」，或繼續在「送貨上門」模式繼續購物"
  // },
  {
    idx: 6,
    title: "5. 如果我想將部分產品留待下次再買，可以怎麽辦？",
    content: "您可以將產品加入「喜愛清單」，以便往後查閲  ，然後將產品從購物車刪除。"
  },
  {
    idx: 7,
    title: "6. 購物車內仍未下單的產品於登出後還會保留嗎？",
    content: "購物車內的產品會繼續保留，您可以隨時登入繼續購買，但庫存將以下單時間作實。"
  },
  {
    idx: 8,
    title: "7. 如何查閱我的訂單狀態和過往購物紀錄？",
    content: "您可以隨時於「我的帳戶」的「訂單紀錄」內查看訂單狀態及過往購物紀錄。"
  },
  {
    idx: 9,
    title: "8. 我可以把個別訂單送往不同的收貨地址嗎？",
    content: "每張訂單都可以設定一個送貨地址。為方便送禮需要，果籃及禮籃更支援一張訂單配送至多個送貨地址。"
  }
];
const PurchaseFaq = () => {
  const [active, setActive] = reactExports.useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ]);
  const isSomeActive = active.some((element) => element);
  const handleClick = () => {
    isSomeActive ? setActive([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ]) : setActive([true, true, true, true, true, true, true, true, true]);
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    FaqLayout,
    {
      handleClick,
      isSomeActive,
      data: data$5,
      turn: active,
      setTurn: setActive,
      title: "訂購"
    }
  ) });
};
PurchaseFaq.title = "常見問題 | YATA eShop​";
const data$4 = [
  {
    idx: 1,
    title: "1. 有哪些付款方式可供選擇？",
    content: "目前一田eShop支援以下付款方式：\n信用卡： VISA、Mastercard、美國運通及銀聯 \n電子錢包：支付寶、微信支付、BoC Pay、PayMe"
  },
  {
    idx: 2,
    title: "2. 為甚麼我們要為每張送貨訂單收取$2包裝費？",
    content: "為確保產品在儲存及運送途中的質素，在產品分揀過程中，我們會使用膠袋和膠紙為您的訂單進行包裝。​"
  }
];
const PaymentFaq = () => {
  const [active, setActive] = reactExports.useState([false]);
  const isSomeActive = active.some((element) => element);
  const handleClick = () => {
    isSomeActive ? setActive([false]) : setActive([true]);
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    FaqLayout,
    {
      handleClick,
      isSomeActive,
      data: data$4,
      turn: active,
      setTurn: setActive,
      title: "結賬及付款"
    }
  ) });
};
PaymentFaq.title = "常見問題 | YATA eShop​";
const data$3 = [
  {
    idx: 1,
    title: "1. 一田的現金禮券及優惠券能否在eShop使用？",
    content: "目前eShop只接受YATA-Fans手機應用程式裏的電子現金券及購物折扣優惠券。\n所有實體券均不適用於eShop。詳情請查閲現金、優惠券細則。"
  },
  {
    idx: 2,
    title: "2. 如何在eShop使用電子優惠券？",
    content: "當您確認購買產品後，於訂單確認頁面選擇使用優惠碼/優惠券，輸入電子優惠券二維碼下方的號碼，然後按確認。系統將自動爲您計算優惠，並更新實際的付款金額。"
  },
  {
    idx: 3,
    title: "3. 什麼是eShop優惠碼？",
    content: "我們會不定期進行推廣，請留意網站上的推廣信息或電郵，以獲取最新優惠碼。"
  },
  {
    idx: 4,
    title: "4. 如何使用優惠碼？",
    content: "當您確認購買的產品後，於訂單確認頁面選擇使用優惠碼/優惠券，輸入優惠碼/優惠劵號碼​，然後按確認。系統便會自動根據優惠碼的推廣詳情提供優惠，並更新實際的付款金額。"
  },
  {
    idx: 5,
    title: "5. 優惠券及優惠碼能於同一訂單付款時一併使用嗎？",
    content: "每張訂單只能使用一個優惠券或優惠碼。"
  },
  {
    idx: 6,
    title: "6. 優惠券及優惠碼有使用期限嗎？",
    content: "詳情請查閱優惠券及優惠碼細則。​"
  },
  {
    idx: 7,
    title: "7. 優惠券及優惠碼可重覆使用嗎？",
    content: "電子優惠券只能單次使用。您可選擇在一田分店或eShop使用一次。\neShop優惠碼的使用性質及提供的優惠有所不同，詳情請參閱相關的推廣活動條款。"
  }
];
const PromoCodeFaq = () => {
  const [active, setActive] = reactExports.useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ]);
  const isSomeActive = active.some((element) => element);
  const handleClick = () => {
    isSomeActive ? setActive([false, false, false, false, false, false, false]) : setActive([true, true, true, true, true, true, true]);
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    FaqLayout,
    {
      handleClick,
      isSomeActive,
      data: data$3,
      turn: active,
      setTurn: setActive,
      title: "推廣優惠及優惠碼"
    }
  ) });
};
PromoCodeFaq.title = "常見問題 | YATA eShop​";
const data$2 = [
  {
    idx: 1,
    title: "1. 收貨前能否取消訂單？",
    content: "訂單一經確認，將無法更改或取消。店鋪自取亦不設現場更換尺寸、顏色、口味或款式。"
  },
  {
    idx: 2,
    title: "2. 收貨後能否退貨、換貨？",
    content: "除指定基於衛生或安全理由「不能退換」的產品外，其他產品請參閲一般退換條款。"
  },
  {
    idx: 3,
    title: "3. 如何申請退款、更換？",
    content: "請於「聯絡我們」表格聯絡我們的顧客服務部。如因品質情況提出申請，敬請提供產品相片。申請一經批核，我們將安排到店退貨或換貨。"
  }
];
const ReturnExchangeFaq = () => {
  const [active, setActive] = reactExports.useState([false, false, false]);
  const isSomeActive = active.some((element) => element);
  const handleClick = () => {
    isSomeActive ? setActive([false, false, false]) : setActive([true, true, true]);
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    FaqLayout,
    {
      handleClick,
      isSomeActive,
      data: data$2,
      turn: active,
      setTurn: setActive,
      title: "產品退換"
    }
  ) });
};
ReturnExchangeFaq.title = "常見問題 | YATA eShop​";
const data$1 = [
  {
    idx: 1,
    title: "1. 送禮果籃及禮籃有哪些配送模式？",
    content: "送禮果籃及禮籃只適用於送貨服務，並不適用於店舖自取。"
  },
  {
    idx: 2,
    title: "2. 如何訂購送禮果籃及禮籃？",
    content: "送禮果籃及禮籃的訂購流程跟一般產品一樣，但所選的產品將會放入獨立的購物車，需與其他超市、百貨產品分開訂購及付款。\n當您選擇心儀產品後並進入購物車頁面，選取「禮籃及果籃購物車」，按「更改數量及填寫送貨資料」後，將有小窗口讓您填寫收禮人資料及賀語。填好資料後按「結帳」，您可以為每個果籃及禮籃分別選擇送貨日期。"
  },
  {
    idx: 3,
    title: "3. 送禮果籃及禮籃的送貨費用怎麽計算？",
    content: "所有送禮果籃及禮籃的訂單均可享免費送貨服務（馬灣除外），不需額外支付額外送貨費用。每個配送至馬灣之果籃及禮籃需收取附加費用港幣200元正。下單前，請先聯繫顧客服務部作安排。"
  },
  {
    idx: 4,
    title: "4. 我可否一次過下單訂購數個果籃及禮籃，但設定不同送貨日期及送到不同地址？",
    content: "您可於同一訂單內購買數個禮籃，並分別設定不同的收禮人、送貨地址、日期、祝福語。您只需在加入購物車時於欄位輸入相應資料即可。"
  },
  {
    idx: 5,
    title: "5. 送禮果籃及禮籃內的產品可否更改？",
    content: "若您希望自訂送禮果籃及禮籃內的產品，請在禮籃頁面下載並填寫表格查詢，我們將有專人為您跟進有關訂購事宜。"
  },
  {
    idx: 6,
    title: "6. 送禮果籃及禮籃是否接受以公司名義作大量訂購？",
    content: "如您訂購的果籃及禮籃數目大於eShop庫存，請在果籃及禮籃頁面下載並填寫表格查詢，我們將有專人為您跟進有關訂購事宜。"
  }
];
const ProductHamperFaq = () => {
  const [active, setActive] = reactExports.useState([
    false,
    false,
    false,
    false,
    false,
    false
  ]);
  const isSomeActive = active.some((element) => element);
  const handleClick = () => {
    isSomeActive ? setActive([false, false, false, false, false, false]) : setActive([true, true, true, true, true, true]);
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    FaqLayout,
    {
      handleClick,
      isSomeActive,
      data: data$1,
      turn: active,
      setTurn: setActive,
      title: "送禮果籃、禮籃"
    }
  ) });
};
ProductHamperFaq.title = "常見問題 | YATA eShop​";
const data = [
  {
    idx: 1,
    title: "1. 餐飲美食有哪些配送模式？",
    content: "大部分餐飲美食只能安排送貨，實際情況請參閱食品介紹頁面的送貨或取貨詳情。"
  },
  {
    idx: 2,
    title: "2. 爲什麽我看到餐飲美食的網站廣告，卻無法找到相關選項？",
    content: "由於網頁只會顯示您所選擇的取貨方式下可供選購的產品，例如當您選擇了店舖自取，就無法看到只供送貨上門的餐飲美食。請嘗試透過更改取貨方式​以瀏覽更多餐飲美食選擇。"
  },
  {
    idx: 3,
    title: "3. 如何訂購餐飲美食？",
    content: "餐飲美食的訂購流程跟一般產品一樣，可與超市、百貨產品一起下單，並於購物車設定不同的送貨日期。請留意，如與其他產品一起下單，只能送往同一地址。"
  },
  {
    idx: 4,
    title: "4. 餐飲美食的送貨費用怎麽計算？",
    content: "餐飲美食的免運條件視乎個別供應商，詳情請參閱食品介紹頁面的送貨或取貨條件。"
  },
  {
    idx: 5,
    title: "5. 訂購後最快能安排幾天送貨？",
    content: "餐飲美食均爲供應商直接安排送貨，一般能於三至四天內安排送貨。實際情況請參閱食品介紹頁面的送貨或取貨詳情。"
  }
];
const ProductDiningFaq = () => {
  const [active, setActive] = reactExports.useState([false, false, false, false, false]);
  const isSomeActive = active.some((element) => element);
  const handleClick = () => {
    isSomeActive ? setActive([false, false, false, false, false]) : setActive([true, true, true, true, true]);
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    FaqLayout,
    {
      handleClick,
      isSomeActive,
      data,
      turn: active,
      setTurn: setActive,
      title: "餐飲美食"
    }
  ) });
};
ProductDiningFaq.title = "常見問題 | YATA eShop​";
const faq = {
  title: "常見問題",
  list: [
    {
      content: "瀏覽商品",
      path: "/ViewYata-React/about/faq/surf-products",
      route: "/faq/sidebar/BrowseProducts-Brown.png",
      active: "/faq/sidebar/BrowseProducts-White.png",
      id: "1",
      component: SurfProductsFaq
    },
    {
      content: "送貨上門",
      path: "/ViewYata-React/about/faq/delivery",
      route: "/faq/sidebar/Delivery-Brown.png",
      active: "/faq/sidebar/Delivery-White.png",
      id: "2",
      component: DeliveryFaq
    },
    {
      content: "店舖自取",
      path: "/ViewYata-React/about/faq/self-pickup",
      route: "/faq/sidebar/Pickup-Brown.png",
      active: "/faq/sidebar/Pickup-White.png",
      id: "3",
      component: SelfPickupFaq
    },
    {
      content: "會員登記",
      path: "/ViewYata-React/about/faq/registration",
      route: "/faq/sidebar/Member Registration-Brown.png",
      active: "/faq/sidebar/Member Registration-White.png",
      id: "4",
      component: RegistrationFaq
    },
    {
      content: "訂購",
      path: "/ViewYata-React/about/faq/purchase",
      route: "/faq/sidebar/Order-Brown.png",
      active: "/faq/sidebar/Order-White.png",
      id: "5",
      component: PurchaseFaq
    },
    {
      content: "結賬及付款",
      path: "/ViewYata-React/about/faq/payment",
      route: "/faq/sidebar/Payment-Brown.png",
      active: "/faq/sidebar/Payment-White.png",
      id: "6",
      component: PaymentFaq
    },
    {
      content: "推廣優惠及優惠碼",
      path: "/ViewYata-React/about/faq/promo-code",
      route: "/faq/sidebar/Payment-Brown.png",
      active: "/faq/sidebar/Payment-White.png",
      id: "7",
      component: PromoCodeFaq
    },
    {
      content: "貨品退換",
      path: "/ViewYata-React/about/faq/return-exchange",
      route: "/faq/sidebar/Return and Exchange-Brown.png",
      active: "/faq/sidebar/Return and Exchange-White.png",
      id: "8",
      component: ReturnExchangeFaq
    },
    {
      content: "送禮果籃、禮籃",
      path: "/ViewYata-React/about/faq/product-hamper",
      route: "/faq/sidebar/Special Order-Brown.png",
      active: "/faq/sidebar/Special Order-White.png",
      id: "8",
      component: ProductHamperFaq
    },
    {
      content: "餐飲美食",
      path: "/ViewYata-React/about/faq/product-dining",
      route: "/faq/sidebar/Special Order-Brown.png",
      active: "/faq/sidebar/Special Order-White.png",
      id: "9",
      component: ProductDiningFaq
    }
  ]
};
var react = {};
Object.defineProperty(react, "__esModule", { value: true });
var n$3 = reactExports;
function t$5(n2) {
  return Array.prototype.slice.call(n2);
}
function e$3(n2, t2) {
  var e2 = Math.floor(n2);
  return e2 === t2 || e2 + 1 === t2 ? n2 : t2;
}
function i$3() {
  return Date.now();
}
function r$4(n2, t2, e2) {
  if (t2 = "data-keen-slider-" + t2, null === e2)
    return n2.removeAttribute(t2);
  n2.setAttribute(t2, e2 || "");
}
function a$6(n2, e2) {
  return e2 = e2 || document, "function" == typeof n2 && (n2 = n2(e2)), Array.isArray(n2) ? n2 : "string" == typeof n2 ? t$5(e2.querySelectorAll(n2)) : n2 instanceof HTMLElement ? [n2] : n2 instanceof NodeList ? t$5(n2) : [];
}
function o$5(n2) {
  n2.raw && (n2 = n2.raw), n2.cancelable && !n2.defaultPrevented && n2.preventDefault();
}
function u$4(n2) {
  n2.raw && (n2 = n2.raw), n2.stopPropagation && n2.stopPropagation();
}
function c$8() {
  var n2 = [];
  return { add: function(t2, e2, i2, r2) {
    t2.addListener ? t2.addListener(i2) : t2.addEventListener(e2, i2, r2), n2.push([t2, e2, i2, r2]);
  }, input: function(n3, t2, e2, i2) {
    this.add(n3, t2, function(n4) {
      return function(t3) {
        t3.nativeEvent && (t3 = t3.nativeEvent);
        var e3 = t3.changedTouches || [], i3 = t3.targetTouches || [], r2 = t3.detail && t3.detail.x ? t3.detail : null;
        return n4({ id: r2 ? r2.identifier ? r2.identifier : "i" : i3[0] ? i3[0] ? i3[0].identifier : "e" : "d", idChanged: r2 ? r2.identifier ? r2.identifier : "i" : e3[0] ? e3[0] ? e3[0].identifier : "e" : "d", raw: t3, x: r2 && r2.x ? r2.x : i3[0] ? i3[0].screenX : r2 ? r2.x : t3.pageX, y: r2 && r2.y ? r2.y : i3[0] ? i3[0].screenY : r2 ? r2.y : t3.pageY });
      };
    }(e2), i2);
  }, purge: function() {
    n2.forEach(function(n3) {
      n3[0].removeListener ? n3[0].removeListener(n3[2]) : n3[0].removeEventListener(n3[1], n3[2], n3[3]);
    }), n2 = [];
  } };
}
function s$7(n2, t2, e2) {
  return Math.min(Math.max(n2, t2), e2);
}
function d$6(n2) {
  return (n2 > 0 ? 1 : 0) - (n2 < 0 ? 1 : 0) || +n2;
}
function l$5(n2) {
  var t2 = n2.getBoundingClientRect();
  return { height: e$3(t2.height, n2.offsetHeight), width: e$3(t2.width, n2.offsetWidth) };
}
function f$4(n2, t2, e2, i2) {
  var r2 = n2 && n2[t2];
  return null == r2 ? e2 : i2 && "function" == typeof r2 ? r2() : r2;
}
function p$5(n2) {
  return Math.round(1e6 * n2) / 1e6;
}
function v$1(n2, t2) {
  if (n2 === t2)
    return true;
  var e2 = typeof n2;
  if (e2 !== typeof t2)
    return false;
  if ("object" !== e2 || null === n2 || null === t2)
    return "function" === e2 && n2.toString() === t2.toString();
  if (n2.length !== t2.length || Object.getOwnPropertyNames(n2).length !== Object.getOwnPropertyNames(t2).length)
    return false;
  for (var i2 in n2)
    if (!v$1(n2[i2], t2[i2]))
      return false;
  return true;
}
var h$5 = function() {
  return h$5 = Object.assign || function(n2) {
    for (var t2, e2 = 1, i2 = arguments.length; e2 < i2; e2++)
      for (var r2 in t2 = arguments[e2])
        Object.prototype.hasOwnProperty.call(t2, r2) && (n2[r2] = t2[r2]);
    return n2;
  }, h$5.apply(this, arguments);
};
function m$2(n2, t2, e2) {
  if (e2 || 2 === arguments.length)
    for (var i2, r2 = 0, a2 = t2.length; r2 < a2; r2++)
      !i2 && r2 in t2 || (i2 || (i2 = Array.prototype.slice.call(t2, 0, r2)), i2[r2] = t2[r2]);
  return n2.concat(i2 || Array.prototype.slice.call(t2));
}
function g$1(n2) {
  var t2, e2, i2, r2, a2, o3;
  function u2(t3) {
    o3 || (o3 = t3), c2(true);
    var a3 = t3 - o3;
    a3 > i2 && (a3 = i2);
    var l3 = r2[e2];
    if (l3[3] < a3)
      return e2++, u2(t3);
    var f2 = l3[2], p2 = l3[4], v2 = l3[0], h2 = l3[1] * (0, l3[5])(0 === p2 ? 1 : (a3 - f2) / p2);
    if (h2 && n2.track.to(v2 + h2), a3 < i2)
      return d2();
    o3 = null, c2(false), s2(null), n2.emit("animationEnded");
  }
  function c2(n3) {
    t2.active = n3;
  }
  function s2(n3) {
    t2.targetIdx = n3;
  }
  function d2() {
    var n3;
    n3 = u2, a2 = window.requestAnimationFrame(n3);
  }
  function l2() {
    var t3;
    t3 = a2, window.cancelAnimationFrame(t3), c2(false), s2(null), o3 && n2.emit("animationStopped"), o3 = null;
  }
  return t2 = { active: false, start: function(t3) {
    if (l2(), n2.track.details) {
      var a3 = 0, o4 = n2.track.details.position;
      e2 = 0, i2 = 0, r2 = t3.map(function(n3) {
        var t4, e3 = Number(o4), r3 = null !== (t4 = n3.earlyExit) && void 0 !== t4 ? t4 : n3.duration, u3 = n3.easing, c3 = n3.distance * u3(r3 / n3.duration) || 0;
        o4 += c3;
        var s3 = i2;
        return i2 += r3, a3 += c3, [e3, n3.distance, s3, i2, n3.duration, u3];
      }), s2(n2.track.distToIdx(a3)), d2(), n2.emit("animationStarted");
    }
  }, stop: l2, targetIdx: null };
}
function b$1(n2) {
  var t2, e2, r2, a2, o3, u2, c2, l2, v2, h2, g2, b2, y2, x2, k2 = 1 / 0, w2 = [], M2 = null, T2 = 0;
  function C2(n3) {
    P2(T2 + n3);
  }
  function E2(n3) {
    var t3 = z2(T2 + n3).abs;
    return O2(t3) ? t3 : null;
  }
  function z2(n3) {
    var t3 = Math.floor(Math.abs(p$5(n3 / e2))), i2 = p$5((n3 % e2 + e2) % e2);
    i2 === e2 && (i2 = 0);
    var r3 = d$6(n3), a3 = c2.indexOf(m$2([], c2, true).reduce(function(n4, t4) {
      return Math.abs(t4 - i2) < Math.abs(n4 - i2) ? t4 : n4;
    })), o4 = a3;
    return r3 < 0 && t3++, a3 === u2 && (o4 = 0, t3 += r3 > 0 ? 1 : -1), { abs: o4 + t3 * u2 * r3, origin: a3, rel: o4 };
  }
  function I2(n3, t3, e3) {
    var i2;
    if (t3 || !S2())
      return A2(n3, e3);
    if (!O2(n3))
      return null;
    var r3 = z2(null != e3 ? e3 : T2), a3 = r3.abs, o4 = n3 - r3.rel, c3 = a3 + o4;
    i2 = A2(c3);
    var s2 = A2(c3 - u2 * d$6(o4));
    return (null !== s2 && Math.abs(s2) < Math.abs(i2) || null === i2) && (i2 = s2), p$5(i2);
  }
  function A2(n3, t3) {
    if (null == t3 && (t3 = p$5(T2)), !O2(n3) || null === n3)
      return null;
    n3 = Math.round(n3);
    var i2 = z2(t3), r3 = i2.abs, a3 = i2.rel, o4 = i2.origin, s2 = L2(n3), d2 = (t3 % e2 + e2) % e2, l3 = c2[o4], f2 = Math.floor((n3 - (r3 - a3)) / u2) * e2;
    return p$5(l3 - d2 - l3 + c2[s2] + f2 + (o4 === u2 ? e2 : 0));
  }
  function O2(n3) {
    return D2(n3) === n3;
  }
  function D2(n3) {
    return s$7(n3, v2, h2);
  }
  function S2() {
    return a2.loop;
  }
  function L2(n3) {
    return (n3 % u2 + u2) % u2;
  }
  function P2(t3) {
    var e3;
    e3 = t3 - T2, w2.push({ distance: e3, timestamp: i$3() }), w2.length > 6 && (w2 = w2.slice(-6)), T2 = p$5(t3);
    var r3 = _2().abs;
    if (r3 !== M2) {
      var a3 = null !== M2;
      M2 = r3, a3 && n2.emit("slideChanged");
    }
  }
  function _2(i2) {
    var c3 = i2 ? null : function() {
      if (u2) {
        var n3 = S2(), t3 = n3 ? (T2 % e2 + e2) % e2 : T2, i3 = (n3 ? T2 % e2 : T2) - o3[0][2], c4 = 0 - (i3 < 0 && n3 ? e2 - Math.abs(i3) : i3), s2 = 0, l3 = z2(T2), f2 = l3.abs, p2 = l3.rel, m2 = o3[p2][2], k3 = o3.map(function(t4, i4) {
          var r3 = c4 + s2;
          (r3 < 0 - t4[0] || r3 > 1) && (r3 += (Math.abs(r3) > e2 - 1 && n3 ? e2 : 0) * d$6(-r3));
          var o4 = i4 - p2, l4 = d$6(o4), v3 = o4 + f2;
          n3 && (-1 === l4 && r3 > m2 && (v3 += u2), 1 === l4 && r3 < m2 && (v3 -= u2), null !== g2 && v3 < g2 && (r3 += e2), null !== b2 && v3 > b2 && (r3 -= e2));
          var h3 = r3 + t4[0] + t4[1], y3 = Math.max(r3 >= 0 && h3 <= 1 ? 1 : h3 < 0 || r3 > 1 ? 0 : r3 < 0 ? Math.min(1, (t4[0] + r3) / t4[0]) : (1 - r3) / t4[0], 0);
          return s2 += t4[0] + t4[1], { abs: v3, distance: a2.rtl ? -1 * r3 + 1 - t4[0] : r3, portion: y3, size: t4[0] };
        });
        return f2 = D2(f2), p2 = L2(f2), { abs: D2(f2), length: r2, max: x2, maxIdx: h2, min: y2, minIdx: v2, position: T2, progress: n3 ? t3 / e2 : T2 / r2, rel: p2, slides: k3, slidesLength: e2 };
      }
    }();
    return t2.details = c3, n2.emit("detailsChanged"), c3;
  }
  return t2 = { absToRel: L2, add: C2, details: null, distToIdx: E2, idxToDist: I2, init: function(t3) {
    if (function() {
      if (a2 = n2.options, o3 = (a2.trackConfig || []).map(function(n3) {
        return [f$4(n3, "size", 1), f$4(n3, "spacing", 0), f$4(n3, "origin", 0)];
      }), u2 = o3.length) {
        e2 = p$5(o3.reduce(function(n3, t5) {
          return n3 + t5[0] + t5[1];
        }, 0));
        var t4, i3 = u2 - 1;
        r2 = p$5(e2 + o3[0][2] - o3[i3][0] - o3[i3][2] - o3[i3][1]), c2 = o3.reduce(function(n3, e3) {
          if (!n3)
            return [0];
          var i4 = o3[n3.length - 1], r3 = n3[n3.length - 1] + (i4[0] + i4[2]) + i4[1];
          return r3 -= e3[2], n3[n3.length - 1] > r3 && (r3 = n3[n3.length - 1]), r3 = p$5(r3), n3.push(r3), (!t4 || t4 < r3) && (l2 = n3.length - 1), t4 = r3, n3;
        }, null), 0 === r2 && (l2 = 0), c2.push(p$5(e2));
      }
    }(), !u2)
      return _2(true);
    var i2;
    !function() {
      var t4 = n2.options.range, e3 = n2.options.loop;
      g2 = v2 = e3 ? f$4(e3, "min", -1 / 0) : 0, b2 = h2 = e3 ? f$4(e3, "max", k2) : l2;
      var i3 = f$4(t4, "min", null), r3 = f$4(t4, "max", null);
      i3 && (v2 = i3), r3 && (h2 = r3), y2 = v2 === -1 / 0 ? v2 : n2.track.idxToDist(v2 || 0, true, 0), x2 = h2 === k2 ? h2 : I2(h2, true, 0), null === r3 && (b2 = h2), f$4(t4, "align", false) && h2 !== k2 && 0 === o3[L2(h2)][2] && (x2 -= 1 - o3[L2(h2)][0], h2 = E2(x2 - T2)), y2 = p$5(y2), x2 = p$5(x2);
    }(), i2 = t3, Number(i2) === i2 ? C2(A2(D2(t3))) : _2();
  }, to: P2, velocity: function() {
    var n3 = i$3(), t3 = w2.reduce(function(t4, e3) {
      var i2 = e3.distance, r3 = e3.timestamp;
      return n3 - r3 > 200 || (d$6(i2) !== d$6(t4.distance) && t4.distance && (t4 = { distance: 0, lastTimestamp: 0, time: 0 }), t4.time && (t4.distance += i2), t4.lastTimestamp && (t4.time += r3 - t4.lastTimestamp), t4.lastTimestamp = r3), t4;
    }, { distance: 0, lastTimestamp: 0, time: 0 });
    return t3.distance / t3.time || 0;
  } };
}
function y$5(n2) {
  var t2, e2, i2, r2, a2, o3, u2, c2;
  function l2(n3) {
    return 2 * n3;
  }
  function f2(n3) {
    return s$7(n3, u2, c2);
  }
  function p2(n3) {
    return 1 - Math.pow(1 - n3, 3);
  }
  function v2() {
    return i2 ? n2.track.velocity() : 0;
  }
  function h2() {
    b2();
    var t3 = "free-snap" === n2.options.mode, e3 = n2.track, i3 = v2();
    r2 = d$6(i3);
    var u3 = n2.track.details, c3 = [];
    if (i3 || !t3) {
      var s2 = m2(i3), h3 = s2.dist, g3 = s2.dur;
      if (g3 = l2(g3), h3 *= r2, t3) {
        var y2 = e3.idxToDist(e3.distToIdx(h3), true);
        y2 && (h3 = y2);
      }
      c3.push({ distance: h3, duration: g3, easing: p2 });
      var x2 = u3.position, k2 = x2 + h3;
      if (k2 < a2 || k2 > o3) {
        var w2 = k2 < a2 ? a2 - x2 : o3 - x2, M2 = 0, T2 = i3;
        if (d$6(w2) === r2) {
          var C2 = Math.min(Math.abs(w2) / Math.abs(h3), 1), E2 = function(n3) {
            return 1 - Math.pow(1 - n3, 1 / 3);
          }(C2) * g3;
          c3[0].earlyExit = E2, T2 = i3 * (1 - C2);
        } else
          c3[0].earlyExit = 0, M2 += w2;
        var z2 = m2(T2, 100), I2 = z2.dist * r2;
        n2.options.rubberband && (c3.push({ distance: I2, duration: l2(z2.dur), easing: p2 }), c3.push({ distance: -I2 + M2, duration: 500, easing: p2 }));
      }
      n2.animator.start(c3);
    } else
      n2.moveToIdx(f2(u3.abs), true, { duration: 500, easing: function(n3) {
        return 1 + --n3 * n3 * n3 * n3 * n3;
      } });
  }
  function m2(n3, t3) {
    void 0 === t3 && (t3 = 1e3);
    var e3 = 147e-9 + (n3 = Math.abs(n3)) / t3;
    return { dist: Math.pow(n3, 2) / e3, dur: n3 / e3 };
  }
  function g2() {
    var t3 = n2.track.details;
    t3 && (a2 = t3.min, o3 = t3.max, u2 = t3.minIdx, c2 = t3.maxIdx);
  }
  function b2() {
    n2.animator.stop();
  }
  n2.on("updated", g2), n2.on("optionsChanged", g2), n2.on("created", g2), n2.on("dragStarted", function() {
    i2 = false, b2(), t2 = e2 = n2.track.details.abs;
  }), n2.on("dragChecked", function() {
    i2 = true;
  }), n2.on("dragEnded", function() {
    var i3 = n2.options.mode;
    "snap" === i3 && function() {
      var i4 = n2.track, r3 = n2.track.details, u3 = r3.position, c3 = d$6(v2());
      (u3 > o3 || u3 < a2) && (c3 = 0);
      var s2 = t2 + c3;
      0 === r3.slides[i4.absToRel(s2)].portion && (s2 -= c3), t2 !== e2 && (s2 = e2), d$6(i4.idxToDist(s2, true)) !== c3 && (s2 += c3), s2 = f2(s2);
      var l3 = i4.idxToDist(s2, true);
      n2.animator.start([{ distance: l3, duration: 500, easing: function(n3) {
        return 1 + --n3 * n3 * n3 * n3 * n3;
      } }]);
    }(), "free" !== i3 && "free-snap" !== i3 || h2();
  }), n2.on("dragged", function() {
    e2 = n2.track.details.abs;
  });
}
function x$1(n2) {
  var t2, e2, i2, r2, l2, f2, p2, v2, h2, m2, g2, b2, y2, x2, k2, w2, M2, T2, C2 = c$8();
  function E2(t3) {
    if (f2 && v2 === t3.id) {
      var a2 = O2(t3);
      if (h2) {
        if (!A2(t3))
          return I2(t3);
        m2 = a2, h2 = false, n2.emit("dragChecked");
      }
      if (w2)
        return m2 = a2;
      o$5(t3);
      var c2 = function(t4) {
        if (M2 === -1 / 0 && T2 === 1 / 0)
          return t4;
        var i3 = n2.track.details, a3 = i3.length, o3 = i3.position, u2 = s$7(t4, M2 - o3, T2 - o3);
        if (0 === a3)
          return 0;
        if (!n2.options.rubberband)
          return u2;
        if (o3 <= T2 && o3 >= M2)
          return t4;
        if (o3 < M2 && e2 > 0 || o3 > T2 && e2 < 0)
          return t4;
        var c3 = (o3 < M2 ? o3 - M2 : o3 - T2) / a3, d2 = r2 * a3, f3 = Math.abs(c3 * d2), p3 = Math.max(0, 1 - f3 / l2 * 2);
        return p3 * p3 * t4;
      }(p2(m2 - a2) / r2 * i2);
      e2 = d$6(c2);
      var y3 = n2.track.details.position;
      (y3 > M2 && y3 < T2 || y3 === M2 && e2 > 0 || y3 === T2 && e2 < 0) && u$4(t3), g2 += c2, !b2 && Math.abs(g2 * r2) > 5 && (b2 = true), n2.track.add(c2), m2 = a2, n2.emit("dragged");
    }
  }
  function z2(t3) {
    !f2 && n2.track.details && n2.track.details.length && (g2 = 0, f2 = true, b2 = false, h2 = true, v2 = t3.id, A2(t3), m2 = O2(t3), n2.emit("dragStarted"));
  }
  function I2(t3) {
    f2 && v2 === t3.idChanged && (f2 = false, n2.emit("dragEnded"));
  }
  function A2(n3) {
    var t3 = D2(), e3 = t3 ? n3.y : n3.x, i3 = t3 ? n3.x : n3.y, r3 = void 0 !== y2 && void 0 !== x2 && Math.abs(x2 - i3) <= Math.abs(y2 - e3);
    return y2 = e3, x2 = i3, r3;
  }
  function O2(n3) {
    return D2() ? n3.y : n3.x;
  }
  function D2() {
    return n2.options.vertical;
  }
  function S2() {
    r2 = n2.size, l2 = D2() ? window.innerHeight : window.innerWidth;
    var t3 = n2.track.details;
    t3 && (M2 = t3.min, T2 = t3.max);
  }
  function L2(n3) {
    b2 && (u$4(n3), o$5(n3));
  }
  function P2() {
    if (C2.purge(), n2.options.drag && !n2.options.disabled) {
      var e3;
      e3 = n2.options.dragSpeed || 1, p2 = "function" == typeof e3 ? e3 : function(n3) {
        return n3 * e3;
      }, i2 = n2.options.rtl ? -1 : 1, S2(), t2 = n2.container, function() {
        var n3 = "data-keen-slider-clickable";
        a$6("[".concat(n3, "]:not([").concat(n3, "=false])"), t2).map(function(n4) {
          C2.add(n4, "dragstart", u$4), C2.add(n4, "mousedown", u$4), C2.add(n4, "touchstart", u$4);
        });
      }(), C2.add(t2, "dragstart", function(n3) {
        o$5(n3);
      }), C2.add(t2, "click", L2, { capture: true }), C2.input(t2, "ksDragStart", z2), C2.input(t2, "ksDrag", E2), C2.input(t2, "ksDragEnd", I2), C2.input(t2, "mousedown", z2), C2.input(t2, "mousemove", E2), C2.input(t2, "mouseleave", I2), C2.input(t2, "mouseup", I2), C2.input(t2, "touchstart", z2, { passive: true }), C2.input(t2, "touchmove", E2, { passive: false }), C2.input(t2, "touchend", I2), C2.input(t2, "touchcancel", I2), C2.add(window, "wheel", function(n3) {
        f2 && o$5(n3);
      });
      var r3 = "data-keen-slider-scrollable";
      a$6("[".concat(r3, "]:not([").concat(r3, "=false])"), n2.container).map(function(n3) {
        return function(n4) {
          var t3;
          C2.input(n4, "touchstart", function(n5) {
            t3 = O2(n5), w2 = true, k2 = true;
          }, { passive: true }), C2.input(n4, "touchmove", function(e4) {
            var i3 = D2(), r4 = i3 ? n4.scrollHeight - n4.clientHeight : n4.scrollWidth - n4.clientWidth, a2 = t3 - O2(e4), u2 = i3 ? n4.scrollTop : n4.scrollLeft, c2 = i3 && "scroll" === n4.style.overflowY || !i3 && "scroll" === n4.style.overflowX;
            if (t3 = O2(e4), (a2 < 0 && u2 > 0 || a2 > 0 && u2 < r4) && k2 && c2)
              return w2 = true;
            k2 = false, o$5(e4), w2 = false;
          }), C2.input(n4, "touchend", function() {
            w2 = false;
          });
        }(n3);
      });
    }
  }
  n2.on("updated", S2), n2.on("optionsChanged", P2), n2.on("created", P2), n2.on("destroyed", C2.purge);
}
function k(n2) {
  var t2, e2, i2 = null;
  function r2(t3, e3, i3) {
    n2.animator.active ? o3(t3, e3, i3) : requestAnimationFrame(function() {
      return o3(t3, e3, i3);
    });
  }
  function a2() {
    r2(false, false, e2);
  }
  function o3(e3, r3, a3) {
    var o4 = 0, u3 = n2.size, d3 = n2.track.details;
    if (d3 && t2) {
      var l3 = d3.slides;
      t2.forEach(function(n3, t3) {
        if (e3)
          !i2 && r3 && c2(n3, null, a3), s2(n3, null, a3);
        else {
          if (!l3[t3])
            return;
          var d4 = l3[t3].size * u3;
          !i2 && r3 && c2(n3, d4, a3), s2(n3, l3[t3].distance * u3 - o4, a3), o4 += d4;
        }
      });
    }
  }
  function u2(t3) {
    return "performance" === n2.options.renderMode ? Math.round(t3) : t3;
  }
  function c2(n3, t3, e3) {
    var i3 = e3 ? "height" : "width";
    null !== t3 && (t3 = u2(t3) + "px"), n3.style["min-" + i3] = t3, n3.style["max-" + i3] = t3;
  }
  function s2(n3, t3, e3) {
    if (null !== t3) {
      t3 = u2(t3);
      var i3 = e3 ? t3 : 0;
      t3 = "translate3d(".concat(e3 ? 0 : t3, "px, ").concat(i3, "px, 0)");
    }
    n3.style.transform = t3, n3.style["-webkit-transform"] = t3;
  }
  function d2() {
    t2 && (o3(true, true, e2), t2 = null), n2.on("detailsChanged", a2, true);
  }
  function l2() {
    r2(false, true, e2);
  }
  function p2() {
    d2(), e2 = n2.options.vertical, n2.options.disabled || "custom" === n2.options.renderMode || (i2 = "auto" === f$4(n2.options.slides, "perView", null), n2.on("detailsChanged", a2), (t2 = n2.slides).length && l2());
  }
  n2.on("created", p2), n2.on("optionsChanged", p2), n2.on("beforeOptionsChanged", function() {
    d2();
  }), n2.on("updated", l2), n2.on("destroyed", d2);
}
function w$2(n2, t2) {
  return function(e2) {
    var i2, o3, u2, s2, p2, v2 = c$8();
    function m2(n3) {
      var t3;
      r$4(e2.container, "reverse", "rtl" !== (t3 = e2.container, window.getComputedStyle(t3, null).getPropertyValue("direction")) || n3 ? null : ""), r$4(e2.container, "v", e2.options.vertical && !n3 ? "" : null), r$4(e2.container, "disabled", e2.options.disabled && !n3 ? "" : null);
    }
    function g2() {
      b2() && M2();
    }
    function b2() {
      var n3 = null;
      if (s2.forEach(function(t4) {
        t4.matches && (n3 = t4.__media);
      }), n3 === i2)
        return false;
      i2 || e2.emit("beforeOptionsChanged"), i2 = n3;
      var t3 = n3 ? u2.breakpoints[n3] : u2;
      return e2.options = h$5(h$5({}, u2), t3), m2(), I2(), A2(), C2(), true;
    }
    function y2(n3) {
      var t3 = l$5(n3);
      return (e2.options.vertical ? t3.height : t3.width) / e2.size || 1;
    }
    function x2() {
      return e2.options.trackConfig.length;
    }
    function k2(n3) {
      for (var r2 in i2 = false, u2 = h$5(h$5({}, t2), n3), v2.purge(), o3 = e2.size, s2 = [], u2.breakpoints || []) {
        var a2 = window.matchMedia(r2);
        a2.__media = r2, s2.push(a2), v2.add(a2, "change", g2);
      }
      v2.add(window, "orientationchange", z2), v2.add(window, "resize", E2), b2();
    }
    function w2(n3) {
      e2.animator.stop();
      var t3 = e2.track.details;
      e2.track.init(null != n3 ? n3 : t3 ? t3.abs : 0);
    }
    function M2(n3) {
      w2(n3), e2.emit("optionsChanged");
    }
    function T2(n3, t3) {
      if (n3)
        return k2(n3), void M2(t3);
      I2(), A2();
      var i3 = x2();
      C2(), x2() !== i3 ? M2(t3) : w2(t3), e2.emit("updated");
    }
    function C2() {
      var n3 = e2.options.slides;
      if ("function" == typeof n3)
        return e2.options.trackConfig = n3(e2.size, e2.slides);
      for (var t3 = e2.slides, i3 = t3.length, r2 = "number" == typeof n3 ? n3 : f$4(n3, "number", i3, true), a2 = [], o4 = f$4(n3, "perView", 1, true), u3 = f$4(n3, "spacing", 0, true) / e2.size || 0, c2 = "auto" === o4 ? u3 : u3 / o4, s3 = f$4(n3, "origin", "auto"), d2 = 0, l2 = 0; l2 < r2; l2++) {
        var p3 = "auto" === o4 ? y2(t3[l2]) : 1 / o4 - u3 + c2, v3 = "center" === s3 ? 0.5 - p3 / 2 : "auto" === s3 ? 0 : s3;
        a2.push({ origin: v3, size: p3, spacing: u3 }), d2 += p3;
      }
      if (d2 += u3 * (r2 - 1), "auto" === s3 && !e2.options.loop && 1 !== o4) {
        var h2 = 0;
        a2.map(function(n4) {
          var t4 = d2 - h2;
          return h2 += n4.size + u3, t4 >= 1 || (n4.origin = 1 - t4 - (d2 > 1 ? 0 : 1 - d2)), n4;
        });
      }
      e2.options.trackConfig = a2;
    }
    function E2() {
      I2();
      var n3 = e2.size;
      e2.options.disabled || n3 === o3 || (o3 = n3, T2());
    }
    function z2() {
      E2(), setTimeout(E2, 500), setTimeout(E2, 2e3);
    }
    function I2() {
      var n3 = l$5(e2.container);
      e2.size = (e2.options.vertical ? n3.height : n3.width) || 1;
    }
    function A2() {
      e2.slides = a$6(e2.options.selector, e2.container);
    }
    e2.container = (p2 = a$6(n2, document)).length ? p2[0] : null, e2.destroy = function() {
      v2.purge(), e2.emit("destroyed"), m2(true);
    }, e2.prev = function() {
      e2.moveToIdx(e2.track.details.abs - 1, true);
    }, e2.next = function() {
      e2.moveToIdx(e2.track.details.abs + 1, true);
    }, e2.update = T2, k2(e2.options);
  };
}
var M$4 = function(n2, t2, e2) {
  try {
    return function(n3, t3) {
      var e3, i2 = {};
      return e3 = { emit: function(n4) {
        i2[n4] && i2[n4].forEach(function(n5) {
          n5(e3);
        });
        var t4 = e3.options && e3.options[n4];
        t4 && t4(e3);
      }, moveToIdx: function(n4, t4, i3) {
        var r2 = e3.track.idxToDist(n4, t4);
        if (r2) {
          var a2 = e3.options.defaultAnimation;
          e3.animator.start([{ distance: r2, duration: f$4(i3 || a2, "duration", 500), easing: f$4(i3 || a2, "easing", function(n5) {
            return 1 + --n5 * n5 * n5 * n5 * n5;
          }) }]);
        }
      }, on: function(n4, t4, e4) {
        void 0 === e4 && (e4 = false), i2[n4] || (i2[n4] = []);
        var r2 = i2[n4].indexOf(t4);
        r2 > -1 ? e4 && delete i2[n4][r2] : e4 || i2[n4].push(t4);
      }, options: n3 }, function() {
        if (e3.track = b$1(e3), e3.animator = g$1(e3), t3)
          for (var n4 = 0, i3 = t3; n4 < i3.length; n4++)
            (0, i3[n4])(e3);
        e3.track.init(e3.options.initial || 0), e3.emit("created");
      }(), e3;
    }(t2, m$2([w$2(n2, { drag: true, mode: "snap", renderMode: "precision", rubberband: true, selector: ".keen-slider__slide" }), k, x$1, y$5], e2 || [], true));
  } catch (n3) {
    console.error(n3);
  }
};
var useKeenSlider = react.useKeenSlider = function(t2, e2) {
  var i2 = n$3.useRef(null), r2 = n$3.useRef(false), a2 = n$3.useRef(t2), o3 = n$3.useCallback(function(n2) {
    n2 ? (a2.current = t2, i2.current = new M$4(n2, t2, e2), r2.current = false) : (i2.current && i2.current.destroy && i2.current.destroy(), i2.current = null);
  }, []);
  return n$3.useEffect(function() {
    v$1(a2.current, t2) || (a2.current = t2, i2.current && i2.current.update(a2.current));
  }, [t2]), [o3, i2];
};
const ImageSliderArrow = (props) => {
  const disabled = props.disabled ? /* @__PURE__ */ jsx(ChevronDownSvg, { fill: " rgba(255, 255, 255, 0.5)" }) : "";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      onClick: props.onClick,
      className: `translate-y-[50%] top-[40%] absolute lg:max-w-[24rem] cursor-pointer bg-yata-deep/60 p-1 rounded-full ${props.left ? "left-2" : "left-auto right-2"} ${disabled}`,
      children: [
        props.left && /* @__PURE__ */ jsx(ChevronDownSvg, { className: "w-6 h-6 rotate-90", fill: "#fff" }),
        !props.left && /* @__PURE__ */ jsx(ChevronRightSvg, { className: "w-6 h-6 ", fill: "#fff" })
      ]
    }
  );
};
const ThumbnailPlugin = (mainRef) => {
  return (slider) => {
    const removeActive = () => {
      slider.slides.forEach((slide) => slide.classList.remove("active"));
    };
    const addActive = (idx) => {
      slider.slides[idx].classList.add("active");
    };
    const addClickEvents = () => {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current)
            mainRef.current.moveToIdx(idx);
        });
      });
    };
    slider.on("created", () => {
      if (!mainRef.current)
        return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(next);
      });
    });
  };
};
function ItemImageBox({ plu, images }) {
  useAppSelector(selectImgUrl);
  const [currentSlide, setCurrentSlide] = reactExports.useState(0);
  const [loaded, setLoaded] = reactExports.useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    defaultAnimation: {
      duration: 1e3
    }
  });
  const [thumbnailRef] = useKeenSlider(
    {
      loop: true,
      initial: 0,
      slides: { perView: 5, spacing: 4 }
    },
    [ThumbnailPlugin(instanceRef)]
  );
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "lg:w-full lg:max-w-[24rem]", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: "relative flex items-center mb-3 overflow-hidden border border-dotted rounded-2xl lg:mt-3 lg:w-full lg:aspect-square h-60 lg:h-auto border-yata-brown " + (images.length == 0 ? "bg-grey" : ""),
        children: [
          images.length > 0 && /* @__PURE__ */ jsx(
            "div",
            {
              ref: sliderRef,
              className: "w-full overflow-hidden h-60 lg:h-auto rounded-2xl keen-slider",
              children: images.map((image, idx) => /* @__PURE__ */ jsx(
                "div",
                {
                  className: "flex items-center justify-center w-full keen-slider__slide",
                  children: /* @__PURE__ */ jsx("div", { className: "relative h-full lg:w-full lg:h-auto aspect-square", children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: image.images_url,
                      alt: image.images_url
                    }
                  ) })
                },
                "product-img-" + idx
              ))
            }
          ),
          images.length > 1 && loaded && instanceRef.current && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              ImageSliderArrow,
              {
                left: true,
                onClick: (e2) => {
                  var _a;
                  e2.stopPropagation();
                  (_a = instanceRef.current) == null ? void 0 : _a.prev();
                },
                disabled: currentSlide === 0
              }
            ),
            /* @__PURE__ */ jsx(
              ImageSliderArrow,
              {
                onClick: (e2) => {
                  var _a;
                  e2.stopPropagation();
                  (_a = instanceRef.current) == null ? void 0 : _a.next();
                },
                disabled: currentSlide === instanceRef.current.track.details.slides.length - 1
              }
            )
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "lg:hidden", children: loaded && images.length > 0 && instanceRef.current && /* @__PURE__ */ jsx("div", { className: "flex justify-center py-3", children: instanceRef.current.track.details && instanceRef.current.track.details.slides && instanceRef.current.track.details.slides.length > 0 && [
      ...Array(
        instanceRef.current.track.details.slides.length
      ).keys()
    ].map((idx) => {
      return /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            var _a;
            (_a = instanceRef.current) == null ? void 0 : _a.moveToIdx(idx);
            setCurrentSlide(idx);
          },
          className: "border-0 min-w-[0.5rem] w-2 h-2 rounded-full mr-2 cursor-pointer transition-colors ease-in-out duration-300 " + (currentSlide === idx ? "bg-yata" : " bg-[#B49D86]")
        },
        idx
      );
    }) }) }),
    /* @__PURE__ */ jsx("div", { className: "hidden w-full h-20 mb-3 overflow-hidden lg:block lg:max-w-[24rem] ", children: images.length > 0 && /* @__PURE__ */ jsx(
      "div",
      {
        ref: thumbnailRef,
        className: "w-full h-full max-w-md keen-slider thumbnail",
        children: images.map((image, idx) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "flex items-center justify-center overflow-hidden rounded-lg cursor-pointer keen-slider__slide " + (currentSlide === idx ? "border-yata-deep border-dotted border-2 " : "border "),
            onClick: () => setCurrentSlide(idx),
            children: /* @__PURE__ */ jsx("div", { className: "relative w-full aspect-square", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: image.images_url,
                alt: image.images_url
              }
            ) })
          },
          "product-img-thumbnail-" + idx
        ))
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "mx-2 my-1 underLg:hidden", children: /* @__PURE__ */ jsxs("h1", { className: "text-sm", children: [
      "產品編號: ",
      plu
    ] }) })
  ] });
}
function ItemColorSize({
  colorCount,
  colors,
  skuQty,
  setSkuQty,
  setPricing,
  setStatus
}) {
  const colorList = colorCount > 0 && colors.colors;
  const sizeList = colorCount == 0 && colors.size;
  const [activeSizeList, setActiveSizeList] = reactExports.useState(
    null
  );
  const toggleSizeList = (colorCode) => {
    if (colorList) {
      const lowerSizeList = colorList.filter(
        (color) => color.color_code == colorCode
      )[0];
      if (lowerSizeList && lowerSizeList.size && lowerSizeList.size.length > 0) {
        if (typeof parseInt(lowerSizeList.size[0].size_code) == "number") {
          setActiveSizeList(
            lowerSizeList.size.slice().sort((a2, b2) => parseInt(a2.size_code) - parseInt(b2.size_code))
          );
        } else {
          setActiveSizeList(lowerSizeList.size);
        }
      }
    }
  };
  const toggleAddSku = (content) => {
    if (content && content.size && content.size.length > 0) {
      toggleSizeList(content.color_code);
    } else if (content.plu && content.sku) {
      console.log("content", content.product_status, content.inventory_status);
      setPricing({
        save_amt: content.save_amt,
        percent_off: content.percent_off,
        rsp: content.rsp,
        psp: content.psp,
        promotions: content.promotions
      });
      setSkuQty({
        ...skuQty,
        plu: content.plu,
        sku: content.sku
      });
      setStatus({
        product: content.product_status,
        inventory: content.inventory_status
      });
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    colorList && /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-20 min-w-[5rem] font-bold ", children: "顏色 :" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center mr-2 ", children: [
        colorList.map((color, idx) => /* @__PURE__ */ jsxs(
          "label",
          {
            className: "mb-1 mr-1 cursor-pointer",
            children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "radio",
                  name: "options",
                  value: color.size && color.size.length > 0 ? color.color_code : color.sku,
                  onChange: () => {
                    toggleAddSku(color);
                  },
                  className: "hidden peer"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "inline-block px-4 py-1 transition-all ease-in-out bg-white border rounded-lg lg:border-2 border-yata-brown peer-checked:border-red-text", children: color.color_description_c })
            ]
          },
          "product-color-" + idx
        )),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "text-sm font-medium text-red-text transition-all ml-1 ease-in-out duration-300 " + (activeSizeList == null && skuQty.sku == "" ? "opacity-100 visible " : "opacity-0 invisible"),
            children: "請選擇顏色"
          }
        )
      ] })
    ] }),
    sizeList && /* @__PURE__ */ jsxs("div", { className: "flex flex-row", children: [
      /* @__PURE__ */ jsx("div", { className: "w-20 min-w-[5rem] font-bold ", children: "尺碼 :" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center mr-2 ", children: [
        sizeList.map((size, idx) => /* @__PURE__ */ jsxs(
          "label",
          {
            className: "mb-1 mr-1 cursor-pointer",
            children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "radio",
                  name: "options",
                  value: size.sku,
                  onChange: () => {
                    toggleAddSku(size);
                  },
                  className: "hidden peer"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "inline-block px-4 py-1 transition-all ease-in-out bg-white border rounded-lg lg:border-2 border-yata-brown peer-checked:border-red-text", children: size.size_code })
            ]
          },
          "product-size-" + idx
        )),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "text-sm font-medium text-red-text transition-all ml-1 ease-in-out duration-300 " + (skuQty.sku == "" ? "opacity-100 visible " : "opacity-0 invisible"),
            children: "請選擇尺碼"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "flex flex-row items-center transition-all duration-300 ease-in-out",
        style: activeSizeList && activeSizeList.length > 0 ? {
          minHeight: 36,
          visibility: "visible",
          margin: "1rem 0 0 0",
          height: "auto"
        } : { minHeight: 0, visibility: "hidden", margin: 0, height: 0 },
        children: /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("div", { className: "w-20 min-w-[5rem] font-bold", children: "尺碼 :" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center mr-2 ", children: [
            activeSizeList && activeSizeList.map((size, idx) => {
              return /* @__PURE__ */ jsxs(
                "label",
                {
                  className: "mb-1 mr-1 cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "radio",
                        name: "options1",
                        value: size.sku,
                        className: "hidden peer",
                        onChange: () => {
                          toggleAddSku(size);
                        }
                      }
                    ),
                    /* @__PURE__ */ jsx("div", { className: "inline-block px-3 py-1 bg-white border rounded-lg lg:border-2 border-yata-brown peer-checked:border-red-text", children: size.size_code })
                  ]
                },
                "product-size-" + idx
              );
            }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "text-sm font-medium text-red-text transition-all ml-1 ease-in-out duration-300 " + (activeSizeList && skuQty.sku == "" ? "opacity-100 visible " : "opacity-0 invisible"),
                children: "請選擇尺碼"
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
var i$2 = Object.defineProperty;
var d$5 = (t2, e2, n2) => e2 in t2 ? i$2(t2, e2, { enumerable: true, configurable: true, writable: true, value: n2 }) : t2[e2] = n2;
var r$3 = (t2, e2, n2) => (d$5(t2, typeof e2 != "symbol" ? e2 + "" : e2, n2), n2);
let o$4 = class o {
  constructor() {
    r$3(this, "current", this.detect());
    r$3(this, "handoffState", "pending");
    r$3(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.handoffState = "pending", this.currentId = 0, this.current = e2);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
let s$6 = new o$4();
let l$4 = (e2, f2) => {
  s$6.isServer ? reactExports.useEffect(e2, f2) : reactExports.useLayoutEffect(e2, f2);
};
function s$5(e2) {
  let r2 = reactExports.useRef(e2);
  return l$4(() => {
    r2.current = e2;
  }, [e2]), r2;
}
function t$4(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o3) => setTimeout(() => {
    throw o3;
  }));
}
function o$3() {
  let n2 = [], r2 = { addEventListener(e2, t2, s2, a2) {
    return e2.addEventListener(t2, s2, a2), r2.add(() => e2.removeEventListener(t2, s2, a2));
  }, requestAnimationFrame(...e2) {
    let t2 = requestAnimationFrame(...e2);
    return r2.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e2) {
    return r2.requestAnimationFrame(() => r2.requestAnimationFrame(...e2));
  }, setTimeout(...e2) {
    let t2 = setTimeout(...e2);
    return r2.add(() => clearTimeout(t2));
  }, microTask(...e2) {
    let t2 = { current: true };
    return t$4(() => {
      t2.current && e2[0]();
    }), r2.add(() => {
      t2.current = false;
    });
  }, style(e2, t2, s2) {
    let a2 = e2.style.getPropertyValue(t2);
    return Object.assign(e2.style, { [t2]: s2 }), this.add(() => {
      Object.assign(e2.style, { [t2]: a2 });
    });
  }, group(e2) {
    let t2 = o$3();
    return e2(t2), this.add(() => t2.dispose());
  }, add(e2) {
    return n2.push(e2), () => {
      let t2 = n2.indexOf(e2);
      if (t2 >= 0)
        for (let s2 of n2.splice(t2, 1))
          s2();
    };
  }, dispose() {
    for (let e2 of n2.splice(0))
      e2();
  } };
  return r2;
}
function p$4() {
  let [e2] = reactExports.useState(o$3);
  return reactExports.useEffect(() => () => e2.dispose(), [e2]), e2;
}
let o$2 = function(t2) {
  let e2 = s$5(t2);
  return React.useCallback((...r2) => e2.current(...r2), [e2]);
};
function l$3() {
  let [e2, f2] = reactExports.useState(s$6.isHandoffComplete);
  return e2 && s$6.isHandoffComplete === false && f2(false), reactExports.useEffect(() => {
    e2 !== true && f2(true);
  }, [e2]), reactExports.useEffect(() => s$6.handoff(), []), e2;
}
var o$1;
let I$2 = (o$1 = React.useId) != null ? o$1 : function() {
  let n2 = l$3(), [e2, u2] = React.useState(n2 ? () => s$6.nextId() : null);
  return l$4(() => {
    e2 === null && u2(s$6.nextId());
  }, [e2]), e2 != null ? "" + e2 : void 0;
};
function u$3(r2, n2, ...a2) {
  if (r2 in n2) {
    let e2 = n2[r2];
    return typeof e2 == "function" ? e2(...a2) : e2;
  }
  let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u$3), t2;
}
function e$2(r2) {
  return s$6.isServer ? null : r2 instanceof Node ? r2.ownerDocument : r2 != null && r2.hasOwnProperty("current") && r2.current instanceof Node ? r2.current.ownerDocument : document;
}
let c$7 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var M$3 = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2))(M$3 || {}), N$1 = ((o3) => (o3[o3.Error = 0] = "Error", o3[o3.Overflow = 1] = "Overflow", o3[o3.Success = 2] = "Success", o3[o3.Underflow = 3] = "Underflow", o3))(N$1 || {}), F$2 = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(F$2 || {});
function f$3(e2 = document.body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(c$7)).sort((r2, t2) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var T$1 = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(T$1 || {});
function h$4(e2, r2 = 0) {
  var t2;
  return e2 === ((t2 = e$2(e2)) == null ? void 0 : t2.body) ? false : u$3(r2, { [0]() {
    return e2.matches(c$7);
  }, [1]() {
    let l2 = e2;
    for (; l2 !== null; ) {
      if (l2.matches(c$7))
        return true;
      l2 = l2.parentElement;
    }
    return false;
  } });
}
var w$1 = ((t2) => (t2[t2.Keyboard = 0] = "Keyboard", t2[t2.Mouse = 1] = "Mouse", t2))(w$1 || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e2) => {
  e2.metaKey || e2.altKey || e2.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e2) => {
  e2.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e2.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function y$4(e2) {
  e2 == null || e2.focus({ preventScroll: true });
}
let S$7 = ["textarea", "input"].join(",");
function H$1(e2) {
  var r2, t2;
  return (t2 = (r2 = e2 == null ? void 0 : e2.matches) == null ? void 0 : r2.call(e2, S$7)) != null ? t2 : false;
}
function I$1(e2, r2 = (t2) => t2) {
  return e2.slice().sort((t2, l2) => {
    let o3 = r2(t2), i2 = r2(l2);
    if (o3 === null || i2 === null)
      return 0;
    let n2 = o3.compareDocumentPosition(i2);
    return n2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function O$1(e2, r2, { sorted: t2 = true, relativeTo: l2 = null, skipElements: o3 = [] } = {}) {
  let i2 = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : document : e2.ownerDocument, n2 = Array.isArray(e2) ? t2 ? I$1(e2) : e2 : f$3(e2);
  o3.length > 0 && n2.length > 1 && (n2 = n2.filter((s2) => !o3.includes(s2))), l2 = l2 != null ? l2 : i2.activeElement;
  let E2 = (() => {
    if (r2 & 5)
      return 1;
    if (r2 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x2 = (() => {
    if (r2 & 1)
      return 0;
    if (r2 & 2)
      return Math.max(0, n2.indexOf(l2)) - 1;
    if (r2 & 4)
      return Math.max(0, n2.indexOf(l2)) + 1;
    if (r2 & 8)
      return n2.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p2 = r2 & 32 ? { preventScroll: true } : {}, d2 = 0, a2 = n2.length, u2;
  do {
    if (d2 >= a2 || d2 + a2 <= 0)
      return 0;
    let s2 = x2 + d2;
    if (r2 & 16)
      s2 = (s2 + a2) % a2;
    else {
      if (s2 < 0)
        return 3;
      if (s2 >= a2)
        return 1;
    }
    u2 = n2[s2], u2 == null || u2.focus(p2), d2 += E2;
  } while (u2 !== i2.activeElement);
  return r2 & 6 && H$1(u2) && u2.select(), 2;
}
function d$4(e2, r2, n2) {
  let o3 = s$5(r2);
  reactExports.useEffect(() => {
    function t2(u2) {
      o3.current(u2);
    }
    return document.addEventListener(e2, t2, n2), () => document.removeEventListener(e2, t2, n2);
  }, [e2, n2]);
}
function L(m2, E2, c2 = true) {
  let i2 = reactExports.useRef(false);
  reactExports.useEffect(() => {
    requestAnimationFrame(() => {
      i2.current = c2;
    });
  }, [c2]);
  function f2(e2, o3) {
    if (!i2.current || e2.defaultPrevented)
      return;
    let l2 = function r2(t2) {
      return typeof t2 == "function" ? r2(t2()) : Array.isArray(t2) || t2 instanceof Set ? t2 : [t2];
    }(m2), n2 = o3(e2);
    if (n2 !== null && n2.getRootNode().contains(n2)) {
      for (let r2 of l2) {
        if (r2 === null)
          continue;
        let t2 = r2 instanceof HTMLElement ? r2 : r2.current;
        if (t2 != null && t2.contains(n2) || e2.composed && e2.composedPath().includes(t2))
          return;
      }
      return !h$4(n2, T$1.Loose) && n2.tabIndex !== -1 && e2.preventDefault(), E2(e2, n2);
    }
  }
  let u2 = reactExports.useRef(null);
  d$4("mousedown", (e2) => {
    var o3, l2;
    i2.current && (u2.current = ((l2 = (o3 = e2.composedPath) == null ? void 0 : o3.call(e2)) == null ? void 0 : l2[0]) || e2.target);
  }, true), d$4("click", (e2) => {
    u2.current && (f2(e2, () => u2.current), u2.current = null);
  }, true), d$4("blur", (e2) => f2(e2, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}
let u$2 = Symbol();
function T(t2, n2 = true) {
  return Object.assign(t2, { [u$2]: n2 });
}
function y$3(...t2) {
  let n2 = reactExports.useRef(t2);
  reactExports.useEffect(() => {
    n2.current = t2;
  }, [t2]);
  let c2 = o$2((e2) => {
    for (let o3 of n2.current)
      o3 != null && (typeof o3 == "function" ? o3(e2) : o3.current = e2);
  });
  return t2.every((e2) => e2 == null || (e2 == null ? void 0 : e2[u$2])) ? void 0 : c2;
}
function e$1(...n2) {
  return n2.filter(Boolean).join(" ");
}
var S$6 = ((a2) => (a2[a2.None = 0] = "None", a2[a2.RenderStrategy = 1] = "RenderStrategy", a2[a2.Static = 2] = "Static", a2))(S$6 || {}), j$1 = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(j$1 || {});
function X$1({ ourProps: r2, theirProps: t2, slot: e2, defaultTag: a2, features: s2, visible: n2 = true, name: f2 }) {
  let o3 = N(t2, r2);
  if (n2)
    return c$6(o3, e2, a2, f2);
  let u2 = s2 != null ? s2 : 0;
  if (u2 & 2) {
    let { static: l2 = false, ...p2 } = o3;
    if (l2)
      return c$6(p2, e2, a2, f2);
  }
  if (u2 & 1) {
    let { unmount: l2 = true, ...p2 } = o3;
    return u$3(l2 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return c$6({ ...p2, hidden: true, style: { display: "none" } }, e2, a2, f2);
    } });
  }
  return c$6(o3, e2, a2, f2);
}
function c$6(r2, t2 = {}, e2, a2) {
  let { as: s2 = e2, children: n2, refName: f2 = "ref", ...o3 } = g(r2, ["unmount", "static"]), u2 = r2.ref !== void 0 ? { [f2]: r2.ref } : {}, l2 = typeof n2 == "function" ? n2(t2) : n2;
  "className" in o3 && o3.className && typeof o3.className == "function" && (o3.className = o3.className(t2));
  let p2 = {};
  if (t2) {
    let i2 = false, m2 = [];
    for (let [y2, d2] of Object.entries(t2))
      typeof d2 == "boolean" && (i2 = true), d2 === true && m2.push(y2);
    i2 && (p2["data-headlessui-state"] = m2.join(" "));
  }
  if (s2 === reactExports.Fragment && Object.keys(R(o3)).length > 0) {
    if (!reactExports.isValidElement(l2) || Array.isArray(l2) && l2.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a2} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o3).map((d2) => `  - ${d2}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d2) => `  - ${d2}`).join(`
`)].join(`
`));
    let i2 = l2.props, m2 = typeof (i2 == null ? void 0 : i2.className) == "function" ? (...d2) => e$1(i2 == null ? void 0 : i2.className(...d2), o3.className) : e$1(i2 == null ? void 0 : i2.className, o3.className), y2 = m2 ? { className: m2 } : {};
    return reactExports.cloneElement(l2, Object.assign({}, N(l2.props, R(g(o3, ["ref"]))), p2, u2, w(l2.ref, u2.ref), y2));
  }
  return reactExports.createElement(s2, Object.assign({}, g(o3, ["ref"]), s2 !== reactExports.Fragment && u2, s2 !== reactExports.Fragment && p2), l2);
}
function w(...r2) {
  return { ref: r2.every((t2) => t2 == null) ? void 0 : (t2) => {
    for (let e2 of r2)
      e2 != null && (typeof e2 == "function" ? e2(t2) : e2.current = t2);
  } };
}
function N(...r2) {
  if (r2.length === 0)
    return {};
  if (r2.length === 1)
    return r2[0];
  let t2 = {}, e2 = {};
  for (let s2 of r2)
    for (let n2 in s2)
      n2.startsWith("on") && typeof s2[n2] == "function" ? (e2[n2] != null || (e2[n2] = []), e2[n2].push(s2[n2])) : t2[n2] = s2[n2];
  if (t2.disabled || t2["aria-disabled"])
    return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((s2) => [s2, void 0])));
  for (let s2 in e2)
    Object.assign(t2, { [s2](n2, ...f2) {
      let o3 = e2[s2];
      for (let u2 of o3) {
        if ((n2 instanceof Event || (n2 == null ? void 0 : n2.nativeEvent) instanceof Event) && n2.defaultPrevented)
          return;
        u2(n2, ...f2);
      }
    } });
  return t2;
}
function D$1(r2) {
  var t2;
  return Object.assign(reactExports.forwardRef(r2), { displayName: (t2 = r2.displayName) != null ? t2 : r2.name });
}
function R(r2) {
  let t2 = Object.assign({}, r2);
  for (let e2 in t2)
    t2[e2] === void 0 && delete t2[e2];
  return t2;
}
function g(r2, t2 = []) {
  let e2 = Object.assign({}, r2);
  for (let a2 of t2)
    a2 in e2 && delete e2[a2];
  return e2;
}
function r$2(n2) {
  let e2 = n2.parentElement, l2 = null;
  for (; e2 && !(e2 instanceof HTMLFieldSetElement); )
    e2 instanceof HTMLLegendElement && (l2 = e2), e2 = e2.parentElement;
  let t2 = (e2 == null ? void 0 : e2.getAttribute("disabled")) === "";
  return t2 && i$1(l2) ? false : t2;
}
function i$1(n2) {
  if (!n2)
    return false;
  let e2 = n2.previousElementSibling;
  for (; e2 !== null; ) {
    if (e2 instanceof HTMLLegendElement)
      return false;
    e2 = e2.previousElementSibling;
  }
  return true;
}
let a$5 = "div";
var p$3 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(p$3 || {});
function s$4(t2, o3) {
  let { features: n2 = 1, ...e2 } = t2, d2 = { ref: o3, "aria-hidden": (n2 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n2 & 4) === 4 && (n2 & 2) !== 2 && { display: "none" } } };
  return X$1({ ourProps: d2, theirProps: e2, slot: {}, defaultTag: a$5, name: "Hidden" });
}
let c$5 = D$1(s$4);
let n$2 = reactExports.createContext(null);
n$2.displayName = "OpenClosedContext";
var d$3 = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(d$3 || {});
function C() {
  return reactExports.useContext(n$2);
}
function c$4({ value: o3, children: r2 }) {
  return React.createElement(n$2.Provider, { value: o3 }, r2);
}
var o2 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o2 || {});
function m$1(u2, t2) {
  let e2 = reactExports.useRef([]), r2 = o$2(u2);
  reactExports.useEffect(() => {
    let o3 = [...e2.current];
    for (let [n2, a2] of t2.entries())
      if (e2.current[n2] !== a2) {
        let l2 = r2(t2, o3);
        return e2.current = t2, l2;
      }
  }, [r2, ...t2]);
}
function t$3() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function s$3(e2, r2, n2) {
  let o3 = s$5(r2);
  reactExports.useEffect(() => {
    function t2(i2) {
      o3.current(i2);
    }
    return window.addEventListener(e2, t2, n2), () => window.removeEventListener(e2, t2, n2);
  }, [e2, n2]);
}
var s$2 = ((r2) => (r2[r2.Forwards = 0] = "Forwards", r2[r2.Backwards = 1] = "Backwards", r2))(s$2 || {});
function n$1() {
  let e2 = reactExports.useRef(0);
  return s$3("keydown", (o3) => {
    o3.key === "Tab" && (e2.current = o3.shiftKey ? 1 : 0);
  }, true), e2;
}
function f$2() {
  let e2 = reactExports.useRef(false);
  return l$4(() => (e2.current = true, () => {
    e2.current = false;
  }), []), e2;
}
function n(...e2) {
  return reactExports.useMemo(() => e$2(...e2), [...e2]);
}
function E(n2, e2, a2, t2) {
  let i2 = s$5(a2);
  reactExports.useEffect(() => {
    n2 = n2 != null ? n2 : window;
    function r2(o3) {
      i2.current(o3);
    }
    return n2.addEventListener(e2, r2, t2), () => n2.removeEventListener(e2, r2, t2);
  }, [n2, e2, t2]);
}
function t$2(n2) {
  function e2() {
    document.readyState !== "loading" && (n2(), document.removeEventListener("DOMContentLoaded", e2));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e2), e2());
}
function P$1(t2) {
  if (!t2)
    return /* @__PURE__ */ new Set();
  if (typeof t2 == "function")
    return new Set(t2());
  let n2 = /* @__PURE__ */ new Set();
  for (let e2 of t2.current)
    e2.current instanceof HTMLElement && n2.add(e2.current);
  return n2;
}
let J = "div";
var h$3 = ((r2) => (r2[r2.None = 1] = "None", r2[r2.InitialFocus = 2] = "InitialFocus", r2[r2.TabLock = 4] = "TabLock", r2[r2.FocusLock = 8] = "FocusLock", r2[r2.RestoreFocus = 16] = "RestoreFocus", r2[r2.All = 30] = "All", r2))(h$3 || {});
function X(t2, n$22) {
  let e2 = reactExports.useRef(null), o3 = y$3(e2, n$22), { initialFocus: u2, containers: i2, features: r2 = 30, ...l2 } = t2;
  l$3() || (r2 = 1);
  let m2 = n(e2);
  Y({ ownerDocument: m2 }, Boolean(r2 & 16));
  let c2 = Z({ ownerDocument: m2, container: e2, initialFocus: u2 }, Boolean(r2 & 2));
  $({ ownerDocument: m2, container: e2, containers: i2, previousActiveElement: c2 }, Boolean(r2 & 8));
  let v2 = n$1(), R2 = o$2((s2) => {
    let T2 = e2.current;
    if (!T2)
      return;
    ((B2) => B2())(() => {
      u$3(v2.current, { [s$2.Forwards]: () => {
        O$1(T2, M$3.First, { skipElements: [s2.relatedTarget] });
      }, [s$2.Backwards]: () => {
        O$1(T2, M$3.Last, { skipElements: [s2.relatedTarget] });
      } });
    });
  }), _2 = p$4(), H2 = reactExports.useRef(false), j2 = { ref: o3, onKeyDown(s2) {
    s2.key == "Tab" && (H2.current = true, _2.requestAnimationFrame(() => {
      H2.current = false;
    }));
  }, onBlur(s2) {
    let T2 = P$1(i2);
    e2.current instanceof HTMLElement && T2.add(e2.current);
    let E2 = s2.relatedTarget;
    E2 instanceof HTMLElement && E2.dataset.headlessuiFocusGuard !== "true" && (S$5(T2, E2) || (H2.current ? O$1(e2.current, u$3(v2.current, { [s$2.Forwards]: () => M$3.Next, [s$2.Backwards]: () => M$3.Previous }) | M$3.WrapAround, { relativeTo: s2.target }) : s2.target instanceof HTMLElement && y$4(s2.target)));
  } };
  return React.createElement(React.Fragment, null, Boolean(r2 & 4) && React.createElement(c$5, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: R2, features: p$3.Focusable }), X$1({ ourProps: j2, theirProps: l2, defaultTag: J, name: "FocusTrap" }), Boolean(r2 & 4) && React.createElement(c$5, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: R2, features: p$3.Focusable }));
}
let z = D$1(X), Re$1 = Object.assign(z, { features: h$3 }), a$4 = [];
t$2(() => {
  function t2(n2) {
    n2.target instanceof HTMLElement && n2.target !== document.body && a$4[0] !== n2.target && (a$4.unshift(n2.target), a$4 = a$4.filter((e2) => e2 != null && e2.isConnected), a$4.splice(10));
  }
  window.addEventListener("click", t2, { capture: true }), window.addEventListener("mousedown", t2, { capture: true }), window.addEventListener("focus", t2, { capture: true }), document.body.addEventListener("click", t2, { capture: true }), document.body.addEventListener("mousedown", t2, { capture: true }), document.body.addEventListener("focus", t2, { capture: true });
});
function Q(t2 = true) {
  let n2 = reactExports.useRef(a$4.slice());
  return m$1(([e2], [o3]) => {
    o3 === true && e2 === false && t$4(() => {
      n2.current.splice(0);
    }), o3 === false && e2 === true && (n2.current = a$4.slice());
  }, [t2, a$4, n2]), o$2(() => {
    var e2;
    return (e2 = n2.current.find((o3) => o3 != null && o3.isConnected)) != null ? e2 : null;
  });
}
function Y({ ownerDocument: t2 }, n2) {
  let e2 = Q(n2);
  m$1(() => {
    n2 || (t2 == null ? void 0 : t2.activeElement) === (t2 == null ? void 0 : t2.body) && y$4(e2());
  }, [n2]);
  let o3 = reactExports.useRef(false);
  reactExports.useEffect(() => (o3.current = false, () => {
    o3.current = true, t$4(() => {
      o3.current && y$4(e2());
    });
  }), []);
}
function Z({ ownerDocument: t2, container: n2, initialFocus: e2 }, o3) {
  let u2 = reactExports.useRef(null), i2 = f$2();
  return m$1(() => {
    if (!o3)
      return;
    let r2 = n2.current;
    r2 && t$4(() => {
      if (!i2.current)
        return;
      let l2 = t2 == null ? void 0 : t2.activeElement;
      if (e2 != null && e2.current) {
        if ((e2 == null ? void 0 : e2.current) === l2) {
          u2.current = l2;
          return;
        }
      } else if (r2.contains(l2)) {
        u2.current = l2;
        return;
      }
      e2 != null && e2.current ? y$4(e2.current) : O$1(r2, M$3.First) === N$1.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), u2.current = t2 == null ? void 0 : t2.activeElement;
    });
  }, [o3]), u2;
}
function $({ ownerDocument: t2, container: n2, containers: e2, previousActiveElement: o3 }, u2) {
  let i2 = f$2();
  E(t2 == null ? void 0 : t2.defaultView, "focus", (r2) => {
    if (!u2 || !i2.current)
      return;
    let l2 = P$1(e2);
    n2.current instanceof HTMLElement && l2.add(n2.current);
    let m2 = o3.current;
    if (!m2)
      return;
    let c2 = r2.target;
    c2 && c2 instanceof HTMLElement ? S$5(l2, c2) ? (o3.current = c2, y$4(c2)) : (r2.preventDefault(), r2.stopPropagation(), y$4(m2)) : y$4(o3.current);
  }, true);
}
function S$5(t2, n2) {
  for (let e2 of t2)
    if (e2.contains(n2))
      return true;
  return false;
}
let e = reactExports.createContext(false);
function l$2() {
  return reactExports.useContext(e);
}
function P(o3) {
  return React.createElement(e.Provider, { value: o3.force }, o3.children);
}
function H(u2) {
  let a2 = l$2(), o3 = reactExports.useContext(c$3), e2 = n(u2), [l2, n$12] = reactExports.useState(() => {
    if (!a2 && o3 !== null || s$6.isServer)
      return null;
    let t2 = e2 == null ? void 0 : e2.getElementById("headlessui-portal-root");
    if (t2)
      return t2;
    if (e2 === null)
      return null;
    let r2 = e2.createElement("div");
    return r2.setAttribute("id", "headlessui-portal-root"), e2.body.appendChild(r2);
  });
  return reactExports.useEffect(() => {
    l2 !== null && (e2 != null && e2.body.contains(l2) || e2 == null || e2.body.appendChild(l2));
  }, [l2, e2]), reactExports.useEffect(() => {
    a2 || o3 !== null && n$12(o3.current);
  }, [o3, n$12, a2]), l2;
}
let O = reactExports.Fragment;
function _$1(u2, a2) {
  let o3 = u2, e2 = reactExports.useRef(null), l2 = y$3(T((p2) => {
    e2.current = p2;
  }), a2), n$12 = n(e2), t2 = H(e2), [r2] = reactExports.useState(() => {
    var p2;
    return s$6.isServer ? null : (p2 = n$12 == null ? void 0 : n$12.createElement("div")) != null ? p2 : null;
  }), y2 = l$3(), f2 = reactExports.useRef(false);
  return l$4(() => {
    if (f2.current = false, !(!t2 || !r2))
      return t2.contains(r2) || (r2.setAttribute("data-headlessui-portal", ""), t2.appendChild(r2)), () => {
        f2.current = true, t$4(() => {
          var p2;
          f2.current && (!t2 || !r2 || (r2 instanceof Node && t2.contains(r2) && t2.removeChild(r2), t2.childNodes.length <= 0 && ((p2 = t2.parentElement) == null || p2.removeChild(t2))));
        });
      };
  }, [t2, r2]), y2 ? !t2 || !r2 ? null : reactDomExports.createPortal(X$1({ ourProps: { ref: l2 }, theirProps: o3, defaultTag: O, name: "Portal" }), r2) : null;
}
let F$1 = reactExports.Fragment, c$3 = reactExports.createContext(null);
function U(u2, a2) {
  let { target: o3, ...e2 } = u2, n2 = { ref: y$3(a2) };
  return React.createElement(c$3.Provider, { value: o3 }, X$1({ ourProps: n2, theirProps: e2, defaultTag: F$1, name: "Popover.Group" }));
}
let S$4 = D$1(_$1), j = D$1(U), te = Object.assign(S$4, { Group: j });
let d$2 = reactExports.createContext(null);
function f$1() {
  let r2 = reactExports.useContext(d$2);
  if (r2 === null) {
    let t2 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t2, f$1), t2;
  }
  return r2;
}
function M$2() {
  let [r2, t2] = reactExports.useState([]);
  return [r2.length > 0 ? r2.join(" ") : void 0, reactExports.useMemo(() => function(e2) {
    let i2 = o$2((s2) => (t2((o3) => [...o3, s2]), () => t2((o3) => {
      let p2 = o3.slice(), c2 = p2.indexOf(s2);
      return c2 !== -1 && p2.splice(c2, 1), p2;
    }))), n2 = reactExports.useMemo(() => ({ register: i2, slot: e2.slot, name: e2.name, props: e2.props }), [i2, e2.slot, e2.name, e2.props]);
    return React.createElement(d$2.Provider, { value: n2 }, e2.children);
  }, [t2])];
}
let S$3 = "p";
function h$2(r2, t2) {
  let a2 = I$2(), { id: e2 = `headlessui-description-${a2}`, ...i2 } = r2, n2 = f$1(), s2 = y$3(t2);
  l$4(() => n2.register(e2), [e2, n2.register]);
  let o3 = { ref: s2, ...n2.props, id: e2 };
  return X$1({ ourProps: o3, theirProps: i2, slot: n2.slot || {}, defaultTag: S$3, name: n2.name || "Description" });
}
let y$2 = D$1(h$2), b = Object.assign(y$2, {});
let a$3 = reactExports.createContext(() => {
});
a$3.displayName = "StackContext";
var s$1 = ((e2) => (e2[e2.Add = 0] = "Add", e2[e2.Remove = 1] = "Remove", e2))(s$1 || {});
function x() {
  return reactExports.useContext(a$3);
}
function M$1({ children: i2, onUpdate: r2, type: e2, element: n2, enabled: u2 }) {
  let l2 = x(), o3 = o$2((...t2) => {
    r2 == null || r2(...t2), l2(...t2);
  });
  return l$4(() => {
    let t2 = u2 === void 0 || u2 === true;
    return t2 && o3(0, e2, n2), () => {
      t2 && o3(1, e2, n2);
    };
  }, [o3, e2, n2, u2]), React.createElement(a$3.Provider, { value: o3 }, i2);
}
function i(e2, t2) {
  return e2 === t2 && (e2 !== 0 || 1 / e2 === 1 / t2) || e2 !== e2 && t2 !== t2;
}
const d$1 = typeof Object.is == "function" ? Object.is : i, { useState: u$1, useEffect: h$1, useLayoutEffect: f, useDebugValue: p$2 } = e$7;
function y$1(e2, t2, c2) {
  const a2 = t2(), [{ inst: n2 }, o3] = u$1({ inst: { value: a2, getSnapshot: t2 } });
  return f(() => {
    n2.value = a2, n2.getSnapshot = t2, r$1(n2) && o3({ inst: n2 });
  }, [e2, a2, t2]), h$1(() => (r$1(n2) && o3({ inst: n2 }), e2(() => {
    r$1(n2) && o3({ inst: n2 });
  })), [e2]), p$2(a2), a2;
}
function r$1(e2) {
  const t2 = e2.getSnapshot, c2 = e2.value;
  try {
    const a2 = t2();
    return !d$1(c2, a2);
  } catch {
    return true;
  }
}
function t$1(r2, e2, n2) {
  return e2();
}
const r = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined", s = !r, c$2 = s ? t$1 : y$1, a$2 = "useSyncExternalStore" in e$7 ? ((n2) => n2.useSyncExternalStore)(e$7) : c$2;
function S$2(t2) {
  return a$2(t2.subscribe, t2.getSnapshot, t2.getSnapshot);
}
function a$1(o3, r2) {
  let t2 = o3(), n2 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t2;
  }, subscribe(e2) {
    return n2.add(e2), () => n2.delete(e2);
  }, dispatch(e2, ...s2) {
    let i2 = r2[e2].call(t2, ...s2);
    i2 && (t2 = i2, n2.forEach((c2) => c2()));
  } };
}
function c$1() {
  let o3;
  return { before({ doc: e2 }) {
    var l2;
    let n2 = e2.documentElement;
    o3 = ((l2 = e2.defaultView) != null ? l2 : window).innerWidth - n2.clientWidth;
  }, after({ doc: e2, d: n2 }) {
    let t2 = e2.documentElement, l2 = t2.clientWidth - t2.offsetWidth, r2 = o3 - l2;
    n2.style(t2, "paddingRight", `${r2}px`);
  } };
}
function p$1() {
  if (!t$3())
    return {};
  let o3;
  return { before() {
    o3 = window.pageYOffset;
  }, after({ doc: r2, d: l2, meta: s2 }) {
    function i2(e2) {
      return s2.containers.flatMap((t2) => t2()).some((t2) => t2.contains(e2));
    }
    l2.style(r2.body, "marginTop", `-${o3}px`), window.scrollTo(0, 0);
    let n2 = null;
    l2.addEventListener(r2, "click", (e2) => {
      if (e2.target instanceof HTMLElement)
        try {
          let t2 = e2.target.closest("a");
          if (!t2)
            return;
          let { hash: c2 } = new URL(t2.href), a2 = r2.querySelector(c2);
          a2 && !i2(a2) && (n2 = a2);
        } catch {
        }
    }, true), l2.addEventListener(r2, "touchmove", (e2) => {
      e2.target instanceof HTMLElement && !i2(e2.target) && e2.preventDefault();
    }, { passive: false }), l2.add(() => {
      window.scrollTo(0, window.pageYOffset + o3), n2 && n2.isConnected && (n2.scrollIntoView({ block: "nearest" }), n2 = null);
    });
  } };
}
function l$1() {
  return { before({ doc: e2, d: o3 }) {
    o3.style(e2.documentElement, "overflow", "hidden");
  } };
}
function m(e2) {
  let n2 = {};
  for (let t2 of e2)
    Object.assign(n2, t2(n2));
  return n2;
}
let a = a$1(() => /* @__PURE__ */ new Map(), { PUSH(e2, n2) {
  var o3;
  let t2 = (o3 = this.get(e2)) != null ? o3 : { doc: e2, count: 0, d: o$3(), meta: /* @__PURE__ */ new Set() };
  return t2.count++, t2.meta.add(n2), this.set(e2, t2), this;
}, POP(e2, n2) {
  let t2 = this.get(e2);
  return t2 && (t2.count--, t2.meta.delete(n2)), this;
}, SCROLL_PREVENT({ doc: e2, d: n2, meta: t2 }) {
  let o3 = { doc: e2, d: n2, meta: m(t2) }, c2 = [p$1(), c$1(), l$1()];
  c2.forEach(({ before: r2 }) => r2 == null ? void 0 : r2(o3)), c2.forEach(({ after: r2 }) => r2 == null ? void 0 : r2(o3));
}, SCROLL_ALLOW({ d: e2 }) {
  e2.dispose();
}, TEARDOWN({ doc: e2 }) {
  this.delete(e2);
} });
a.subscribe(() => {
  let e2 = a.getSnapshot(), n2 = /* @__PURE__ */ new Map();
  for (let [t2] of e2)
    n2.set(t2, t2.documentElement.style.overflow);
  for (let t2 of e2.values()) {
    let o3 = n2.get(t2.doc) === "hidden", c2 = t2.count !== 0;
    (c2 && !o3 || !c2 && o3) && a.dispatch(t2.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t2), t2.count === 0 && a.dispatch("TEARDOWN", t2);
  }
});
function p(e2, r2, n2) {
  let f2 = S$2(a), o3 = e2 ? f2.get(e2) : void 0, i2 = o3 ? o3.count > 0 : false;
  return l$4(() => {
    if (!(!e2 || !r2))
      return a.dispatch("PUSH", e2, n2), () => a.dispatch("POP", e2, n2);
  }, [r2, e2]), i2;
}
let u = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
function h(r2, l2 = true) {
  l$4(() => {
    var o3;
    if (!l2)
      return;
    let e2 = typeof r2 == "function" ? r2() : r2.current;
    if (!e2)
      return;
    function a2() {
      var d2;
      if (!e2)
        return;
      let i2 = (d2 = t.get(e2)) != null ? d2 : 1;
      if (i2 === 1 ? t.delete(e2) : t.set(e2, i2 - 1), i2 !== 1)
        return;
      let n2 = u.get(e2);
      n2 && (n2["aria-hidden"] === null ? e2.removeAttribute("aria-hidden") : e2.setAttribute("aria-hidden", n2["aria-hidden"]), e2.inert = n2.inert, u.delete(e2));
    }
    let f2 = (o3 = t.get(e2)) != null ? o3 : 0;
    return t.set(e2, f2 + 1), f2 !== 0 || (u.set(e2, { "aria-hidden": e2.getAttribute("aria-hidden"), inert: e2.inert }), e2.setAttribute("aria-hidden", "true"), e2.inert = true), a2;
  }, [r2, l2]);
}
var Se$1 = ((o3) => (o3[o3.Open = 0] = "Open", o3[o3.Closed = 1] = "Closed", o3))(Se$1 || {}), Fe = ((e2) => (e2[e2.SetTitleId = 0] = "SetTitleId", e2))(Fe || {});
let ke = { [0](t2, e2) {
  return t2.titleId === e2.id ? t2 : { ...t2, titleId: e2.id };
} }, M = reactExports.createContext(null);
M.displayName = "DialogContext";
function S$1(t2) {
  let e2 = reactExports.useContext(M);
  if (e2 === null) {
    let o3 = new Error(`<${t2} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o3, S$1), o3;
  }
  return e2;
}
function xe$1(t2, e2, o3 = () => [document.body]) {
  p(t2, e2, (s2) => {
    var n2;
    return { containers: [...(n2 = s2.containers) != null ? n2 : [], o3] };
  });
}
function _e(t2, e2) {
  return u$3(e2.type, ke, t2, e2);
}
let Me = "div", He$1 = S$6.RenderStrategy | S$6.Static;
function Ie(t2, e2) {
  let o$12 = I$2(), { id: s2 = `headlessui-dialog-${o$12}`, open: n$12, onClose: l2, initialFocus: d2, __demoMode: c2 = false, ...D2 } = t2, [P$12, F2] = reactExports.useState(0), i2 = C();
  n$12 === void 0 && i2 !== null && (n$12 = (i2 & d$3.Open) === d$3.Open);
  let m2 = reactExports.useRef(null), Q2 = y$3(m2, e2), y2 = reactExports.useRef(null), p2 = n(m2), U2 = t2.hasOwnProperty("open") || i2 !== null, N2 = t2.hasOwnProperty("onClose");
  if (!U2 && !N2)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!U2)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!N2)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof n$12 != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n$12}`);
  if (typeof l2 != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l2}`);
  let u2 = n$12 ? 0 : 1, [E$12, Z2] = reactExports.useReducer(_e, { titleId: null, descriptionId: null, panelRef: reactExports.createRef() }), A2 = o$2(() => l2(false)), Y2 = o$2((r2) => Z2({ type: 0, id: r2 })), k2 = l$3() ? c2 ? false : u2 === 0 : false, x2 = P$12 > 1, $2 = reactExports.useContext(M) !== null, ee2 = x2 ? "parent" : "leaf", W2 = i2 !== null ? (i2 & d$3.Closing) === d$3.Closing : false, te$12 = (() => $2 || W2 ? false : k2)(), oe2 = reactExports.useCallback(() => {
    var r2, f2;
    return (f2 = Array.from((r2 = p2 == null ? void 0 : p2.querySelectorAll("body > *")) != null ? r2 : []).find((a2) => a2.id === "headlessui-portal-root" ? false : a2.contains(y2.current) && a2 instanceof HTMLElement)) != null ? f2 : null;
  }, [y2]);
  h(oe2, te$12);
  let re2 = (() => x2 ? true : k2)(), ne2 = reactExports.useCallback(() => {
    var r2, f2;
    return (f2 = Array.from((r2 = p2 == null ? void 0 : p2.querySelectorAll("[data-headlessui-portal]")) != null ? r2 : []).find((a2) => a2.contains(y2.current) && a2 instanceof HTMLElement)) != null ? f2 : null;
  }, [y2]);
  h(ne2, re2);
  let H2 = o$2(() => {
    var f2, a2;
    return [...Array.from((f2 = p2 == null ? void 0 : p2.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? f2 : []).filter((T2) => !(T2 === document.body || T2 === document.head || !(T2 instanceof HTMLElement) || T2.contains(y2.current) || E$12.panelRef.current && T2.contains(E$12.panelRef.current))), (a2 = E$12.panelRef.current) != null ? a2 : m2.current];
  }), le2 = (() => !(!k2 || x2))();
  L(() => H2(), A2, le2);
  let ae2 = (() => !(x2 || u2 !== 0))();
  E(p2 == null ? void 0 : p2.defaultView, "keydown", (r2) => {
    ae2 && (r2.defaultPrevented || r2.key === o2.Escape && (r2.preventDefault(), r2.stopPropagation(), A2()));
  });
  let ie2 = (() => !(W2 || u2 !== 0 || $2))();
  xe$1(p2, ie2, H2), reactExports.useEffect(() => {
    if (u2 !== 0 || !m2.current)
      return;
    let r2 = new ResizeObserver((f2) => {
      for (let a2 of f2) {
        let T2 = a2.target.getBoundingClientRect();
        T2.x === 0 && T2.y === 0 && T2.width === 0 && T2.height === 0 && A2();
      }
    });
    return r2.observe(m2.current), () => r2.disconnect();
  }, [u2, m2, A2]);
  let [se2, pe2] = M$2(), de2 = reactExports.useMemo(() => [{ dialogState: u2, close: A2, setTitleId: Y2 }, E$12], [u2, E$12, A2, Y2]), J2 = reactExports.useMemo(() => ({ open: u2 === 0 }), [u2]), ue2 = { ref: Q2, id: s2, role: "dialog", "aria-modal": u2 === 0 ? true : void 0, "aria-labelledby": E$12.titleId, "aria-describedby": se2 };
  return React.createElement(M$1, { type: "Dialog", enabled: u2 === 0, element: m2, onUpdate: o$2((r2, f2) => {
    f2 === "Dialog" && u$3(r2, { [s$1.Add]: () => F2((a2) => a2 + 1), [s$1.Remove]: () => F2((a2) => a2 - 1) });
  }) }, React.createElement(P, { force: true }, React.createElement(te, null, React.createElement(M.Provider, { value: de2 }, React.createElement(te.Group, { target: m2 }, React.createElement(P, { force: false }, React.createElement(pe2, { slot: J2, name: "Dialog.Description" }, React.createElement(Re$1, { initialFocus: d2, containers: H2, features: k2 ? u$3(ee2, { parent: Re$1.features.RestoreFocus, leaf: Re$1.features.All & ~Re$1.features.FocusLock }) : Re$1.features.None }, X$1({ ourProps: ue2, theirProps: D2, slot: J2, defaultTag: Me, features: He$1, visible: u2 === 0, name: "Dialog" })))))))), React.createElement(c$5, { features: p$3.Hidden, ref: y2 }));
}
let we = "div";
function Be(t2, e2) {
  let o3 = I$2(), { id: s2 = `headlessui-dialog-overlay-${o3}`, ...n2 } = t2, [{ dialogState: l2, close: d2 }] = S$1("Dialog.Overlay"), c2 = y$3(e2), D2 = o$2((i2) => {
    if (i2.target === i2.currentTarget) {
      if (r$2(i2.currentTarget))
        return i2.preventDefault();
      i2.preventDefault(), i2.stopPropagation(), d2();
    }
  }), P2 = reactExports.useMemo(() => ({ open: l2 === 0 }), [l2]);
  return X$1({ ourProps: { ref: c2, id: s2, "aria-hidden": true, onClick: D2 }, theirProps: n2, slot: P2, defaultTag: we, name: "Dialog.Overlay" });
}
let Ge = "div";
function Ue(t2, e2) {
  let o3 = I$2(), { id: s2 = `headlessui-dialog-backdrop-${o3}`, ...n2 } = t2, [{ dialogState: l2 }, d2] = S$1("Dialog.Backdrop"), c2 = y$3(e2);
  reactExports.useEffect(() => {
    if (d2.panelRef.current === null)
      throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [d2.panelRef]);
  let D2 = reactExports.useMemo(() => ({ open: l2 === 0 }), [l2]);
  return React.createElement(P, { force: true }, React.createElement(te, null, X$1({ ourProps: { ref: c2, id: s2, "aria-hidden": true }, theirProps: n2, slot: D2, defaultTag: Ge, name: "Dialog.Backdrop" })));
}
let Ne$1 = "div";
function Ye(t2, e2) {
  let o3 = I$2(), { id: s2 = `headlessui-dialog-panel-${o3}`, ...n2 } = t2, [{ dialogState: l2 }, d2] = S$1("Dialog.Panel"), c2 = y$3(e2, d2.panelRef), D2 = reactExports.useMemo(() => ({ open: l2 === 0 }), [l2]), P2 = o$2((i2) => {
    i2.stopPropagation();
  });
  return X$1({ ourProps: { ref: c2, id: s2, onClick: P2 }, theirProps: n2, slot: D2, defaultTag: Ne$1, name: "Dialog.Panel" });
}
let $e = "h2";
function We(t2, e2) {
  let o3 = I$2(), { id: s2 = `headlessui-dialog-title-${o3}`, ...n2 } = t2, [{ dialogState: l2, setTitleId: d2 }] = S$1("Dialog.Title"), c2 = y$3(e2);
  reactExports.useEffect(() => (d2(s2), () => d2(null)), [s2, d2]);
  let D2 = reactExports.useMemo(() => ({ open: l2 === 0 }), [l2]);
  return X$1({ ourProps: { ref: c2, id: s2 }, theirProps: n2, slot: D2, defaultTag: $e, name: "Dialog.Title" });
}
let Je = D$1(Ie), Xe = D$1(Ue), je = D$1(Ye), Ke = D$1(Be), Ve = D$1(We), St = Object.assign(Je, { Backdrop: Xe, Panel: je, Overlay: Ke, Title: Ve, Description: b });
function c(a2 = 0) {
  let [l2, r2] = reactExports.useState(a2), t2 = f$2(), o3 = reactExports.useCallback((e2) => {
    t2.current && r2((u2) => u2 | e2);
  }, [l2, t2]), m2 = reactExports.useCallback((e2) => Boolean(l2 & e2), [l2]), s2 = reactExports.useCallback((e2) => {
    t2.current && r2((u2) => u2 & ~e2);
  }, [r2, t2]), g2 = reactExports.useCallback((e2) => {
    t2.current && r2((u2) => u2 ^ e2);
  }, [r2]);
  return { flags: l2, addFlag: o3, hasFlag: m2, removeFlag: s2, toggleFlag: g2 };
}
function l(r2) {
  let e2 = { called: false };
  return (...t2) => {
    if (!e2.called)
      return e2.called = true, r2(...t2);
  };
}
function d(t2, ...e2) {
  t2 && e2.length > 0 && t2.classList.add(...e2);
}
function v(t2, ...e2) {
  t2 && e2.length > 0 && t2.classList.remove(...e2);
}
function F(t2, e2) {
  let n2 = o$3();
  if (!t2)
    return n2.dispose;
  let { transitionDuration: m2, transitionDelay: o3 } = getComputedStyle(t2), [u2, p2] = [m2, o3].map((a2) => {
    let [r2 = 0] = a2.split(",").filter(Boolean).map((i2) => i2.includes("ms") ? parseFloat(i2) : parseFloat(i2) * 1e3).sort((i2, f2) => f2 - i2);
    return r2;
  }), l2 = u2 + p2;
  if (l2 !== 0) {
    n2.group((r2) => {
      r2.setTimeout(() => {
        e2(), r2.dispose();
      }, l2), r2.addEventListener(t2, "transitionrun", (i2) => {
        i2.target === i2.currentTarget && r2.dispose();
      });
    });
    let a2 = n2.addEventListener(t2, "transitionend", (r2) => {
      r2.target === r2.currentTarget && (e2(), a2());
    });
  } else
    e2();
  return n2.add(() => e2()), n2.dispose;
}
function y(t2, e2, n2, m2) {
  let o3 = n2 ? "enter" : "leave", u2 = o$3(), p2 = m2 !== void 0 ? l(m2) : () => {
  };
  o3 === "enter" && (t2.removeAttribute("hidden"), t2.style.display = "");
  let l$12 = u$3(o3, { enter: () => e2.enter, leave: () => e2.leave }), a2 = u$3(o3, { enter: () => e2.enterTo, leave: () => e2.leaveTo }), r2 = u$3(o3, { enter: () => e2.enterFrom, leave: () => e2.leaveFrom });
  return v(t2, ...e2.enter, ...e2.enterTo, ...e2.enterFrom, ...e2.leave, ...e2.leaveFrom, ...e2.leaveTo, ...e2.entered), d(t2, ...l$12, ...r2), u2.nextFrame(() => {
    v(t2, ...r2), d(t2, ...a2), F(t2, () => (v(t2, ...l$12), d(t2, ...e2.entered), p2()));
  }), u2.dispose;
}
function D({ container: i2, direction: t2, classes: o3, onStart: s2, onStop: u2 }) {
  let a2 = f$2(), c2 = p$4(), r2 = s$5(t2);
  l$4(() => {
    let e2 = o$3();
    c2.add(e2.dispose);
    let n2 = i2.current;
    if (n2 && r2.current !== "idle" && a2.current)
      return e2.dispose(), s2.current(r2.current), e2.add(y(n2, o3.current, r2.current === "enter", () => {
        e2.dispose(), u2.current(r2.current);
      })), e2.dispose;
  }, [t2]);
}
function S(n2 = "") {
  return n2.split(" ").filter((t2) => t2.trim().length > 1);
}
let A = reactExports.createContext(null);
A.displayName = "TransitionContext";
var Ce = ((r2) => (r2.Visible = "visible", r2.Hidden = "hidden", r2))(Ce || {});
function Ee() {
  let n2 = reactExports.useContext(A);
  if (n2 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return n2;
}
function be() {
  let n2 = reactExports.useContext(I);
  if (n2 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return n2;
}
let I = reactExports.createContext(null);
I.displayName = "NestingContext";
function _(n2) {
  return "children" in n2 ? _(n2.children) : n2.current.filter(({ el: t2 }) => t2.current !== null).filter(({ state: t2 }) => t2 === "visible").length > 0;
}
function ne(n2, t2) {
  let r2 = s$5(n2), o3 = reactExports.useRef([]), y2 = f$2(), N2 = p$4(), p2 = o$2((s2, e2 = j$1.Hidden) => {
    let a2 = o3.current.findIndex(({ el: i2 }) => i2 === s2);
    a2 !== -1 && (u$3(e2, { [j$1.Unmount]() {
      o3.current.splice(a2, 1);
    }, [j$1.Hidden]() {
      o3.current[a2].state = "hidden";
    } }), N2.microTask(() => {
      var i2;
      !_(o3) && y2.current && ((i2 = r2.current) == null || i2.call(r2));
    }));
  }), x2 = o$2((s2) => {
    let e2 = o3.current.find(({ el: a2 }) => a2 === s2);
    return e2 ? e2.state !== "visible" && (e2.state = "visible") : o3.current.push({ el: s2, state: "visible" }), () => p2(s2, j$1.Unmount);
  }), m2 = reactExports.useRef([]), c2 = reactExports.useRef(Promise.resolve()), u2 = reactExports.useRef({ enter: [], leave: [], idle: [] }), h2 = o$2((s2, e2, a2) => {
    m2.current.splice(0), t2 && (t2.chains.current[e2] = t2.chains.current[e2].filter(([i2]) => i2 !== s2)), t2 == null || t2.chains.current[e2].push([s2, new Promise((i2) => {
      m2.current.push(i2);
    })]), t2 == null || t2.chains.current[e2].push([s2, new Promise((i2) => {
      Promise.all(u2.current[e2].map(([l2, T2]) => T2)).then(() => i2());
    })]), e2 === "enter" ? c2.current = c2.current.then(() => t2 == null ? void 0 : t2.wait.current).then(() => a2(e2)) : a2(e2);
  }), v2 = o$2((s2, e2, a2) => {
    Promise.all(u2.current[e2].splice(0).map(([i2, l2]) => l2)).then(() => {
      var i2;
      (i2 = m2.current.shift()) == null || i2();
    }).then(() => a2(e2));
  });
  return reactExports.useMemo(() => ({ children: o3, register: x2, unregister: p2, onStart: h2, onStop: v2, wait: c2, chains: u2 }), [x2, p2, o3, h2, v2, u2, c2]);
}
function Se() {
}
let xe = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function re(n2) {
  var r2;
  let t2 = {};
  for (let o3 of xe)
    t2[o3] = (r2 = n2[o3]) != null ? r2 : Se;
  return t2;
}
function Pe(n2) {
  let t2 = reactExports.useRef(re(n2));
  return reactExports.useEffect(() => {
    t2.current = re(n2);
  }, [n2]), t2;
}
let Re = "div", ie = S$6.RenderStrategy;
function ye(n2, t2) {
  let { beforeEnter: r2, afterEnter: o3, beforeLeave: y2, afterLeave: N2, enter: p2, enterFrom: x2, enterTo: m2, entered: c$12, leave: u2, leaveFrom: h2, leaveTo: v2, ...s2 } = n2, e2 = reactExports.useRef(null), a2 = y$3(e2, t2), i2 = s2.unmount ? j$1.Unmount : j$1.Hidden, { show: l2, appear: T2, initial: se2 } = Ee(), [g2, M2] = reactExports.useState(l2 ? "visible" : "hidden"), z2 = be(), { register: F2, unregister: L2 } = z2, U2 = reactExports.useRef(null);
  reactExports.useEffect(() => F2(e2), [F2, e2]), reactExports.useEffect(() => {
    if (i2 === j$1.Hidden && e2.current) {
      if (l2 && g2 !== "visible") {
        M2("visible");
        return;
      }
      return u$3(g2, { ["hidden"]: () => L2(e2), ["visible"]: () => F2(e2) });
    }
  }, [g2, e2, F2, L2, l2, i2]);
  let j2 = s$5({ enter: S(p2), enterFrom: S(x2), enterTo: S(m2), entered: S(c$12), leave: S(u2), leaveFrom: S(h2), leaveTo: S(v2) }), w2 = Pe({ beforeEnter: r2, afterEnter: o3, beforeLeave: y2, afterLeave: N2 }), k2 = l$3();
  reactExports.useEffect(() => {
    if (k2 && g2 === "visible" && e2.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [e2, g2, k2]);
  let G2 = se2 && !T2, ae2 = (() => !k2 || G2 || U2.current === l2 ? "idle" : l2 ? "enter" : "leave")(), H2 = c(0), le2 = o$2((C2) => u$3(C2, { enter: () => {
    H2.addFlag(d$3.Opening), w2.current.beforeEnter();
  }, leave: () => {
    H2.addFlag(d$3.Closing), w2.current.beforeLeave();
  }, idle: () => {
  } })), ue2 = o$2((C2) => u$3(C2, { enter: () => {
    H2.removeFlag(d$3.Opening), w2.current.afterEnter();
  }, leave: () => {
    H2.removeFlag(d$3.Closing), w2.current.afterLeave();
  }, idle: () => {
  } })), O2 = ne(() => {
    M2("hidden"), L2(e2);
  }, z2);
  D({ container: e2, classes: j2, direction: ae2, onStart: s$5((C2) => {
    O2.onStart(e2, C2, le2);
  }), onStop: s$5((C2) => {
    O2.onStop(e2, C2, ue2), C2 === "leave" && !_(O2) && (M2("hidden"), L2(e2));
  }) }), reactExports.useEffect(() => {
    G2 && (i2 === j$1.Hidden ? U2.current = null : U2.current = l2);
  }, [l2, G2, g2]);
  let B2 = s2, Te2 = { ref: a2 };
  return T2 && l2 && (B2 = { ...B2, className: e$1(s2.className, ...j2.current.enter, ...j2.current.enterFrom) }), React.createElement(I.Provider, { value: O2 }, React.createElement(c$4, { value: u$3(g2, { ["visible"]: d$3.Open, ["hidden"]: d$3.Closed }) | H2.flags }, X$1({ ourProps: Te2, theirProps: B2, defaultTag: Re, features: ie, visible: g2 === "visible", name: "Transition.Child" })));
}
function Ne(n2, t2) {
  let { show: r2, appear: o3 = false, unmount: y2, ...N2 } = n2, p2 = reactExports.useRef(null), x2 = y$3(p2, t2);
  l$3();
  let m2 = C();
  if (r2 === void 0 && m2 !== null && (r2 = (m2 & d$3.Open) === d$3.Open), ![true, false].includes(r2))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [c2, u2] = reactExports.useState(r2 ? "visible" : "hidden"), h2 = ne(() => {
    u2("hidden");
  }), [v2, s2] = reactExports.useState(true), e2 = reactExports.useRef([r2]);
  l$4(() => {
    v2 !== false && e2.current[e2.current.length - 1] !== r2 && (e2.current.push(r2), s2(false));
  }, [e2, r2]);
  let a2 = reactExports.useMemo(() => ({ show: r2, appear: o3, initial: v2 }), [r2, o3, v2]);
  reactExports.useEffect(() => {
    if (r2)
      u2("visible");
    else if (!_(h2))
      u2("hidden");
    else {
      let l2 = p2.current;
      if (!l2)
        return;
      let T2 = l2.getBoundingClientRect();
      T2.x === 0 && T2.y === 0 && T2.width === 0 && T2.height === 0 && u2("hidden");
    }
  }, [r2, h2]);
  let i2 = { unmount: y2 };
  return React.createElement(I.Provider, { value: h2 }, React.createElement(A.Provider, { value: a2 }, X$1({ ourProps: { ...i2, as: reactExports.Fragment, children: React.createElement(oe, { ref: x2, ...i2, ...N2 }) }, theirProps: {}, defaultTag: reactExports.Fragment, features: ie, visible: c2 === "visible", name: "Transition" })));
}
function He(n2, t2) {
  let r2 = reactExports.useContext(A) !== null, o3 = C() !== null;
  return React.createElement(React.Fragment, null, !r2 && o3 ? React.createElement(q, { ref: t2, ...n2 }) : React.createElement(oe, { ref: t2, ...n2 }));
}
let q = D$1(Ne), oe = D$1(ye), De = D$1(He), tt = Object.assign(q, { Child: De, Root: q });
const AnimatedModalOverlay = ({
  showModal,
  height = 400,
  width = "40%",
  children
}) => {
  return /* @__PURE__ */ jsx(tt, { appear: true, show: showModal, as: reactExports.Fragment, children: /* @__PURE__ */ jsxs(
    St,
    {
      as: "div",
      className: "relative z-50 w-full h-full",
      onClose: () => {
      },
      children: [
        /* @__PURE__ */ jsx(
          tt.Child,
          {
            as: reactExports.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsx("div", { className: "fixed inset-0 w-full h-full bg-black bg-opacity-25" })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "fixed inset-0 w-full h-full overflow-y-scroll scrollbar-hide", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center min-w-full min-h-full p-4 text-center scrollbar-hide", children: /* @__PURE__ */ jsx(
          tt.Child,
          {
            as: reactExports.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 scale-95",
            enterTo: "opacity-100 scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-95",
            children: /* @__PURE__ */ jsx(
              St.Panel,
              {
                className: "relative w-11/12 text-left align-middle transition-all transform bg-white shadow-xl scrollbar-hide rounded-2xl ",
                style: {
                  maxHeight: 800,
                  height,
                  width,
                  overflowY: "scroll"
                },
                children
              }
            )
          }
        ) }) })
      ]
    }
  ) });
};
const WarningModal = () => {
  const dispatch = useAppDispatch();
  const warningModal = useAppSelector(selectIsWarningModalOpen);
  const windowType = useAppSelector((state) => state.control.windowSize);
  const router2 = useNavigate();
  useLocation();
  const imgUrl = useAppSelector(selectImgUrl);
  const height = 400;
  return /* @__PURE__ */ jsx(
    AnimatedModalOverlay,
    {
      showModal: warningModal.type != "close",
      height,
      width: windowType == "mobile" ? "96%" : void 0,
      children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col items-center justify-center h-full", children: [
        /* @__PURE__ */ jsx("div", { className: "relative object-contain w-32 h-32", children: /* @__PURE__ */ jsx("img", { src: imgUrl + `/common/icon-warning.svg` }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center py-10 text-lg font-bold h-36 underXs:text-sm", children: [
          warningModal.type == "address" && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("span", { children: "系統最多可保存20個送貨地址​" }),
            /* @__PURE__ */ jsx("span", { children: "請先刪除其他紀錄，然後再新增地址​" })
          ] }),
          warningModal.type == "payment" && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("p", { className: "px-4 text-center whitespace-pre-line lg:px-12", children: warningModal.text }) }),
          warningModal.type == "product" && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("p", { className: "px-4 text-center whitespace-pre-line lg:px-12", children: warningModal.text }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-full mb-5", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              dispatch(closeWarningModal());
              if (warningModal == null ? void 0 : warningModal.back) {
                router2(-1);
              }
            },
            className: "flex items-center justify-center w-full h-12 max-w-sm px-4 py-2 mx-6 mb-2 text-left text-white border rounded-lg hover:border-2 hover:border-yata bg-yata-deep",
            children: /* @__PURE__ */ jsx("div", { className: "font-medium", children: "關閉" })
          }
        ) })
      ] })
    }
  );
};
const ItemDetail = ({ item }) => {
  const initSku = {
    sku: "",
    plu: "",
    qty: 1,
    categoryId: item.categoryId ?? 0
  };
  const initPricing = {
    save_amt: item.save_amt ?? "",
    percent_off: item.percent_off ?? "",
    rsp: item.rsp ?? "",
    psp: item.psp ?? "",
    promotions: item.promotions
  };
  useAppDispatch();
  useMsal();
  const router2 = useNavigate();
  useLocation();
  const imgUrl = useAppSelector(selectImgUrl);
  const [skuQty, setSkuQty] = reactExports.useState(initSku);
  const [isAddToCart, setIsAddToCart] = reactExports.useState(null);
  const [btnLoading, setBtnLoading] = reactExports.useState(false);
  const [like, setLike] = reactExports.useState(false);
  const [pricing, setPricing] = reactExports.useState(initPricing);
  const [status, setStatus] = reactExports.useState({
    product: 0,
    inventory: 1
  });
  useAppSelector(selectIsAuthenticated);
  const noSkuInfo = skuQty.plu == "" && skuQty.sku == "";
  const notAvailable = status.inventory == 0 || status.product == 1 || status.product == 2;
  reactExports.useEffect(() => {
    if (!item.options && item.plu && item.sku && item.categoryId) {
      setSkuQty({
        ...skuQty,
        plu: item.plu,
        sku: item.sku,
        categoryId: item.categoryId
      });
    } else {
      setSkuQty({
        ...skuQty,
        categoryId: item.categoryId
      });
    }
    if (item.wish_list == 1) {
      setLike(true);
    }
    setStatus({
      product: item.product_status,
      inventory: item.inventory_status
    });
  }, [item]);
  const inc = () => {
    setSkuQty({ ...skuQty, qty: skuQty.qty + 1 });
  };
  const dec = () => {
    if (skuQty.qty > 1) {
      setSkuQty({ ...skuQty, qty: skuQty.qty - 1 });
    }
  };
  const likeChangeHandler = async (e2) => {
    e2.stopPropagation();
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:bg-cat-pink-bar lg:py-2 lg:px-2 lg:mt-3", children: [
      /* @__PURE__ */ jsx("div", { className: "flex space-x-3 flew-row underLg:hidden", children: /* @__PURE__ */ jsx("ul", { className: "list-disc list-inside", children: pricing.promotions.length > 0 && pricing.promotions.map((desc, idx) => {
        return /* @__PURE__ */ jsx("li", { className: "text-red-text", children: Object.values(desc)[0] }, `promo-desc-${idx}`);
      }) }) }),
      pricing.save_amt == "0.00" ? /* @__PURE__ */ jsxs("div", { className: "my-2 mr-2 text-3xl font-semibold lg:font-bold lg:text-4xl text-red-text", children: [
        "$",
        pricing.rsp
      ] }) : /* @__PURE__ */ jsxs("div", { className: "flex flex-row lg:flex-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "my-2 mr-2 text-2xl font-semibold lg:text-4xl text-red-text", children: [
            "$",
            pricing.psp
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "pt-1 my-2 mr-2 line-through lg:text-2xl lg:text-[#666666]", children: [
            "$",
            pricing.rsp
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "px-3 my-3 mr-2 text-sm text-white rounded-full lg:my-1 lg:px-4 lg:text-lg bg-red-text", children: [
            pricing.percent_off,
            "% off"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "hidden lg:block", children: [
            "/ 節省了 $",
            pricing.save_amt
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "flex space-x-3 list-disc list-inside flew-row lg:hidden", children: pricing.promotions.length > 0 && pricing.promotions.map((desc, idx) => {
      return /* @__PURE__ */ jsx("li", { className: "font-bold text-red-text", children: Object.values(desc)[0] }, `promo-desc-${idx}`);
    }) }),
    /* @__PURE__ */ jsxs("div", { className: "my-4 space-y-4", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex flex-row items-center ",
          style: item.source_from_c != "" ? { height: "auto", visibility: "visible" } : { height: 0, margin: 0, visibility: "hidden" },
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-20 min-w-[5rem] font-bold ", children: "產地 :" }),
            /* @__PURE__ */ jsx("div", { children: item.source_from_c })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex flex-row",
          style: item.short_description_c != "" ? { height: "auto", visibility: "visible" } : { height: 0, margin: 0, visibility: "hidden" },
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-20 min-w-[5rem] font-bold ", children: "簡要說明 :" }),
            /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: item.short_description_c } })
          ]
        }
      ),
      item.options && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
        ItemColorSize,
        {
          colorCount: item.color_count,
          colors: item.options,
          skuQty,
          setSkuQty,
          setPricing,
          setStatus
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center ", children: [
        /* @__PURE__ */ jsx("div", { className: "w-20 min-w-[5rem] font-bold", children: "數量 :" }),
        /* @__PURE__ */ jsx(
          "button",
          {
            disabled: noSkuInfo,
            onClick: dec,
            className: "flex items-center justify-center w-10 text-lg font-bold border rounded cursor-pointer lg:text-2xl transition-all ease-in-out duration-200 " + (noSkuInfo ? "bg-grey-i text-grey cursor-default" : "bg-grey-bar"),
            children: "-"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-10 mx-3 text-2xl text-center transition-all ease-in-out duration-200 " + (noSkuInfo ? "text-grey" : ""),
            children: skuQty.qty
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            disabled: noSkuInfo,
            onClick: inc,
            className: "flex items-center justify-center w-10 text-lg font-bold border rounded cursor-pointer lg:text-2xl transition-all ease-in-out duration-200 " + (noSkuInfo ? "bg-grey-i text-grey cursor-default" : "bg-grey-bar"),
            children: "+"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative flex flex-row my-8 space-x-4 lg:my-auto underLg:justify-evenly", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "relative flex items-center justify-center py-2 text-white rounded-full min-w-fit w-80 lg:w-40 transition-all duration-200  " + (noSkuInfo || notAvailable ? "bg-yata-deep/40 cursor-default" : "bg-yata-deep"),
          disabled: btnLoading,
          onClick: async () => {
            if (status.product !== 1 && status.product !== 2) {
              router2("/account");
            }
          },
          children: [
            status.product == 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
              status.inventory == 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx("div", { className: "relative object-contain w-5 h-5 mr-2", children: /* @__PURE__ */ jsx("img", { src: imgUrl + "/homepage/navbar/cart.svg" }) }),
                /* @__PURE__ */ jsx("span", { className: "underLg:text-sm ", children: !btnLoading ? "加入購物車" : "加入中" })
              ] }),
              status.inventory == 0 && /* @__PURE__ */ jsx("span", { children: "已售罄" })
            ] }),
            status.product == 1 && /* @__PURE__ */ jsx("span", { children: "已下架" }),
            status.product == 2 && /* @__PURE__ */ jsx("span", { children: "即將開售" }),
            /* @__PURE__ */ jsx(AddToCartPopup, { isAddToCart })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "flex items-center justify-center py-2 border-2 rounded-full w-80 lg:w-48 text-red-text border-red-text",
          onClick: likeChangeHandler,
          children: [
            /* @__PURE__ */ jsx("div", { className: "relative w-4 h-4 mr-1 transition-all ease-in-out lg:mr-2", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: like ? imgUrl + "/homepage/heart-selected.svg" : imgUrl + "/homepage/heart-default.svg",
                alt: "heart"
              }
            ) }),
            /* @__PURE__ */ jsx("span", { className: "transition-all ease-in-out underLg:text-sm", children: like ? "從喜愛清單中移除​" : "加入喜愛清單" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 bg-transparent",
        style: isAddToCart ? { visibility: "visible", pointerEvents: "initial" } : { visibility: "hidden", pointerEvents: "none" },
        onClick: () => setIsAddToCart(null)
      }
    ),
    /* @__PURE__ */ jsx(WarningModal, {})
  ] });
};
function ItemDescription({ item }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "mb-4 lg:flex lg:flex-row lg:justify-between lg:space-x-4 lg:px-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row my-4 lg:w-4/12", children: [
        /* @__PURE__ */ jsx("div", { className: "w-20 text-base font-bold lg:w-1/4 min-w-[5rem] lg:min-w-fit", children: "特別說明：" }),
        item.special_remarks_c != "" && /* @__PURE__ */ jsx("li", { className: "text-base list-none lg:list-disc", children: item.special_remarks_c })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row my-4 lg:w-5/12", children: [
        /* @__PURE__ */ jsx("div", { className: "w-20 text-base font-bold lg:w-[4.5rem] min-w-[5rem] lg:min-w-fit", children: "送貨：" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col text-base list-none lg:list-disc", children: [
          /* @__PURE__ */ jsx("li", { children: item.delivery_tag_description_c }),
          /* @__PURE__ */ jsx("li", { children: item.shipping_mode_description_c }),
          /* @__PURE__ */ jsx("li", { children: item.other_shipping_rules_description_c })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row my-4 lg:w-3/12", children: [
        /* @__PURE__ */ jsx("div", { className: "w-20 text-base font-bold lg:w-[4.5rem] min-w-[5rem] lg:min-w-fit", children: "退換：" }),
        /* @__PURE__ */ jsx("div", { className: "text-base list-none lg:list-disc", children: /* @__PURE__ */ jsx("li", { children: item.return_policy_description_c }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "bg-grey", children: /* @__PURE__ */ jsx("div", { className: "flex flex-row", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "px-6 py-3 text-white bg-yata-deep underLg:mx-4", children: "產品介紹" }) }) }) }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "p-3 bg-grey-light underLg:text-sm",
          dangerouslySetInnerHTML: { __html: item.full_description_c }
        }
      )
    ] })
  ] });
}
const CategoryTitle = ({ query, pathname, filter, product }) => {
  useNavigate();
  return (
    // Title
    /* @__PURE__ */ jsx("div", { className: "mb-4 rangeLg:px-20 rangeXl:px-24 2xl:px-48 rangeMd:pt-4 rangeSm:pt-4 rangeXs:pt-4", children: /* @__PURE__ */ jsxs("div", { className: "flex px-4 space-x-2 lg:space-x-2 lg:px-0 lg:mt-5", children: [
      /* @__PURE__ */ jsx("div", { className: "min-w-[1.25rem] min-h-[1.25rem] max-h-[28px] max-w-[28px] mr-1 flex items-center ", children: /* @__PURE__ */ jsx("div", { className: "w-5 h-5 rounded-md bg-yata" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center space-x-1", children: [
        (filter == null || filter == false) && query && /* @__PURE__ */ jsxs(Fragment, { children: [
          query.category.path && /* @__PURE__ */ jsx(
            Link,
            {
              to: `/category/${query.category.path}`,
              children: /* @__PURE__ */ jsx(
                "span",
                {
                  className: `font-bold text-xl lg:text-base cursor-pointer text-yata-brown`,
                  children: query.category.name
                }
              )
            }
          ),
          query.dept.path && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              ChevronRightSvg,
              {
                width: 15,
                height: 15,
                fill: query.segment ? "#6A3B0D" : "#A6CE39"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: `/category/${query.category.path}/${query.dept.path}`,
                children: /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `font-bold min-w-fit text-xl lg:text-base cursor-pointer ${query.segment ? "text-yata-brown" : "text-yata"}`,
                    children: query.dept.name
                  }
                )
              }
            )
          ] }),
          query.segment.path && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              ChevronRightSvg,
              {
                width: 15,
                height: 15,
                fill: query.type ? "#6A3B0D" : "#A6CE39"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: `/category/${query.category.path}/${query.dept.path}/${query.segment.path}`,
                children: /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "font-bold min-w-fit text-xl lg:text-base cursor-pointer " + (query.type ? "text-yata-brown" : "text-yata"),
                    children: query.segment.name
                  }
                )
              }
            )
          ] }),
          query.type.path && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              ChevronRightSvg,
              {
                width: 15,
                height: 15,
                fill: product ? "#6A3B0D" : "#A6CE39"
              }
            ),
            product ? /* @__PURE__ */ jsx(
              Link,
              {
                to: `/category/${query.category.path}/${query.dept.path}/${query.segment.path}/${query.type.path}`,
                children: /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "font-bold min-w-fit text-xl lg:text-base cursor-pointer " + (product ? "text-yata-brown" : "text-yata"),
                    children: query.type.name
                  }
                )
              }
            ) : /* @__PURE__ */ jsx("span", { className: "text-xl font-bold min-w-fit lg:text-base text-yata", children: query.type.name })
          ] })
        ] }),
        product && /* @__PURE__ */ jsxs(Fragment, { children: [
          query && /* @__PURE__ */ jsx(ChevronRightSvg, { width: 15, height: 15, fill: "#A6CE39" }),
          /* @__PURE__ */ jsx("span", { className: "text-xl font-bold min-w-fit lg:text-base text-yata", children: product })
        ] }),
        filter == true && /* @__PURE__ */ jsx(
          "span",
          {
            className: `font-bold text-xl lg:text-base cursor-pointer text-yata-brown`,
            children: "篩選"
          }
        )
      ] })
    ] }) })
  );
};
const createPathList = (categoryList, pathList, setDeptList, setSegmentList, setTypeList) => {
  const catLs = categoryList.filter(
    (cat) => cat.url_key === pathList[0]
  )[0];
  if (setDeptList)
    setDeptList((catLs == null ? void 0 : catLs.children) ?? []);
  const deptLs = (catLs == null ? void 0 : catLs.children) ? catLs.children.filter(
    (dept) => dept.url_key === pathList[1]
  )[0] : void 0;
  if (setSegmentList)
    setSegmentList((deptLs == null ? void 0 : deptLs.children) ?? []);
  const segLs = (deptLs == null ? void 0 : deptLs.children) ? deptLs.children.filter(
    (seg) => seg.url_key === pathList[2]
  )[0] : void 0;
  if (setTypeList)
    setTypeList((segLs == null ? void 0 : segLs.children) ?? []);
  const type = (segLs == null ? void 0 : segLs.children) ? segLs.children.filter(
    (type2) => type2.url_key === pathList[3]
  )[0] : void 0;
  const catPath2 = {
    category: { path: pathList[0], name: catLs == null ? void 0 : catLs.name, id: catLs == null ? void 0 : catLs.id },
    dept: { path: pathList[1], name: deptLs == null ? void 0 : deptLs.name, id: deptLs == null ? void 0 : deptLs.id },
    segment: { path: pathList[2], name: segLs == null ? void 0 : segLs.name, id: segLs == null ? void 0 : segLs.id },
    type: { path: pathList[3], name: type == null ? void 0 : type.name, id: type == null ? void 0 : type.id }
  };
  return catPath2;
};
const ProductDetail = () => {
  const router2 = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const catPath2 = useAppSelector((state) => state.config.categoryPath);
  const categoryList = useAppSelector(selectCategoryList);
  const productDetail = useAppSelector(selectProductDetail);
  const [currentProductId, setCurrentProductId] = reactExports.useState();
  const [pathTitle, setPathTitle] = reactExports.useState(
    null
  );
  const [storedCatPath, setStoredCatPath] = reactExports.useState("");
  const pathArr = location.pathname.split("/");
  const productId = pathArr[pathArr.length - 1].split("quote_type=")[0];
  reactExports.useEffect(() => {
    const storedCatPath2 = localStorage.getItem("storedCatPath");
    const storedPlu = localStorage.getItem("storedPlu");
    setStoredCatPath(storedCatPath2);
    dispatch(initProductDetail());
    const getProductDetail = async () => {
      const catId = pathArr[pathArr.length - 1].split("id=")[1] ?? 0;
      const quoteType = location.pathname.split("quote_type=")[1];
      if (!productId) {
        router2(`${"/ViewYata-React/"}404`);
        return;
      } else {
        if (storedPlu && storedPlu !== productId) {
          localStorage.removeItem("storedCatPath");
        }
        if (catPath2) {
          localStorage.setItem("storedCatPath", JSON.stringify(catPath2));
        }
        localStorage.setItem("storedPlu", productId);
        setCurrentProductId(productId);
        const res = await dispatch(
          getProductDetailThunk({
            plu: productId,
            categoryId: catId.toLocaleString(),
            quote_type: quoteType ? +quoteType : void 0
          })
        );
        if (res.type == "product/detail/rejected" || !res.payload) {
          router2(`${"/ViewYata-React/"}404`);
        }
        const detail = res.payload;
        if (detail.urlPath && detail.categoryId) {
          const pathList = detail.urlPath.split("/");
          if (categoryList.length > 0) {
            const newCatPath = createPathList(categoryList, pathList);
            setPathTitle(newCatPath);
            localStorage.setItem("storedCatPath", JSON.stringify(newCatPath));
          }
        } else {
          setPathTitle(catPath2 ?? "");
        }
      }
    };
    getProductDetail();
  }, [categoryList]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("title", { children: productDetail && productDetail.full_name_c ? `${productDetail.full_name_c} | YATA eShop` : "YATA eShop" }),
    /* @__PURE__ */ jsx(
      Loading,
      {
        isLoading: !(productDetail != null && productDetail.plu == currentProductId)
      }
    ),
    productDetail != null && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        CategoryTitle,
        {
          product: productDetail.full_name_c,
          query: pathTitle && pathTitle != "" ? pathTitle : storedCatPath && JSON.parse(storedCatPath)
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "px-4 rangeLg:px-20 rangeXl:px-24 2xl:px-48", children: /* @__PURE__ */ jsx("div", { className: "lg:flex lg:flex-row", children: /* @__PURE__ */ jsxs("div", { className: "lg:w-full", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "items-center hidden lg:flex lg:flex-row", children: /* @__PURE__ */ jsx("div", { className: "my-2", children: /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold", children: productDetail.full_name_c }) }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "lg:flex lg:flex-row", children: [
          /* @__PURE__ */ jsx("div", { className: "lg:w-2/5 lg:max-w-sm", children: /* @__PURE__ */ jsx(
            ItemImageBox,
            {
              plu: productDetail.plu,
              images: productDetail.images
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "lg:mx-8 lg:w-3/5", children: [
            /* @__PURE__ */ jsx("h1", { className: "block my-2 text-xl font-bold lg:hidden", children: productDetail.full_name_c }),
            /* @__PURE__ */ jsx(ItemDetail, { item: productDetail })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mb-10", children: /* @__PURE__ */ jsx(ItemDescription, { item: productDetail }) })
      ] }) }) })
    ] })
  ] });
};
const MoreBtn = ({ expand, setExpand, type }) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "w-20 px-2 h-8 border-[1px] flex items-center justify-between bg-white text-sm border-yata-brown",
      onClick: () => {
        setExpand({ ...expand, [type]: !expand[type] });
      },
      children: [
        "更多",
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "flex items-center object-contain w-4 h-4 transition-all ease-in-out duration-300 " + (expand[type] ? "rotate-180" : "rotate-0"),
            children: /* @__PURE__ */ jsx(ChevronDownSvg, { fill: "#6A3B0D" })
          }
        )
      ]
    }
  );
};
const FilterMenu = ({
  level,
  query,
  router: router2,
  segmentList,
  typeList,
  catFilterInfo
}) => {
  const { children, source_from, brand_name } = catFilterInfo;
  const initExpand = { product: false, brand: false, origin: false };
  const dispatch = useAppDispatch();
  const filterList = useAppSelector(selectFilterList);
  const windowSize = useAppSelector(selectWindowSize);
  const onLaptop = windowSize === "laptop";
  const onMobile = windowSize === "mobile";
  const lh2 = onLaptop ? 56 : 92;
  const listRef = reactExports.useRef([]);
  const [expand, setExpand] = reactExports.useState(initExpand);
  const [listHeight, setListHeight] = reactExports.useState([lh2, lh2, lh2]);
  reactExports.useEffect(() => {
    setExpand(initExpand);
    setListHeight([lh2, lh2, lh2]);
    setTimeout(() => {
      let heightList = listHeight;
      for (let i2 = 0; i2 < 3; i2++) {
        if (listRef.current[i2]) {
          heightList = heightList.map((x2, idx) => {
            return idx === i2 ? listRef.current[i2].scrollHeight : x2;
          });
        }
      }
      setListHeight(heightList);
    }, 500);
  }, [listRef, segmentList, typeList]);
  const laptopMinimalHeight = 64;
  const laptopListHeight = (expand2, listHeight2) => {
    return {
      height: expand2 ? onLaptop ? listHeight2 : "auto" : onLaptop ? "3.5rem" : "auto"
    };
  };
  const mobileListHeight = (expand2, listHeight2) => {
    return {
      height: expand2 ? onLaptop ? "auto" : listHeight2 : onLaptop ? "auto" : "5rem"
    };
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    level !== 4 && // ((level == 3 && typeList?.length! > 0) ||
    //   (level == 2 && segmentList?.length! > 0)) && (
    children.length > 0 && /* @__PURE__ */ jsxs(
      "div",
      {
        className: "w-full mb-8 overflow-hidden transition-all duration-300 ease-in-out bg-white lg:mb-0 lg:flex lg:overflow-visible",
        style: laptopListHeight(expand.product, listHeight[0]),
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center lg:w-[10%] lg:border-2 pl-4 lg:pl-2 lg:border-[#D7E0AF] lg:bg-[#ECF3CB] box-content font-bold lg:font-normal", children: [
            "產品類別 ",
            onLaptop ? " :" : ""
          ] }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "relative pt-3 mb-3 lg:w-[90%] transition-all duration-300 ease-in-out lg:border-2 lg:border-[#E5E5E5] lg:border-dotted px-3 lg:px-4 lg:pt-0 lg:mb-0 box-content overflow-hidden",
              style: mobileListHeight(expand.product, listHeight[0]),
              ref: (element) => listRef.current[0] = element,
              children: [
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-3 lg:gap-0 lg:flex flex-wrap items-center w-full rangeLg:w-[85%] rangeXl:w-[90%] 2xl:w-[90%] lg:py-2", children: children.map((cat, idx) => /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "box-border flex items-center h-8 lg:h-10 lg:mr-9",
                    children: [
                      onLaptop && /* @__PURE__ */ jsxs(Fragment, { children: [
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "flex items-center justify-center p-1 mr-2 transition-all duration-300 ease-in-out border rounded-md cursor-pointer w-7 h-7",
                            style: filterList.subCategories.includes(cat.id) ? {
                              borderColor: "#A6CE39",
                              backgroundColor: "#A6CE39"
                            } : {
                              borderColor: "#6A3B0D",
                              backgroundColor: "#FFF"
                            },
                            onClick: () => {
                              setExpand(initExpand);
                              dispatch(
                                setFilteringSubCategories({
                                  name: cat.name,
                                  id: cat.id
                                })
                              );
                            },
                            children: /* @__PURE__ */ jsx(TickSvg, { fill: "#FFF" })
                          }
                        ),
                        cat.name
                      ] }),
                      onMobile && /* @__PURE__ */ jsxs(
                        "div",
                        {
                          className: "relative flex items-center w-full h-full p-1 transition-all duration-300 ease-in-out border rounded-md",
                          style: filterList.subCategories.includes(cat.id) ? { borderColor: "#76AB23", color: "#76AB23" } : { borderColor: "#E5E5E5", color: "#6A3B0D" },
                          onClick: () => {
                            dispatch(
                              setFilteringSubCategories({
                                name: cat.name,
                                id: cat.id
                              })
                            );
                          },
                          children: [
                            /* @__PURE__ */ jsx("div", { className: "w-full overflow-hidden text-sm font-semibold whitespace-nowrap", children: cat.name }),
                            /* @__PURE__ */ jsx(
                              "div",
                              {
                                className: "h-4 w-4 absolute p-[0.1rem] flex transition-all duration-300 ease-in-out items-center -top-2 -right-2 rounded-full border border-[#76AB23] bg-white",
                                style: filterList.subCategories.includes(cat.id) ? { opacity: "100%" } : { opacity: "0%" },
                                children: filterList.subCategories.includes(cat.id) && /* @__PURE__ */ jsx(TickSvg, { fill: "#76AB23" })
                              }
                            )
                          ]
                        }
                      )
                    ]
                  },
                  `cat-product-laptop-${idx}`
                )) }),
                onLaptop && /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute top-0 right-0 flex items-center justify-end h-[3.5rem] pr-3 rangeLg:w-[15%] rangeXl:w-[10%] 2xl:w-[10%] transition-all ease-in-out duration-300 " + (listHeight[0] > laptopMinimalHeight ? "cursor-pointer opacity-100 visible" : " opacity-0 pointer-events-none invisible"),
                    children: /* @__PURE__ */ jsx(
                      MoreBtn,
                      {
                        expand,
                        setExpand,
                        type: "product"
                      }
                    )
                  }
                )
              ]
            }
          ),
          onMobile && /* @__PURE__ */ jsx("div", { className: "flex justify-center w-full", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "box-content flex items-center justify-center w-12 text-sm font-semibold transition-all duration-300 ease-in-out bg-white border rounded-md " + (listHeight[0] > 92 ? "h-7 cursor-pointer opacity-100 " : "h-0 pointer-events-none opacity-0"),
              onClick: () => {
                setExpand({ ...expand, product: !expand.product });
              },
              children: expand.product ? "收起" : "全部"
            }
          ) })
        ]
      }
    ),
    brand_name.length > 0 && /* @__PURE__ */ jsxs(
      "div",
      {
        className: "w-full mb-8 overflow-hidden transition-all duration-300 ease-in-out bg-white lg:mb-0 lg:flex lg:overflow-visible",
        style: laptopListHeight(expand.brand, listHeight[1]),
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center lg:w-[10%] lg:border-2 lg:pl-2 pl-4 lg:border-[#D7E0AF] font-bold lg:font-normal lg:bg-[#ECF3CB] box-content", children: [
            "品牌 ",
            onLaptop ? " :" : ""
          ] }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "relative pt-3 mb-3 lg:w-[90%] transition-all duration-300 ease-in-out lg:border-2 lg:border-[#E5E5E5] lg:border-dotted px-3 lg:px-4 lg:pt-0 lg:mb-0 box-content overflow-hidden",
              style: mobileListHeight(expand.brand, listHeight[1]),
              ref: (element) => listRef.current[1] = element,
              children: [
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-3 lg:gap-0 lg:flex flex-wrap items-center w-full rangeLg:w-[85%] rangeXl:w-[90%] 2xl:w-[90%] lg:py-2", children: brand_name.map((brand, idx) => /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "box-border flex items-center h-8 lg:h-10 lg:mr-9",
                    children: [
                      onLaptop && /* @__PURE__ */ jsxs(Fragment, { children: [
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "flex items-center justify-center p-1 mr-2 transition-all duration-300 ease-in-out border rounded-md cursor-pointer w-7 h-7",
                            style: filterList.brands.includes(brand.brand_name) ? {
                              borderColor: "#A6CE39",
                              backgroundColor: "#A6CE39"
                            } : {
                              borderColor: "#6A3B0D",
                              backgroundColor: "#FFF"
                            },
                            onClick: () => {
                              dispatch(setFilteringBrands(brand.brand_name));
                            },
                            children: /* @__PURE__ */ jsx(TickSvg, { fill: "#FFF" })
                          }
                        ),
                        brand.brand_name
                      ] }),
                      onMobile && /* @__PURE__ */ jsxs(
                        "div",
                        {
                          className: "relative flex items-center w-full h-full p-1 transition-all duration-300 ease-in-out border rounded-md",
                          style: filterList.brands.includes(brand.brand_name) ? { borderColor: "#76AB23", color: "#76AB23" } : { borderColor: "#E5E5E5", color: "#6A3B0D" },
                          onClick: () => {
                            dispatch(setFilteringBrands(brand.brand_name));
                          },
                          children: [
                            /* @__PURE__ */ jsx("div", { className: "w-full overflow-hidden text-sm font-semibold whitespace-nowrap", children: brand.brand_name }),
                            /* @__PURE__ */ jsx(
                              "div",
                              {
                                className: "h-4 w-4 absolute p-[0.1rem] flex transition-all duration-300 ease-in-out items-center -top-2 -right-2 rounded-full border border-[#76AB23] bg-white",
                                style: filterList.brands.includes(brand.brand_name) ? { opacity: "100%" } : { opacity: "0%" },
                                children: filterList.brands.includes(brand.brand_name) && /* @__PURE__ */ jsx(TickSvg, { fill: "#76AB23" })
                              }
                            )
                          ]
                        }
                      )
                    ]
                  },
                  `cat-brand-laptop-${idx}`
                )) }),
                onLaptop && /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute top-0 right-0 flex items-center justify-end h-[3.5rem] pr-3 rangeLg:w-[15%] rangeXl:w-[10%] 2xl:w-[10%] transition-all ease-in-out duration-300 " + (listHeight[1] > laptopMinimalHeight ? "cursor-pointer opacity-100 visible" : " opacity-0 pointer-events-none invisible"),
                    children: /* @__PURE__ */ jsx(MoreBtn, { expand, setExpand, type: "brand" })
                  }
                )
              ]
            }
          ),
          onMobile && /* @__PURE__ */ jsx("div", { className: "flex justify-center w-full", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "box-content flex items-center justify-center w-12 text-sm font-semibold transition-all duration-300 ease-in-out bg-white border rounded-md " + (listHeight[1] > 92 ? "h-7 cursor-pointer opacity-100 " : "h-0 pointer-events-none opacity-0"),
              onClick: () => {
                setExpand({ ...expand, brand: !expand.brand });
              },
              children: expand.brand ? "收起" : "全部"
            }
          ) })
        ]
      }
    ),
    source_from.length > 0 && /* @__PURE__ */ jsxs(
      "div",
      {
        className: "w-full mb-8 overflow-hidden transition-all duration-300 ease-in-out bg-white lg:mb-0 lg:flex lg:overflow-visible",
        style: laptopListHeight(expand.origin, listHeight[2]),
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center lg:w-[10%] lg:border-2 lg:pl-2 pl-4 lg:border-[#D7E0AF] font-bold lg:font-normal lg:bg-[#ECF3CB] box-content", children: [
            "出產地 ",
            onLaptop ? " :" : ""
          ] }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "relative pt-3 mb-3 lg:w-[90%] transition-all duration-300 ease-in-out lg:border-2 lg:border-[#E5E5E5] lg:border-dotted px-3 lg:px-4 lg:pt-0 lg:mb-0 box-content overflow-hidden",
              style: mobileListHeight(expand.origin, listHeight[2]),
              ref: (element) => listRef.current[2] = element,
              children: [
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-3 lg:gap-0 lg:flex flex-wrap items-center w-full rangeLg:w-[85%] rangeXl:w-[90%] 2xl:w-[90%] lg:py-2", children: source_from.map((country, idx) => /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "box-border flex items-center h-8 lg:h-10 lg:mr-9",
                    children: [
                      onLaptop && /* @__PURE__ */ jsxs(Fragment, { children: [
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "flex items-center justify-center p-1 mr-2 transition-all duration-300 ease-in-out border rounded-md cursor-pointer w-7 h-7",
                            style: filterList.countries.includes(country.source_from) ? {
                              borderColor: "#A6CE39",
                              backgroundColor: "#A6CE39"
                            } : {
                              borderColor: "#6A3B0D",
                              backgroundColor: "#FFF"
                            },
                            onClick: () => {
                              dispatch(setFilteringCountries(country.source_from));
                            },
                            children: /* @__PURE__ */ jsx(TickSvg, { fill: "#FFF" })
                          }
                        ),
                        country.source_from
                      ] }),
                      onMobile && /* @__PURE__ */ jsxs(
                        "div",
                        {
                          className: "relative flex items-center w-full h-full p-1 transition-all duration-300 ease-in-out border rounded-md",
                          style: filterList.countries.includes(country.source_from) ? { borderColor: "#76AB23", color: "#76AB23" } : { borderColor: "#E5E5E5", color: "#6A3B0D" },
                          onClick: () => {
                            dispatch(setFilteringCountries(country.source_from));
                          },
                          children: [
                            /* @__PURE__ */ jsx("div", { className: "w-full overflow-hidden text-sm font-semibold whitespace-nowrap", children: country.source_from }),
                            /* @__PURE__ */ jsx(
                              "div",
                              {
                                className: "h-4 w-4 absolute p-[0.1rem] flex transition-all duration-300 ease-in-out items-center -top-2 -right-2 rounded-full border border-[#76AB23] bg-white",
                                style: filterList.countries.includes(country.source_from) ? { opacity: "100%" } : { opacity: "0%" },
                                children: filterList.countries.includes(country.source_from) && /* @__PURE__ */ jsx(TickSvg, { fill: "#76AB23" })
                              }
                            )
                          ]
                        }
                      )
                    ]
                  },
                  `cat-brand-laptop-${idx}`
                )) }),
                onLaptop && /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute top-0 right-0 flex items-center justify-end h-[3.5rem] pr-3 rangeLg:w-[15%] rangeXl:w-[10%] 2xl:w-[10%] transition-all ease-in-out duration-300 " + (listHeight[2] > laptopMinimalHeight ? "cursor-pointer opacity-100 visible" : " opacity-0 pointer-events-none invisible"),
                    children: /* @__PURE__ */ jsx(
                      MoreBtn,
                      {
                        expand,
                        setExpand,
                        type: "origin"
                      }
                    )
                  }
                )
              ]
            }
          ),
          onMobile && /* @__PURE__ */ jsx("div", { className: "flex justify-center w-full", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "box-content flex items-center justify-center w-12 text-sm font-semibold transition-all duration-300 ease-in-out bg-white border rounded-md " + (listHeight[2] > 92 ? "h-7 cursor-pointer opacity-100 " : "h-0 pointer-events-none opacity-0"),
              onClick: () => {
                setExpand({ ...expand, origin: !expand.origin });
              },
              children: expand.origin ? "收起" : "全部"
            }
          ) })
        ]
      }
    ),
    onMobile && /* @__PURE__ */ jsx(ReturnButton, { btnName: "確認", goBack: true }),
    onMobile && /* @__PURE__ */ jsx(ReturnButton, { btnName: "返回", goBack: true })
  ] });
};
const XMarkSvg = (props) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 320 512",
      width: "16",
      height: "16",
      ...props,
      children: /* @__PURE__ */ jsx("path", { d: "M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" })
    }
  );
};
const FilteredResults = ({ catFilterInfo }) => {
  const imgUrl = useAppSelector(selectImgUrl);
  const dispatch = useAppDispatch();
  const filterList = useAppSelector(selectFilterList);
  const filterCatList = useAppSelector(selectFilterCatList);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "flex flex-wrap items-center w-full transition-all duration-300 ease-in-out rangeLg:px-20 rangeXl:px-24 2xl:px-48 lg:mb-8",
      style: {
        minHeight: filterCatList.length > 0 || filterList.brands.length > 0 || filterList.countries.length > 0 ? "3.5rem" : 0
      },
      children: (filterCatList.length > 0 || filterList.brands.length > 0 || filterList.countries.length > 0) && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("span", { className: "mb-2 mr-2 font-bol", children: "搜索結果：" }),
        filterCatList.length > 0 && filterCatList.map((cat, idx) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-center h-12 border-[1px] rounded-lg border-yata-medium mr-3 mb-2",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "px-2", children: [
                /* @__PURE__ */ jsx("span", { className: "mr-2", children: "產品類別:" }),
                /* @__PURE__ */ jsx("span", { children: cat.name })
              ] }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "w-8 border-l-[1px] h-full flex cursor-pointer items-center justify-center border-yata-medium",
                  onClick: () => dispatch(
                    setFilteringSubCategories({ name: cat.name, id: cat.id })
                  ),
                  children: /* @__PURE__ */ jsx("div", { className: "flex items-center w-3 h-3", children: /* @__PURE__ */ jsx(XMarkSvg, { fill: "#6A3B0D" }) })
                }
              )
            ]
          },
          "filter-option-category-" + idx
        )),
        filterList.brands.length > 0 && filterList.brands.map((brand, idx) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-center h-12 border-[1px] rounded-lg border-yata-medium mr-3 mb-2",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "px-2", children: [
                /* @__PURE__ */ jsx("span", { className: "mr-2", children: "品牌:" }),
                /* @__PURE__ */ jsx("span", { children: brand })
              ] }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "w-8 border-l-[1px] h-full flex cursor-pointer items-center justify-center border-yata-medium",
                  onClick: () => dispatch(setFilteringBrands(brand)),
                  children: /* @__PURE__ */ jsx("div", { className: "flex items-center w-3 h-3", children: /* @__PURE__ */ jsx(XMarkSvg, { fill: "#6A3B0D" }) })
                }
              )
            ]
          },
          "filter-option-brand-" + idx
        )),
        filterList.countries.length > 0 && filterList.countries.map((country, idx) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-center h-12 border-[1px] rounded-lg border-yata-medium mr-3 mb-2",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "px-2", children: [
                /* @__PURE__ */ jsx("span", { className: "mr-2", children: "出產地:" }),
                /* @__PURE__ */ jsx("span", { children: country })
              ] }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "w-8 border-l-[1px] h-full flex cursor-pointer items-center justify-center border-yata-medium",
                  onClick: () => dispatch(setFilteringCountries(country)),
                  children: /* @__PURE__ */ jsx("div", { className: "flex items-center w-3 h-3", children: /* @__PURE__ */ jsx(XMarkSvg, { fill: "#6A3B0D" }) })
                }
              )
            ]
          },
          "filter-option-country-" + idx
        )),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "text-red-remove border-b-[1px] border-red-remove py-[0.5px] cursor-pointer mb-2 space-x-1 flex items-center",
            onClick: () => {
              dispatch(onCardLoading());
              dispatch(resetFilterList());
            },
            children: [
              /* @__PURE__ */ jsx("div", { className: "relative w-4 h-4", children: /* @__PURE__ */ jsx("img", { src: imgUrl + "/cart/10.png", className: "object-contain" }) }),
              /* @__PURE__ */ jsx("span", { children: "清除全部搜索條件" })
            ]
          }
        )
      ] })
    }
  );
};
const UpDownSvg = ({ openModal }) => {
  return /* @__PURE__ */ jsxs("svg", { width: "48", height: "48", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "transition-all duration-300 ease-in-out", children: [
    /* @__PURE__ */ jsx("path", { d: "M24.3335 27V13", stroke: openModal ? "#FFF" : "#6A3B0D", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ jsx("path", { d: "M19.667 17.6667L24.3337 13L29.0003 17.6667", stroke: openModal ? "#FFF" : "#6A3B0D", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ jsx("path", { d: "M15.667 13L15.667 27", stroke: openModal ? "#FFF" : "#6A3B0D", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ jsx("path", { d: "M20.3335 22.3333L15.6668 27L11.0002 22.3333", stroke: openModal ? "#FFF" : "#6A3B0D", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
};
const FilterButton = ({
  setOpenModal,
  setFilterText,
  setProductCards,
  filterText,
  name,
  buttonText,
  buttonImg
}) => {
  const dispatch = useAppDispatch();
  const filterList = useAppSelector(selectFilterList);
  const windowSize = useAppSelector(selectWindowSize);
  const toggleFilter = async () => {
    dispatch(onCardLoading());
    if (windowSize == "mobile") {
      setOpenModal(false);
    }
    setFilterText(filterText == name ? "" : name);
    const result = await dispatch(
      getProductListApi({
        ...filterList,
        sort: filterText == name ? "" : name
      })
    );
    if (result.payload.items) {
      setProductCards(result.payload.items);
    } else {
      setProductCards([]);
    }
    setTimeout(() => {
      dispatch(onCardLoaded());
    }, 1700);
  };
  return /* @__PURE__ */ jsxs(
    "button",
    {
      className: `flex items-center justify-center gap-x-2 rounded-md lg:rounded-lg w-full lg:w-20 lg:text-base font-semibold lg:h-12 py-2 transition-all ease-in-out duration-300 ${filterText == name ? " bg-yata-deep text-white lg:bg-yata-second" : " bg-white lg:bg-[#C8BEB5] lg:text-[#482809]"}`,
      onClick: toggleFilter,
      children: [
        buttonText,
        buttonImg && /* @__PURE__ */ jsx("img", { src: buttonImg, alt: "", className: "w-3 h-3" })
      ]
    }
  );
};
var reactPaginateExports = {};
var reactPaginate = {
  get exports() {
    return reactPaginateExports;
  },
  set exports(v2) {
    reactPaginateExports = v2;
  }
};
(function(module, exports) {
  !function(e2, a2) {
    module.exports = a2(reactExports);
  }(commonjsGlobal, (e2) => (() => {
    var a2 = { 703: (e3, a3, t3) => {
      var r3 = t3(414);
      function n3() {
      }
      function i2() {
      }
      i2.resetWarningCache = n3, e3.exports = function() {
        function e4(e5, a5, t5, n4, i3, s2) {
          if (s2 !== r3) {
            var o3 = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw o3.name = "Invariant Violation", o3;
          }
        }
        function a4() {
          return e4;
        }
        e4.isRequired = e4;
        var t4 = { array: e4, bigint: e4, bool: e4, func: e4, number: e4, object: e4, string: e4, symbol: e4, any: e4, arrayOf: a4, element: e4, elementType: e4, instanceOf: a4, node: e4, objectOf: a4, oneOf: a4, oneOfType: a4, shape: a4, exact: a4, checkPropTypes: i2, resetWarningCache: n3 };
        return t4.PropTypes = t4, t4;
      };
    }, 697: (e3, a3, t3) => {
      e3.exports = t3(703)();
    }, 414: (e3) => {
      e3.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }, 98: (a3) => {
      a3.exports = e2;
    } }, t2 = {};
    function r2(e3) {
      var n3 = t2[e3];
      if (void 0 !== n3)
        return n3.exports;
      var i2 = t2[e3] = { exports: {} };
      return a2[e3](i2, i2.exports, r2), i2.exports;
    }
    r2.n = (e3) => {
      var a3 = e3 && e3.__esModule ? () => e3.default : () => e3;
      return r2.d(a3, { a: a3 }), a3;
    }, r2.d = (e3, a3) => {
      for (var t3 in a3)
        r2.o(a3, t3) && !r2.o(e3, t3) && Object.defineProperty(e3, t3, { enumerable: true, get: a3[t3] });
    }, r2.o = (e3, a3) => Object.prototype.hasOwnProperty.call(e3, a3), r2.r = (e3) => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e3, "__esModule", { value: true });
    };
    var n2 = {};
    return (() => {
      r2.r(n2), r2.d(n2, { default: () => k2 });
      var e3 = r2(98), a3 = r2.n(e3), t3 = r2(697), i2 = r2.n(t3);
      function s2() {
        return s2 = Object.assign ? Object.assign.bind() : function(e4) {
          for (var a4 = 1; a4 < arguments.length; a4++) {
            var t4 = arguments[a4];
            for (var r3 in t4)
              Object.prototype.hasOwnProperty.call(t4, r3) && (e4[r3] = t4[r3]);
          }
          return e4;
        }, s2.apply(this, arguments);
      }
      var o3 = function(e4) {
        var t4 = e4.pageClassName, r3 = e4.pageLinkClassName, n3 = e4.page, i3 = e4.selected, o4 = e4.activeClassName, l3 = e4.activeLinkClassName, c3 = e4.getEventListener, p3 = e4.pageSelectedHandler, u3 = e4.href, g3 = e4.extraAriaContext, d3 = e4.pageLabelBuilder, f3 = e4.rel, b3 = e4.ariaLabel || "Page " + n3 + (g3 ? " " + g3 : ""), v3 = null;
        return i3 && (v3 = "page", b3 = e4.ariaLabel || "Page " + n3 + " is your current page", t4 = void 0 !== t4 ? t4 + " " + o4 : o4, void 0 !== r3 ? void 0 !== l3 && (r3 = r3 + " " + l3) : r3 = l3), a3().createElement("li", { className: t4 }, a3().createElement("a", s2({ rel: f3, role: u3 ? void 0 : "button", className: r3, href: u3, tabIndex: i3 ? "-1" : "0", "aria-label": b3, "aria-current": v3, onKeyPress: p3 }, c3(p3)), d3(n3)));
      };
      o3.propTypes = { pageSelectedHandler: i2().func.isRequired, selected: i2().bool.isRequired, pageClassName: i2().string, pageLinkClassName: i2().string, activeClassName: i2().string, activeLinkClassName: i2().string, extraAriaContext: i2().string, href: i2().string, ariaLabel: i2().string, page: i2().number.isRequired, getEventListener: i2().func.isRequired, pageLabelBuilder: i2().func.isRequired, rel: i2().string };
      const l2 = o3;
      function c2() {
        return c2 = Object.assign ? Object.assign.bind() : function(e4) {
          for (var a4 = 1; a4 < arguments.length; a4++) {
            var t4 = arguments[a4];
            for (var r3 in t4)
              Object.prototype.hasOwnProperty.call(t4, r3) && (e4[r3] = t4[r3]);
          }
          return e4;
        }, c2.apply(this, arguments);
      }
      var p2 = function(e4) {
        var t4 = e4.breakLabel, r3 = e4.breakAriaLabel, n3 = e4.breakClassName, i3 = e4.breakLinkClassName, s3 = e4.breakHandler, o4 = e4.getEventListener, l3 = n3 || "break";
        return a3().createElement("li", { className: l3 }, a3().createElement("a", c2({ className: i3, role: "button", tabIndex: "0", "aria-label": r3, onKeyPress: s3 }, o4(s3)), t4));
      };
      p2.propTypes = { breakLabel: i2().oneOfType([i2().string, i2().node]), breakAriaLabel: i2().string, breakClassName: i2().string, breakLinkClassName: i2().string, breakHandler: i2().func.isRequired, getEventListener: i2().func.isRequired };
      const u2 = p2;
      function g2(e4) {
        var a4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return null != e4 ? e4 : a4;
      }
      function d2(e4) {
        return d2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e5) {
          return typeof e5;
        } : function(e5) {
          return e5 && "function" == typeof Symbol && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
        }, d2(e4);
      }
      function f2() {
        return f2 = Object.assign ? Object.assign.bind() : function(e4) {
          for (var a4 = 1; a4 < arguments.length; a4++) {
            var t4 = arguments[a4];
            for (var r3 in t4)
              Object.prototype.hasOwnProperty.call(t4, r3) && (e4[r3] = t4[r3]);
          }
          return e4;
        }, f2.apply(this, arguments);
      }
      function b2(e4, a4) {
        for (var t4 = 0; t4 < a4.length; t4++) {
          var r3 = a4[t4];
          r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(e4, r3.key, r3);
        }
      }
      function v2(e4, a4) {
        return v2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, a5) {
          return e5.__proto__ = a5, e5;
        }, v2(e4, a4);
      }
      function h2(e4, a4) {
        if (a4 && ("object" === d2(a4) || "function" == typeof a4))
          return a4;
        if (void 0 !== a4)
          throw new TypeError("Derived constructors may only return object or undefined");
        return m2(e4);
      }
      function m2(e4) {
        if (void 0 === e4)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e4;
      }
      function y2(e4) {
        return y2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e5) {
          return e5.__proto__ || Object.getPrototypeOf(e5);
        }, y2(e4);
      }
      function C2(e4, a4, t4) {
        return a4 in e4 ? Object.defineProperty(e4, a4, { value: t4, enumerable: true, configurable: true, writable: true }) : e4[a4] = t4, e4;
      }
      var P2 = function(e4) {
        !function(e5, a4) {
          if ("function" != typeof a4 && null !== a4)
            throw new TypeError("Super expression must either be null or a function");
          e5.prototype = Object.create(a4 && a4.prototype, { constructor: { value: e5, writable: true, configurable: true } }), Object.defineProperty(e5, "prototype", { writable: false }), a4 && v2(e5, a4);
        }(o4, e4);
        var t4, r3, n3, i3, s3 = (n3 = o4, i3 = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if ("function" == typeof Proxy)
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (e5) {
            return false;
          }
        }(), function() {
          var e5, a4 = y2(n3);
          if (i3) {
            var t5 = y2(this).constructor;
            e5 = Reflect.construct(a4, arguments, t5);
          } else
            e5 = a4.apply(this, arguments);
          return h2(this, e5);
        });
        function o4(e5) {
          var t5, r4;
          return function(e6, a4) {
            if (!(e6 instanceof a4))
              throw new TypeError("Cannot call a class as a function");
          }(this, o4), C2(m2(t5 = s3.call(this, e5)), "handlePreviousPage", function(e6) {
            var a4 = t5.state.selected;
            t5.handleClick(e6, null, a4 > 0 ? a4 - 1 : void 0, { isPrevious: true });
          }), C2(m2(t5), "handleNextPage", function(e6) {
            var a4 = t5.state.selected, r5 = t5.props.pageCount;
            t5.handleClick(e6, null, a4 < r5 - 1 ? a4 + 1 : void 0, { isNext: true });
          }), C2(m2(t5), "handlePageSelected", function(e6, a4) {
            if (t5.state.selected === e6)
              return t5.callActiveCallback(e6), void t5.handleClick(a4, null, void 0, { isActive: true });
            t5.handleClick(a4, null, e6);
          }), C2(m2(t5), "handlePageChange", function(e6) {
            t5.state.selected !== e6 && (t5.setState({ selected: e6 }), t5.callCallback(e6));
          }), C2(m2(t5), "getEventListener", function(e6) {
            return C2({}, t5.props.eventListener, e6);
          }), C2(m2(t5), "handleClick", function(e6, a4, r5) {
            var n4 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, i4 = n4.isPrevious, s4 = void 0 !== i4 && i4, o5 = n4.isNext, l3 = void 0 !== o5 && o5, c3 = n4.isBreak, p3 = void 0 !== c3 && c3, u3 = n4.isActive, g3 = void 0 !== u3 && u3;
            e6.preventDefault ? e6.preventDefault() : e6.returnValue = false;
            var d3 = t5.state.selected, f3 = t5.props.onClick, b3 = r5;
            if (f3) {
              var v3 = f3({ index: a4, selected: d3, nextSelectedPage: r5, event: e6, isPrevious: s4, isNext: l3, isBreak: p3, isActive: g3 });
              if (false === v3)
                return;
              Number.isInteger(v3) && (b3 = v3);
            }
            void 0 !== b3 && t5.handlePageChange(b3);
          }), C2(m2(t5), "handleBreakClick", function(e6, a4) {
            var r5 = t5.state.selected;
            t5.handleClick(a4, e6, r5 < e6 ? t5.getForwardJump() : t5.getBackwardJump(), { isBreak: true });
          }), C2(m2(t5), "callCallback", function(e6) {
            void 0 !== t5.props.onPageChange && "function" == typeof t5.props.onPageChange && t5.props.onPageChange({ selected: e6 });
          }), C2(m2(t5), "callActiveCallback", function(e6) {
            void 0 !== t5.props.onPageActive && "function" == typeof t5.props.onPageActive && t5.props.onPageActive({ selected: e6 });
          }), C2(m2(t5), "getElementPageRel", function(e6) {
            var a4 = t5.state.selected, r5 = t5.props, n4 = r5.nextPageRel, i4 = r5.prevPageRel, s4 = r5.selectedPageRel;
            return a4 - 1 === e6 ? i4 : a4 === e6 ? s4 : a4 + 1 === e6 ? n4 : void 0;
          }), C2(m2(t5), "pagination", function() {
            var e6 = [], r5 = t5.props, n4 = r5.pageRangeDisplayed, i4 = r5.pageCount, s4 = r5.marginPagesDisplayed, o5 = r5.breakLabel, l3 = r5.breakClassName, c3 = r5.breakLinkClassName, p3 = r5.breakAriaLabels, g3 = t5.state.selected;
            if (i4 <= n4)
              for (var d3 = 0; d3 < i4; d3++)
                e6.push(t5.getPageElement(d3));
            else {
              var f3 = n4 / 2, b3 = n4 - f3;
              g3 > i4 - n4 / 2 ? f3 = n4 - (b3 = i4 - g3) : g3 < n4 / 2 && (b3 = n4 - (f3 = g3));
              var v3, h3, m3 = function(e7) {
                return t5.getPageElement(e7);
              }, y3 = [];
              for (v3 = 0; v3 < i4; v3++) {
                var C3 = v3 + 1;
                if (C3 <= s4)
                  y3.push({ type: "page", index: v3, display: m3(v3) });
                else if (C3 > i4 - s4)
                  y3.push({ type: "page", index: v3, display: m3(v3) });
                else if (v3 >= g3 - f3 && v3 <= g3 + (0 === g3 && n4 > 1 ? b3 - 1 : b3))
                  y3.push({ type: "page", index: v3, display: m3(v3) });
                else if (o5 && y3.length > 0 && y3[y3.length - 1].display !== h3 && (n4 > 0 || s4 > 0)) {
                  var P3 = v3 < g3 ? p3.backward : p3.forward;
                  h3 = a3().createElement(u2, { key: v3, breakAriaLabel: P3, breakLabel: o5, breakClassName: l3, breakLinkClassName: c3, breakHandler: t5.handleBreakClick.bind(null, v3), getEventListener: t5.getEventListener }), y3.push({ type: "break", index: v3, display: h3 });
                }
              }
              y3.forEach(function(a4, t6) {
                var r6 = a4;
                "break" === a4.type && y3[t6 - 1] && "page" === y3[t6 - 1].type && y3[t6 + 1] && "page" === y3[t6 + 1].type && y3[t6 + 1].index - y3[t6 - 1].index <= 2 && (r6 = { type: "page", index: a4.index, display: m3(a4.index) }), e6.push(r6.display);
              });
            }
            return e6;
          }), void 0 !== e5.initialPage && void 0 !== e5.forcePage && console.warn("(react-paginate): Both initialPage (".concat(e5.initialPage, ") and forcePage (").concat(e5.forcePage, ") props are provided, which is discouraged.") + " Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"), r4 = e5.initialPage ? e5.initialPage : e5.forcePage ? e5.forcePage : 0, t5.state = { selected: r4 }, t5;
        }
        return t4 = o4, (r3 = [{ key: "componentDidMount", value: function() {
          var e5 = this.props, a4 = e5.initialPage, t5 = e5.disableInitialCallback, r4 = e5.extraAriaContext, n4 = e5.pageCount, i4 = e5.forcePage;
          void 0 === a4 || t5 || this.callCallback(a4), r4 && console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."), Number.isInteger(n4) || console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(n4, "). Did you forget a Math.ceil()?")), void 0 !== a4 && a4 > n4 - 1 && console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(a4, " > ").concat(n4 - 1, ").")), void 0 !== i4 && i4 > n4 - 1 && console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(i4, " > ").concat(n4 - 1, ")."));
        } }, { key: "componentDidUpdate", value: function(e5) {
          void 0 !== this.props.forcePage && this.props.forcePage !== e5.forcePage && (this.props.forcePage > this.props.pageCount - 1 && console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage, " > ").concat(this.props.pageCount - 1, ").")), this.setState({ selected: this.props.forcePage })), Number.isInteger(e5.pageCount) && !Number.isInteger(this.props.pageCount) && console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount, "). Did you forget a Math.ceil()?"));
        } }, { key: "getForwardJump", value: function() {
          var e5 = this.state.selected, a4 = this.props, t5 = a4.pageCount, r4 = e5 + a4.pageRangeDisplayed;
          return r4 >= t5 ? t5 - 1 : r4;
        } }, { key: "getBackwardJump", value: function() {
          var e5 = this.state.selected - this.props.pageRangeDisplayed;
          return e5 < 0 ? 0 : e5;
        } }, { key: "getElementHref", value: function(e5) {
          var a4 = this.props, t5 = a4.hrefBuilder, r4 = a4.pageCount, n4 = a4.hrefAllControls;
          if (t5)
            return n4 || e5 >= 0 && e5 < r4 ? t5(e5 + 1, r4, this.state.selected) : void 0;
        } }, { key: "ariaLabelBuilder", value: function(e5) {
          var a4 = e5 === this.state.selected;
          if (this.props.ariaLabelBuilder && e5 >= 0 && e5 < this.props.pageCount) {
            var t5 = this.props.ariaLabelBuilder(e5 + 1, a4);
            return this.props.extraAriaContext && !a4 && (t5 = t5 + " " + this.props.extraAriaContext), t5;
          }
        } }, { key: "getPageElement", value: function(e5) {
          var t5 = this.state.selected, r4 = this.props, n4 = r4.pageClassName, i4 = r4.pageLinkClassName, s4 = r4.activeClassName, o5 = r4.activeLinkClassName, c3 = r4.extraAriaContext, p3 = r4.pageLabelBuilder;
          return a3().createElement(l2, { key: e5, pageSelectedHandler: this.handlePageSelected.bind(null, e5), selected: t5 === e5, rel: this.getElementPageRel(e5), pageClassName: n4, pageLinkClassName: i4, activeClassName: s4, activeLinkClassName: o5, extraAriaContext: c3, href: this.getElementHref(e5), ariaLabel: this.ariaLabelBuilder(e5), page: e5 + 1, pageLabelBuilder: p3, getEventListener: this.getEventListener });
        } }, { key: "render", value: function() {
          var e5 = this.props.renderOnZeroPageCount;
          if (0 === this.props.pageCount && void 0 !== e5)
            return e5 ? e5(this.props) : e5;
          var t5 = this.props, r4 = t5.disabledClassName, n4 = t5.disabledLinkClassName, i4 = t5.pageCount, s4 = t5.className, o5 = t5.containerClassName, l3 = t5.previousLabel, c3 = t5.previousClassName, p3 = t5.previousLinkClassName, u3 = t5.previousAriaLabel, d3 = t5.prevRel, b3 = t5.nextLabel, v3 = t5.nextClassName, h3 = t5.nextLinkClassName, m3 = t5.nextAriaLabel, y3 = t5.nextRel, C3 = this.state.selected, P3 = 0 === C3, k3 = C3 === i4 - 1, x2 = "".concat(g2(c3)).concat(P3 ? " ".concat(g2(r4)) : ""), L2 = "".concat(g2(v3)).concat(k3 ? " ".concat(g2(r4)) : ""), N2 = "".concat(g2(p3)).concat(P3 ? " ".concat(g2(n4)) : ""), O2 = "".concat(g2(h3)).concat(k3 ? " ".concat(g2(n4)) : ""), R2 = P3 ? "true" : "false", E2 = k3 ? "true" : "false";
          return a3().createElement("ul", { className: s4 || o5, role: "navigation", "aria-label": "Pagination" }, a3().createElement("li", { className: x2 }, a3().createElement("a", f2({ className: N2, href: this.getElementHref(C3 - 1), tabIndex: P3 ? "-1" : "0", role: "button", onKeyPress: this.handlePreviousPage, "aria-disabled": R2, "aria-label": u3, rel: d3 }, this.getEventListener(this.handlePreviousPage)), l3)), this.pagination(), a3().createElement("li", { className: L2 }, a3().createElement("a", f2({ className: O2, href: this.getElementHref(C3 + 1), tabIndex: k3 ? "-1" : "0", role: "button", onKeyPress: this.handleNextPage, "aria-disabled": E2, "aria-label": m3, rel: y3 }, this.getEventListener(this.handleNextPage)), b3)));
        } }]) && b2(t4.prototype, r3), Object.defineProperty(t4, "prototype", { writable: false }), o4;
      }(e3.Component);
      C2(P2, "propTypes", { pageCount: i2().number.isRequired, pageRangeDisplayed: i2().number, marginPagesDisplayed: i2().number, previousLabel: i2().node, previousAriaLabel: i2().string, prevPageRel: i2().string, prevRel: i2().string, nextLabel: i2().node, nextAriaLabel: i2().string, nextPageRel: i2().string, nextRel: i2().string, breakLabel: i2().oneOfType([i2().string, i2().node]), breakAriaLabels: i2().shape({ forward: i2().string, backward: i2().string }), hrefBuilder: i2().func, hrefAllControls: i2().bool, onPageChange: i2().func, onPageActive: i2().func, onClick: i2().func, initialPage: i2().number, forcePage: i2().number, disableInitialCallback: i2().bool, containerClassName: i2().string, className: i2().string, pageClassName: i2().string, pageLinkClassName: i2().string, pageLabelBuilder: i2().func, activeClassName: i2().string, activeLinkClassName: i2().string, previousClassName: i2().string, nextClassName: i2().string, previousLinkClassName: i2().string, nextLinkClassName: i2().string, disabledClassName: i2().string, disabledLinkClassName: i2().string, breakClassName: i2().string, breakLinkClassName: i2().string, extraAriaContext: i2().string, ariaLabelBuilder: i2().func, eventListener: i2().string, renderOnZeroPageCount: i2().func, selectedPageRel: i2().string }), C2(P2, "defaultProps", { pageRangeDisplayed: 2, marginPagesDisplayed: 3, activeClassName: "selected", previousLabel: "Previous", previousClassName: "previous", previousAriaLabel: "Previous page", prevPageRel: "prev", prevRel: "prev", nextLabel: "Next", nextClassName: "next", nextAriaLabel: "Next page", nextPageRel: "next", nextRel: "next", breakLabel: "...", breakAriaLabels: { forward: "Jump forward", backward: "Jump backward" }, disabledClassName: "disabled", disableInitialCallback: false, pageLabelBuilder: function(e4) {
        return e4;
      }, eventListener: "onClick", renderOnZeroPageCount: void 0, selectedPageRel: "canonical", hrefAllControls: false });
      const k2 = P2;
    })(), n2;
  })());
})(reactPaginate);
const ReactPaginate = /* @__PURE__ */ getDefaultExportFromCjs(reactPaginateExports);
const CardLoading = () => {
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "relative flex-none px-2 py-2 bg-white border-2 rounded-lg lg:mb-2 lg:mr-2 h-60 w-44 lg:w-97 animate-pulse", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center object-cover object-center w-full h-5/12", children: /* @__PURE__ */ jsx("div", { className: "relative object-contain w-32 bg-gray-200 rounded-lg h-28 animate-pulse " }) }),
    /* @__PURE__ */ jsxs("div", { className: "w-full pt-2 text-xs font-semibold text-justify h-6/12", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center w-full h-8", children: /* @__PURE__ */ jsx("div", { className: "w-full h-6 bg-gray-200 animate-pulse" }) }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-row items-center justify-between w-auto h-7 ", children: /* @__PURE__ */ jsx("p", { className: "w-1/2 h-5 leading-relaxed bg-gray-200 animate-pulse" }) }),
      /* @__PURE__ */ jsx("div", { className: "relative w-full h-[2.4rem] py-2 mt-1 bg-yata-mid-light rounded-md animate-pulse" })
    ] })
  ] }) });
};
const filterOptions = [
  { name: "hot", laptopName: "熱門", mobileName: "熱門", img: "" },
  { name: "new", laptopName: "最新", mobileName: "最新", img: "" },
  {
    name: "psp_desc",
    laptopName: "價格",
    mobileName: "價錢高至低",
    img: "/common/arrow/down-arrow.png"
  },
  {
    name: "psp_asc",
    laptopName: "價格",
    mobileName: "價錢低至高",
    img: "/common/arrow/up-arrow.png"
  }
];
const ContentList = () => {
  const router2 = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const imgUrl = useAppSelector(selectImgUrl);
  const windowType = useAppSelector(selectWindowSize);
  const categoryList = useAppSelector(selectCategoryList);
  const filterList = useAppSelector(selectFilterList);
  const isCardLoading = useAppSelector(selectIsCardLoading);
  const keepFilter = useAppSelector((state) => state.control.isKeepFilter);
  const [openModal, setOpenModal] = reactExports.useState(false);
  const [filterText, setFilterText] = reactExports.useState("");
  const [pathLevel, setPathLevel] = reactExports.useState(0);
  const [totalCount, setTotalCount] = reactExports.useState(0);
  const [deptList, setDeptList] = reactExports.useState([]);
  const [segmentList, setSegmentList] = reactExports.useState([]);
  const [typeList, setTypeList] = reactExports.useState([]);
  const [query, setQuery] = reactExports.useState({
    category: { path: void 0, name: void 0, id: void 0 },
    dept: { path: void 0, name: void 0, id: void 0 },
    segment: { path: void 0, name: void 0, id: void 0 },
    type: { path: void 0, name: void 0, id: void 0 }
  });
  const [banners, setBanners] = reactExports.useState([]);
  const [catFilterList, setCatFilterList] = reactExports.useState(null);
  const [productCard, setProductCards] = reactExports.useState(null);
  const cardRef = reactExports.useRef(null);
  const containerRef = reactExports.useRef(null);
  useWindowDimensions();
  const [currentItems, setCurrentItems] = reactExports.useState(0);
  const [itemsPerPage, setItemsPerPage] = reactExports.useState(0);
  const [pageCount, setPageCount] = reactExports.useState(0);
  const [onPage, setOnPage] = reactExports.useState(false);
  const [categoryId, setCategoryId] = reactExports.useState(0);
  const onLaptop = windowType === "laptop";
  reactExports.useLayoutEffect(() => {
    const searchPost = async () => {
      dispatch(onCardLoading());
      const result = await dispatch(getProductListApi({ ...filterList }));
      if (result.payload.items) {
        setCurrentItems(result.payload.current_page - 1);
        setItemsPerPage(result.payload.current_page_count);
        setPageCount(result.payload.total_page);
        setTotalCount(result.payload.total_count);
        setProductCards(result.payload.items);
      }
      setTimeout(() => {
        dispatch(onCardLoaded());
      }, 700);
    };
    if (keepFilter || onPage)
      searchPost();
  }, [filterList, keepFilter]);
  const handlePageClick = async (event) => {
    dispatch(onCardLoading());
    if (typeof window != "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    const searchParam = {
      categories: [...filterList.categories],
      brands: [...filterList.brands],
      countries: [...filterList.countries],
      subCategories: [...filterList.subCategories],
      sort: "",
      currentPage: event.selected + 1
    };
    const result = await dispatch(getProductListApi(searchParam));
    if (result.payload.items) {
      setProductCards(result.payload.items);
    } else {
      setProductCards([]);
    }
    setTimeout(() => {
      dispatch(onCardLoaded());
    }, 1e3);
  };
  reactExports.useEffect(() => {
    const pathList = location.pathname.split("?")[0].split("/");
    pathList.splice(0, 2);
    setPathLevel(pathList.length);
    if (categoryList.length > 0) {
      dispatch(onLoading());
      dispatch(onCardLoading());
      const catPath2 = createPathList(
        categoryList,
        pathList,
        setDeptList,
        setSegmentList,
        setTypeList
      );
      setQuery(catPath2);
      dispatch(setCategoryPath(catPath2));
      const getFilterItems = async () => {
        const pathArr = [
          catPath2.category.id,
          catPath2.dept.id,
          catPath2.segment.id,
          catPath2.type.id
        ].filter((arr) => arr != void 0);
        if (pathArr.length > 1) {
          const result = await dispatch(
            getCategoryById(pathArr[pathArr.length - 1] ?? 0)
          );
          if (result.payload) {
            setCatFilterList(result.payload);
          }
        }
        dispatch(onLoaded());
        setCategoryId(pathArr[pathArr.length - 1] ?? 0);
        const searchParam = {
          categories: [pathArr[pathArr.length - 1] ?? 0],
          brands: [],
          //[...filterList.brands],
          countries: [],
          //[...filterList.countries],
          subCategories: [],
          sort: "",
          currentPage: 0
        };
        if (!keepFilter) {
          dispatch(resetFilterList());
          dispatch(setFilteringCategoriesId(pathArr[pathArr.length - 1] ?? 0));
          const result = await dispatch(getProductListApi(searchParam));
          if (result.payload.items) {
            setCurrentItems(result.payload.current_page - 1);
            setItemsPerPage(result.payload.current_page_count);
            setPageCount(result.payload.total_page);
            setTotalCount(result.payload.total_count);
            setProductCards(result.payload.items);
          } else {
            setTotalCount(0);
            setProductCards([]);
          }
        }
        setOnPage(true);
        dispatch(setKeepFilter(false));
        setTimeout(() => {
          dispatch(onCardLoaded());
        }, 700);
      };
      getFilterItems();
    }
    const getBanners = async () => {
      if (pathList[0] && !pathList[1]) {
        const otherBanners = await getBannerImageApi(pathList[0]);
        setBanners(otherBanners);
      }
    };
    getBanners();
  }, [router2, categoryList]);
  console.log("cat filter info in content list: ", catFilterList);
  console.log("product card list", productCard);
  console.log("filter list in redux: ", filterList);
  console.log("keep filter: ", keepFilter, onPage);
  console.log("category id: ", categoryId);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "h-auto", children: [
    /* @__PURE__ */ jsx(CategoryTitle, { query }),
    /* @__PURE__ */ jsxs("div", { className: "w-full h-auto px-1 mb-4 transition-all duration-300 ease-in-out rangeLg:px-20 rangeXl:px-24 2xl:px-48 lg:bg-grey-light lg:mb-6", children: [
      pathLevel == 1 && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 mx-auto rangeXl:grid-cols-4 2xl:grid-cols-5", children: deptList.length > 0 && deptList.map((dept, idx) => /* @__PURE__ */ jsx(
        Link,
        {
          to: `/category/${dept.url_path}`,
          children: /* @__PURE__ */ jsxs("div", { className: "mx-1 my-1 p-1 lg:m-0 border-[1px] lg:h-20 lg:p-4 lg:px-5 bg-white h-16 border-[#E5E5E5] cursor-pointer group rounded-md lg:rounded-none hover:bg-yata-mid-light hover:border-yata-deep", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center w-full", children: [
              /* @__PURE__ */ jsx("div", { className: "w-4/5 overflow-scroll text-xs font-bold whitespace-pre-wrap lg:mr-4 scrollbar-hide lg:overflow-hidden lg:w-auto lg:tracking-widest lg:text-base", children: dept.name }),
              /* @__PURE__ */ jsx("div", { className: "w-1/5 lg:w-auto border-[1px] px-1 lg:px-2 lg:min-w-[2.25rem] flex justify-center font-semibold lg:font-normal rounded-sm border-[#E5E5E5] text-xs", children: dept.product_count })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-sm lg:tracking-wider" })
          ] })
        },
        `dept-tab-laptop-${idx}`
      )) }),
      onLaptop && /* @__PURE__ */ jsx(Fragment, { children: pathLevel > 1 && catFilterList && catFilterList.length > 0 && /* @__PURE__ */ jsx(
        FilterMenu,
        {
          level: pathLevel,
          query,
          router: router2,
          segmentList,
          typeList,
          catFilterInfo: catFilterList[0]
        }
      ) })
    ] }),
    categoryList.length > 0 && pathLevel > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
      pathLevel == 1 && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "w-full px-2 mb-4 rangeLg:px-20 rangeXl:px-24 2xl:px-48 lg:mb-8", children: /* @__PURE__ */ jsx(LowerBanner, { images: banners }) }) }),
      onLaptop && pathLevel > 1 && catFilterList && catFilterList.length > 0 && /* @__PURE__ */ jsx(FilteredResults, { catFilterInfo: catFilterList[0] }),
      /* @__PURE__ */ jsx("div", { className: "w-full h-auto mb-4 transition-all ease-in-out rangeLg:px-20 rangeXl:px-24 2xl:px-48", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16 px-3 mb-2 text-lg font-bold", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `transition-all ease-out duration-300 ${isCardLoading || totalCount == 0 ? "opacity-0" : "opacity-100"}`,
            children: [
              totalCount,
              " 件產品"
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative flex lg:hidden", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "box-border flex items-center justify-center w-8 h-8 mr-2 border-[1px] rounded-md border-yata-brown",
              onClick: () => {
                dispatch(setKeepFilter(true));
                router2({ pathname: "/category/filter", search: location.pathname });
              },
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: imgUrl + "/mobile/more-detail.svg",
                  className: "h-2 w-4"
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "box-border flex items-center justify-center w-8 h-8 transition-all duration-300 ease-in-out border rounded-md border-yata-brown",
              style: { backgroundColor: openModal ? "#82A90E" : "#FFF" },
              onClick: () => {
                setOpenModal(!openModal);
              },
              children: /* @__PURE__ */ jsx(UpDownSvg, { openModal })
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute right-0 z-20 w-40 p-1 transition-all duration-300 ease-in-out bg-white border rounded-md top-8 border-yata-brown",
              style: openModal ? {
                visibility: "visible",
                opacity: 1
              } : {
                visibility: "hidden",
                opacity: 0,
                pointerEvents: "none"
              },
              children: filterOptions.map((option, idx) => /* @__PURE__ */ jsx(
                FilterButton,
                {
                  setOpenModal,
                  setFilterText,
                  filterText,
                  setProductCards,
                  name: option.name,
                  buttonText: option.mobileName,
                  buttonImg: imgUrl + option.img
                },
                `filter-option-mobile-${idx}`
              ))
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `hidden space-x-4 lg:flex transition-opacity duration-300 ease-in-out ${isCardLoading || totalCount == 0 ? "opacity-0" : "opacity-100"} `,
            children: filterOptions.map((option, idx) => /* @__PURE__ */ jsx(
              FilterButton,
              {
                setFilterText,
                filterText,
                setProductCards,
                name: option.name,
                buttonText: option.laptopName,
                buttonImg: imgUrl + option.img
              },
              `filter-option-laptop-${idx}`
            ))
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "w-full h-auto mb-12 transition-all ease-in-out underXs:px-4 rangeXs:px-6 rangeSm:px-8 rangeMd:px-6 rangeLg:px-20 rangeXl:px-24 2xl:px-48", children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex flex-wrap items-start justify-center w-full transition-all duration-200 ease-in-out lg:justify-start",
          ref: containerRef,
          children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "grid flex-wrap justify-center w-full grid-cols-2 gap-1 transition-all duration-200 ease-in-out lg:flex underSm:flex sm:justify-start rangeMd:grid-cols-4 underXs:grid-cols-1 rangeSm:grid-cols-3",
                children: [
                  (isCardLoading || productCard == null) && [...Array(20)].map((_2, idx) => /* @__PURE__ */ jsx(reactExports.Fragment, { children: /* @__PURE__ */ jsx(CardLoading, {}) }, `skeleton-card-${idx}`)),
                  productCard && productCard.length > 0 && productCard.map((card, idx) => /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "flex justify-center transition-all duration-500 ease-in-out " + (isCardLoading ? "opacity-0 pointer-events-none " : "opacity-100"),
                      children: /* @__PURE__ */ jsx(
                        ItemCard,
                        {
                          detail: card,
                          cardRef,
                          categoryId
                        }
                      )
                    },
                    `product-card-${card.plu}-${idx}`
                  ))
                ]
              }
            ),
            productCard && productCard.length == 0 && /* @__PURE__ */ jsx(
              "div",
              {
                className: "flex items-center justify-center w-full px-6 text-lg font-bold text-center transition-all duration-300 ease-in-out " + (isCardLoading ? "h-0 invisible opacity-0" : "h-60 lg:h-40 visible opacity-100"),
                children: "不好意思，我們未能找到符合你篩選的結果，請重新再試。"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "pagination-container", children: productCard && productCard.length > 0 && /* @__PURE__ */ jsx(
              ReactPaginate,
              {
                breakLabel: "...",
                nextLabel: " >",
                onPageChange: handlePageClick,
                pageRangeDisplayed: 3,
                pageCount,
                previousLabel: "< ",
                forcePage: currentItems,
                marginPagesDisplayed: 1,
                containerClassName: "pagination",
                activeClassName: "active",
                previousClassName: "pagination-item",
                nextClassName: "pagination-item",
                activeLinkClassName: "active",
                pageLinkClassName: "pagination-item"
              }
            ) })
          ]
        }
      ) })
    ] })
  ] }) });
};
const Category = () => {
  return /* @__PURE__ */ jsx(ContentList, {});
};
const catPath = {
  path: `/ViewYata-React/category/:category`,
  component: Category,
  department: {
    path: ":department",
    segment: {
      path: ":segment",
      type: {
        path: ":type",
        component: Category
      }
    }
  }
};
const prod = {
  title: "商品",
  list: [
    { content: "商品", path: "/ViewYata-React/product/:id", component: ProductDetail }
  ]
};
const homeList = [
  { content: "首頁", path: "/ViewYata-React/", component: Home },
  { content: "登陸", path: `${"/ViewYata-React/"}account`, component: Login },
  { content: "店舖位置", path: `${"/ViewYata-React/"}store-locations`, component: StoreLocations },
  { content: "聯絡我們", path: `${"/ViewYata-React/"}contact-us`, component: ContactUs }
];
const routerList = () => {
  let routers = [];
  routers = routers.concat(homeList, shop.list, tc.list, faq.list, prod.list);
  return routers;
};
const shopIntro = shop;
const tcIntro = tc;
const faqRoute = faq;
const categoriesList = catPath;
const router = routerList();
const DownloadApp = () => {
  useAppSelector(selectWindowSize);
  const imgUrl = useAppSelector(selectImgUrl);
  return /* @__PURE__ */ jsxs("div", { className: "mb-3 w-full lg:w-80 border-b-[0.5px] lg:border-b-0", children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-3 text-lg font-bold lg:block", children: "立即下載 YATA-Fans" }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center lg:justify-start", children: [
      /* @__PURE__ */ jsx("div", { className: "items-center justify-center hidden mr-3 overflow-hidden bg-white lg:flex w-28 h-28 rounded-xl", children: /* @__PURE__ */ jsx("div", { className: "relative object-contain w-28 aspect-square", children: /* @__PURE__ */ jsx("img", { src: imgUrl + "/homepage/footer/qr_code.jpeg", alt: "QR Code", className: "object-contain" }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center w-4/5 mb-4 space-y-3 under2xs:flex-col lg:w-40 lg:mr-3 lg:block", children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "https://apps.apple.com/hk/app/yata-fans/id1435778377",
            children: /* @__PURE__ */ jsx("div", { className: "relative h-16 lg:h-auto lg:w-full cursor-pointer aspect-[640/221]", children: /* @__PURE__ */ jsx("img", { src: imgUrl + "/homepage/footer/download_ios.png", alt: "download_ios", className: "object-contain" }) })
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "https://play.google.com/store/apps/details?id=hk.yata",
            children: /* @__PURE__ */ jsx("div", { className: "relative h-16 lg:h-auto lg:w-full cursor-pointer aspect-[640/189] lg:mt-2", children: /* @__PURE__ */ jsx("img", { src: imgUrl + "/homepage/footer/download_android.png", alt: "download_ios", className: "object-cover mb-4 transition duration-300 ease-in-out" }) })
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "https://appgallery.huawei.com/#/app/C102441155",
            children: /* @__PURE__ */ jsx("div", { className: "relative h-16 lg:h-auto lg:w-full cursor-pointer aspect-[640/189] lg:mt-2", children: /* @__PURE__ */ jsx("img", { src: imgUrl + "/homepage/footer/download_huawei.png", alt: "download_ios", className: "object-cover mb-4 transition duration-300 ease-in-out" }) })
          }
        )
      ] })
    ] })
  ] });
};
const SocialMedia = () => {
  const imgUrl = useAppSelector(selectImgUrl);
  return /* @__PURE__ */ jsxs("div", { className: "w-full mb-4 lg:mb-3 lg:w-52 ", children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-3 text-lg font-bold lg:block", children: "關注我們" }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center mb-4 space-x-3 lg:justify-start", children: [
      /* @__PURE__ */ jsx(Link, { to: "https://facebook.com/yatahk", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-12 h-12 overflow-hidden bg-white cursor-pointer rounded-xl", children: /* @__PURE__ */ jsx("div", { className: "relative object-contain w-full aspect-[56/57]", children: /* @__PURE__ */ jsx("img", { src: imgUrl + "/homepage/footer/FB.svg", alt: "Facebook", className: "object-contain" }) }) }) }),
      /* @__PURE__ */ jsx(Link, { to: "https://www.instagram.com/yatahk/", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-12 h-12 overflow-hidden bg-white cursor-pointer rounded-xl", children: /* @__PURE__ */ jsx("div", { className: "relative object-contain w-12 aspect-square", children: /* @__PURE__ */ jsx("img", { src: imgUrl + "/homepage/footer/IG.svg", alt: "Instagram", className: "object-contain" }) }) }) }),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "https://www.youtube.com/user/YATADepartmentStore",
          children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-12 h-12 overflow-hidden bg-white cursor-pointer rounded-xl", children: /* @__PURE__ */ jsx("div", { className: "relative object-contain w-12 aspect-[11/8]", children: /* @__PURE__ */ jsx("img", { src: imgUrl + "/homepage/footer/youtube.svg", alt: "Youtube", className: "object-cover w-12 h-12 transition duration-300 ease-in-out" }) }) })
        }
      )
    ] })
  ] });
};
const aboutYATA = {
  title: "關於一田",
  list: [
    { content: "一田網頁", path: "https://www.yata.hk/" },
    { content: "YATA-Fans", path: "https://www.yata.hk/tch/yata-fans/" },
    {
      content: "一田信用卡",
      path: "https://www.yata.hk/tch/yata-creditcard/"
    },
    { content: "一田BB會", path: "https://www.yata.hk/tch/yata-bbclub/" }
  ]
};
const Footer = () => {
  const windowType = useAppSelector(selectWindowSize);
  return /* @__PURE__ */ jsx(
    "footer",
    {
      className: `${"bottom-0 w-full p-4 px-6 text-white lg:py-8 lg:px-36 2xl:px-40 min-h-60 bg-yata"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-between lg:items-start lg:flex-row", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-40 mb-4 border-b-[0.5px] lg:border-b-0", children: [
          /* @__PURE__ */ jsx("div", { className: "flex justify-center text-lg font-bold lg:justify-start lg:mb-3", children: aboutYATA.title }),
          /* @__PURE__ */ jsx("ul", { className: "flex flex-wrap justify-center my-3 list-none lg:block", children: aboutYATA.list.map((item, idx) => /* @__PURE__ */ jsx(
            "li",
            {
              className: "px-2 my-[0.125rem] text-sm lg:my-2 lg:px-0",
              children: /* @__PURE__ */ jsx("a", { href: item.path, children: item.content })
            },
            `${idx}-${item.content}`
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-40 mb-4 border-b-[0.5px] lg:border-b-0", children: [
          /* @__PURE__ */ jsx("div", { className: "flex justify-center text-lg font-bold lg:mb-3 lg:justify-start", children: shopIntro.title }),
          /* @__PURE__ */ jsx("ul", { className: "flex flex-wrap items-center justify-center my-3 list-none lg:block", children: shopIntro.list.map(({ path, content }, idx) => /* @__PURE__ */ jsx("li", { className: "px-2 my-[0.125rem] text-sm lg:my-2 lg:px-0", children: /* @__PURE__ */ jsx(Link, { to: path, children: content }) }, `${idx}-${content}`)) })
        ] }),
        windowType === "mobile" ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(DownloadApp, {}),
          /* @__PURE__ */ jsx(SocialMedia, {})
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(SocialMedia, {}),
          /* @__PURE__ */ jsx(DownloadApp, {})
        ] })
      ] })
    }
  );
};
var WindowScreen = /* @__PURE__ */ ((WindowScreen2) => {
  WindowScreen2["laptop"] = "laptop";
  WindowScreen2["mobile"] = "mobile";
  return WindowScreen2;
})(WindowScreen || {});
const OtherButtons = ({ window: window2 }) => {
  useNavigate();
  const location = useLocation();
  const imgUrl = useAppSelector(selectImgUrl);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const isAdmin = useAppSelector(selectIsAdmin);
  const onLaptop = window2 === "laptop";
  const onMobile = window2 === "mobile";
  const atPaymentPage = location.pathname === "/shopping-cart/confirmation";
  const atAdminLoginPage = location.pathname === "/admin/login";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `items-center justify-center flex-nowrap overflow-hidden lg:ml-6 -ml-1 transition-all ease-in-out duration-300 
        ${onLaptop && "hidden lg:flex lg:flex-row " + (atPaymentPage || atAdminLoginPage || isAdmin ? `${atPaymentPage || atAdminLoginPage ? "w-0 " : "w-80 "} invisible opacity-0 ` : "w-80 visible opacity-100 ")}
        ${onMobile && "flex flex-col w-28 "}`,
      children: [
        /* @__PURE__ */ jsx(Link, { to: "/ViewYata-React/store-locations", children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-center justify-center mb-1 lg:mb-0 lg:mx-4 md:mx-2 group " + (isLoading && "pointer-events-none"),
            onClick: () => {
              dispatch(closeDrawer());
            },
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: onMobile ? imgUrl + "/mobile/location.svg" : imgUrl + "/homepage/navbar/store_location.svg",
                  alt: "store_location",
                  className: "object-contain w-4 h-4"
                }
              ),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: `ml-1 transition duration-300 ease-in-out cursor-pointer min-w-fit 
              ${onLaptop && "text-sm group-hover:text-yata group-hover:font-semibold"}`,
                  children: "店舖位置"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(Link, { to: "/ViewYata-React/contact-us", children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-center justify-center mb-1 lg:mb-0 lg:mx-4 md:mx-2 group" + (isLoading && "pointer-events-none"),
            onClick: () => {
              dispatch(closeDrawer());
            },
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: onMobile ? imgUrl + "/mobile/contact_us.svg" : imgUrl + "/homepage/navbar/contact_us.svg",
                  alt: "contact_us",
                  className: "object-contain w-4 h-4"
                }
              ),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: `ml-1 transition duration-300 ease-in-out cursor-pointer min-w-fit
              ${onLaptop && "text-sm group-hover:text-yata group-hover:font-semibold"}`,
                  children: "聯絡我們"
                }
              )
            ]
          }
        ) })
      ]
    }
  );
};
const SearchBar = ({ window: window2 }) => {
  const router2 = useNavigate();
  const location = useLocation();
  const imgUrl = useAppSelector(selectImgUrl);
  const dispatch = useAppDispatch();
  const isAdmin = useAppSelector(selectIsAdmin);
  const [searchName, setSearchName] = reactExports.useState("");
  const onMobile = window2 === "mobile";
  const onLaptop = window2 === "laptop";
  const atPaymentPage = location.pathname === "/shopping-cart/confirmation";
  const atAdminLoginPage = location.pathname === "/admin/login";
  const handleClick = async () => {
    if (searchName !== "") {
      router2({ pathname: "/search", search: searchName });
      setSearchName("");
      if (onMobile) {
        dispatch(closeDrawer());
      }
    }
  };
  const handleKeydown = async (data2) => {
    if (data2.key === "Enter" && searchName !== "") {
      router2({ pathname: "/search", search: searchName });
      setSearchName("");
      if (onMobile) {
        dispatch(closeDrawer());
      }
    }
  };
  const t2 = useSelector(selectTranslations);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `flex transition-all duration-300 ease-in-out ${onMobile ? "w-full p-2 pt-3 z-20" : atPaymentPage || atAdminLoginPage || isAdmin ? `${atPaymentPage || atAdminLoginPage ? "w-0 " : "w-80 "} invisible opacity-0 ` : "w-80 visible opacity-100 "}`,
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: `items-center h-9    
          ${onMobile && "w-full flex rounded-md overflow-hidden pr-1 bg-white shadow-md"}
          ${onLaptop && "hidden lg:flex lg:w-full justify-between rounded-full bg-grey-input"}`,
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-1/12 h-full", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: imgUrl + "/homepage/navbar/search.svg",
                alt: "search",
                className: "object-contain w-4 h-4"
              }
            ) }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                className: `h-full w-11/12 lg:w-9/12 outline-0 caret-[#B3A49A] text-[#B3A49A] placeholder:text-[#B3A49A] placeholder:text-sm
            ${onMobile && "bg-white"}
            ${onLaptop && "bg-grey-input"}`,
                placeholder: t2 == null ? void 0 : t2.placeholders,
                value: searchName,
                onKeyDown: handleKeydown,
                onChange: (e2) => setSearchName(e2.target.value)
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: "items-center justify-center hidden w-2/12 h-full text-white transition duration-300 ease-in-out rounded-full lg:flex bg-yata-deep hover:bg-yata",
                onClick: handleClick,
                onKeyDown: handleKeydown,
                children: t2 == null ? void 0 : t2.btn
              }
            )
          ]
        }
      )
    }
  );
};
const ShoppingCartButton = ({ window: window2 }) => {
  const router2 = useNavigate();
  const location = useLocation();
  const imgUrl = useAppSelector(selectImgUrl);
  useMsal();
  const shoppingCartItem = useAppSelector(
    (state) => state.shopping.cartItemQty
  );
  useAppSelector(selectIsAuthenticated);
  const onMobile = window2 === "mobile";
  const atPaymentPage = location.pathname === "/shopping-cart/confirmation";
  const adminLoginPage = location.pathname === "/admin/login";
  const adminCustomerLoginPage = location.pathname === "/admin/login-member";
  const adminPickUpPage = location.pathname === "/admin/pickup/[id]";
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "relative w-16 lg:mx-1 lg:w-auto lg:min-w-fit  " + (atPaymentPage || adminLoginPage || adminCustomerLoginPage || adminPickUpPage ? "hidden lg:h-0" : "block lg:h-3/5"),
      children: /* @__PURE__ */ jsx(
        "button",
        {
          className: `flex items-center h-full relative justify-center transition-colors duration-300 ease-in-out rounded-lg group
        ${onMobile ? "bg-white mr-1 pr-1" : "bg-yata-deep hover:bg-yata p-2 pr-3 "}
        `,
          onClick: () => {
            router2(`${"/ViewYata-React/"}account`);
          },
          children: /* @__PURE__ */ jsx(Link, { to: `${"/ViewYata-React/"}account`, children: /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("div", { className: "relative flex items-center object-contain lg:w-5 w-8 aspect-[14/13]", children: /* @__PURE__ */ jsx("img", { src: onMobile ? imgUrl + "/mobile/cart.svg" : imgUrl + `/homepage/navbar/cart.svg`, alt: "shopping-cart", className: "transition duration-300 ease-in-out w-10 h-9" }) }),
            shoppingCartItem > 0 && /* @__PURE__ */ jsx("div", { className: "absolute right-0 flex items-center justify-center w-4 h-4 overflow-hidden bg-red-500 rounded-full lg:w-5 lg:h-5 lg:-top-2 lg:-right-2 -top-1", children: /* @__PURE__ */ jsxs("span", { className: "text-xs text-white", children: [
              shoppingCartItem,
              " "
            ] }) })
          ] }) })
        }
      )
    }
  );
};
const MoreButton = () => {
  const [moreModal, setMoreModal] = reactExports.useState(false);
  const isLoading = useAppSelector(selectIsLoading);
  const imgUrl = useAppSelector(selectImgUrl);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    moreModal && /* @__PURE__ */ jsx(
      "button",
      {
        disabled: isLoading,
        onClick: () => {
          setMoreModal(false);
        },
        className: "fixed inset-0 w-full h-full"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative w-10 mx-1 lg:hidden", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "flex flex-col items-center justify-center w-full h-full p-1",
          onClick: () => setMoreModal(!moreModal),
          children: [
            /* @__PURE__ */ jsx("div", { className: "relative w-8 h-8 lg:w-4 lg:h-4", children: /* @__PURE__ */ jsx("img", { src: imgUrl + "/mobile/more.svg", className: "object-contain" }) }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-white cursor-pointer", children: "更多" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute right-0 w-32 bg-white border-[1px] rounded-md p-2 top-16 border-yata-brown transition-all ease-in-out duration-300 
            ${moreModal ? "opacity-100 visible" : " invisible opacity-0 pointer-events-none -z-10"}`,
          children: /* @__PURE__ */ jsx(OtherButtons, { window: WindowScreen.mobile })
        }
      )
    ] })
  ] });
};
const CaretDownSvg = (props) => {
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", ...props, children: /* @__PURE__ */ jsx("path", { d: "M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z" }) });
};
const NavBarButtons$1 = ({
  activeDept = null,
  setActiveDept = () => null,
  over = null,
  setOver = () => null
}) => {
  const dispatch = useAppDispatch();
  const router2 = useNavigate();
  useLocation();
  const imgUrl = useAppSelector(selectImgUrl);
  const windowSize = useAppSelector(selectWindowSize);
  const categoryList = useAppSelector((state) => state.config.categoryList);
  useAppSelector(selectIsAdmin);
  const isLoading = useAppSelector(selectIsLoading);
  const onLaptop = windowSize === "laptop";
  const onMobile = windowSize === "mobile";
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center w-1/4 h-full lg:w-auto lg:flex-row lg:p-0", children: categoryList && categoryList.length > 0 && categoryList.map((category, idx) => /* @__PURE__ */ jsxs(
    "button",
    {
      disabled: isLoading,
      className: `
                  flex justify-center text-left lg:truncate my-[2px] lg:w-28 min-w-fit items-center md:mx-0 under2xs:p-[4px] p-2 lg:h-3/5 rounded-lg lg:hover:bg-white group transition-colors duration-300 ease-in-out 
                  ${activeDept === idx ? "bg-white shadow-md" : ""}
                `,
      onClick: () => {
        router2(`/category/${category.url_path}`);
        if (onMobile)
          dispatch(closeDrawer());
      },
      onMouseEnter: () => {
        setOver(idx);
        setActiveDept(idx);
      },
      onMouseLeave: () => {
        setOver(null);
      },
      children: [
        onLaptop && /* @__PURE__ */ jsx("div", { className: "relative object-contain w-4 h-4 ", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: imgUrl + `/homepage/navbar/categories/${category.url_key}/${over === idx || activeDept === idx ? "selected.svg" : "default.png"}`,
            className: "transition duration-300 ease-in-out",
            alt: category.url_key
          }
        ) }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `
                  mx-1 font-extrabold under2xs:font-semibold under2xs:text-sm lg:font-normal lg:text-sm cursor-pointer lg:group-hover:text-yata lg:group-hover:font-semibold transition-colors duration-300 ease-in-out
                  ${activeDept === idx ? "text-yata" : "lg:text-white"}
              `,
            children: category.name
          }
        ),
        onLaptop && /* @__PURE__ */ jsx(
          CaretDownSvg,
          {
            className: "transition duration-300 ease-in-out",
            fill: over === idx || activeDept === idx ? "#A6CE39" : "#FFF",
            width: 10,
            height: 10
          }
        )
      ]
    },
    onMobile ? `navbar-btns-mobile-${idx}` : `navbar-btns-laptop-${idx}`
  )) });
};
const NavBarButtons$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: NavBarButtons$1
}, Symbol.toStringTag, { value: "Module" }));
const DropDownList = ({
  activeDept,
  activeSegment,
  activeType,
  setActiveSegment,
  setActiveDept,
  setActiveType
}) => {
  var _a, _b, _c;
  const router2 = useNavigate();
  useLocation();
  const imgUrl = useAppSelector(selectImgUrl);
  const dispatch = useAppDispatch();
  const windowSize = useAppSelector(selectWindowSize);
  const categoryList = useAppSelector(selectCategoryList);
  const [listHeight, setListHeight] = reactExports.useState(0);
  const dropdownRef = reactExports.useRef(null);
  const onLaptop = windowSize === "laptop";
  const onMobile = windowSize === "mobile";
  const toggleModalClose = () => {
    setActiveSegment(0);
    setActiveDept(null);
    setActiveType(null);
  };
  reactExports.useEffect(() => {
    if (dropdownRef.current) {
      setListHeight(dropdownRef.current.scrollHeight);
    }
  }, [dropdownRef, activeType, activeSegment]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "w-3/4 lg:absolute lg:left-0 lg:top-14",
      onMouseLeave: () => {
        setActiveSegment(0);
        setActiveType(null);
      },
      onClick: onLaptop ? toggleModalClose : () => {
      },
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: `
          lg:w-[48rem] relative lg:bg-yata-medium rounded-b-xl rangeLg:left-8 rangeXl:left-24 2xl:left-40 transition-all ease-in-out duration-500 scrollbar-hide flex flex-col lg:flex-row drop-shadow-md 
          ${onLaptop && activeDept !== null ? "lg:opacity-100" : "lg:opacity-0 lg:-z-10"}
        `,
          style: {
            minHeight: activeDept !== null ? onLaptop ? categoryList[activeDept].children ? `${categoryList[activeDept].children.length * 4}vh` : "auto" : "auto" : onLaptop ? "2px" : "auto",
            height: activeDept !== null ? onLaptop ? `56vh` : "auto" : onLaptop ? "2px" : "auto"
          },
          children: [
            onLaptop && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "w-2/6 pt-8 pl-6 space-y-4 overflow-scroll transition-all duration-300 ease-in-out scrollbar-hide",
                  style: {
                    height: activeDept !== null ? "auto" : "2px",
                    visibility: activeDept !== null ? "visible" : "hidden"
                  },
                  children: activeDept !== null && categoryList[activeDept].children && categoryList[activeDept].children.length > 0 && categoryList[activeDept].children.map((dept, idx) => /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: `py-1 pl-4 rounded-l-full cursor-pointer flex group justify-between transition-all ease-in-out duration-200 ${activeSegment === idx ? "bg-yata-mid-light" : ""} `,
                      onMouseOver: () => {
                        setActiveSegment(idx);
                        setActiveType(null);
                      },
                      onClick: () => {
                        router2(`${"/ViewYata-React/"}account`);
                        router2(`${"/ViewYata-React/"}category/${dept.url_path}`);
                        toggleModalClose();
                      },
                      children: [
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: `cursor-pointer ${activeSegment === idx ? "text-yata" : "text-white"}`,
                            children: dept.name
                          }
                        ),
                        /* @__PURE__ */ jsx("div", { className: "flex items-center pr-3", children: /* @__PURE__ */ jsx(
                          ChevronRightSvg,
                          {
                            width: 14,
                            height: 14,
                            fill: activeSegment === idx ? "#A6CE39" : "#FFF"
                          }
                        ) })
                      ]
                    },
                    `${idx}-${dept.name}-laptop`
                  ))
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "relative flex flex-col items-start w-2/6 pb-12 pl-6 overflow-y-scroll bg-yata-mid-light scrollbar-hide min-h-80 pt-7",
                  style: {
                    visibility: activeDept !== null ? "visible" : "hidden"
                  },
                  children: activeSegment !== null && activeDept !== null && /* @__PURE__ */ jsxs(Fragment, { children: [
                    ((_a = categoryList[activeDept].children[activeSegment]) == null ? void 0 : _a.children) && categoryList[activeDept].children[activeSegment].children.length > 0 ? categoryList[activeDept].children[activeSegment].children.map((segment, idx) => {
                      var _a2;
                      return /* @__PURE__ */ jsxs(
                        "div",
                        {
                          className: "py-1 my-1 pl-3 whitespace-nowrap w-full text-sm rounded-l-full cursor-pointer flex group justify-between transition-all ease-in-out duration-200 " + (activeType === idx ? "bg-white" : ""),
                          onMouseOver: () => setActiveType(idx),
                          onClick: () => {
                            router2("/ViewYata-React/category/" + segment.url_path);
                            toggleModalClose();
                            setActiveDept ? setActiveDept(null) : {};
                          },
                          children: [
                            /* @__PURE__ */ jsx(
                              "div",
                              {
                                className: `cursor-pointer break-words w-10/12 ${activeType === idx ? "text-yata" : "text-yata-brown"}`,
                                children: segment.name
                              }
                            ),
                            segment.children && ((_a2 = segment.children) == null ? void 0 : _a2.length) > 0 && /* @__PURE__ */ jsx("div", { className: "flex items-center w-2/12 pr-3", children: /* @__PURE__ */ jsx(
                              ChevronRightSvg,
                              {
                                width: 14,
                                height: 14,
                                fill: activeType === idx ? "#A6CE39" : "#6A3B0D"
                              }
                            ) })
                          ]
                        },
                        idx + segment.name + "-laptop"
                      );
                    }) : activeSegment !== null && activeDept !== null && /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "py-1 my-1 pl-3 whitespace-nowrap w-full text-sm rounded-l-full cursor-pointer flex group justify-between transition-all ease-in-out duration-200 hover:bg-white",
                        onClick: () => {
                          router2(
                            `/category/${categoryList[activeDept].children[activeSegment].url_path}`
                          );
                          toggleModalClose();
                        },
                        children: /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: `cursor-pointer w-10/12 hover:text-yata text-yata-brown`,
                            children: (_b = categoryList[activeDept].children[activeSegment]) == null ? void 0 : _b.name
                          }
                        )
                      }
                    ),
                    false
                  ] })
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "relative flex flex-col items-start w-2/6 pb-12 overflow-scroll bg-white scrollbar-hide min-h-80 pt-7 rounded-br-xl",
                  style: {
                    visibility: activeDept !== null ? "visible" : "hidden"
                  },
                  children: activeSegment !== null && activeDept !== null && activeType !== null && categoryList[activeDept].children[activeSegment].children && categoryList[activeDept].children[activeSegment].children.length > 0 && categoryList[activeDept].children[activeSegment].children[activeType].children && categoryList[activeDept].children[activeSegment].children[activeType].children.length > 0 ? (_c = categoryList[activeDept].children[activeSegment].children[activeType].children) == null ? void 0 : _c.map((type, idx) => /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "flex justify-between w-full px-6 py-1 my-1 text-sm transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap group hover:bg-yata",
                      onClick: () => {
                        router2(`/category/${type.url_path}`);
                        toggleModalClose();
                      },
                      children: /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: `cursor-pointer w-10/12 group-hover:text-white text-yata-brown`,
                          children: type.name
                        }
                      )
                    },
                    "sub-cat-laptop-" + idx
                  )) : /* @__PURE__ */ jsx(Fragment, {})
                }
              )
            ] }),
            onMobile && /* @__PURE__ */ jsx(Fragment, { children: activeDept !== null && categoryList[activeDept].children.length > 0 && categoryList[activeDept].children.map((dept, idxA) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "w-auto py-2 mb-3 ml-1 bg-white rounded-lg",
                children: [
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "flex items-center h-8 px-4 mb-2",
                      onClick: () => {
                        dispatch(closeDrawer());
                        router2(`/category/${dept.url_path}`);
                        toggleModalClose();
                      },
                      children: [
                        /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: imgUrl + `/homepage/navbar/categories/${categoryList[activeDept].url_key}/default.svg`,
                            className: "transition duration-300 ease-in-out w-7 h-7",
                            alt: dept.url_key
                          }
                        ),
                        /* @__PURE__ */ jsx("div", { className: "ml-2 font-bold", children: dept.name })
                      ]
                    }
                  ),
                  dept.children && dept.children.length > 0 ? dept.children.map((segment, idxB) => /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "flex flex-col w-full px-4 rounded-xl transition-all ease-out duration-300 " + (activeSegment === idxA && activeType === idxB ? "bg-[#F5F5F5] text-yata-medium my-2 py-1" : "bg-white my-1"),
                      children: [
                        /* @__PURE__ */ jsxs(
                          "div",
                          {
                            className: "flex items-center justify-between w-full ",
                            onClick: () => {
                              segment.children && segment.children.length > 0 ? [
                                setActiveSegment(idxA),
                                setActiveType(
                                  activeType === idxB ? null : idxB
                                )
                              ] : [
                                dispatch(closeDrawer()),
                                router2(`/category/${segment.url_path}`),
                                setActiveType(null)
                              ];
                            },
                            children: [
                              /* @__PURE__ */ jsx("div", { className: "py-1 text-sm", children: segment.name }),
                              segment.children && segment.children.length > 0 && /* @__PURE__ */ jsx(
                                ChevronDownSvg,
                                {
                                  width: 14,
                                  height: 14,
                                  fill: activeSegment === idxA && activeType === idxB ? "#82A70E" : "#6A3B0D",
                                  className: "transition-all ease-in-out duration-200 " + (activeSegment === idxA && activeType === idxB ? "rotate-180" : "rotate-0")
                                }
                              )
                            ]
                          },
                          `${segment.name}-mobile`
                        ),
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "w-full overflow-hidden transition-all duration-300 ease-out ",
                            style: {
                              height: activeSegment === idxA && activeType === idxB ? listHeight : 0
                            },
                            ref: segment.children && segment.children.length > 0 && activeSegment === idxA && activeType === idxB ? dropdownRef : null,
                            children: segment.children && segment.children.length > 0 && activeSegment === idxA && activeType === idxB && segment.children.map((type, idxC) => /* @__PURE__ */ jsx(
                              "div",
                              {
                                className: "w-full py-1 pl-4 text-sm font-light cursor-pointer text-yata-medium",
                                onClick: () => {
                                  dispatch(closeDrawer());
                                  router2(`/category/${type.url_path}`);
                                  setActiveType(null);
                                },
                                children: type.name
                              },
                              `sub-cat-mobile-${idxC}`
                            ))
                          }
                        )
                      ]
                    },
                    `mobile-drawer-tab-${idxB}`
                  )) : /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "px-4 py-1 text-sm ",
                      onClick: () => dispatch(closeDrawer()),
                      children: /* @__PURE__ */ jsx(
                        Link,
                        {
                          to: `/category/${categoryList[activeDept].children[idxA].url_path}`,
                          children: categoryList[activeDept].children[idxA].name
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: `/category/${categoryList[activeDept].children[idxA].url_path}`,
                      children: /* @__PURE__ */ jsxs(
                        "div",
                        {
                          className: ` py-1 flex px-4 text-sm`,
                          onClick: () => dispatch(closeDrawer()),
                          children: [
                            /* @__PURE__ */ jsx(
                              "div",
                              {
                                className: `cursor-pointer text-sm text-yata font-semibold mr-1`,
                                children: "全部產品"
                              }
                            ),
                            /* @__PURE__ */ jsx("div", { className: "flex items-center pr-3", children: /* @__PURE__ */ jsx(
                              ChevronRightSvg,
                              {
                                width: 14,
                                height: 14,
                                fill: "#A6CE39"
                              }
                            ) })
                          ]
                        }
                      )
                    }
                  )
                ]
              },
              `${idxA}-${dept.name}-mobile`
            )) })
          ]
        }
      )
    },
    `drop-down-${activeDept}`
  );
};
const Drawer = ({ isOpen, setIsOpen }) => {
  useNavigate();
  useLocation();
  const imgUrl = useAppSelector(selectImgUrl);
  const dispatch = useAppDispatch();
  const windowSize = useAppSelector(selectWindowSize);
  const isDrawerOpen = useAppSelector((state) => state.control.isDrawerOpen);
  const onMobile = windowSize === "mobile";
  reactExports.useEffect(() => {
    if (!onMobile) {
      dispatch(closeDrawer());
    }
  }, [windowSize]);
  const [activeDept, setActiveDept] = reactExports.useState(null);
  const [activeSegment, setActiveSegment] = reactExports.useState(0);
  const [activeType, setActiveType] = reactExports.useState(null);
  return /* @__PURE__ */ jsx(tt, { show: isDrawerOpen, as: reactExports.Fragment, children: /* @__PURE__ */ jsx(
    St,
    {
      unmount: true,
      onClose: () => dispatch(closeDrawer()),
      className: "fixed inset-0 z-50 overflow-y-auto ",
      children: /* @__PURE__ */ jsxs("div", { className: "flex w-screen h-auto overflow-y-auto", children: [
        /* @__PURE__ */ jsx(
          tt.Child,
          {
            as: reactExports.Fragment,
            enter: "transition-opacity ease-in duration-300 fixed inset-0",
            enterFrom: "opacity-0 invisible",
            enterTo: "opacity-30 visible",
            entered: "opacity-30",
            leave: "transition-opacity ease-out duration-300 fixed inset-0",
            leaveFrom: "opacity-30 visible",
            leaveTo: "opacity-0 invisible",
            children: /* @__PURE__ */ jsx(St.Overlay, { className: "fixed inset-0 z-50 bg-yata" })
          }
        ),
        /* @__PURE__ */ jsx(
          tt.Child,
          {
            as: reactExports.Fragment,
            enter: "transition ease-in duration-300 fixed inset-0 transform",
            enterFrom: "translate-x-[100vw]",
            enterTo: "translate-x-0",
            leave: "transition ease-in-out duration-300 fixed inset-0 transform",
            leaveFrom: "translate-x-0",
            leaveTo: "-translate-x-full",
            children: /* @__PURE__ */ jsxs("div", { className: "z-50 flex flex-col w-screen h-auto min-h-screen overflow-y-scroll text-left align-middle bg-yata-extra-light ", children: [
              /* @__PURE__ */ jsx("div", { className: "fixed top-0 z-50 w-full h-16 bg-yata", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-full px-4 py-2", children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => dispatch(closeDrawer()),
                    className: "flex items-center",
                    children: /* @__PURE__ */ jsx("img", { src: imgUrl + "/common/arrow/arrow-left-solid.svg", alt: "pic", className: "w-7 h-7" })
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "flex", children: [
                  /* @__PURE__ */ jsx(LoginButton, {}),
                  /* @__PURE__ */ jsx(MoreButton, {})
                ] })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "mt-16 mb-12", children: [
                /* @__PURE__ */ jsx(SearchBar, { window: WindowScreen.mobile }),
                /* @__PURE__ */ jsxs("div", { className: "relative flex p-2 pr-3 transition-all duration-500 ease-in-out", children: [
                  /* @__PURE__ */ jsx(
                    NavBarButtons$1,
                    {
                      activeDept: activeDept === null ? 0 : activeDept,
                      setActiveDept,
                      over: null,
                      setOver: () => null
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    DropDownList,
                    {
                      activeDept: activeDept === null ? 0 : activeDept,
                      activeSegment,
                      activeType,
                      setActiveDept,
                      setActiveSegment,
                      setActiveType
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsx(Footer, {})
            ] })
          }
        )
      ] })
    }
  ) });
};
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    const isBaseRelative = !!importerUrl;
    if (isBaseRelative) {
      for (let i2 = links.length - 1; i2 >= 0; i2--) {
        const link2 = links[i2];
        if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
const NavBarButtons = reactExports.lazy(() => __vitePreload(() => Promise.resolve().then(() => NavBarButtons$2), true ? void 0 : void 0));
const SessionModal = reactExports.lazy(() => __vitePreload(() => import("./SessionExpiredModal-40733abb.js"), true ? [] : void 0));
const Navbar = () => {
  useAppDispatch();
  useNavigate();
  const location = useLocation();
  useAppSelector(selectWindowSize);
  const isAdmin = useAppSelector(selectIsAdmin);
  const [over, setOver] = reactExports.useState(null);
  const [activeDept, setActiveDept] = reactExports.useState(null);
  const [activeSegment, setActiveSegment] = reactExports.useState(0);
  const [activeType, setActiveType] = reactExports.useState(null);
  const atPaymentPage = location.pathname === "/shopping-cart/confirmation";
  const atAdminLoginPage = location.pathname === "/admin/login";
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
    "nav",
    {
      className: "sticky items-center justify-between hidden w-screen px-0 transition-all duration-500 lg:flex lg:z-40 rangeLg:px-8 bottom-0 rangeXl:px-24 2xl:px-40 bg-yata " + (atPaymentPage || atAdminLoginPage ? "h-0 top-full pointer-events-none invisible" : "h-[3.5rem] top-0 translate-y-0 visible "),
      onMouseLeave: () => {
        setActiveDept(null);
        setOver(null);
        setActiveSegment(0);
        setActiveType(null);
      },
      children: [
        /* @__PURE__ */ jsx("div", { className: "relative flex items-center w-3/5 h-full overflow-x-scroll scrollbar-hide ", children: !(atAdminLoginPage || isAdmin) && /* @__PURE__ */ jsx(
          NavBarButtons,
          {
            activeDept,
            setActiveDept,
            over,
            setOver
          }
        ) }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "relative flex items-center transition-all duration-500 ease-in-out " + (atPaymentPage ? "h-0 pointer-events-none invisible" : "h-full visible "),
            children: [
              /* @__PURE__ */ jsx(LoginButton, {}),
              !(atAdminLoginPage || isAdmin) && /* @__PURE__ */ jsx(ShoppingCartButton, { window: WindowScreen.laptop })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          DropDownList,
          {
            activeDept,
            activeSegment,
            activeType,
            setActiveSegment,
            setActiveDept,
            setActiveType
          }
        ),
        /* @__PURE__ */ jsx(SessionModal, {})
      ]
    }
  ) });
};
const Header = () => {
  const imgUrl = useAppSelector(selectImgUrl);
  const router2 = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  useAppSelector(selectIsCheckOut);
  const isAdmin = useAppSelector(selectIsAdmin);
  const windowSize = useAppSelector(selectWindowSize);
  useAppSelector(selectAdminUserInfo);
  const atPaymentPage = location.pathname === "/shopping-cart/confirmation";
  const atAdminLoginPage = location.pathname === "/admin/login";
  const atAdminPickUpPage = location.pathname === "/admin/pickup/[id]";
  const atAdminMemberLoginPage = location.pathname === "/admin/login-member";
  const atSpecialPage = atPaymentPage || atAdminLoginPage || atAdminPickUpPage;
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: "fixed top-0 z-50 flex flex-col justify-center w-full transition-all duration-300 ease-in-out bg-white " + (atPaymentPage || atAdminLoginPage ? "shadow-md " : ""),
      style: {
        height: windowSize == "laptop" ? "8rem" : "4rem"
      },
      children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between w-full p-4 lg:py-3 lg:justify-center", children: /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "flex items-center justify-center transition-all ease-in-out duration-300 " + (atSpecialPage ? "w-full" : `w-48 lg:w-80 ${atAdminMemberLoginPage || isAdmin ? "" : "cursor-pointer "}`),
              onClick: () => atSpecialPage || atAdminMemberLoginPage || isAdmin ? {} : router2("/ViewYata-React/"),
              children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: "relative flex items-center aspect-[468/110] transition-all ease-in-out duration-300 " + (atSpecialPage ? "underLg:max-w-[10rem] lg:w-60" : "underLg:min-w-[4rem] underLg:max-w-[10rem] lg:w-48"),
                  children: /* @__PURE__ */ jsx("img", { src: imgUrl + "/homepage/navbar/logo_yata.svg", alt: "yata_eshop_logo", className: "object-contain" })
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(SearchBar, { window: WindowScreen.laptop }),
          /* @__PURE__ */ jsx(OtherButtons, { window: WindowScreen.laptop }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "flex items-center lg:hidden " + (atSpecialPage ? "opacity-0 w-0 pointer-events-none invisible" : atAdminMemberLoginPage ? "opacity-0 w-auto invisible" : "opacity-100 w-auto visible"),
              children: !isAdmin ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(ShoppingCartButton, { window: WindowScreen.mobile }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    className: "flex justify-center lg:hidden item-center",
                    onClick: () => isLoading ? {} : dispatch(openDrawer()),
                    children: /* @__PURE__ */ jsx("img", { src: imgUrl + "/mobile/menuAndSearch.svg", alt: "menu-and-search", className: "object-contain w-8 h-8" })
                  }
                ),
                /* @__PURE__ */ jsx(Drawer, {})
              ] }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(LoginButton, {}) })
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx(Navbar, {})
      ]
    }
  );
};
const Main = () => {
  const dispatch = useAppDispatch();
  const [carousel, setCarousel] = reactExports.useState([]);
  const [banners, setBanner] = reactExports.useState(initBannerList);
  const size = useWindowSize();
  console.log("({}).:", { "VITE_IMGURL": "./img", "VITE_URL": "/ViewYata-React/", "VITE_NEXTAUTH_URL": "https://eshop.yata.hk", "VITE_APP_API_URL": "https://yatacustomerappserviceprod.azurewebsites.net/api", "VITE_APP_API_URL_DLVY": "https://yataeshopcustomerappserviceprod.azurewebsites.net/api", "VITE_EC_API_URL": "https://yataapi.azurefd.net/eshop/api", "VITE_CS_API_URL": "https://prod-19.southeastasia.logic.azure.com:443/workflows/91662aa6f1944fa884bab2a5c9274a8b/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=99Uon6YuK9MUQYueNnSOsRbRILfs5DMP_TYEuUrTy2g", "VITE_PAYMENT_API_URL": "https://recon.cityline.com/ws/b2cPay", "VITE_PAYMENT_API_TOKEN": "28253eac-fd1b-470c-aa87-eb8a63967367", "VITE_ENCRYPTED_SECRET": "yata-eshop-can-satisfy-all-your-need", "VITE_AUTH_TENANT_NAME": "yatafans", "VITE_AUTH_CLIENT_ID": "2a8e3ebb-a320-4091-aaf4-ad73dbc24304", "VITE_AUTH_CRM_SCOPE": "https://yatafans.onmicrosoft.com/f10e1c0a-7e6f-4a4f-86cc-f29123a38800/YataFansAppBackend", "VITE_AUTH_CLIENT_SECRET": "FvW8Q~42f94YV.nqP~QN4GiA-XgVwf4vpnRVgc~s", "VITE_AUTH_CLIENT_SECRET_ID": "1c51cd3e-d888-4b8f-8324-d17c4b01c388", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": false });
  reactExports.useEffect(() => {
    dispatch(onLoading());
    localStorage.getItem("pickup_location_code");
    dispatch(getCategoryListThunk());
    dispatch(getConfigDataThunk());
    dispatch(getPickupStoresThunk());
    const getBannersAndCarousel = async () => {
      const middleBanner = await getBannerImageApi("homepage-middle-banner");
      const narrowImage = await getBannerImageApi(
        "homepage-middle-narrow-banner"
      );
      const bottomImage = await getBannerImageApi("homepage-bottom");
      const homeSlider = await getBannerImageApi("homepage-top-slider");
      const result = await dispatch(getCarouselApi(1));
      setTimeout(() => {
        setBanner({
          topSlider: homeSlider,
          middleBanner,
          narrowBanner: narrowImage,
          bottomBanner: bottomImage
        });
        if (result.payload)
          setCarousel(result.payload.items);
        dispatch(onLoaded());
      }, 1e3);
    };
    getBannersAndCarousel();
  }, [dispatch]);
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") {
      if (size.width >= 1024) {
        dispatch(onLaptopSize());
      } else if (size.width < 1024) {
        dispatch(onMobileSize());
      }
    }
  }, [size]);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col overflow-y-auto", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "flex-1 pt-[4rem] lg:pt-[7.75rem] overflow-x-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxs(Routes, { children: [
        router.map(({ path, component: RouteComp }, idx) => /* @__PURE__ */ jsx(Route, { path, element: /* @__PURE__ */ jsx(RouteComp, {}) }, `${idx}`)),
        /* @__PURE__ */ jsx(Route, { path: categoriesList.path, element: /* @__PURE__ */ jsx(categoriesList.component, {}), children: /* @__PURE__ */ jsx(Route, { path: categoriesList.department.path, children: /* @__PURE__ */ jsx(Route, { path: categoriesList.department.segment.path, children: /* @__PURE__ */ jsx(Route, { path: categoriesList.department.segment.type.path, element: /* @__PURE__ */ jsx(categoriesList.department.segment.type.component, {}) }) }) }) })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
const App = () => {
  return /* @__PURE__ */ jsx(ContextWrapper, { children: /* @__PURE__ */ jsx(Main, {}) });
};
const index = "";
const container = document.getElementById("app");
const FullApp = () => /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(BrowserRouter, { children: /* @__PURE__ */ jsx(Provider$1, { store, children: /* @__PURE__ */ jsx(App, {}) }) }) });
if (!(container == null ? void 0 : container.innerText)) {
  const root = createRoot(container);
  root.render(/* @__PURE__ */ jsx(FullApp, {}));
} else {
  hydrateRoot(container, /* @__PURE__ */ jsx(FullApp, {}));
}
export {
  AnimatedModalOverlay as A,
  useAppSelector as a,
  useNavigate as b,
  selectImgUrl as c,
  jsxs as d,
  closeCommonModal as e,
  jsx as j,
  openLoginModal as o,
  selectIsCommonModalOpen as s,
  useAppDispatch as u
};
